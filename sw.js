const staticCacheName = 's-app-v1'

const assetUrls = [
    'index.html',
    'styles.css',
    'gaz.html',
    'neft.html',
    'app.js'
]

self.addEventListener('install', async event=>{
    const cache = await caches.open(staticCacheName)
    await cache.addAll(assetUrls)

    //event.waitUntil(
   //    caches.open(staticCacheName).then(cache => cache.addAll(assetUrls))
    //)
})
self.addEventListener('activate',event=>{
    
    console.log('[SW]:activate')
})

self.addEventListener('fetch',event=>{
    console.log('fetch',event.request)
})

async function cacheFirst(request){
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}