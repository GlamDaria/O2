(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],d=0,l=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&l.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2ad475e8":"39a87964","chunk-2f413b3c":"14c80410","chunk-2f502b5a":"07f4ed71","chunk-450de271":"0d5c73d6","chunk-5de797c1":"e9fd6542","chunk-7a41d8de":"d68d50b4"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-2ad475e8":1,"chunk-2f413b3c":1,"chunk-2f502b5a":1,"chunk-450de271":1,"chunk-5de797c1":1,"chunk-7a41d8de":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2ad475e8":"01fa1777","chunk-2f413b3c":"78200dd1","chunk-2f502b5a":"2d2398df","chunk-450de271":"1f291dce","chunk-5de797c1":"2197bacb","chunk-7a41d8de":"7850f898"}[t]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===s))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===r||d===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],f.parentNode.removeChild(f),n(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=s[t]=[e,n]}));e.push(r[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t);var l=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01f7":function(t,e,n){},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=s,t.exports=a,a.id="4678"},"53d7":function(t,e,n){"use strict";var r=n("01f7"),a=n.n(r);a.a},5452:function(t,e,n){"use strict";var r=n("af35"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),t._e(),n("div",{staticClass:"main"},[n("router-view")],1),n("Footer")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header main-container"},[n("div",{staticClass:"header__logo",on:{click:function(e){return t.$router.push("/")}}},[t._v("Logo")]),n("div",{staticClass:"header__content"},[n("a-input-search",{attrs:{placeholder:"input search text","enter-button":""},on:{search:t.onSearch},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("div",{staticClass:"header__action-list"},[n("a-badge",{staticClass:"header__button",attrs:{count:t.badgeCount}},[n("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.go("Cart")}}},[t._v(" Корзина ")])],1),t.isLoggedIn?[n("a-button",{staticClass:"header__button",on:{click:function(e){return t.go("History")}}},[t._v(" Мои заказы ")]),n("a-button",{staticClass:"header__button",on:{click:function(e){return t.signOut()}}},[t._v(" Выйти ")])]:n("a-button",{staticClass:"header__button",attrs:{type:"primary"},on:{click:function(e){return t.openAuthPopup(!0)}}},[t._v(" Войти ")])],2),n("LoginPopup",{attrs:{visible:t.visibleAuthPopup}})],1)},i=[],c=(n("ac1f"),n("841c"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-modal",{attrs:{title:"Авторизация",visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[n("LoginForm")],1)],1)}),u=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[n("a-form-item",{attrs:{"validate-status":t.userNameError()?"error":"",help:t.userNameError()||""}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"Введите email!"}]}],expression:"[\n        'email',\n        {\n          rules: [{ required: true, message: 'Введите email!' }]\n        }\n      ]"}],attrs:{placeholder:"Username"}},[n("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),n("a-form-item",{attrs:{"validate-status":t.passwordError()?"error":"",help:t.passwordError()||""}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Введите пароль!"}]}],expression:"[\n        'password',\n        {\n          rules: [{ required: true, message: 'Введите пароль!' }]\n        }\n      ]"}],attrs:{type:"password",placeholder:"Password"}},[n("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),n("a-form-item",[n("a-button",{attrs:{type:"primary","html-type":"submit",loading:t.loading,disabled:t.hasErrors(t.form.getFieldsError())}},[t._v(" Войти ")]),t.authError?n("div",{staticClass:"login-form__error"},[t._v(" "+t._s(t.authError)+" ")]):t._e(),n("div",[t._v(" Еще нет аккаунта? "),n("a",{staticClass:"login-form__link",on:{click:function(e){return t.go("Registration")}}},[t._v("Зарегестрироваться!")])])],1)],1)},l=[];n("45fc"),n("b64b"),n("d3b7");function f(t){return Object.keys(t).some((function(e){return t[e]}))}var m={data:function(){return{hasErrors:f,form:this.$form.createForm(this,{name:"horizontal_login"})}},mounted:function(){var t=this;this.$nextTick((function(){t.form.validateFields()}))},computed:{loading:function(){return this.$store.getters.isLoading},authError:function(){return this.$store.getters.getAuthError}},methods:{go:function(t){this.$router.push({name:t}),this.$store.commit("setOpenPopup",!1)},userNameError:function(){var t=this.form,e=t.getFieldError,n=t.isFieldTouched;return n("userName")&&e("userName")},passwordError:function(){var t=this.form,e=t.getFieldError,n=t.isFieldTouched;return n("password")&&e("password")},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,n){t||(e.$store.commit("setLoading",!0),e.$store.dispatch("signUp",n).then((function(){e.$store.commit("setOpenPopup",!1)})).catch((function(t){console.log("auth error loginform",t)})).finally((function(){e.$store.commit("setLoading",!1)})))}))}}},h=m,p=(n("5d31"),n("2877")),g=Object(p["a"])(h,d,l,!1,null,null,null),b=g.exports,j={name:"LoginPopup",components:{LoginForm:b},props:{visible:{type:Boolean,required:!0}},methods:{handleCancel:function(t){console.log("Clicked cancel button",t),this.$store.commit("setOpenPopup",!1)}}},v=j,y=Object(p["a"])(v,c,u,!1,null,null,null),_=y.exports,k={name:"Header",components:{LoginPopup:_},computed:{visibleAuthPopup:function(){return this.$store.getters.isOpenPopup},badgeCount:function(){return this.$store.getters.getCartItemCount},isLoggedIn:function(){return this.$store.getters.isLoggedIn}},methods:{onSearch:function(){console.log(this.search)},go:function(t){this.$router.push({name:t})},openAuthPopup:function(t){this.$store.commit("setOpenPopup",t)},signOut:function(){var t=this;this.$store.dispatch("signOut").then((function(){t.$router.push({name:"Home"})}))}},data:function(){return{search:""}}},L=k,C=(n("5452"),Object(p["a"])(L,o,i,!1,null,null,null)),E=C.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer__text"},[t._v("Инженерный проект 2020")])])}],w={name:"Footer",methods:{},data:function(){return{}}},P=w,x=(n("53d7"),Object(p["a"])(P,I,O,!1,null,null,null)),$=x.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-menu main-container"},t._l(t.MenuList,(function(e,r){return n("div",{key:r,staticClass:"main-menu__item",class:{"main-menu__item--active":!1},on:{click:function(n){return t.console.log("category",e.category)}}},[t._v(" "+t._s(e.text)+" ")])})),0)},z=[],T={name:"MainMenu",methods:{},computed:{MenuList:function(){return[{category:"food",text:"Еда"},{category:"clothes",text:"Одежда"},{category:"beauty",text:"Красота и здоровье"},{category:"book",text:"Книги"}]}}},S=T,U=(n("dc26"),Object(p["a"])(S,A,z,!1,null,null,null)),q=U.exports,N={components:{Header:E,Footer:$,MainMenu:q}},M=N,F=(n("5c0b"),Object(p["a"])(M,a,s,!1,null,null,null)),H=F.exports,R=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("div",{staticClass:"main-item-list"},t._l(t.itemList,(function(e){return n("Item",{key:e.id,attrs:{item:e},on:{click:function(n){return t.openItemPage(e)},addToCart:function(n){return t.addToCart(e)}}})})),1)])},B=[],J=n("5e7d"),K={name:"Home",components:{Item:J["a"]},created:function(){this.$store.dispatch("updateItemList")},computed:{itemList:function(){return this.$store.getters.getItemList}},methods:{openItemPage:function(t){var e=t.id;console.log("router push",{id:e}),this.$router.push({name:"Product",params:{id:e}})},addToCart:function(t){console.log(t),this.$store.dispatch("addCartItem",t)}}},G=K,W=(n("cccb"),Object(p["a"])(G,D,B,!1,null,null,null)),Q=W.exports;r["a"].use(R["a"]);var V=[{path:"/",name:"Home",component:Q},{path:"/product/:id",name:"Product",component:function(){return n.e("chunk-7a41d8de").then(n.bind(null,"d2f1"))}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-5de797c1").then(n.bind(null,"b789"))}},{path:"/registration",name:"Registration",component:function(){return n.e("chunk-2f413b3c").then(n.bind(null,"dcfb"))}},{path:"/history",name:"History",meta:{requiresLogin:!0},component:function(){return n.e("chunk-2ad475e8").then(n.bind(null,"e4bb"))}},{path:"/admin",name:"AdminHome",meta:{requiresLogin:!0},component:function(){return n.e("chunk-450de271").then(n.bind(null,"1eda"))}},{path:"/admin/items",name:"AdminProductList",meta:{requiresLogin:!0},component:function(){return n.e("chunk-450de271").then(n.bind(null,"1eda"))}},{path:"/admin/items/:id",name:"AdminEditProduct",meta:{requiresLogin:!0},component:function(){return n.e("chunk-2f502b5a").then(n.bind(null,"6231"))}},{path:"/admin/add",name:"AdminAddProduct",meta:{requiresLogin:!0},component:function(){return n.e("chunk-450de271").then(n.bind(null,"1eda"))}},{path:"/admin/orders",name:"AdminOrderList",meta:{requiresLogin:!0},component:function(){return n.e("chunk-450de271").then(n.bind(null,"1eda"))}}],X=new R["a"]({mode:"history",base:"/",routes:V});X.beforeEach((function(t,e,n){t.meta.requiresLogin&&!localStorage.getItem("isLoggedIn")?n("/"):n()}));var Y=X,Z=n("2f62"),tt={state:{loading:!1},getters:{isLoading:function(t){return t.loading}},mutations:{setLoading:function(t,e){t.loading=e}},actions:{}},et=(n("4160"),n("159b"),n("5530")),nt=n("8aa5"),rt=n.n(nt),at={state:{itemList:null,item:null},getters:{getItemList:function(t){return t.itemList},getItem:function(t){return t.item}},mutations:{setItemList:function(t,e){t.itemList=e},setItem:function(t,e){t.item=e}},actions:{updateItemList:function(t){var e=t.commit;return rt.a.firestore().collection("items").get().then((function(t){var n=[];t.forEach((function(t){n.push(Object(et["a"])({id:t.id},t.data()))})),e("setItemList",n)}))},updateItem:function(t,e){var n=t.commit;return console.log("update item",e),rt.a.firestore().doc("items/".concat(e)).get().then((function(t){var e=Object(et["a"])({id:t.id},t.data());console.log(e),n("setItem",e)}))},addItem:function(t,e){var n=t.dispatch,r=t.commit;return r("setLoading",!0),rt.a.firestore().collection("items").doc(e.id).set(e).then((function(t){n("updateItemList",t),r("setLoading",!1)}))},removeItem:function(t,e){var n=t.dispatch;console.log("remove item dispatch",e),n("updateItem")}}},st=(n("4de4"),n("7db0"),n("13d5"),{state:{cart:[]},getters:{getCartList:function(t){return t.cart},getCartItemCount:function(t){return 0===t.cart.length?0:t.cart.reduce((function(t,e){return t+e.count}),0)},getTotalPrice:function(t){return 0===t.cart.length?0:t.cart.reduce((function(t,e){return t+e.price*e.count}),0)}},mutations:{setCartList:function(t,e){t.cart=e},incrementCartItem:function(t,e){var n=t.cart.find((function(t){return t.id===e.id}));n.count++},setCartItemCount:function(t,e){var n=e.product,r=e.count,a=t.cart.find((function(t){return t.id===n.id}));a.count=r},decrementCartItem:function(t,e){var n=t.cart.find((function(t){return t.id===e.id}));n.count--,0===n.count&&(t.cart=t.cart.filter((function(t){return t.id!==e.id})))},pushCartItem:function(t,e){t.cart.push(Object(et["a"])(Object(et["a"])({},e),{},{count:1}))},removeCartItem:function(t,e){t.cart=t.cart.filter((function(t){return t.id!==e.id}))},updateCartList:function(t){localStorage.cart=t.cart}},actions:{addCartItem:function(t,e){var n=t.commit,r=t.state;r.cart&&r.cart.find((function(t){return t.id===e.id}))?n("incrementCartItem",e):n("pushCartItem",e)},createOrder:function(t){var e=t.commit,n=t.getters;e("setLoading",!0);var r={createdAt:new Date,userId:n.getUser.id,status:"created",cart:n.getCartList,price:n.getTotalPrice};return rt.a.firestore().collection("orders").add(r).then((function(t){console.log("order created",t),e("setLoading",!1),e("setCartList",[])}))}}}),ot=(n("b0c0"),{state:{user:null,isLoggedIn:!1,authError:null,registrationError:null,openAuthPopup:!1},getters:{getUser:function(t){return t.user},isLoggedIn:function(t){return t.isLoggedIn},getAuthError:function(t){return t.authError},getRegistrationError:function(t){return t.registrationError},isOpenPopup:function(t){return t.openAuthPopup}},mutations:{setUser:function(t,e){t.user=e},setLoggedIn:function(t,e){t.isLoggedIn=e},setAuthError:function(t,e){var n=null;console.log("error",e),e&&e.message&&(n={"The email address is badly formatted.":"Неверный формат email","The password is invalid or the user does not have a password.":"Неверный пароль","There is no user record corresponding to this identifier. The user may have been deleted.":"Неверный логин","Too many unsuccessful login attempts. Please try again later.":"Слишком много неудачных попыток входа в систему. Пожалуйста, попробуйте позже","The email address is already in use by another account.":"Этот email уже занят"}[e.message]),t.authError=n||e},setRegistrationError:function(t,e){console.log("setRegistrationError",e);var n=null;e&&e.message&&(n={"The email address is already in use by another account.":"Этот email уже занят"}[e.message]),t.registrationError=n||e},setOpenPopup:function(t,e){t.openAuthPopup=e}},actions:{signUp:function(t,e){var n=t.commit,r=e.email,a=e.password;return n("setAuthError",null),rt.a.auth().signInWithEmailAndPassword(r,a).then((function(t){return console.log("data",t),n("setUser",t),t})).catch((function(t){throw n("setAuthError",t),t}))},signOut:function(t){var e=t.commit;return rt.a.auth().signOut().then((function(){e("setUser",null)}))},createUser:function(t,e){var n=t.commit,r=e.email,a=e.pass,s=e.name;return n("setRegistrationError",null),rt.a.auth().createUserWithEmailAndPassword(r,a).then((function(t){t.user.updateProfile({displayName:s}).then((function(){return t}))})).catch((function(t){throw n("setRegistrationError",t),t}))},fetchUser:function(t,e){var n=t.commit;n("setLoggedIn",null!==e),e?(n("setUser",{id:e.uid,displayName:e.displayName,email:e.email}),localStorage.setItem("isLoggedIn",e.id)):(n("setUser",null),localStorage.removeItem("isLoggedIn"))}}}),it={state:{historyList:null},getters:{getHistoryList:function(t){return t.historyList}},mutations:{setHistoryList:function(t,e){t.historyList=e}},actions:{updateHistoryList:function(t){var e=t.commit,n=t.getters;return rt.a.firestore().collection("orders").where("userId","==",n.getUser.id).get().then((function(t){var n=[];t.forEach((function(t){n.push(Object(et["a"])({id:t.id},t.data()))})),console.log(n),e("setHistoryList",n)}))}}},ct={state:{orderList:null},getters:{getOrderList:function(t){return t.orderList}},mutations:{setOrderList:function(t,e){t.orderList=e}},actions:{updateOrderList:function(t){var e=t.commit;return rt.a.firestore().collection("orders").get().then((function(t){var n=[];t.forEach((function(t){n.push(Object(et["a"])({id:t.id},t.data()))})),console.log(n),e("setOrderList",n)}))}}};r["a"].use(Z["a"]);var ut=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{appState:tt,itemManager:at,cartManager:st,authManager:ot,historyManager:it,orderManager:ct}}),dt={apiKey:"AIzaSyDI7M40GcJ-GeRbKjJNgd3U-LdgzERfqdQ",authDomain:"oxygen-cbba4.firebaseapp.com",databaseURL:"https://oxygen-cbba4.firebaseio.com",projectId:"oxygen-cbba4",storageBucket:"",messagingSenderId:"",appId:""};rt.a.initializeApp(dt);rt.a.firestore(),n("202f"),n("b20f");var lt=n("5efb"),ft=n("b558"),mt=n("09d9"),ht=n("ff57"),pt=n("3af3"),gt=n("0c63"),bt=n("ed3b"),jt=n("55f1"),vt=n("a071");rt.a.auth().onAuthStateChanged((function(t){ut.dispatch("fetchUser",t)})),r["a"].use(lt["a"]),r["a"].use(ft["a"]),r["a"].use(mt["a"]),r["a"].use(ht["a"]),r["a"].use(pt["a"]),r["a"].use(gt["a"]),r["a"].use(bt["a"]),r["a"].use(jt["a"]),r["a"].use(vt["a"]),r["a"].config.productionTip=!1,new r["a"]({router:Y,store:ut,render:function(t){return t(H)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5ced":function(t,e,n){},"5d31":function(t,e,n){"use strict";var r=n("6c45"),a=n.n(r);a.a},"5e7d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"item"},[n("div",{staticClass:"item__image",on:{click:function(e){return t.$emit("click",t.item)}}},[n("img",{attrs:{src:t.item.imageURL}})]),n("div",{staticClass:"item__info",on:{click:function(e){return t.$emit("click",t.item)}}},[n("div",{staticClass:"item__name"},[t._v(t._s(t.item.name))]),n("div",{staticClass:"item__price"},[t._v(t._s(t.item.price)+" ₽")])]),n("a-button",{staticClass:"item__button",attrs:{type:"primary"},on:{click:function(e){return t.$emit("addToCart",t.item)}}},[t._v(" "+t._s(t.actionText)+" ")])],1):t._e()},a=[],s={name:"Item",props:{item:{type:Object,required:!0},actionText:{type:String,default:"В корзину"}},methods:{},computed:{}},o=s,i=(n("83d2"),n("2877")),c=Object(i["a"])(o,r,a,!1,null,null,null);e["a"]=c.exports},"5f4c":function(t,e,n){},"6c45":function(t,e,n){},"83d2":function(t,e,n){"use strict";var r=n("96a9"),a=n.n(r);a.a},"96a9":function(t,e,n){},"9c0c":function(t,e,n){},af35:function(t,e,n){},b20f:function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("5ced"),a=n.n(r);a.a},dc26:function(t,e,n){"use strict";var r=n("5f4c"),a=n.n(r);a.a}});
//# sourceMappingURL=app.e65e092c.js.map