(function(e){function n(n){for(var o,r,c=n[0],d=n[1],s=n[2],u=0,l=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(t,r)&&t[r]&&l.push(t[r][0]),t[r]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);f&&f(n);while(l.length)l.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,n=0;n<i.length;n++){for(var a=i[n],o=!0,r=1;r<a.length;r++){var c=a[r];0!==t[c]&&(o=!1)}o&&(i.splice(n--,1),e=d(d.s=a[0]))}return e}var o={},r={app:0},t={app:0},i=[];function c(e){return d.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"c2a3b2f8","chunk-0206bfa0":"0dadfe29","chunk-04b93936":"17ff9977","chunk-13a6037e":"7f98b78d","chunk-16015154":"72be0535","chunk-17977988":"deeb6e2e","chunk-2c06842c":"434a6a5d","chunk-2d208d90":"57de751f","chunk-2d21d0e2":"aa8dc37c","chunk-2d22c123":"ed847a4a","chunk-2e80bb9a":"e55e12ea","chunk-3145fe0f":"46fecfdb","chunk-328f70dd":"c1b4f9f5","chunk-3807499c":"9a1aec9f","chunk-3c94cd2f":"94da48e1","chunk-3dc647fd":"0b4da586","chunk-4cdd78c0":"6f4ad504","chunk-515a8379":"01fd35e5","chunk-53ccb27e":"4db5f727","chunk-59974754":"f0192976","chunk-766a929b":"263e7452","chunk-839300a6":"d15fd4bd","chunk-c796899c":"8908bca0",comple:"1fe1aa25",creditos:"82949c5e",glosario:"b6ce841b",intro:"e6de09fb",referencias:"65069b83",tema1:"d0da92e6",tema2:"9f4518e0",tema3:"26f58453"}[e]+".js"}function d(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.e=function(e){var n=[],a={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3c94cd2f":1,"chunk-3dc647fd":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};r[e]?n.push(r[e]):0!==r[e]&&a[e]&&n.push(r[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3c94cd2f":"1dbe8d4a","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"015dda91","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"8b7a797e","chunk-766a929b":"92cde18b","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"aa1836ea",creditos:"965c9f63",glosario:"72650596",intro:"0e433876",referencias:"06413697",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=d.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===t))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],u=s.getAttribute("data-href");if(u===o||u===t)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),a(i)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,d.nc&&u.setAttribute("nonce",d.nc),u.src=c(e);var l=new Error;s=function(n){u.onerror=u.onload=null,clearTimeout(f);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,a[1](l)}t[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(n)},d.m=e,d.c=o,d.d=function(e,n,a){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)d.d(a,o,function(n){return e[n]}.bind(null,o));return a},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"230f":function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.861f7bc8.svg"},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],i={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=i,d=a("2877"),s=Object(d["a"])(c,r,t,!1,null,null,null),u=s.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),f=a("8c4f"),m=a("ae58"),p=a("7e58");l["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Pruebas de validación de bases de datos ",descripcionCurso:"Las pruebas al modelo de base de datos diseñada y construida son fundamentales para la validación de la integridad de los datos, este tipo de pruebas nos permitirá validar todas las restricciones de integridad.",imagenBannerPrincipal:a("bce2"),fondoBannerPrincipal:a("230f")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Tipos de pruebas",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Pruebas de acceso: sentencias DCL",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Crear un usuario en MySQL ",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Permisos de acceso",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Pruebas de acceso",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Pruebas de integridad de datos",desarrolloContenidos:!0,subMenu:[]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Cobo, Á. (2007). Diseño y programación de bases de datos. Visión Libros.",link:""},{referencia:"Globe Testing. (2021). Pruebas de integridad de base de datos.",link:"https://www.globetesting.com/pruebas-de-integridad-de-base-de-datos"},{referencia:"Widenius, M., Axmark, D., y Arno, K. (2002). MySQL reference manual: documentation from the source.  OReilly Media, Inc.",link:"https://www.oreilly.com/library/view/mysql-reference-manual/0596002653/ "}],glosario:[{termino:"Datos",significado:"Son la mínima unidad semántica, y se corresponden con elementos primarios de información que por sí solos son irrelevantes como apoyo a la toma de decisiones."},{termino:"Información",significado:"Conjunto de datos procesados que tienen un significado (relevancia, propósito y contexto) y que, por lo tanto, son de utilidad para quien debe tomar decisiones."},{termino:"Tabla – entidad",significado:"La entidad es cualquier clase de objeto o conjunto de elementos presentes o no, en un contexto determinado dado por el sistema de información."},{termino:"Relación",significado:"Vínculo que permite definir una dependencia entre los conjuntos de dos o más entidades."},{termino:"Registro",significado:"Guardan una serie de características similares o que pueden ser agrupados o clasificados dadas sus características comunes en grupos bien delimitados."}],complementario:[{texto:"Red de Producción de Contenidos Grupo Gestión Curricular SENA. (22 de mayo de 2021). Pruebas de integridad de datos. [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=SLPqBj9XjWc"},{texto:"PHPUnit latest Manual. (29 de enero de 2021). Probar bases de datos. ",tipo:"Web",link:"https://phpunit.readthedocs.io/es/latest/database.html"}],creditos:{liderEquipo:[{nombre:"Maria Camila García Santamaría",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Henry Eduardo Bastidas Paruma",cargo:"Experto temático",centro:"Centro de Teleinformática y Producción Industrial - Regional Cauca"},{nombre:"Peter Emerson Pinchao Solis",cargo:"Experto temático",centro:"Centro de Teleinformática y Producción Industrial - Regional Cauca"},{nombre:"Oscar Absalón Guevara",cargo:"Diseñador instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Luis Fernando Sarmiento Betancourth",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Carmen Alicia Martínez Torres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Víctor Raúl Cárdenas Cáceres ",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Lizeth Karina Manchego Suárez",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"},{nombre:"Jenny Paola Montillo Gélvez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura  - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,n,a){e.exports=a.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,a){},bce2:function(e,n,a){e.exports=a.p+"img/banner-principal.d92e2eb1.svg"}});
//# sourceMappingURL=app.ec58af2c.js.map