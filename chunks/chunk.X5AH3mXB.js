import"./chunk.B7BT5NJi.js";import{c as createComponent,a as createAstro,e as renderComponent,r as renderTemplate}from"./chunk.CO0x50cG.js";import{a as getCategoryList,i as i18n,I as I18nKey}from"./chunk.lGIs6T0I.js";import{$ as $$MainGridLayout}from"./chunk.CKpOrP9p.js";import $$ArchivePanel from"./chunk.GHQueIzl.js";const $$Astro=createAstro("https://acg-n.cn/");async function getStaticPaths(){return(await getCategoryList()).map((e=>({params:{category:e.name}})))}const $$category=createComponent((async(e,r,t)=>{const a=e.createAstro($$Astro,r,t);a.self=$$category;const o=a.params.category;return renderTemplate`${renderComponent(e,"MainGridLayout",$$MainGridLayout,{title:i18n(I18nKey.archive),description:i18n(I18nKey.archive)},{default:e=>renderTemplate` ${renderComponent(e,"ArchivePanel",$$ArchivePanel,{categories:[o]})} `})}`}),"/home/runner/work/ldoubil.github.io/ldoubil.github.io/src/pages/archive/category/[category].astro",void 0),$$file="/home/runner/work/ldoubil.github.io/ldoubil.github.io/src/pages/archive/category/[category].astro",$$url="/archive/category/[category]/",_page=Object.freeze(Object.defineProperty({__proto__:null,default:$$category,file:$$file,getStaticPaths:getStaticPaths,url:$$url},Symbol.toStringTag,{value:"Module"}));export{_page as _};