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
    "url": "webpack-runtime-d04c98e6620535ffc4e9.js"
  },
  {
    "url": "app-4464f79f536c627ba40d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-01c4858284d482bc04b9.js"
  },
  {
    "url": "index.html",
    "revision": "e7238d5652c72f35cb136db0f7a7b83b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1cd57cf68c946f4a5d1923693e53e4e4"
  },
  {
    "url": "component---src-pages-index-js-ac734d4f3f8fe6cf9adb.js"
  },
  {
    "url": "0-ad9e669e7e25efd86d6a.js"
  },
  {
    "url": "2-7c7685ae36da4eff2ce9.js"
  },
  {
    "url": "11-1bd44f881ce35d7f4a50.js"
  },
  {
    "url": "1-384da0d62561ce86f674.js"
  },
  {
    "url": "static/d/19/path---index-6a9-RkpXPkyN2EdR7bACNlShCewSKQk.json",
    "revision": "e346715b9d2391e8d7346f66fdec4b67"
  },
  {
    "url": "component---src-pages-404-js-8676bfbe27a4ee49130d.js"
  },
  {
    "url": "static/d/47/path---404-html-516-62a-6ADEpTcgX1EKzANV6ULXH6omY.json",
    "revision": "33225d42fc43e6d849463efb1b537f5f"
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