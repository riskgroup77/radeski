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
    return new URL(u).toString().replace(/\/$/, (m, ...args) => {
      const p = new URL(u).pathname;
      return p === "/" ? "/" : "";
    });
  } catch {
    return u.startsWith("http") ? u : "";
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

const urlsEl = document.getElementById("urls");
const resourceEl = document.getElementById("resourceId");
const delayEl = document.getElementById("delaySec");
const statusEl = document.getElementById("status");

async function refreshStatus() {
  const st = await chrome.runtime.sendMessage({ type: "GET_STATE" });
  const lines = (st.log || []).slice(-8).join("\n") || "Log yo'q";
  statusEl.textContent =
    (st.running ? "▶ ISHLAYAPTI\n" : "■ to'xtagan\n") +
    `index: ${st.index}/${(st.urls || []).length}\n` +
    lines;
}

async function init() {
  const data = await chrome.storage.local.get(["urls", "resourceId", "delaySec"]);
  urlsEl.value = (data.urls && data.urls.length ? data.urls : parseUrls(DEFAULT_URLS)).join("\n");
  resourceEl.value = data.resourceId || "https://radeski.uz/";
  delayEl.value = data.delaySec || 60;
  await refreshStatus();
}

document.getElementById("start").addEventListener("click", async () => {
  const urls = parseUrls(urlsEl.value);
  await chrome.storage.local.set({
    urls,
    resourceId: resourceEl.value.trim() || "https://radeski.uz/",
    delaySec: Number(delayEl.value) || 60,
  });

  // Prefer active GSC tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab?.id) {
    await chrome.storage.local.set({ tabId: tab.id });
  }

  await chrome.runtime.sendMessage({
    type: "START",
    fromStart: true,
    urls,
    resourceId: resourceEl.value.trim() || "https://radeski.uz/",
    delaySec: Number(delayEl.value) || 60,
    gscBase: tab?.url && /search-console/i.test(tab.url)
      ? tab.url.replace(/\/inspect.*/, "").replace(/\?.*$/, "")
      : undefined,
  });
  await refreshStatus();
});

document.getElementById("stop").addEventListener("click", async () => {
  await chrome.runtime.sendMessage({ type: "STOP" });
  await refreshStatus();
});

init();
setInterval(refreshStatus, 2000);
