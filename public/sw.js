if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>i(e,c),f={module:{uri:c},exports:r,require:t};s[c]=Promise.all(n.map((e=>f[e]||t(e)))).then((e=>(a(...e),r)))}}define(["./workbox-62f137f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Qm0T8Er6kywTkyIwfLX9M/_buildManifest.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/Qm0T8Er6kywTkyIwfLX9M/_middlewareManifest.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/Qm0T8Er6kywTkyIwfLX9M/_ssgManifest.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/0c428ae2-00795add4fdf22d8.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/17007de1-87d7b770c56a584a.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/1a48c3c1-77f859cf299af06a.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/1bfc9850-216538ee80ded8b6.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/252f366e-9d1640c940548131.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/31664189-c586516b079e8f18.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/319.0848f7781b3de155.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/499-bdb28e5dd85a9cea.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/527-2518a2f4e386b34d.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/545f34e4-e744df886443791a.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/6728d85a-1b667cc6c4784d7d.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/675-a0e7bc4ebaaecba0.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/718-47841403e98a7c3f.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/78e521c3-7c446c74dfd50f84.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/893-1491617179a06f2d.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/949-13bd28a4527aa77b.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/ae51ba48-4bdf36bde4646dd3.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/d64684d8-738e5d62071cd65d.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/d7eeaac4-44a29843eaaa3882.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/framework-e70c6273bfe3f237.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/main-953ef8211fd35280.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/_app-83a0b83671eb82d5.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/create-wallet-88f59c855d7e6133.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/history-e3f4ae367d34261d.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/index-09cb5c8671928d85.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/intro-4fc5be4d0d4d1de7.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/make-payment-d5de1c2602212d7c.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/merchant-55a322f880bfdb9b.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/merchant/generate-qr-af3571d95ca90172.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/merchant/show-qr-c916e0d62d131530.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/scan-qr-0ad81f61e3a4ee9e.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/send-token-c3d0c30e4b0e30bb.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/wallet-51d2c6c1405ecde1.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/pages/wallet-setup-20dae5a10b5dc555.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/chunks/webpack-07f0a731a1635baf.js",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/_next/static/css/b447b3a19068ee6b.css",revision:"Qm0T8Er6kywTkyIwfLX9M"},{url:"/banner.png",revision:"543e93c7fdca22a89b05bb6b35dbdd05"},{url:"/banner2.png",revision:"f74544521d8c4dd56f4a408484508734"},{url:"/bg.png",revision:"4fe56ae1001eeadd0e315076ed59658b"},{url:"/bg2.png",revision:"5a9fce8c247f15b2071d9ad9af3bf3a7"},{url:"/cashback.png",revision:"f18ff42f190e0648d5e0e2bfdae6903a"},{url:"/cashback.webp",revision:"334d00fdd9d75f5681d19c541a48758a"},{url:"/favicon.ico",revision:"a8d2b90053b696389fcefdb9e2beecb1"},{url:"/fonts/Euclid Circular B Bold Italic.ttf",revision:"6743dec26ea449c26db660ece62452fa"},{url:"/fonts/Euclid Circular B Bold.ttf",revision:"4e40789fe985a2ba34cdf76c7fa5a54e"},{url:"/fonts/Euclid Circular B Italic.ttf",revision:"aad978986b12123a89740c4f93a149e4"},{url:"/fonts/Euclid Circular B Light Italic.ttf",revision:"aa22e6b27edd52b122bc4cb99ccefb9d"},{url:"/fonts/Euclid Circular B Light.ttf",revision:"a523ad473d5bad00dcdda4a3a46cec5d"},{url:"/fonts/Euclid Circular B Medium Italic.ttf",revision:"0789e0554f880b02fe3b398947ea3ae5"},{url:"/fonts/Euclid Circular B Medium.ttf",revision:"e5a8e44f6ed4560fa934c8e0233d1597"},{url:"/fonts/Euclid Circular B Regular.ttf",revision:"f29cfc3fa5ade3421e1a2c66f9e01a34"},{url:"/fonts/Euclid Circular B SemiBold Italic.ttf",revision:"ccc049916620dea569efde3e28a0b73b"},{url:"/fonts/Euclid Circular B SemiBold.ttf",revision:"ba85f91865ca87b927c887494f035391"},{url:"/icon-512x512.png",revision:"da99e7f14e84d3c52845949a04e25fe4"},{url:"/icon.png",revision:"87084163c71b125ef382110e34fa1f3a"},{url:"/icons/1.svg",revision:"619636b47ca308320fcbdefc189b2c4e"},{url:"/icons/2.svg",revision:"2675af7afe2338e4c55b380ddbecaece"},{url:"/icons/3.svg",revision:"b4efb09ad5b8478ac3da967b47cc0d0f"},{url:"/icons/4.svg",revision:"3d1e82ad17e868781ec3cb4d6bf43ce9"},{url:"/icons/brave.svg",revision:"eb94fe7a6f7af9fb2b274155a2f0bce1"},{url:"/icons/chrome.svg",revision:"74376144083566ad12bf708a6c4df0a2"},{url:"/icons/firefox.svg",revision:"0d17d4b8c65b3a326bde703ebd563e38"},{url:"/icons/ie.svg",revision:"deb08448085f3a9d5c2fd8b039963447"},{url:"/intro.webp",revision:"dd868667a6c606f6d2b9abbea05d88f3"},{url:"/logo.gif",revision:"7dd0cbc9a551a2523d7b76146f165a4c"},{url:"/logo.png",revision:"76f6cb76b4f47da172350cb2dc82f926"},{url:"/logo2.png",revision:"5c8c0a38be67a7f129b07cbab16f7a97"},{url:"/manifest.json",revision:"3337ea03703c05007a27e1202d32e1ca"},{url:"/nfts.jpg",revision:"7d5b970d315c3d8dc5bed9f132ff9cc6"},{url:"/profile.png",revision:"a68e2e0889a08b647e6bebc1cadd9042"},{url:"/secure.png",revision:"cd77b96389550c54670375c937161939"},{url:"/spay.png",revision:"f9062e3decffdcbf392c8625c8bee93b"},{url:"/spay.svg",revision:"7a6bd77442afbad3c0160903a01e0efd"},{url:"/swap.png",revision:"ee9590af59402b1c68bf651444ce65ca"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
