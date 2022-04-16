import{R as c,j as e,G as d,T as g,C as x,L as b,O as w,a as l,J as y,b as N,N as v,c as L,P as k,d as A,e as _,f as E,g as O,h as S,i as T,k as G,l as I,m as j,n as C,o as P,A as R,p as z,q,r as B,s as J,t as M,u as $,v as D,B as H,w as K,x as V,y as W,z as F,D as Y,E as Q,F as U,H as X,I as Z,K as ee,M as u,Q as te,S as se,U as re,V as ne}from"./vendor.9e57b029.js";const ae=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}};ae();const oe="modulepreload",h={},ie="",ce=function(r,n){return!n||n.length===0?r():Promise.all(n.map(s=>{if(s=`${ie}${s}`,s in h)return;h[s]=!0;const t=s.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":oe,t||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),t)return new Promise((f,p)=>{i.addEventListener("load",f),i.addEventListener("error",p)})})).then(()=>r())};function le({name:a}){const[r,n]=c.useState(!1),s={onMouseOver:()=>n(!0),onMouseOut:()=>n(!1),color:r?"gray":"white"};switch(a){case"LinkedIn":return e(b,{...s});case"CodeSandbox":return e(x,{...s});case"Twitter":return e(g,{...s});case"Github":return e(d,{...s});default:return e("h1",{children:a})}}function de({children:a,size:r,...n}){return e("div",{...n,children:c.Children.map(a,s=>c.cloneElement(s,{size:r}))})}const ue={email:"example@example.com",links:{Github:"https://github.com/ax-sh",LinkedIn:"https://www.linkedin.com/in/axmin/",CodeSandbox:"https://codesandbox.io/u/ax-sh",Twitter:"https://twitter.com/ax___sh",Website:"https://ax-sh.github.io/portfolio/"}},he=()=>e("div",{className:"links",children:e("ul",{className:"flex w-60 justify-between",children:Object.entries(ue.links).map(([a,r])=>e("li",{children:e(w,{target:"_blank",href:r,children:e(le,{name:a})})},a))})}),m=({children:a,header:r,size:n})=>l("div",{className:"bg-black bg-opacity-50 p-2 m-2 rounded-md flex flex-col flex-wrap gap-6",children:[e("h2",{className:"text-4xl text-center",children:r}),e("div",{className:"flex justify-items-center flex-wrap gap-2",children:e(de,{size:n??48,className:"flex flex-wrap gap-4 m-auto",children:a})})]}),me=()=>e("section",{className:"min-h-screen grid place-items-center bg-cover bg-center",style:{backgroundImage:"url('./bg.jpg')"},children:l("div",{className:"md:w-1/2 p-2",children:[e("h1",{className:"text-8xl",children:"AX-SH"}),l(m,{header:"Programming Languages",children:[e(y,{}),e(N,{}),e(v,{}),e(L,{}),e(k,{}),e(A,{}),e(_,{}),e(E,{})]}),l(m,{header:"My Current Stacks",size:36,children:[e(O,{}),e(d,{}),e(S,{}),e(T,{}),e(G,{}),e(I,{}),e(j,{}),e(C,{}),e(P,{}),e(R,{}),e(z,{}),e(q,{}),e(B,{}),e(J,{}),e(M,{}),e($,{}),e(D,{}),e(H,{}),e(K,{}),e(V,{}),e(W,{}),e(F,{}),e(Y,{}),e(Q,{}),e(U,{}),e(X,{}),e(Z,{}),e(ee,{})]})]})});function fe(){return e("section",{})}const pe=({children:a,className:r,...n})=>l("div",{className:`Layout ${r} relative`,...n,children:[e("header",{}),e("main",{className:"min-h-screen",children:a}),e("footer",{className:"fixed bottom-0 right-0 p-10",children:e(he,{})})]});function ge(){return l(pe,{className:"App bg-black text-white",children:[e(me,{}),e(fe,{}),"hello"]})}const xe=[{caseSensitive:!1,path:"*",element:c.createElement(c.lazy(()=>ce(()=>import("./_...all_.9152a81d.js"),["assets/_...all_.9152a81d.js","assets/vendor.9e57b029.js"])))},{caseSensitive:!1,element:c.createElement(ge),index:!0}];const be={}.VITE_GOOGLE_ANALYTICS_TOKEN;let we=!1;u.initialize(be,{debug:we});u.pageview(window.location.pathname+window.location.search);function ye(){return e(c.Suspense,{fallback:e("p",{children:"Loading..."}),children:ne(xe)})}te.exports.render(e(se.exports.StrictMode,{children:e(re,{children:e(ye,{})})}),document.getElementById("root"));
