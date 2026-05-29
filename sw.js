const CACHE='joseki-sage-v11';

self.addEventListener('install',function(event){
  self.skipWaiting();
});

self.addEventListener('activate',function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);})
      );
    }).then(function(){return self.clients.claim();})
  );
});

self.addEventListener('fetch',function(event){
  event.respondWith(
    fetch(event.request).then(function(response){
      var clone=response.clone();
      caches.open(CACHE).then(function(cache){cache.put(event.request,clone);});
      return response;
    }).catch(function(){
      return caches.match(event.request);
    })
  );
});
