(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(7),s=n.n(o),a=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))}),i=(n(13),n(2)),h=n(3),l=n(5),u=n(4),b=n(0),d=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},j=function(e){var t=e.id,n=e.name,r=e.email;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"robo look",src:"https://robohash.org/".concat(t,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{children:r})]})]})},f=function(e){var t=e.robots;return Object(b.jsx)(b.Fragment,{children:t.map((function(e,n){return Object(b.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},g=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Oooopss. That's not good."}):this.props.children}}]),n}(r.Component),p=(n(15),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},console.log("1. constructor()"),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})})),console.log("2. componentDidMount()")}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield;console.log("3. render()");var r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(b.jsx)(g,{searchChange:this.onSearchChange}),Object(b.jsx)(d,{children:Object(b.jsx)(O,{children:Object(b.jsx)(f,{robots:r})})})]}):Object(b.jsx)("h1",{children:"Loadnig..."})}}]),n}(r.Component));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.1f2c7bb8.chunk.js.map