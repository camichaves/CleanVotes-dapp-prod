"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{67160:(M,f,h)=>{h.d(f,{c:()=>l});var v=h(32361),g=h(87683),d=h(33139);const l=(a,n)=>{let t,e;const s=(r,u,m)=>{if("undefined"==typeof document)return;const w=document.elementFromPoint(r,u);w&&n(w)?w!==t&&(c(),o(w,m)):c()},o=(r,u)=>{t=r,e||(e=t);const m=t;(0,v.c)(()=>m.classList.add("ion-activated")),u()},c=(r=!1)=>{if(!t)return;const u=t;(0,v.c)(()=>u.classList.remove("ion-activated")),r&&e!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:a,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>s(r.currentX,r.currentY,g.a),onMove:r=>s(r.currentX,r.currentY,g.b),onEnd:()=>{c(!0),(0,g.h)(),e=void 0}})}},88685:(M,f,h)=>{h.d(f,{g:()=>v});const v=(n,t,e,s,o)=>d(n[1],t[1],e[1],s[1],o).map(c=>g(n[0],t[0],e[0],s[0],c)),g=(n,t,e,s,o)=>o*(3*t*Math.pow(o-1,2)+o*(-3*e*o+3*e+s*o))-n*Math.pow(o-1,3),d=(n,t,e,s,o)=>a((s-=o)-3*(e-=o)+3*(t-=o)-(n-=o),3*e-6*t+3*n,3*t-3*n,n).filter(r=>r>=0&&r<=1),a=(n,t,e,s)=>{if(0===n)return((n,t,e)=>{const s=t*t-4*n*e;return s<0?[]:[(-t+Math.sqrt(s))/(2*n),(-t-Math.sqrt(s))/(2*n)]})(t,e,s);const o=(3*(e/=n)-(t/=n)*t)/3,c=(2*t*t*t-9*t*e+27*(s/=n))/27;if(0===o)return[Math.pow(-c,1/3)];if(0===c)return[Math.sqrt(-o),-Math.sqrt(-o)];const r=Math.pow(c/2,2)+Math.pow(o/3,3);if(0===r)return[Math.pow(c/2,.5)-t/3];if(r>0)return[Math.pow(-c/2+Math.sqrt(r),1/3)-Math.pow(c/2+Math.sqrt(r),1/3)-t/3];const u=Math.sqrt(Math.pow(-o/3,3)),m=Math.acos(-c/(2*Math.sqrt(Math.pow(-o/3,3)))),w=2*Math.pow(u,1/3);return[w*Math.cos(m/3)-t/3,w*Math.cos((m+2*Math.PI)/3)-t/3,w*Math.cos((m+4*Math.PI)/3)-t/3]}},75062:(M,f,h)=>{h.d(f,{i:()=>v});const v=g=>g&&""!==g.dir?"rtl"===g.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},11112:(M,f,h)=>{h.r(f),h.d(f,{startFocusVisible:()=>l});const v="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=a=>{let n=[],t=!0;const e=a?a.shadowRoot:document,s=a||document.body,o=_=>{n.forEach(E=>E.classList.remove(v)),_.forEach(E=>E.classList.add(v)),n=_},c=()=>{t=!1,o([])},r=_=>{t=d.includes(_.key),t||o([])},u=_=>{if(t&&_.composedPath){const E=_.composedPath().filter(p=>!!p.classList&&p.classList.contains("ion-focusable"));o(E)}},m=()=>{e.activeElement===s&&o([])};return e.addEventListener("keydown",r),e.addEventListener("focusin",u),e.addEventListener("focusout",m),e.addEventListener("touchstart",c),e.addEventListener("mousedown",c),{destroy:()=>{e.removeEventListener("keydown",r),e.removeEventListener("focusin",u),e.removeEventListener("focusout",m),e.removeEventListener("touchstart",c),e.removeEventListener("mousedown",c)},setFocus:o}}},34118:(M,f,h)=>{h.d(f,{C:()=>a,a:()=>d,d:()=>l});var v=h(15861),g=h(41643);const d=function(){var n=(0,v.Z)(function*(t,e,s,o,c,r){var u;if(t)return t.attachViewToDom(e,s,c,o);if(!(r||"string"==typeof s||s instanceof HTMLElement))throw new Error("framework delegate is missing");const m="string"==typeof s?null===(u=e.ownerDocument)||void 0===u?void 0:u.createElement(s):s;return o&&o.forEach(w=>m.classList.add(w)),c&&Object.assign(m,c),e.appendChild(m),yield new Promise(w=>(0,g.c)(m,w)),m});return function(e,s,o,c,r,u){return n.apply(this,arguments)}}(),l=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},a=()=>{let n,t;return{attachViewToDom:function(){var o=(0,v.Z)(function*(c,r,u={},m=[]){var w,_;if(n=c,r){const p="string"==typeof r?null===(w=n.ownerDocument)||void 0===w?void 0:w.createElement(r):r;m.forEach(i=>p.classList.add(i)),Object.assign(p,u),n.appendChild(p),yield new Promise(i=>(0,g.c)(p,i))}else if(n.children.length>0){const p=null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement("div");m.forEach(i=>p.classList.add(i)),p.append(...n.children),n.appendChild(p)}const E=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),E.appendChild(n),n});return function(r,u){return o.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},87683:(M,f,h)=>{h.d(f,{a:()=>d,b:()=>l,c:()=>g,d:()=>n,h:()=>a});const v={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:s})},notification(t){const e=this.getEngine();if(!e)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:s})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},g=()=>{v.selection()},d=()=>{v.selectionStart()},l=()=>{v.selectionChanged()},a=()=>{v.selectionEnd()},n=t=>{v.impact(t)}},28439:(M,f,h)=>{h.d(f,{s:()=>v});const v=e=>{try{if(e instanceof class t{constructor(s){this.value=s}})return e.value;if(!l()||"string"!=typeof e||""===e)return e;const s=document.createDocumentFragment(),o=document.createElement("div");s.appendChild(o),o.innerHTML=e,n.forEach(m=>{const w=s.querySelectorAll(m);for(let _=w.length-1;_>=0;_--){const E=w[_];E.parentNode?E.parentNode.removeChild(E):s.removeChild(E);const p=d(E);for(let i=0;i<p.length;i++)g(p[i])}});const c=d(s);for(let m=0;m<c.length;m++)g(c[m]);const r=document.createElement("div");r.appendChild(s);const u=r.querySelector("div");return null!==u?u.innerHTML:r.innerHTML}catch(s){return console.error(s),""}},g=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let o=e.attributes.length-1;o>=0;o--){const c=e.attributes.item(o),r=c.name;if(!a.includes(r.toLowerCase())){e.removeAttribute(r);continue}const u=c.value;null!=u&&u.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const s=d(e);for(let o=0;o<s.length;o++)g(s[o])},d=e=>null!=e.children?e.children:e.childNodes,l=()=>{var e;const s=window,o=null===(e=null==s?void 0:s.Ionic)||void 0===e?void 0:e.config;return!o||(o.get?o.get("sanitizerEnabled",!0):!0===o.sanitizerEnabled||void 0===o.sanitizerEnabled)},a=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},48117:(M,f,h)=>{h.d(f,{a:()=>v,b:()=>c,c:()=>n,d:()=>r,e:()=>i,f:()=>d,g:()=>g,h:()=>E,i:()=>t,j:()=>s,k:()=>u,l:()=>e,m:()=>a,n:()=>l,o:()=>o,p:()=>m,q:()=>w,r:()=>_,s:()=>p});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},51316:(M,f,h)=>{h.r(f),h.d(f,{KEYBOARD_DID_CLOSE:()=>g,KEYBOARD_DID_OPEN:()=>v,copyVisualViewport:()=>p,keyboardDidClose:()=>m,keyboardDidOpen:()=>r,keyboardDidResize:()=>u,resetKeyboardAssist:()=>t,setKeyboardClose:()=>c,setKeyboardOpen:()=>o,startKeyboardAssist:()=>e,trackViewportChanges:()=>E});const v="ionKeyboardDidShow",g="ionKeyboardDidHide";let l={},a={},n=!1;const t=()=>{l={},a={},n=!1},e=i=>{s(i),i.visualViewport&&(a=p(i.visualViewport),i.visualViewport.onresize=()=>{E(i),r()||u(i)?o(i):m(i)&&c(i)})},s=i=>{i.addEventListener("keyboardDidShow",y=>o(i,y)),i.addEventListener("keyboardDidHide",()=>c(i))},o=(i,y)=>{w(i,y),n=!0},c=i=>{_(i),n=!1},r=()=>!n&&l.width===a.width&&(l.height-a.height)*a.scale>150,u=i=>n&&!m(i),m=i=>n&&a.height===i.innerHeight,w=(i,y)=>{const D=new CustomEvent(v,{detail:{keyboardHeight:y?y.keyboardHeight:i.innerHeight-a.height}});i.dispatchEvent(D)},_=i=>{const y=new CustomEvent(g);i.dispatchEvent(y)},E=i=>{l=Object.assign({},a),a=p(i.visualViewport)},p=i=>({width:Math.round(i.width),height:Math.round(i.height),offsetTop:i.offsetTop,offsetLeft:i.offsetLeft,pageTop:i.pageTop,pageLeft:i.pageLeft,scale:i.scale})},17741:(M,f,h)=>{h.d(f,{S:()=>g});const g={bubbles:{dur:1e3,circles:9,fn:(d,l,a)=>{const n=d*l/a-d+"ms",t=2*Math.PI*l/a;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(d,l,a)=>{const n=l/a,t=d*n-d+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,l)=>({r:6,style:{left:9-9*l+"px","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,l,a)=>({y1:14,y2:26,style:{transform:`rotate(${360/a*l+(l<a/2?180:-180)}deg)`,"animation-delay":d*l/a-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,l,a)=>({y1:12,y2:20,style:{transform:`rotate(${360/a*l+(l<a/2?180:-180)}deg)`,"animation-delay":d*l/a-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,l,a)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":d*l/a-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,l,a)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":d*l/a-d+"ms"}})}}},15713:(M,f,h)=>{h.r(f),h.d(f,{createSwipeBackGesture:()=>a});var v=h(41643),g=h(75062),d=h(33139);h(43509);const a=(n,t,e,s,o)=>{const c=n.ownerDocument.defaultView,r=(0,g.i)(n),m=i=>r?-i.deltaX:i.deltaX;return(0,d.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:i=>(i=>{const{startX:C}=i;return r?C>=c.innerWidth-50:C<=50})(i)&&t(),onStart:e,onMove:i=>{const C=m(i)/c.innerWidth;s(C)},onEnd:i=>{const y=m(i),C=c.innerWidth,D=y/C,x=(i=>r?-i.velocityX:i.velocityX)(i),k=x>=0&&(x>.2||y>C/2),L=(k?1-D:D)*C;let b=0;if(L>5){const S=L/Math.abs(x);b=Math.min(S,540)}o(k,D<=0?.01:(0,v.k)(0,D,.9999),b)}})}},92854:(M,f,h)=>{h.d(f,{c:()=>d,g:()=>a,h:()=>g,o:()=>t});var v=h(15861);const g=(e,s)=>null!==s.closest(e),d=(e,s)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},s):s,a=e=>{const s={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(o=>null!=o).map(o=>o.trim()).filter(o=>""!==o):[])(e).forEach(o=>s[o]=!0),s},n=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,v.Z)(function*(s,o,c,r){if(null!=s&&"#"!==s[0]&&!n.test(s)){const u=document.querySelector("ion-router");if(u)return null!=o&&o.preventDefault(),u.push(s,c,r)}return!1});return function(o,c,r,u){return e.apply(this,arguments)}}()}}]);