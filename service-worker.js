/* MindGarden v3.2.17: cache-first assets, network-first navigation; city page offline-ready. */
const CACHE_NAME='mindgarden-v3.2.17-pwa';
const SHELL=['./','./index.html','./city.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./version.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('mindgarden-')&&k!==CACHE_NAME).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{
 const request=e.request;if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
 if(new URL(request.url).pathname.endsWith('version.json')){e.respondWith(fetch(request,{cache:'no-store'}).catch(()=>caches.match('./version.json')));return;}
 if(request.mode==='navigate'){
  e.respondWith(fetch(request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(c=>c.put(request,copy));}return response}).catch(async()=>await caches.match(request)||await caches.match(new URL(request.url).pathname.endsWith('city.html')?'./city.html':'./index.html')));return;
 }
 e.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
});
