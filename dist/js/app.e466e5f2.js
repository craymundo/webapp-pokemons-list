(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function s(e){return c.p+"js/"+({"favorites~list":"favorites~list",favorites:"favorites",list:"list",home:"home"}[e]||e)+"."+{"favorites~list":"65d85f3c",favorites:"771b9053",list:"bb623cf9",home:"c3b6878f"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"favorites~list":1,favorites:1,list:1,home:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({"favorites~list":"favorites~list",favorites:"favorites",list:"list",home:"home"}[e]||e)+"."+{"favorites~list":"02ccd54f",favorites:"fa268d9e",list:"fa268d9e",home:"e944b81c"}[e]+".css",i=c.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===o||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],p.parentNode.removeChild(p),n(a)},p.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}i[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/webapp-pokemons-list/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"9ddc":function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var o=n("1da1"),r=n("d4ec"),i=n("bee2"),a=n("262e"),s=n("2caf"),c=(n("96cf"),n("b0c0"),n("4de4"),n("c740"),n("9ab4")),u=(n("98db"),n("e1c6")),l=n("00fc"),f=n.n(l),p=(n("d3b7"),n("159b"),n("d81d"),function(){function e(){Object(r["a"])(this,e),this._pokemons=[],this._pokemon={id:0,name:"",weight:0,height:0,types:"",isfavorite:!1},this._pokemons=[]}return Object(i["a"])(e,[{key:"getAll",value:function(){var e=this;return this._pokemons=[],fetch("https://pokeapi.co/api/v2/pokemon/").then((function(e){if(200===e.status)return e.json()})).then((function(t){var n=t.results;return n.forEach((function(t){e._pokemons.push({id:n.findIndex((function(e){return e.name===t.name})),name:t.name,weight:0,height:0,types:"",isfavorite:!1})})),e._pokemons}))}},{key:"getPokemon",value:function(e){var t=this;return fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){if(200===e.status)return e.json()})).then((function(e){var n=e.types.map((function(e){return e.type}));return t._pokemon={id:e.id,name:e.name,weight:e.weight,height:e.height,types:n.map((function(e){return e.name})),isfavorite:!1},t._pokemon}))}}]),e}());p=Object(c["a"])([Object(u["injectable"])()],p);var h=p,m=function(){function e(t){Object(r["a"])(this,e),this.productRepo=t}return Object(i["a"])(e,[{key:"execute",value:function(){return this.productRepo.getAll()}}]),e}();m=Object(c["a"])([Object(u["injectable"])(),Object(c["b"])(0,Object(u["inject"])("PokemonRepository"))],m);var v=function(){function e(t){Object(r["a"])(this,e),this.productRepo=t}return Object(i["a"])(e,[{key:"execute",value:function(e){return this.productRepo.getPokemon(e)}}]),e}();v=Object(c["a"])([Object(u["injectable"])(),Object(c["b"])(0,Object(u["inject"])("PokemonRepository"))],v);var d=new u["Container"];d.bind("PokemonRepository").to(h).inSingletonScope(),d.bind("GetAllPokemons").to(m).inSingletonScope(),d.bind("GetPokemon").to(v).inSingletonScope();var b=f()(d),g=b.lazyInject,y=n("6fc5"),k=function(e){Object(a["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.apply(this,arguments),e.items=[],e.favorites=[],e.item={id:0,name:"",weight:0,height:0,types:"",isfavorite:!1},e}return Object(i["a"])(n,[{key:"setItems",value:function(e){this.items=e}},{key:"setFavorites",value:function(e){this.favorites=e}},{key:"setItem",value:function(e,t){e.isfavorite=t,this.item={id:e.id,name:e.name,weight:e.weight,height:e.height,types:e.types,isfavorite:e.isfavorite}}},{key:"fetchItems",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getAllPokemons.execute().then((function(e){t.setItems(e)}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"filterFavorites",value:function(){var e=this.items.filter((function(e){return!0===e.isfavorite}));this.setFavorites(e)}},{key:"setFavorite",value:function(e){var t=this.items.findIndex((function(t){return t.id===e})),n=this.items[t].name,o={id:e,name:n,weight:0,height:0,types:"",isfavorite:!0};this.items[t]=o,this.setItems(this.items)}},{key:"fetchItem",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getPokemon.execute(t).then((function(e){o.setItem(e,n)}));case 2:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"fetchFilterItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"search";"favorites"===t?this.setFavorites(e):this.setItems(e)}},{key:"clearItem",value:function(){var e={id:0,name:"",weight:0,height:0,types:"",isfavorite:!1};this.setItem(e,!1)}},{key:"clearItems",value:function(){this.setItems([])}}]),n}(y["d"]);Object(c["a"])([g("GetAllPokemons")],k.prototype,"getAllPokemons",void 0),Object(c["a"])([g("GetPokemon")],k.prototype,"getPokemon",void 0),Object(c["a"])([y["c"]],k.prototype,"setItems",null),Object(c["a"])([y["c"]],k.prototype,"setFavorites",null),Object(c["a"])([y["c"]],k.prototype,"setItem",null),Object(c["a"])([y["a"]],k.prototype,"fetchItems",null),Object(c["a"])([y["a"]],k.prototype,"filterFavorites",null),Object(c["a"])([y["a"]],k.prototype,"setFavorite",null),Object(c["a"])([y["a"]],k.prototype,"fetchItem",null),Object(c["a"])([y["a"]],k.prototype,"fetchFilterItem",null),Object(c["a"])([y["a"]],k.prototype,"clearItem",null),Object(c["a"])([y["a"]],k.prototype,"clearItems",null),k=Object(c["a"])([Object(y["b"])({name:"pokemon",namespaced:!0})],k)},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},i=[],a=o["a"].extend({name:"App",data:function(){return{}}}),s=a,c=n("2877"),u=Object(c["a"])(s,r,i,!1,null,null,null),l=u.exports,f=n("9483");Object(f["a"])("".concat("/webapp-pokemons-list/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("8c4f");o["a"].use(p["a"]);var h=[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"0861"))}},{path:"/list",name:"list",component:function(){return Promise.all([n.e("favorites~list"),n.e("list")]).then(n.bind(null,"fc2a"))}},{path:"/favorites",name:"favorites",component:function(){return Promise.all([n.e("favorites~list"),n.e("favorites")]).then(n.bind(null,"2e1b"))}}],m=new p["a"]({mode:"history",base:"/webapp-pokemons-list/",routes:h}),v=m,d=n("2f62"),b=n("9ddc");o["a"].use(d["a"]);var g=new d["a"].Store({modules:{pokemon:b["a"]}}),y=g;n("1157"),n("4989"),n("eaf4");o["a"].config.productionTip=!1,new o["a"]({router:v,store:y,render:function(e){return e(l)}}).$mount("#app")},eaf4:function(e,t,n){}});
//# sourceMappingURL=app.e466e5f2.js.map