const DEFAULT_RESOURCE = "https://radeski.uz/";

const DEFAULT_URLS = `https://radeski.uz/uz/qoqon
https://radeski.uz/uz/services/dermatologiya
https://radeski.uz/uz/services/apparatnaya-kosmetologiya
https://radeski.uz/uz/articles/art-pryshchi-u-vzroslykh
https://radeski.uz/uz/articles/art-psoriasis-daavlin-kokand
https://radeski.uz/uz
https://radeski.uz/uz/services
https://radeski.uz/uz/services/dermatologiya/fototerapiya
https://radeski.uz/uz/services/lazernaya-epilyaciya
https://radeski.uz/uz/services/lazernaya-epilyaciya/alex-lazer
https://radeski.uz/uz/services/apparatnaya-kosmetologiya/ipl-inmode
https://radeski.uz/uz/branches
https://radeski.uz/uz/doctors
https://radeski.uz/uz/articles
https://radeski.uz/uz/prices
https://radeski.uz/uz/articles/art-akne
https://radeski.uz/uz/articles/art-postakne
https://radeski.uz/uz/articles/art-vitiligo-daavlin
https://radeski.uz/uz/articles/art-ipl-terapiya
https://radeski.uz/uz/articles/art-rozatseya-davolash-radeski
https://radeski.uz/uz/articles/art-bolalarda-sogal-co2-deka
https://radeski.uz/uz/articles/art-deka-moveo-epilyatsiya-tayyorgarlik
https://radeski.uz/uz/articles/art-plazmotorapiya-soch-prp
https://radeski.uz/uz/articles/art-plazmaferez-teri-kasalliklari
https://radeski.uz/uz/articles/art-hair-transplant-contraindications
https://radeski.uz/uz/articles/art-co2-lazer-deka
https://radeski.uz/uz/about
https://radeski.uz/uz/videos
https://radeski.uz/uz/results
https://radeski.uz/uz/technologies
https://radeski.uz/uz/clinic-equipment
https://radeski.uz/uz/services/in-ekcionnaya-kosmetologiya
https://radeski.uz/uz/services/trihologiya-centr-lechenie-volos
https://radeski.uz/uz/services/dermatoonkologiya
https://radeski.uz/uz/services/hirurgicheskaya-dermatologiya
https://radeski.uz/ru
https://radeski.uz/ru/qoqon
https://radeski.uz/ru/services/dermatologiya
https://radeski.uz/ru/services/apparatnaya-kosmetologiya
https://radeski.uz/ru/articles/art-pryshchi-u-vzroslykh
https://radeski.uz/ru/articles/art-psoriasis-daavlin-kokand`;

function normalizePageUrl(raw) {
  let u = String(raw || "").trim();
  if (!u) return "";
  u = u.replace(/^(https?:\/\/[^/]+)\/{2,}/i, "$1/");
  u = u.replace(/([^:]\/)\/+/g, "$1");
  try {
    const parsed = new URL(u);
    if (!/^https?:$/i.test(parsed.protocol)) return "";
    if (parsed.pathname.length > 1 && parsed.pathname.endsWith("/")) {
      parsed.pathname = parsed.pathname.replace(/\/+$/, "");
    }
    return parsed.toString().replace(/\/$/, parsed.pathname === "/" ? "/" : "");
  } catch {
    return "";
  }
}

function parseUrls(text) {
  return [
    ...new Set(
      String(text || "")
        .split(/\r?\n/)
        .map((l) => normalizePageUrl(l))
        .filter(Boolean)
    ),
  ];
}

/** From open GSC tab, e.g. https://search.google.com/u/0/search-console?... */
function detectGscBase(tabUrl) {
  try {
    const u = new URL(tabUrl);
    if (!/search\.google\.com$/i.test(u.hostname)) return null;
    const m = u.pathname.match(/^(\/u\/\d+)?\/search-console/);
    if (!m) return null;
    const prefix = m[1] || "";
    return `https://search.google.com${prefix}/search-console`;
  } catch {
    return null;
  }
}

async function getState() {
  return chrome.storage.local.get({
    running: false,
    urls: parseUrls(DEFAULT_URLS),
    index: 0,
    resourceId: DEFAULT_RESOURCE,
    delaySec: 60,
    tabId: null,
    gscBase: "https://search.google.com/u/0/search-console",
    lastResult: "",
    log: [],
  });
}

async function setState(patch) {
  await chrome.storage.local.set(patch);
}

async function pushLog(line) {
  const st = await getState();
  const log = [...(st.log || []).slice(-100), `${new Date().toLocaleTimeString()} ${line}`];
  await setState({ log, lastResult: line });
}

async function ensureGscTab(st) {
  let tabId = st.tabId;
  try {
    if (tabId != null) await chrome.tabs.get(tabId);
    else tabId = null;
  } catch {
    tabId = null;
  }

  const resource = (st.resourceId || DEFAULT_RESOURCE).endsWith("/")
    ? st.resourceId || DEFAULT_RESOURCE
    : (st.resourceId || DEFAULT_RESOURCE) + "/";

  const bases = [
    st.gscBase,
    "https://search.google.com/u/0/search-console",
    "https://search.google.com/u/1/search-console",
    "https://search.google.com/search-console",
  ].filter(Boolean);

  const home = `${bases[0]}?resource_id=${encodeURIComponent(resource)}`;

  if (tabId == null) {
    const tab = await chrome.tabs.create({ url: home, active: true });
    tabId = tab.id;
    await setState({ tabId });
  } else {
    const tab = await chrome.tabs.get(tabId);
    const base = detectGscBase(tab.url || "");
    if (base) await setState({ gscBase: base });
    // Stay on existing GSC tab — do not jump to broken deep links
    if (!/search\.google\.com\/.*search-console/i.test(tab.url || "")) {
      await chrome.tabs.update(tabId, { url: home, active: true });
      await waitTabComplete(tabId);
    } else {
      await chrome.tabs.update(tabId, { active: true });
    }
  }
  return tabId;
}

function waitTabComplete(tabId, timeoutMs = 45000) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      chrome.tabs.onUpdated.removeListener(listener);
      resolve(false);
    }, timeoutMs);
    function listener(id, info) {
      if (id === tabId && info.status === "complete") {
        clearTimeout(timer);
        chrome.tabs.onUpdated.removeListener(listener);
        resolve(true);
      }
    }
    chrome.tabs.onUpdated.addListener(listener);
    chrome.tabs.get(tabId).then((t) => {
      if (t.status === "complete") {
        clearTimeout(timer);
        chrome.tabs.onUpdated.removeListener(listener);
        resolve(true);
      }
    }).catch(() => {});
  });
}

/** MAIN world: Запросить 1× qattiq → kutish (Отмена YO‘Q) → Закрыть qattiq */
async function forceClickRequestMainWorld(tabId) {
  try {
    const injected = await chrome.scripting.executeScript({
      target: { tabId },
      world: "MAIN",
      func: async () => {
        const EXACT = /^(ЗАПРОСИТЬ\s*ИНДЕКСИРОВАНИЕ|Запросить\s*индексирование|Request\s*indexing)$/i;
        const HAS_REQ = /ЗАПРОСИТЬ\s*ИНДЕКСИРОВАНИЕ|Запросить\s*индексирование|Request\s*indexing/i;
        const SUCCESS = /Отправлен запрос на индексирование|Indexing request (sent|received)|добавлен в приоритетную очередь/i;
        const VALIDATING =
          /Проверяется возможность индексации|Testing if live URL can be indexed|Это может занять одну-две минуты|This may take a minute or two/i;
        const CLOSE = /^(Закрыть|Close)$/i;
        const CANCEL = /^(Отмена|Cancel)$/i;
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

        function allEls(root, out = []) {
          if (!root) return out;
          const nodes = root.querySelectorAll ? root.querySelectorAll("*") : [];
          for (const el of nodes) {
            out.push(el);
            if (el.shadowRoot) allEls(el.shadowRoot, out);
          }
          return out;
        }

        function vis(el) {
          if (!el || !el.getBoundingClientRect) return false;
          const r = el.getBoundingClientRect();
          const st = getComputedStyle(el);
          return r.width > 1 && r.height > 1 && st.display !== "none" && st.visibility !== "hidden" && Number(st.opacity) > 0;
        }

        function txt(el) {
          return (el.innerText || el.textContent || "").trim().replace(/\s+/g, " ");
        }

        function body() {
          return document.body?.innerText || "";
        }

        function isCancel(el) {
          return !!(el && CANCEL.test(txt(el)));
        }

        function resolve(el) {
          let cur = el;
          for (let i = 0; i < 14 && cur; i++) {
            if (isCancel(cur)) return null;
            const tag = (cur.tagName || "").toLowerCase();
            const role = cur.getAttribute?.("role") || "";
            if (
              tag === "button" ||
              tag === "a" ||
              role === "button" ||
              role === "link" ||
              cur.getAttribute?.("jsaction") ||
              cur.getAttribute?.("jscontroller") ||
              cur.hasAttribute?.("aria-label")
            ) {
              return cur;
            }
            cur = cur.parentElement;
          }
          return el;
        }

        function walkTextNodes(root, fn) {
          if (!root) return;
          if (root.shadowRoot) walkTextNodes(root.shadowRoot, fn);
          const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
          let n;
          while ((n = tw.nextNode())) fn(n);
          const kids = root.querySelectorAll ? root.querySelectorAll("*") : [];
          for (const el of kids) {
            if (el.shadowRoot) walkTextNodes(el.shadowRoot, fn);
          }
        }

        function findByExactText(re) {
          let best = null;
          walkTextNodes(document.body || document.documentElement, (node) => {
            const t = (node.textContent || "").trim().replace(/\s+/g, " ");
            if (!t || t.length > 60) return;
            if (!re.test(t)) return;
            if (CANCEL.test(t)) return;
            const el = node.parentElement;
            if (!el || !vis(el)) return;
            if (!best || t.length <= txt(best).length) best = el;
          });
          for (const el of allEls(document)) {
            if (!vis(el) || isCancel(el)) continue;
            const t = txt(el);
            if (!t || t.length > 60) continue;
            if (!re.test(t)) continue;
            if (!best || t.length <= txt(best).length) best = el;
          }
          return best ? resolve(best) : null;
        }

        function findRequest() {
          if (VALIDATING.test(body())) return null;
          // 1) exact leaf text
          let el = findByExactText(EXACT);
          if (el && !isCancel(el)) return el;
          // 2) near "Страница изменена"
          for (const node of allEls(document)) {
            if (!vis(node)) continue;
            const t = txt(node);
            if (!t || t.length > 80) continue;
            if (/Страница изменена|Page changed/i.test(t) && HAS_REQ.test(t)) {
              // dig child with exact request text
              for (const child of allEls(node)) {
                if (EXACT.test(txt(child)) && vis(child)) {
                  const r = resolve(child);
                  if (r && !isCancel(r)) return r;
                }
              }
              const r = resolve(node);
              if (r && !isCancel(r) && HAS_REQ.test(txt(r))) return r;
            }
          }
          return null;
        }

        function findClose() {
          return findByExactText(CLOSE);
        }

        function hardClick(el) {
          if (!el || isCancel(el)) return false;
          const t = resolve(el) || el;
          if (!t || isCancel(t)) return false;
          if (CANCEL.test(txt(t))) return false;

          try {
            t.scrollIntoView({ block: "center", inline: "nearest" });
          } catch (_) {}

          const r = t.getBoundingClientRect();
          const x = Math.round(r.left + Math.max(3, r.width / 2));
          const y = Math.round(r.top + Math.max(3, r.height / 2));
          const o = {
            bubbles: true,
            cancelable: true,
            composed: true,
            view: window,
            clientX: x,
            clientY: y,
            screenX: x,
            screenY: y,
            button: 0,
            buttons: 1,
            detail: 1,
          };

          try {
            t.focus?.();
          } catch (_) {}

          // Full pointer/mouse sequence
          try {
            t.dispatchEvent(new PointerEvent("pointerover", { ...o, pointerId: 1, pointerType: "mouse", isPrimary: true }));
            t.dispatchEvent(new PointerEvent("pointerenter", { ...o, pointerId: 1, pointerType: "mouse", isPrimary: true }));
            t.dispatchEvent(new MouseEvent("mouseover", o));
            t.dispatchEvent(new MouseEvent("mouseenter", o));
            t.dispatchEvent(new PointerEvent("pointerdown", { ...o, pointerId: 1, pointerType: "mouse", isPrimary: true }));
            t.dispatchEvent(new MouseEvent("mousedown", o));
            t.dispatchEvent(new PointerEvent("pointerup", { ...o, buttons: 0, pointerId: 1, pointerType: "mouse", isPrimary: true }));
            t.dispatchEvent(new MouseEvent("mouseup", { ...o, buttons: 0 }));
            t.dispatchEvent(new MouseEvent("click", { ...o, buttons: 0 }));
          } catch (_) {
            try {
              t.dispatchEvent(new MouseEvent("click", { ...o, buttons: 0 }));
            } catch (__) {}
          }

          try {
            t.click();
          } catch (_) {}

          // Keyboard activation
          try {
            t.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", keyCode: 13, bubbles: true, cancelable: true }));
            t.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter", code: "Enter", keyCode: 13, bubbles: true, cancelable: true }));
            t.dispatchEvent(new KeyboardEvent("keydown", { key: " ", code: "Space", keyCode: 32, bubbles: true, cancelable: true }));
            t.dispatchEvent(new KeyboardEvent("keyup", { key: " ", code: "Space", keyCode: 32, bubbles: true, cancelable: true }));
          } catch (_) {}

          return true;
        }

        // Already success?
        if (SUCCESS.test(body())) {
          const c = findClose();
          if (c) hardClick(c);
          return "already_ok";
        }

        // Wait for Запросить to appear
        let btn = null;
        for (let i = 0; i < 40 && !btn; i++) {
          btn = findRequest();
          if (!btn) await sleep(500);
        }
        if (!btn) return "not_found";

        // === 1 ta qattiq click ===
        hardClick(btn);
        await sleep(600);
        // Agar dialog ochilmagan bo‘lsa — yana 1 marta (maks)
        if (!VALIDATING.test(body()) && !SUCCESS.test(body())) {
          const again = findRequest();
          if (again) {
            hardClick(again);
            await sleep(600);
          }
        }

        // === Kutish: Отмена BOSILMAYDI ===
        const deadline = Date.now() + 150000;
        while (Date.now() < deadline) {
          if (VALIDATING.test(body())) {
            await sleep(1000);
            continue;
          }
          if (SUCCESS.test(body())) {
            await sleep(500);
            // === Закрыть qattiq (bir necha urinish) ===
            for (let k = 0; k < 8; k++) {
              const c = findClose();
              if (c) {
                hardClick(c);
                await sleep(700);
                if (!SUCCESS.test(body())) return "requested";
              } else {
                await sleep(400);
              }
            }
            return "requested";
          }
          await sleep(800);
        }

        if (SUCCESS.test(body())) {
          const c = findClose();
          if (c) hardClick(c);
          return "requested";
        }
        if (VALIDATING.test(body())) return "still_validating";
        return "no_success";
      },
    });
    return injected?.[0]?.result || "no_inject";
  } catch (e) {
    return "main_fail:" + (e && e.message);
  }
}

async function processNext() {
  const st = await getState();
  if (!st.running) return;

  if (st.index >= st.urls.length) {
    await pushLog("Tugadi: barcha URL’lar.");
    await setState({ running: false });
    return;
  }

  const pageUrl = normalizePageUrl(st.urls[st.index]);
  if (!pageUrl) {
    await setState({ index: st.index + 1 });
    setTimeout(() => processNext(), 400);
    return;
  }

  await pushLog(`(${st.index + 1}/${st.urls.length}) ${pageUrl}`);

  const tabId = await ensureGscTab(st);
  await waitTabComplete(tabId);
  await new Promise((r) => setTimeout(r, 1200));

  // Har safar yangi content.js — Reload dan keyin eski kod qolmasin
  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      files: ["content.js"],
    });
    await new Promise((r) => setTimeout(r, 300));
  } catch (_) {}

  let result = "no_response";
  try {
    result = await chrome.tabs.sendMessage(tabId, {
      type: "INSPECT_AND_REQUEST",
      pageUrl,
      resourceId: st.resourceId || DEFAULT_RESOURCE,
    });
    if (result && result.result) result = result.result;
    else if (typeof result === "string") {
      /* ok */
    } else result = "no_response";
  } catch (e) {
    result = "inject_fail:" + (e && e.message);
  }

  await pushLog(`inspect: ${result}`);

  // Search tayyor bo‘lsa — Запросить/Закрыть har doim MAIN (qattiq)
  if (/inspect_ready|no_button|not_indexed/i.test(String(result))) {
    await pushLog("Запросить → kutish → Закрыть…");
    const forced = await forceClickRequestMainWorld(tabId);
    await pushLog(`click: ${forced}`);
    result = forced;
  }

  await pushLog(`natija: ${result}`);

  if (String(result).includes("quota")) {
    await setState({ running: false });
    await pushLog("Kvota — to‘xtatildi.");
    return;
  }

  await setState({ index: st.index + 1 });
  const delayMs = Math.max(60, Number(st.delaySec) || 60) * 1000;
  await pushLog(`Keyingi URL ga ${Math.round(delayMs / 1000)}s…`);
  setTimeout(() => {
    processNext().catch((err) => pushLog(String(err)));
  }, delayMs);
}

chrome.runtime.onInstalled.addListener(async () => {
  const st = await chrome.storage.local.get(["urls"]);
  if (!st.urls || !st.urls.length) {
    await chrome.storage.local.set({
      urls: parseUrls(DEFAULT_URLS),
      resourceId: DEFAULT_RESOURCE,
      delaySec: 60,
      running: false,
      index: 0,
      log: [],
      gscBase: "https://search.google.com/u/0/search-console",
    });
  }
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  (async () => {
    if (msg.type === "START") {
      let gscBase = msg.gscBase || null;
      let tabId = sender.tab?.id || null;

      if (!tabId) {
        const [active] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (active?.id) tabId = active.id;
        if (active?.url) gscBase = detectGscBase(active.url) || gscBase;
      } else if (sender.tab?.url) {
        gscBase = detectGscBase(sender.tab.url) || gscBase;
      }

      if (!gscBase) gscBase = "https://search.google.com/u/0/search-console";

      await setState({
        running: true,
        index: msg.fromStart ? 0 : (await getState()).index,
        urls: msg.urls || (await getState()).urls,
        resourceId: msg.resourceId || DEFAULT_RESOURCE,
        delaySec: Number(msg.delaySec) || 60,
        tabId,
        gscBase,
        log: [],
      });
      await pushLog(`Boshladi (base: ${gscBase})`);
      await processNext();
      sendResponse({ ok: true });
      return;
    }

    if (msg.type === "STOP") {
      await setState({ running: false });
      await pushLog("To‘xtatildi");
      sendResponse({ ok: true });
      return;
    }

    if (msg.type === "GET_STATE") {
      sendResponse(await getState());
      return;
    }

    sendResponse({ ok: false });
  })();
  return true;
});
