(function(t){function e(e){for(var a,c,i=e[0],u=e[1],s=e[2],l=0,b=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b78":function(t,e,n){},"1ca4":function(t,e,n){"use strict";n("0b78")},"20a8":function(t,e,n){"use strict";n("a63b")},"3d3e":function(t,e,n){},"471a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"container"},o={class:"dos-columnas"},c={class:"container"};function i(t,e,n,i,u,s){var d=Object(a["k"])("Cabecera"),l=Object(a["k"])("MenuPrincipal"),b=Object(a["k"])("BarraBusqueda"),p=Object(a["k"])("CaminoMigas"),f=Object(a["k"])("ProductoImagen"),O=Object(a["k"])("ProductoDatos"),j=Object(a["k"])("ProductoDescripcion"),v=Object(a["k"])("Pie");return Object(a["h"])(),Object(a["c"])(a["a"],null,[Object(a["g"])(d),Object(a["g"])(l),Object(a["d"])("div",r,[Object(a["g"])(b),Object(a["g"])(p),Object(a["d"])("div",o,[Object(a["g"])(f),Object(a["g"])(O)]),Object(a["d"])("div",c,[Object(a["g"])(j)])]),Object(a["g"])(v)],64)}var u=n("cf05"),s=n.n(u),d={id:"cabecera"},l=Object(a["d"])("div",{class:"container"},[Object(a["d"])("img",{src:s.a,alt:"Logo de la empresa"})],-1),b=[l];function p(t,e,n,r,o,c){return Object(a["h"])(),Object(a["c"])("section",d,b)}var f={},O=(n("5b0e"),n("6b0d")),j=n.n(O);const v=j()(f,[["render",p]]);var h=v,m={id:"menu-principal"},A=Object(a["e"])('<div class="container"><nav><ul><li><a href="#">INICIO</a></li><li><a href="#">ORDENADORES</a></li><li><a href="#">TV</a></li><li><a href="#">MÓVILES</a></li><li><a href="#">TABLETS</a></li><li><a href="#">MULTIMEDIA</a></li></ul></nav><div class="grupo"><a class="registro" href="#">REGISTRO</a><a class="login" href="#">INICIAR SESIÓN</a></div></div>',1),g=[A];function I(t,e,n,r,o,c){return Object(a["h"])(),Object(a["c"])("section",m,g)}var k={};n("f351");const y=j()(k,[["render",I]]);var M=y,S={id:"barra-busqueda"},E=Object(a["d"])("input",{type:"text",placeholder:"Buscar productos ..."},null,-1),P=Object(a["d"])("button",{class:"boton"},"Buscar",-1),H=[E,P];function w(t,e,n,r,o,c){return Object(a["h"])(),Object(a["c"])("section",S,[Object(a["d"])("form",{onSubmit:e[0]||(e[0]=Object(a["l"])((function(){return t.handleEnviar&&t.handleEnviar.apply(t,arguments)}),["prevent"]))},H,32)])}var q={name:"BarraBusqueda",methods:{handleSutmit:function(){console.log("Busqueda enviada")}}};n("20a8");const V=j()(q,[["render",w]]);var Z=V,B={id:"camino-migas"},L=Object(a["d"])("a",{class:"inicio",href:"#"}," Inicio ",-1),C=Object(a["f"])(" > "),x=Object(a["d"])("a",{href:"#"},"Ordenadores ",-1),z=Object(a["f"])(" > "),F=Object(a["d"])("a",{class:"actual",href:"#"},"Ordenador portátil",-1),Q=[L,C,x,z,F];function U(t,e,n,r,o,c){return Object(a["h"])(),Object(a["c"])("section",B,Q)}var W={};n("9bab");const D=j()(W,[["render",U]]);var N=D,X={id:"producto-imagen"},R={class:"img-big"},Y=["src"],T={class:"img-mini"},J=["src"],G=["src"],K=["src"],_=["src"];function $(t,e,n,r,o,c){return Object(a["h"])(),Object(a["c"])("section",X,[Object(a["d"])("div",R,[Object(a["d"])("img",{src:o.fotos[0],alt:"Portátil Huawei MateBoot X"},null,8,Y)]),Object(a["d"])("div",T,[Object(a["d"])("a",{onClick:e[0]||(e[0]=function(t){return c.cambiarFoto(1)})},[Object(a["d"])("img",{src:o.fotos[1],alt:"Portátil Huawei MateBoot X"},null,8,J)]),Object(a["d"])("a",{onClick:e[1]||(e[1]=function(t){return c.cambiarFoto(2)})},[Object(a["d"])("img",{src:o.fotos[2],alt:"Portátil Huawei MateBoot X"},null,8,G)]),Object(a["d"])("a",{onClick:e[2]||(e[2]=function(t){return c.cambiarFoto(3)})},[Object(a["d"])("img",{src:o.fotos[3],alt:"Portátil Huawei MateBoot X"},null,8,K)]),Object(a["d"])("a",{onClick:e[3]||(e[3]=function(t){return c.cambiarFoto(4)})},[Object(a["d"])("img",{src:o.fotos[4],alt:"Portátil Huawei MateBoot X"},null,8,_)])])])}var tt={Name:"ProductoImagen",data:function(){return{fotos:[n("87b8"),n("87b8"),n("d8a7"),n("be53"),n("60e5")]}},methods:{cambiarFoto:function(t){this.fotos[0]=this.fotos[t]}}};n("b0ae");const et=j()(tt,[["render",$]]);var nt=et,at=function(t){return Object(a["j"])("data-v-6ecef648"),t=t(),Object(a["i"])(),t},rt={id:"producto-datos"},ot=at((function(){return Object(a["d"])("h1",null,"Portátil Huawei MateBoot X",-1)})),ct=at((function(){return Object(a["d"])("h2",null,[Object(a["f"])("750,69€ "),Object(a["d"])("span",{class:"iva"},"sin IVA: 620,41€")],-1)})),it={class:"wrapper"},ut=["value"],st=at((function(){return Object(a["d"])("br",null,null,-1)})),dt=at((function(){return Object(a["d"])("button",{class:"boton"},[Object(a["d"])("span",{class:"material-icons"},"shopping_cart"),Object(a["f"])(" AÑADIR CARRITO")],-1)}));function lt(t,e,n,r,o,c){return Object(a["h"])(),Object(a["c"])("section",rt,[ot,ct,Object(a["d"])("div",it,[Object(a["d"])("button",{class:"btn",onClick:e[0]||(e[0]=function(t){return c.cambiarContador("-1")}),type:"button",name:"button"},"-"),Object(a["d"])("input",{class:"cantidad",type:"text",name:"name",value:o.contador},null,8,ut),Object(a["d"])("button",{class:"btn",onClick:e[1]||(e[1]=function(t){return c.cambiarContador("1")}),type:"button",name:"button"},"+")]),st,dt])}var bt={Name:"ProductoDatos",data:function(){return{contador:1}},methods:{cambiarContador:function(t){this.contador+=+t,!isNaN(this.contador)&&this.contador<0&&(this.contador=0)}}};n("c4a8");const pt=j()(bt,[["render",lt],["__scopeId","data-v-6ecef648"]]);var ft=pt,Ot={id:"producto-descripcion"},jt=Object(a["d"])("h1",null,"DESCRIPCIÓN DEL PRODUCTO",-1),vt=Object(a["d"])("ul",null,[Object(a["d"])("li",null,"HUAWEI MateBook X es pequeño pero poderoso; su procesador de hasta 7ª generación Intel® Core™ i7 proporciona potencia suficiente tanto para trabajo como para entretenimiento. "),Object(a["d"])("li",null,"La ingeniería aeroespacial permite al HUAWEI MateBook X permanecer frío gracias a sus materiales de cambio de fase (usados en la industria espacial), lo que significa que el sobrecalentamiento es una cosa del pasado."),Object(a["d"])("li",null,"El botón de encendido dos en uno del HUAWEI MateBook X y su sensor de reconocimiento por huella dactilar te ayudan a arrancarlo de forma rápida y segura para funcionar a la velocidad de tu vida."),Object(a["d"])("li",null,"Seguridad total. Hoy en día utilizamos los dispositivos electrónicos para todo tipo de cosas; desde transacciones bancarias hasta el almacenamiento de documentos importantes. Por ello, la seguridad nunca está de más. El portátil Huawei está equipado con un sensor de huella dactilar para que sólo tú puedas iniciar sesión y utilizarlo. "),Object(a["d"])("li",null,"Memoria ultrarrápida. Con el disco duro de 256 GB SSD podrás arrancar tu Windows 10 como un verdadero tiro. En un abrir y cerrar de ojos tendrás listo tu portátil. ")],-1),ht=[jt,vt];function mt(t,e,n,r,o,c){return Object(a["h"])(),Object(a["c"])("section",Ot,ht)}var At={};n("cca0");const gt=j()(At,[["render",mt]]);var It=gt,kt={id:"pie"},yt=Object(a["d"])("p",null,"© Copyright 2021 - Todos los derechos reservados ",-1),Mt=[yt];function St(t,e,n,r,o,c){return Object(a["h"])(),Object(a["c"])("footer",kt,Mt)}var Et={};n("6118");const Pt=j()(Et,[["render",St]]);var Ht=Pt,wt={name:"App",components:{Cabecera:h,MenuPrincipal:M,BarraBusqueda:Z,CaminoMigas:N,ProductoImagen:nt,ProductoDatos:ft,ProductoDescripcion:It,Pie:Ht}};n("1ca4");const qt=j()(wt,[["render",i]]);var Vt=qt;Object(a["b"])(Vt).mount("#app")},"5b0e":function(t,e,n){"use strict";n("bf2c")},"60e5":function(t,e,n){t.exports=n.p+"img/e4.1e46b486.jpg"},6118:function(t,e,n){"use strict";n("471a")},"6db8":function(t,e,n){},"87b8":function(t,e,n){t.exports=n.p+"img/e1.b52d3e0d.jpg"},"87b8e":function(t,e,n){},"9bab":function(t,e,n){"use strict";n("3d3e")},a3ab:function(t,e,n){},a63b:function(t,e,n){},b0ae:function(t,e,n){"use strict";n("c644")},be53:function(t,e,n){t.exports=n.p+"img/e3.6928dfff.jpg"},bf2c:function(t,e,n){},c4a8:function(t,e,n){"use strict";n("87b8e")},c644:function(t,e,n){},cca0:function(t,e,n){"use strict";n("a3ab")},cf05:function(t,e){t.exports="data:image/png;base64,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"},d8a7:function(t,e,n){t.exports=n.p+"img/e2.4a81378f.jpg"},f351:function(t,e,n){"use strict";n("6db8")}});
//# sourceMappingURL=app.829c95ee.js.map