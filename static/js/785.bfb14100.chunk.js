"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{6871:function(t,n,e){e.d(n,{a:function(){return o}});var r,a=e(5243),u=e(168),c=e(6444).ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),i=e(184),o=function(){return(0,i.jsx)(c,{children:(0,i.jsx)(a.RL,{height:"80",width:"80",radius:"48",color:"brown",ariaLabel:"watch-loading",visible:!0})})}},6785:function(t,n,e){e.r(n);var r=e(5861),a=e(9439),u=e(7757),c=e.n(u),i=e(6871),o=e(2791),s=e(7689),p=e(4390),f=e(184);n.default=function(){var t=(0,s.UO)().movieId,n=(0,o.useState)([]),e=(0,a.Z)(n,2),u=e[0],h=e[1],d=(0,o.useState)(!1),l=(0,a.Z)(d,2),v=l[0],m=l[1],g=(0,o.useState)(!1),x=(0,a.Z)(g,2),w=x[0],k=x[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,k(!0),m(null),n.next=5,(0,p.Bt)(t);case 5:e=n.sent,h(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),m(n.t0);case 12:return n.prev=12,k(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,f.jsxs)("div",{children:[w&&(0,f.jsx)(i.a,{}),v&&(0,f.jsx)("p",{children:"Something went wrong. Try again."}),(0,f.jsx)("ul",{children:0===u.length?(0,f.jsx)("p",{children:"We don't have any reviews for this movie"}):u.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",e]}),(0,f.jsx)("p",{children:r})]},n)}))})]})}},4390:function(t,n,e){e.d(n,{Bt:function(){return h},Tg:function(){return o},Yi:function(){return s},d5:function(){return f},on:function(){return p}});var r=e(5861),a=e(7757),u=e.n(a),c=e(3263),i="8443d03a0ecd905c6120abf16379f6a7";c.Z.defaults.baseURL="https://api.themoviedb.org";var o=function(){var t=(0,r.Z)(u().mark((function t(){var n,e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/3/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,e=n.data,r=e.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,r=e.data,a=r.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,a=r.cast.map((function(t){return{id:t.id,name:t.name,profile_path:t.profile_path,character:t.character}})),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,r=e.data,a=r.results.map((function(t){return{id:t.id,content:t.content,author:t.author}})),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=785.bfb14100.chunk.js.map