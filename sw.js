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
    "url": "webpack-runtime-c92a6f9b578fde53564f.js"
  },
  {
    "url": "app-c9fce710ce39d62c7621.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-88ddd6d422d7be8144db.js"
  },
  {
    "url": "index.html",
    "revision": "cd80214dfc3c3afe7478b69ff387b5e6"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ac16af30903b211af3f5800b1b7df7b2"
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
    "url": "static/d/808/path---index-6a9-YiKgs9zVb8giy1i7bkCSsscgU.json",
    "revision": "73a0cb6e0508d1c02f44467579f05eb5"
  },
  {
    "url": "component---src-pages-404-js-cd8782c4f9c4299e363d.js"
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