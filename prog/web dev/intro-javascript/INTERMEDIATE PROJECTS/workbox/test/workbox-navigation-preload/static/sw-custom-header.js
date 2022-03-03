/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

importScripts('/__WORKBOX/buildFile/workbox-sw');
importScripts('/infra/testing/comlink/sw-interface.js');

workbox.setConfig({modulePathPrefix: '/__WORKBOX/buildFile/'});

// The header will be `Service-Worker-Navigation-Preload: custom-value`.
workbox.navigationPreload.enable('custom-value');

// Once the service worker's taken control, it responds to navigations with
// a synthetic response.
// If Navigation Preload is enabled, that request bypasses the service worker.
const navigationRoute = new workbox.routing.NavigationRoute(
    () => new Response('Generated by the service worker.'),
);
workbox.routing.registerRoute(navigationRoute);

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
