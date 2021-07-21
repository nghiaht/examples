# with-fb

Demo: https://with-fb.vercel.app/

## How to embed Facebook Chat Plugin into React (especially: Next.js)

When I follow the instructions for embedding Chat plugin into web, it works the first time I visit the page, but doesn't work when navigating to another page (via next/link - Next.js). After googling around, I think that we should cleanup when navigating around.

Introduce few components for initializing FB SDK and cleaning up when leave (unmount).

1. `src/pages/fb1.js` - Function based example
2. `src/pages/fb2.js` - Class based example
3. TODO: Try `next/script` (https://nextjs.org/docs/basic-features/script)

## Notes

Remember to add your domain to whitelist in Chat Plugin configuration page. `localhost` may not work, just use `ngrok`, or deploy to a live https domain, or something else and whitelist them.