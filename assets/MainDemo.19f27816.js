import{d as o,a as u,e as p,n as w,f as _,r as f,c as d,g as s}from"./vendor.ce1e2232.js";import{D as c}from"./Demo.41df8b48.js";import"./index.033803ce.js";const S=_("span",null,null,-1),b=[S],v=o({props:{value:Boolean},emits:["update:value"],setup(e,{emit:t}){const a=e,l=()=>{t("update:value",!a.value)};return(n,k)=>(u(),p("button",{class:w(["wheel-switch",{"wheel-checked":e.value}]),onClick:l},b,2))}});var r=e=>{e.__sourceCodeTitle="\u5E38\u89C4\u7528\u6CD5",e.__sourceCode=`<template>
  <Switch v-model:value="defaultValue"/>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import Switch from '../../lib/Switch/Switch.vue';

const defaultValue = ref(false);
<\/script>`};const m=o({setup(e){const t=f(!1);return(a,l)=>(u(),d(v,{value:t.value,"onUpdate:value":l[0]||(l[0]=n=>t.value=n)},null,8,["value"]))}});typeof r=="function"&&r(m);var i=e=>{e.__sourceCodeTitle="\u652F\u6301 disabled",e.__sourceCode=`<template>
  <Switch v-model:value="defaultValue" disabled/>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import Switch from '../../lib/Switch/Switch.vue';

const defaultValue = ref(false);
<\/script>`};const h=o({setup(e){const t=f(!1);return(a,l)=>(u(),d(v,{value:t.value,"onUpdate:value":l[0]||(l[0]=n=>t.value=n),disabled:""},null,8,["value"]))}});typeof i=="function"&&i(h);const V=_("h1",null,"Switch \u6587\u6863",-1),C=o({setup(e){return(t,a)=>(u(),p("div",null,[V,s(c,{component:m}),s(c,{component:h})]))}});export{C as default};
