!function(e){function n(n){for(var r,l,u=n[0],i=n[1],c=n[2],f=0,p=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(n);p.length;)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},o={2:0},a=[];function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/static/";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var s=i;a.push([9,0]),t()}([,function(e,n,t){"use strict";t(2);var r=t(0),o=t.n(r);function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"render",value:function(e){var n=o()("<h1>"),t=o()("body");n.text('Webpack is awesome. This is "'+e+'"page'),t.append(n)}}])&&a(n.prototype,t),r&&a(n,r),e}();n.a=l},function(e,n,t){},,function(e,n,t){},,,,,function(e,n,t){"use strict";t.r(n);t(4);function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.buttonCssClass="hello-world-button"}var n,t,o;return n=e,(t=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello world",e.classList.add("hello-world-button");var n=document.querySelector("body");e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello world",e.classList.add("hello-world-text"),n.appendChild(e)},e.classList.add(this.buttonCssClass),n.appendChild(e)}}])&&r(n.prototype,t),o&&r(n,o),e}(),a=t(1);t(3);(new a.a).render("hello world"),(new o).render(),console.log("Production mode")}]);