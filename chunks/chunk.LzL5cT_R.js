import{t as fe,k as ue,j as de,z as tt,a as nt,e as L,b as st,s as rt}from"./chunk.BV5rRRAA.js";import{G as Re,w as k,H as W,ab as it,I as ot,J as ct,K as De,L as z,O as pe,P as Y,Q as he,U as lt,M as J,a2 as at,ac as ft,ad as ut,a5 as ge,a4 as dt,a7 as F,$ as pt,ae as ht,E as gt,af as vt,ag as _t,ah as mt,ai as yt,aj as bt,d as wt,ak as xt,al as It,am as St,an as P,ao as kt,ap as Z,u as U,aq as Tt,ar as ve,i as w,as as Me,at as $e,au as ze,F as At,z as Et,av as X,aw as Pt,n as Ct,ax as Ot,h as ee,ay as jt,W as Lt,az as Nt,aA as Ft,p as Rt,l as Dt,k as Mt,aB as _e,a3 as me,b as R,f as $t,m as D,aC as H,aD as zt,c as qt,r as Ut,a as ye,t as Vt}from"./chunk.GDwCLnXl.js";const Qt="5";function oe(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function be(e,t,n=!1){k&&W();var o=e,r=null,s=null,i=lt,a=!1;const c=(e,t=!0)=>{a=!0,l(t,e)},l=(e,t)=>{if(i===(i=e))return;let n=!1;if(k){const e=o.data===ot;!!i===e&&(o=ct(),De(o),z(!1),n=!0)}i?(r?pe(r):t&&(r=Y((()=>t(o)))),s&&he(s,(()=>{s=null}))):(s?pe(s):t&&(s=Y((()=>t(o)))),r&&he(r,(()=>{r=null}))),n&&z(!0)};Re((()=>{a=!1,t(c),a||l(null,null)}),n?it:0),k&&(o=J)}function Ht(e,t,n,o,r){var s,i=e,a="";Re((()=>{a!==(a=t()??"")?(void 0!==s&&(pt(s),s=void 0),""!==a&&(s=Y((()=>{if(k){J.data;for(var e=W(),t=e;null!==e&&(8!==e.nodeType||""!==e.data);)t=e,e=at(e);if(null===e)throw ft(),ut;return ge(J,t),void(i=De(e))}var r=a+"";n&&(r=`<svg>${r}</svg>`);var s=dt(r);if((n||o)&&(s=F(s)),ge(F(s),s.lastChild),n||o)for(;F(s);)i.before(F(s));else i.before(s)})))):k&&W()}))}function qe(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=qe(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function Bt(){for(var e,t,n=0,o="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=qe(e))&&(o&&(o+=" "),o+=t);return o}function Gt(e){return"object"==typeof e?Bt(e):e??""}typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(Qt);const we=[..." \t\n\r\f \v\ufeff"];function Kt(e,t,n){var o=null==e?"":""+e;if(t&&(o=o?o+" "+t:t),n)for(var r in n)if(n[r])o=o?o+" "+r:r;else if(o.length)for(var s=r.length,i=0;(i=o.indexOf(r,i))>=0;){var a=i+s;0!==i&&!we.includes(o[i-1])||a!==o.length&&!we.includes(o[a])?i=a:o=(0===i?"":o.substring(0,i))+o.substring(a+1)}return""===o?null:o}function Wt(e,t,n,o,r,s){var i=e.__className;if(k||i!==n){var a=Kt(n,o,s);(!k||a!==e.getAttribute("class"))&&(null==a?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a)),e.__className=n}else if(s)for(var c in r??={},s){var l=!!s[c];l!==!!r[c]&&e.classList.toggle(c,l)}return s}const B=Symbol("class");function hs(e){if(k){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var n=e.value;te(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var o=e.checked;te(e,"checked",null),e.checked=o}}};e.__on_r=n,_t(n),mt()}}function Yt(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function te(e,t,n,o){var r=e.__attributes??={};k&&(r[t]=e.getAttribute(t),"src"===t||"srcset"===t||"href"===t&&"LINK"===e.nodeName)||r[t]!==(r[t]=n)&&("style"===t&&"__styles"in e&&(e.__styles={}),"loading"===t&&(e[ht]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&Ue(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function xe(e,t,n,o,r=!1,s=!1,i=!1){let a=k&&s;a&&z(!1);var c=t||{},l="OPTION"===e.tagName;for(var u in t)u in n||(n[u]=null);n.class?n.class=Gt(n.class):n[B]&&(n.class=null);var f=Ue(e),d=e.__attributes??={};for(const i in n){let a=n[i];if(l&&"value"===i&&null==a)e.value=e.__value="",c[i]=a;else{var p=c[i];if(a!==p||"class"===i){c[i]=a;var h=i[0]+i[1];if("$$"!==h){if("on"===h){const t={},n="$$"+i;let o=i.slice(2);var g=St(o);if(yt(o)&&(o=o.slice(0,-7),t.capture=!0),!g&&p){if(null!=a)continue;e.removeEventListener(o,c[n],t),c[n]=null}if(null!=a)if(g)e[`__${o}`]=a,wt([o]);else{let r=function(e){c[i].call(this,e)};c[n]=bt(o,e,r,t)}else g&&(e[`__${o}`]=void 0)}else if("class"===i){Wt(e,"http://www.w3.org/1999/xhtml"===e.namespaceURI,a,o,t?.[B],n[B])}else if("style"===i&&null!=a)e.style.cssText=a+"";else if("autofocus"===i)xt(e,!!a);else if(s||"__value"!==i&&("value"!==i||null==a))if("selected"===i&&l)Yt(e,a);else{var v=i;r||(v=It(v));var b="defaultValue"===v||"defaultChecked"===v;if(null!=a||s||b)b||f.includes(v)&&(s||"string"!=typeof a)?e[v]=a:"function"!=typeof a&&te(e,v,a);else if(d[i]=null,"value"===v||"checked"===v){let n=e;const o=void 0===t;if("value"===v){let e=n.defaultValue;n.removeAttribute(v),n.defaultValue=e,n.value=n.__value=o?e:null}else{let e=n.defaultChecked;n.removeAttribute(v),n.defaultChecked=e,n.checked=!!o&&e}}else e.removeAttribute(i)}else e.value=e.__value=a;"style"===i&&"__styles"in e&&(e.__styles={})}}}}return a&&z(!0),c}var Ie=new Map;function Ue(e){var t=Ie.get(e.nodeName);if(t)return t;Ie.set(e.nodeName,t=[]);for(var n,o=e,r=Element.prototype;r!==o;){for(var s in n=vt(o))n[s].set&&t.push(s);o=gt(o)}return t}function Jt(e=!1){const t=P,n=t.l.u;if(!n)return;let o=()=>Me(t.s);if(e){let e=0,n={};const r=$e((()=>{let o=!1;const r=t.s;for(const e in r)r[e]!==n[e]&&(n[e]=r[e],o=!0);return o&&e++,e}));o=()=>w(r)}n.b.length&&kt((()=>{Se(t,o),ve(n.b)})),Z((()=>{const e=U((()=>n.m.map(Tt)));return()=>{for(const t of e)"function"==typeof t&&t()}})),n.a.length&&Z((()=>{Se(t,o),ve(n.a)}))}function Se(e,t){if(e.l.s)for(const t of e.l.s)w(t);t()}function Ve(e){null===P&&oe(),ze&&null!==P.l?tn(P).m.push(e):Z((()=>{const t=U(e);if("function"==typeof t)return t}))}function Zt(e){null===P&&oe(),Ve((()=>()=>U(e)))}function Xt(e,t,{bubbles:n=!1,cancelable:o=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:o})}function en(){const e=P;return null===e&&oe(),(t,n,o)=>{const r=e.s.$$events?.[t];if(r){const s=At(r)?r.slice():[r],i=Xt(t,n,o);for(const t of s)t.call(e.x,i);return!i.defaultPrevented}return!0}}function tn(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const nn={get(e,t){if(!e.exclude.includes(t))return w(e.version),t in e.special?e.special[t]():e.props[t]},set:(e,t,n)=>(t in e.special||(e.special[t]=rn({get[t](){return e.props[t]}},t,Nt)),e.special[t](n),X(e.version),!0),getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),X(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter((t=>!e.exclude.includes(t)))};function sn(e,t){return new Proxy({props:e,exclude:t,special:{},version:Et(0)},nn)}function rn(e,t,n,o){var r,s=!ze||!!(n&jt);r=e[t];var i,a=o,c=!0,l=!1;if(s)i=()=>{var n=e[t];return void 0===n?(l=!0,c&&(c=!1,a=o),a):(c=!0,l=!1,n)};else{var u=Ct((()=>e[t]));u.f|=Pt,i=()=>{var e=w(u);return void 0!==e&&(a=void 0),void 0===e?a:e}}var f=!1,d=Lt(r),p=$e((()=>{var e=i(),t=w(d);return f?(f=!1,t):d.v=e}));return p.equals=Ot,function(e,t){if(arguments.length>0){const n=t?w(p):e;return p.equals(n)||(f=!0,ee(d,n),l&&void 0!==a&&(a=n),U((()=>w(p)))),e}return w(p)}}const on=L,cn={es:st,en:L,en_us:L,en_gb:L,en_au:L,zh_cn:nt,zh_tw:tt,ja:de,ja_jp:de,ko:ue,ko_kr:ue,th:fe,th_th:fe};function ln(e){return cn[e.toLowerCase()]||on}function gs(e){return ln(rt.lang)[e]}Ft();const Qe=/^[a-z0-9]+(-[a-z0-9]+)*$/,V=(e,t,n,o="")=>{const r=e.split(":");if("@"===e.slice(0,1)){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const e=r.pop(),n=r.pop(),s={provider:r.length>0?r[0]:o,prefix:n,name:e};return t&&!M(s)?null:s}const s=r[0],i=s.split("-");if(i.length>1){const e={provider:o,prefix:i.shift(),name:i.join("-")};return t&&!M(e)?null:e}if(n&&""===o){const e={provider:o,prefix:"",name:s};return t&&!M(e,n)?null:e}return null},M=(e,t)=>!!e&&!(!(t&&""===e.prefix||e.prefix)||!e.name),He=Object.freeze({left:0,top:0,width:16,height:16}),q=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Q=Object.freeze({...He,...q}),ne=Object.freeze({...Q,body:"",hidden:!1});function an(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}function ke(e,t){const n=an(e,t);for(const o in ne)o in q?o in e&&!(o in n)&&(n[o]=q[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function fn(e,t){const n=e.icons,o=e.aliases||Object.create(null),r=Object.create(null);return Object.keys(n).concat(Object.keys(o)).forEach((function e(t){if(n[t])return r[t]=[];if(!(t in r)){r[t]=null;const n=o[t]&&o[t].parent,s=n&&e(n);s&&(r[t]=[n].concat(s))}return r[t]})),r}function un(e,t,n){const o=e.icons,r=e.aliases||Object.create(null);let s={};function i(e){s=ke(o[e]||r[e],s)}return i(t),n.forEach(i),ke(e,s)}function Be(e,t){const n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach((e=>{t(e,null),n.push(e)}));const o=fn(e);for(const r in o){const s=o[r];s&&(t(r,un(e,r,s)),n.push(r))}return n}const dn={provider:"",aliases:{},not_found:{},...He};function G(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Ge(e){if("object"!=typeof e||null===e)return null;const t=e;if("string"!=typeof t.prefix||!e.icons||"object"!=typeof e.icons||!G(e,dn))return null;const n=t.icons;for(const e in n){const t=n[e];if(!e||"string"!=typeof t.body||!G(t,ne))return null}const o=t.aliases||Object.create(null);for(const e in o){const t=o[e],r=t.parent;if(!e||"string"!=typeof r||!n[r]&&!o[r]||!G(t,ne))return null}return t}const Te=Object.create(null);function pn(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function C(e,t){const n=Te[e]||(Te[e]=Object.create(null));return n[t]||(n[t]=pn(e,t))}function Ke(e,t){return Ge(t)?Be(t,((t,n)=>{n?e.icons[t]=n:e.missing.add(t)})):[]}function hn(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch{}return!1}let N=!1;function We(e){return"boolean"==typeof e&&(N=e),N}function gn(e){const t="string"==typeof e?V(e,!0,N):e;if(t){const e=C(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}function vn(e,t){const n=V(e,!0,N);if(!n)return!1;const o=C(n.provider,n.prefix);return t?hn(o,n.name,t):(o.missing.add(n.name),!0)}function _n(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),N&&!t&&!e.prefix){let t=!1;return Ge(e)&&(e.prefix="",Be(e,((e,n)=>{vn(e,n)&&(t=!0)}))),t}const n=e.prefix;if(!M({prefix:n,name:"a"}))return!1;return!!Ke(C(t,n),e)}const Ye=Object.freeze({width:null,height:null}),Je=Object.freeze({...Ye,...q}),mn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,yn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ae(e,t,n){if(1===t)return e;if(n=n||100,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;const o=e.split(mn);if(null===o||!o.length)return e;const r=[];let s=o.shift(),i=yn.test(s);for(;;){if(i){const e=parseFloat(s);isNaN(e)?r.push(s):r.push(Math.ceil(e*t*n)/n)}else r.push(s);if(s=o.shift(),void 0===s)return r.join("");i=!i}}function bn(e,t="defs"){let n="";const o=e.indexOf("<"+t);for(;o>=0;){const r=e.indexOf(">",o),s=e.indexOf("</"+t);if(-1===r||-1===s)break;const i=e.indexOf(">",s);if(-1===i)break;n+=e.slice(r+1,s).trim(),e=e.slice(0,o).trim()+e.slice(i+1)}return{defs:n,content:e}}function wn(e,t){return e?"<defs>"+e+"</defs>"+t:t}function xn(e,t,n){const o=bn(e);return wn(o.defs,t+o.content+n)}const In=e=>"unset"===e||"undefined"===e||"none"===e;function Sn(e,t){const n={...Q,...e},o={...Je,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,o].forEach((e=>{const t=[],n=e.hFlip,o=e.vFlip;let i,a=e.rotate;switch(n?o?a+=2:(t.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),t.push("scale(-1 1)"),r.top=r.left=0):o&&(t.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),t.push("scale(1 -1)"),r.top=r.left=0),a<0&&(a-=4*Math.floor(a/4)),a%=4,a){case 1:i=r.height/2+r.top,t.unshift("rotate(90 "+i.toString()+" "+i.toString()+")");break;case 2:t.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:i=r.width/2+r.left,t.unshift("rotate(-90 "+i.toString()+" "+i.toString()+")")}a%2==1&&(r.left!==r.top&&(i=r.left,r.left=r.top,r.top=i),r.width!==r.height&&(i=r.width,r.width=r.height,r.height=i)),t.length&&(s=xn(s,'<g transform="'+t.join(" ")+'">',"</g>"))}));const i=o.width,a=o.height,c=r.width,l=r.height;let u,f;null===i?(f=null===a?"1em":"auto"===a?l:a,u=Ae(f,c/l)):(u="auto"===i?c:i,f=null===a?Ae(u,l/c):"auto"===a?l:a);const d={},p=(e,t)=>{In(t)||(d[e]=t.toString())};p("width",u),p("height",f);const h=[r.left,r.top,c,l];return d.viewBox=h.join(" "),{attributes:d,viewBox:h,body:s}}const kn=/\sid="(\S+)"/g,Tn="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let An=0;function En(e,t=Tn){const n=[];let o;for(;o=kn.exec(e);)n.push(o[1]);if(!n.length)return e;const r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof t?t(n):t+(An++).toString(),s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")})),e=e.replace(new RegExp(r,"g"),"")}const se=Object.create(null);function Pn(e,t){se[e]=t}function re(e){return se[e]||se[""]}function ce(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array&&t.length))return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}const le=Object.create(null),O=["https://api.simplesvg.com","https://api.unisvg.com"],$=[];for(;O.length>0;)1===O.length||Math.random()>.5?$.push(O.shift()):$.push(O.pop());function Cn(e,t){const n=ce(t);return null!==n&&(le[e]=n,!0)}function ae(e){return le[e]}le[""]=ce({resources:["https://api.iconify.design"].concat($)});const On=()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch{}};let Ee=On();function jn(e,t){const n=ae(e);if(!n)return 0;let o;if(n.maxURL){let e=0;n.resources.forEach((t=>{e=Math.max(e,t.length)}));const r=t+".json?icons=";o=n.maxURL-e-n.path.length-r.length}else o=0;return o}function Ln(e){return 404===e}const Nn=(e,t,n)=>{const o=[],r=jn(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},a=0;return n.forEach(((n,c)=>{a+=n.length+1,a>=r&&c>0&&(o.push(i),i={type:s,provider:e,prefix:t,icons:[]},a=n.length),i.icons.push(n)})),o.push(i),o};function Fn(e){if("string"==typeof e){const t=ae(e);if(t)return t.path}return"/"}const Rn=(e,t,n)=>{if(!Ee)return void n("abort",424);let o=Fn(t.provider);switch(t.type){case"icons":{const e=t.prefix,n=t.icons.join(",");o+=e+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const e=t.uri;o+="/"===e.slice(0,1)?e.slice(1):e;break}default:return void n("abort",400)}let r=503;Ee(e+o).then((e=>{const t=e.status;if(200===t)return r=501,e.json();setTimeout((()=>{n(Ln(t)?"abort":"next",t)}))})).then((e=>{"object"==typeof e&&null!==e?setTimeout((()=>{n("success",e)})):setTimeout((()=>{404===e?n("abort",e):n("next",r)}))})).catch((()=>{n("next",r)}))},Dn={prepare:Nn,send:Rn};function Mn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort(((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)));let o={provider:"",prefix:"",name:""};return e.forEach((e=>{if(o.name===e.name&&o.prefix===e.prefix&&o.provider===e.provider)return;o=e;const r=e.provider,s=e.prefix,i=e.name,a=n[r]||(n[r]=Object.create(null)),c=a[s]||(a[s]=C(r,s));let l;l=i in c.icons?t.loaded:""===s||c.missing.has(i)?t.missing:t.pending;const u={provider:r,prefix:s,name:i};l.push(u)})),t}function Ze(e,t){e.forEach((e=>{const n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter((e=>e.id!==t)))}))}function $n(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout((()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,r=e.prefix;t.forEach((t=>{const s=t.icons,i=s.pending.length;s.pending=s.pending.filter((t=>{if(t.prefix!==r)return!0;const i=t.name;if(e.icons[i])s.loaded.push({provider:o,prefix:r,name:i});else{if(!e.missing.has(i))return n=!0,!0;s.missing.push({provider:o,prefix:r,name:i})}return!1})),s.pending.length!==i&&(n||Ze([e],t.id),t.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),t.abort))}))})))}let zn=0;function qn(e,t,n){const o=zn++,r=Ze.bind(null,n,o);if(!t.pending.length)return r;const s={id:o,icons:t,callback:e,abort:r};return n.forEach((e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(s)})),r}function Un(e,t=!0,n=!1){const o=[];return e.forEach((e=>{const r="string"==typeof e?V(e,t,n):e;r&&o.push(r)})),o}var Vn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Qn(e,t,n,o){const r=e.resources.length,s=e.random?Math.floor(Math.random()*r):e.index;let i;if(e.random){let t=e.resources.slice(0);for(i=[];t.length>1;){const e=Math.floor(Math.random()*t.length);i.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}i=i.concat(t)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const a=Date.now();let c,l="pending",u=0,f=null,d=[],p=[];function h(){f&&(clearTimeout(f),f=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function v(e,t){t&&(p=[]),"function"==typeof e&&p.push(e)}function b(){l="failed",p.forEach((e=>{e(void 0,c)}))}function m(){d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function y(){if("pending"!==l)return;h();const o=i.shift();if(void 0===o)return d.length?void(f=setTimeout((()=>{h(),"pending"===l&&(m(),b())}),e.timeout)):void b();const r={status:"pending",resource:o,callback:(t,n)=>{!function(t,n,o){const r="success"!==n;switch(d=d.filter((e=>e!==t)),l){case"pending":break;case"failed":if(r||!e.dataAfterTimeout)return;break;default:return}if("abort"===n)return c=o,void b();if(r)return c=o,void(d.length||(i.length?y():b()));if(h(),m(),!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}l="completed",p.forEach((e=>{e(o)}))}(r,t,n)}};d.push(r),u++,f=setTimeout(y,e.rotate),n(o,t,r.callback)}return"function"==typeof o&&p.push(o),setTimeout(y),function(){return{startTime:a,payload:t,status:l,queriesSent:u,queriesPending:d.length,subscribe:v,abort:g}}}function Xe(e){const t={...Vn,...e};let n=[];function o(){n=n.filter((e=>"pending"===e().status))}return{query:function(e,r,s){const i=Qn(t,e,r,((e,t)=>{o(),s&&s(e,t)}));return n.push(i),i},find:function(e){return n.find((t=>e(t)))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:o}}function Pe(){}const K=Object.create(null);function Hn(e){if(!K[e]){const t=ae(e);if(!t)return;const n={config:t,redundancy:Xe(t)};K[e]=n}return K[e]}function Bn(e,t,n){let o,r;if("string"==typeof e){const t=re(e);if(!t)return n(void 0,424),Pe;r=t.send;const s=Hn(e);s&&(o=s.redundancy)}else{const t=ce(e);if(t){o=Xe(t);const n=re(e.resources?e.resources[0]:"");n&&(r=n.send)}}return o&&r?o.query(t,r,n)().abort:(n(void 0,424),Pe)}function Ce(){}function Gn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout((()=>{e.iconsLoaderFlag=!1,$n(e)})))}function Kn(e){const t=[],n=[];return e.forEach((e=>{(e.match(Qe)?t:n).push(e)})),{valid:t,invalid:n}}function j(e,t,n){function o(){const n=e.pendingIcons;t.forEach((t=>{n&&n.delete(t),e.icons[t]||e.missing.add(t)}))}if(n&&"object"==typeof n)try{if(!Ke(e,n).length)return void o()}catch(e){console.error(e)}o(),Gn(e)}function Oe(e,t){e instanceof Promise?e.then((e=>{t(e)})).catch((()=>{t(null)})):t(e)}function Wn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout((()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:n}=e,o=e.iconsToLoad;if(delete e.iconsToLoad,!o||!o.length)return;const r=e.loadIcon;if(e.loadIcons&&(o.length>1||!r))return void Oe(e.loadIcons(o,n,t),(t=>{j(e,o,t)}));if(r)return void o.forEach((o=>{Oe(r(o,n,t),(t=>{j(e,[o],t?{prefix:n,icons:{[o]:t}}:null)}))}));const{valid:s,invalid:i}=Kn(o);if(i.length&&j(e,i,null),!s.length)return;const a=n.match(Qe)?re(t):null;a?a.prepare(t,n,s).forEach((n=>{Bn(t,n,(t=>{j(e,n.icons,t)}))})):j(e,s,null)})))}const Yn=(e,t)=>{const n=Mn(Un(e,!0,We()));if(!n.pending.length){let e=!0;return t&&setTimeout((()=>{e&&t(n.loaded,n.missing,n.pending,Ce)})),()=>{e=!1}}const o=Object.create(null),r=[];let s,i;return n.pending.forEach((e=>{const{provider:t,prefix:n}=e;if(n===i&&t===s)return;s=t,i=n,r.push(C(t,n));const a=o[t]||(o[t]=Object.create(null));a[n]||(a[n]=[])})),n.pending.forEach((e=>{const{provider:t,prefix:n,name:r}=e,s=C(t,n),i=s.pendingIcons||(s.pendingIcons=new Set);i.has(r)||(i.add(r),o[t][n].push(r))})),r.forEach((e=>{const t=o[e.provider][e.prefix];t.length&&Wn(e,t)})),t?qn(t,n,r):Ce};function Jn(e,t){const n={...e};for(const e in t){const o=t[e],r=typeof o;e in Ye?(null===o||o&&("string"===r||"number"===r))&&(n[e]=o):r===typeof n[e]&&(n[e]="rotate"===e?o%4:o)}return n}const Zn=/[\s,]+/;function Xn(e,t){t.split(Zn).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}function es(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(e){for(;e<0;)e+=4;return e%4}if(""===n){const t=parseInt(e);return isNaN(t)?0:o(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r/=t,r%1==0?o(r):0)}}return t}function ts(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const e in t)n+=" "+e+'="'+t[e]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function ns(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ss(e){return"data:image/svg+xml,"+ns(e)}function rs(e){return'url("'+ss(e)+'")'}const je={...Je,inline:!1},is={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},os={display:"inline-block"},ie={"background-color":"currentColor"},et={"background-color":"transparent"},Le={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ne={"-webkit-mask":ie,mask:ie,background:et};for(const e in Ne){const t=Ne[e];for(const n in Le)t[e+"-"+n]=Le[n]}function cs(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function ls(e,t){const n=Jn(je,t),o=t.mode||"svg",r="svg"===o?{...is}:{};-1===e.body.indexOf("xlink:")&&delete r["xmlns:xlink"];let s="string"==typeof t.style?t.style:"";for(let e in t){const o=t[e];if(void 0!==o)switch(e){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[e]=!0===o||"true"===o||1===o;break;case"flip":"string"==typeof o&&Xn(n,o);break;case"color":s=s+(s.length>0&&";"!==s.trim().slice(-1)?";":"")+"color: "+o+"; ";break;case"rotate":"string"==typeof o?n[e]=es(o):"number"==typeof o&&(n[e]=o);break;case"ariaHidden":case"aria-hidden":!0!==o&&"true"!==o&&delete r["aria-hidden"];break;default:if("on:"===e.slice(0,3))break;void 0===je[e]&&(r[e]=o)}}const i=Sn(e,n),a=i.attributes;if(n.inline&&(s="vertical-align: -0.125em; "+s),"svg"===o){Object.assign(r,a),""!==s&&(r.style=s);let e=0,n=t.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),{svg:!0,attributes:r,body:En(i.body,n?()=>n+"ID"+e++:"iconifySvelte")}}const{body:c,width:l,height:u}=e,f="mask"===o||"bg"!==o&&-1!==c.indexOf("currentColor"),d={"--svg":rs(ts(c,{...a,width:l+"",height:u+""}))},p=e=>{const t=a[e];t&&(d[e]=cs(t))};p("width"),p("height"),Object.assign(d,os,f?ie:et);let h="";for(const e in d)h+=e+": "+d[e]+";";return r.style=h+s,{svg:!1,attributes:r}}if(We(!0),Pn("",Dn),typeof document<"u"&&typeof window<"u"){const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach((e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!_n(e))&&console.error(n)}catch{console.error(n)}}))}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){const n="IconifyProviders["+e+"] is invalid.";try{const o=t[e];if("object"!=typeof o||!o||void 0===o.resources)continue;Cn(e,o)||console.error(n)}catch{console.error(n)}}}}function as(e,t,n,o,r){function s(){t.loading&&(t.loading.abort(),t.loading=null)}if("object"==typeof e&&null!==e&&"string"==typeof e.body)return t.name="",s(),{data:{...Q,...e}};let i;if("string"!=typeof e||null===(i=V(e,!1,!0)))return s(),null;const a=gn(i);if(!a)return n&&(!t.loading||t.loading.name!==e)&&(s(),t.name="",t.loading={name:e,abort:Yn([i],o)}),null;s(),t.name!==e&&(t.name=e,r&&!t.destroyed&&r(e));const c=["iconify"];return""!==i.prefix&&c.push("iconify--"+i.prefix),""!==i.provider&&c.push("iconify--"+i.provider),{data:a,classes:c}}function Fe(e,t){return e?ls({...Q,...e},t):null}var fs=zt("<svg><!></svg>"),us=Vt("<span></span>");function vs(e,t){const n=sn(t,["children","$$slots","$$events","$$legacy"]);Rt(t,!1);const o=D({name:"",loading:null,destroyed:!1});let r=D(!1),s=D(0),i=D();const a=e=>{"function"==typeof n.onLoad&&n.onLoad(e),en()("load",{icon:e})};function c(){X(s)}Ve((()=>{ee(r,!0)})),Zt((()=>{H(o,w(o).destroyed=!0),w(o).loading&&(w(o).loading.abort(),H(o,w(o).loading=null))})),Dt((()=>(w(s),Me(n),w(r),w(o),w(i),Fe)),(()=>{w(s);const e=!!n.ssr||w(r),t=as(n.icon,w(o),e,c,a);ee(i,t?Fe(t.data,n):null),w(i)&&t.classes&&H(i,w(i).attributes.class=("string"==typeof n.class?n.class+" ":"")+t.classes.join(" "))})),Mt(),Jt();var l=_e(),u=me(l),f=e=>{var t=_e(),n=me(t),o=e=>{var t=fs();let n;Ht(qt(t),(()=>w(i).body),!0,!1),Ut(t),ye((()=>n=xe(t,n,{...w(i).attributes},void 0,!0))),R(e,t)},r=e=>{var t=us();let n;ye((()=>n=xe(t,n,{...w(i).attributes}))),R(e,t)};be(n,(e=>{w(i).svg?e(o):e(r,!1)})),R(e,t)};be(u,(e=>{w(i)&&e(f)})),R(e,l),$t()}export{vs as I,Jt as a,te as b,Ht as h,gs as i,Ve as o,hs as r,Wt as s};