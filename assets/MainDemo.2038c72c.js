import{B as e,D as _}from"./Demo.41df8b48.js";import{d as l,a as i,e as m,g as u,w as c,F as f,j as r,M as B,c as h,f as g}from"./vendor.ce1e2232.js";import"./index.033803ce.js";var C=t=>{t.__sourceCodeTitle=`
\u5E38\u89C4\u4F7F\u7528
`,t.__sourceCode=`<template>
  <Button @click="showToast1">\u9876\u90E8\u5F39\u51FA,\u9ED8\u8BA43\u79D2\u540E\u6D88\u5931</Button>
  <Button @click="showToast2">\u4FEE\u6539\u5173\u95ED\u65F6\u95F4</Button>
  <Button @click="showToast3">\u6DFB\u52A0\u5173\u95ED\u6309\u94AE</Button>
</template>

<script lang="ts" setup>
import Button from '../../lib/Button/Button.vue';
import {getCurrentInstance} from 'vue'
const {proxy}=getCurrentInstance()

const showToast1=()=>{
  proxy.$toast('\u6211\u88AB\u70B9\u51FB\u4E86',{type:'success'})
}
const showToast3=()=>{
  proxy.$toast('\u53EF\u4F20\u5165\u5173\u95ED\u6309\u94AE\u6587\u672C,\u4EE5\u53CA\u5BF9\u5E94\u56DE\u8C03',{closeButton: {text: '\u5173\u95ED', callback: ()=>{}}})
}
const showToast2=()=>{
  proxy.$toast('1\u79D2\u540E\u5173\u95ED',{autoClose:1})
}
<\/script>`};const F=r("\u9876\u90E8\u5F39\u51FA,\u9ED8\u8BA43\u79D2\u540E\u6D88\u5931"),y=r("\u4FEE\u6539\u5173\u95ED\u65F6\u95F4"),D=r("\u6DFB\u52A0\u5173\u95ED\u6309\u94AE"),k=l({setup(t){const{proxy:s}=B(),n=()=>{s.$toast("\u6211\u88AB\u70B9\u51FB\u4E86",{type:"success"})},a=()=>{s.$toast("\u53EF\u4F20\u5165\u5173\u95ED\u6309\u94AE\u6587\u672C,\u4EE5\u53CA\u5BF9\u5E94\u56DE\u8C03",{closeButton:{text:"\u5173\u95ED",callback:()=>{}}})},o=()=>{s.$toast("1\u79D2\u540E\u5173\u95ED",{autoClose:1})};return(p,M)=>(i(),m(f,null,[u(e,{onClick:n},{default:c(()=>[F]),_:1}),u(e,{onClick:o},{default:c(()=>[y]),_:1}),u(e,{onClick:a},{default:c(()=>[D]),_:1})],64))}});typeof C=="function"&&C(k);var E=t=>{t.__sourceCodeTitle=`
\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE,\u4E0E\u81EA\u52A8\u5173\u95ED\u529F\u80FD
`,t.__sourceCode=`<template>
  <Button @click="showToast">\u5F39\u51FA\u4E00\u4E2A\u65E0\u6CD5\u81EA\u52A8\u5173\u95ED\u7684\u63D0\u793A</Button>
</template>

<script lang="ts" setup>
import Button from '../../lib/Button/Button.vue';
import {getCurrentInstance} from 'vue';

const {proxy} = getCurrentInstance();
const showToast = () => {
  proxy.$toast('\u6211\u65E0\u6CD5\u81EA\u52A8\u5173\u95ED\u8BF7\u70B9\u51FB\u6211\u7684\u5173\u95ED\u6309\u94AE', {
    closeButton: {
      text: '\u5FEB\u70B9\u51FB\u6211\u5427',
      callback() {
        console.log('\u6211\u88AB\u5173\u95ED\u4E86');
      }
    },
    autoClose: false
  });
};
<\/script>`};const A=r("\u5F39\u51FA\u4E00\u4E2A\u65E0\u6CD5\u81EA\u52A8\u5173\u95ED\u7684\u63D0\u793A"),T=l({setup(t){const{proxy:s}=B(),n=()=>{s.$toast("\u6211\u65E0\u6CD5\u81EA\u52A8\u5173\u95ED\u8BF7\u70B9\u51FB\u6211\u7684\u5173\u95ED\u6309\u94AE",{closeButton:{text:"\u5FEB\u70B9\u51FB\u6211\u5427",callback(){console.log("\u6211\u88AB\u5173\u95ED\u4E86")}},autoClose:!1})};return(a,o)=>(i(),h(e,{onClick:n},{default:c(()=>[A]),_:1}))}});typeof E=="function"&&E(T);var d=t=>{t.__sourceCodeTitle=`
\u4F20\u5165HTML\u6807\u7B7E
`,t.__sourceCode=`<template>
  <Button @click="showToast">\u4F20\u5165\u4E00\u4E2A\u52A0\u7C97\u7684\u6587\u672C</Button>
</template>

<script lang="ts" setup>
import Button from '../../lib/Button/Button.vue';
import {getCurrentInstance} from 'vue';
const {proxy}=getCurrentInstance()
const showToast=()=>{
  proxy.$toast('<strong>\u52A0\u7C97\u7684\u6587\u672C</strong>',{
    enableHtml:true,
  })
}
<\/script>`};const b=r("\u4F20\u5165\u4E00\u4E2A\u52A0\u7C97\u7684\u6587\u672C"),w=l({setup(t){const{proxy:s}=B(),n=()=>{s.$toast("<strong>\u52A0\u7C97\u7684\u6587\u672C</strong>",{enableHtml:!0})};return(a,o)=>(i(),h(e,{onClick:n},{default:c(()=>[b]),_:1}))}});typeof d=="function"&&d(w);var $=t=>{t.__sourceCodeTitle=`
\u4E0D\u540C\u72B6\u6001
`,t.__sourceCode=`<template>
  <Button @click="showToast('success')">success</Button>
  <Button @click="showToast('warning')">warning</Button>
  <Button @click="showToast('error')">error</Button>
  <Button @click="showToast('normal')">normal</Button>
</template>

<script lang="ts" setup>
import Button from '../../lib/Button/Button.vue';
import {getCurrentInstance} from 'vue';
const {proxy}=getCurrentInstance()
const showToast=(type)=>{
  proxy.$toast(\`\u8FD9\u662F\u4E00\u6761\${type}\u4FE1\u606F\`,{
    enableHtml:true,
    type
  })
}
<\/script>`};const v=r("success"),I=r("warning"),H=r("error"),N=r("normal"),x=l({setup(t){const{proxy:s}=B(),n=a=>{s.$toast(`\u8FD9\u662F\u4E00\u6761${a}\u4FE1\u606F`,{enableHtml:!0,type:a})};return(a,o)=>(i(),m(f,null,[u(e,{onClick:o[0]||(o[0]=p=>n("success"))},{default:c(()=>[v]),_:1}),u(e,{onClick:o[1]||(o[1]=p=>n("warning"))},{default:c(()=>[I]),_:1}),u(e,{onClick:o[2]||(o[2]=p=>n("error"))},{default:c(()=>[H]),_:1}),u(e,{onClick:o[3]||(o[3]=p=>n("normal"))},{default:c(()=>[N]),_:1})],64))}});typeof $=="function"&&$(x);const V=g("h1",null,"Toast \u793A\u4F8B",-1),z=l({setup(t){return(s,n)=>(i(),m(f,null,[V,u(_,{component:k}),u(_,{component:T}),u(_,{component:w}),u(_,{component:x})],64))}});export{z as default};
