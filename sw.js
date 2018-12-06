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
    "url": "webpack-runtime-ae83a3e4a73917763a7c.js"
  },
  {
    "url": "app-f1b20caf91a88be08891.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-88ddd6d422d7be8144db.js"
  },
  {
    "url": "index.html",
    "revision": "53f222623cffb2e2fe54bffab6214c70"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2ca92555762bfc653dbd5f01f61ffdb7"
  },
  {
    "url": "component---src-pages-index-js-b157fb1a53715d0aea6b.js"
  },
  {
    "url": "0-f6bcb94e7ddb6a9a9ec1.js"
  },
  {
    "url": "2-5e61ae0ae506e764426b.js"
  },
  {
    "url": "12-bca525c916b6987ce575.js"
  },
  {
    "url": "1-5f1e041ef6db78314a3f.js"
  },
  {
    "url": "static/d/740/path---index-6a9-dU4fI2pQgGcM52A3oKO0US25yCk.json",
    "revision": "050caab5edf5aad40de394b378bb8da4"
  },
  {
    "url": "component---src-pages-404-js-d3f197f486fb34bfd200.js"
  },
  {
    "url": "static/d/215/path---404-html-516-62a-CHs8muWzscwWA1EUh9j7rGengw.json",
    "revision": "618a0a44c812d3871daa66cb0d465715"
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