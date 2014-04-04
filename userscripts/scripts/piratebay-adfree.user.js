// ==UserScript==
// @name        Adfree thePiratebay
// @description remove ads from thepiratebay website
// @namespace   nod
// @downloadURL https://nodar-chkuaselidze.github.io/userscripts/scripts/piratebay-adfree.user.js
// @updateURL   https://nodar-chkuaselidze.github.io/userscripts/scripts/piratebay-adfree.meta.js
// @include     http://thepiratebay.se/search/*
// @include     https://thepiratebay.se/search/*
// @version     1.0.0
// @grant       none
// ==/UserScript==

window.addEventListener('load', function () {
    var ads = document.getElementsByTagName('iframe');
    
    while(ads.length) {
      var ad = ads[0];
      ad.parentNode.removeChild(ad);
    }
});