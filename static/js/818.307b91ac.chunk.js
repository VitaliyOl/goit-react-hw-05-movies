"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[818],{6818:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r,i=n(5861),u=n(9439),a=n(4687),o=n.n(a),c=n(2791),s=n(184),l=function(t){var e=t.onSubmit,n=(0,c.useState)(""),r=(0,u.Z)(n,2),i=r[0],a=r[1];return(0,s.jsx)("div",{style:{marginBottom:"20px"},children:(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==i.trim()?(e(i),a("")):alert("please write some thing")},children:[(0,s.jsx)("input",{type:"text",value:i,onChange:function(t){a(t.target.value.toLowerCase())}}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})})},f=n(4569),p=n.n(f),h=n(1087),m=n(7689),d=n(168),x=n(7686).Z.li(r||(r=(0,d.Z)(["\n  margin-bottom: 10px;\n"]))),b=function(){var t,e=(0,c.useState)([]),n=(0,u.Z)(e,2),r=n[0],a=n[1],f=(0,h.lr)(),d=(0,u.Z)(f,2),b=d[0],v=d[1],g=null!==(t=b.get("query"))&&void 0!==t?t:"",j=(0,m.TH)();(0,c.useEffect)((function(){function t(){return(t=(0,i.Z)(o().mark((function t(){var e,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p().get("https://api.themoviedb.org/3/search/movie?api_key=4e109f7b4b6a0194008b1b4e8c435cc1&query=".concat(g));case 2:e=t.sent,n=e.data,a(n.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}g&&function(){t.apply(this,arguments)}()}),[g]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(l,{onSubmit:function(t){v(""!==t?{query:t}:{})}}),(0,s.jsx)("ul",{children:r.map((function(t){return(0,s.jsx)(x,{children:(0,s.jsx)(h.rU,{to:"".concat(t.id),state:{from:j},children:t.original_title})},t.id)}))})]})}}}]);
//# sourceMappingURL=818.307b91ac.chunk.js.map