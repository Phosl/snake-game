(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/snake.a88ef9ab.svg"},26:function(e,t,a){e.exports=a(39)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),i=a.n(o),c=a(5),l=(a(31),a(10)),s=a(11),d=a(15),u=a(13),m=a(16),h=a(6),f=a(7),v=a(12),g=(a(32),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={tickTime:200,rows:25,cols:25,grid:[],food:{},snake:{head:{},tail:[]},currentDirection:"right",die:!1,score:0,scoreFactor:10},a.handleKeyPress=a.handleKeyPress.bind(Object(v.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getRandomGrid",value:function(){return{row:Math.floor(Math.random()*this.state.rows),col:Math.floor(Math.random()*this.state.cols)}}},{key:"getCenterOfGrid",value:function(){return{row:Math.floor((this.state.rows-1)/2),col:Math.floor((this.state.cols-1)/2)}}},{key:"resetGrid",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object.keys(e).length||(e=this.state);for(var a=[],n=e,r=n.rows,o=n.cols,i=n.food,c=n.snake,l=function(e){for(var t=function(t){var n=i.row===e&&i.col===t,r=c.head.row===e&&c.head.col===t,o=!1;c.tail.forEach(function(a){a.row===e&&a.col===t&&(o=!0)}),a.push({row:e,col:t,isFood:n,isHead:r,isTail:o})},n=0;n<o;n++)t(n)},s=0;s<r;s++)l(s);if(t)return a;this.setState({grid:a})}},{key:"gameTick",value:function(){var e=this;this.setState(function(t){var a=t.currentDirection,n=t.snake,r=t.food,o=n.tail,i=t.snake.head,c={row:i.row,col:i.col};switch(t.die&&clearInterval(window.fnInterval),o.unshift({row:c.row,col:c.col}),c.row===t.food.row&&c.col===t.food.col?r=e.getRandomGrid():o.pop(),a){case"left":c.col--;break;case"up":c.row--;break;case"down":c.row++;break;case"right":default:c.col++}var l=Object(f.a)({},t,{food:r,snake:{head:c,tail:o}}),s=!1;(l.snake.head.row<0||l.snake.head.row>=e.state.rows||l.snake.head.col<0||l.snake.head.col>=e.state.rows)&&(s=!0);var d=e.resetGrid(l,!0),u=l.snake.tail.length*l.scoreFactor;return Object(f.a)({},l,{die:s,grid:d,score:u})})}},{key:"handleKeyPress",value:function(e){var t=this.state.currentDirection;switch(e.keyCode){case 37:t="left";break;case 38:t="up";break;case 39:default:t="right";break;case 40:t="down"}var a=Object(f.a)({},this.state,{currentDirection:t}),n=this.resetGrid(a,!0);this.setState(function(e){return Object(f.a)({},a,{grid:n})})}},{key:"componentDidMount",value:function(){var e=this;document.body.addEventListener("keydown",this.handleKeyPress),this.setState(function(t){var a=Object(f.a)({},t,{food:e.getRandomGrid(),snake:{head:e.getCenterOfGrid(),tail:t.snake.tail}}),n=e.resetGrid(a,!0);return Object(f.a)({},a,{grid:n})}),this.resetGrid(),window.fnInterval=setInterval(function(){e.gameTick()},this.state.tickTime)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("keydown",this.handleKeyPress),clearInterval(window.fnInterval)}},{key:"render",value:function(){var e=this.state.grid.map(function(e){return r.a.createElement("div",{key:e.row.toString()+"-"+e.col.toString(),className:e.isHead?"gridItem is-head":e.isTail?"gridItem is-tail":e.isFood?"gridItem is-food":"gridItem"})});return this.state.die&&(e=r.a.createElement("div",{className:"grid-message"},r.a.createElement("h1",null,"Game Over"))),r.a.createElement("div",{className:"snake-container wrapper"},r.a.createElement("div",{className:"grid-header"},r.a.createElement("h1",null,"Your score: ",this.state.score)),r.a.createElement("div",{className:"grid"},e))}}]),t}(n.Component)),w=(a(33),a(14)),k=a.n(w),b=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h1",null,"Coming soon!"),r.a.createElement("img",{className:"snake-logo",src:k.a,alt:"Snake"}))},E=function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:g}),r.a.createElement(h.a,{component:b}))},p=(a(38),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navBar"},r.a.createElement("nav",{className:"wrapper"},r.a.createElement("div",{className:"logo"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{src:k.a,alt:"Snake"}))),r.a.createElement("input",{type:"checkbox",id:"menu-toggle"}),r.a.createElement("label",{htmlFor:"menu-toggle",className:"label-toggle"}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/leaderboard"},"Leaderboard")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/login"},"Login"))))),r.a.createElement(E,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.5f0943da.chunk.js.map