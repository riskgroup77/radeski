(function () {
  // Hot-reload: yangi versiya API ni almashtiradi, listener bir marta
  const API_VERSION = 7;

  const REQUEST_RE = /ЗАПРОСИТЬ\s*ИНДЕКСИРОВАНИЕ|Запросить\s*индексирование|Request\s*indexing/i;
  const REQUEST_EXACT_RE = /^(ЗАПРОСИТЬ\s*ИНДЕКСИРОВАНИЕ|Запросить\s*индексирование|Request\s*indexing)$/i;
  const SUCCESS_RE = /Отправлен запрос на индексирование|Indexing request (sent|received)|добавлен в приоритетную очередь/i;
  const VALIDATING_RE =
    /Проверяется возможность индексации|Testing if live URL can be indexed|Это может занять одну-две минуты|This may take a minute or two/i;
  const CLOSE_EXACT_RE = /^(Закрыть|Close)$/i;
  const CANCEL_EXACT_RE = /^(Отмена|Cancel)$/i;
  const QUOTA_RE = /квота|quota|исчерпан|daily limit/i;
  const ON_INDEX_RE = /URL есть в индексе Google|URL is on Google/i;
  const NOT_ON_INDEX_RE = /URL нет в индексе Google|URL is not on Google/i;

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  function bodyText() {
    return document.body?.innerText || "";
  }

  function isValidating() {
    return VALIDATING_RE.test(bodyText());
  }

  function isSuccess() {
    return SUCCESS_RE.test(bodyText());
  }

  function visible(el) {
    if (!el || !(el instanceof Element)) return false;
    const st = getComputedStyle(el);
    if (st.display === "none" || st.visibility === "hidden" || Number(st.opacity) === 0) return false;
    const r = el.getBoundingClientRect();
    return r.width > 1 && r.height > 1;
  }

  function collectAllElements(root = document) {
    const out = [];
    const visit = (node) => {
      if (!node) return;
      if (node.nodeType === 1) {
        out.push(node);
        if (node.shadowRoot) visit(node.shadowRoot);
      }
      const children = node.children || node.childNodes;
      if (!children) return;
      for (const child of children) {
        if (child.nodeType === 1) visit(child);
      }
    };
    if (root === document) visit(document.documentElement);
    else visit(root);
    return out;
  }

  function textOf(el) {
    return (el.innerText || el.textContent || "").trim().replace(/\s+/g, " ");
  }

  function isCancelEl(el) {
    if (!el) return false;
    return CANCEL_EXACT_RE.test(textOf(el));
  }

  function findExactLabel(regex) {
    const all = collectAllElements();
    let best = null;
    for (const el of all) {
      if (!visible(el)) continue;
      const t = textOf(el);
      if (!t || t.length > 40) continue;
      if (!regex.test(t)) continue;
      if (CANCEL_EXACT_RE.test(t)) continue;
      if (!best || t.length <= textOf(best).length) best = el;
    }
    return best;
  }

  function findInspectInput() {
    const inputs = collectAllElements().filter((el) => {
      const tag = el.tagName;
      if (tag === "INPUT") {
        const type = (el.getAttribute("type") || "text").toLowerCase();
        return ["text", "search", "url", ""].includes(type) || !el.getAttribute("type");
      }
      return tag === "TEXTAREA" || el.getAttribute("contenteditable") === "true";
    });
    const scored = [];
    for (const el of inputs) {
      if (!visible(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.top > 180 || r.width < 160) continue;
      const ph = (el.getAttribute("placeholder") || "").toLowerCase();
      const aria = (el.getAttribute("aria-label") || "").toLowerCase();
      let score = 1000 - r.top;
      if (/url|inspect|провер|http|ресурс/i.test(ph + " " + aria)) score += 500;
      if (r.width > 320) score += 80;
      scored.push({ el, score });
    }
    scored.sort((a, b) => b.score - a.score);
    return scored[0]?.el || null;
  }

  function setNativeValue(el, value) {
    if (el.isContentEditable) {
      el.focus();
      el.textContent = value;
      el.dispatchEvent(new InputEvent("input", { bubbles: true, data: value, inputType: "insertText" }));
      return;
    }
    const proto = el.tagName === "TEXTAREA" ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
    el.focus();
    if (setter) setter.call(el, value);
    else el.value = value;
    el.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
    el.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true, data: value, inputType: "insertText" }));
    el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  }

  function pressEnter(el) {
    el.focus();
    const opts = {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      which: 13,
      charCode: 13,
      bubbles: true,
      cancelable: true,
      composed: true,
      view: window,
    };
    for (const type of ["keydown", "keypress", "keyup"]) {
      el.dispatchEvent(new KeyboardEvent(type, opts));
    }
    const form = el.closest("form");
    if (form) {
      try {
        if (typeof form.requestSubmit === "function") form.requestSubmit();
        else form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
      } catch (_) {}
    }
  }

  async function submitInspect(pageUrl) {
    const input = findInspectInput();
    if (!input) return "no_inspect_input";

    input.click();
    await sleep(150);
    setNativeValue(input, "");
    await sleep(120);
    setNativeValue(input, pageUrl);
    await sleep(300);

    pressEnter(input);
    await sleep(200);
    pressEnter(document.activeElement || input);
    return "submitted";
  }

  async function waitInspectResult(timeoutMs = 70000) {
    const start = Date.now();
    let sawStatus = false;
    while (Date.now() - start < timeoutMs) {
      const body = bodyText();
      if (QUOTA_RE.test(body)) return "quota";
      if (/404\.\s*Произошла ошибка|That’s an error|Не удалось найти запрошенный URL/i.test(body)) {
        return "gsc_404";
      }
      if (findRequestButton()) return "ready_has_button";
      if (ON_INDEX_RE.test(body) || NOT_ON_INDEX_RE.test(body)) sawStatus = true;
      await sleep(500);
    }
    if (sawStatus) return "ready_status";
    return "timeout";
  }

  function resolveClickable(el) {
    let cur = el;
    for (let i = 0; i < 10 && cur; i++) {
      if (isCancelEl(cur)) return null;
      const tag = (cur.tagName || "").toLowerCase();
      const role = cur.getAttribute?.("role") || "";
      const jsaction = cur.getAttribute?.("jsaction") || "";
      if (tag === "button" || tag === "a" || role === "button" || role === "link" || jsaction) {
        return cur;
      }
      cur = cur.parentElement;
    }
    return el;
  }

  function findRequestButton() {
    if (isValidating()) return null; // validating dialog open — do not poke request again
    const all = collectAllElements();
    const exact = [];
    for (const el of all) {
      if (!visible(el) || isCancelEl(el)) continue;
      const t = textOf(el);
      if (!t || t.length > 70) continue;
      if (!REQUEST_EXACT_RE.test(t)) continue;
      exact.push(el);
    }
    if (!exact.length) return null;
    for (const el of exact) {
      const block = textOf(el.parentElement || el);
      if (/Страница изменена|Page changed/i.test(block)) return resolveClickable(el);
    }
    exact.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
    return resolveClickable(exact[exact.length - 1]);
  }

  function findCloseButton() {
    const el = findExactLabel(CLOSE_EXACT_RE);
    if (!el || isCancelEl(el)) return null;
    return resolveClickable(el);
  }

  function clickHard(el) {
    if (!el || isCancelEl(el)) return false;
    const target = resolveClickable(el);
    if (!target || isCancelEl(target)) return false;
    // Absolute never-click Cancel
    if (CANCEL_EXACT_RE.test(textOf(target))) return false;

    try {
      target.scrollIntoView({ block: "center", inline: "nearest" });
    } catch (_) {}

    const r = target.getBoundingClientRect();
    const x = Math.round(r.left + Math.max(2, r.width / 2));
    const y = Math.round(r.top + Math.max(2, r.height / 2));
    const base = {
      bubbles: true,
      cancelable: true,
      composed: true,
      view: window,
      clientX: x,
      clientY: y,
      button: 0,
      buttons: 1,
      pointerId: 1,
      pointerType: "mouse",
      isPrimary: true,
    };

    try {
      target.focus?.();
    } catch (_) {}

    try {
      target.dispatchEvent(new PointerEvent("pointerdown", base));
      target.dispatchEvent(new MouseEvent("mousedown", base));
      target.dispatchEvent(new MouseEvent("mouseup", { ...base, buttons: 0 }));
      target.dispatchEvent(new PointerEvent("pointerup", { ...base, buttons: 0 }));
      target.dispatchEvent(new MouseEvent("click", { ...base, buttons: 0 }));
    } catch (_) {}

    try {
      target.click();
    } catch (_) {}

    // elementFromPoint faqat Cancel emasligini tekshirib
    try {
      const top = document.elementFromPoint(x, y);
      if (top && !isCancelEl(top) && !CANCEL_EXACT_RE.test(textOf(top))) {
        const up = resolveClickable(top);
        if (up && !isCancelEl(up) && CLOSE_EXACT_RE.test(textOf(up)) === CLOSE_EXACT_RE.test(textOf(target))) {
          // only mirror-click if same kind of action
          if (REQUEST_RE.test(textOf(target)) && REQUEST_RE.test(textOf(up))) up.click();
          if (CLOSE_EXACT_RE.test(textOf(target)) && CLOSE_EXACT_RE.test(textOf(up))) up.click();
        }
      }
    } catch (_) {}

    return true;
  }

  async function waitForRequestButton(timeoutMs = 40000) {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      if (isSuccess()) return null;
      if (QUOTA_RE.test(bodyText())) return null;
      const btn = findRequestButton();
      if (btn) return btn;
      await sleep(400);
    }
    return findRequestButton();
  }

  /**
   * Flow:
   * 1) Click ЗАПРОСИТЬ once (+ optional confirm once)
   * 2) If "Проверяется возможность…" → WAIT, NEVER click Отмена
   * 3) When "Отправлен запрос…" → click Закрыть only
   */
  async function clickRequest() {
    let btn = await waitForRequestButton(40000);
    if (!btn) {
      const body = bodyText();
      if (isSuccess()) {
        const closeBtn = findCloseButton();
        if (closeBtn) clickHard(closeBtn);
        return "requested_already";
      }
      if (ON_INDEX_RE.test(body) && !REQUEST_RE.test(body)) return "indexed_no_request_btn";
      if (NOT_ON_INDEX_RE.test(body)) return "not_indexed_no_request_btn";
      return "no_button";
    }

    // Single primary click
    clickHard(btn);
    await sleep(700);

    // Optional one confirm (same label) BEFORE validating starts — max 1 extra click
    if (!isValidating() && !isSuccess()) {
      for (let i = 0; i < 6; i++) {
        if (isValidating() || isSuccess()) break;
        const confirm = findRequestButton();
        if (confirm) {
          clickHard(confirm);
          await sleep(700);
          break;
        }
        await sleep(350);
      }
    }

    // === CRITICAL WAIT: validating dialog — do nothing except wait ===
    const deadline = Date.now() + 150000; // ~2.5 min (UI says 1–2 min)
    let sawValidating = false;

    while (Date.now() < deadline) {
      if (QUOTA_RE.test(bodyText())) return "quota";

      if (isValidating()) {
        sawValidating = true;
        // NEVER click Отмена / Запросить / anything here
        await sleep(1000);
        continue;
      }

      if (isSuccess()) {
        await sleep(400);
        const closeBtn = findCloseButton();
        if (closeBtn) {
          clickHard(closeBtn);
          await sleep(600);
        }
        return "requested";
      }

      // Not validating and not success yet — keep waiting a bit (dialog may swap)
      if (sawValidating) {
        await sleep(800);
        continue;
      }

      // Validating never appeared — still wait a bit for success after click
      await sleep(800);
    }

    if (isSuccess()) {
      const closeBtn = findCloseButton();
      if (closeBtn) clickHard(closeBtn);
      return "requested";
    }
    if (isValidating()) return "still_validating_timeout";
    return "no_success_dialog";
  }

  async function inspectAndRequest(pageUrl) {
    if (/404\.\s*Произошла ошибка|That’s an error/i.test(bodyText())) {
      return "gsc_404_page";
    }
    if (!/search\.google\.com/i.test(location.hostname) || !/search-console/i.test(location.pathname)) {
      return "not_on_gsc";
    }

    const sub = await submitInspect(pageUrl);
    if (sub === "no_inspect_input") return sub;

    const wait = await waitInspectResult();
    if (wait === "quota") return "quota";
    if (wait === "gsc_404") return "gsc_404";
    if (wait === "timeout") {
      const input = findInspectInput();
      if (input) {
        setNativeValue(input, pageUrl);
        pressEnter(input);
        const wait2 = await waitInspectResult(40000);
        if (wait2 === "ready_has_button" || wait2 === "ready_status") {
          await sleep(1000);
          return wait2 === "ready_has_button" ? "inspect_ready_btn" : "inspect_ready";
        }
        return "timeout_after_retry";
      }
      return "timeout_load";
    }

    await sleep(1000);
    return wait === "ready_has_button" ? "inspect_ready_btn" : "inspect_ready";
  }

  window.__radeskiGscApi = {
    version: API_VERSION,
    inspectAndRequest,
    clickRequest,
  };

  if (!window.__radeskiGscListenerBound) {
    window.__radeskiGscListenerBound = true;
    chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
      const api = window.__radeskiGscApi;
      if (msg.type === "INSPECT_AND_REQUEST") {
        api
          .inspectAndRequest(msg.pageUrl)
          .then((result) => sendResponse({ result }))
          .catch((e) => sendResponse({ result: "error:" + (e && e.message) }));
        return true;
      }
      if (msg.type === "CLICK_REQUEST_ONLY") {
        api
          .clickRequest()
          .then((result) => sendResponse({ result }))
          .catch((e) => sendResponse({ result: "error:" + (e && e.message) }));
        return true;
      }
    });
  }
})();
