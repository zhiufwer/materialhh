System.register(["./index-legacy-0f282428.js"],(function(n,o){"use strict";var e,t,r,a,l,i,s,d,c,u,p,g,v,f,h,m;return{setters:[function(n){e=n._,t=n.o,r=n.c,a=n.a,l=n.w,i=n.t,s=n.b,d=n.n,c=n.p,u=n.d,p=n.e,g=n.r,v=n.F,f=n.f,h=n.g,m=n.h}],execute:function(){var o=document.createElement("style");o.textContent=".border[data-v-f7ddef2d]{word-wrap:break-word}\n",document.head.appendChild(o);var w={props:["active","now_product"],methods:{close:function(){this.$emit("close")}}},y=function(n){return c("data-v-f7ddef2d"),n=n(),u(),n},b=[y((function(){return a("i",null,"close",-1)}))],_={key:0,class:"border",style:{"white-space":"pre-wrap"}},D=y((function(){return a("article",{class:"border"},[a("h5",null,"Donate"),a("br"),p(" USDT TRC20"),a("br"),a("article",{class:"border"},"TRhnA7SXE5Sap5gSG3ijxRmdYFiD4KRhPs")],-1)})),x={class:"border"},k=y((function(){return a("h5",null,"Download",-1)})),S={key:0,class:"center-align div-dl"},C=["href"],P=[y((function(){return a("i",null,"download",-1)})),y((function(){return a("span",null,"Download",-1)}))],A={key:1,class:"center-align div-dl"},R=["href"],G=[y((function(){return a("i",null,"download",-1)})),y((function(){return a("span",null,"GitHub Release",-1)}))],q={key:2,class:"center-align div-dl"},F=["href"],M=[y((function(){return a("i",null,"download",-1)})),y((function(){return a("span",null,"Google Play",-1)}))],T={key:3,class:"center-align div-dl"},j=["href"],E=[y((function(){return a("i",null,"code",-1)})),y((function(){return a("span",null,"Source code",-1)}))],I=e(w,[["render",function(n,o,e,c,u,p){return t(),r("dialog",{class:d({active:e.active})},[a("button",{class:"border",onClick:o[0]||(o[0]=l((function(){return p.close&&p.close.apply(p,arguments)}),["self"]))},b),a("h5",null,i(e.now_product.name),1),e.now_product.intro?(t(),r("article",_,[a("p",null,i(e.now_product.intro),1)])):s("",!0),D,a("article",x,[k,e.now_product.download?(t(),r("div",S,[a("a",{href:e.now_product.download,class:"round button"},P,8,C)])):s("",!0),e.now_product.github?(t(),r("div",A,[a("a",{href:e.now_product.github,class:"round button"},G,8,R)])):s("",!0),e.now_product.play?(t(),r("div",q,[a("a",{href:e.now_product.play,class:"round button"},M,8,F)])):s("",!0),e.now_product.github?(t(),r("div",T,[a("a",{href:e.now_product.github.replaceAll("/releases",""),class:"round button"},E,8,j)])):s("",!0)])],2)}],["__scopeId","data-v-f7ddef2d"]]),U={components:{DownloadDrop:I},data:function(){return{active:!1,now_product:{},all_product:[{name:"NekoBoxForAndroid",icon:"android",github:"https://github.com/MatsuriDayo/NekoBoxForAndroid/releases",intro:"sing-box / universal proxy toolchain for Android.\n一款使用 sing-box 的 Android 通用代理软件。"},{name:"nekoray",icon:"monitor",github:"https://github.com/MatsuriDayo/nekoray/releases",intro:"V2Ray(Xray) / sing-box PC GUI Client.\nV2Ray(Xray) / sing-box 电脑 GUI 客户端。"},{name:"Plugin APKs",icon:"extension",download:"./m-plugin/"}]}},methods:{toggleDownDrop:function(n){var o=this;this.now_product={},null==n?(document.querySelector("main").style.removeProperty("display"),document.querySelector("nav").style.removeProperty("display"),this.active=!1):(document.querySelector("main").style.setProperty("display","none"),document.querySelector("nav").style.setProperty("display","none"),this.active=!0,this.all_product.forEach((function(e){e.name==n&&(o.now_product=e)})))}}},X={class:"responsive",id:"main"},B=a("article",{class:"top-round large-padding large-margin"},[a("div",{class:"row"},[a("img",{class:"circle large",src:"https://matsuridayo.github.io/assets/images/matsuri1.jpg"}),a("div",{class:"max"},[a("h5",null,"MatsuriDayo"),a("p",null,"Some software")])])],-1),H={class:"large-padding large-margin"},K=a("div",{class:"row"},[a("div",{class:"max"},[a("p",null,[a("i",null,"download"),p(" Download Latest release")])])],-1),N=["onClick"],V=m('<article class="bottom-round large-padding large-margin"><div class="row"><div class="max"><p><i>help</i> Getting Help</p></div></div><div class="center-align div-dl"><a href="./index_docs/" class="round button"><i>article</i><span>帮助文档 / Documents</span></a></div><div class="center-align div-dl"><a href="https://t.me/Matsuridayo" class="round button"><i>notifications</i><span>Telegram Channel</span></a></div><div class="center-align div-dl"><a href="https://matsuricom.pages.dev" class="round button"><i>flight</i><span>推广服务</span></a></div></article>',1);n("default",e(U,[["render",function(n,o,e,l,s,d){var c=g("DownloadDrop");return t(),r(v,null,[a("main",X,[B,a("article",H,[K,(t(!0),r(v,null,f(s.all_product,(function(n){return t(),r("div",{class:"center-align div-dl",key:n},[a("button",{class:"round",onClick:function(o){return d.toggleDownDrop(n.name)}},[a("i",null,i(n.icon),1),a("span",null,i(n.name),1)],8,N)])})),128))]),V]),h(c,{now_product:s.now_product,active:s.active,onClose:o[0]||(o[0]=function(n){return d.toggleDownDrop()})},null,8,["now_product","active"])],64)}]]))}}}));