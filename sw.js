if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),c={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-ab24e45d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_...all_.c0407ee2.js",revision:null},{url:"assets/index.045b8907.css",revision:null},{url:"assets/index.64d96531.js",revision:null},{url:"index.html",revision:"4d7c7e7e23ef0fad7620befa7a7ef9ce"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"6875601f66acc64adc7468f05c022038"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));