(this.webpackJsonpmm=this.webpackJsonpmm||[]).push([[0],{123:function(t,e,n){},124:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),s=n(40),i=n.n(s),o=(n(63),n(64),n(65),n(66),n(67),n(3)),c=n.n(o),l=n(7),u=n(6),d=n(10),f=n(11);n(69);var h=[1,0,1,0,1,1,0,1,0,1,0,1];var b=n(125),p=function(){function t(e){Object(d.a)(this,t),this.compiled=b.a(e)}return Object(f.a)(t,[{key:"verify",value:function(){try{return this.eval(0),!0}catch(t){return!1}}},{key:"eval",value:function(t){return this.compiled.evaluate({t:t})}},{key:"evalRange",value:function(t){var e=this;return t.map((function(t){return e.compiled.evaluate(t)}))}}]),t}(),A=function(){function t(e){Object(d.a)(this,t),this.expr=e}return Object(f.a)(t,[{key:"eval",value:function(){try{return b.b(this.expr)}catch(t){return}}}]),t}(),j=function(){function t(e,n,a,r){Object(d.a)(this,t),this.str=e,this.fn=new p(e),this.start=new A(n).eval(),this.end=new A(a).eval(),this.step=new A(r).eval()}return Object(f.a)(t,[{key:"values",value:function(){var t=this,e=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=[],r=t;r<e;r+=n)a.push(r);return a}(this.start,this.end,this.step);return e.map((function(e){return[e,t.fn.eval(e)]}))}},{key:"notes",value:function(t,e,n){var a=this;return this.values().map((function(r,s){var i=Object(u.a)(r,2)[1];return a.valToNote(i,t+s*e,e,n)}))}},{key:"valToNote",value:function(t,e,n,a){var r,s=(r=t,Math.round(r)%49+36+24);return a&&(s=function(t){for(var e=Math.round(t)%49,n=60;e>=0;)n++,0===h[n%12]&&n++,e--;for(;e<0;)n--,0===h[n%12]&&n--,e++;return n}(t)),function(t,e,n){return{midi:t,start:e,duration:n}}(s,e,n)}}]),t}();var x=j,m=n(43),v=n(16),w=n(0);var O=function(t){var e=t.label,n=t.registerEqu,a=t.registerStart,r=t.registerEnd,s=t.registerStep,i=t.registerStartBeat,o=t.registerDuration,c=t.registerWhiteOnly,l=t.remove;return Object(w.jsxs)("div",{className:"w-full border-t-2 py-2 flex flex-col",children:[Object(w.jsxs)("div",{className:"w-full flex flex-row",children:[Object(w.jsxs)("div",{className:"w-3/4 text-lg font-bold flex flex-start",children:["f(t) =",Object(w.jsx)("input",Object(v.a)(Object(v.a)({},n()),{},{placeholder:"...",label:e,className:"h-7 bottom-0 mx-2 w-52 focus:outline-none"}))]}),Object(w.jsx)("div",{className:"w-1/4 flex flex-row justify-end gap-2",children:Object(w.jsx)("button",{type:"submit",className:"bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md",onClick:function(){return l()},children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAYklEQVRYw+3VsQ3AIAxE0duDYZnGo0HFDmSBSNgGUkT/06J7Eg0S0TdVzZdT785vETN5AM4B/+j68wC4gVP3AAAAAAAAAHJAC335LQ5YCLA4UDTc80NFyhCmvhzvstw8kbcHgDjepK6bn4cAAAAASUVORK5CYII=",alt:"Delete",className:"w-4 h-4"})})})]}),Object(w.jsxs)("div",{className:"w-full flex flex-row",children:[Object(w.jsxs)("div",{className:"text-lg font-bold flex flex-start w-1/5",children:["S:",Object(w.jsx)("input",Object(v.a)({className:"h-7 bottom-0 ml-1 focus:outline-none",defaultValue:"1"},a()))]}),Object(w.jsxs)("div",{className:"text-lg font-bold flex flex-start w-1/5",children:["E:",Object(w.jsx)("input",Object(v.a)({className:"h-7 bottom-0 ml-1 focus:outline-none",defaultValue:"10"},r()))]}),Object(w.jsxs)("div",{className:"text-lg font-bold flex flex-start w-1/5",children:["ST:",Object(w.jsx)("input",Object(v.a)({className:"h-7 bottom-0 ml-1 focus:outline-none",defaultValue:"1"},s()))]})]}),Object(w.jsxs)("div",{className:"w-full flex flex-row",children:[Object(w.jsxs)("div",{className:"text-lg font-bold flex flex-start w-1/5",children:["SB:",Object(w.jsx)("input",Object(v.a)({className:"h-7 bottom-0 ml-1 focus:outline-none",defaultValue:"0"},i()))]}),Object(w.jsxs)("div",{className:"text-lg font-bold flex flex-start w-1/5",children:["D:",Object(w.jsxs)("select",Object(v.a)(Object(v.a)({className:"h-7 bottom-0 ml-1 focus:outline-none",defaultValue:"2"},o()),{},{children:[Object(w.jsx)("option",{value:1,children:"1"}),Object(w.jsx)("option",{value:2,children:"2"}),Object(w.jsx)("option",{value:4,children:"4"}),Object(w.jsx)("option",{value:8,children:"8"}),Object(w.jsx)("option",{value:16,children:"16"})]}))]}),Object(w.jsxs)("div",{className:"text-lg font-bold flex flex-start w-1/5",children:["WO:",Object(w.jsx)("input",Object(v.a)({type:"checkbox",className:"h-7 bottom-0 ml-1 focus:outline-none",value:!1},c()))]})]})]})},g=[{name:"I",equations:[{str:"0",start:"0",end:"32",step:"1",duration:8,whiteonly:!0},{str:"2 + t%2",start:"0",end:"32",step:"1",duration:8,whiteonly:!0},{str:"-3",start:"0",end:"32",step:"1",duration:8,whiteonly:!0},{str:"(2*t)%8",start:"0",end:"16",step:"1",duration:2,startBeat:32,whiteonly:!0},{str:"t^2 %8",start:"0",end:"32",step:"1",duration:1,startBeat:64,whiteonly:!0},{str:"t^3 %8",start:"0",end:"32",step:"1",duration:1,startBeat:96,whiteonly:!0},{str:"(t^2 + 1) %8",start:"0",end:"32",step:"1",duration:1,startBeat:128,whiteonly:!0},{str:"(t^3 + 1) %8",start:"0",end:"32",step:"1",duration:1,startBeat:160,whiteonly:!0},{str:"(t^5) %8",start:"0",end:"32",step:"1",duration:1,startBeat:192,whiteonly:!0},{str:"(t^5 + 1) %8",start:"0",end:"32",step:"1",duration:1,startBeat:224,whiteonly:!0},{str:"t^2 %8",start:"0",end:"32",step:"1",duration:1,startBeat:256,whiteonly:!0},{str:"t^3 %8",start:"0",end:"32",step:"1",duration:1,startBeat:256,whiteonly:!0}]},{name:"II",equations:[{str:"6 + sin(t * pi/2)",start:"0",end:"32",step:"1",duration:8,startBeat:0,whiteonly:!0},{str:"2",start:"0",end:"32",step:"1",duration:8,startBeat:0,whiteonly:!0},{str:"-3 + sin(t * pi/2)",start:"0",end:"32",step:"1",duration:8,startBeat:0,whiteonly:!0},{str:"(t^2 + t)%8",start:"0",end:"32",step:"1",duration:1,startBeat:32,whiteonly:!0},{str:"(t^3 + 2*t) % 16",start:"0",end:"32",step:"1",duration:1,startBeat:64,whiteonly:!0},{str:"(t^2) % 8",start:"0",end:"32",step:"1",duration:1,startBeat:96,whiteonly:!0},{str:"(t^5 + 4*t^3) % 10",start:"0",end:"32",step:"1",duration:1,startBeat:128,whiteonly:!0},{str:"(4*sin(t * pi/2) + t^2) % 11",start:"0",end:"32",step:"1",duration:1,startBeat:160,whiteonly:!0},{str:"(7*t^2) % 13",start:"0",end:"32",step:"1",duration:1,startBeat:192,whiteonly:!0},{str:"(3*t^3) % 14",start:"0",end:"32",step:"1",duration:1,startBeat:224,whiteonly:!0}]},{name:"III",equations:[{str:"-12cos(pi * t/2) + 27",start:0,end:49,step:1,startBeat:0,duration:1,whiteonly:!1},{str:"3",start:1,end:2,step:1,startBeat:4,duration:2,whiteonly:!1},{str:"15",start:1,end:3,step:1,startBeat:6,duration:2,whiteonly:!1},{str:"15 - 2t",start:0,end:3,step:1,startBeat:8,duration:2},{str:"11.4 - 1.6t",start:0,end:3,step:1,startBeat:14,duration:2,whiteonly:!1},{str:"6.6 + 1.5t",start:0,end:3,step:1,startBeat:20,duration:2,whiteonly:!1},{str:"3",start:0,end:2,step:1,startBeat:26,duration:2,whiteonly:!1},{str:"t^3/6-t^2-t/6+4",start:0,end:4,step:1,startBeat:30,duration:2,whiteonly:!1},{str:"-0.6-1.6t",start:0,end:3,step:1,startBeat:38,duration:2,whiteonly:!1},{str:"-5.4 + 1.5t",start:0,end:3,step:1,startBeat:44,duration:2,whiteonly:!1}]}];function y(t){var e=t.demos,n=t.setValue,a=e.map((function(t,e){var a=t.name,r=t.equations;return Object(w.jsxs)("button",{type:"button",className:"text-xs bg-gray-200 text-black-500 opacity-60 hover:opacity-100 px-2 py-2 rounded-md",onClick:function(){n("equations",r)},children:["D-",a]},e)}));return Object(w.jsx)(w.Fragment,{children:a})}var N=function(t){var e=t.handleSubmit,n=Object(m.b)({defaultValues:{}}),a=n.control,r=n.register,s=n.handleSubmit,i=n.setValue,o=n.getValues,c=(n.formState.errors,Object(m.a)({control:a,name:"equations"})),l=c.fields,u=c.append,d=c.remove,f=l.map((function(t,e){var n=e+1,a="equations.".concat(e);return Object(w.jsx)(O,{label:n,registerEqu:function(){return r("".concat(a,".str"),{required:"A valid equation is required!"})},registerStart:function(){return r("".concat(a,".start"),{required:"Start is required!"})},registerEnd:function(){return r("".concat(a,".end"),{required:"End is required!",validate:function(t){var n=o().equations[e].start;return new A(t).eval()>new A(n).eval()||"End must be greater than start!"}})},registerStep:function(){return r("".concat(a,".step"),{required:"Step is required!",validate:function(t){return new A(t).eval()>0||"Step must be greater than 0"}})},registerStartBeat:function(){return r("".concat(a,".startBeat"),{required:!0,setValueAs:function(t){return parseInt(t)}})},registerDuration:function(){return r("".concat(a,".duration"),{required:!0,setValueAs:function(t){return parseInt(t)}})},registerWhiteOnly:function(){return r("".concat(a,".whiteonly"))},remove:function(){return d(e)}},n)}));return Object(w.jsx)("div",{className:"w-full",children:Object(w.jsxs)("form",{onSubmit:s(e),children:[Object(w.jsxs)("div",{className:"w-full flex flex-row",children:[Object(w.jsx)("div",{className:"w-1/2 text-lg font-bold flex flex-start",children:"Equations"}),Object(w.jsxs)("div",{className:"w-1/2 flex flex-row justify-end gap-2",children:[Object(w.jsx)(y,{demos:g,setValue:i}),Object(w.jsx)("button",{type:"button",onClick:function(){return u({str:""})},className:"bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md",children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAANElEQVRYw+3SwQkAQAgDQftvWj9XwSEiOJsC5pMISdfKNwAAAJgA8nOAPsBNAQDAZkDSzgo1fM8xWMDdPAAAAABJRU5ErkJggg==",alt:"+",className:"w-4 h-4"})}),Object(w.jsx)("button",{type:"submit",className:"bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md",children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAB30lEQVRYw+1XsWoCQRB9RLFSoiApU0nwE2KsNGWq67VNFwJpAy7kA4JfYLCNfkAsjkOS64KdIAZinSqg6QQvhePeqnu3uxc1zb1r5ObNm3NuZmcOiBHjMMihjhYcjDHDDGM4aKGOXACbmYlbsDGHJ7nmsGFJ5D198TJcqbR4veFiQ14zQAJNpfjqekRCkNcKkEVvTWIAhioKSCONAi7BMFizv+CYy3s68kPBuYOilFVEV2B9Cb+VyfGffoJSKLeET0nKFPBz30de+W/zcMwClAX5lFY5PJgFcHly8lryzCxFFlEW0txvuzNp2YbAJkpXat10ZwF9EXLmzOn5ixoBWGDjBaLG2wrKACykswPRJkJDI0AkrCq6sq8AI5I421eAKUlk/jfANY6k1gzZp39NkYd3nEusZ2QdRX/JV/jgnf6Ekw1rhWxO9DIFUrjHD7G+cYukYGvQ/Xb0RlviFM88Wa/C/dWMq0U/KnxUaebdCPNtQbtGLvphJyKJO/Rp2APg49NWbUFhx3XY6FyQp6Wimg6c5dickJers2yZjswU+tynrONgOvR9+abuTmeytkw4tye88h0tXh2BNUTWpCrCV8fq1urYM5M3XX6b+skxX99dvcrZ3QfIAT6hYsTYMX4B5nX0NzNC5FsAAAAASUVORK5CYII=",alt:"Update",className:"w-4 h-4"})})]})]}),Object(w.jsx)("div",{className:"py-2"}),f]})})},C=n(5),B=n(56),k=n.n(B),S=["C","^C","D","^D","E","F","^F","G","^G","A","^A","B"],E=new Map([[1,"/4"],[2,"/2"],[4,""],[8,"2"],[16,"4"]]);function Q(t,e){for(var n="";t<60;)t+=12,n+=",";for(;t>=72;)t-=12,n+="'";return S[t-60]+n+E.get(e)}function D(t,e,n,a){k.a.renderAbc(t,function(t,e,n){var a,r="T: "+t+"\nM:4/4\nL:1/4\nQ:1/4="+e+"\nK:C\n",s=new Map,i=!1,o=Object(C.a)(n);try{for(o.s();!(a=o.n()).done;){var c=a.value;1===c.duration&&(i=!0),void 0===s.get(c.start)&&s.set(c.start,""),s.set(c.start,s.get(c.start)+Q(c.midi,c.duration))}}catch(A){o.e(A)}finally{o.f()}var l=Array.from(s.keys());l.sort((function(t,e){return t-e}));for(var u=0,d="",f=!0===i?32:64,h=0,b=l;h<b.length;h++){var p=b[h];p>=u+16&&(r+=d+" | ",d="",(u+=16)%f===0&&(r+="\n")),d+="["+s.get(p)+"] "}return r+(d+"|\n")}(e,n,a))}var F=function(t){var e=t.title,n=t.bpm,r=t.notes,s=e;return""===e&&(s="Untitled Masterpiece"),Object(a.useEffect)((function(){0!==r.len&&D("paper",s,n,r)})),Object(w.jsx)("div",{className:"w-full flex flex-col items-center",id:"paper"})},V=n(57),q=n.n(V),M=function(){function t(){Object(d.a)(this,t),this.ac=new AudioContext,this.piano=void 0,this.nodes=[]}return Object(f.a)(t,[{key:"init",value:function(){var t=Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.a.instrument(this.ac,"acoustic_grand_piano",{soundfont:"SalC5Light2"});case 2:this.piano=t.sent;case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"play",value:function(){var t=Object(l.a)(c.a.mark((function t(e,n,a){var r,s,i,o,l,u,d,f,h,b,p;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.piano){t.next=3;break}return t.next=3,this.init();case 3:return t.next=5,this.stop();case 5:r=15/n,s=this.ac.currentTime,i=Object(C.a)(e);try{for(i.s();!(o=i.n()).done;)l=o.value,u=l.midi,d=l.start,f=l.duration,h=s+a+d*r,b=f*r,p=this.piano.start(u,h,{duration:b}),this.nodes.push(p)}catch(c){i.e(c)}finally{i.f()}case 9:case"end":return t.stop()}}),t,this)})));return function(e,n,a){return t.apply(this,arguments)}}()},{key:"stop",value:function(){var t=Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.piano.stop(),this.nodes=[];case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),U=M;function I(t){var e=t.handlePlay,n=t.handleStop,a="bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md left-0 top-0 mr-1";return Object(w.jsxs)("div",{className:"text-lg font-bold flex flex-start mr-3",children:[Object(w.jsx)("button",{className:a,onClick:function(){return e()},children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAw0lEQVRYw+3WsQnCABCF4d8Uae2FDCCOIA5h4wwW7hBwCHEKC2eQjCAOINiKXQo9q+ChlvdU8N4A+SB5uTvIZDL/kA0DLWCcmdNTAoaxY6gFjJaaUgkYxp6xFjCurOgrAcM4MlUAa24OCSxv90iYcHBEWHkfAJQsaR0SUl4PAIxoHBFQ3mcAChZc4sr7CgBUbKPK+x4AmHGKKO+XAOkrEn9kaU3FP5p4VMiHnXxcf2ThSFemeOlLzxbx4SU/HTOZzO/nDvgk7Cl5QqbGAAAAAElFTkSuQmCC",alt:"Play",className:"w-4 h-4"})}),Object(w.jsx)("button",{className:a,onClick:function(){return n()},children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAMklEQVRYhe3VQQoAAARFQfe/NGdQFDXzt+otRQBcls0J7AWm7gQEBAQEfgfWH44AwAEFvp4+0NsXbXoAAAAASUVORK5CYII=",alt:"Stop",className:"w-4 h-4"})})]})}function Y(t){var e=t.handleChange;return Object(w.jsxs)("div",{className:"text-lg font-bold flex flex-start",children:["BPM:",Object(w.jsx)("input",{type:"number",className:"h-7 bottom-0 w-12 mx-2 focus:outline-none",min:1,max:300,defaultValue:100,onChange:function(t){return function(t){return e(t.target.value)}(t)}})]})}function K(t){var e=t.handleChange;return Object(w.jsxs)("div",{className:"text-lg font-bold flex flex-start",children:["Title:",Object(w.jsx)("input",{placeholder:"...",className:"h-7 bottom-0 w-40 mx-2 focus:outline-none",onChange:function(t){return function(t){return e(t.target.value)}(t)}})]})}var R=function(t){var e=t.notes,n=new U,r=Object(a.useState)(100),s=Object(u.a)(r,2),i=s[0],o=s[1],d=Object(a.useState)(""),f=Object(u.a)(d,2),h=f[0],b=f[1],p=function(){var t=Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.play(e,i,1);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.stop();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"relative w-full flex flex-row",children:[Object(w.jsx)(I,{handlePlay:function(){return p()},handleStop:function(){return A()}}),Object(w.jsx)(Y,{handleChange:function(t){return o(t)}}),Object(w.jsx)(K,{handleChange:function(t){return b(t)}})]}),Object(w.jsx)("div",{className:"relative w-full flex flex-row",children:Object(w.jsx)(F,{title:h,bpm:i,notes:e})})]})};n(123);var J=function(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],s=function(){var t=Object(l.a)(c.a.mark((function t(e){var n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.equations,a=n.map((function(t){return{mf:new x(t.str,t.start,t.end,t.step),startBeat:t.startBeat,duration:t.duration,whiteonly:t.whiteonly||"false"===t.whiteonly}})),s=a.flatMap((function(t){var e=t.mf,n=t.startBeat,a=t.duration,r=t.whiteonly;return e.notes(n,a,r)})),r(s);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"w-full min-h-screen",children:[Object(w.jsx)("div",{className:"w-full h-12 p-2 flex items-center shadow-md",children:Object(w.jsx)("div",{className:"text-medium font-bold",children:"Musical Math"})}),Object(w.jsxs)("div",{className:"w-full h-full flex flex-row",children:[Object(w.jsx)("div",{className:"w-1/3 border-r-2 p-2",children:Object(w.jsx)(N,{handleSubmit:function(t){return s(t)}})}),Object(w.jsx)("div",{className:"w-2/3 p-2",children:Object(w.jsx)(R,{notes:n})})]})]})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),s(t),i(t)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root")),T()},67:function(t,e,n){},78:function(t,e){}},[[124,1,2]]]);
//# sourceMappingURL=main.6545c16e.chunk.js.map