(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(t,e,n){"use strict";e.a=function(t,e){e("store",{debug:!0,state:{discardTouch:!1,windowWidth:null,windowHeight:null},discardTouch:function(t){this.debug&&console.log("set discard touch to",t),this.state.discardTouch=t},setWindowWidth:function(t){this.debug&&console.log("set global windowWidth to",t),this.state.windowWidth=t},setWindowHeight:function(t){this.debug&&console.log("set global windowHeight to",t),this.state.windowHeight=t}})}},138:function(t,e,n){"use strict";function r(){}n.d(e,"a",(function(){return r}))},139:function(t,e,n){"use strict";var r=n(2),o=n(140);r.a.component("line-chart",{extends:o.a,props:["options","chartdata"],mounted:function(){this.renderChart(this.chartdata,this.options)}}),r.a.use(o.a)},323:function(t,e,n){"use strict";var r={created:function(){this.$vuetify.theme.dark=!0},mounted:function(){var t=window.innerWidth;window.innerHeight;if(t<400&&(this.smallWindow=!0),this.$store.setWindowWidth(t),window.MathJax)MathJax.Hub.Queue(["Typeset",MathJax.Hub,"mathjax"]);else{var script=document.createElement("script");script.type="text/javascript",script.src="/js/MathJax/mathjax2Config.js",document.head.appendChild(script)}},destroyed:function(){this.$vuetify.theme.dark=!1},methods:{onScriptLoaded:function(){MathJax.Hub.Queue(["Typeset",MathJax.Hub,"mathjax"])}},data:function(){return{drawer:!1,smallWindow:!1,closeOnContentClick:!0,hideOnLeave:!0,cursos:o,itemsDrawer:[{title:"Inicial",icon:"mdi-home",route:"/"},{title:"Lorenz",icon:"mdi-book-open-page-variant",route:"/lorenz"},{title:"Lotka-Volterra",icon:"mdi-book-open-page-variant",route:"/LotkaVolterra"}]}}},o=[{title:"Eq. Diferenciais",active:!1,sections:[{title:"Eq. de 1a Ordem",route:"/EqDiff/Ordem1/",active:!1,items:[{title:"Eq. Linear",route:"/EqDiff/Ordem1/Lineares/"},{title:"Eq. Separável",route:"/EqDiff/Ordem1/Separavel/"}]},{title:"Eq. de 2a Ordem",route:"/EqDiff/Ordem2",active:!1,items:[{title:"Coef. Constantes",route:""},{title:"Coef. Variáveis",route:""}]}]}],l=r,c=n(48),v=n(92),d=n.n(v),m=n(411),j=n(417),f=n(412),_=n(325),h=n(418),k=n(413),x=n(414),w=n(130),y=n(115),C=n(131),V=n(132),z=n(86),L=n(133),E=n(17),O=n(73),S=n(419),D=n(420),I=n(416),W=n(34),A=n(67),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"disable-resize-watcher":"",temporary:"",clipped:"",dense:"",dark:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item",[n("v-list-item-avatar",{attrs:{height:"80",width:"80"}},[n("v-img",{attrs:{position:"center center",src:"/figures/logo-ufes.jpg"}})],1),t._v(" "),n("span",{staticClass:"blue--text"},[t._v(" UFES ")])],1),t._v(" "),n("v-list-item",{attrs:{link:""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"blue--text"},[t._v("\n            Dpto de Matemática\n          ")]),t._v(" "),n("v-list-item-subtitle",[t._v("Campus Goiabeiras")])],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{staticClass:"mx-n5",attrs:{nav:"",dense:""}},t._l(t.itemsDrawer,(function(e){return n("v-list-item",{key:e.title,staticClass:"px-n2"},[n("v-list-item-icon",[n("v-icon",{staticClass:"blue--text",attrs:{small:"",left:""}},[t._v(t._s(e.icon))])],1),t._v(" "),n("n-link",{staticStyle:{"text-decoration":"none"},attrs:{to:e.route}},[n("v-list-item-title",{staticClass:"mx-n6"},[t._v(t._s(e.title))])],1)],1)})),1),t._v(" "),n("v-divider"),t._v(" "),n("div")],1),t._v(" "),n("v-app-bar",{attrs:{"hide-on-scroll":"",flat:"",dark:"",app:""}},[n("v-app-bar-nav-icon",{staticClass:"blue--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-spacer"),t._v(" "),t.smallWindow?n("v-btn",{attrs:{icon:""}},[n("nuxt-link",{attrs:{to:"/"}},[n("v-icon",[t._v("\n          mdi-home\n        ")])],1)],1):t._e(),t._v(" "),t.smallWindow?t._e():n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",{staticClass:"blue--text text-Capitalize"},[n("nuxt-link",{attrs:{to:"/",flat:""}},[t._v("\n          Matemática-UFES\n        ")])],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{"close-on-content-click":t.closeOnContentClick,text:"",dense:"",dark:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"blue--text",attrs:{dark:""}},r),[t._v("\n          Cursos\n        ")])]}}])},[t._v(" "),n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-list",{attrs:{nav:""}},t._l(t.cursos,(function(e){return n("v-list-group",t._g({key:e.title,scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{attrs:{link:"",to:e.route}},[t._v("\n                      "+t._s(e.title)+"\n                    ")])],1)],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"curso.active"}},r),[t._v(" "),t._l(e.sections,(function(section){return n("v-list",{key:section.title,attrs:{link:"",dense:"","no-action":""},on:{click:function(t){}}},[n("v-list-item",{attrs:{link:"",nuxt:"",to:section.route}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"blue--text"},[t._v(t._s(section.title))])],1)],1),t._v(" "),t._l(section.items,(function(e){return n("v-list",{key:e.title,attrs:{link:"",dense:"","no-action":"",rounded:""},on:{click:function(t){}}},[n("v-list-item",{staticClass:"mx-2",attrs:{link:"",nuxt:"",to:e.route}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"green--text",attrs:{link:""}},[t._v(t._s(e.title))])],1)],1)],1)}))],2)}))],2)})),1)]}}])})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""}},r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),n("v-list",t._l(5,(function(e){return n("v-list-item",{key:e,on:{click:function(){}}},[n("v-list-item-title",[t._v("Option "+t._s(e))])],1)})),1)],1)],1),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("nuxt")],1)],1)],1)}),[],!1,null,"1b02b761",null);e.a=component.exports;d()(component,{VApp:m.a,VAppBar:j.a,VAppBarNavIcon:f.a,VBtn:_.a,VContainer:h.a,VContent:k.a,VDivider:x.a,VIcon:w.a,VImg:y.a,VList:C.a,VListGroup:V.a,VListItem:z.a,VListItemAvatar:L.a,VListItemContent:E.a,VListItemIcon:O.a,VListItemSubtitle:E.b,VListItemTitle:E.c,VMenu:S.a,VNavigationDrawer:D.a,VSpacer:I.a,VToolbar:W.a,VToolbarTitle:A.a})},324:function(t,e,n){"use strict";var r={mounted:function(){var t=window.innerWidth,e=window.innerHeight;t<400&&(this.smallWindow=!0),this.$store.setWindowWidth(t),this.$store.setWindowHeight(e),window.PlotlyConfig={MathJaxConfig:"local"}},data:function(){return{drawer:!1,smallWindow:!1,closeOnContentClick:!0,hideOnLeave:!0,expandOnHover:!0,cursos:o,attractors:[{name:"Lorenz",route:"/Attractors/lorenz"},{name:"Chen",route:"/Attractors/qichen"},{name:"Halvorsen",route:"/Attractors/halvorsen"},{name:"Chen-Lee",route:"/Attractors/chenlee"},{name:"Three scroll",route:"/Attractors/3scroll"}],itemsDrawer:[{title:"Inicial",icon:"mdi-home",route:"/"},{title:"Lotka-Volterra",icon:"mdi-book-open-page-variant",route:"/LotkaVolterra"}]}}},o=[{title:"Eq. Diferenciais",active:!1,sections:[{title:"Eq. de 1a Ordem",route:"/EqDiff/Ordem1/",active:!0,items:[{title:"Eq. Linear",route:"/EqDiff/Ordem1/Lineares/"},{title:"Eq. Separável",route:"/EqDiff/Ordem1/Separavel/"}]},{title:"Eq. de 2a Ordem",route:"/EqDiff/Ordem2",active:!1,items:[{title:"Coef. Constantes",route:""},{title:"Coef. Variáveis",route:""}]}]}],l=r,c=n(48),v=n(92),d=n.n(v),m=n(411),j=n(417),f=n(412),_=n(325),h=n(418),k=n(414),x=n(130),w=n(131),y=n(132),C=n(86),V=n(133),z=n(17),L=n(73),E=n(136),O=n(419),S=n(420),D=n(416),I=n(34),W=n(67),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{"disable-resize-watcher":"","mobile-breakpoint":"1400",temporary:"",dense:"",dark:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-spacer"),t._v(" "),r("v-list",[r("v-list-item",{staticStyle:{position:"30%"}},[r("v-list-item-avatar",{attrs:{width:"80",height:"80",contain:""}},[r("img",{attrs:{src:n(402)}})]),t._v(" "),r("span",{staticClass:"blue--text"},[t._v(" UFES ")])],1),t._v(" "),r("v-list-item",{attrs:{link:""}},[r("v-list-item-content",{staticStyle:{"font-size":"min(2vmin, 15px)"}},[r("v-list-item-title",{staticClass:"blue--text"},[t._v("\n            Matemática\n          ")]),t._v(" "),r("v-list-item-subtitle",{staticClass:"blue--text"},[t._v("Campus Goiabeiras")])],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list",{staticClass:"mx-n5",attrs:{nav:"",dense:""}},t._l(t.itemsDrawer,(function(e){return r("v-list-item",{key:e.title},[r("v-list-item-icon",[r("v-icon",{staticClass:"blue--text",attrs:{left:""}},[t._v(t._s(e.icon))])],1),t._v(" "),r("n-link",{staticStyle:{"text-decoration":"none"},attrs:{to:e.route}},[r("v-list-item-title",{staticClass:"mx-n6"},[t._v(t._s(e.title))])],1)],1)})),1),t._v(" "),r("v-divider"),t._v(" "),r("v-menu",{attrs:{bottom:"","offset-x":"","offset-y":"",transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"blue--text",attrs:{text:""}},n),[t._v("\n          Atratores caóticos\n        ")])]}}])},[t._v(" "),r("v-list",{attrs:{dense:"",dark:""}},t._l(t.attractors,(function(e,i){return r("v-list-item",{key:i},[r("n-link",{staticStyle:{"text-decoration":"none"},attrs:{to:e.route}},[r("v-list-item-title",[t._v("\n              "+t._s(e.name)+"\n            ")])],1)],1)})),1)],1)],1),t._v(" "),r("v-app-bar",{attrs:{"hide-on-scroll":"",flat:"",dark:"",app:""}},[r("v-app-bar-nav-icon",{staticClass:"blue--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-spacer"),t._v(" "),t.smallWindow?r("v-btn",{attrs:{icon:""}},[r("nuxt-link",{attrs:{to:"/"}},[r("v-icon",[t._v("\n          mdi-home\n        ")])],1)],1):t._e(),t._v(" "),t.smallWindow?t._e():r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",{staticClass:"blue--text text-Capitalize"},[r("nuxt-link",{attrs:{to:"/",flat:""}},[t._v("\n          Matemática-UFES\n        ")])],1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-menu",{attrs:{text:"",shaped:"",dense:"",dark:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"blue--text",attrs:{dark:""}},n),[t._v("\n          Cursos\n        ")])]}}])},[t._v(" "),r("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-list",{attrs:{nav:""}},t._l(t.cursos,(function(e){return r("v-list-group",t._g({key:e.title,scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{attrs:{link:"",to:e.route}},[t._v("\n                      "+t._s(e.title)+"\n                    ")])],1)],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"curso.active"}},n),[t._v(" "),t._l(e.sections,(function(section){return r("v-list",{key:section.title,attrs:{link:"",dense:"","no-action":""}},[r("v-list-item",{attrs:{link:"",nuxt:"",to:section.route}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"blue--text"},[t._v(t._s(section.title))])],1)],1),t._v(" "),t._l(section.items,(function(e){return r("v-list",{key:e.title,attrs:{link:"",dense:"","no-action":"",rounded:""}},[r("v-list-item",{staticClass:"mx-2",attrs:{link:"",nuxt:"",to:e.route}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"green--text",attrs:{link:""}},[t._v(t._s(e.title))])],1)],1)],1)}))],2)}))],2)})),1)]}}])})],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:""}},n),[r("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),r("v-list",t._l(5,(function(e){return r("v-list-item",{key:e,on:{click:function(){}}},[r("v-list-item-title",[t._v("Option "+t._s(e))])],1)})),1)],1)],1),t._v(" "),r("v-main",[r("v-container",{attrs:{fluid:""}},[r("nuxt")],1)],1)],1)}),[],!1,null,"9fc10322",null);e.a=component.exports;d()(component,{VApp:m.a,VAppBar:j.a,VAppBarNavIcon:f.a,VBtn:_.a,VContainer:h.a,VDivider:k.a,VIcon:x.a,VList:w.a,VListGroup:y.a,VListItem:C.a,VListItemAvatar:V.a,VListItemContent:z.a,VListItemIcon:L.a,VListItemSubtitle:z.b,VListItemTitle:z.c,VMain:E.a,VMenu:O.a,VNavigationDrawer:S.a,VSpacer:D.a,VToolbar:I.a,VToolbarTitle:W.a})},346:function(t,e,n){t.exports=n(347)},361:function(t,e){},371:function(t,e,n){},402:function(t,e,n){t.exports=n.p+"img/logo-ufes.eb27ebc.jpg"},403:function(t,e,n){var map={"./af":181,"./af.js":181,"./ar":182,"./ar-dz":183,"./ar-dz.js":183,"./ar-kw":184,"./ar-kw.js":184,"./ar-ly":185,"./ar-ly.js":185,"./ar-ma":186,"./ar-ma.js":186,"./ar-sa":187,"./ar-sa.js":187,"./ar-tn":188,"./ar-tn.js":188,"./ar.js":182,"./az":189,"./az.js":189,"./be":190,"./be.js":190,"./bg":191,"./bg.js":191,"./bm":192,"./bm.js":192,"./bn":193,"./bn-bd":194,"./bn-bd.js":194,"./bn.js":193,"./bo":195,"./bo.js":195,"./br":196,"./br.js":196,"./bs":197,"./bs.js":197,"./ca":198,"./ca.js":198,"./cs":199,"./cs.js":199,"./cv":200,"./cv.js":200,"./cy":201,"./cy.js":201,"./da":202,"./da.js":202,"./de":203,"./de-at":204,"./de-at.js":204,"./de-ch":205,"./de-ch.js":205,"./de.js":203,"./dv":206,"./dv.js":206,"./el":207,"./el.js":207,"./en-au":208,"./en-au.js":208,"./en-ca":209,"./en-ca.js":209,"./en-gb":210,"./en-gb.js":210,"./en-ie":211,"./en-ie.js":211,"./en-il":212,"./en-il.js":212,"./en-in":213,"./en-in.js":213,"./en-nz":214,"./en-nz.js":214,"./en-sg":215,"./en-sg.js":215,"./eo":216,"./eo.js":216,"./es":217,"./es-do":218,"./es-do.js":218,"./es-mx":219,"./es-mx.js":219,"./es-us":220,"./es-us.js":220,"./es.js":217,"./et":221,"./et.js":221,"./eu":222,"./eu.js":222,"./fa":223,"./fa.js":223,"./fi":224,"./fi.js":224,"./fil":225,"./fil.js":225,"./fo":226,"./fo.js":226,"./fr":227,"./fr-ca":228,"./fr-ca.js":228,"./fr-ch":229,"./fr-ch.js":229,"./fr.js":227,"./fy":230,"./fy.js":230,"./ga":231,"./ga.js":231,"./gd":232,"./gd.js":232,"./gl":233,"./gl.js":233,"./gom-deva":234,"./gom-deva.js":234,"./gom-latn":235,"./gom-latn.js":235,"./gu":236,"./gu.js":236,"./he":237,"./he.js":237,"./hi":238,"./hi.js":238,"./hr":239,"./hr.js":239,"./hu":240,"./hu.js":240,"./hy-am":241,"./hy-am.js":241,"./id":242,"./id.js":242,"./is":243,"./is.js":243,"./it":244,"./it-ch":245,"./it-ch.js":245,"./it.js":244,"./ja":246,"./ja.js":246,"./jv":247,"./jv.js":247,"./ka":248,"./ka.js":248,"./kk":249,"./kk.js":249,"./km":250,"./km.js":250,"./kn":251,"./kn.js":251,"./ko":252,"./ko.js":252,"./ku":253,"./ku.js":253,"./ky":254,"./ky.js":254,"./lb":255,"./lb.js":255,"./lo":256,"./lo.js":256,"./lt":257,"./lt.js":257,"./lv":258,"./lv.js":258,"./me":259,"./me.js":259,"./mi":260,"./mi.js":260,"./mk":261,"./mk.js":261,"./ml":262,"./ml.js":262,"./mn":263,"./mn.js":263,"./mr":264,"./mr.js":264,"./ms":265,"./ms-my":266,"./ms-my.js":266,"./ms.js":265,"./mt":267,"./mt.js":267,"./my":268,"./my.js":268,"./nb":269,"./nb.js":269,"./ne":270,"./ne.js":270,"./nl":271,"./nl-be":272,"./nl-be.js":272,"./nl.js":271,"./nn":273,"./nn.js":273,"./oc-lnc":274,"./oc-lnc.js":274,"./pa-in":275,"./pa-in.js":275,"./pl":276,"./pl.js":276,"./pt":277,"./pt-br":278,"./pt-br.js":278,"./pt.js":277,"./ro":279,"./ro.js":279,"./ru":280,"./ru.js":280,"./sd":281,"./sd.js":281,"./se":282,"./se.js":282,"./si":283,"./si.js":283,"./sk":284,"./sk.js":284,"./sl":285,"./sl.js":285,"./sq":286,"./sq.js":286,"./sr":287,"./sr-cyrl":288,"./sr-cyrl.js":288,"./sr.js":287,"./ss":289,"./ss.js":289,"./sv":290,"./sv.js":290,"./sw":291,"./sw.js":291,"./ta":292,"./ta.js":292,"./te":293,"./te.js":293,"./tet":294,"./tet.js":294,"./tg":295,"./tg.js":295,"./th":296,"./th.js":296,"./tk":297,"./tk.js":297,"./tl-ph":298,"./tl-ph.js":298,"./tlh":299,"./tlh.js":299,"./tr":300,"./tr.js":300,"./tzl":301,"./tzl.js":301,"./tzm":302,"./tzm-latn":303,"./tzm-latn.js":303,"./tzm.js":302,"./ug-cn":304,"./ug-cn.js":304,"./uk":305,"./uk.js":305,"./ur":306,"./ur.js":306,"./uz":307,"./uz-latn":308,"./uz-latn.js":308,"./uz.js":307,"./vi":309,"./vi.js":309,"./x-pseudo":310,"./x-pseudo.js":310,"./yo":311,"./yo.js":311,"./zh-cn":312,"./zh-cn.js":312,"./zh-hk":313,"./zh-hk.js":313,"./zh-mo":314,"./zh-mo.js":314,"./zh-tw":315,"./zh-tw.js":315};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=403},55:function(t,e,n){"use strict";var r={props:["error"]},o=n(48),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[404===this.error.statusCode?e("h1",[this._v("Page not found")]):e("h1",[this._v("An error occurred")]),this._v(" "),e("nuxt-link",{attrs:{to:"/"}},[this._v("Home page")])],1)}),[],!1,null,null,null);e.a=component.exports}},[[346,18,5,19]]]);