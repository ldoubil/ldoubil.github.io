import{B as Vo,g as Wo,s as jo,d as qo,b as Zo,e as Xe,M as Go,f as Xo}from"./chunks/chunk.De4sCiaH.js";import{p as Yo,u as Jo}from"./chunks/chunk.O_EFBpOf.js";import"./chunks/chunk.BV5rRRAA.js";const mt=(t,e)=>{const{o:n,i:o,u:s}=t;let r,c=n;const l=(t,e)=>{const n=c,l=t,i=e||(o?!o(n,l):n!==l);return(i||s)&&(c=l,r=n),[c,i,r]};return[e?t=>l(e(c,r),t):l,t=>[c,!!t,r]]},Ko=typeof window<"u"&&typeof HTMLElement<"u"&&!!window.document,pt=Ko?window:{},Gn=Math.max,Qo=Math.min,Ye=Math.round,we=Math.abs,$n=Math.sign,Xn=pt.cancelAnimationFrame,fn=pt.requestAnimationFrame,Se=pt.setTimeout,Je=pt.clearTimeout,Ae=t=>typeof pt[t]<"u"?pt[t]:void 0,ts=Ae("MutationObserver"),In=Ae("IntersectionObserver"),zt=Ae("ResizeObserver"),Kt=Ae("ScrollTimeline"),pn=t=>void 0===t,$e=t=>null===t,Et=t=>"number"==typeof t,ne=t=>"string"==typeof t,Ie=t=>"boolean"==typeof t,bt=t=>"function"==typeof t,Ot=t=>Array.isArray(t),xe=t=>"object"==typeof t&&!Ot(t)&&!$e(t),mn=t=>{const e=!!t&&t.length,n=Et(e)&&e>-1&&e%1==0;return!!(Ot(t)||!bt(t)&&n)&&(!(e>0&&xe(t))||e-1 in t)},Ee=t=>!!t&&t.constructor===Object,Ce=t=>t instanceof HTMLElement,Le=t=>t instanceof Element;function X(t,e){if(mn(t))for(let n=0;n<t.length&&!1!==e(t[n],n,t);n++);else t&&X(Object.keys(t),(n=>e(t[n],n,t)));return t}const Yn=(t,e)=>t.indexOf(e)>=0,Qt=(t,e)=>t.concat(e),nt=(t,e,n)=>(!ne(e)&&mn(e)?Array.prototype.push.apply(t,e):t.push(e),t),Dt=t=>Array.from(t||[]),hn=t=>Ot(t)?t:!ne(t)&&mn(t)?Dt(t):[t],Ke=t=>!!t&&!t.length,Qe=t=>Dt(new Set(t)),yt=(t,e,n)=>{X(t,(t=>!t||t.apply(void 0,e||[]))),n||(t.length=0)},Jn="paddingTop",Kn="paddingRight",Qn="paddingLeft",to="paddingBottom",eo="marginLeft",no="marginRight",oo="marginBottom",so="overflowX",co="overflowY",_e="width",ke="height",Lt="visible",Nt="hidden",Wt="scroll",es=t=>{const e=String(t||"");return e?e[0].toUpperCase()+e.slice(1):""},De=(t,e,n,o)=>{if(t&&e){let o=!0;return X(n,(n=>{t[n]!==e[n]&&(o=!1)})),o}return!1},ro=(t,e)=>De(t,e,["w","h"]),ge=(t,e)=>De(t,e,["x","y"]),ns=(t,e)=>De(t,e,["t","r","b","l"]),_t=()=>{},_=(t,...e)=>t.bind(0,...e),Bt=t=>{let e;const n=t?Se:fn,o=t?Je:Xn;return[s=>{o(e),e=n((()=>s()),bt(t)?t():t)},()=>o(e)]},Oe=(t,e)=>{const{_:n,p:o,v:s,S:r}=e||{};let c,l,i,a,d=_t;const u=function(e){d(),Je(c),a=c=l=void 0,d=_t,t.apply(this,e)},p=t=>r&&l?r(l,t):t,h=()=>{d!==_t&&u(p(i)||i)},y=function(){const t=Dt(arguments),e=bt(n)?n():n;if(Et(e)&&e>=0){const n=bt(o)?o():o,r=Et(n)&&n>=0,y=e>0?Se:fn,m=e>0?Je:Xn,f=p(t)||t,b=u.bind(0,f);let v;d(),s&&!a?(b(),a=!0,v=y((()=>a=void 0),e)):(v=y(b,e),r&&!c&&(c=Se(h,n))),d=()=>m(v),l=i=f}else u(t)};return y.m=h,y},lo=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),vt=t=>t?Object.keys(t):[],W=(t,e,n,o,s,r,c)=>{const l=[e,n,o,s,r,c];return("object"!=typeof t||$e(t))&&!bt(t)&&(t={}),X(l,(e=>{X(e,((n,o)=>{const s=e[o];if(t===s)return!0;const r=Ot(s);if(s&&Ee(s)){const e=t[o];let n=e;r&&!Ot(e)?n=[]:!r&&!Ee(e)&&(n={}),t[o]=W(n,s)}else t[o]=r?s.slice():s}))})),t},io=(t,e)=>X(W({},t),((t,e,n)=>{void 0===t?delete n[e]:t&&Ee(t)&&(n[e]=io(t))})),yn=t=>!vt(t).length,ao=(t,e,n)=>Gn(t,Qo(e,n)),Rt=t=>Qe((Ot(t)?t:(t||"").split(" ")).filter((t=>t))),gn=(t,e)=>t&&t.getAttribute(e),Ln=(t,e)=>t&&t.hasAttribute(e),Ht=(t,e,n)=>{X(Rt(e),(e=>{t&&t.setAttribute(e,String(n||""))}))},St=(t,e)=>{X(Rt(e),(e=>t&&t.removeAttribute(e)))},Me=(t,e)=>{const n=Rt(gn(t,e)),o=_(Ht,t,e),s=(t,e)=>{const o=new Set(n);return X(Rt(t),(t=>{o[e](t)})),Dt(o).join(" ")};return{O:t=>o(s(t,"delete")),$:t=>o(s(t,"add")),C:t=>{const e=Rt(t);return e.reduce(((t,e)=>t&&n.includes(e)),e.length>0)}}},uo=(t,e,n)=>(Me(t,e).O(n),_(bn,t,e,n)),bn=(t,e,n)=>(Me(t,e).$(n),_(uo,t,e,n)),Te=(t,e,n,o)=>(o?bn:uo)(t,e,n),vn=(t,e,n)=>Me(t,e).C(n),fo=t=>Me(t,"class"),po=(t,e)=>{fo(t).O(e)},wn=(t,e)=>(fo(t).$(e),_(po,t,e)),mo=(t,e)=>{const n=e?Le(e)&&e:document;return n?Dt(n.querySelectorAll(t)):[]},os=(t,e)=>{const n=e?Le(e)&&e:document;return n&&n.querySelector(t)},tn=(t,e)=>Le(t)&&t.matches(e),ho=t=>tn(t,"body"),en=t=>t?Dt(t.childNodes):[],te=t=>t&&t.parentElement,Ft=(t,e)=>Le(t)&&t.closest(e),nn=t=>document.activeElement,ss=(t,e,n)=>{const o=Ft(t,e),s=t&&os(n,o),r=Ft(s,e)===o;return!(!o||!s)&&(o===t||s===t||r&&Ft(Ft(t,n),e)!==o)},jt=t=>{X(hn(t),(t=>{const e=te(t);t&&e&&e.removeChild(t)}))},ft=(t,e)=>_(jt,t&&e&&X(hn(e),(e=>{e&&t.appendChild(e)})));let yo;const cs=()=>yo,rs=t=>{yo=t},Ut=t=>{const e=document.createElement("div");return Ht(e,"class",t),e},go=t=>{const e=Ut(),n=cs(),o=t.trim();return e.innerHTML=n?n.createHTML(o):o,X(en(e),(t=>jt(t)))},_n=(t,e)=>t.getPropertyValue(e)||t[e]||"",bo=t=>{const e=t||0;return isFinite(e)?e:0},he=t=>bo(parseFloat(t||"")),on=t=>Math.round(1e4*t)/1e4,vo=t=>`${on(bo(t))}px`;function ee(t,e){t&&e&&X(e,((e,n)=>{try{const o=t.style,s=$e(e)||Ie(e)?"":Et(e)?vo(e):e;0===n.indexOf("--")?o.setProperty(n,s):o[n]=s}catch{}}))}function $t(t,e,n){const o=ne(e);let s=o?"":{};if(t){const r=pt.getComputedStyle(t,n)||t.style;s=o?_n(r,e):Dt(e).reduce(((t,e)=>(t[e]=_n(r,e),t)),s)}return s}const kn=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",r=`${o}top${s}`,c=`${o}right${s}`,l=`${o}bottom${s}`,i=`${o}left${s}`,a=$t(t,[r,c,l,i]);return{t:he(a[r]),r:he(a[c]),b:he(a[l]),l:he(a[i])}},Fe=(t,e)=>"translate"+(xe(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`),ls=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),is={w:0,h:0},Pe=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:is,as=t=>Pe("inner",t||pt),Vt=_(Pe,"offset"),wo=_(Pe,"client"),He=_(Pe,"scroll"),Sn=t=>{const e=parseFloat($t(t,_e))||0,n=parseFloat($t(t,ke))||0;return{w:e-Ye(e),h:n-Ye(n)}},Ue=t=>t.getBoundingClientRect(),us=t=>!!t&&ls(t),sn=t=>!(!t||!t[ke]&&!t[_e]),So=(t,e)=>{const n=sn(t);return!sn(e)&&n},Dn=(t,e,n,o)=>{X(Rt(e),(e=>{t&&t.removeEventListener(e,n,o)}))},Q=(t,e,n,o)=>{var s;const r=null==(s=o&&o.H)||s,c=o&&o.I||!1,l=o&&o.A||!1,i={passive:r,capture:c};return _(yt,Rt(e).map((e=>{const o=l?s=>{Dn(t,e,o,c),n&&n(s)}:n;return t&&t.addEventListener(e,o,i),_(Dn,t,e,o,c)})))},xo=t=>t.stopPropagation(),cn=t=>t.preventDefault(),Eo=t=>xo(t)||cn(t),xt=(t,e)=>{const{x:n,y:o}=Et(e)?{x:e,y:e}:e||{};Et(n)&&(t.scrollLeft=n),Et(o)&&(t.scrollTop=o)},ht=t=>({x:t.scrollLeft,y:t.scrollTop}),Co=()=>({D:{x:0,y:0},M:{x:0,y:0}}),ds=(t,e)=>{const{D:n,M:o}=t,{w:s,h:r}=e,c=(t,e,n)=>{let o=$n(t)*n,s=$n(e)*n;if(o===s){const n=we(t),r=we(e);s=n>r?0:s,o=n<r?0:o}return o=o===s?0:o,[o+0,s+0]},[l,i]=c(n.x,o.x,s),[a,d]=c(n.y,o.y,r);return{D:{x:l,y:a},M:{x:i,y:d}}},Ve=({D:t,M:e})=>{const n=(t,e)=>0===t&&t<=e;return{x:n(t.x,e.x),y:n(t.y,e.y)}},Mn=({D:t,M:e},n)=>{const o=(t,e,n)=>ao(0,1,(t-n)/(t-e)||0);return{x:o(t.x,e.x,n.x),y:o(t.y,e.y,n.y)}},rn=t=>{t&&t.focus&&t.focus({preventScroll:!0})},Pn=(t,e)=>{X(hn(e),t)},ln=t=>{const e=new Map,n=(t,n)=>{if(t){const o=e.get(t);Pn((t=>{o&&o[t?"delete":"clear"](t)}),n)}else e.forEach((t=>{t.clear()})),e.clear()},o=(t,s)=>{if(ne(t)){const o=e.get(t)||new Set;return e.set(t,o),Pn((t=>{bt(t)&&o.add(t)}),s),_(n,t,s)}Ie(s)&&s&&n();const r=vt(t),c=[];return X(r,(e=>{const n=t[e];n&&nt(c,o(e,n))})),_(yt,c)};return o(t||{}),[o,n,(t,n)=>{X(Dt(e.get(t)),(t=>{n&&!Ke(n)?t.apply(0,n):t()}))}]},Oo={},To={},fs=t=>{X(t,(t=>X(t,((e,n)=>{Oo[n]=t[n]}))))},Ho=(t,e,n)=>vt(t).map((o=>{const{static:s,instance:r}=t[o],[c,l,i]=n||[],a=n?r:s;if(a){const t=n?a(c,l,e):a(e);return(i||To)[o]=t}})),oe=t=>To[t],ps="__osOptionsValidationPlugin",Zt="data-overlayscrollbars",be="os-environment",ye=`${be}-scrollbar-hidden`,We=`${Zt}-initialize`,ve="noClipping",Nn=`${Zt}-body`,kt=Zt,ms="host",At=`${Zt}-viewport`,hs=so,ys=co,gs="arrange",Ao="measuring",bs="scrolling",$o="scrollbarHidden",vs="noContent",an=`${Zt}-padding`,Rn=`${Zt}-content`,xn="os-size-observer",ws=`${xn}-appear`,Ss=`${xn}-listener`,xs="os-trinsic-observer",Es="os-theme-none",gt="os-scrollbar",Cs=`${gt}-rtl`,Os=`${gt}-horizontal`,Ts=`${gt}-vertical`,Io=`${gt}-track`,En=`${gt}-handle`,Hs=`${gt}-visible`,As=`${gt}-cornerless`,zn=`${gt}-interaction`,Bn=`${gt}-unusable`,un=`${gt}-auto-hide`,Fn=`${un}-hidden`,Un=`${gt}-wheel`,$s=`${Io}-interactive`,Is=`${En}-interactive`,Ls="__osSizeObserverPlugin",_s=(t,e)=>{const{T:n}=e,[o,s]=t("showNativeOverlaidScrollbars");return[o&&n.x&&n.y,s]},qt=t=>0===t.indexOf(Lt),ks=(t,e)=>{const n=(t,e,n,o)=>{const s=t===Lt?Nt:t.replace(`${Lt}-`,""),r=qt(t),c=qt(n);return e||o?r&&c?Lt:r?e&&o?s:e?Lt:Nt:e?s:c&&o?Lt:Nt:Nt},o={x:n(e.x,t.x,e.y,t.y),y:n(e.y,t.y,e.x,t.x)};return{k:o,R:{x:o.x===Wt,y:o.y===Wt}}},Lo="__osScrollbarsHidingPlugin",Ds="__osClickScrollPlugin",Vn=t=>JSON.stringify(t,((t,e)=>{if(bt(e))throw 0;return e})),Wn=(t,e)=>t?`${e}`.split(".").reduce(((t,e)=>t&&lo(t,e)?t[e]:void 0),t):void 0,Ms={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},_o=(t,e)=>{const n={};return X(Qt(vt(e),vt(t)),(o=>{const s=t[o],r=e[o];if(xe(s)&&xe(r))W(n[o]={},_o(s,r)),yn(n[o])&&delete n[o];else if(lo(e,o)&&r!==s){let t=!0;if(Ot(s)||Ot(r))try{Vn(s)===Vn(r)&&(t=!1)}catch{}t&&(n[o]=r)}})),n},jn=(t,e,n)=>o=>[Wn(t,o),n||void 0!==Wn(e,o)];let ko;const Ps=()=>ko,Ns=t=>{ko=t};let je;const Rs=()=>{const t=(t,e,n)=>{ft(document.body,t),ft(document.body,t);const o=wo(t),s=Vt(t),r=Sn(e);return n&&jt(t),{x:s.h-o.h+r.h,y:s.w-o.w+r.w}},e=go(`<div class="${be}"><div></div><style>${`.${be}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${be} div{width:200%;height:200%;margin:10px 0}.${ye}{scrollbar-width:none!important}.${ye}::-webkit-scrollbar,.${ye}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`}</style></div>`)[0],n=e.firstChild,o=e.lastChild,s=Ps();s&&(o.nonce=s);const[r,,c]=ln(),[l,i]=mt({o:t(e,n),i:ge},_(t,e,n,!0)),[a]=i(),d=(t=>{let e=!1;const n=wn(t,ye);try{e="none"===$t(t,"scrollbar-width")||"none"===$t(t,"display","::-webkit-scrollbar")}catch{}return n(),e})(e),u={x:0===a.x,y:0===a.y},p={elements:{host:null,padding:!d,viewport:t=>d&&ho(t)&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},h=W({},Ms),y=_(W,{},h),m=_(W,{},p),f={N:a,T:u,P:d,G:!!Kt,K:_(r,"r"),Z:m,tt:t=>W(p,t)&&m(),nt:y,ot:t=>W(h,t)&&y(),st:W({},p),et:W({},h)};if(St(e,"style"),jt(e),Q(pt,"resize",(()=>{c("r",[])})),bt(pt.matchMedia)&&!d&&(!u.x||!u.y)){const t=e=>{const n=pt.matchMedia(`(resolution: ${pt.devicePixelRatio}dppx)`);Q(n,"change",(()=>{e(),t(e)}),{A:!0})};t((()=>{const[t,e]=l();W(f.N,t),c("r",[e])}))}return f},Tt=()=>(je||(je=Rs()),je),zs=(t,e,n)=>{let o=!1;const s=!!n&&new WeakMap,r=r=>{if(s&&n){X(n.map((e=>{const[n,o]=e||[];return[o&&n?(r||mo)(n,t):[],o]})),(n=>X(n[0],(r=>{const c=n[1],l=s.get(r)||[];if(t.contains(r)&&c){const t=Q(r,c,(n=>{o?(t(),s.delete(r)):e(n)}));s.set(r,nt(l,t))}else yt(l),s.delete(r)}))))}};return r(),[()=>{o=!0},r]},qn=(t,e,n,o)=>{let s=!1;const{ct:r,rt:c,lt:l,it:i,ut:a,ft:d}=o||{},u=Oe((()=>s&&n(!0)),{_:33,p:99}),[p,h]=zs(t,u,l),y=c||[],m=Qt(r||[],y),f=(s,r)=>{if(!Ke(r)){const c=a||_t,l=d||_t,u=[],p=[];let m=!1,f=!1;if(X(r,(n=>{const{attributeName:s,target:r,type:a,oldValue:d,addedNodes:h,removedNodes:b}=n,v="attributes"===a,g="childList"===a,w=t===r,x=v&&s,_=x&&gn(r,s||""),$=ne(_)?_:null,E=x&&d!==$,k=Yn(y,s)&&E;if(e&&(g||!w)){const e=v&&E,a=e&&i&&tn(r,i),p=(a?!c(r,s,d,$):!v||e)&&!l(n,!!a,t,o);X(h,(t=>nt(u,t))),X(b,(t=>nt(u,t))),f=f||p}!e&&w&&E&&!c(r,s,d,$)&&(nt(p,s),m=m||k)})),h((t=>Qe(u).reduce(((e,n)=>(nt(e,mo(t,n)),tn(n,t)?nt(e,n):e)),[]))),e)return!s&&f&&n(!1),[!1];if(!Ke(p)||m){const t=[Qe(p),m];return s||n.apply(0,t),t}}},b=new ts(_(f,!1));return[()=>(b.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:m,subtree:e,childList:e,characterData:e}),s=!0,()=>{s&&(p(),b.disconnect(),s=!1)}),()=>{if(s)return u.m(),f(!0,b.takeRecords())}]};let Pt=null;const Do=(t,e,n)=>{const{_t:o}=n||{},s=oe(Ls),[r]=mt({o:!1,u:!0});return()=>{const n=[],c=go(`<div class="${xn}"><div class="${Ss}"></div></div>`)[0],l=c.firstChild,i=t=>{let n=!1,o=!1;if(t instanceof ResizeObserverEntry){const[e,,s]=r(t.contentRect),c=sn(e);o=So(e,s),n=!o&&!c}else o=!0===t;n||e({dt:!0,_t:o})};if(zt){if(!Ie(Pt)){const e=new zt(_t);e.observe(t,{get box(){Pt=!0}}),Pt=Pt||!1,e.disconnect()}const e=Oe(i,{_:0,p:0}),o=t=>e(t.pop()),s=new zt(o);if(s.observe(Pt?t:l),nt(n,[()=>s.disconnect(),!Pt&&ft(t,c)]),Pt){const e=new zt(o);e.observe(t,{box:"border-box"}),nt(n,(()=>e.disconnect()))}}else{if(!s)return _t;{const[e,r]=s(l,i,o);nt(n,Qt([wn(c,ws),Q(c,"animationstart",e),ft(t,c)],r))}}return _(yt,n)}},Bs=(t,e)=>{let n;const o=Ut(xs),[s]=mt({o:!1}),r=(t,n)=>{if(t){const o=s((t=>0===t.h||t.isIntersecting||t.intersectionRatio>0)(t)),[,r]=o;return r&&!n&&e(o)&&[o]}},c=(t,e)=>r(e.pop(),t);return[()=>{const e=[];if(In)n=new In(_(c,!1),{root:t}),n.observe(o),nt(e,(()=>{n.disconnect()}));else{const t=()=>{const t=Vt(o);r(t)};nt(e,Do(o,t)()),t()}return _(yt,nt(e,ft(t,o)))},()=>n&&c(!0,n.takeRecords())]},Fs=(t,e,n,o)=>{let s,r,c,l,i,a;const d=`[${kt}]`,u=`[${At}]`,p=["id","class","style","open","wrap","cols","rows"],{vt:h,ht:y,U:m,gt:f,bt:b,L:v,wt:g,yt:w,St:x,Ot:_}=t,$=t=>"rtl"===$t(t,"direction"),E={$t:!1,F:$(h)},k=Tt(),S=oe(Lo),[L]=mt({i:ro,o:{w:0,h:0}},(()=>{const o=S&&S.V(t,e,E,k,n).W,s=!(g&&v)&&vn(y,kt,ve),r=!v&&w(gs),c=r&&ht(f),l=c&&_(),i=x(Ao,s),a=r&&o&&o()[0],d=He(m),u=Sn(m);return a&&a(),xt(f,c),l&&l(),s&&i(),{w:d.w+u.w,h:d.h+u.h}})),O=Oe(o,{_:()=>s,p:()=>r,S(t,e){const[n]=t,[o]=e;return[Qt(vt(n),vt(o)).reduce(((t,e)=>(t[e]=n[e]||o[e],t)),{})]}}),T=t=>{const e=$(h);W(t,{Ct:a!==e}),W(E,{F:e}),a=e},H=(t,e)=>{const[n,s]=t,r={xt:s};return W(E,{$t:n}),e||o(r),r},C=({dt:t,_t:e})=>{const n=t&&!e||!k.P?o:O,s={dt:t||e,_t:e};T(s),n(s)},D=(t,e)=>{const[,n]=L(),s={Ht:n};return T(s),n&&!e&&(t?o:O)(s),s},A=(t,e,n)=>{const o={Et:e};return T(o),e&&!n&&O(o),o},[M,P]=b?Bs(y,H):[],Q=!v&&Do(y,C,{_t:!0}),[X,I]=qn(y,!1,A,{rt:p,ct:p}),R=v&&zt&&new zt((t=>{const e=t[t.length-1].contentRect;C({dt:!0,_t:So(e,i)}),i=e})),B=Oe((()=>{const[,t]=L();o({Ht:t})}),{_:222,v:!0});return[()=>{R&&R.observe(y);const t=Q&&Q(),e=M&&M(),n=X(),o=k.K((t=>{t?O({zt:t}):B()}));return()=>{R&&R.disconnect(),t&&t(),e&&e(),l&&l(),n(),o()}},({It:t,At:e,Dt:n})=>{const o={},[i]=t("update.ignoreMutation"),[a,h]=t("update.attributes"),[y,f]=t("update.elementEvents"),[g,w]=t("update.debounce"),x=e||n;if(f||h){c&&c(),l&&l();const[t,e]=qn(b||m,!0,D,{ct:Qt(p,a||[]),lt:y,it:d,ft:(t,e)=>{const{target:n,attributeName:o}=t;return!(e||!o||v)&&ss(n,d,u)||!!Ft(n,`.${gt}`)||!!(t=>bt(i)&&i(t))(t)}});l=t(),c=e}if(w)if(O.m(),Ot(g)){const t=g[0],e=g[1];s=Et(t)&&t,r=Et(e)&&e}else Et(g)?(s=g,r=!1):(s=!1,r=!1);if(x){const t=I(),e=P&&P(),n=c&&c();t&&W(o,A(t[0],t[1],x)),e&&W(o,H(e[0],x)),n&&W(o,D(n[0],x))}return T(o),o},E]},Mo=(t,e)=>bt(e)?e.apply(0,t):e,Us=(t,e,n,o)=>{const s=pn(o)?n:o;return Mo(t,s)||e.apply(0,t)},Po=(t,e,n,o)=>{const s=pn(o)?n:o,r=Mo(t,s);return!!r&&(Ce(r)?r:e.apply(0,t))},Vs=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=e||{},{T:s,P:r,Z:c}=Tt(),{nativeScrollbarsOverlaid:l,body:i}=c().cancel,a=n??l,d=pn(o)?i:o,u=(s.x||s.y)&&a,p=t&&($e(d)?!r:d);return!!u||!!p},Ws=(t,e,n,o)=>{const s="--os-viewport-percent",r="--os-scroll-percent",c="--os-scroll-direction",{Z:l}=Tt(),{scrollbars:i}=l(),{slot:a}=i,{vt:d,ht:u,U:p,Mt:h,gt:y,wt:m,L:f}=e,{scrollbars:b}=h?{}:t,{slot:v}=b||{},g=[],w=[],x=[],$=Po([d,u,p],(()=>f&&m?d:u),a,v),E=t=>{if(Kt){let e=null,o=[];const s=new Kt({source:y,axis:t}),r=()=>{e&&e.cancel(),e=null};return{Rt:c=>{const{Tt:l}=n,i=Ve(l)[t],a="x"===t,d=[Fe(0,a),Fe(`calc(100cq${a?"w":"h"} + -100%)`,a)],u=i?d:d.reverse();return o[0]===u[0]&&o[1]===u[1]||(r(),o=u,e=c.kt.animate({clear:["left"],transform:u},{timeline:s})),r}}}},k={x:E("x"),y:E("y")},S=(t,e,n)=>{const o=n?wn:po;X(t,(t=>{o(t.Ut,e)}))},L=(t,e)=>{X(t,(t=>{const[n,o]=e(t);ee(n,o)}))},O=(t,e,n)=>{const o=Ie(n),s=!o||!n;(!o||n)&&S(w,t,e),s&&S(x,t,e)},W=t=>{const e=t?"x":"y",n=Ut(`${gt} ${t?Os:Ts}`),s=Ut(Io),r=Ut(En),c={Ut:n,Pt:s,kt:r},l=k[e];return nt(t?w:x,c),nt(g,[ft(n,s),ft(s,r),_(jt,n),l&&l.Rt(c),o(c,O,t)]),c},T=_(W,!0),H=_(W,!1);return T(),H(),[{Nt:()=>{const t=(()=>{const{Vt:t,Lt:e}=n,o=(t,e)=>ao(0,1,t/(t+e)||0);return{x:o(e.x,t.x),y:o(e.y,t.y)}})(),e=t=>e=>[e.Ut,{[s]:on(t)+""}];L(w,e(t.x)),L(x,e(t.y))},qt:()=>{if(!Kt){const{Tt:t}=n,e=Mn(t,ht(y)),o=t=>e=>[e.Ut,{[r]:on(t)+""}];L(w,o(e.x)),L(x,o(e.y))}},Bt:()=>{const{Tt:t}=n,e=Ve(t),o=t=>e=>[e.Ut,{[c]:t?"0":"1"}];L(w,o(e.x)),L(x,o(e.y)),Kt&&(w.forEach(k.x.Rt),x.forEach(k.y.Rt))},Ft:()=>{if(f&&!m){const{Vt:t,Tt:e}=n,o=Ve(e),s=Mn(e,ht(y)),r=e=>{const{Ut:n}=e,r=te(n)===p&&n,c=(t,e,n)=>{const o=e*t;return vo(n?o:-o)};return[r,r&&{transform:Fe({x:c(s.x,t.x,o.x),y:c(s.y,t.y,o.y)})}]};L(w,r),L(x,r)}},jt:O,Xt:{Yt:w,Wt:T,Jt:_(L,w)},Gt:{Yt:x,Wt:H,Jt:_(L,x)}},()=>(ft($,w[0].Ut),ft($,x[0].Ut),_(yt,g))]},js=(t,e,n,o)=>(s,r,c)=>{const{ht:l,U:i,L:a,gt:d,Kt:u,Ot:p}=e,{Ut:h,Pt:y,kt:m}=s,[f,b]=Bt(333),[v,g]=Bt(444),w=t=>{bt(d.scrollBy)&&d.scrollBy({behavior:"smooth",left:t.x,top:t.y})};let x=!0;return _(yt,[Q(m,"pointermove pointerleave",o),Q(h,"pointerenter",(()=>{r(zn,!0)})),Q(h,"pointerleave pointercancel",(()=>{r(zn,!1)})),!a&&Q(h,"mousedown",(()=>{const t=nn();(Ln(t,At)||Ln(t,kt)||t===document.body)&&Se(_(rn,i),25)})),Q(h,"wheel",(t=>{const{deltaX:e,deltaY:n,deltaMode:o}=t;x&&0===o&&te(h)===l&&w({x:e,y:n}),x=!1,r(Un,!0),f((()=>{x=!0,r(Un)})),cn(t)}),{H:!1,I:!0}),Q(h,"pointerdown",_(Q,u,"click",Eo,{A:!0,I:!0,H:!1}),{I:!0}),(()=>{const e="pointerup pointercancel lostpointercapture",o="client"+(c?"X":"Y"),s=c?_e:ke,r=c?"left":"top",l=c?"w":"h",i=c?"x":"y",a=[];return Q(y,"pointerdown",(c=>{const h=Ft(c.target,`.${En}`)===m,f=h?m:y,b=t.scrollbars,x=b[h?"dragScroll":"clickScroll"],{button:$,isPrimary:E,pointerType:k}=c,{pointers:S}=b;if(0===$&&E&&x&&(S||[]).includes(k)){yt(a),g();const t=!h&&(c.shiftKey||"instant"===x),b=_(Ue,m),$=_(Ue,y),E=(t,e)=>(t||b())[r]-(e||$())[r],k=Ye(Ue(d)[s])/Vt(d)[l]||1,S=((t,e)=>o=>{const{Vt:s}=n,r=Vt(y)[l]-Vt(m)[l],c=e*o/r*s[i];xt(d,{[i]:t+c})})(ht(d)[i],1/k),L=c[o],O=b(),W=$(),T=O[s],H=E(O,W)+T/2,C=L-W[r],D=h?0:C-H,A=t=>{yt(X),f.releasePointerCapture(t.pointerId)},M=h||t,P=p(),X=[Q(u,e,A),Q(u,"selectstart",(t=>cn(t)),{H:!1}),Q(y,e,A),M&&Q(y,"pointermove",(t=>S(D+(t[o]-L)))),M&&(()=>{const t=ht(d);P();const e=ht(d),n={x:e.x-t.x,y:e.y-t.y};(we(n.x)>3||we(n.y)>3)&&(p(),xt(d,t),w(n),v(P))})];if(f.setPointerCapture(c.pointerId),t)S(D);else if(!h){const t=oe(Ds);if(t){const e=t(S,D,T,(t=>{t?P():nt(X,P)}));nt(X,e),nt(a,_(e,!0))}}}}))})(),b,g])},qs=(t,e,n,o,s,r)=>{let c,l,i,a,d,u=_t,p=0;const h=["mouse","pen"],y=t=>h.includes(t.pointerType),[m,f]=Bt(),[b,v]=Bt(100),[g,w]=Bt(100),[x,$]=Bt((()=>p)),[E,k]=Ws(t,s,o,js(e,s,o,(t=>y(t)&&M()))),{ht:S,Qt:L,wt:O}=s,{jt:W,Nt:T,qt:H,Bt:C,Ft:D}=E,A=(t,e)=>{if($(),t)W(Fn);else{const t=_(W,Fn,!0);p>0&&!e?x(t):t()}},M=()=>{(i?!c:!a)&&(A(!0),b((()=>{A(!1)})))},P=t=>{W(un,t,!0),W(un,t,!1)},X=t=>{y(t)&&(c=i,i&&A(!0))},I=[$,v,w,f,()=>u(),Q(S,"pointerover",X,{A:!0}),Q(S,"pointerenter",X),Q(S,"pointerleave",(t=>{y(t)&&(c=!1,i&&A(!1))})),Q(S,"pointermove",(t=>{y(t)&&l&&M()})),Q(L,"scroll",(t=>{m((()=>{H(),M()})),r(t),D()}))];return[()=>_(yt,nt(I,k())),({It:t,Dt:e,Zt:s,tn:r})=>{const{nn:c,sn:h,en:y,cn:m}=r||{},{Ct:f,_t:b}=s||{},{F:v}=n,{T:w}=Tt(),{k:x,rn:$}=o,[E,k]=t("showNativeOverlaidScrollbars"),[S,M]=t("scrollbars.theme"),[X,I]=t("scrollbars.visibility"),[R,B]=t("scrollbars.autoHide"),[U,j]=t("scrollbars.autoHideSuspend"),[V]=t("scrollbars.autoHideDelay"),[F,z]=t("scrollbars.dragScroll"),[N,Z]=t("scrollbars.clickScroll"),[q,K]=t("overflow"),Y=b&&!e,G=$.x||$.y,J=c||h||m||f||e,tt=y||I||K,et=E&&w.x&&w.y,nt=(t,e,n)=>{const o=t.includes(Wt)&&(X===Lt||"auto"===X&&e===Wt);return W(Hs,o,n),o};if(p=V,Y&&(U&&G?(P(!1),u(),g((()=>{u=Q(L,"scroll",_(P,!0),{A:!0})}))):P(!0)),k&&W(Es,et),M&&(W(d),W(S,!0),d=S),j&&!U&&P(!0),B&&(l="move"===R,i="leave"===R,a="never"===R,A(a,!0)),z&&W(Is,F),Z&&W($s,!!N),tt){const t=nt(q.x,x.x,!0),e=nt(q.y,x.y,!1);W(As,!(t&&e))}J&&(H(),T(),D(),m&&C(),W(Bn,!$.x,!0),W(Bn,!$.y,!1),W(Cs,v&&!O))},{},E]},Zs=t=>{const e=Tt(),{Z:n,P:o}=e,{elements:s}=n(),{padding:r,viewport:c,content:l}=s,i=Ce(t),a=i?{}:t,{elements:d}=a,{padding:u,viewport:p,content:h}=d||{},y=i?t:a.target,m=ho(y),f=y.ownerDocument,b=f.documentElement,v=()=>f.defaultView||pt,g=_(Us,[y]),w=_(Po,[y]),x=_(Ut,""),$=_(g,x,c),E=_(w,x,l),k=$(p),S=k===y,L=S&&m,O=!S&&E(h),W=!S&&k===O,T=L?b:k,H=L?T:y,C=!S&&w(x,r,u),D=!W&&O,A=[D,T,C,H].map((t=>Ce(t)&&!te(t)&&t)),M=t=>t&&Yn(A,t),P=!M(T)&&(t=>{const e=Vt(t),n=He(t),o=$t(t,so),s=$t(t,co);return n.w-e.w>0&&!qt(o)||n.h-e.h>0&&!qt(s)})(T)?T:y,X=L?b:T,I={vt:y,ht:H,U:T,ln:C,bt:D,gt:X,Qt:L?f:T,an:m?b:P,Kt:f,wt:m,Mt:i,L:S,un:v,yt:t=>vn(T,At,t),St:(t,e)=>Te(T,At,t,e),Ot:()=>Te(X,At,bs,!0)},{vt:R,ht:B,ln:U,U:j,bt:V}=I,F=[()=>{St(B,[kt,We]),St(R,We),m&&St(b,[We,kt])}];let z=en([V,j,U,B,R].find((t=>t&&!M(t))));const N=L?R:V||j,Z=_(yt,F);return[I,()=>{const t=v(),e=nn(),n=t=>{ft(te(t),en(t)),jt(t)},s=t=>Q(t,"focusin focusout focus blur",Eo,{I:!0,H:!1}),r="tabindex",c=gn(j,r),l=s(e);return Ht(B,kt,S?"":ms),Ht(U,an,""),Ht(j,At,""),Ht(V,Rn,""),S||(Ht(j,r,c||"-1"),m&&Ht(b,Nn,"")),ft(N,z),ft(B,U),ft(U||B,!S&&j),ft(j,V),nt(F,[l,()=>{const t=nn(),e=M(j),o=e&&t===j?R:t,l=s(o);St(U,an),St(V,Rn),St(j,At),m&&St(b,Nn),c?Ht(j,r,c):St(j,r),M(V)&&n(V),e&&n(j),M(U)&&n(U),rn(o),l()}]),o&&!S&&(bn(j,At,$o),nt(F,_(St,j,At))),rn(!S&&m&&e===R&&t.top===t?j:e),l(),z=0,Z},Z]},Gs=({bt:t})=>({Zt:e,fn:n,Dt:o})=>{const{xt:s}=e||{},{$t:r}=n;t&&(s||o)&&ee(t,{[ke]:r&&"100%"})},Xs=({ht:t,ln:e,U:n,L:o},s)=>{const[r,c]=mt({i:ns,o:kn()},_(kn,t,"padding",""));return({It:t,Zt:l,fn:i,Dt:a})=>{let[d,u]=c(a);const{P:p}=Tt(),{dt:h,Ht:y,Ct:m}=l||{},{F:f}=i,[b,v]=t("paddingAbsolute");(h||u||a||y)&&([d,u]=r(a));const g=!o&&(v||m||u);if(g){const t=!b||!e&&!p,o=d.r+d.l,r=d.t+d.b,c={[no]:t&&!f?-o:0,[oo]:t?-r:0,[eo]:t&&f?-o:0,top:t?-d.t:0,right:t?f?-d.r:"auto":0,left:t?f?"auto":-d.l:0,[_e]:t&&`calc(100% + ${o}px)`},l={[Jn]:t?d.t:0,[Kn]:t?d.r:0,[to]:t?d.b:0,[Qn]:t?d.l:0};ee(e||n,c),ee(n,l),W(s,{ln:d,_n:!t,j:e?l:W({},c,l)})}return{dn:g}}},Ys=(t,e)=>{const n=Tt(),{ht:o,ln:s,U:r,L:c,Qt:l,gt:i,wt:a,St:d,un:u}=t,{P:p}=n,h=a&&c,y=_(Gn,0),m={display:()=>!1,direction:t=>"ltr"!==t,flexDirection:t=>t.endsWith("-reverse"),writingMode:t=>"horizontal-tb"!==t},f=vt(m),b={i:ro,o:{w:0,h:0}},v={i:ge,o:{}},g=t=>{d(Ao,!h&&t)},[w,x]=mt(b,_(Sn,r)),[$,E]=mt(b,_(He,r)),[k,S]=mt(b),[L]=mt(v),[O,T]=mt(b),[H]=mt(v),[C]=mt({i:(t,e)=>De(t,e,f),o:{}},(()=>us(r)?$t(r,f):{})),[D,A]=mt({i:(t,e)=>ge(t.D,e.D)&&ge(t.M,e.M),o:Co()}),M=oe(Lo),P=(t,e)=>`${e?hs:ys}${es(t)}`;return({It:c,Zt:a,fn:b,Dt:v},{dn:_})=>{const{dt:X,Ht:I,Ct:R,_t:B,zt:U}=a||{},j=M&&M.V(t,e,b,n,c),{Y:V,W:F,J:z}=j||{},[N,Z]=_s(c,n),[q,K]=c("overflow"),Y=qt(q.x),G=qt(q.y),J=X||_||I||R||U||Z;let tt=x(v),et=E(v),nt=S(v),ot=T(v);if(Z&&p&&d($o,!N),J){vn(o,kt,ve)&&g(!0);const[t]=F?F():[],[e]=tt=w(v),[n]=et=$(v),s=wo(r),c=h&&as(u()),l={w:y(n.w+e.w),h:y(n.h+e.h)},i={w:y((c?c.w:s.w+y(s.w-n.w))+e.w),h:y((c?c.h:s.h+y(s.h-n.h))+e.h)};t&&t(),ot=O(i),nt=k(((t,e)=>{const n=pt.devicePixelRatio%1!=0?1:0,o={w:y(t.w-e.w),h:y(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}})(l,i),v)}const[st,rt]=ot,[ct,lt]=nt,[it,at]=et,[dt,ut]=tt,[yt,mt]=L({x:ct.w>0,y:ct.h>0}),ft=Y&&G&&(yt.x||yt.y)||Y&&yt.x&&!yt.y||G&&yt.y&&!yt.x,bt=_||R||U||ut||at||rt||lt||K||Z||J,gt=ks(yt,q),[wt,_t]=H(gt.k),[$t,Et]=C(v),St=R||B||Et||mt||v,[Ot,Tt]=St?D((t=>{if(!f.some((e=>{const n=t[e];return n&&m[e](n)})))return{D:{x:0,y:0},M:{x:1,y:1}};g(!0);const e=ht(i),n=d(vs,!0),o=Q(l,Wt,(t=>{const n=ht(i);t.isTrusted&&n.x===e.x&&n.y===e.y&&xo(t)}),{I:!0,A:!0});xt(i,{x:0,y:0}),n();const s=ht(i),r=He(i);xt(i,{x:r.w,y:r.h});const c=ht(i);xt(i,{x:c.x-s.x<1&&-r.w,y:c.y-s.y<1&&-r.h});const a=ht(i);return xt(i,e),fn((()=>o())),{D:s,M:a}})($t),v):A();return bt&&(_t&&(t=>{const e=t=>[Lt,Nt,Wt].map((e=>P(e,t))),n=e(!0).concat(e()).join(" ");d(n),d(vt(t).map((e=>P(t[e],"x"===e))).join(" "),!0)})(gt.k),z&&V&&ee(r,z(gt,b,V(gt,it,dt)))),g(!1),Te(o,kt,ve,ft),Te(s,an,ve,ft),W(e,{k:wt,Lt:{x:st.w,y:st.h},Vt:{x:ct.w,y:ct.h},rn:yt,Tt:ds(Ot,ct)}),{en:_t,nn:rt,sn:lt,cn:Tt||lt,pn:St}}},Js=t=>{const[e,n,o]=Zs(t),s={ln:{t:0,r:0,b:0,l:0},_n:!1,j:{[no]:0,[oo]:0,[eo]:0,[Jn]:0,[Kn]:0,[to]:0,[Qn]:0},Lt:{x:0,y:0},Vt:{x:0,y:0},k:{x:Nt,y:Nt},rn:{x:!1,y:!1},Tt:Co()},{vt:r,gt:c,L:l,Ot:i}=e,{P:a,T:d}=Tt(),u=!a&&(d.x||d.y),p=[Gs(e),Xs(e,s),Ys(e,s)];return[n,t=>{const e={},n=u&&ht(c),o=n&&i();return X(p,(n=>{W(e,n(t,e)||{})})),xt(c,n),o&&o(),l||xt(r,0),e},s,e,o]},Ks=(t,e,n,o,s)=>{let r=!1;const c=jn(e,{}),[l,i,a,d,u]=Js(t),[p,h,y]=Fs(d,a,c,(t=>{g({},t)})),[m,f,,b]=qs(t,e,y,a,d,s),v=t=>vt(t).some((e=>!!t[e])),g=(t,s)=>{if(n())return!1;const{vn:c,Dt:l,At:a,hn:d}=t,u=c||{},p=!!l||!r,m={It:jn(e,u,p),vn:u,Dt:p};if(d)return f(m),!1;const b=s||h(W({},m,{At:a})),g=i(W({},m,{fn:y,Zt:b}));f(W({},m,{Zt:b,tn:g}));const w=v(b),x=v(g),_=w||x||!yn(u)||p;return r=!0,_&&o(t,{Zt:b,tn:g}),_};return[()=>{const{an:t,gt:e,Ot:n}=d,o=ht(t),s=[p(),l(),m()],r=n();return xt(e,o),r(),_(yt,s)},g,()=>({gn:y,bn:a}),{wn:d,yn:b},u]},Cn=new WeakMap,Qs=(t,e)=>{Cn.set(t,e)},tc=t=>{Cn.delete(t)},No=t=>Cn.get(t),Ct=(t,e,n)=>{const{nt:o}=Tt(),s=Ce(t),r=s?t:t.target,c=No(r);if(e&&!c){let c=!1;const l=[],i={},a=t=>{const e=io(t),n=oe(ps);return n?n(e,!0):e},d=W({},o(),a(e)),[u,p,h]=ln(),[y,m,f]=ln(n),b=(t,e)=>{f(t,e),h(t,e)},[v,g,w,x,$]=Ks(t,d,(()=>c),(({vn:t,Dt:e},{Zt:n,tn:o})=>{const{dt:s,Ct:r,xt:c,Ht:l,Et:i,_t:a}=n,{nn:d,sn:u,en:p,cn:h}=o;b("updated",[k,{updateHints:{sizeChanged:!!s,directionChanged:!!r,heightIntrinsicChanged:!!c,overflowEdgeChanged:!!d,overflowAmountChanged:!!u,overflowStyleChanged:!!p,scrollCoordinatesChanged:!!h,contentMutation:!!l,hostMutation:!!i,appear:!!a},changedOptions:t||{},force:!!e}])}),(t=>b("scroll",[k,t]))),E=t=>{tc(r),yt(l),c=!0,b("destroyed",[k,t]),p(),m()},k={options(t,e){if(t){const n=e?o():{},s=_o(d,W(n,a(t)));yn(s)||(W(d,s),g({vn:s}))}return W({},d)},on:y,off:(t,e)=>{t&&e&&m(t,e)},state(){const{gn:t,bn:e}=w(),{F:n}=t,{Lt:o,Vt:s,k:r,rn:l,ln:i,_n:a,Tt:d}=e;return W({},{overflowEdge:o,overflowAmount:s,overflowStyle:r,hasOverflow:l,scrollCoordinates:{start:d.D,end:d.M},padding:i,paddingAbsolute:a,directionRTL:n,destroyed:c})},elements(){const{vt:t,ht:e,ln:n,U:o,bt:s,gt:r,Qt:c}=x.wn,{Xt:l,Gt:i}=x.yn,a=t=>{const{kt:e,Pt:n,Ut:o}=t;return{scrollbar:o,track:n,handle:e}},d=t=>{const{Yt:e,Wt:n}=t,o=a(e[0]);return W({},o,{clone:()=>{const t=a(n());return g({hn:!0}),t}})};return W({},{target:t,host:e,padding:n||o,viewport:o,content:s||o,scrollOffsetElement:r,scrollEventElement:c,scrollbarHorizontal:d(l),scrollbarVertical:d(i)})},update:t=>g({Dt:t,At:!0}),destroy:_(E,!1),plugin:t=>i[vt(t)[0]]};return nt(l,[$]),Qs(r,k),Ho(Oo,Ct,[k,u,i]),Vs(x.wn.wt,!s&&t.cancel)?(E(!0),k):(nt(l,v()),b("initialized",[k]),k.update(),k)}return c};Ct.plugin=t=>{const e=Ot(t),n=e?t:[t],o=n.map((t=>Ho(t,Ct)[0]));return fs(n),e?o:o[0]},Ct.valid=t=>{const e=t&&t.elements,n=bt(e)&&e();return Ee(n)&&!!No(n.target)},Ct.env=()=>{const{N:t,T:e,P:n,G:o,st:s,et:r,Z:c,tt:l,nt:i,ot:a}=Tt();return W({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,scrollTimeline:o,staticDefaultInitialization:s,staticDefaultOptions:r,getDefaultInitialization:c,setDefaultInitialization:l,getDefaultOptions:i,setDefaultOptions:a})},Ct.nonce=Ns,Ct.trustedTypePolicy=rs;const dn=!!document.getElementById("banner-wrapper");function On(t,e){document.addEventListener("click",(n=>{let o=document.getElementById(t),s=n.target;if(s instanceof Node){for(let t of e){let e=document.getElementById(t);if(e==s||e?.contains(s))return}o.classList.add("float-panel-closed")}}))}function ec(){const t=Wo();jo(t)}function nc(){qo(Zo())}function Ro(){const t=document.querySelector("body");t&&(Ct({target:t,cancel:{nativeScrollbarsOverlaid:!0}},{scrollbars:{theme:"scrollbar-base scrollbar-auto py-1",autoHide:"move",autoHideDelay:500,autoHideSuspend:!1}}),document.querySelectorAll("pre").forEach((t=>{Ct(t,{scrollbars:{theme:"scrollbar-base scrollbar-dark px-2",autoHide:"leave",autoHideDelay:500,autoHideSuspend:!1}})})),document.querySelectorAll(".katex-display").forEach((t=>{Ct(t,{scrollbars:{theme:"scrollbar-base scrollbar-auto py-1"}})})))}function oc(){const t=document.getElementById("banner");t?t.classList.remove("opacity-0","scale-105"):console.error("Failed to find the banner element")}function sc(){ec(),nc(),Ro(),oc()}On("display-setting",["display-setting","display-settings-switch"]),On("nav-menu-panel",["nav-menu-panel","nav-menu-switch"]),On("search-panel",["search-panel","search-bar","search-switch"]),sc();const Zn=()=>{window.swup.hooks.on("link:click",(()=>{if(document.documentElement.style.setProperty("--content-delay","0ms"),!dn)return;let t=window.innerHeight*(Xe/100)-72-16,e=document.getElementById("navbar-wrapper");!e||!document.body.classList.contains("lg:is-home")||(document.body.scrollTop>=t||document.documentElement.scrollTop>=t)&&e.classList.add("navbar-hidden")})),window.swup.hooks.on("content:replace",Ro),window.swup.hooks.on("visit:start",(t=>{const e=document.querySelector("body");Yo(t.to.url,Jo("/"))?e.classList.add("lg:is-home"):e.classList.remove("lg:is-home");const n=document.getElementById("page-height-extend");n&&n.classList.remove("hidden");let o=document.getElementById("toc-wrapper");o&&o.classList.add("toc-not-ready")})),window.swup.hooks.on("page:view",(()=>{const t=document.getElementById("page-height-extend");t&&t.classList.remove("hidden")})),window.swup.hooks.on("visit:end",(t=>{setTimeout((()=>{const t=document.getElementById("page-height-extend");t&&t.classList.add("hidden");const e=document.getElementById("toc-wrapper");e&&e.classList.remove("toc-not-ready")}),200)}))};window?.swup?.hooks?Zn():document.addEventListener("swup:enable",Zn);let qe=document.getElementById("back-to-top-btn"),Ze=document.getElementById("toc-wrapper"),Ge=document.getElementById("navbar-wrapper");function cc(){let t=window.innerHeight*(Xe/100);if(qe&&(document.body.scrollTop>t||document.documentElement.scrollTop>t?qe.classList.remove("hide"):qe.classList.add("hide")),dn&&Ze&&(document.body.scrollTop>t||document.documentElement.scrollTop>t?Ze.classList.remove("toc-hide"):Ze.classList.add("toc-hide")),dn&&Ge){const t=16*Go;let e=Xe;document.body.classList.contains("lg:is-home")&&window.innerWidth>=1024&&(e=Xo);let n=window.innerHeight*(e/100)-72-t-16;document.body.scrollTop>=n||document.documentElement.scrollTop>=n?Ge.classList.add("navbar-hidden"):Ge.classList.remove("navbar-hidden")}}window.onscroll=cc,window.onresize=()=>{let t=Math.floor(window.innerHeight*(Vo/100));t-=t%4,document.documentElement.style.setProperty("--banner-height-extend",`${t}px`)};