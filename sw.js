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
    "url": "webpack-runtime-422438c10e4607049f76.js"
  },
  {
    "url": "app-c9fce710ce39d62c7621.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-88ddd6d422d7be8144db.js"
  },
  {
    "url": "index.html",
    "revision": "a3c5f1ff825864ba75ced4e103f75aeb"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f3e9e635af563c9f7a9ced1474db037d"
  },
  {
    "url": "component---src-pages-index-js-89bec3b14a2c1449f079.js"
  },
  {
    "url": "0-389899da19b6ba27be82.js"
  },
  {
    "url": "2-15552269106f85e51a6c.js"
  },
  {
    "url": "11-2e1e62731fdf5b952472.js"
  },
  {
    "url": "1-3a3ce22ac9e393a49670.js"
  },
  {
    "url": "static/d/199/path---index-6a9-ktvIaUoQTOfNn5IOkpJxAJQsu3g.json",
    "revision": "4e2e418e3d61356f39f5f210b9b9ee92"
  },
  {
    "url": "component---src-pages-404-js-2a783214c2d9ae28be40.js"
  },
  {
    "url": "static/d/678/path---404-html-516-62a-x83kzD46O1BDWsYw3n1hMizIcwc.json",
    "revision": "6195bf225d9cff0b3b7af5a0eb7b7dfb"
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