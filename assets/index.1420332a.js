import{j as t,a as l,R as a,r as d,b as u,B as f}from"./vendor.238bc5a0.js";const m=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};m();const p=()=>t("div",{className:"grid place-items-center bg-cover bg-center",style:{backgroundImage:"url('./bg.jpg')"},children:t("h1",{className:"text-8xl",children:"AX-SH"})}),g=({children:s,className:o,...n})=>l("div",{className:`Layout ${o}`,...n,children:[t("header",{}),t("main",{className:"min-h-screen flex children:flex-grow",children:s}),t("footer",{})]});function h(){return t(g,{className:"App bg-black text-white",children:t(p,{})})}const y="UA-215876059-2";a.initialize(y,{debug:!0});a.pageview(window.location.pathname+window.location.search);d.exports.render(t(u.exports.StrictMode,{children:t(f,{children:t(h,{})})}),document.getElementById("root"));
