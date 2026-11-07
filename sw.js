// 超級管家 App：讓手機可以「安裝到桌面」。
// 資料一律即時向後端拿，不做離線快取，避免看到舊資料。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
