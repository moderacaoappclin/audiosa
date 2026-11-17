/* AA.dev audiosa.app — apenas cache de arquivos estáticos de DEMONSTRAÇÃO. */
const CACHE='audiosa-v12-demo-rc4-20261117-01';
const PREFIX='audiosa-v';
const ASSETS=['./','./index.html','./style.css','./upgrade-v12.css','./app.js','./upgrade-v12.js','./mock-data.js','./manifest.webmanifest','./logo.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(fetch(event.request).then(r=>{if(r.ok&&r.type==='basic'){const copy=r.clone();caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{});}return r;}).catch(()=>caches.match(event.request)));});
