(this["webpackJsonpreact-movies"]=this["webpackJsonpreact-movies"]||[]).push([[0],{14:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),i=t(7),n=t.n(i),r=t(0),l=function(){return Object(r.jsx)("nav",{className:"teal lighten-1",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"#!",className:"brand-logo",children:"React movies"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"!#",children:"Repo"})})})]})})},j=function(){return Object(r.jsx)("footer",{className:"page-footer teal lighten-3",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})},o=t(2),d=t(3),h=t(5),p=t(4),b=t(8),v=function(e){var c=e.Title,t=e.Year,s=e.imdbID,a=e.Type,i=e.Poster;return Object(r.jsxs)("div",{id:s,className:"card movie",children:[Object(r.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===i?Object(r.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x440?text=".concat(c)}):Object(r.jsx)("img",{className:"activator",src:i})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:c}),Object(r.jsxs)("p",{children:[t," ",Object(r.jsx)("span",{className:"right",children:a})]})]})]})},m=function(e){var c=e.movies,t=void 0===c?[]:c;return Object(r.jsx)("div",{className:"movies",children:t.length?t.map((function(e){return Object(r.jsx)(v,Object(b.a)({},e),e.imdbID)})):Object(r.jsx)("h4",{children:"Nothing found"})})},O=function(){return Object(r.jsxs)("div",{className:"preloader-wrapper big active preloader",children:[Object(r.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]}),Object(r.jsxs)("div",{className:"spinner-layer spinner-red",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]}),Object(r.jsxs)("div",{className:"spinner-layer spinner-yellow",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]}),Object(r.jsxs)("div",{className:"spinner-layer spinner-green",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]})]})},x=function(e){Object(h.a)(t,e);var c=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=c.call.apply(c,[this].concat(a))).state={search:"",type:"all"},e.handleKey=function(c){"Enter"===c.key&&e.props.searchMovies(e.state.search,e.state.type)},e.handleFilter=function(c){e.setState((function(){return{type:c.target.dataset.type}}),(function(){e.props.searchMovies(e.state.search,e.state.type)}))},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("input",{className:"validate",placeholder:"Search",type:"search",value:this.state.search,onChange:function(c){return e.setState({search:c.target.value})},onKeyDown:this.handleKey}),Object(r.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.searchMovies(e.state.search,e.state.type)},children:"Search"}),Object(r.jsx)("form",{children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{"data-type":"all",className:"with-gap",name:"group3",type:"radio",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(r.jsx)("span",{children:"All"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{"data-type":"movie",className:"with-gap",name:"group3",type:"radio",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(r.jsx)("span",{children:"Movies only"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{"data-type":"series",className:"with-gap",name:"group3",type:"radio",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(r.jsx)("span",{children:"Series only"})]})]})})]})})}}]),t}(s.Component),u="6c733f72",g=function(e){Object(h.a)(t,e);var c=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=c.call.apply(c,[this].concat(a))).state={movies:[],loading:!0},e.searchMovies=function(c){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=".concat(u,"&s=").concat(c).concat("all"!==t?"&type=".concat(t):"")).then((function(e){return e.json()})).then((function(c){return e.setState({movies:c.Search,loading:!1})})).catch((function(c){console.log(c),e.setState({loading:!1})}))},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=".concat(u,"&s=matrix")).then((function(e){return e.json()})).then((function(c){return e.setState({movies:c.Search,loading:!1})})).catch((function(c){console.log(c),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,c=e.movies,t=e.loading;return Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(x,{searchMovies:this.searchMovies}),t?Object(r.jsx)(O,{}):Object(r.jsx)(m,{movies:c})]})}}]),t}(a.a.Component);var N=function(){return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(g,{}),Object(r.jsx)(j,{})]})};t(14);n.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0614c397.chunk.js.map