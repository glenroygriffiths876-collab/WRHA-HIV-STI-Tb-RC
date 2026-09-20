const CACHE='wrha-resource-manualfix-v10';
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE))});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  if(req.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(req,{cache:'no-store'});
        const c=await caches.open(CACHE); c.put(req,fresh.clone());
        return fresh;
      }catch(e){
        return (await caches.match(req)) || (await caches.match('./index.html')) || Response.error();
      }
    })());
    return;
  }
  const u=new URL(req.url);
  if(u.origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cached=await caches.match(req);
    if(cached)return cached;
    try{
      const fresh=await fetch(req);
      const c=await caches.open(CACHE); c.put(req,fresh.clone());
      return fresh;
    }catch(e){return Response.error()}
  })());
});