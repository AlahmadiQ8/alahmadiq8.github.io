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
    "url": "webpack-runtime-cf9ae6f51ac621fe9c44.js"
  },
  {
    "url": "app.9c6f538c5b7bac856ea0.css"
  },
  {
    "url": "app-e9b1ddd9b4848ebf978c.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-36c298e687ddeb2bfe6f.js"
  },
  {
    "url": "index.html",
    "revision": "646b60a6f198ab3e7c9bfe58bab8d4e1"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "39e3d9c858a212f75a4cb1e47c63c93b"
  },
  {
    "url": "2-1304dd37194d3c59bf15.js"
  },
  {
    "url": "component---src-pages-index-js-7c18e3be8e68c4e41c09.js"
  },
  {
    "url": "12-d00ca56ed438433ab4b0.js"
  },
  {
    "url": "1-19de1b2ab89e58aa2ab5.js"
  },
  {
    "url": "0-d262b42ec6c7aef78f5e.js"
  },
  {
    "url": "static/d/802/path---index-6a9-5iXPIETqN7IbGK3wjQn2rNXhDo.json",
    "revision": "311ef7e700312aed735f0329f3de0be3"
  },
  {
    "url": "component---src-pages-404-js-bb443792ccda51e0b01b.js"
  },
  {
    "url": "static/d/351/path---404-html-516-62a-FbV9Oj1VLShwv7IaoL9AFy1ph8.json",
    "revision": "47971389eb9aa2efc0786b1967ea1474"
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