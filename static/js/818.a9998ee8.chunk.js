"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[818],{6818:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r,i=n(5861),a=n(9439),u=n(4687),o=n.n(u),c=n(2791),s=n(184),l=function(t){var e=t.onSubmit,n=(0,c.useState)(""),r=(0,a.Z)(n,2),i=r[0],u=r[1];return(0,s.jsx)("div",{style:{marginBottom:"20px"},children:(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==i.trim()?(e(i),u("")):alert("please write some thing")},children:[(0,s.jsx)("input",{type:"text",value:i,onChange:function(t){u(t.target.value.toLowerCase())}}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})})},f=n(4569),h=n.n(f),p=n(1087),m=n(7689),d=n(168),v=n(7686).Z.li(r||(r=(0,d.Z)(["\n  margin-bottom: 10px;\n"]))),x=function(){var t,e=(0,c.useState)([]),n=(0,a.Z)(e,2),r=n[0],u=n[1],f=(0,p.lr)(),d=(0,a.Z)(f,2),x=d[0],b=d[1],g=null!==(t=x.get("query"))&&void 0!==t?t:"",j=(0,m.TH)();(0,c.useEffect)((function(){if(g)try{var t=function(){var t=(0,i.Z)(o().mark((function t(){var e,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h().get("https://api.themoviedb.org/3/search/movie?api_key=4e109f7b4b6a0194008b1b4e8c435cc1&query=".concat(g));case 2:e=t.sent,n=e.data,u(n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}catch(e){console.log(e)}}),[g]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(l,{onSubmit:function(t){b(""!==t?{query:t}:{})}}),(0,s.jsx)("ul",{children:r.map((function(t){return(0,s.jsx)(v,{children:(0,s.jsx)(p.rU,{to:"".concat(t.id),state:{from:j},children:t.original_title})},t.id)}))})]})}}}]);
//# sourceMappingURL=818.a9998ee8.chunk.js.map