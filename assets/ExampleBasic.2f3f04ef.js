import{f as Y,g as s,h as E,p as A,i as xe,j as _e,k as R,w as de,l as ye,m as h,q as g,_ as be,r as I,o as ve,s as Te,u as W,b as F,c as Ae,v as Me,F as Ce,a as ke,t as Be}from"./app.c7b97b80.js";/**
 * Vue 3 Carousel 0.1.34
 * (c) 2021
 * @license MIT
 */const S={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,breakpoints:void 0};function Oe(t,n){let a;return function(...l){a&&clearTimeout(a),a=setTimeout(()=>{t(...l),a=null},n)}}function Ne(t,n){let a;return function(...l){const d=this;a||(t.apply(d,l),a=!0,setTimeout(()=>a=!1,n))}}function je(t){var n,a,l;return t?((a=(n=t[0])===null||n===void 0?void 0:n.type)===null||a===void 0?void 0:a.name)==="CarouselSlide"?t:((l=t[0])===null||l===void 0?void 0:l.children)||[]:[]}function De(t,n){if(t.wrapAround)return n-1;switch(t.snapAlign){case"start":return n-t.itemsToShow;case"end":return n-1;case"center":case"center-odd":return n-Math.ceil(t.itemsToShow/2);case"center-even":return n-Math.ceil(t.itemsToShow/2);default:return 0}}function Ee(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function fe(t,n,a,l){return t.wrapAround?n:Math.min(Math.max(n,l),a)}function Le({slidesBuffer:t,currentSlide:n,snapAlign:a,itemsToShow:l,wrapAround:d,slidesCount:v}){let r=t.indexOf(n);if(a==="center"||a==="center-odd"?r-=(l-1)/2:a==="center-even"?r-=(l-2)/2:a==="end"&&(r-=l-1),!d){const i=v-l,c=0;r=Math.max(Math.min(r,i),c)}return r}var Ve=Y({name:"Carousel",props:{itemsToShow:{default:S.itemsToShow,type:Number},itemsToScroll:{default:S.itemsToScroll,type:Number},wrapAround:{default:S.wrapAround,type:Boolean},snapAlign:{default:S.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:S.transition,type:Number},breakpoints:{default:S.breakpoints,type:Object},autoplay:{default:S.autoplay,type:Number},pauseAutoplayOnHover:{default:S.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:S.mouseDrag,type:Boolean},touchDrag:{default:S.touchDrag,type:Boolean},settings:{default(){return{}},type:Object}},setup(t,{slots:n,emit:a,expose:l}){var d;const v=s(null),r=s([]),i=s([]),c=s(0),u=s(1),_=s(null),M=s(null);let C=s({}),y=Object.assign({},S);const o=E(Object.assign({},S)),f=s((d=o.modelValue)!==null&&d!==void 0?d:0),me=s(0),G=s(0),B=s(0),O=s(0);A("config",o),A("slidesBuffer",i),A("slidesCount",u),A("currentSlide",f),A("maxSlide",B),A("minSlide",O);function J(){const e=Object.assign(Object.assign({},t),t.settings);C=s(Object.assign({},e.breakpoints)),y=Object.assign(Object.assign({},e),{settings:void 0,breakpoints:void 0})}function L(){const e=Object.keys(C.value).map(p=>Number(p)).sort((p,b)=>+b-+p);let m=Object.assign({},y);e.some(p=>window.matchMedia(`(min-width: ${p}px)`).matches?(m=Object.assign(Object.assign({},m),C.value[p]),!0):!1);let x;for(x in m)o[x]=m[x]}const pe=Oe(()=>{C.value&&(L(),N()),V()},16);function V(){if(!v.value)return;const e=v.value.getBoundingClientRect();c.value=e.width/o.itemsToShow}function N(){u.value=r.value.length,!(u.value<=0)&&(G.value=Math.ceil((u.value-1)/2),B.value=De(o,u.value),O.value=Ee(o),f.value=fe(o,f.value,B.value,O.value))}function j(){const e=[...Array(u.value).keys()];if(o.wrapAround&&o.itemsToShow+1<=u.value){let p=(o.itemsToShow!==1?Math.round((u.value-o.itemsToShow)/2):0)-f.value;if(o.snapAlign==="end"?p+=Math.floor(o.itemsToShow-1):(o.snapAlign==="center"||o.snapAlign==="center-odd")&&p++,p<0)for(let b=p;b<0;b++)e.push(Number(e.shift()));else for(let b=0;b<p;b++)e.unshift(Number(e.pop()))}i.value=e}xe(()=>{C.value&&(L(),N()),V(),o.autoplay&&o.autoplay>0&&te(),window.addEventListener("resize",pe,{passive:!0})}),_e(()=>{M.value&&clearTimeout(M.value),ne(!1)});let w=!1;const P={x:0,y:0},$={x:0,y:0},k=E({x:0,y:0}),K=s(!1),z=s(!1),he=()=>{z.value=!0},Se=()=>{z.value=!1},Q=Ne(e=>{w||e.preventDefault(),$.x=w?e.touches[0].clientX:e.clientX,$.y=w?e.touches[0].clientY:e.clientY;const m=$.x-P.x,x=$.y-P.y;k.y=x,k.x=m},16);function Z(e){w=e.type==="touchstart",w||e.preventDefault(),!(!w&&e.button!==0||D.value)&&(K.value=!0,P.x=w?e.touches[0].clientX:e.clientX,P.y=w?e.touches[0].clientY:e.clientY,document.addEventListener(w?"touchmove":"mousemove",Q),document.addEventListener(w?"touchend":"mouseup",ee))}function ee(){K.value=!1;const e=Math.sign(k.x)*.4,m=Math.round(k.x/c.value+e);let x=fe(o,f.value-m,B.value,O.value);T(x),k.x=0,k.y=0,document.removeEventListener(w?"touchmove":"mousemove",Q),document.removeEventListener(w?"touchend":"mouseup",ee)}function te(){_.value=setInterval(()=>{o.pauseAutoplayOnHover&&z.value||X()},o.autoplay)}function ne(e=!0){!_.value||(clearInterval(_.value),e&&te())}const D=s(!1);function T(e,m=!1){if(ne(),f.value===e||D.value)return;const x=u.value-1;if(e>x)return T(e-u.value);if(e<0)return T(e+u.value);D.value=!0,me.value=f.value,f.value=e,m||a("update:modelValue",f.value),M.value=setTimeout(()=>{o.wrapAround&&j(),D.value=!1},o.transition)}function X(){let e=f.value+o.itemsToScroll;o.wrapAround||(e=Math.min(e,B.value)),T(e)}function ae(){let e=f.value-o.itemsToScroll;o.wrapAround||(e=Math.max(e,O.value)),T(e)}const oe={slideTo:T,next:X,prev:ae};A("nav",oe);const le=R(()=>Le({slidesBuffer:i.value,itemsToShow:o.itemsToShow,snapAlign:o.snapAlign,wrapAround:Boolean(o.wrapAround),currentSlide:f.value,slidesCount:u.value}));A("slidesToScroll",le);const ge=R(()=>({transform:`translateX(${k.x-le.value*c.value}px)`,transition:`${D.value?o.transition:0}ms`}));function se(){J(),j()}function ie(){J(),L(),N(),j(),V()}function ue(){N(),j()}de(t,ie),se(),ye(()=>{const e=u.value!==r.value.length;t.modelValue!==void 0&&f.value!==t.modelValue&&T(Number(t.modelValue),!0),e&&ue()});const re={config:o,slidesBuffer:i,slidesCount:u,slideWidth:c,currentSlide:f,maxSlide:B,minSlide:O,middleSlide:G};l({updateBreakpointsConfigs:L,updateSlidesData:N,updateSlideWidth:V,updateSlidesBuffer:j,initCarousel:se,restartCarousel:ie,updateCarousel:ue,slideTo:T,next:X,prev:ae,nav:oe,data:re});const H=n.default||n.slides,U=n.addons,ce=E(re);return()=>{const e=je(H==null?void 0:H(ce)),m=(U==null?void 0:U(ce))||[];r.value=e,e.forEach((b,we)=>b.props.index=we);const x=h("ol",{class:"carousel__track",style:ge.value,onMousedown:o.mouseDrag?Z:null,onTouchstart:o.touchDrag?Z:null},e),p=h("div",{class:"carousel__viewport"},x);return h("section",{ref:v,class:"carousel","aria-label":"Gallery",onMouseenter:he,onMouseleave:Se},[p,m])}}});const Pe={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},q=t=>{const n=t.name;if(!n||typeof n!="string")return;const a=Pe[n],l=h("path",{d:a});t.title;const d=h("title",null,n);return h("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img"},[d,l])};q.props={name:String,title:String};const $e=(t,{slots:n,attrs:a})=>{const{next:l,prev:d}=n,v=g("config",E(Object.assign({},S))),r=g("maxSlide",s(1)),i=g("minSlide",s(1)),c=g("currentSlide",s(1)),u=g("nav",{}),_=h("button",{type:"button",class:["carousel__prev",!v.wrapAround&&c.value<=i.value&&"carousel__prev--in-active",a==null?void 0:a.class],"aria-label":"Navigate to previous slide",onClick:u.prev},(d==null?void 0:d())||h(q,{name:"arrowLeft"})),M=h("button",{type:"button",class:["carousel__next",!v.wrapAround&&c.value>=r.value&&"carousel__next--in-active",a==null?void 0:a.class],"aria-label":"Navigate to next slide",onClick:u.next},(l==null?void 0:l())||h(q,{name:"arrowRight"}));return[_,M]};var Ie=Y({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:n}){const a=g("config",E(Object.assign({},S))),l=g("slidesBuffer",s([])),d=g("currentSlide",s(0)),v=g("slidesToScroll",s(0)),r=s(t.index);a.wrapAround&&(i(),de(l,i));function i(){r.value=l.value.indexOf(t.index)}const c=R(()=>{const y=a.itemsToShow;return{width:`${1/y*100}%`,order:r.value.toString()}}),u=()=>t.index===d.value,_=()=>{const y=Math.ceil(v.value),o=Math.floor(v.value+a.itemsToShow);return l.value.slice(y,o).includes(t.index)},M=()=>t.index===l.value[Math.ceil(v.value)-1],C=()=>t.index===l.value[Math.floor(v.value+a.itemsToShow)];return()=>{var y;return h("li",{style:c.value,class:{carousel__slide:!0,"carousel__slide--active":u(),"carousel__slide--visible":_(),"carousel__slide--prev":M(),"carousel__slide--next":C()}},(y=n.default)===null||y===void 0?void 0:y.call(n))}}});const ze=()=>{const t=g("maxSlide",s(1)),n=g("minSlide",s(1)),a=g("currentSlide",s(1)),l=g("nav",{});function d(i){l.slideTo(i)}const v=i=>{const c=a.value;return c===i||c>t.value&&i>=t.value||c<n.value&&i<=n.value},r=[];for(let i=n.value;i<t.value+1;i++){const c=h("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":v(i)},"aria-label":`Navigate to slide ${i+1}`,onClick:()=>d(i)}),u=h("li",{class:"carousel__pagination-item",key:i},c);r.push(u)}return h("ol",{class:"carousel__pagination"},r)};const Xe=Y({name:"Basic",components:{Carousel:Ve,Slide:Ie,Pagination:ze,Navigation:$e}}),He={class:"carousel__item"};function Ue(t,n,a,l,d,v){const r=I("Slide"),i=I("Navigation"),c=I("Pagination"),u=I("Carousel");return ve(),Te(u,null,{addons:W(()=>[F(i),F(c)]),default:W(()=>[(ve(),Ae(Ce,null,Me(10,_=>F(r,{key:_},{default:W(()=>[ke("div",He,Be(_),1)]),_:2},1024)),64))]),_:1})}var Re=be(Xe,[["render",Ue]]);export{Ve as C,Re as E,$e as N,ze as P,Ie as S};