/* MindGarden v3.30.4 — self-contained PWA cache; usable without installation. */
'use strict';
const CACHE_NAME='mindgarden-v3.30.4-pwa';
const SHELL=['./','./index.html','./city.html','./mahjong.html','./tower.html','./chess.html','./xiangqi.html','./seedrush.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./version.json','./favicon.ico','./social-preview.png'];
self.addEventListener('install',event=>event.waitUntil(
  caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting())
));
self.addEventListener('activate',event=>event.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('mindgarden-')&&k!==CACHE_NAME).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim())
));
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 const path=new URL(req.url).pathname;
 if(path.endsWith('version.json')){
   event.respondWith(fetch(req,{cache:'no-store'}).catch(()=>caches.match('./version.json','./favicon.ico','./social-preview.png')));return;
 }
 if(req.mode==='navigate'){
   event.respondWith(fetch(req).then(response=>{
     if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.put(req,copy)));}
     return response;
   }).catch(async()=>{
     const saved=await caches.match(req);
     if(saved)return saved;
     const fallback=path.endsWith('city.html')?'./city.html':path.endsWith('mahjong.html')?'./mahjong.html':path.endsWith('tower.html')?'./tower.html':path.endsWith('chess.html')?'./chess.html':path.endsWith('xiangqi.html')?'./xiangqi.html':path.endsWith('seedrush.html')?'./seedrush.html':'./index.html';
     return (await caches.match(fallback))||Response.error();
   }));return;
 }
 event.respondWith(caches.match(req).then(saved=>saved||fetch(req)));
});
