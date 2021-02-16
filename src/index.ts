addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const greeting = url.searchParams.get("g") ?? DEFAULT_GREETING;
  event.respondWith(
    new Response(`<h1>hi, ${greeting}</h1>`, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
      status: 200,
    })
  );
});
