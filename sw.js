self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // ملف أساسي لتجاوز شروط المتصفح لتفعيل زر التثبيت
});