!function e(n,t,r){function o(a,u){if(!t[a]){if(!n[a]){var f="function"==typeof require&&require;if(!u&&f)return f(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=t[a]={exports:{}};n[a][0].call(c.exports,function(e){var t=n[a][1][e];return o(t||e)},c,c.exports,e,n,t,r)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=function(){function e(){r(this,e),this.shortName="ui"}return o(e,[{key:"setDependents",value:function(e){for(var n=0;n<e.length;n++)this[e[n].shortName]=e[n]}}]),e}();t.default=i},{}],2:[function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=function(){function e(){r(this,e),this.shortName="model",this.loadData("./data/data.json")}return o(e,[{key:"setDependents",value:function(e){for(var n=0;n<e.length;n++)this[e[n].shortName]=e[n]}},{key:"loadData",value:function(e){console.log(e),$.ajax(e).done(function(e){console.log(e)}).fail(function(){console.log("error")}).always(function(){console.log("complete")}).always(function(){console.log("definately complete")})}}]),e}();t.default=i},{}],3:[function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=function(){function e(){r(this,e),this.shortName="view"}return o(e,[{key:"setDependents",value:function(e){for(var n=0;n<e.length;n++)this[e[n].shortName]=e[n]}}]),e}();t.default=i},{}],4:[function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=e("./MVC/Model"),a=r(i),u=e("./MVC/View"),f=r(u),l=e("./MVC/Controller"),c=r(l),s=function e(){o(this,e),this.m=new a.default,this.v=new f.default,this.c=new c.default;var n=[this.m,this.v,this.c];this.m.setDependents(n),this.v.setDependents(n),this.c.setDependents(n)};t.default=s,new s},{"./MVC/Controller":1,"./MVC/Model":2,"./MVC/View":3}]},{},[4]);
//# sourceMappingURL=app.js.map
