/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-d104cc5812db19ff9efe.js"
  },
  {
    "url": "app-96587e786f28ce6aa2ea.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-cb27b5675afc1ddda237.js"
  },
  {
    "url": "index.html",
    "revision": "284aca2a78b5dceeff0ea290c1d6d4cd"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3637299a1a29ee611ce8012089da4b6e"
  },
  {
    "url": "component---src-pages-index-js-682a64db8d9738627136.js"
  },
  {
    "url": "0-48decc28fea32ac6c8d7.js"
  },
  {
    "url": "2-c330f7c6f7a886345568.js"
  },
  {
    "url": "11-43986db14d1d51be2863.js"
  },
  {
    "url": "1-ad883fcdab2446b96d72.js"
  },
  {
    "url": "static/d/693/path---index-6a9-B1ldm7znOYqWy4aFDG3SuRY.json",
    "revision": "9b99b497f2e0ea98882a533f49f4d6c2"
  },
  {
    "url": "component---src-pages-404-js-30f280ea7b4157ee5fd1.js"
  },
  {
    "url": "static/d/203/path---404-html-516-62a-k7V40BvbDMAYunCpwTIUoKfjVU.json",
    "revision": "850d3267fb43f5802e858937eff4238e"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
