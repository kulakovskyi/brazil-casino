(()=>{var e={769:()=>{const e=document.querySelector(".footer__cookie-btn"),t=document.querySelector(".footer__cookie");e.addEventListener("click",(()=>{t.classList.add("_hidden")}))},824:()=>{({el:document.querySelector(".footer__btn-top"),show(){this.el.classList.remove("_hidden")},hide(){this.el.classList.add("_hidden")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()})),document.querySelector(".footer__btn-top").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()},524:()=>{const e=document.querySelector(".menu__icon"),t=document.querySelector(".header__menu"),o=document.querySelector("body");e.addEventListener("click",(function(r){e.classList.toggle("_active"),t.classList.toggle("_active"),o.classList.toggle("_lock")}));const r=document.querySelectorAll(".menu__item-sub_list"),c=document.querySelectorAll(".menu__item-hover-desc");window.innerWidth<=1024&&(c.forEach((e=>{e.classList.remove("menu__item-hover-desc")})),r.forEach((e=>{let t=e.querySelector(".menu__item-list");e.addEventListener("click",(()=>{t.classList.toggle("_open"),e.classList.toggle("_open")}))})))}},t={};function o(r){var c=t[r];if(void 0!==c)return c.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(524),o(769),o(824)})()})();