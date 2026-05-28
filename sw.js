const CACHE="joseki-sage-v1";
self.addEventListener("fetch",function(event){
  event.respondWith(
    fetch(event.request).then(function(response){
      var clone=response.clone();
      caches.open(CACHE).then(function(cache){ cache.put(event.request,clone); });
      return response;
    }).catch(function(){
      return caches.match(event.request);
    })
  );
});
