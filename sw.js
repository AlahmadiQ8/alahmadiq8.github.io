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
    "url": "webpack-runtime-1ba7e53587b0190d09eb.js"
  },
  {
    "url": "app-251ef89f6876bba5c842.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-cb27b5675afc1ddda237.js"
  },
  {
    "url": "index.html",
    "revision": "bd9d5e193fb7aca84921294607530a24"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "62911d999629d9519d24412ac06768e9"
  },
  {
    "url": "component---src-pages-index-js-388b5eeed87249691890.js"
  },
  {
    "url": "0-f061f4c9b9f90049d181.js"
  },
  {
    "url": "2-525ab553a168ae05163f.js"
  },
  {
    "url": "11-dc10d785781809b0be70.js"
  },
  {
    "url": "1-38e4d33b3a97f5d75918.js"
  },
  {
    "url": "static/d/215/path---index-6a9-1aes5csXn9at3yrdU8BltV0BMAM.json",
    "revision": "8b504028f9e4865539c736d22d824e36"
  },
  {
    "url": "component---src-pages-404-js-c8809f692ae37d8f3459.js"
  },
  {
    "url": "static/d/60/path---404-html-516-62a-uMLqDKhXV0QhMg7iO6k5S7xDjsE.json",
    "revision": "74220b5a40ba8b19a3571b05041e9dd8"
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
