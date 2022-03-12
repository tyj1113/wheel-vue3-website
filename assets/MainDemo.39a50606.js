import{B as p,D as C}from"./Demo.41df8b48.js";import{_ as L}from"./index.033803ce.js";import{d as B,r as c,E as V,t as W,o as X,a as d,e as _,n as Y,u as M,v as b,h as j,f as w,z,g as n,w as o,j as l,k as H,l as R}from"./vendor.ce1e2232.js";const U=B({props:{popClassName:{type:String},container:{type:Element},position:{type:String,default:"top",validator(e){return["top","bottom","left","right"].indexOf(e)!==-1}},trigger:{type:String,default:"click",validator(e){return["click","hover"].indexOf(e)>=0}},timerOut:{type:Number,default:1500}},emits:["open","close"],setup(e,{emit:i}){const t=e,a=c(!1),E=c(),N=V(()=>({[`position-${t.position}`]:t.position,[`${t.popClassName}`]:!!t.popClassName})),u=c(),s=c(),m=c(),S=()=>{!u.value||s.value&&s.value.appendChild(u.value)},I=()=>{z(()=>{(t.container||document.body).appendChild(u.value);const{top:r,left:h,right:O,height:k}=m.value.getBoundingClientRect(),{height:y}=u.value.getBoundingClientRect();let A={top:{top:r+window.scrollY,left:h+window.scrollX},bottom:{top:r+window.scrollY+k,left:h+window.scrollX},left:{top:r+window.scrollY+(k-y)/2,left:h+window.scrollX},right:{top:r+window.scrollY+(k-y)/2,left:O+window.scrollX}};u.value&&(u.value.style.top=A[t.position].top+"px",u.value.style.left=A[t.position].left+"px")})},f=r=>{u.value&&u.value.contains(r.target)||m.value&&m.value.contains(r.target)||t.container&&t.container.contains(r.target)||(clearTimeout(E.value),a.value=!1,document.removeEventListener("click",f))},F=()=>{clearTimeout(E.value),a.value=!0,i("open"),I(),document.addEventListener("click",f)},g=()=>{t.trigger==="hover"?E.value=window.setTimeout(()=>{a.value=!1,i("close"),document.removeEventListener("click",f)},t.timerOut):(a.value=!1,i("close"),document.removeEventListener("click",f))},P=()=>{a.value===!1?F():g()};return W(()=>{t.trigger==="click"?s.value.addEventListener("click",P):(s.value.addEventListener("mouseenter",F),s.value.addEventListener("mouseleave",g))}),X(()=>{S(),t.trigger==="click"?s.value.removeEventListener("click",P):(s.value.removeEventListener("mouseenter",F),s.value.removeEventListener("mouseleave",g))}),(r,h)=>(d(),_("div",{class:"popover",ref_key:"popover",ref:s},[a.value?(d(),_("div",{key:0,class:Y(["wheel-popover-content-wrapper",M(N)]),ref_key:"contentWrapper",ref:u},[b(r.$slots,"content",{close:g},void 0,!0)],2)):j("",!0),w("div",{ref_key:"triggerWrapper",ref:m},[b(r.$slots,"default",{},void 0,!0)],512)],512))}});var v=L(U,[["__scopeId","data-v-41640061"]]);var D=e=>{e.__sourceCodeTitle="\u5E38\u89C4\u4F7F\u7528",e.__sourceCode=`<template>\r
  <div>\r
    <Popover position="left">\r
      <template v-slot:content>\r
        \u6587\u672C\u5185\u5BB9\r
      </template>\r
      <Button>\u5DE6\u4FA7\u5F39\u51FA</Button>\r
    </Popover>\r
    <Popover >\r
      <template v-slot:content>\r
        <strong>\u652F\u6301HTML\u6807\u7B7E</strong>\r
      </template>\r
      <Button>\u9ED8\u8BA4\u4E0A\u65B9\u5F39\u51FA</Button>\r
    </Popover>\r
    <Popover position="right">\r
      <template v-slot:content>\r
        \u518D\u6B21\u5355\u51FB\u6309\u94AE\u53EF\u5173\u95ED\u5361\u7247\r
      </template>\r
      <Button>\u53F3\u4FA7\u5F39\u51FA</Button>\r
    </Popover>\r
    <Popover position="bottom">\r
      <template v-slot:content>\r
        \u6216\u5355\u51FB\u7A7A\u767D\u5904\u4E5F\u53EF\u5173\u95ED\u5361\u7247\r
      </template>\r
      <Button>\u4E0B\u65B9\u5F39\u51FA</Button>\r
    </Popover>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import  Popover  from '../../lib/Popover/Popover.vue';\r
import  Button  from '../../lib/Button/Button.vue';\r
<\/script>\r
<style scoped lang="scss">\r
.popover{\r
  margin: 10px;\r
}\r
</style>`};const q=e=>(H("data-v-95fb3296"),e=e(),R(),e),G=l(" \u6587\u672C\u5185\u5BB9 "),J=l("\u5DE6\u4FA7\u5F39\u51FA"),K=q(()=>w("strong",null,"\u652F\u6301HTML\u6807\u7B7E",-1)),Q=l("\u9ED8\u8BA4\u4E0A\u65B9\u5F39\u51FA"),Z=l(" \u518D\u6B21\u5355\u51FB\u6309\u94AE\u53EF\u5173\u95ED\u5361\u7247 "),ee=l("\u53F3\u4FA7\u5F39\u51FA"),te=l(" \u6216\u5355\u51FB\u7A7A\u767D\u5904\u4E5F\u53EF\u5173\u95ED\u5361\u7247 "),oe=l("\u4E0B\u65B9\u5F39\u51FA"),$=B({setup(e){return(i,t)=>(d(),_("div",null,[n(v,{position:"left"},{content:o(()=>[G]),default:o(()=>[n(p,null,{default:o(()=>[J]),_:1})]),_:1}),n(v,null,{content:o(()=>[K]),default:o(()=>[n(p,null,{default:o(()=>[Q]),_:1})]),_:1}),n(v,{position:"right"},{content:o(()=>[Z]),default:o(()=>[n(p,null,{default:o(()=>[ee]),_:1})]),_:1}),n(v,{position:"bottom"},{content:o(()=>[te]),default:o(()=>[n(p,null,{default:o(()=>[oe]),_:1})]),_:1})]))}});typeof D=="function"&&D($);var ne=L($,[["__scopeId","data-v-95fb3296"]]),x=e=>{e.__sourceCodeTitle="\u4FEE\u6539\u89E6\u53D1\u65B9\u5F0F",e.__sourceCode=`<template>
  <div>
    <Popover trigger="hover" :timer-out="1000">
      <template v-slot:content>
        \u9F20\u6807\u79BB\u5F00\u6309\u94AE1\u79D2\u540E\u81EA\u52A8\u5173\u95ED,\u9ED8\u8BA41.5\u79D2\uFF0C\u70B9\u51FB\u7A7A\u767D\u5904\u4E5F\u53EF\u5173\u95ED
      </template>
      <Button>hover\u6A21\u5F0F</Button>
    </Popover>
  </div>
</template>

<script lang="ts" setup>
import  Popover  from '../../lib/Popover/Popover.vue';
import  Button  from '../../lib/Button/Button.vue';
<\/script>`};const re=l(" \u9F20\u6807\u79BB\u5F00\u6309\u94AE1\u79D2\u540E\u81EA\u52A8\u5173\u95ED,\u9ED8\u8BA41.5\u79D2\uFF0C\u70B9\u51FB\u7A7A\u767D\u5904\u4E5F\u53EF\u5173\u95ED "),ue=l("hover\u6A21\u5F0F"),T=B({setup(e){return(i,t)=>(d(),_("div",null,[n(v,{trigger:"hover","timer-out":1e3},{content:o(()=>[re]),default:o(()=>[n(p,null,{default:o(()=>[ue]),_:1})]),_:1})]))}});typeof x=="function"&&x(T);const se=w("h1",null,"Popover \u6587\u6863",-1),ce=B({setup(e){return(i,t)=>(d(),_("div",null,[se,n(C,{component:ne}),n(C,{component:T})]))}});export{ce as default};
