(this.webpackJsonppart2d=this.webpackJsonppart2d||[]).push([[0],{18:function(t,e,n){t.exports=n(42)},42:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(16),c=n.n(o),i=(n(6),n(17)),u=n(3),l=function(t){var e=t.note,n=t.toggleImportanceOf,r=e.important?"make not important":"make important";return a.a.createElement("li",{class:"note"},e.content,a.a.createElement("button",{onClick:n},r))},m=function(t){var e=t.message;return null===e?null:a.a.createElement("div",{className:"error"},e)},f=function(){return a.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},a.a.createElement("br",null),a.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))},s=n(2),p=n.n(s),d="http://localhost:3001/notes",b=function(){return p.a.get(d).then((function(t){return t.data}))},O=function(t){return p.a.post(d,t).then((function(t){return t.data}))},h=function(t,e){return p.a.put("".concat(d,"/").concat(t),e).then((function(t){return t.data}))};n(39);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var E=function(t){var e=Object(r.useState)([]),n=Object(u.a)(e,2),o=n[0],c=n[1],s=Object(r.useState)(""),p=Object(u.a)(s,2),d=p[0],E=p[1],y=Object(r.useState)(!0),g=Object(u.a)(y,2),j=g[0],S=g[1],w=Object(r.useState)("some error happened..."),P=Object(u.a)(w,2),k=P[0],T=P[1];Object(r.useEffect)((function(){b().then((function(t){c(t)}))}),[]);var D=j?o:o.filter((function(t){return t.important})),C=function(t){"http://localhost:3001/notes/".concat(t);var e=o.find((function(e){return e.id===t})),n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{important:!e.important});h(t,n).then((function(e){c(o.map((function(n){return n.id!==t?n:e})))})).catch((function(n){T("Note '".concat(e.content,"' was alredy removed from the server")),setTimeout((function(){T(null)}),500),c(o.filter((function(e){return e.id!==t})))}))};return a.a.createElement("div",null,a.a.createElement("h1",null,"Notes"),a.a.createElement(m,{message:k}),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return S(!j)}},"show ",j?"important":"all")),a.a.createElement("ul",null,D.map((function(t){return a.a.createElement(l,{key:t.id,note:t,toggleImportanceOf:function(){return C(t.id)}})}))),a.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:d,date:(new Date).toISOString(),important:Math.random()>.5};O(e).then((function(t){c(o.concat(t)),E("")}))}},a.a.createElement("input",{value:d,onChange:function(t){E(t.target.value)}}),a.a.createElement("button",{type:"submit"},"save")),a.a.createElement(f,null))};c.a.render(a.a.createElement(E,{notes:[{id:1,content:"HTML is easy",date:"2019-05-30T17:30:31.098Z",important:!0},{id:2,content:"Browser can execute only Javascript",date:"2019-05-30T18:39:34.091Z",important:!1},{id:3,content:"GET and POST are the most important methods of HTTP protocol",date:"2019-05-30T19:20:14.298Z",important:!0}]}),document.getElementById("root"))},6:function(t,e,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.6540b471.chunk.js.map