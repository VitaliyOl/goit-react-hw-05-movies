"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{9268:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(5861),i=n(9439),u=n(4687),a=n.n(u),c=n(2791),o=n(184),s=function(e){var t=e.onSubmit,n=(0,c.useState)(""),r=(0,i.Z)(n,2),u=r[0],a=r[1];return(0,o.jsx)("div",{children:(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==u.trim()?(t(u),a("")):alert("please write some thing")},children:[(0,o.jsx)("input",{type:"text",value:u,onChange:function(e){a(e.target.value.toLowerCase())}}),(0,o.jsx)("button",{type:"submit",children:"Search"})]})})},l=n(4569),f=n.n(l),h=n(1087),p=n(7689),d=function(){var e,t=(0,c.useState)([]),n=(0,i.Z)(t,2),u=n[0],l=n[1],d=(0,h.lr)(),m=(0,i.Z)(d,2),v=m[0],b=m[1],x=null!==(e=v.get("query"))&&void 0!==e?e:"",j=(0,p.TH)();(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().get("https://api.themoviedb.org/3/search/movie?api_key=4e109f7b4b6a0194008b1b4e8c435cc1&query=".concat(x));case 2:t=e.sent,n=t.data,l(n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}x&&function(){e.apply(this,arguments)}()}),[x]);return(0,o.jsxs)("div",{children:[(0,o.jsx)(s,{onSubmit:function(e){b(""!==e?{query:e}:{})}}),(0,o.jsx)("ul",{children:u.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(h.rU,{to:"".concat(e.id),state:{from:j},children:e.original_title})},e.id)}))})]})}}}]);
//# sourceMappingURL=268.0321a83e.chunk.js.map