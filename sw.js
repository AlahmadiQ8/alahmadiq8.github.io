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
    "url": "webpack-runtime-63d2bf78c75770303829.js"
  },
  {
    "url": "app-251ef89f6876bba5c842.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-cb27b5675afc1ddda237.js"
  },
  {
    "url": "index.html",
    "revision": "b24dcf5005babe091140527a1f16e966"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5a0087dc0c1376ac80d635cef6de52a6"
  },
  {
    "url": "component---src-pages-index-js-12324b7a3b14c7af4745.js"
  },
  {
    "url": "0-f061f4c9b9f90049d181.js"
  },
  {
    "url": "2-e3b955a6c732678ee7dc.js"
  },
  {
    "url": "11-dc10d785781809b0be70.js"
  },
  {
    "url": "1-38e4d33b3a97f5d75918.js"
  },
  {
    "url": "static/d/297/path---index-6a9-6Y1sfUUZvgRrSfvcy3x464UJ41c.json",
    "revision": "7b8ec9241333e4a8577ae1ba539de63b"
  },
  {
    "url": "component---src-pages-404-js-c8809f692ae37d8f3459.js"
  },
  {
    "url": "static/d/326/path---404-html-516-62a-nutp96Jrx76VwJeWJiL1qCcQP6c.json",
    "revision": "6e351dbd687d0de9920737a52e0e3300"
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
