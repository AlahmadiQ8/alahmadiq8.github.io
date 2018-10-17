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

importScripts("workbox-v3.4.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.4.1"});

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
    "url": "webpack-runtime-d1019a10edf0b49ed4f7.js"
  },
  {
    "url": "app-2fb5ab70d0c06766ac54.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5423472618b9dae144ee.js"
  },
  {
    "url": "index.html",
    "revision": "671dab49ebf4b0fccbd2908491d3958a"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "dd8dd486d2d89be0c619dae678746486"
  },
  {
    "url": "component---src-pages-index-js-6a215ad87727959d8526.js"
  },
  {
    "url": "0-733745a3ab952f826015.js"
  },
  {
    "url": "2-df0493f5365509a1d90b.js"
  },
  {
    "url": "11-5547a1ef3c5d3bfaa44d.js"
  },
  {
    "url": "1-77ab863a538f160bfa60.js"
  },
  {
    "url": "static/d/995/path---index-6a9-hgIoG3RZ3NpzHHeFV6D0nauQ60.json",
    "revision": "d4c042a380b0c983caa749503384e15d"
  },
  {
    "url": "component---src-pages-404-js-2fd924ac0d5a855e3317.js"
  },
  {
    "url": "static/d/233/path---404-html-516-62a-5y7klHJdP68YGlHQZt3Z1kXG8w.json",
    "revision": "a185bfb6f7053627dc11364d08dbaabb"
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