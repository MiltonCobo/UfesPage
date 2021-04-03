(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1170:function(e,t,o){"use strict";o.r(t);var n,r=o(3),d=o(12),l=(o(18),o(19),o(5),o(470)),c=o(487);o(488);function h(){var e,t=[],o=!0,n=!1,a=43,b=55,r=11/6,d=.16,h=-.65,f=20,dt=.001,x=new l.Color4(46/255,139/255,87/255,.1),m=new l.Color4(1,99/255,71/255,.5),v=new l.Color4(1,215/255,0,.3),w=new l.Color4(135/255,206/255,250/255,1),C=[];C[-2]=x,C[0]=w,C[2]=m;var V=v;var canvas=document.getElementById("lorenzCanvas"),S=new l.Engine(canvas,!0),T=function(x,canvas){var m=new l.Scene(x);m.clearColor=new l.Color3(0,0,0);var v=new l.ArcRotateCamera("camera",-1.57,-1.8,50,new l.Vector3(0,0,0),m);v.attachControl(canvas,!1),v.setPosition(new l.Vector3(400,200,-400)),v.minZ=.001,v.maxZ=6e3,v.setTarget(new l.Vector3(0,100,0));new l.AxesViewer(m,50);function w(){for(var e=function(e){for(var t=[],o=.1,n=400,c=-2;c<4;c+=2){var x=300*c;t[c]=[];for(var m=0;m<1e3;m++)n+=dt*(r*n+(x+=dt*(a*(o-x)+d*x*n))*(o+=dt*(b*x+f*o-x*n))+h*(x*x));for(var i=0;i<e/3;i++)n+=dt*(r*n+(x+=dt*(a*(o-x)+d*x*n))*(o+=dt*(b*x+f*o-x*n))+h*(x*x)),t[c].push(new l.Vector3(x,n,o))}return t}(4e4),n=-2;n<4;n+=2)t[n]=l.MeshBuilder.CreateLines("Lorenz1",{points:e[n],updatable:!0},m),t[n].color=C[n],t[n].isVisible=o}function S(){(e=new l.PointsCloudSystem("butterflies",3.6,m,{updatable:!0})).addPoints(600),e.initParticles=function(){for(var p=0;p<e.nbParticles;p++)e.particles[p].position=new l.Vector3(1e3*Math.random()-500,1e3*Math.random()-500,1e3*Math.random()-500),e.particles[p].color=V},e.buildMeshAsync().then((function(t){e.initParticles(),e.setParticles(),t.position.x=0,t.position.y=0,t.position.z=0,t.alwaysSelectAsActiveMesh=!0})),e.updateParticle=function(e){var t=e.position.x,o=e.position.y,n=e.position.z;o+=dt*(r*o+(t+=dt*(a*(n-t)+d*t*o))*(n+=dt*(b*t+f*n-t*o))+h*(t*t)),e.position.x=t,e.position.y=o,e.position.z=n}}w(),S(),m.registerBeforeRender((function(){e.setParticles()}));var T=new c.AdvancedDynamicTexture.CreateFullscreenUI("myUI");T.isForeground=!1;var k=new c.StackPanel;k.width="160px",k.horizontalAlignment=c.Control.HORIZONTAL_ALIGNMENT_RIGHT,k.verticalAlignment=c.Control.VERTICAL_ALIGNMENT_BOTTOM,T.addControl(k);var O=new c.Button.CreateSimpleButton("hidePanel","Controles");O.width="100px",O.height="40px",O.color="#08a31f",O.fontSize=18,O.thickness=0,O.cornerRadius=20,O.background="#0f0f0f",O.onPointerUpObservable.add((function(){n=!n,y.isVisible=n,M.isVisible=n,_.isVisible=n,L.isVisible=n,F.isVisible=n,R.isVisible=n,E.isVisible=n,A.isVisible=n,B.isVisible=n,P.isVisible=n,J.isVisible=n,j.isVisible=n,I.isVisible=n,y.isVisible=n,z.isVisible=n})),k.addControl(O);var z=new c.Button.CreateSimpleButton("hide attractor","Sem/Com Atrator");z.isVisible=n,z.width="100px",z.height="40px",z.color="#08a31f",z.fontSize=16,z.thickness=0,z.cornerRadius=20,z.background="#0f0f0f",z.onPointerUpObservable.add((function(){o=!o;for(var e=-2;e<4;e+=2)t[e].isVisible=o})),k.addControl(z);var y=new c.Button.CreateSimpleButton("startButton","Recriar partículas");y.isVisible=n,y.width="140px",y.height="40px",y.color="#08a31f",y.fontSize=16,y.thickness=0,y.cornerRadius=20,y.background="#0f0f0f",y.onPointerUpObservable.add((function(){e.dispose(),S()})),k.addControl(y);var M=new c.TextBlock;M.isVisible=n,M.text="a = "+a.toFixed(1).toString(),M.color="#08a31f",M.height="40px",M.fontSize=18,M.top="40px",k.addControl(M);var A=new c.Slider;A.isVisible=n,A.minimum=32,A.maximum=50,A.value=42,A.height="15px",A.thumbWidth=20,A.width="150px",A.color="green",A.borderColor="black",A.isThumbCircle=!0,A.step=1,A.background="#2f2f2f",A.onValueChangedObservable.add((function(e){M.text="a = "+e.toFixed(1).toString(),a=e;for(var o=-2;o<4;o+=2)t[o].dispose();w()})),k.addControl(A);var _=new c.TextBlock;_.isVisible=n,_.text="b = "+b.toFixed(0).toString(),_.color="#08a31f",_.height="40px",_.fontSize=18,k.addControl(_);var B=new c.Slider;B.isVisible=n,B.minimum=30,B.maximum=70,B.value=43,B.height="15px",B.thumbWidth=20,B.width="150px",B.color="green",B.borderColor="black",B.isThumbCircle=!0,B.step=1,B.background="#2f2f2f",B.onValueChangedObservable.add((function(e){_.text="b = "+e.toFixed(1).toString(),b=e;for(var o=-2;o<4;o+=2)t[o].dispose();w()})),k.addControl(B);var L=new c.TextBlock;L.isVisible=n,L.text="c = "+r.toFixed(1).toString(),L.color="#08a31f",L.height="40px",L.fontSize=18,k.addControl(L);var P=new c.Slider;P.isVisible=n,P.minimum=0,P.maximum=10,P.value=11/6,P.height="15px",P.thumbWidth=20,P.width="150px",P.color="green",P.borderColor="black",P.isThumbCircle=!0,P.step=.1,P.background="#2f2f2f",P.onValueChangedObservable.add((function(e){L.text="c = "+e.toFixed(2).toString(),r=e;for(var o=-2;o<4;o+=2)t[o].dispose();w()})),k.addControl(P);var F=new c.TextBlock;F.isVisible=n,F.text="d = "+d.toFixed(2).toString(),F.color="#08a31f",F.height="40px",F.fontSize=18,k.addControl(F);var J=new c.Slider;J.isVisible=n,J.minimum=0,J.maximum=.22,J.value=.16,J.height="15px",J.thumbWidth=20,J.width="150px",J.color="green",J.borderColor="black",J.isThumbCircle=!0,J.step=.01,J.background="#2f2f2f",J.onValueChangedObservable.add((function(e){F.text="d = "+e.toFixed(2).toString(),d=e;for(var o=-2;o<4;o+=2)t[o].dispose();w()})),k.addControl(J);var R=new c.TextBlock;R.isVisible=n,R.text="e = "+h.toFixed(2).toString(),R.color="#08a31f",R.height="40px",R.fontSize=18,k.addControl(R);var j=new c.Slider;j.isVisible=n,j.minimum=-.72,j.maximum=-.54,j.value=-.65,j.height="15px",j.thumbWidth=20,j.width="150px",j.color="green",j.borderColor="black",j.isThumbCircle=!0,j.step=.01,j.background="#2f2f2f",j.onValueChangedObservable.add((function(e){R.text="e = "+e.toFixed(2).toString(),h=e;for(var o=-2;o<4;o+=2)t[o].dispose();w()})),k.addControl(j);var E=new c.TextBlock;E.isVisible=n,E.text="f = "+f.toFixed(0).toString(),E.color="#08a31f",E.height="40px",E.fontSize=18,k.addControl(E);var I=new c.Slider;I.isVisible=n,I.minimum=-5,I.maximum=24,I.value=20,I.height="30px",I.thumbWidth=20,I.width="150px",I.color="green",I.borderColor="black",I.isThumbCircle=!0,I.step=1,I.background="#2f2f2f",I.paddingBottom="15px",I.onValueChangedObservable.add((function(e){E.text="f = "+e.toFixed(0).toString(),f=e;for(var o=-2;o<4;o+=2)t[o].dispose();w()})),k.addControl(I);var H=new c.StackPanel;H.width="400px",H.horizontalAlignment=c.Control.HORIZONTAL_ALIGNMENT_LEFT,H.verticalAlignment=c.Control.VERTICAL_ALIGNMENT_BOTTOM,T.addControl(H);var N=new c.TextBlock;N.text="Use mouse, um dedo ou as setas para rotar",N.height="20px",N.fontSize=16,N.color="#08a31f",H.addControl(N);var U=new c.TextBlock;return U.text="Use Ctrl+setas ou dois dedos para transladar",U.height="20px",U.fontSize=16,U.color="#08a31f",H.addControl(U),m}(S,canvas),k=window.location.pathname;S.runRenderLoop((function(){T.render(),window.location.pathname!==k&&S.stopRenderLoop()})),window.addEventListener("resize",(function(){S.resize()}))}var f=(n={created:function(){},mounted:function(){h(),this.checkMathJaxLoaded()},destroyed:function(){},updated:function(){window.MathJax.Hub&&MathJax.Hub.Queue(["Typeset",MathJax.Hub,"mathjax"])},methods:{checkMathJaxLoaded:function(){if(void 0===Object(d.a)(window.MathJax)){var script=document.createElement("script");script.type="text/javascript",script.defer=!0,script.src="/js/MathJax/mathjax2Config.js",document.head.appendChild(script)}else void 0!==MathJax.Hub&&MathJax.Hub.Queue(["Typeset",MathJax.Hub,"mathjax"])}}},Object(r.a)(n,"updated",(function(){MathJax.Hub.Queue(["Typeset",MathJax.Hub,"mathjax"])})),Object(r.a)(n,"data",(function(){return{}})),Object(r.a)(n,"head",(function(){return{title:"O atrator de Chen",meta:[{hid:"description index.vue",name:"O atrator de Chen",content:"O atrator de Lorenz em www.dydx.ufes.br do DMAT/UFES"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{}],script:[]}})),n),x=(o(734),o(48)),m=o(92),v=o.n(m),w=o(520),C=o(418),V=o(414),S=o(521),component=Object(x.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{staticStyle:{margin:"0px"},attrs:{fluid:""}},[o("v-row",[o("v-col",[o("h2",{staticStyle:{color:"black"},attrs:{align:"center"}},[e._v("\n        O Atrator "),o("i",[e._v("Three Scroll")])]),e._v(" "),o("v-divider",{staticStyle:{"margin-bottom":"0.5%"}})],1)],1),e._v(" "),o("v-row",[o("v-col",{attrs:{align:"center"}},[o("canvas",{attrs:{id:"lorenzCanvas"}})])],1),e._v(" "),o("v-row",[o("v-col",{staticClass:"mathjax"},[e._v('\n      O atrator de "Three scroll" (com três turbilhões) corresponde às\n      equações: \\[ \\begin{cases} \\dfrac{dx}{dt} = a(y-x) + dxz \\\\\n      \\dfrac{dy}{dt} = bx + fy -xz \\\\ \\dfrac{dz}{dt} = ex^2 + xy +\n      cz\\end{cases} \\] com parâmetros $a = 43, b= 55, c=11/6, d= 4/25, e =\n      -13/20$ e $f=20.$\n      '),o("br")])],1),e._v(" "),o("v-row",[o("v-col",{staticClass:"ml-5"},[o("ol",[o("u",[e._v("Referências:")]),e._v(" "),o("li",{staticClass:"mt-4"},[o("a",{attrs:{href:"https://www.sciencedirect.com/science/article/pii/S0375960107010584",target:"_blank"}},[e._v("\n            A three-scroll chaotic attractor.\n          ")]),e._v("\n          Dequan Li. Physics Letters A Volume 372, Issue 4, 21 January 2008,\n          Pages 387-393.\n        ")])])])],1)],1)}),[],!1,null,"53bd3d00",null);t.default=component.exports;v()(component,{VCol:w.a,VContainer:C.a,VDivider:V.a,VRow:S.a})},587:function(e,t,o){},734:function(e,t,o){"use strict";o(587)}}]);