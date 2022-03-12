import{B as d,D as m}from"./Demo.41df8b48.js";import{_ as y}from"./index.033803ce.js";import{d as _,a as v,c as $,f as l,v as k,g as s,w as r,T as w,h as F,j as p,r as x,e as g,D as O,A as T,F as N}from"./vendor.ce1e2232.js";const V={class:"wheel-dialog-wrapper"},A={class:"wheel-dialog"},E=p("OK"),U=p("Cancel"),j=_({props:{visible:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},ok:{type:Function},cancel:{type:Function}},emits:["update:visible"],setup(e,{emit:t}){const o=e,c=()=>{t("update:visible",!1)},u=()=>{o.closeOnClickOverlay&&c()},i=()=>{var n;((n=o.ok)==null?void 0:n.call(o))!==!1&&c()},a=()=>{var n;(n=o.cancel)==null||n.call(o),c()};return(n,f)=>e.visible?(v(),$(w,{key:0,to:"body"},[l("div",{class:"wheel-dialog-overlay",onClick:u}),l("div",V,[l("div",A,[l("header",null,[k(n.$slots,"title",{},void 0,!0),l("span",{onClick:c,class:"wheel-dialog-close"})]),l("main",null,[k(n.$slots,"content",{},void 0,!0)]),l("footer",null,[s(d,{level:"main",onClick:i},{default:r(()=>[E]),_:1}),s(d,{onClick:a},{default:r(()=>[U]),_:1})])])])])):F("",!0)}});var h=y(j,[["__scopeId","data-v-05e6dc88"]]),B=e=>{e.__sourceCodeTitle="\u5E38\u89C4\u4F7F\u7528",e.__sourceCode=`<template>
  <div>
    <Button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</Button>
    <Dialog v-model:visible="visible" :cancel="cancel" :ok="ok" :overlayClosable="false">
      <template v-slot:content>
        <strong>\u6807\u9898</strong>
        <div>\u5185\u5BB9</div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import Dialog from '../../lib/Dialog/Dialog.vue';
import Button from '../../lib/Button/Button.vue';
import {ref} from 'vue';

const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};
const ok = () => {
  console.log('ok click');
  return true;
};
const cancel = () => {
  console.log('cancel click');
};
<\/script>`};const I=p("\u6253\u5F00\u5BF9\u8BDD\u6846"),K=l("strong",null,"\u6807\u9898",-1),S=l("div",null,"\u5185\u5BB9",-1),D=_({setup(e){const t=x(!1),o=()=>{t.value=!t.value},c=()=>(console.log("ok click"),!0),u=()=>{console.log("cancel click")};return(i,a)=>(v(),g("div",null,[s(d,{onClick:o},{default:r(()=>[I]),_:1}),s(h,{visible:t.value,"onUpdate:visible":a[0]||(a[0]=n=>t.value=n),cancel:u,ok:c,overlayClosable:!1},{content:r(()=>[K,S]),_:1},8,["visible"])]))}});typeof B=="function"&&B(D);const q=e=>{const{title:t,content:o,ok:c,cancel:u}=e,i=document.createElement("div");document.body.appendChild(i);const a=()=>{n.unmount(),i.remove()},n=O({render(){return T(h,{visible:!0,"onUpdate:visible":f=>{f||a()},ok:c,cancel:u},{title:()=>t,content:()=>o})}});n.mount(i)};var b=e=>{e.__sourceCodeTitle="\u4E00\u952E\u6253\u5F00 Dialog",e.__sourceCode=`<template>
  <div>
    <Button @click="showDialog">\u6253\u5F00\u5BF9\u8BDD\u6846</Button>
  </div>
</template>

<script lang="ts" setup>
import {openDialog} from '../../lib/Dialog/openDialog';
import Button from '../../lib/Button/Button.vue';

const showDialog = () => {
  openDialog({
    content: '\u6587\u6863\u5185\u5BB9',
    title: '\u6807\u9898',
    ok() {
      console.log('ok');
      return true;
    },
    cancel() {
      console.log('cancel');
    },
  });
};
<\/script>`};const z=p("\u6253\u5F00\u5BF9\u8BDD\u6846"),C=_({setup(e){const t=()=>{q({content:"\u6587\u6863\u5185\u5BB9",title:"\u6807\u9898",ok(){return console.log("ok"),!0},cancel(){console.log("cancel")}})};return(o,c)=>(v(),g("div",null,[s(d,{onClick:t},{default:r(()=>[z]),_:1})]))}});typeof b=="function"&&b(C);const G=l("h1",null,"Dialog \u6587\u6863",-1),M=_({setup(e){return(t,o)=>(v(),g(N,null,[G,s(m,{component:D}),s(m,{component:C})],64))}});export{M as default};
