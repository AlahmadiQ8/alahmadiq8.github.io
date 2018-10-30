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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

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
    "url": "webpack-runtime-3f6766e7f4b67592d051.js"
  },
  {
    "url": "app-c9fce710ce39d62c7621.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-88ddd6d422d7be8144db.js"
  },
  {
    "url": "index.html",
    "revision": "00c740373e8136178dd9da756cfb7069"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "10040b84690d8afebb68e251d6095fee"
  },
  {
    "url": "component---src-pages-index-js-89bec3b14a2c1449f079.js"
  },
  {
    "url": "0-389899da19b6ba27be82.js"
  },
  {
    "url": "2-6f85f49676439319c44d.js"
  },
  {
    "url": "11-2e1e62731fdf5b952472.js"
  },
  {
    "url": "1-3a3ce22ac9e393a49670.js"
  },
  {
    "url": "static/d/649/path---index-6a9-3wOTUcLz6QZ7d1b9nU5HuI0.json",
    "revision": "0701317a40c370996a0478976c69fd9a"
  },
  {
    "url": "component---src-pages-404-js-cd8782c4f9c4299e363d.js"
  },
  {
    "url": "static/d/245/path---404-html-516-62a-4ooCaoHIGJF20SN3zifoqiHyxk0.json",
    "revision": "036c7a83b172fc41ba55308993f52d8b"
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
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});