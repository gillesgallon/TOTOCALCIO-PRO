self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
// Toujours utiliser le réseau : aucune ancienne page mise en cache.
self.addEventListener('fetch',()=>{});
