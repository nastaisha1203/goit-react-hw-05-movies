"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{2541:function(t,e,n){n.r(e);var r=n(5861),a=n(9439),c=n(7757),u=n.n(c),i=n(6871),s=n(2791),o=n(7689),p=n(4390),f=n(184);e.default=function(){var t=(0,o.UO)().movieId,e=(0,s.useState)([]),n=(0,a.Z)(e,2),c=n[0],l=n[1],d=(0,s.useState)(!1),h=(0,a.Z)(d,2),v=h[0],m=h[1],g=(0,s.useState)(!1),x=(0,a.Z)(g,2),w=x[0],k=x[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),m(null),e.next=5,(0,p.d5)(t);case 5:n=e.sent,l(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),m(e.t0);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,f.jsxs)("div",{children:[w&&(0,f.jsx)(i.a,{}),v&&(0,f.jsx)("p",{children:"Something went wrong. Try again."}),(0,f.jsx)("ul",{children:c&&c.map((function(t){var e=t.id,n=t.name,r=t.profile_path,a=t.character;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:null===r?"https://via.placeholder.com/200x300":"https://image.tmdb.org/t/p/w500/".concat(r),alt:n,width:100}),(0,f.jsx)("p",{children:n}),(0,f.jsxs)("p",{children:["Character: ",a]})]},e)}))})]})}},6871:function(t,e,n){n.d(e,{a:function(){return s}});var r,a=n(5243),c=n(168),u=n(6444).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),i=n(184),s=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.RL,{height:"80",width:"80",radius:"48",color:"brown",ariaLabel:"watch-loading",visible:!0})})}},4390:function(t,e,n){n.d(e,{Bt:function(){return l},Tg:function(){return s},Yi:function(){return o},d5:function(){return f},on:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),u=n(3263),i="8443d03a0ecd905c6120abf16379f6a7";u.Z.defaults.baseURL="https://api.themoviedb.org";var s=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,n=e.data,r=n.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,r=n.data,a=r.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,a=r.cast.map((function(t){return{id:t.id,name:t.name,profile_path:t.profile_path,character:t.character}})),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,a=r.results.map((function(t){return{id:t.id,content:t.content,author:t.author}})),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=541.22049c3e.chunk.js.map