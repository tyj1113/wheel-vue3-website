import{D as E}from"./Demo.41df8b48.js";import{_ as S}from"./index.033803ce.js";import{a as l,e as u,v as D,d as T,J as N,r as i,t as R,K as V,E as L,f as d,F as C,L as j,u as m,c as w,G as z,n as G,x as I,w as v,g as b,j as k}from"./vendor.ce1e2232.js";const J={};function K(e,n){return l(),u("div",null,[D(e.$slots,"default")])}var h=S(J,[["render",K]]);const M=e=>{for(;e.some(n=>Array.isArray(n));)e=[].concat(...e);return e};const U={class:"wheel-tabs"},q=["onClick"],H={class:"wheel-tabs-content"},O=T({props:{selected:{type:String}},emits:["update:selected"],setup(e,{emit:n}){const f=e,o=N(),c=i(null),_=i(null),B=i(null);R(()=>{V(()=>{const{width:t}=c.value.getBoundingClientRect();_.value.style.width=t+"px";const{left:s}=B.value.getBoundingClientRect(),{left:r}=c.value.getBoundingClientRect(),p=r-s;_.value.style.left=p+"px"},{flush:"post"})});let a=(o==null?void 0:o.default())||[];a.forEach((t,s)=>{t.type.toString()==="Symbol(Fragment)"&&Array.isArray(t.children)&&a.splice(s,1,t.children)}),a=M(a),a.forEach(t=>{if(t.type!==h)throw new Error("Tabs \u5B50\u6807\u7B7E\u5FC5\u987B\u662F Tab")});const y=L(()=>a.find(t=>{var s;return((s=t.props)==null?void 0:s.title)===f.selected})),F=a.map(t=>{var s;return(s=t.props)==null?void 0:s.title}),$=t=>{n("update:selected",t)};return(t,s)=>(l(),u("div",U,[d("div",{class:"wheel-tabs-nav",ref_key:"container",ref:B},[(l(!0),u(C,null,j(m(F),(r,p)=>(l(),u("div",{class:G(["wheel-tabs-nav-item",{selected:r===e.selected}]),ref_for:!0,ref:g=>{r===e.selected&&(c.value=g)},onClick:g=>$(r),key:p},I(r),11,q))),128)),d("div",{class:"wheel-tabs-nav-indicator",ref_key:"indicator",ref:_},null,512)],512),d("div",H,[(l(),w(z(m(y)),{key:m(y).props.title}))])]))}});var x=e=>{e.__sourceCodeTitle=`
\u5E38\u89C4\u4F7F\u7528
`,e.__sourceCode=`<template>
  <Tabs v-model:selected="x">
    <Tab title="\u5BFC\u822A1">\u5185\u5BB91</Tab>
    <Tab title="\u5BFC\u822A2">\u5185\u5BB92</Tab>
  </Tabs>
</template>

<script lang="ts" setup>
import Tabs from '../../lib/Tabs/Tabs.vue';
import Tab from '../../lib/Tabs/Tab.vue';
import {
  ref
} from 'vue';

const x = ref('\u5BFC\u822A2');

<\/script>`};const P=k("\u5185\u5BB91"),Q=k("\u5185\u5BB92"),A=T({setup(e){const n=i("\u5BFC\u822A2");return(f,o)=>(l(),w(O,{selected:n.value,"onUpdate:selected":o[0]||(o[0]=c=>n.value=c)},{default:v(()=>[b(h,{title:"\u5BFC\u822A1"},{default:v(()=>[P]),_:1}),b(h,{title:"\u5BFC\u822A2"},{default:v(()=>[Q]),_:1})]),_:1},8,["selected"]))}});typeof x=="function"&&x(A);const W=d("h1",null,"Tabs \u793A\u4F8B",-1),ee=T({setup(e){return(n,f)=>(l(),u(C,null,[W,b(E,{component:A})],64))}});export{ee as default};
