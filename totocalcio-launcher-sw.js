'use strict';
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
// À chaque ouverture, récupérer les fichiers publiés sans réutiliser le cache HTTP.
// Ne modifie ni les sauvegardes du navigateur, ni les caches des autres logiciels.
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 event.respondWith(fetch(new Request(event.request,{cache:'no-store'})));
});
