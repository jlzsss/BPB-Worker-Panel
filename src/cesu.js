addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  url.protocol = 'https:'
  url.hostname = "speed.cloudflare.com";
  let request = new Request(url, event.request);
  event.respondWith(fetch(request));
 }
)

