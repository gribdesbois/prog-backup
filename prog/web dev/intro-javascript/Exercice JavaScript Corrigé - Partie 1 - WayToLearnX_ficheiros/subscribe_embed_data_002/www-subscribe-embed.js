(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.i=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function pa(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype}
function qa(){this.C=!1;this.j=null;this.l=void 0;this.i=1;this.F=this.B=0;this.A=null}
function ra(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
qa.prototype.D=function(a){this.l=a};
function sa(a,b){a.A={Na:b,Pb:!0};a.i=a.B||a.F}
qa.prototype["return"]=function(a){this.A={"return":a};this.i=this.F};
function ta(a,b,c){a.i=c;return{value:b}}
function ua(a){a.B=0;var b=a.A.Na;a.A=null;return b}
function va(a){this.i=new qa;this.j=a}
function wa(a,b){ra(a.i);var c=a.i.j;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i["return"]);
a.i["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.i.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.C=!1,e;var f=e.value}catch(g){return a.i.j=null,sa(a.i,g),ya(a)}a.i.j=null;d.call(a.i,f);return ya(a)}
function ya(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.C=!1,{value:b.value,done:!1}}catch(c){a.i.l=void 0,sa(a.i,c)}a.i.C=!1;if(a.i.A){b=a.i.A;a.i.A=null;if(b.Pb)throw b.Na;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){ra(a.i);a.i.j?b=xa(a,a.i.j.next,b,a.i.D):(a.i.D(b),b=ya(a));return b};
this["throw"]=function(b){ra(a.i);a.i.j?b=xa(a,a.i.j["throw"],b,a.i.D):(sa(a.i,b),b=ya(a));return b};
this["return"]=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Aa(a,b){var c=new za(new va(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
function Ca(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ca(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Da});
t("Promise",function(a){function b(g){this.J=0;this.T=void 0;this.i=[];this.B=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.B()})}this.i.push(g)};
var e=da.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.B=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.A(l)}}}this.i=null};
c.prototype.A=function(g){this.l(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ja),reject:g(this.l)}};
b.prototype.ja=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.xa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.O(g):this.A(g)}};
b.prototype.O=function(g){var h=void 0;try{h=g.then}catch(k){this.l(k);return}"function"==typeof h?this.ya(h,g):this.A(g)};
b.prototype.l=function(g){this.C(2,g)};
b.prototype.A=function(g){this.C(1,g)};
b.prototype.C=function(g,h){if(0!=this.J)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.J);this.J=g;this.T=h;2===this.J&&this.ka();this.D()};
b.prototype.ka=function(){var g=this;e(function(){if(g.F()){var h=da.console;"undefined"!==typeof h&&h.error(g.T)}},1)};
b.prototype.F=function(){if(this.B)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.T;return k(g)};
b.prototype.D=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.j(this.i[g]);this.i=null}};
var f=new c;b.prototype.xa=function(g){var h=this.j();g.na(h.resolve,h.reject)};
b.prototype.ya=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(v){try{l(q(v))}catch(z){m(z)}}:r}
var l,m,p=new b(function(q,r){l=q;m=r});
this.na(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.na=function(g,h){function k(){switch(l.J){case 1:g(l.T);break;case 2:h(l.T);break;default:throw Error("Unexpected state: "+l.J);}}
var l=this;null==this.i?f.j(k):this.i.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).na(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(v){return function(z){q[v]=z;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).na(p(q.length-1),m),k=h.next();while(!k.done)})};
return b});
function Ea(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ea(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ea(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ea(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ca(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ca(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&Ca(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.i)};
b.prototype["delete"]=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.i)?delete k[g][this.i]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ea(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.j[l];if(m&&Ca(h.j,l))for(var p=0;p<m.length;p++){var q=m[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:p,L:q}}return{id:l,list:m,index:-1,L:void 0}}
function e(h){this.j={};this.i=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.j[l.id]=[]);l.L?l.L.value=k:(l.L={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.L),this.i.previous.next=l.L,this.i.previous=l.L,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.L&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.j[h.id],h.L.previous.next=h.L.next,h.L.next.previous=h.L.previous,h.L.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.j={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).L};
e.prototype.get=function(h){return(h=d(this,h).L)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push(b[d]);return c}});
t("Set",function(a){function b(c){this.i=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype["delete"]=function(c){c=this.i["delete"](c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var w=this||self;function x(a,b){for(var c=a.split("."),d=b||w,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Fa(){}
function Ga(a){a.Ba=void 0;a.G=function(){return a.Ba?a.Ba:a.Ba=new a}}
function Ha(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ia(a){var b=Ha(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ja(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ka(a){return Object.prototype.hasOwnProperty.call(a,La)&&a[La]||(a[La]=++Ma)}
var La="closure_uid_"+(1E9*Math.random()>>>0),Ma=0;function Na(a,b,c){return a.call.apply(a.bind,arguments)}
function Oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=Na:y=Oa;return y.apply(null,arguments)}
function Pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ra(){return Date.now()}
function A(a,b){var c=a.split("."),d=w;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function B(a,b){function c(){}
c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Fc=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Sa(a){return a}
function Ta(a){var b=null,c=w.trustedTypes;if(!c||!c.createPolicy)return b;try{b=c.createPolicy(a,{createHTML:Sa,createScript:Sa,createScriptURL:Sa})}catch(d){w.console&&w.console.error(d.message)}return b}
;function Ua(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ua);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
B(Ua,Error);Ua.prototype.name="CustomError";var Va;function Wa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.A=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function Xa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},ab=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},bb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
C(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},cb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function db(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function eb(a,b){return 0<=Ya(a,b)}
function fb(a,b){var c=Ya(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function gb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ia(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function jb(a,b,c,d){return Array.prototype.splice.apply(a,kb(arguments,1))}
function kb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function lb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192){var f=kb(d,e,e+8192);f=lb.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b}
;function mb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function nb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function rb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=rb(a[c]);return b}
var sb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<sb.length;f++)c=sb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ub;var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function wb(a,b){if(b)a=a.replace(xb,"&amp;").replace(yb,"&lt;").replace(zb,"&gt;").replace(Ab,"&quot;").replace(Bb,"&#39;").replace(Cb,"&#0;");else{if(!Db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(yb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(zb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ab,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Cb,"&#0;"))}return a}
var xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;
function Eb(a,b){for(var c=0,d=vb(String(a)).split("."),e=vb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=Fb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||Fb(0==h[2].length,0==k[2].length)||Fb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function Fb(a,b){return a<b?-1:a>b?1:0}
;function Gb(a,b){this.l=b===Hb?a:""}
Gb.prototype.ga=!0;Gb.prototype.ea=function(){return this.l.toString()};
Gb.prototype.j=!0;Gb.prototype.i=function(){return 1};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.l;Ha(a);return"type_error:SafeUrl"}
var Jb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Kb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Lb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Hb={},Mb=new Gb("about:invalid#zClosurez",Hb);var Nb;a:{var Ob=w.navigator;if(Ob){var Pb=Ob.userAgent;if(Pb){Nb=Pb;break a}}Nb=""}function E(a){return-1!=Nb.indexOf(a)}
;function Qb(){return E("Firefox")||E("FxiOS")}
function Rb(){return E("Safari")&&!(Sb()||E("Coast")||E("Opera")||E("Edge")||E("Edg/")||E("OPR")||Qb()||E("Silk")||E("Android"))}
function Sb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")}
function Tb(){return E("Android")&&!(Sb()||Qb()||E("Opera")||E("Silk"))}
;function Ub(a,b,c){this.l=c===Vb?a:"";this.A=b}
Ub.prototype.j=!0;Ub.prototype.i=function(){return this.A};
Ub.prototype.ga=!0;Ub.prototype.ea=function(){return this.l.toString()};
function Wb(a){if(a instanceof Ub&&a.constructor===Ub)return a.l;Ha(a);return"type_error:SafeHtml"}
var Vb={};function Xb(a,b){void 0===ub&&(ub=Ta("goog#html"));var c=(c=ub)?c.createHTML(a):a;return new Ub(c,b,Vb)}
var Yb=new Ub(w.trustedTypes&&w.trustedTypes.emptyHTML||"",0,Vb);var Zb=Xa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Wb(Yb);return!b.parentElement});
function $b(a,b){if(Zb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Wb(b)}
;function ac(a){return a=wb(a,void 0)}
function bc(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function cc(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;var dc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ec(a){return a?decodeURI(a):a}
function fc(a,b){return b.match(dc)[a]||null}
function gc(a){return ec(fc(3,a))}
function hc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function ic(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ic(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function jc(a,b){for(var c=[],d=b||0;d<a.length;d+=2)ic(a[d],a[d+1],c);return c.join("&")}
function kc(a){var b=[],c;for(c in a)ic(c,a[c],b);return b.join("&")}
function lc(a,b){var c=2==arguments.length?jc(arguments[1],0):jc(arguments,1);return hc(a,c)}
function mc(a,b){var c=kc(b);return hc(a,c)}
function nc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var oc=/#|$/,pc=/[?&]($|#)/;function qc(a){for(var b=a.search(oc),c=0,d,e=[];0<=(d=nc(a,c,"key",b));)e.push(a.substring(c,d)),c=Math.min(a.indexOf("&",d)+1||b,b);e.push(a.substr(c));return e.join("").replace(pc,"$1")}
;function rc(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function sc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
function tc(){return sc()||E("iPad")||E("iPod")}
;function uc(a){uc[" "](a);return a}
uc[" "]=Fa;function vc(a,b){try{return uc(a[b]),!0}catch(c){}return!1}
function wc(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)}
;var xc=E("Opera"),F=E("Trident")||E("MSIE"),yc=E("Edge"),zc=yc||F,Ac=E("Gecko")&&!(-1!=Nb.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),Bc=-1!=Nb.toLowerCase().indexOf("webkit")&&!E("Edge"),Cc=E("Macintosh"),Dc=E("Windows"),Ec=E("Android"),Fc=sc(),Gc=E("iPad"),Hc=E("iPod"),Ic=tc();function Jc(){var a=w.document;return a?a.documentMode:void 0}
var Kc;a:{var Lc="",Mc=function(){var a=Nb;if(Ac)return/rv:([^\);]+)(\)|;)/.exec(a);if(yc)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Bc)return/WebKit\/(\S+)/.exec(a);if(xc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Mc&&(Lc=Mc?Mc[1]:"");if(F){var Nc=Jc();if(null!=Nc&&Nc>parseFloat(Lc)){Kc=String(Nc);break a}}Kc=Lc}var Pc=Kc,Qc={};function Rc(a){return wc(Qc,a,function(){return 0<=Eb(Pc,a)})}
var Sc;if(w.document&&F){var Tc=Jc();Sc=Tc?Tc:parseInt(Pc,10)||void 0}else Sc=void 0;var Uc=Sc;var Vc=Qb(),Wc=sc()||E("iPod"),Xc=E("iPad"),Yc=Tb(),Zc=Sb(),$c=Rb()&&!tc();var ad={},bd=null;var cd=window;function dd(a){var b=x("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||w.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ed(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,fd[c])c=fd[c];else{c=String(c);if(!fd[c]){var f=/function\s+([^\(]+)/m.exec(c);fd[c]=f?f[1]:"[Anonymous]"}c=fd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function ed(a,b){b||(b={});b[gd(a)]=!0;var c=a.stack||"",d=a.Gc;d&&!b[gd(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=ed(d,b));return c}
function gd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var fd={};function hd(a){this.i=a||{cookie:""}}
n=hd.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Rc;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Va}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.i.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Va:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.i.cookie};
n.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var id=new hd("undefined"==typeof document?null:document);var jd=!F||9<=Number(Uc),kd=!Ac&&!F||F&&9<=Number(Uc)||Ac&&Rc("1.9.1"),ld=F&&!Rc("9");function G(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=G.prototype;n.clone=function(){return new G(this.x,this.y)};
n.equals=function(a){return a instanceof G&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function md(a,b){return new G(a.x-b.x,a.y-b.y)}
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function nd(a,b){this.width=a;this.height=b}
n=nd.prototype;n.clone=function(){return new nd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function od(a){return a?new pd(qd(a)):Va||(Va=new pd)}
function H(a){return"string"===typeof a?document.getElementById(a):a}
function rd(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):sd(document,"*",a,b)}
function I(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):sd(c,"*",a,b)[0]||null}return c||null}
function sd(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&eb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function td(a,b){mb(b,function(c,d){c&&"object"==typeof c&&c.ga&&(c=c.ea());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:ud.hasOwnProperty(d)?a.setAttribute(ud[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var ud={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function vd(a){a=a.document;a=wd(a)?a.documentElement:a.body;return new nd(a.clientWidth,a.clientHeight)}
function xd(a){var b=yd(a);a=zd(a);return F&&Rc("10")&&a.pageYOffset!=b.scrollTop?new G(b.scrollLeft,b.scrollTop):new G(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function yd(a){return a.scrollingElement?a.scrollingElement:!Bc&&wd(a)?a.documentElement:a.body||a.documentElement}
function zd(a){return a.parentWindow||a.defaultView}
function Ad(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!jd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',ac(g.name),'"');if(g.type){f.push(' type="',ac(g.type),'"');var h={};tb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Bd(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):td(f,g));2<d.length&&Cd(e,f,d);return f}
function Cd(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ia(f)||Ja(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ja(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}C(g?hb(f):f,d)}}}
function Bd(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function wd(a){return"CSS1Compat"==a.compatMode}
function Dd(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Ed(a){return kd&&void 0!=a.children?a.children:Za(a.childNodes,function(b){return 1==b.nodeType})}
function Fd(a){return Ja(a)&&1==a.nodeType}
function Gd(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function qd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Hd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);c=qd(a);a.appendChild(c.createTextNode(String(b)))}}
function Id(a,b){var c=[];return Jd(a,b,c,!0)?c[0]:void 0}
function Jd(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Jd(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Kd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Ld={IMG:" ",BR:"\n"};function Md(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Nd(a)||Od(a)):Nd(a)&&Od(a))&&F){var c;"function"!==typeof a.getBoundingClientRect||F&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Nd(a){return F&&!Rc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Od(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function Pd(a){if(ld&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Qd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");ld||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Qd(a,b,c){if(!(a.nodeName in Kd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Ld)b.push(Ld[a.nodeName]);else for(a=a.firstChild;a;)Qd(a,b,c),a=a.nextSibling}
function Rd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Td(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&eb(f.className.split(/\s+/),c))},!0,d)}
function J(a,b){return Rd(a,null,b,void 0)}
function Td(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function pd(a){this.i=a||w.document||document}
pd.prototype.getElementsByTagName=function(a,b){return(b||this.i).getElementsByTagName(String(a))};
pd.prototype.createElement=function(a){return Bd(this.i,a)};
pd.prototype.appendChild=function(a,b){a.appendChild(b)};
pd.prototype.isElement=Fd;function Ud(a){var b=Vd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Wd(){var a=[];Ud(function(b){a.push(b)});
return a}
var Vd={oc:"allow-forms",pc:"allow-modals",qc:"allow-orientation-lock",sc:"allow-pointer-lock",tc:"allow-popups",uc:"allow-popups-to-escape-sandbox",wc:"allow-presentation",xc:"allow-same-origin",yc:"allow-scripts",zc:"allow-top-navigation",Ac:"allow-top-navigation-by-user-activation"},Xd=Xa(function(){return Wd()});
function Yd(){var a=Bd(document,"IFRAME"),b={};C(Xd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Zd(){this.l=this.l;this.B=this.B}
Zd.prototype.l=!1;Zd.prototype.sa=function(){return this.l};
Zd.prototype.dispose=function(){this.l||(this.l=!0,this.V())};
Zd.prototype.V=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function $d(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function ae(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
n=ae.prototype;n.getHeight=function(){return this.bottom-this.top};
n.clone=function(){return new ae(this.top,this.right,this.bottom,this.left)};
n.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
n.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
n.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function be(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
be.prototype.clone=function(){return new be(this.left,this.top,this.width,this.height)};
be.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
be.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
be.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var ce={};function de(a){if(a!==ce)throw Error("Bad secret");}
;function ee(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var fe;function ge(){}
function he(a,b){de(b);this.i=a}
pa(he,ge);he.prototype.toString=function(){return this.i.toString()};
var ie=null===(fe=ee())||void 0===fe?void 0:fe.emptyHTML;new he(null!==ie&&void 0!==ie?ie:"",ce);var je;function ke(){}
function le(a,b){de(b);this.i=a}
pa(le,ke);le.prototype.toString=function(){return this.i.toString()};
var me=null===(je=ee())||void 0===je?void 0:je.emptyScript;new le(null!==me&&void 0!==me?me:"",ce);function ne(){}
function oe(a,b){de(b);this.i=a}
pa(oe,ne);oe.prototype.toString=function(){return this.i};new oe("about:blank",ce);new oe("about:invalid#zTSz",ce);function pe(a,b,c){if("string"===typeof b)(b=qe(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=qe(c,d);f&&(c.style[f]=e)}}
var re={};function qe(a,b){var c=re[b];if(!c){var d=bc(b);c=d;void 0===a.style[d]&&(d=(Bc?"Webkit":Ac?"Moz":F?"ms":xc?"O":null)+cc(d),void 0!==a.style[d]&&(c=d));re[b]=c}return c}
function se(a,b){var c=qd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function te(a,b){return se(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function ue(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}}
function ve(a){if(F&&!(8<=Number(Uc)))return a.offsetParent;var b=qd(a),c=te(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=te(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function we(a){for(var b=new ae(0,Infinity,Infinity,0),c=od(a),d=c.i.body,e=c.i.documentElement,f=yd(c.i);a=ve(a);)if(!(F&&0==a.clientWidth||Bc&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=te(a,"overflow")){var g=xe(a),h=new G(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
vd(zd(c.i)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function xe(a){var b=qd(a),c=new G(0,0);var d=b?qd(b):document;d=!F||9<=Number(Uc)||wd(od(d).i)?d.documentElement:d.body;if(a==d)return c;a=ue(a);b=xd(od(b).i);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function ye(a){a=ue(a);return new G(a.left,a.top)}
function ze(a,b,c){if(b instanceof nd)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");a.style.width=Ae(b,!0);a.style.height=Ae(c,!0)}
function Ae(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Be(a){var b=Ce;if("none"!=te(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Ce(a){var b=a.offsetWidth,c=a.offsetHeight,d=Bc&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=ue(a),new nd(a.right-a.left,a.bottom-a.top)):new nd(b,c)}
function De(a){var b=xe(a);a=Be(a);return new be(b.x,b.y,a.width,a.height)}
function Ee(a){return"rtl"==te(a,"direction")}
function Fe(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Ge(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Fe(a,c):0}
var He={thin:2,medium:4,thick:6};function Ie(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in He?He[c]:Fe(a,c)}
;var Je=(new Date).getTime();function Ke(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Le=window,Me=document,Ne=Le.location;function Oe(){}
var Pe=/\[native code\]/;function K(a,b,c){return a[b]=a[b]||c}
function Qe(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Re(){var a;if((a=Object.create)&&Pe.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Se=K(Le,"gapi",{});var L;L=K(Le,"___jsl",Re());K(L,"I",0);K(L,"hel",10);function Te(){var a=Ne.href;if(L.dpo)var b=L.h;else{b=L.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ue(a){var b=K(L,"PQ",[]);L.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Ve(a){return K(K(L,"H",Re()),a,Re())}
;function We(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var q=g,r=0;64>r;r+=4)q[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(p<<1|p>>>31)&4294967295;p=e[0];var v=e[1],z=e[2],D=e[3],$a=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var fa=D^v&(z^D);var Qa=1518500249}else fa=v^z^D,Qa=1859775393;else 60>r?(fa=v&z|D&(v|z),Qa=2400959708):(fa=v^z^D,Qa=3395469782);fa=((p<<5|p>>>27)&4294967295)+fa+$a+Qa+q[r]&4294967295;$a=D;D=z;z=(v<<30|v>>>2)&4294967295;v=p;p=fa}e[0]=e[0]+p&4294967295;e[1]=e[1]+
v&4294967295;e[2]=e[2]+z&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+$a&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],v=0,z=p.length;v<z;++v)r.push(p.charCodeAt(v));p=r}q||(q=p.length);r=0;if(0==l)for(;r+64<q;)b(p.slice(r,r+64)),r+=64,m+=64;for(;r<q;)if(f[l++]=p[r++],m++,64==l)for(l=0,b(f);r+64<q;)b(p.slice(r,r+64)),r+=64,m+=64}
function d(){var p=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var v=24;0<=v;v-=8)p[q++]=e[r]>>v&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,xb:function(){for(var p=d(),q="",r=0;r<p.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return q}}}
;function Xe(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],C(d,function(h){e.push(h)}),Ye(e.join(" "));
var f=[],g=[];C(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(h){e.push(h)});
a=Ye(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ye(a){var b=We();b.update(a);return b.xb().toLowerCase()}
;function Ze(a){var b=Ke(String(w.location.href)),c;(c=w.__SAPISID||w.__APISID||w.__OVERRIDE_SID)?c=!0:(c=new hd(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?w.__SAPISID:w.__APISID,c||(c=new hd(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(w.location.href);return d&&c&&b?[b,Xe(Ke(d),
c,a||null)].join(" "):null}return null}
;var $e=K(L,"perf",Re());K($e,"g",Re());var af=K($e,"i",Re());K($e,"r",[]);Re();Re();function bf(a,b,c){b&&0<b.length&&(b=cf(b),c&&0<c.length&&(b+="___"+cf(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=K(af,"_p",Re()),K(b,c,Re())[a]=(new Date).getTime(),b=$e.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function cf(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var df=Re(),ef=[];function ff(a){throw Error("Bad hint"+(a?": "+a:""));}
ef.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?L[b]=K(L,b,[]).concat(c):K(L,b,c)}if(b=a.u)a=K(L,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var gf=/^(\/[a-zA-Z0-9_\-]+)+$/,hf=[/\/amp\//,/\/amp$/,/^\/amp$/],jf=/^[a-zA-Z0-9\-_\.,!]+$/,kf=/^gapi\.loaded_[0-9]+$/,lf=/^[a-zA-Z0-9,._-]+$/;function mf(a,b,c,d){var e=a.split(";"),f=e.shift(),g=df[f],h=null;g?h=g(e,b,c,d):ff("no hint processor for: "+f);h||ff("failed to generate load url");b=h;c=b.match(nf);(d=b.match(of))&&1===d.length&&pf.test(b)&&c&&1===c.length||ff("failed sanity: "+a);return h}
function qf(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=rf(a);kf.test(c)||ff("invalid_callback");b=sf(b);d=d&&d.length?sf(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Ga?"/am="+e(a.Ga):"",a.jb?"/rs="+e(a.jb):"",a.sb?"/t="+e(a.sb):"","/cb=",e(c)].join("")}
function rf(a){"/"!==a.charAt(0)&&ff("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))ff("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");gf.test(b)||ff("invalid_prefix");c=0;for(d=hf.length;c<d;++c)hf[c].test(b)&&ff("invalid_prefix");c=tf(a,
"k",!0);d=tf(a,"am");e=tf(a,"rs");a=tf(a,"t");return{pathPrefix:b,version:c,Ga:d,jb:e,sb:a}}
function sf(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");lf.test(e)&&b.push(e)}return b.join(",")}
function tf(a,b,c){a=a[b];!a&&c&&ff("missing: "+b);if(a){if(jf.test(a))return a;ff("invalid: "+b)}return null}
var pf=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,of=/\/cb=/g,nf=/\/\//g;function uf(){var a=Te();if(!a)throw Error("Bad hint");return a}
df.m=function(a,b,c,d){(a=a[0])||ff("missing_hint");return"https://apis.google.com"+qf(a,b,c,d)};
var vf=decodeURI("%73cript"),wf=/^[-+_0-9\/A-Za-z]+={0,2}$/;function xf(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function yf(){var a=L.nonce;return void 0!==a?a&&a===String(a)&&a.match(wf)?a:L.nonce=null:Me.querySelector?(a=Me.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(wf)?L.nonce=a:L.nonce=null):null:null}
function zf(a){if("loading"!=Me.readyState)Af(a);else{var b=yf(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+vf+' src="'+encodeURI(a)+'"'+c+"></"+vf+">";Me.write(Bf?Bf.createHTML(a):a)}}
function Af(a){var b=Me.createElement(vf);b.setAttribute("src",Bf?Bf.createScriptURL(a):a);a=yf();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Me.getElementsByTagName(vf)[0])?a.parentNode.insertBefore(b,a):(Me.head||Me.body||Me.documentElement).appendChild(b)}
function Cf(a,b){var c=b&&b._c;if(c)for(var d=0;d<ef.length;d++){var e=ef[d][0],f=ef[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Df(a,b,c){Ef(function(){var d=b===Te()?K(Se,"_",Re()):Re();d=K(Ve(b),"_",d);a(d)},c)}
function Ff(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Cf(a,c);var d=a?a.split(":"):[],e=c.h||uf(),f=K(L,"ah",Re());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var l=g.length&&g[g.length-1]||null,m=l;l&&l.hint==k||(m={hint:k,features:[]},g.push(m));m.features.push(h)}var p=g.length;if(1<p){var q=c.callback;q&&(c.callback=function(){0==--p&&q()})}for(;d=g.shift();)Gf(d.features,c,d.hint)}else Gf(d||[],c,e)}
function Gf(a,b,c){function d(fa,Qa){if(p)return 0;Le.clearTimeout(m);q.push.apply(q,v);var Oc=((Se||{}).config||{}).update;Oc?Oc(f):f&&K(L,"cu",[]).push(f);if(Qa){bf("me0",fa,r);try{Df(Qa,c,l)}finally{bf("me1",fa,r)}}return 1}
a=Qe(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var m=null,p=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=K(Ve(c),"r",[]).sort();var q=K(Ve(c),"L",[]).sort(),r=[].concat(k);0<g&&(m=Le.setTimeout(function(){p=!0;h()},g));
var v=xf(a,q);if(v.length){v=xf(a,k);var z=K(L,"CP",[]),D=z.length;z[D]=function(fa){function Qa(){var Sd=z[D+1];Sd&&Sd()}
function Oc(Sd){z[D]=null;d(v,fa)&&Ue(function(){e&&e();Sd()})}
if(!fa)return 0;bf("ml1",v,r);0<D&&z[D-1]?z[D]=function(){Oc(Qa)}:Oc(Qa)};
if(v.length){var $a="loaded_"+L.I++;Se[$a]=function(fa){z[D](fa);Se[$a]=null};
a=mf(c,v,"gapi."+$a,k);k.push.apply(k,v);bf("ml0",v,r);b.sync||Le.___gapisync?zf(a):Af(a)}else z[D](Oe)}else d(v)&&e&&e()}
var Bf=Ta("goog#gapi");function Ef(a,b){if(L.hee&&0<L.hel)try{return a()}catch(c){b&&b(c),L.hel--,Ff("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Se.load=function(a,b){return Ef(function(){return Ff(a,b)})};function Hf(){this.j=[];this.i=-1}
Hf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.j[a]!=b&&(this.j[a]=b,this.i=-1)};
Hf.prototype.get=function(a){return!!this.j[a]};
function If(a){-1==a.i&&(a.i=bb(a.j,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Jf(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.i=!1}
Jf.prototype.stopPropagation=function(){this.i=!0};
Jf.prototype.preventDefault=function(){this.defaultPrevented=!0};var Kf=!F||9<=Number(Uc),Lf=F&&!Rc("9"),Mf=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{w.addEventListener("test",Fa,b),w.removeEventListener("test",Fa,b)}catch(c){}return a}();function Nf(a,b){Jf.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
B(Nf,Jf);var Of={2:"touch",3:"pen",4:"mouse"};
Nf.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?Ac&&(vc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Of[a.pointerType]||"";this.state=a.state;this.j=a;a.defaultPrevented&&this.preventDefault()};
Nf.prototype.stopPropagation=function(){Nf.H.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
Nf.prototype.preventDefault=function(){Nf.H.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Lf)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Pf="closure_listenable_"+(1E6*Math.random()|0),Qf=0;function Rf(a,b,c,d,e){this.listener=a;this.i=null;this.src=b;this.type=c;this.capture=!!d;this.ra=e;this.key=++Qf;this.ca=this.ma=!1}
function Sf(a){a.ca=!0;a.listener=null;a.i=null;a.src=null;a.ra=null}
;function Tf(a){this.src=a;this.listeners={};this.i=0}
Tf.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Uf(a,b,d,e);-1<g?(b=a[g],c||(b.ma=!1)):(b=new Rf(b,this.src,f,!!d,e),b.ma=c,a.push(b));return b};
Tf.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Uf(e,b,c,d);return-1<b?(Sf(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Vf(a,b){var c=b.type;c in a.listeners&&fb(a.listeners[c],b)&&(Sf(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Uf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ca&&f.listener==b&&f.capture==!!c&&f.ra==d)return e}return-1}
;var Wf="closure_lm_"+(1E6*Math.random()|0),Xf={},Yf=0;function Zf(a,b,c,d,e){if(d&&d.once)$f(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Zf(a,b[f],c,d,e);else c=ag(c),a&&a[Pf]?bg(a,b,c,Ja(d)?!!d.capture:!!d,e):cg(a,b,c,!1,d,e)}
function cg(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ja(e)?!!e.capture:!!e,h=dg(a);h||(a[Wf]=h=new Tf(a));c=h.add(b,c,d,g,f);if(!c.i){d=eg();c.i=d;d.src=a;d.listener=c;if(a.addEventListener)Mf||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(fg(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Yf++}}
function eg(){var a=gg,b=Kf?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function $f(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)$f(a,b[f],c,d,e);else c=ag(c),a&&a[Pf]?a.i.add(String(b),c,!0,Ja(d)?!!d.capture:!!d,e):cg(a,b,c,!0,d,e)}
function hg(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)hg(a,b[f],c,d,e);else(d=Ja(d)?!!d.capture:!!d,c=ag(c),a&&a[Pf])?a.i.remove(String(b),c,d,e):a&&(a=dg(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Uf(b,c,d,e)),(c=-1<a?b[a]:null)&&ig(c))}
function ig(a){if("number"!==typeof a&&a&&!a.ca){var b=a.src;if(b&&b[Pf])Vf(b.i,a);else{var c=a.type,d=a.i;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(fg(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Yf--;(c=dg(b))?(Vf(c,a),0==c.i&&(c.src=null,b[Wf]=null)):Sf(a)}}}
function fg(a){return a in Xf?Xf[a]:Xf[a]="on"+a}
function jg(a,b,c,d){var e=!0;if(a=dg(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.ca&&(f=kg(f,d),e=e&&!1!==f)}return e}
function kg(a,b){var c=a.listener,d=a.ra||a.src;a.ma&&ig(a);return c.call(d,b)}
function gg(a,b){if(a.ca)return!0;if(!Kf){var c=b||x("window.event"),d=new Nf(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.currentTarget=c[g];var h=jg(c[g],f,!0,d);e=e&&h}for(g=0;!d.i&&g<c.length;g++)d.currentTarget=c[g],h=jg(c[g],f,!1,d),e=e&&h}return e}return kg(a,new Nf(b,this))}
function dg(a){a=a[Wf];return a instanceof Tf?a:null}
var lg="__closure_events_fn_"+(1E9*Math.random()>>>0);function ag(a){if("function"===typeof a)return a;a[lg]||(a[lg]=function(b){return a.handleEvent(b)});
return a[lg]}
;function mg(){Zd.call(this);this.i=new Tf(this);this.O=this;this.C=null}
B(mg,Zd);mg.prototype[Pf]=!0;mg.prototype.addEventListener=function(a,b,c,d){Zf(this,a,b,c,d)};
mg.prototype.removeEventListener=function(a,b,c,d){hg(this,a,b,c,d)};
mg.prototype.dispatchEvent=function(a){var b=this.C;if(b){var c=[];for(var d=1;b;b=b.C)c.push(b),++d}b=this.O;d=a.type||a;if("string"===typeof a)a=new Jf(a,b);else if(a instanceof Jf)a.target=a.target||b;else{var e=a;a=new Jf(d,b);tb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.i&&0<=f;f--){var g=a.currentTarget=c[f];e=ng(g,d,!0,a)&&e}a.i||(g=a.currentTarget=b,e=ng(g,d,!0,a)&&e,a.i||(e=ng(g,d,!1,a)&&e));if(c)for(f=0;!a.i&&f<c.length;f++)g=a.currentTarget=c[f],e=ng(g,d,!1,a)&&e;return e};
mg.prototype.V=function(){mg.H.V.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Sf(d[e]);delete a.listeners[c];a.i--}}this.C=null};
function bg(a,b,c,d,e){a.i.add(String(b),c,!1,d,e)}
function ng(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ca&&g.capture==c){var h=g.listener,k=g.ra||g.src;g.ma&&Vf(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function og(a,b){this.l=a;this.A=b;this.j=0;this.i=null}
og.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function pg(a,b){a.A(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;function qg(a){w.setTimeout(function(){throw a;},0)}
var rg;
function sg(){var a=w.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Bd(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=y(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ia;c.Ia=null;e()}};
return function(e){d.next={Ia:e};d=d.next;b.port2.postMessage(0)}}return function(e){w.setTimeout(e,0)}}
;function tg(){this.j=this.i=null}
tg.prototype.add=function(a,b){var c=ug.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
tg.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var ug=new og(function(){return new vg},function(a){return a.reset()});
function vg(){this.next=this.scope=this.i=null}
vg.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
vg.prototype.reset=function(){this.next=this.scope=this.i=null};function wg(a,b){xg||yg();zg||(xg(),zg=!0);Ag.add(a,b)}
var xg;function yg(){if(w.Promise&&w.Promise.resolve){var a=w.Promise.resolve(void 0);xg=function(){a.then(Bg)}}else xg=function(){var b=Bg;
"function"!==typeof w.setImmediate||w.Window&&w.Window.prototype&&!E("Edge")&&w.Window.prototype.setImmediate==w.setImmediate?(rg||(rg=sg()),rg(b)):w.setImmediate(b)}}
var zg=!1,Ag=new tg;function Bg(){for(var a;a=Ag.remove();){try{a.i.call(a.scope)}catch(b){qg(b)}pg(ug,a)}zg=!1}
;function Cg(a){this.J=0;this.T=void 0;this.ba=this.S=this.X=null;this.qa=this.Aa=!1;if(a!=Fa)try{var b=this;a.call(void 0,function(c){Dg(b,2,c)},function(c){Dg(b,3,c)})}catch(c){Dg(this,3,c)}}
function Eg(){this.next=this.context=this.onRejected=this.l=this.i=null;this.j=!1}
Eg.prototype.reset=function(){this.context=this.onRejected=this.l=this.i=null;this.j=!1};
var Fg=new og(function(){return new Eg},function(a){a.reset()});
function Gg(a,b,c){var d=Fg.get();d.l=a;d.onRejected=b;d.context=c;return d}
function Hg(a){if(a instanceof Cg)return a;var b=new Cg(Fa);Dg(b,2,a);return b}
Cg.prototype.then=function(a,b,c){return Ig(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Cg.prototype.$goog_Thenable=!0;function Jg(a,b){var c=Gg(b,b,void 0);c.j=!0;Kg(a,c)}
Cg.prototype.cancel=function(a){if(0==this.J){var b=new Lg(a);wg(function(){Mg(this,b)},this)}};
function Mg(a,b){if(0==a.J)if(a.X){var c=a.X;if(c.S){for(var d=0,e=null,f=null,g=c.S;g&&(g.j||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.J&&1==d?Mg(c,b):(f?(d=f,d.next==c.ba&&(c.ba=d),d.next=d.next.next):Ng(c),Og(c,e,3,b)))}a.X=null}else Dg(a,3,b)}
function Kg(a,b){a.S||2!=a.J&&3!=a.J||Pg(a);a.ba?a.ba.next=b:a.S=b;a.ba=b}
function Ig(a,b,c,d){var e=Gg(null,null,null);e.i=new Cg(function(f,g){e.l=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Lg?g(h):f(k)}catch(l){g(l)}}:g});
e.i.X=a;Kg(a,e);return e.i}
Cg.prototype.ic=function(a){this.J=0;Dg(this,2,a)};
Cg.prototype.jc=function(a){this.J=0;Dg(this,3,a)};
function Dg(a,b,c){if(0==a.J){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.J=1;a:{var d=c,e=a.ic,f=a.jc;if(d instanceof Cg){Kg(d,Gg(e||Fa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ja(d))try{var k=d.then;if("function"===typeof k){Qg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.T=c,a.J=b,a.X=null,Pg(a),3!=b||c instanceof Lg||Rg(a,c))}}
function Qg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Pg(a){a.Aa||(a.Aa=!0,wg(a.Bb,a))}
function Ng(a){var b=null;a.S&&(b=a.S,a.S=b.next,b.next=null);a.S||(a.ba=null);return b}
Cg.prototype.Bb=function(){for(var a;a=Ng(this);)Og(this,a,this.J,this.T);this.Aa=!1};
function Og(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.qa;a=a.X)a.qa=!1;if(b.i)b.i.X=null,Sg(b,c,d);else try{b.j?b.l.call(b.context):Sg(b,c,d)}catch(e){Tg.call(null,e)}pg(Fg,b)}
function Sg(a,b,c){2==b?a.l.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Rg(a,b){a.qa=!0;wg(function(){a.qa&&Tg.call(null,b)})}
var Tg=qg;function Lg(a){Ua.call(this,a)}
B(Lg,Ua);Lg.prototype.name="cancel";function Ug(a,b,c){Zd.call(this);this.i=a;this.C=b||0;this.j=c;this.A=y(this.zb,this)}
B(Ug,Zd);n=Ug.prototype;n.fa=0;n.V=function(){Ug.H.V.call(this);this.stop();delete this.i;delete this.j};
n.start=function(a){this.stop();var b=this.A;a=void 0!==a?a:this.C;if("function"!==typeof b)if(b&&"function"==typeof b.handleEvent)b=y(b.handleEvent,b);else throw Error("Invalid listener argument");this.fa=2147483647<Number(a)?-1:w.setTimeout(b,a||0)};
n.stop=function(){this.isActive()&&w.clearTimeout(this.fa);this.fa=0};
n.isActive=function(){return 0!=this.fa};
n.zb=function(){this.fa=0;this.i&&this.i.call(this.j)};function Vg(){this.j=-1}
;function Wg(){this.j=64;this.i=[];this.C=[];this.D=[];this.A=[];this.A[0]=128;for(var a=1;a<this.j;++a)this.A[a]=0;this.B=this.l=0;this.reset()}
B(Wg,Vg);Wg.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.B=this.l=0};
function Xg(a,b,c){c||(c=0);var d=a.D;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Wg.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.j,d=0,e=this.C,f=this.l;d<b;){if(0==f)for(;d<=c;)Xg(this,a,d),d+=this.j;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.j){Xg(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.j){Xg(this,e);f=0;break}}this.l=f;this.B+=b}};
Wg.prototype.digest=function(){var a=[],b=8*this.B;56>this.l?this.update(this.A,56-this.l):this.update(this.A,this.j-(this.l-56));for(var c=this.j-1;56<=c;c--)this.C[c]=b&255,b/=256;Xg(this,this.C);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};var Yg="StopIteration"in w?w.StopIteration:{message:"StopIteration",stack:""};function Zg(){}
Zg.prototype.next=function(){throw Yg;};
Zg.prototype.R=function(){return this};
function $g(a){if(a instanceof Zg)return a;if("function"==typeof a.R)return a.R(!1);if(Ia(a)){var b=0,c=new Zg;c.next=function(){for(;;){if(b>=a.length)throw Yg;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ah(a,b){if(Ia(a))try{C(a,b,void 0)}catch(c){if(c!==Yg)throw c;}else{a=$g(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Yg)throw c;}}}
function bh(a){if(Ia(a))return hb(a);a=$g(a);var b=[];ah(a,function(c){b.push(c)});
return b}
;function ch(a,b){this.l={};this.i=[];this.U=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ch)for(c=dh(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function dh(a){eh(a);return a.i.concat()}
n=ch.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;var c=b||fh;eh(this);for(var d,e=0;d=this.i[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function fh(a,b){return a===b}
n.isEmpty=function(){return 0==this.j};
n.clear=function(){this.l={};this.U=this.j=this.i.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.l,a)?(delete this.l[a],this.j--,this.U++,this.i.length>2*this.j&&eh(this),!0):!1};
function eh(a){if(a.j!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Object.prototype.hasOwnProperty.call(a.l,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.j!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Object.prototype.hasOwnProperty.call(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.l,a)?this.l[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.l,a)||(this.j++,this.i.push(a),this.U++);this.l[a]=b};
n.forEach=function(a,b){for(var c=dh(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new ch(this)};
n.R=function(a){eh(this);var b=0,c=this.U,d=this,e=new Zg;e.next=function(){if(c!=d.U)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)throw Yg;var f=d.i[b++];return a?f:d.l[f]};
return e};function gh(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function hh(a){return a.classList?a.classList:gh(a).match(/\S+/g)||[]}
function ih(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function M(a,b){return a.classList?a.classList.contains(b):eb(hh(a),b)}
function N(a,b){if(a.classList)a.classList.add(b);else if(!M(a,b)){var c=gh(a);ih(a,c+(0<c.length?" "+b:b))}}
function jh(a,b){if(a.classList)C(b,function(f){N(a,f)});
else{var c={};C(hh(a),function(f){c[f]=!0});
C(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;ih(a,d)}}
function kh(a,b){a.classList?a.classList.remove(b):M(a,b)&&ih(a,Za(hh(a),function(c){return c!=b}).join(" "))}
function lh(a,b){a.classList?C(b,function(c){kh(a,c)}):ih(a,Za(hh(a),function(c){return!eb(b,c)}).join(" "))}
function mh(a,b,c){c?N(a,b):kh(a,b)}
function nh(a,b,c){M(a,b)&&(kh(a,b),N(a,c))}
function oh(a,b){var c=!M(a,b);mh(a,b,c)}
;var ph=!F&&!Rb();function qh(a,b){if(/-[a-z]/.test(b))return null;if(ph&&a.dataset){if(Tb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function rh(a){var b=[];sh(new th,a,b);return b.join("")}
function th(){}
function sh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),sh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),uh(d,c),c.push(":"),sh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":uh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var vh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},wh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function uh(a,b){b.push('"',a.replace(wh,function(c){var d=vh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),vh[c]=d);return d}),'"')}
;var xh=new WeakMap;function yh(a,b){for(var c=[a],d=b.length-1;0<=d;--d)c.push(typeof b[d],b[d]);return c.join("\x0B")}
;var zh=function(){if(Dc){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Nb))?a[1]:"0"}return Cc?(a=/1[0|1][_.][0-9_.]+/,(a=a.exec(Nb))?a[0].replace(/_/g,"."):"10"):Ec?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Nb))?a[1]:""):Fc||Gc||Hc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Nb))?a[1].replace(/_/g,"."):""):""}();function Ah(a){return(a=a.exec(Nb))?a[1]:""}
var Bh=function(){if(Vc)return Ah(/Firefox\/([0-9.]+)/);if(F||yc||xc)return Pc;if(Zc)return tc()?Ah(/CriOS\/([0-9.]+)/):Ah(/Chrome\/([0-9.]+)/);if($c&&!tc())return Ah(/Version\/([0-9.]+)/);if(Wc||Xc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Nb);if(a)return a[1]+"."+a[2]}else if(Yc)return(a=Ah(/Android\s+([0-9.]+)/))?a:Ah(/Version\/([0-9.]+)/);return""}();function Ch(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var k="HTML"==h.tagName||"BODY"==h.tagName;if(!k||"static"!=te(h,"position")){var l=xe(h);if(!k){k=Ee(h);var m;if(m=k){m=$c&&0<=Eb(Bh,10);var p;if(p=Ic)p=0<=Eb(zh,10);var q=Zc&&0<=Eb(Bh,85);m=Ac||m||p||q}k=m?-h.scrollLeft:!k||zc&&Rc("8")||"visible"==te(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;l=md(l,new G(k,h.scrollTop))}}}h=l||new G;l=De(a);if(k=we(a))q=new be(k.left,k.top,k.right-k.left,k.bottom-k.top),k=Math.max(l.left,
q.left),m=Math.min(l.left+l.width,q.left+q.width),k<=m&&(p=Math.max(l.top,q.top),q=Math.min(l.top+l.height,q.top+q.height),p<=q&&(l.left=k,l.top=p,l.width=m-k,l.height=q-p));k=od(a);p=od(c);if(k.i!=p.i){m=k.i.body;p=zd(p.i);q=new G(0,0);var r=(r=qd(m))?zd(r):window;if(vc(r,"parent")){var v=m;do{var z=r==p?xe(v):ye(v);q.x+=z.x;q.y+=z.y}while(r&&r!=p&&r!=r.parent&&(v=r.frameElement)&&(r=r.parent))}m=md(q,xe(m));!F||9<=Number(Uc)||wd(k.i)||(m=md(m,xd(k.i)));l.left+=m.x;l.top+=m.y}a=Dh(a,b);b=l.left;
a&4?b+=l.width:a&2&&(b+=l.width/2);b=new G(b,l.top+(a&1?l.height:0));b=md(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var D;g&&(D=we(c))&&(D.top-=h.y,D.right-=h.x,D.bottom-=h.y,D.left-=h.x);return Eh(b,c,d,f,D,g,void 0)}
function Eh(a,b,c,d,e,f,g){a=a.clone();var h=Dh(b,c);c=Be(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var k=0;if(d||0!=h)h&4?a.x-=g.width+(d?d.right:0):h&2?a.x-=g.width/2:d&&(a.x+=d.left),h&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;h=g;k=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,k|=1);if(f&16){var l=d.x;d.x<e.left&&(d.x=e.left,k|=4);d.x+h.width>e.right&&(h.width=Math.min(e.right-d.x,
l+h.width-e.left),h.width=Math.max(h.width,0),k|=4)}d.x+h.width>e.right&&f&1&&(d.x=Math.max(e.right-h.width,e.left),k|=1);f&2&&(k|=(d.x<e.left?16:0)|(d.x+h.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,k|=2);f&32&&(l=d.y,d.y<e.top&&(d.y=e.top,k|=8),d.y+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.y,l+h.height-e.top),h.height=Math.max(h.height,0),k|=8));d.y+h.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-h.height,e.top),k|=2);f&8&&(k|=(d.y<e.top?64:0)|(d.y+h.height>e.bottom?128:0));e=k}else e=
256;k=e}f=new be(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=k;if(e&496)return e;a=new G(f.left,f.top);a instanceof G?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=Ae(g,!1);b.style.top=Ae(a,!1);g=new nd(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=qd(b),a=wd(od(g).i),!F||Rc("10")||a&&Rc("8")?(b=b.style,Ac?b.MozBoxSizing="border-box":Bc?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,
0)+"px"):(g=b.style,a?(F?(a=Ge(b,"paddingLeft"),f=Ge(b,"paddingRight"),d=Ge(b,"paddingTop"),h=Ge(b,"paddingBottom"),a=new ae(d,f,h,a)):(a=se(b,"paddingLeft"),f=se(b,"paddingRight"),d=se(b,"paddingTop"),h=se(b,"paddingBottom"),a=new ae(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(a))),!F||9<=Number(Uc)?(f=se(b,"borderLeftWidth"),d=se(b,"borderRightWidth"),h=se(b,"borderTopWidth"),b=se(b,"borderBottomWidth"),b=new ae(parseFloat(h),parseFloat(d),parseFloat(b),parseFloat(f))):(f=Ie(b,"borderLeft"),
d=Ie(b,"borderRight"),h=Ie(b,"borderTop"),b=Ie(b,"borderBottom"),b=new ae(h,d,b,f)),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function Dh(a,b){return(b&8&&Ee(a)?b^4:b)&-9}
;function O(a){Zd.call(this);this.D=1;this.A=[];this.C=0;this.i=[];this.j={};this.F=!!a}
B(O,Zd);n=O.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.D;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.D=e+3;d.push(e);return e};
function Fh(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.da(d),b.apply(void 0,arguments))},a)}
function Gh(a,b,c){if(b=a.j[b]){var d=a.i;(b=db(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.da(b)}}
n.da=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.C?(this.A.push(a),this.i[a+1]=Fa):(c&&fb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
n.N=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];Hh(this.i[g+1],this.i[g+2],d)}else{this.C++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.C--,0<this.A.length&&0==this.C)for(;c=this.A.pop();)this.da(c)}}return 0!=e}return!1};
function Hh(a,b,c){wg(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(C(b,this.da,this),delete this.j[a])}else this.i.length=0,this.j={}};
function Ih(a,b){if(b){var c=a.j[b];return c?c.length:0}c=0;for(var d in a.j)c+=Ih(a,d);return c}
n.V=function(){O.H.V.call(this);this.clear();this.A.length=0};function Jh(a){this.i=a}
Jh.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,rh(b))};
Jh.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Jh.prototype.remove=function(a){this.i.remove(a)};function Kh(a){this.i=a}
B(Kh,Jh);function Lh(a){this.data=a}
function Mh(a){return void 0===a||a instanceof Lh?a:new Lh(a)}
Kh.prototype.set=function(a,b){Kh.H.set.call(this,a,Mh(b))};
Kh.prototype.j=function(a){a=Kh.H.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Kh.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Nh(a){this.i=a}
B(Nh,Kh);Nh.prototype.set=function(a,b,c){if(b=Mh(b)){if(c){if(c<Ra()){Nh.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ra()}Nh.H.set.call(this,a,b)};
Nh.prototype.j=function(a){var b=Nh.H.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ra()||c&&c>Ra())Nh.prototype.remove.call(this,a);else return b}};function Oh(){}
;function Ph(){}
B(Ph,Oh);Ph.prototype.clear=function(){var a=bh(this.R(!0)),b=this;C(a,function(c){b.remove(c)})};function Qh(a){this.i=a}
B(Qh,Ph);n=Qh.prototype;n.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeItem(a)};
n.R=function(a){var b=0,c=this.i,d=new Zg;d.next=function(){if(b>=c.length)throw Yg;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.i.clear()};
n.key=function(a){return this.i.key(a)};function Rh(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
B(Rh,Qh);function Sh(a,b){this.j=a;this.i=null;if(F&&!(9<=Number(Uc))){Th||(Th=new ch);this.i=Th.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Th.set(a,this.i));try{this.i.load(this.j)}catch(c){this.i=null}}}
B(Sh,Ph);var Uh={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Th=null;function Vh(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Uh[b]})}
n=Sh.prototype;n.isAvailable=function(){return!!this.i};
n.set=function(a,b){this.i.setAttribute(Vh(a),b);Wh(this)};
n.get=function(a){a=this.i.getAttribute(Vh(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeAttribute(Vh(a));Wh(this)};
n.R=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Zg;d.next=function(){if(b>=c.length)throw Yg;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Wh(this)};
function Wh(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Xh(a,b){this.j=a;this.i=b+"::"}
B(Xh,Ph);Xh.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Xh.prototype.get=function(a){return this.j.get(this.i+a)};
Xh.prototype.remove=function(a){this.j.remove(this.i+a)};
Xh.prototype.R=function(a){var b=this.j.R(!0),c=this,d=new Zg;d.next=function(){for(var e=b.next();e.substr(0,c.i.length)!=c.i;)e=b.next();return a?e.substr(c.i.length):c.j.get(e)};
return d};var Yh=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",Yh);function Zh(a){var b=arguments;1<b.length?Yh[b[0]]=b[1]:1===b.length&&Object.assign(Yh,b[0])}
function P(a,b){return a in Yh?Yh[a]:b}
;var $h=[];function ai(a){$h.forEach(function(b){return b(a)})}
function bi(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ci(b),ai(b)}}:a}
function ci(a){var b=x("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Zh("ERRORS",b))}
function di(a){var b=x("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Zh("ERRORS",b))}
;function ei(a,b){"function"===typeof a&&(a=bi(a));return window.setTimeout(a,b)}
function fi(a){window.clearTimeout(a)}
;var gi=w.ytPubsubPubsubInstance||new O,hi=w.ytPubsubPubsubSubscribedKeys||{},ii=w.ytPubsubPubsubTopicToKeys||{},ji=w.ytPubsubPubsubIsSynchronous||{};function ki(a,b,c){var d=li();if(d&&b){var e=d.subscribe(a,function(){var f=arguments;var g=function(){hi[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{ji[a]?g():ei(g,0)}catch(h){ci(h)}},c);
hi[e]=!0;ii[a]||(ii[a]=[]);ii[a].push(e);return e}return 0}
function mi(a){var b=li();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),C(a,function(c){b.unsubscribeByKey(c);delete hi[c]}))}
function ni(a,b){var c=li();return c?c.publish.apply(c,arguments):!1}
function oi(a,b){ji[a]=!0;var c=li();c&&c.publish.apply(c,arguments);ji[a]=!1}
function li(){return w.ytPubsubPubsubInstance}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.da;O.prototype.publish=O.prototype.N;O.prototype.clear=O.prototype.clear;A("ytPubsubPubsubInstance",gi);A("ytPubsubPubsubTopicToKeys",ii);A("ytPubsubPubsubIsSynchronous",ji);A("ytPubsubPubsubSubscribedKeys",hi);function pi(a,b,c){a&&(a.dataset?a.dataset[qi(b)]=String(c):a.setAttribute("data-"+b,c))}
function ri(a,b){return a?a.dataset?a.dataset[qi(b)]:a.getAttribute("data-"+b):null}
function si(a,b){a&&(a.dataset?delete a.dataset[qi(b)]:a.removeAttribute("data-"+b))}
var ti={};function qi(a){return ti[a]||(ti[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function Q(a,b){this.version=a;this.args=b}
;function R(a,b){this.topic=a;this.i=b}
R.prototype.toString=function(){return this.topic};function ui(){}
function vi(a,b){return wi(a,1,b)}
;function xi(){ui.apply(this,arguments)}
pa(xi,ui);function wi(a,b,c){isNaN(c)&&(c=void 0);var d=x("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ei(a,c||0)}
function yi(a){if(!isNaN(a)){var b=x("yt.scheduler.instance.cancelJob");b?b(a):fi(a)}}
xi.prototype.start=function(){var a=x("yt.scheduler.instance.start");a&&a()};
Ga(xi);xi.G();var zi=x("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.da;O.prototype.publish=O.prototype.N;O.prototype.clear=O.prototype.clear;A("ytPubsub2Pubsub2Instance",zi);var Ai=x("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",Ai);var Bi=x("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",Bi);var Ci=x("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",Ci);
A("ytPubsub2Pubsub2SkipSubKey",null);function S(a,b){var c=Di();c&&c.publish.call(c,a.toString(),a,b)}
function Ei(a,b,c){var d=Di();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,g){var h=x("ytPubsub2Pubsub2SkipSubKey");h&&h==e||(h=function(){if(Ai[e])try{if(g&&a instanceof R&&a!=f)try{var k=a.i,l=g;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.U){var m=new k;k.U=m.version}var p=k.U}catch(q){}if(!p||l.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(k,hb(l.args))}catch(q){throw q.message=
"yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+q.message,q;}b.call(c||window,g)}catch(q){ci(q)}},Ci[a.toString()]?x("yt.scheduler.instance")?vi(h):ei(h,0):h())});
Ai[e]=!0;Bi[a.toString()]||(Bi[a.toString()]=[]);Bi[a.toString()].push(e);return e}
function Fi(a){var b=Di();b&&("number"===typeof a&&(a=[a]),C(a,function(c){b.unsubscribeByKey(c);delete Ai[c]}))}
function Di(){return x("ytPubsub2Pubsub2Instance")}
;var Gi=0;function Hi(a){var b=a.__yt_uid_key;b||(b=Ii(),a.__yt_uid_key=b);return b}
function Ji(a,b){a=H(a);b=H(b);return!!Td(a,function(c){return c===b},!0,void 0)}
function Ki(a,b){var c=sd(document,a,null,b);return c.length?c[0]:null}
function Li(){var a=document,b;cb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Mi(){mh(document.body,"hide-players",!1);var a=rd("preserve-players");C(a,function(b){kh(b,"preserve-players")})}
var Ii=x("ytDomDomGetNextId")||function(){return++Gi};
A("ytDomDomGetNextId",Ii);var Ni={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Oi(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ni||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Oi.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Oi.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Oi.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=w.ytEventsEventsListeners||{};A("ytEventsEventsListeners",pb);var Pi=w.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",Pi);
function Qi(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ja(e[4])&&Ja(d)&&qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function T(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Qi(a,b,c,d);if(e)return e;e=++Pi.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Oi(h);if(!Td(h.relatedTarget,function(k){return k==a},!0))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Oi(h);
h.currentTarget=a;return c.call(a,h)};
g=bi(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ri()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d];return e}
function Si(a,b,c){var d=a||document;return T(d,"click",function(e){var f=Td(e.target,function(g){return g===d||c(g)},!0);
f&&f!==d&&!f.disabled&&(e.currentTarget=f,b.call(f,e))})}
function Ti(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Ri=Xa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ui(a,b,c){return Si(a,b,function(d){return M(d,c)})}
function Vi(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function Wi(a){a&&("string"==typeof a&&(a=[a]),C(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Ri()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
;var Xi={},Yi="ontouchstart"in document;function Zi(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Td(c,function(e){return M(e,b)},!0,d)}
function $i(a){var b="mouseover"==a.type&&"mouseenter"in Xi||"mouseout"==a.type&&"mouseleave"in Xi,c=a.type in Xi||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Xi[b];for(var d in c.j){var e=Zi(b,d,a.target);e&&!Td(a.relatedTarget,function(f){return f==e},!0)&&c.N(d,e,b,a)}}if(b=Xi[a.type])for(d in b.j)(e=Zi(a.type,d,a.target))&&b.N(d,e,a.type,a)}}
T(document,"blur",$i,!0);T(document,"change",$i,!0);T(document,"click",$i);T(document,"focus",$i,!0);T(document,"mouseover",$i);T(document,"mouseout",$i);T(document,"mousedown",$i);T(document,"keydown",$i);T(document,"keyup",$i);T(document,"keypress",$i);T(document,"cut",$i);T(document,"paste",$i);Yi&&(T(document,"touchstart",$i),T(document,"touchend",$i),T(document,"touchcancel",$i));function aj(a){this.B=a;this.D={};this.O=[];this.F=[]}
n=aj.prototype;n.M=function(a){return J(a,U(this))};
function U(a,b){return"yt-uix"+(a.B?"-"+a.B:"")+(b?"-"+b:"")}
n.unregister=function(){mi(this.O);this.O.length=0;Fi(this.F);this.F.length=0};
n.init=Fa;n.dispose=Fa;function bj(a,b,c){a.O.push(ki(b,c,a))}
function cj(a,b,c){a.F.push(Ei(b,c,a))}
function V(a,b,c,d){d=U(a,d);var e=y(c,a);b in Xi||(Xi[b]=new O);Xi[b].subscribe(d,e);a.D[c]=e}
function W(a,b,c,d){if(b in Xi){var e=Xi[b];Gh(e,U(a,d),a.D[c]);0>=Ih(e)&&(e.dispose(),delete Xi[b])}delete a.D[c]}
n.aa=function(a,b,c){var d=this.o(a,b);if(d&&(d=x(d))){var e=kb(arguments,2);jb(e,0,0,a);d.apply(null,e)}};
n.o=function(a,b){return ri(a,b)};
function dj(a,b){pi(a,"tooltip-text",b)}
;var ej=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};A("yt.uix.widgets_",ej);var fj={q:!0,search_query:!0};function gj(a){var b=[];mb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];C(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function hj(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){k.args=[{key:f[0],value:f[1],query:a}],fj.hasOwnProperty(f[0])||("ReferenceError"===k.name?di(k):ci(k))}}return c}
function ij(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),hj(1<a.length?a[1]:a[0])):{}}
function jj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=hj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return mc(a,e)+d}
function kj(a){if(!b)var b=window.location.href;var c=fc(1,a),d=gc(a);c&&d?(a=a.match(dc),b=b.match(dc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?gc(b)==d&&(Number(fc(4,b))||null)==(Number(fc(4,a))||null):!0;return a}
;function lj(a){a=void 0===a?{}:a;"function"===typeof a&&(a={callback:a});if(a.gapiHintOverride||P("GAPI_HINT_OVERRIDE")){var b=ij(document.location.href).gapi_jsh;b&&tb(a,{_c:{jsl:{h:b}}})}Ff("gapi.iframes:gapi.iframes.style.common",a)}
;function mj(){return x("gapi.iframes.getContext")()}
;function nj(a){Q.call(this,1,arguments);this.i=a}
B(nj,Q);function oj(a){Q.call(this,1,arguments);this.i=a}
B(oj,Q);function pj(a,b,c){Q.call(this,3,arguments);this.l=a;this.j=b;this.i=null!=c?!!c:null}
B(pj,Q);function qj(a,b,c,d,e,f){Q.call(this,2,arguments);this.i=a;this.j=b;this.A=c||null;this.l=d||null;this.source=e||null;this.params=f||null}
B(qj,Q);function rj(a,b,c){Q.call(this,1,arguments);this.i=a;this.j=b}
B(rj,Q);function sj(a,b,c,d,e,f,g,h){Q.call(this,1,arguments);this.i=a;this.B=b;this.j=c;this.C=d||null;this.A=e||null;this.l=f||null;this.source=g||null;this.params=h||null}
B(sj,Q);
var tj=new R("subscription-batch-subscribe",nj),uj=new R("subscription-batch-unsubscribe",nj),vj=new R("subscription-subscribe",qj),wj=new R("subscription-subscribe-loading",oj),xj=new R("subscription-subscribe-loaded",oj),yj=new R("subscription-subscribe-success",rj),zj=new R("subscription-subscribe-external",qj),Aj=new R("subscription-unsubscribe",sj),Bj=new R("subscription-unsubscirbe-loading",oj),Cj=new R("subscription-unsubscribe-loaded",oj),Dj=new R("subscription-unsubscribe-success",oj),Ej=
new R("subscription-external-unsubscribe",sj),Fj=new R("subscription-enable-ypc",oj),Gj=new R("subscription-disable-ypc",oj),Hj=new R("subscription-prefs",pj),Ij=new R("subscription-prefs-success",pj),Jj=new R("subscription-prefs-failure",pj);function Kj(){var a=void 0===a?!1:a;var b=Li();if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;function Lj(a,b){(a=H(a))&&a.style&&(a.style.display=b?"":"none",mh(a,"hid",!b))}
function Mj(a){return(a=H(a))?"none"!=a.style.display&&!M(a,"hid"):!1}
function Nj(a){C(arguments,function(b){!Ia(b)||b instanceof Element?Lj(b,!0):C(b,function(c){Nj(c)})})}
function Oj(a){C(arguments,function(b){!Ia(b)||b instanceof Element?Lj(b,!1):C(b,function(c){Oj(c)})})}
(function(a,b){function c(f){var g=u(f);f=g.next().value;g=ha(g);return a.apply(f,g)}
function d(f){f=u(f);f.next();f=ha(f);return b(e,f)}
b=void 0===b?yh:b;var e=Ka(a);return function(f){for(var g=[],h=0;h<arguments.length;++h)g[h-0]=arguments[h];h=this||w;var k=xh.get(h);k||(k={},xh.set(h,k));return wc(k,[this].concat(g instanceof Array?g:ha(u(g))),c,d)}})(function(a){var b=Bd(document,"DIV");
a&&(b.className=a);b.style.cssText="overflow:auto;position:absolute;top:0;width:100px;height:100px";a=Bd(document,"DIV");ze(a,"200px","200px");b.appendChild(a);document.body.appendChild(b);a=b.offsetWidth-b.clientWidth;Dd(b);return a});function Pj(){aj.call(this,"tooltip");this.i=0;this.j={}}
B(Pj,aj);Ga(Pj);n=Pj.prototype;n.register=function(){V(this,"mouseover",this.ta);V(this,"mouseout",this.W);V(this,"focus",this.Oa);V(this,"blur",this.Ha);V(this,"click",this.W);V(this,"touchstart",this.nb);V(this,"touchend",this.wa);V(this,"touchcancel",this.wa)};
n.unregister=function(){W(this,"mouseover",this.ta);W(this,"mouseout",this.W);W(this,"focus",this.Oa);W(this,"blur",this.Ha);W(this,"click",this.W);W(this,"touchstart",this.nb);W(this,"touchend",this.wa);W(this,"touchcancel",this.wa);this.dispose();Pj.H.unregister.call(this)};
n.dispose=function(){for(var a in this.j)this.W(this.j[a]);this.j={}};
n.ta=function(a){if(!(this.i&&1E3>Ra()-this.i)){var b=parseInt(this.o(a,"tooltip-hide-timer"),10);b&&(si(a,"tooltip-hide-timer"),fi(b));b=y(function(){Qj(this,a);si(a,"tooltip-show-timer")},this);
var c=parseInt(this.o(a,"tooltip-show-delay"),10)||0;b=ei(b,c);pi(a,"tooltip-show-timer",b.toString());a.title&&(dj(a,Rj(this,a)),a.title="");b=Ka(a).toString();this.j[b]=a}};
n.W=function(a){var b=parseInt(this.o(a,"tooltip-show-timer"),10);b&&(fi(b),si(a,"tooltip-show-timer"));b=y(function(){if(a){var c=H(Sj(this,a));c&&(Tj(c),Dd(c),si(a,"content-id"));c=H(Sj(this,a,"arialabel"));Dd(c)}si(a,"tooltip-hide-timer")},this);
b=ei(b,50);pi(a,"tooltip-hide-timer",b.toString());if(b=this.o(a,"tooltip-text"))a.title=b;b=Ka(a).toString();delete this.j[b]};
n.Oa=function(a,b){this.i=0;this.ta(a,b)};
n.Ha=function(a){this.i=0;this.W(a)};
n.nb=function(a,b,c){c.changedTouches&&(this.i=0,(a=Zi(b,U(this),c.changedTouches[0].target))&&this.ta(a,b))};
n.wa=function(a,b,c){c.changedTouches&&(this.i=Ra(),(a=Zi(b,U(this),c.changedTouches[0].target))&&this.W(a))};
function Uj(a,b,c){dj(b,c);a=a.o(b,"content-id");(a=H(a))&&Hd(a,c)}
function Rj(a,b){return a.o(b,"tooltip-text")||b.title}
function Qj(a,b){if(b){var c=Rj(a,b);if(c){var d=H(Sj(a,b));if(!d){d=document.createElement("div");d.id=Sj(a,b);ih(d,U(a,"tip"));var e=document.createElement("div");ih(e,U(a,"tip-body"));var f=document.createElement("div");ih(f,U(a,"tip-arrow"));var g=document.createElement("div");g.setAttribute("aria-hidden","true");ih(g,U(a,"tip-content"));var h=Vj(a,b),k=Sj(a,b,"content");g.id=k;pi(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var l=Pd(b);k=Sj(a,b,"arialabel");
f=document.createElement("div");N(f,U(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;Hd(f,l);b.setAttribute("aria-labelledby",k);k=Kj()||document.body;k.appendChild(f);k.appendChild(d);Uj(a,b,c);(c=parseInt(a.o(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",N(g,U(a,"normal-wrap")));g=M(b,U(a,"reverse"));Wj(a,b,d,e,h,g)||Wj(a,b,d,e,h,!g);var m=U(a,"tip-visible");ei(function(){N(d,m)},0)}}}}
function Wj(a,b,c,d,e,f){mh(c,U(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=Be(b);f=new G((h.width-10)/2,f?h.height:0);var k=xe(b);Eh(new G(k.x+f.x,k.y+f.y),c,g);f=vd(window);if(1==c.nodeType)var l=ye(c);else c=c.changedTouches?c.changedTouches[0]:c,l=new G(c.clientX,c.clientY);c=Be(d);var m=Math.floor(c.width/2);g=!!(f.height<l.y+h.height);h=!!(l.y<h.height);k=!!(l.x<m);f=!!(f.width<l.x+m);l=(c.width+3)/-2- -5;a=a.o(b,"force-tooltip-direction");if("left"==a||k)l=-5;else if("right"==a||f)l=20-c.width-
3;a=Math.floor(l)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function Sj(a,b,c){a=U(a)+Hi(b);c&&(a+="-"+c);return a}
function Vj(a,b){var c=null;Dc&&M(b,U(a,"masked"))&&((c=H("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Nj(c)):(c=Bd(document,"IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",ih(c,U(a,"tip-mask"))));return c}
function Tj(a){var b=H("yt-uix-tooltip-shared-mask"),c=b&&Td(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Oj(b),document.body.appendChild(b))}
;function Xj(a){var b=Yj();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=ki("LOGGED_IN",function(d){mi(P("LOGGED_IN_PUBSUB_KEY",void 0));Zh("LOGGED_IN",!0);a(d)});
Zh("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function Yj(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=lc(a,"mode","subscribe");a=lc("/signin?context=popup","next",a);return a=lc(a,"feature","sub_button")}
A("yt.pubsub.publish",ni);function X(a){a=Zj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ak(a,b){var c=Zj(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Zj(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
function bk(){var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=P("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var ck=window,Y=ck.ytcsi&&ck.ytcsi.now?ck.ytcsi.now:ck.performance&&ck.performance.timing&&ck.performance.now&&ck.performance.timing.navigationStart?function(){return ck.performance.timing.navigationStart+ck.performance.now()}:function(){return(new Date).getTime()};var dk=ak("initial_gel_batch_timeout",1E3),ek=Math.pow(2,16)-1,fk=null,gk=0,hk=void 0,ik=0,jk=0,kk=0,lk=!0,mk=w.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",mk);var nk=w.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",nk);function ok(a){a=void 0===a?!1:a;return new Cg(function(b){fi(ik);fi(jk);jk=0;hk&&hk.isReady()?(pk(b,a),mk.clear()):(qk(),b())})}
function qk(){X("web_gel_timeout_cap")&&!jk&&(jk=ei(ok,6E4));fi(ik);var a=P("LOGGING_BATCH_TIMEOUT",ak("web_gel_debounce_ms",1E4));X("shorten_initial_gel_batch_timeout")&&lk&&(a=dk);ik=ei(ok,a)}
function pk(a,b){var c=hk;b=void 0===b?!1:b;for(var d=Math.round(Y()),e=mk.size,f=u(mk),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=rb({context:rk(c.i||sk())});h.events=k;(k=nk[g])&&tk(h,g,k);delete nk[g];uk(h,d);vk(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();gk=Math.round(Y()-d)},
onError:function(){e--;e||a()},
mc:b});lk=!1}}
function uk(a,b){a.requestTimeMs=String(b);X("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=P("EVENT_ID",void 0);if(c){var d=P("BATCH_CLIENT_COUNTER",void 0)||0;!d&&X("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*ek/2));d++;d>ek&&(d=1);Zh("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;fk&&gk&&X("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:fk,roundtripMs:String(gk)});fk=c;gk=0}}
function tk(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var wk=w.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",wk);
function xk(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||Y());e[a]=b;a=x("_lact",window);a=null==a?-1:Math.max(Ra()-a,0);e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};X("log_sequence_info_on_gel_web")&&d.kb&&(a=e.context,b=d.kb,wk[b]=b in wk?wk[b]+1:0,a.sequence={index:wk[b],groupKey:b},d.Jc&&delete wk[d.kb]);d=d.Ic;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),nk[d.token]=a,a=d.token);d=mk.get(a)||[];mk.set(a,
d);d.push(e);c&&(hk=new c);c=ak("web_logging_max_batch")||100;e=Y();d.length>=c?ok(!0):10<=e-kk&&(qk(),kk=e)}
;function yk(a){var b=zk;a=void 0===a?x("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Je;e.flash="0";a:{try{var f=b.i.top.location.href}catch(z){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?cd:g;try{var h=g.history.length}catch(z){h=0}e.u_his=h;e.u_java=!!cd.navigator&&"unknown"!==typeof cd.navigator.javaEnabled&&!!cd.navigator.javaEnabled&&cd.navigator.javaEnabled();cd.screen&&(e.u_h=cd.screen.height,e.u_w=cd.screen.width,
e.u_ah=cd.screen.availHeight,e.u_aw=cd.screen.availWidth,e.u_cd=cd.screen.colorDepth);cd.navigator&&cd.navigator.plugins&&(e.u_nplug=cd.navigator.plugins.length);cd.navigator&&cd.navigator.mimeTypes&&(e.u_nmime=cd.navigator.mimeTypes.length);h=b.i;try{var k=h.screenX;var l=h.screenY}catch(z){}try{var m=h.outerWidth;var p=h.outerHeight}catch(z){}try{var q=h.innerWidth;var r=h.innerHeight}catch(z){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,
m,p,q,r];try{var v=vd(b.i.top||window).round()}catch(z){v=new nd(-12245933,-12245933)}l=v;v={};m=new Hf;w.SVGElement&&w.document.createElementNS&&m.set(0);p=Yd();p["allow-top-navigation-by-user-activation"]&&m.set(1);p["allow-popups-to-escape-sandbox"]&&m.set(2);w.crypto&&w.crypto.subtle&&m.set(3);w.TextDecoder&&w.TextEncoder&&m.set(4);m=If(m);v.bc=m;v.bih=l.height;v.biw=l.width;v.brdim=k.join();b=b.j;b=(v.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||
b.mozVisibilityState||""]||0,v.wgl=!!cd.WebGLRenderingContext,v);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var zk=new function(){var a=window.document;this.i=window;this.j=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return gj(yk(a))});var Ak="XMLHttpRequest"in w?function(){return new XMLHttpRequest}:null;
function Bk(){if(!Ak)return null;var a=Ak();return"open"in a?a:null}
;var Ck={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Dk="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
Ek=!1;function Fk(a,b){b=void 0===b?{}:b;var c=kj(a),d=X("web_ajax_ignore_global_headers_if_set"),e;for(e in Ck){var f=P(Ck[e]);!f||!c&&gc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!gc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!gc(a))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||!gc(a))b["X-YouTube-Ad-Signals"]=gj(yk(void 0));return b}
function Gk(a){var b=window.location.search,c=gc(a),d=ec(fc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=hj(b),f={};C(Dk,function(g){e[g]&&(f[g]=e[g])});
return jj(a,f||{},!1)}
function Hk(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ik(a,b);var d=Jk(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&fi(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||w;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ha&&b.ha.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.fb&&0<b.timeout&&(f=ei(function(){e||(e=!0,fi(f),b.fb.call(b.context||w))},b.timeout))}else Kk(a,b)}
function Kk(a,b){var c=b.format||"JSON";a=Ik(a,b);var d=Jk(a,b),e=!1,f=Lk(a,function(k){if(!e){e=!0;h&&fi(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)m=Mk(a,c,k,b.Hc);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||w;
l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.ha&&b.ha.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.ua&&0<b.timeout){var g=b.ua;var h=ei(function(){e||(e=!0,f.abort(),fi(h),g.call(b.context||w,f))},b.timeout)}}
function Ik(a,b){b.Mc&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.Fa;d&&(d[c]&&delete d[c],a=jj(a,d||{},!0));return a}
function Jk(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.K,g=P("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Kc||gc(a)&&!b.withCredentials&&gc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.K&&b.K[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=hj(e),tb(e,f),e=b.ib&&"JSON"==b.ib?JSON.stringify(e):kc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!Ek&&c&&"POST"!=b.method&&
(Ek=!0,ci(Error("AJAX request with postData should use POST")));return e}
function Mk(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,di(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Nk(a):null)e={},C(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ok(g)})}d&&Pk(e);
return e}
function Pk(a){if(Ja(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Xb(a[b],null);a[c]=d}else Pk(a[b])}}
function Nk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ok(a){var b="";C(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Lk(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&bi(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Bk();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;X("debug_forward_web_query_parameters")&&(a=Gk(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Fk(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Qk(){return"INNERTUBE_API_KEY"in Yh&&"INNERTUBE_API_VERSION"in Yh}
function sk(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),Ib:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Jb:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Lb:P("INNERTUBE_CONTEXT_HL",void 0),Kb:P("INNERTUBE_CONTEXT_GL",void 0),Mb:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ob:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Nb:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function rk(a){var b={client:{hl:a.Lb,gl:a.Kb,clientName:a.Jb,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ib}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=bk();0<c.length&&(b.request={internalExperimentFlags:c});a.appInstallData&&X("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);P("DELEGATED_SESSION_ID")&&
!X("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(hj(P("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Rk(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ec||P("AUTHORIZATION"))||(a?b="Bearer "+x("gapi.auth.getToken")().Dc:b=Ze([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),X("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function Sk(a){a=Object.assign({},a);delete a.Authorization;var b=Ze();if(b){var c=new Wg;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ia(b);void 0===c&&(c=0);if(!bd){bd={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));ad[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===bd[k]&&(bd[k]=h)}}}c=ad[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Tk(a,b,c,d,e){id.set(""+a,b,{Va:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;function Uk(a){var b=new Rh;(b=b.isAvailable()?a?new Xh(b,a):b:null)||(a=new Sh(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Nh(a):null;this.j=document.domain||window.location.hostname}
Uk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Ra()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(rh(b))}catch(f){return}else e=escape(b);Tk(a,e,c,this.j)};
Uk.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=id.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Uk.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;id.remove(""+a,"/",void 0===b?"youtube.com":b)};var Vk;function Wk(){Vk||(Vk=new Uk("yt.innertube"));return Vk}
function Xk(a,b,c,d){if(d)return null;d=Wk().get("nextId",!0)||1;var e=Wk().get("requests",!0)||{};e[d]={method:a,request:b,authState:Sk(c),requestTime:Math.round(Y())};Wk().set("nextId",d+1,86400,!0);Wk().set("requests",e,86400,!0);return d}
function Yk(a){var b=Wk().get("requests",!0)||{};delete b[a];Wk().set("requests",b,86400,!0)}
function Zk(a){var b=Wk().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=Sk(Rk(!1));qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),vk(a,d.method,e,{}));delete b[c]}}Wk().set("requests",b,86400,!0)}}
;function $k(){this.i=!0}
function al(a){var b={},c=Ze([]);c&&(b.Authorization=c,c=a=null===a||void 0===a?void 0:a.sessionIndex,void 0===c&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),b["X-Goog-AuthUser"]=c,"INNERTUBE_HOST_OVERRIDE"in Yh||(b["X-Origin"]=window.location.origin),X("pageid_as_header_web")&&void 0===a&&"DELEGATED_SESSION_ID"in Yh&&(b["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return b}
;var bl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var cl=[],dl=!1;function el(a,b){dl||(cl.push({type:"EVENT",eventType:a,payload:b}),10<cl.length&&cl.shift())}
;function fl(a){if(!a)throw Error();throw a;}
function gl(a){return a}
function hl(a){var b=this;this.j=a;this.state={status:"PENDING"};this.i=[];this.onRejected=[];this.j(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.i);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
hl.all=function(a){return new hl(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Y:0};f.Y<a.length;f={Y:f.Y},++f.Y)hl.resolve(a[f.Y]).then(function(g){return function(h){d[g.Y]=h;e--;0===e&&b(d)}}(f))["catch"](function(g){c(g)})})};
hl.resolve=function(a){return new hl(function(b,c){a instanceof hl?a.then(b,c):b(a)})};
hl.reject=function(a){return new hl(function(b,c){c(a)})};
hl.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:gl,e=null!==b&&void 0!==b?b:fl;return new hl(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){il(c,c,d,f,g)}),c.onRejected.push(function(){jl(c,c,e,f,g)})):"FULFILLED"===c.state.status?il(c,c,d,f,g):"REJECTED"===c.state.status&&jl(c,c,e,f,g)})};
hl.prototype["catch"]=function(a){return this.then(void 0,a)};
function il(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof hl?kl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function jl(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof hl?kl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function kl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof hl?kl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ll(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function ml(a){return new Promise(function(b,c){ll(a,b,c)})}
function nl(a){return new hl(function(b,c){ll(a,b,c)})}
;function ol(a,b){return new hl(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;var pl=Wc||Xc;function ql(a){var b=Nb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function rl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
pa(rl,Error);var sl={},tl=(sl.AUTH_INVALID="No user identifier specified.",sl.EXPLICIT_ABORT="Transaction was explicitly aborted.",sl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",sl.MISSING_OBJECT_STORE="Object store not created.",sl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",sl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",sl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",sl);
function ul(a,b,c){b=void 0===b?{}:b;c=void 0===c?tl[a]:c;rl.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,ul.prototype);dl||(cl.push({type:"ERROR",payload:this}),10<cl.length&&cl.shift())}
pa(ul,rl);function vl(a){ul.call(this,"MISSING_OBJECT_STORE",{Oc:a},tl.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,vl.prototype)}
pa(vl,ul);function wl(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(Y());this.j=!1}
n=wl.prototype;n.add=function(a,b,c){return xl(this,[a],"readwrite",function(d){return yl(d,a).add(b,c)})};
n.clear=function(a){return xl(this,[a],"readwrite",function(b){return yl(b,a).clear()})};
n.close=function(){var a;this.i.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return xl(this,[a],"readonly",function(c){return yl(c,a).count(b)})};
n["delete"]=function(a,b){return xl(this,[a],"readwrite",function(c){return yl(c,a)["delete"](b)})};
n.get=function(a,b){return xl(this,[a],"readwrite",function(c){return yl(c,a).get(b)})};
function xl(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.i.transaction(b,c);d=zl(e,d)["catch"](function(f){var g=a.i.name,h=b.join();f instanceof ul||f instanceof rl||("QuotaExceededError"===f.name?f=new ul("QUOTA_EXCEEDED",{objectStoreNames:h,dbName:g}):$c&&"UnknownError"===f.name?f=new ul("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:h,dbName:g}):(Object.setPrototypeOf(f,rl.prototype),f.args=[{name:"IdbError",Qc:f.name,dbName:g,objectStoreNames:h}]));throw f;});
Al(a,d,b.join(),c);return d}
function Al(a,b,c,d){rc(a,function f(){var g,h,k=this,l,m,p;return Aa(f,function(q){if(1==q.i)return g=Math.round(Y()),q.B=2,ta(q,b,4);2!=q.i?(h=Math.round(Y()),Bl(k,!0,c,h-g),q.i=0,q.B=0):(l=ua(q),m=Math.round(Y()),p=m-g,l instanceof ul&&("QUOTA_EXCEEDED"===l.type||"QUOTA_MAYBE_EXCEEDED"===l.type)&&el("QUOTA_EXCEEDED",{dbName:k.i.name,objectStoreNames:c,transactionCount:k.transactionCount,transactionMode:d}),l instanceof ul&&"UNKNOWN_ABORT"===l.type&&(el("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,
transactionDuration:p,transactionCount:k.transactionCount,dbDuration:m-k.l}),k.j=!0),Bl(k,!1,c,p),q.i=0)})})}
function Bl(a,b,c,d){el("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.j,duration:d,isSuccessful:b})}
function Cl(a){this.i=a}
n=Cl.prototype;n.add=function(a,b){return nl(this.i.add(a,b))};
n.clear=function(){return nl(this.i.clear()).then(function(){})};
n.count=function(a){return nl(this.i.count(a))};
function Dl(a,b){return El(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
n["delete"]=function(a){return a instanceof IDBKeyRange?Dl(this,a):nl(this.i["delete"](a))};
n.get=function(a){return nl(this.i.get(a))};
n.index=function(a){return new Fl(this.i.index(a))};
n.getName=function(){return this.i.name};
function El(a,b,c){a=a.i.openCursor(b.query,b.direction);return Gl(a).then(function(d){return ol(d,c)})}
function Hl(a){var b=this;this.i=a;this.j=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.aborted){e=ul;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function zl(a,b){var c=new Hl(a);return Il(c,b)}
function Il(a,b){var c=new Promise(function(d,e){b(a).then(function(f){a.commit();d(f)})["catch"](e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Hl.prototype.abort=function(){this.i.abort();this.aborted=!0;throw new ul("EXPLICIT_ABORT");};
Hl.prototype.commit=function(){var a=this.i;a.commit&&!this.aborted&&a.commit()};
function yl(a,b){var c=a.i.objectStore(b),d=a.j.get(c);d||(d=new Cl(c),a.j.set(c,d));return d}
function Fl(a){this.i=a}
Fl.prototype.count=function(a){return nl(this.i.count(a))};
Fl.prototype["delete"]=function(a){return Jl(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Fl.prototype.get=function(a){return nl(this.i.get(a))};
Fl.prototype.getKey=function(a){return nl(this.i.getKey(a))};
function Jl(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Gl(a).then(function(d){return ol(d,c)})}
function Kl(a,b){this.request=a;this.cursor=b}
function Gl(a){return nl(a).then(function(b){return null===b?null:new Kl(a,b)})}
n=Kl.prototype;n.advance=function(a){this.cursor.advance(a);return Gl(this.request)};
n["continue"]=function(a){this.cursor["continue"](a);return Gl(this.request)};
n["delete"]=function(){return nl(this.cursor["delete"]()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.update=function(a){return nl(this.cursor.update(a))};function Ll(a,b,c){return rc(this,function e(){var f,g,h,k,l,m,p,q,r,v;return Aa(e,function(z){if(1==z.i)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.hc,m=g.upgrade,p=g.closed,r=function(){q||(q=new wl(f.result,{closed:p}));return q},f.addEventListener("upgradeneeded",function(D){if(null===D.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");D.dataLoss&&"none"!==D.dataLoss&&el("IDB_DATA_CORRUPTED",{reason:D.dataLossMessage||"unknown reason",dbName:a});var $a=r(),fa=new Hl(f.transaction);m&&m($a,D.oldVersion,D.newVersion,fa)}),h&&f.addEventListener("blocked",function(){h()}),ta(z,ml(f),2);
v=z.l;k&&v.addEventListener("versionchange",function(){k(r())});
v.addEventListener("close",function(){el("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:v.version});l&&l()});
return z["return"](r())})})}
function Ml(a,b){b=void 0===b?{}:b;return rc(this,function d(){var e,f,g;return Aa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return ta(h,ml(e),0)})})}
;function Nl(a){this.name="YtIdbMeta";this.options=a;this.j=!1}
function Ol(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Ll(a,b,c)}
Nl.prototype["delete"]=function(a){a=void 0===a?{}:a;return Ml(this.name,a)};
Nl.prototype.open=function(){var a=this;if(!this.i){var b,c=function(){a.i===b&&(a.i=void 0)},d={blocking:function(f){f.close()},
closed:c,hc:c,upgrade:this.options.upgrade},e=function(){return rc(a,function g(){var h=this,k,l,m;return Aa(g,function(p){switch(p.i){case 1:return p.B=2,ta(p,Ol(h.name,h.options.version,d),4);case 4:k=p.l;if(!Vc){p.i=5;break}a:{var q=u(Object.keys(h.options.Xb));for(var r=q.next();!r.done;r=q.next())if(r=r.value,!k.i.objectStoreNames.contains(r)){q=r;break a}q=void 0}l=q;if(void 0===l){p.i=5;break}if(!Vc||h.j){p.i=7;break}h.j=!0;return ta(p,h["delete"](),8);case 8:return p["return"](e());case 7:throw new vl(l);
case 5:return p["return"](k);case 2:m=ua(p);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return p["return"](Ol(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.i=b=e()}return this.i};var Pl=new Nl({Xb:{databases:!0},upgrade:function(a,b){1>b&&a.i.createObjectStore("databases",{keyPath:"actualName"})}});
function Ql(a){return rc(this,function c(){var d;return Aa(c,function(e){if(1==e.i)return ta(e,Pl.open(),2);d=e.l;return e["return"](xl(d,["databases"],"readwrite",function(f){var g=yl(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return nl(g.i.put(a,void 0)).then(function(){})})}))})})}
function Rl(){return rc(this,function b(){var c;return Aa(b,function(d){if(1==d.i)return ta(d,Pl.open(),2);c=d.l;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;new mg;var Sl;
function Tl(){return rc(this,function b(){var c,d;return Aa(b,function(e){switch(e.i){case 1:var f;if(f=pl)f=/WebKit\/([0-9]+)/.exec(Nb),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Nb),f=!(f&&602<=parseInt(f[1],10)));if(f&&!X("ytidb_allow_on_ios_safari_v8_and_v9")||yc)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.B=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return ta(e,Ql(d),4);case 4:return ta(e,Rl(),5);case 5:return e["return"](!0);case 2:return ua(e),e["return"](!1)}})})}
function Ul(){if(void 0!==Sl)return Sl;dl=!0;return Sl=Tl().then(function(a){dl=!1;return a})}
;var Vl;function Wl(){Vl||(Vl=new Uk("yt.offline"));return Vl}
;function Xl(){mg.call(this);this.D=this.F=this.j=!1;this.A=Yl();Zl(this);$l(this)}
pa(Xl,mg);function Yl(){var a=window.navigator.onLine;return void 0===a?!0:a}
function $l(a){window.addEventListener("online",function(){a.A=!0;a.j&&a.dispatchEvent("ytnetworkstatus-online");am(a);if(a.D&&X("offline_error_handling")){var b=Wl().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new rl(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;ci(d)}Wl().set("errors",{},2592E3,!0)}}})}
function Zl(a){window.addEventListener("offline",function(){a.A=!1;a.j&&a.dispatchEvent("ytnetworkstatus-offline");am(a)})}
function am(a){a.F&&(di(new rl("NetworkStatusManager state did not match poll",Y()-0)),a.F=!1)}
;function bm(a){a=void 0===a?{}:a;mg.call(this);var b=this;this.A=this.F=0;Xl.i||(Xl.i=new Xl);this.j=Xl.i;this.j.j=!0;a.Rb&&(this.j.D=!0);a.va?(this.va=a.va,bg(this.j,"ytnetworkstatus-online",function(){cm(b,"publicytnetworkstatus-online")}),bg(this.j,"ytnetworkstatus-offline",function(){cm(b,"publicytnetworkstatus-offline")})):(bg(this.j,"ytnetworkstatus-online",function(){b.dispatchEvent("publicytnetworkstatus-online")}),bg(this.j,"ytnetworkstatus-offline",function(){b.dispatchEvent("publicytnetworkstatus-offline")}))}
pa(bm,mg);function cm(a,b){a.va?a.A?(yi(a.F),a.F=vi(function(){a.D!==b&&(a.dispatchEvent(b),a.D=b,a.A=Y())},a.va-(Y()-a.A))):(a.dispatchEvent(b),a.D=b,a.A=Y()):a.dispatchEvent(b)}
;var dm;function em(a,b){b=void 0===b?{}:b;Ul().then(function(){dm||(dm=new bm({Rb:!0}));dm.j.A!==Yl()&&di(new rl("NetworkStatusManager isOnline does not match window status"));Kk(a,b)})}
function fm(a,b){b=void 0===b?{}:b;Ul().then(function(){Kk(a,b)})}
;function gm(a){var b=this;this.i=null;a?this.i=a:Qk()&&(this.i=sk());wi(function(){Zk(b)},0,5E3)}
gm.prototype.isReady=function(){!this.i&&Qk()&&(this.i=sk());return!!this.i};
function vk(a,b,c,d){!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&di(new rl("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new rl("innertube xhrclient not ready",b,c,d);ci(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",K:c,ib:"JSON",ua:function(){d.ua()},
fb:d.ua,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
eb:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
Pc:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.i.Mb)&&(g=e);var h=a.i.Ob||!1,k=Rk(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.i.innertubeApiVersion+"/"+b;var l={alt:"json"};a.i.Nb&&f.headers.Authorization||(l.key=a.i.innertubeApiKey);var m=jj(""+g+e,l||{},!0);Ul().then(function(p){if(d.retry&&X("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(X("networkless_gel")&&!p||!X("networkless_gel"))var q=Xk(b,
c,k,h);if(q){var r=f.onSuccess,v=f.eb;f.onSuccess=function(z,D){Yk(q);r(z,D)};
c.eb=function(z,D){Yk(q);v(z,D)}}}try{X("use_fetch_for_op_xhr")?Hk(m,f):X("networkless_gel")&&d.retry?(f.method="POST",!d.mc&&X("nwl_send_fast_on_unload")?fm(m,f):em(m,f)):(f.method="POST",f.K||(f.K={}),Kk(m,f))}catch(z){if("InvalidAccessError"==z.name)q&&(Yk(q),q=0),di(Error("An extension is blocking network request."));
else throw z;}q&&wi(function(){Zk(a)},0,5E3)})}
;var hm=Ra().toString();
function im(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Ra();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(hm)for(a=1,b=0;b<hm.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^hm.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var jm=w.ytLoggingDocDocumentNonce_||im();A("ytLoggingDocDocumentNonce_",jm);function km(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function lm(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
A("yt_logging_screen.getRootVeType",function(a){return P(lm(void 0===a?0:a),void 0)});
function mm(){var a=P("csn-to-ctt-auth-info");a||(a={},Zh("csn-to-ctt-auth-info",a));return a}
function nm(a){a=void 0===a?0:a;var b=P(km(a));if(!b&&!P("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
A("yt_logging_screen.getCurrentCsn",nm);function om(a,b,c){var d=mm();(c=nm(c))&&delete d[c];b&&(d[a]=b)}
A("yt_logging_screen.getCttAuthInfo",function(a){return mm()[a]});
A("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==P(km(c))||b!==P(lm(c)))if(om(a,d,c),Zh(km(c),a),Zh(lm(c),b),0==c||X("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&xk("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:jm,clientScreenNonce:a},gm)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()});function pm(){aj.call(this,"button");this.i=null;this.l=[];this.j={}}
B(pm,aj);Ga(pm);n=pm.prototype;n.register=function(){V(this,"click",this.ob);V(this,"keydown",this.Ta);V(this,"keypress",this.Ua);bj(this,"page-scroll",this.Fb)};
n.unregister=function(){W(this,"click",this.ob);W(this,"keydown",this.Ta);W(this,"keypress",this.Ua);qm(this);this.j={};pm.H.unregister.call(this)};
n.ob=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
n.Ta=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=rm(this,a))){var d=function(g){var h="";g.tagName&&(h=g.tagName.toLowerCase());return"ul"==h||"table"==h},e;
d(b)?e=b:e=Id(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.Vb;else"table"==e&&(f=this.Ub);f&&sm(this,a,b,c,y(f,this))}}};
n.Fb=function(){var a=this.j,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=J(b.activeButtonNode||b.parentNode,U(this));if(void 0==d||void 0==b)break;tm(this,d,b,!0)}};
function sm(a,b,c,d,e){var f=Mj(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=um(a,c)){if(void 0!==d.firstElementChild)b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var k=void 0===k?"":k;var l=void 0===l?window:l;l=l.location;h=mc(b.href,h)+k;h instanceof Gb||h instanceof Gb||(h="object"==typeof h&&h.ga?h.ea():String(h),Lb.test(h)||(h="about:invalid#zClosurez"),h=new Gb(h,Hb));l.href=Ib(h)}else Vi(b)}else g&&
vm(a,b);else f?27==d.keyCode?(um(a,c),vm(a,b)):e(b,c,d):(h=M(b,U(a,"reverse"))?38:40,d.keyCode==h&&(Vi(b),d.preventDefault()))}
n.Ua=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=rm(this,a),Mj(a)&&c.preventDefault())};
function um(a,b){var c=U(a,"menu-item-highlight"),d=I(c,b);d&&kh(d,c);return d}
function wm(a,b,c){N(c,U(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=U(a,"item-id-"+Ka(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
n.Ub=function(a,b,c){var d=um(this,b);b=Ki("table",b);var e=Ki("tr",b);e=sd(document,"td",null,e).length;b=sd(document,"td",null,b);d=xm(d,b,e,c);-1!=d&&(wm(this,a,b[d]),c.preventDefault())};
n.Vb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=um(this,b);b=Za(sd(document,"li",null,b),Mj);d=xm(d,b,1,c);wm(this,a,b[d]);c.preventDefault()}};
function xm(a,b,c,d){var e=b.length;a=Ya(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function ym(a,b){var c=b.iframeMask;c||(c=Bd(document,"IFRAME"),c.src='javascript:""',ih(c,U(a,"menu-mask")),Oj(c),b.iframeMask=c);return c}
function tm(a,b,c,d){var e=J(b,U(a,"group")),f=!!a.o(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=De(b);if(M(b,U(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(m){}}M(b,"flip")&&(M(b,U(a,"reverse"))?(f=12,g=13):(f=13,g=12));var k;a.o(b,"button-has-sibling-menu")?k=ve(e):a.o(b,"button-menu-root-container")&&(k=zm(a,b));F&&!Rc("8")&&(k=null);if(k){var l=De(k);l=new ae(-l.top,l.left,l.top,-l.left)}k=new G(0,1);M(b,U(a,"center-menu"))&&(k.x-=Math.round((Be(c).width-Be(b).width)/
2));d&&(k.y+=xd(document).y);if(a=ym(a,b))b=Be(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Ch(e,f,a,g,k,l,197),d&&pe(a,"position","fixed");Ch(e,f,c,g,k,l,197)}
function zm(a,b){if(a.o(b,"button-menu-root-container")){var c=a.o(b,"button-menu-root-container");return J(b,c)}return document.body}
n.qb=function(a){if(a){var b=rm(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.o(a,"button-has-sibling-menu")?c=a.parentNode:c=zm(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=ym(this,a);d&&c.appendChild(d);(c=!!this.o(a,"button-menu-fixed"))&&(this.j[Hi(a).toString()]=b);tm(this,a,b,c);oi("yt-uix-button-menu-before-show",a,b);Nj(b);d&&Nj(d);
this.aa(a,"button-menu-action",!0);N(a,U(this,"active"));b=y(this.pb,this,a,!1);d=y(this.pb,this,a,!0);c=y(this.lc,this,a,void 0);this.i&&rm(this,this.i)==rm(this,a)||qm(this);ni("yt-uix-button-menu-show",a);Wi(this.l);this.l=[T(document,"click",d),T(document,"contextmenu",b),T(window,"resize",c)];this.i=a}}};
function vm(a,b){if(b){var c=rm(a,b);if(c){a.i=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Oj(c);a.aa(b,"button-menu-action",!1);var d=ym(a,b),e=Hi(c).toString();delete a.j[e];ei(function(){d&&d.parentNode&&(Oj(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=J(b,U(a,"group"));
var f=[U(a,"active")];e&&f.push(U(a,"group-active"));lh(b,f);ni("yt-uix-button-menu-hide",b);Wi(a.l);a.l.length=0}}
n.lc=function(a,b){var c=rm(this,a);if(c){b&&(b instanceof Ub?$b(c,b):Hd(c,b));var d=!!this.o(a,"button-menu-fixed");tm(this,a,c,d)}};
n.pb=function(a,b,c){c=Ti(c);var d=J(c,U(this));if(d){d=rm(this,d);var e=rm(this,a);if(d==e)return}d=J(c,U(this,"menu"));e=d==rm(this,a);var f=M(c,U(this,"menu-item")),g=M(c,U(this,"menu-close"));if(!d||e&&(f||g))vm(this,a),d&&b&&this.o(a,"button-menu-indicate-selected")&&((a=I(U(this,"content"),a))&&Hd(a,Pd(c)),Am(this,d,c))};
function Am(a,b,c){var d=U(a,"menu-item-selected");a=rd(d,b);C(a,function(e){kh(e,d)});
N(c.parentNode,d)}
function rm(a,b){if(!b.widgetMenu){var c=a.o(b,"button-menu-id");c=c&&H(c);var d=U(a,"menu");c?jh(c,[d,U(a,"menu-external")]):c=I(d,b);b.widgetMenu=c}return b.widgetMenu}
n.isToggled=function(a){return M(a,U(this,"toggled"))};
n.toggle=function(a){if(this.o(a,"button-toggle")){var b=J(a,U(this,"group")),c=U(this,"toggled"),d=M(a,c);if(b&&this.o(b,"button-toggle-group")){var e=this.o(b,"button-toggle-group");b=rd(U(this),b);C(b,function(f){f!=a||"optional"==e&&d?(kh(f,c),f.removeAttribute("aria-pressed")):(N(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),oh(a,c)}};
n.click=function(a){if(rm(this,a)){var b=rm(this,a);if(b){var c=J(b.activeButtonNode||b.parentNode,U(this));c&&c!=a?(vm(this,c),ei(y(this.qb,this,a),1)):Mj(b)?vm(this,a):this.qb(a)}a.focus()}this.aa(a,"button-action")};
function qm(a){a.i&&vm(a,a.i)}
;function Bm(a){aj.call(this,a);this.l=null}
B(Bm,aj);n=Bm.prototype;n.M=function(a){var b=aj.prototype.M.call(this,a);return b?b:a};
n.register=function(){bj(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
n.dispose=function(){Cm(this);Bm.H.dispose.call(this)};
n.o=function(a,b){var c=Bm.H.o.call(this,a,b);return c?c:(c=Bm.H.o.call(this,a,"card-config"))&&(c=x(c))&&c[b]?c[b]:null};
n.show=function(a){var b=this.M(a);if(b){N(b,U(this,"active"));var c=Dm(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Em(this,a,c);var d=U(this,"card-visible"),e=this.o(a,"card-delegate-show")&&this.o(b,"card-action");this.aa(b,"card-action",a);this.l=a;Oj(c);ei(y(function(){e||(Nj(c),ni("yt-uix-card-show",b,a,c));Fm(c);N(c,d);ni("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Dm(a,b,c){var d=c||b,e=U(a,"card");c=Gm(a,d);var f=H(U(a,"card")+Hi(d));if(f)return a=I(U(a,"card-body"),f),Gd(a,c)||(Dd(c),a.appendChild(c)),f;f=document.createElement("div");f.id=U(a,"card")+Hi(d);ih(f,e);(d=a.o(d,"card-class"))&&jh(f,d.split(/\s+/));d=document.createElement("div");d.className=U(a,"card-border");b=a.o(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
U(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Dd(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Em(a,b,c){var d=a.o(b,"orientation")||"horizontal";var e=I(U(a,"anchor"),b)||b;var f=a.o(b,"position"),g=!!a.o(b,"force-position"),h=a.o(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,l="topright"==f||"bottomright"==f;if(l&&k){var m=13;var p=8}else l&&!k?(m=12,p=9):!l&&k?(m=9,p=12):(m=8,p=13);var q=Ee(document.body);f=Ee(b);q!=f&&(m^=4);if(d){f=b.offsetHeight/2-12;var r=new G(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,r=new G(b.offsetWidth+6,-12);var v=
Be(c);f=Math.min(f,(d?v.height:v.width)-24-6);6>f&&(f=6,d?r.y+=12-b.offsetHeight/2:r.x+=12-b.offsetWidth/2);v=null;g||(v=10);b=U(a,"card-flip");a=U(a,"card-reverse");mh(c,b,l);mh(c,a,k);v=Ch(e,m,c,p,r,null,v);!g&&v&&(v&48&&(l=!l,m^=4,p^=4),v&192&&(k=!k,m^=1,p^=1),mh(c,b,l),mh(c,a,k),Ch(e,m,c,p,r));h&&(e=parseInt(c.style.top,10),g=xd(document).y,pe(c,"position","fixed"),pe(c,"top",e-g+"px"));q&&(c.style.right="",e=De(c),e.left=e.left||parseInt(c.style.left,10),g=vd(window),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=I("yt-uix-card-body-arrow",c);g=I("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!q&&l||q&&!l?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";k=I("yt-uix-card-arrow",c);l=I("yt-uix-card-arrow-background",c);k&&l&&(c="right"==d?Be(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",l.style.marginLeft=-f+"px",l.style.marginTop=f+"px")}
n.hide=function(a){if(a=this.M(a)){var b=H(U(this,"card")+Hi(a));b&&(kh(a,U(this,"active")),kh(b,U(this,"card-visible")),Oj(b),this.l=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Dd(b.cardMask),b.cardMask=null))}};
function Cm(a){a.l&&a.hide(a.l)}
n.kc=function(a,b){var c=this.M(a);if(c){if(b){var d=Gm(this,c);if(!d)return;b instanceof Ub?$b(d,b):Hd(d,b)}M(c,U(this,"active"))&&(c=Dm(this,a,c),Em(this,a,c),Nj(c),Fm(c))}};
n.isActive=function(a){return(a=this.M(a))?M(a,U(this,"active")):!1};
function Gm(a,b){var c=b.cardContentNode;if(!c){var d=U(a,"content"),e=U(a,"card-content");(c=(c=a.o(b,"card-id"))?H(c):I(d,b))||(c=document.createElement("div"));var f=c;kh(f,d);N(f,e);b.cardContentNode=c}return c}
function Fm(a){var b=a.cardMask;b||(b=Bd(document,"IFRAME"),b.src='javascript:""',jh(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Hm(){aj.call(this,"kbd-nav")}
var Im;B(Hm,aj);Ga(Hm);n=Hm.prototype;n.register=function(){V(this,"keydown",this.Qa);bj(this,"yt-uix-kbd-nav-move-in",this.bb);bj(this,"yt-uix-kbd-nav-move-in-to",this.Wb);bj(this,"yt-uix-kbd-move-next",this.cb);bj(this,"yt-uix-kbd-nav-move-to",this.oa)};
n.unregister=function(){W(this,"keydown",this.Qa);Wi(Im)};
n.Qa=function(a,b,c){var d=c.keyCode;if(a=J(a,U(this)))switch(d){case 13:case 32:this.bb(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=qh(a,"kbdNavMoveOut");!c;){c=J(a.parentElement,U(this));if(!c)break a;c=qh(c,"kbdNavMoveOut")}c=H(c);this.oa(c);ni("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&M(a,U(this,"list")))switch(d){case 40:this.cb(b,a);break;case 38:d=document.activeElement==a,a=Jm(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),Km(this,a[b]))}c.preventDefault()}};
n.bb=function(a){var b=qh(a,"kbdNavMoveIn");b=H(b);Lm(this,a,b);this.oa(b)};
n.Wb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Lm(this,d,a);this.oa(a)};
n.oa=function(a){if(a)if(Md(a))a.focus();else{var b=Id(a,function(c){return Fd(c)?Md(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Lm(a,b,c){if(b&&c)if(N(c,U(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,ph&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
n.cb=function(a,b){var c=document.activeElement==b,d=Jm(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Km(this,d[c]))};
function Km(a,b){if(b){var c=Rd(b,"LI");c&&(N(c,U(a,"highlight")),Im=T(b,"blur",y(function(d){kh(d,U(this,"highlight"));Wi(Im)},a,c)))}}
function Jm(a){if("UL"!=a.tagName.toUpperCase())return[];a=Za(Ed(a),function(b){return"LI"==b.tagName.toUpperCase()});
return Za(ab(a,function(b){return Mj(b)?Id(b,function(c){return Fd(c)?Md(c):!1}):!1}),function(b){return!!b})}
;function Mm(){aj.call(this,"menu");this.j=this.i=null;this.l={};this.C={};this.A=null}
B(Mm,aj);Ga(Mm);function Nm(a){var b=Mm.G();if(M(a,U(b)))return a;var c=b.M(a);return c?c:J(a,U(b,"content"))==b.i?b.j:null}
n=Mm.prototype;n.register=function(){V(this,"click",this.Pa);V(this,"mouseenter",this.Db);bj(this,"page-scroll",this.Gb);bj(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.M(a);Om(this,a)});
this.A=new O};
n.unregister=function(){W(this,"click",this.Pa);this.j=this.i=null;Wi(lb(nb(this.l)));this.l={};mb(this.C,function(a){Dd(a)},this);
this.C={};$d(this.A);this.A=null;Mm.H.unregister.call(this)};
n.Pa=function(a,b,c){a&&(b=Pm(this,a),!b.disabled&&Ji(c.target,b)&&Qm(this,a))};
n.Db=function(a,b,c){a&&M(a,U(this,"hover"))&&(b=Pm(this,a),Ji(c.target,b)&&Qm(this,a,!0))};
n.Gb=function(){this.i&&this.j&&Rm(this,this.j,this.i)};
function Rm(a,b,c){var d=Sm(a,b);d&&ze(d,Be(c));if(c==a.i){var e=9,f=8;M(b,U(a,"reversed"))&&(e^=1,f^=1);M(b,U(a,"flipped"))&&(e^=4,f^=4);a=new G(0,1);d&&Ch(b,e,d,f,a,null,197);Ch(b,e,c,f,a,null,197)}}
function Qm(a,b,c){Tm(a,b)&&!c?Om(a,b):(Um(a,b),!a.i||Ji(b,a.i)?a.rb(b):Fh(a.A,y(a.rb,a,b)))}
n.rb=function(a){if(a){var b=Vm(this,a);if(b){oi("yt-uix-menu-before-show",a,b);if(this.i)Ji(a,this.i)||Om(this,this.j);else{this.j=a;this.i=b;M(a,U(this,"sibling-content"))||(Dd(b),document.body.appendChild(b));var c=Pm(this,a).offsetWidth-2;b.style.minWidth=c+"px"}(c=Sm(this,a))&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);kh(b,U(this,"content-hidden"));Rm(this,a,b);jh(Pm(this,a),[U(this,"trigger-selected"),"yt-uix-button-toggled"]);ni("yt-uix-menu-show",a);Wm(b);Xm(this,a);ni("yt-uix-kbd-nav-move-in-to",
b);var d=y(this.nc,this,a),e=y(this.Sb,this,a);c=Ka(a).toString();this.l[c]=[T(b,"click",e),T(document,"click",d)];M(a,U(this,"indicate-selected"))&&(d=y(this.Tb,this,a),this.l[c].push(T(b,"click",d)));M(a,U(this,"hover"))&&(a=y(this.Eb,this,a),this.l[c].push(T(document,"mousemove",a)))}}};
n.Eb=function(a,b){var c=Ti(b);if(c){var d=Pm(this,a);Ji(c,d)||Ym(this,c)||Zm(this,a)}};
n.nc=function(a,b){var c=Ti(b);if(c){if(Ym(this,c)){var d=J(c,U(this,"content")),e=Rd(c,"LI");e&&d&&Gd(d,e)&&oi("yt-uix-menu-item-clicked",c);c=J(c,U(this,"close-on-select"));if(!c)return;d=Nm(c)}Om(this,d||a)}};
function Um(a,b){if(b){var c=J(b,U(a,"content"));c&&(c=rd(U(a),c),C(c,function(d){!Ji(d,b)&&Tm(this,d)&&Zm(this,d)},a))}}
function Om(a,b){if(b){var c=[];c.push(b);var d=Vm(a,b);d&&(d=rd(U(a),d),d=hb(d),c=c.concat(d),C(c,function(e){Tm(this,e)&&Zm(this,e)},a))}}
function Zm(a,b){if(b){var c=Vm(a,b);lh(Pm(a,b),[U(a,"trigger-selected"),"yt-uix-button-toggled"]);N(c,U(a,"content-hidden"));var d=Vm(a,b);d&&td(d,{"aria-expanded":"false"});(d=Sm(a,b))&&d.parentNode&&Dd(d);c&&c==a.i&&(a.j.appendChild(c),a.i=null,a.j=null,a.A&&a.A.N("ROOT_MENU_REMOVED"));ni("yt-uix-menu-hide",b);c=Ka(b).toString();Wi(a.l[c]);delete a.l[c]}}
n.Sb=function(a,b){var c=Ti(b);c&&$m(this,a,c)};
n.Tb=function(a,b){var c=Ti(b);if(c){var d=Pm(this,a);if(d&&(c=Rd(c,"LI")))if(c=Pd(c).trim(),d.hasChildNodes()){var e=pm.G();(d=I(U(e,"content"),d))&&Hd(d,c)}else Hd(d,c)}};
function Xm(a,b){var c=Vm(a,b);if(c){C(c.children,function(e){"LI"==e.tagName&&td(e,{role:"menuitem"})});
td(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ka(c),c.id=d);(c=Pm(a,b))&&td(c,{"aria-controls":d})}}
function $m(a,b,c){var d=Vm(a,b);d&&M(b,U(a,"checked"))&&(a=Rd(c,"LI"))&&(a=I("yt-ui-menu-item-checked-hid",a))&&(d=rd("yt-ui-menu-item-checked",d),C(d,function(e){nh(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),nh(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Tm(a,b){var c=Vm(a,b);return c?!M(c,U(a,"content-hidden")):!1}
function Wm(a){a=sd(document,"UL",null,a);C(a,function(b){b.tabIndex=0;var c=Hm.G();jh(b,[U(c),U(c,"list")])})}
function Vm(a,b){var c=ri(b,"menu-content-id");return c&&(c=H(c))?(jh(c,[U(a,"content"),U(a,"content-external")]),c):b==a.j?a.i:I(U(a,"content"),b)}
function Sm(a,b){var c=Ka(b).toString(),d=a.C[c];if(!d){d=Bd(document,"IFRAME");d.src='javascript:""';var e=[U(a,"mask")];C(hh(b),function(f){e.push(f+"-mask")});
jh(d,e);a.C[c]=d}return d||null}
function Pm(a,b){return I(U(a,"trigger"),b)}
function Ym(a,b){return Ji(b,a.i)||Ji(b,a.j)}
;function an(){Bm.call(this,"clickcard");this.i={};this.j={}}
B(an,Bm);Ga(an);n=an.prototype;n.register=function(){an.H.register.call(this);V(this,"click",this.Ka,"target");V(this,"click",this.Ja,"close")};
n.unregister=function(){an.H.unregister.call(this);W(this,"click",this.Ka,"target");W(this,"click",this.Ja,"close");for(var a in this.i)Wi(this.i[a]);this.i={};for(a in this.j)Wi(this.j[a]);this.j={}};
n.Ka=function(a,b,c){c.preventDefault();b=Rd(c.target,"button");if(!b||!b.disabled){if(b=this.o(a,"card-target"))a=document,a="string"===typeof b?a.getElementById(b):b;b=this.M(a);this.o(b,"disabled")||(M(b,U(this,"active"))?(this.hide(a),kh(b,U(this,"active"))):(this.show(a),N(b,U(this,"active"))))}};
n.show=function(a){an.H.show.call(this,a);var b=this.M(a),c=Ka(a).toString();if(!ri(b,"click-outside-persists")){if(this.i[c])return;b=T(document,"click",y(this.La,this,a));var d=T(window,"blur",y(this.La,this,a));this.i[c]=[b,d]}a=T(window,"resize",y(this.kc,this,a,void 0));this.j[c]=a};
n.hide=function(a){an.H.hide.call(this,a);a=Ka(a).toString();var b=this.i[a];b&&(Wi(b),this.i[a]=null);if(b=this.j[a])Wi(b),delete this.j[a]};
n.La=function(a,b){var c="yt-uix"+(this.B?"-"+this.B:"")+"-card",d=null;b.target&&(d=J(b.target,c)||J(Nm(b.target),c));(d=d||J(document.activeElement,c)||(document.activeElement?J(Nm(document.activeElement),c):null))||this.hide(a)};
n.Ja=function(a){(a=J(a,U(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function bn(){Bm.call(this,"hovercard")}
B(bn,Bm);Ga(bn);n=bn.prototype;n.register=function(){V(this,"mouseenter",this.Xa,"target");V(this,"mouseleave",this.Za,"target");V(this,"mouseenter",this.Ya,"card");V(this,"mouseleave",this.ab,"card")};
n.unregister=function(){W(this,"mouseenter",this.Xa,"target");W(this,"mouseleave",this.Za,"target");W(this,"mouseenter",this.Ya,"card");W(this,"mouseleave",this.ab,"card")};
n.Xa=function(a){if(cn!=a){cn&&(this.hide(cn),cn=null);var b=y(this.show,this,a),c=parseInt(this.o(a,"delay-show"),10);b=ei(b,-1<c?c:200);pi(a,"card-timer",b.toString());cn=a;a.alt&&(pi(a,"card-alt",a.alt),a.alt="");a.title&&(pi(a,"card-title",a.title),a.title="")}};
n.Za=function(a){var b=parseInt(this.o(a,"card-timer"),10);fi(b);this.M(a).isCardHidable=!0;b=parseInt(this.o(a,"delay-hide"),10);b=-1<b?b:200;ei(y(this.Hb,this,a),b);if(b=this.o(a,"card-alt"))a.alt=b;if(b=this.o(a,"card-title"))a.title=b};
n.Hb=function(a){this.M(a).isCardHidable&&(this.hide(a),cn=null)};
n.Ya=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
n.ab=function(a){a&&this.hide(a.cardTargetNode)};
var cn=null;function dn(a,b,c,d,e,f){this.i=a;this.D=null;this.l=I("yt-dialog-fg",this.i)||this.i;if(a=I("yt-dialog-title",this.l)){var g="yt-dialog-title-"+Ka(this.l);a.setAttribute("id",g);this.l.setAttribute("aria-labelledby",g)}this.l.setAttribute("tabindex","-1");this.ja=I("yt-dialog-focus-trap",this.i);this.ka=!1;this.A=new O;this.F=[];this.F.push(Ui(this.i,y(this.Yb,this),"yt-dialog-dismiss"));this.F.push(T(this.ja,"focus",y(this.Cb,this),!0));en(this);this.xa=b;this.tb=c;this.ya=d;this.O=e;this.ub=f;
this.C=this.B=null}
var fn={LOADING:"loading",Bc:"content",Cc:"working"};function gn(a,b){a.sa()||a.A.subscribe("post-all",b)}
function en(a){a=I("yt-dialog-fg-content",a.i);var b=[];mb(fn,function(c){b.push("yt-dialog-show-"+c)});
lh(a,b);N(a,"yt-dialog-show-content")}
n=dn.prototype;
n.show=function(){if(!this.sa()){this.D=document.activeElement;if(!this.ya){this.j||(this.j=H("yt-dialog-bg"),this.j||(this.j=Bd(document,"div"),this.j.id="yt-dialog-bg",ih(this.j,"yt-dialog-bg"),document.body.appendChild(this.j)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=vd(a).height,wd(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=
b>a?b>e?b:e:b<e?b:e}else c=0}this.j.style.height=c+"px";Nj(this.j)}this.Ra();c=hn(this);jn(c);this.B=T(document,"keydown",y(this.Qb,this));c=this.i;d=ki("player-added",this.Ra,this);pi(c,"player-ready-pubsub-key",d);this.tb&&(this.C=T(document,"click",y(this.ec,this)));Nj(this.i);this.l.setAttribute("tabindex","0");kn(this);this.O||N(document.body,"yt-dialog-active");qm(pm.G());Cm(an.G());Cm(bn.G());ni("yt-ui-dialog-show-complete",this)}};
function ln(){var a=rd("yt-dialog");return cb(a,function(b){return Mj(b)})}
n.Ra=function(){if(!this.ub){var a=this.i;mh(document.body,"hide-players",!0);a&&mh(a,"preserve-players",!0)}};
function hn(a){var b=sd(document,"IFRAME",null,a.i);C(b,function(c){var d=ri(c,"onload");d&&(d=x(d))&&T(c,"load",d);if(d=ri(c,"src"))c.src=d},a);
return hb(b)}
function jn(a){C(document.getElementsByTagName("iframe"),function(b){-1==Ya(a,b)&&N(b,"iframe-hid")})}
function mn(){var a=rd("iframe-hid");C(a,function(b){kh(b,"iframe-hid")})}
n.Yb=function(a){a=a.currentTarget;a.disabled||(a=ri(a,"action")||"",this.dismiss(a))};
n.dismiss=function(a){if(!this.sa()){this.A.N("pre-all");this.A.N("pre-"+a);Oj(this.i);Cm(an.G());Cm(bn.G());this.l.setAttribute("tabindex","-1");ln()||(Oj(this.j),this.O||kh(document.body,"yt-dialog-active"),Mi(),mn());this.B&&(Wi(this.B),this.B=null);this.C&&(Wi(this.C),this.C=null);var b=this.i;if(b){var c=ri(b,"player-ready-pubsub-key");c&&(mi(c),si(b,"player-ready-pubsub-key"))}this.A.N("post-all");ni("yt-ui-dialog-hide-complete",this);"cancel"==a&&ni("yt-ui-dialog-cancelled",this);this.A&&this.A.N("post-"+
a);this.D&&this.D.focus()}};
n.setTitle=function(a){Hd(I("yt-dialog-title",this.i),a)};
n.Qb=function(a){ei(y(function(){this.xa||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&M(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
n.ec=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
n.sa=function(){return this.ka};
n.dispose=function(){Mj(this.i)&&this.dismiss("dispose");Wi(this.F);this.F.length=0;ei(y(function(){this.D=null},this),0);
this.ja=this.l=null;this.A.dispose();this.A=null;this.ka=!0};
n.Cb=function(a){a.stopPropagation();kn(this)};
function kn(a){ei(y(function(){this.l&&this.l.focus()},a),0)}
A("yt.ui.Dialog",dn);function nn(){aj.call(this,"overlay");this.A=this.j=this.l=this.i=null}
pa(nn,aj);n=nn.prototype;n.register=function(){V(this,"click",this.Ea,"target");V(this,"click",this.hide,"close");on(this)};
n.unregister=function(){aj.prototype.unregister.call(this);W(this,"click",this.Ea,"target");W(this,"click",this.hide,"close");this.A&&(mi(this.A),this.A=null);this.j&&(Wi(this.j),this.j=null)};
n.Ea=function(a){if(!this.i||!Mj(this.i.i)){var b=this.M(a);a=pn(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.o(b,"disable-shortcuts")||!1,d=!!this.o(b,"disable-outside-click-dismiss")||!1;this.i=new dn(a,c);this.l=b;var e=I("yt-dialog-fg",a);if(e){var f=this.o(b,"overlay-class")||"",g=this.o(b,"overlay-style")||"default",h=this.o(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(U(this,g));f.push(U(this,h));jh(e,f)}this.i.show();ni("yt-uix-kbd-nav-move-to",e||a);on(this);c||
d||(c=y(function(k){M(k.target,"yt-dialog-base")&&qn(this)},this),a=I("yt-dialog-base",a),this.j=T(a,"click",c));
this.aa(b,"overlay-shown");ni("yt-uix-overlay-shown",b)}}};
function on(a){a.A||(a.A=ki("yt-uix-overlay-hide",rn));a.i&&gn(a.i,function(){var b=nn.G();b.l=null;b.i.dispose();b.i=null})}
function qn(a){if(a.i){var b=a.l;a.i.dismiss("overlayhide");b&&a.aa(b,"overlay-hidden");a.l=null;a.j&&(Wi(a.j),a.j=null);a.i=null}}
function pn(a,b){var c;if(a)if(c=I("yt-dialog",a)){var d=H("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=J(b,"yt-dialog"));return c}
function sn(){var a=nn.G();if(a.l)a=I("yt-dialog-fg-content",a.l.overlayContentNode);else a:{if(a=rd("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=J(a[b],"yt-dialog");if(Mj(c)){a=a[b];break a}}a=null}return a}
n.hide=function(a){a&&a.disabled||ni("yt-uix-overlay-hide")};
function rn(){qn(nn.G())}
n.show=function(a){this.Ea(a)};
Ga(nn);var tn={},un=[];function vn(a){a=J(a,"yt-uix-button-subscription-container");a=I("unsubscribe-confirmation-overlay-container",a);return I("yt-dialog",a)}
function wn(a,b){Wi(un);un.length=0;tn[b]||(tn[b]=vn(a));nn.G().show(tn[b]);var c=sn();return new Cg(function(d){un.push(Ui(c,function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function xn(){var a=P("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!P("SESSION_INDEX")&&!P("LOGGED_IN"))}
;function yn(){aj.call(this,"subscription-button")}
pa(yn,aj);n=yn.prototype;n.register=function(){V(this,"click",this.Ca);cj(this,wj,this.hb);cj(this,xj,this.gb);cj(this,yj,this.cc);cj(this,Bj,this.hb);cj(this,Cj,this.gb);cj(this,Dj,this.dc);cj(this,Fj,this.ac);cj(this,Gj,this.Zb)};
n.unregister=function(){W(this,"click",this.Ca);aj.prototype.unregister.call(this)};
n.isSubscribed=function(a){return!!this.o(a,"is-subscribed")};
n.Ca=function(a){var b=this.o(a,"href"),c=this.o(a,"insecure");if(b)a=this.o(a,"target")||"_self",window.open(b,a);else if(!c)if(xn()){b=this.o(a,"channel-external-id");c=this.o(a,"clicktracking");var d=zn(this,a),e=this.o(a,"parent-url");if(this.o(a,"is-subscribed")){var f=this.o(a,"subscription-id"),g=this.o(a,"unsubscribe-params"),h=new sj(b,f,d,a,c,e,g);this.o(a,"show-unsub-confirm-dialog")?wn(a,b).then(function(){S(Aj,h)}):S(Aj,h)}else a=this.o(a,"params"),S(vj,new qj(b,d,c,e,void 0,a))}else An(this,
a)};
n.hb=function(a){this.Z(a.i,this.lb,!0)};
n.gb=function(a){this.Z(a.i,this.lb,!1)};
n.cc=function(a){this.Z(a.i,this.mb,!0,a.j)};
n.dc=function(a){this.Z(a.i,this.mb,!1)};
n.ac=function(a){this.Z(a.i,this.Ab)};
n.Zb=function(a){this.Z(a.i,this.yb)};
n.mb=function(a,b,c){b?(pi(a,"is-subscribed","true"),c&&pi(a,"subscription-id",c)):(si(a,"is-subscribed"),si(a,"subscription-id"));Bn(this,a)};
function zn(a,b){if(!a.o(b,"ypc-enabled"))return null;var c=a.o(b,"ypc-item-type"),d=a.o(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
n.lb=function(a,b){var c=J(a,"yt-uix-button-subscription-container");mh(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Bn(a,b){var c=a.o(b,"style-type"),d=!!a.o(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;mh(b,"yt-uix-button-subscribe"+c,!d);mh(b,e,d);a.o(b,"subscriber-count-tooltip")&&!a.o(b,"subscriber-count-show-when-subscribed")&&(c=U(Pj.G()),mh(b,c,!d),b.title=d?"":a.o(b,"subscriber-count-title"));d?ei(function(){N(b,"hover-enabled")},1E3):kh(b,"hover-enabled")}
n.Ab=function(a){var b=!!this.o(a,"ypc-item-type"),c=!!this.o(a,"ypc-item-id");!this.o(a,"ypc-enabled")&&b&&c&&(N(a,"ypc-enabled"),pi(a,"ypc-enabled","true"))};
n.yb=function(a){this.o(a,"ypc-enabled")&&(kh(a,"ypc-enabled"),si(a,"ypc-enabled"))};
function Cn(a,b){var c=rd(U(a));return Za(c,function(d){return b==this.o(d,"channel-external-id")},a)}
n.vb=function(a,b,c){var d=kb(arguments,2);C(a,function(e){b.apply(this,gb(e,d))},this)};
n.Z=function(a,b,c){var d=Cn(this,a);d=gb([d],kb(arguments,1));this.vb.apply(this,d)};
function An(a,b){var c=y(function(d){d.discoverable_subscriptions&&Zh("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.Ca(b)},a);
Xj(c)}
Ga(yn);function Dn(a,b,c){c=void 0===c?{}:c;var d=gm;P("ytLoggingEventsDefaultDisabled",!1)&&gm==gm&&(d=null);xk(a,b,d,c)}
;var En=[{Wa:function(a){return"Cannot read property '"+a.key+"'"},
Da:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Wa:function(a){return"Cannot call '"+a.key+"'"},
Da:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function Fn(){this.i=[];this.j=[]}
var Gn;var Hn=new O;function In(a,b,c,d){c+="."+a;a=Jn(b);d[c]=a;return c.length+a.length}
function Jn(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Kn=new Set,Ln=0,Mn=0,Nn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function On(a){Pn(a)}
function Qn(a){Pn(a,"WARNING")}
function Pn(a,b){var c=void 0===c?{}:c;c.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var d=c||{};c=void 0===b?"ERROR":b;c=void 0===c?"ERROR":c;var e=void 0===e?!1:e;if(a){if(X("console_log_js_exceptions")){var f=[];f.push("Name: "+a.name);f.push("Message: "+a.message);a.hasOwnProperty("params")&&f.push("Error Params: "+JSON.stringify(a.params));f.push("File name: "+a.fileName);f.push("Stacktrace: "+a.stack);window.console.log(f.join("\n"),a)}if((!X("web_yterr_killswitch")||
window&&window.yterr||e)&&!(5<=Ln)&&0!==a.sampleWeight){var g=dd(a);e=g.message||"Unknown Error";f=g.name||"UnknownError";var h=g.stack||a.i||"Not available";if(h.startsWith(f+": "+e)){var k=h.split("\n");k.shift();h=k.join("\n")}k=g.lineNumber||"Not available";g=g.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0,m=0;m<a.args.length;m++){var p=a.args[m],q="params."+m;l+=q.length;if(p)if(Array.isArray(p))for(var r=d,v=0;v<p.length&&!(p[v]&&(l+=In(v,p[v],q,r),
500<l));v++);else if("object"===typeof p)for(r in r=void 0,v=d,p){if(p[r]&&(l+=In(r,p[r],q,v),500<l))break}else d[q]=Jn(p),l+=d[q].length;else d[q]=Jn(p),l+=d[q].length;if(500<=l)break}else if(a.hasOwnProperty("params")&&a.params)if(p=a.params,"object"===typeof a.params)for(m in q=0,p){if(p[m]&&(l="params."+m,r=Jn(p[m]),d[l]=r,q+=l.length+r.length,500<q))break}else d.params=Jn(p);navigator.vendor&&!d.hasOwnProperty("vendor")&&(d.vendor=navigator.vendor);d={message:e,name:f,lineNumber:k,fileName:g,
stack:h,params:d};e=Number(a.columnNumber);isNaN(e)||(d.lineNumber=d.lineNumber+":"+e);e=u(En);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.Da[d.name])for(g=u(f.Da[d.name]),k=g.next();!k.done;k=g.next())if(h=k.value,k=d.message.match(h.regexp)){d.params["params.error.original"]=k[0];g=h.groups;h={};for(m=0;m<g.length;m++)h[g[m]]=k[m+1],d.params["params.error."+g[m]]=k[m+1];d.message=f.Wa(h);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(d);if(!(Kn.has(d.message)||0<=d.stack.indexOf("/YouTubeCenter.js")||
0<=d.stack.indexOf("/mytube.js"))){"ERROR"===c?(Hn.N("handleError",d),X("record_app_crashed_web")&&0===Mn&&Dn("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"}),Mn++):"WARNING"===c&&Hn.N("handleWarning",d);if(X("kevlar_gel_error_routing")){e=c;a:{f=u(Nn);for(k=f.next();!k.done;k=f.next())if(ql(k.value.toLowerCase())){f=!0;break a}f=!1}if(!f){k={stackTrace:d.stack};d.fileName&&(k.filename=d.fileName);f=d.lineNumber&&d.lineNumber.split?d.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?
2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(k.lineNumber=Number(f[0]),k.columnNumber=Number(f[1])):k.lineNumber=Number(f[0]));Gn||(Gn=new Fn);f=Gn;g=d.message;h=d.name;a:{m=u(f.j);for(p=m.next();!p.done;p=m.next())if(p=p.value,d.message&&d.message.match(p.i)){m=p.weight;break a}m=u(f.i);for(p=m.next();!p.done;p=m.next())if(p=p.value,p.i(d)){m=p.weight;break a}m=1}g={level:"ERROR_LEVEL_UNKNOWN",message:g,errorClassName:h,sampleWeight:m};"ERROR"===e?g.level="ERROR_LEVEL_ERROR":"WARNING"===
e&&(g.level="ERROR_LEVEL_WARNNING");e={isObfuscated:!0,browserStackInfo:k};k={pageUrl:window.location.href};P("FEXP_EXPERIMENTS")&&(k.experimentIds=P("FEXP_EXPERIMENTS"));k.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+f.j.length+"&cb="+f.i.length},{key:"client.params.serviceWorker",value:"false"}];if(f=d.params)for(h=u(Object.keys(f)),m=h.next();!m.done;m=h.next())m=m.value,k.kvPairs.push({key:"client."+m,value:String(f[m])});f=P("SERVER_NAME",void 0);h=P("SERVER_VERSION",void 0);
f&&h&&(k.kvPairs.push({key:"server.name",value:f}),k.kvPairs.push({key:"server.version",value:h}));Dn("clientError",{errorMetadata:k,stackTrace:e,logMessage:g});ok()}}if(!X("suppress_error_204_logging")){e=d.params||{};c={Fa:{a:"logerror",t:"jserror",type:d.name,msg:d.message.substr(0,250),line:d.lineNumber,level:c,"client.name":e.name},K:{url:P("PAGE_NAME",window.location.href),file:d.fileName},method:"POST"};e.version&&(c["client.version"]=e.version);if(c.K){d.stack&&(c.K.stack=d.stack);f=u(Object.keys(e));
for(k=f.next();!k.done;k=f.next())k=k.value,c.K["client."+k]=e[k];if(e=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=u(Object.keys(e)),k=f.next();!k.done;k=f.next())k=k.value,c.K[k]=e[k];e=P("SERVER_NAME",void 0);f=P("SERVER_VERSION",void 0);e&&f&&(c.K["server.name"]=e,c.K["server.version"]=f)}Kk(P("ECATCHER_REPORT_HOST","")+"/error_204",c)}Kn.add(d.message);Ln++}}}}
;function Rn(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Sn(a)||c.some(function(e){return!Sn(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Tn(a,d.value);return a}
function Tn(a,b){for(var c in b)if(Sn(b[c])){if(c in a&&!Sn(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Tn(a[c],b[c])}else if(Un(b[c])){if(c in a&&!Un(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Vn(a[c],b[c])}else a[c]=b[c];return a}
function Vn(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,Sn(d)?a.push(Tn({},d)):Un(d)?a.push(Vn([],d)):a.push(d);return a}
function Sn(a){return"object"===typeof a&&!Array.isArray(a)}
function Un(a){return"object"===typeof a&&Array.isArray(a)}
;var Wn={},Xn=0;
function Yn(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!ql("cobalt"))a&&(a instanceof Gb||(a="object"==typeof a&&a.ga?a.ea():String(a),Lb.test(a)?a=new Gb(a,Hb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Kb))&&Jb.test(b[1])?new Gb(a,Hb):null)),a=Ib(a||Mb),"about:invalid#zClosurez"===a||a.startsWith("data")?a="":(a instanceof Ub||(b="object"==typeof a,c=null,b&&a.j&&(c=a.i()),a=Xb(wb(b&&a.ga?a.ea():String(a)),c)),a=Wb(a).toString(),a=encodeURIComponent(String(rh(a)))),/^[\s\xa0]*$/.test(a)||(a=
Ad("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),qd(a).body.appendChild(a)));else if(e)Lk(a,b,"POST",e,d);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Lk(a,b,"GET","",d);else{b:{try{var f=new Wa({url:a});if(f.l&&f.j||f.A){var g=ec(fc(5,a)),h;if(!(h=!g||!g.endsWith("/aclk"))){var k=a.search(oc),l=nc(a,0,"ri",k);if(0>l)var m=null;else{var p=a.indexOf("&",l);if(0>p||p>k)p=k;l+=3;m=decodeURIComponent(a.substr(l,p-l).replace(/\+/g," "))}h="1"!==m}var q=
!h;break b}}catch(r){}q=!1}q?Zn(a)?(b&&b(),c=!0):c=!1:c=!1;c||$n(a,b)}}
function Zn(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function $n(a,b){var c=new Image,d=""+Xn++;Wn[d]=c;c.onload=c.onerror=function(){b&&Wn[d]&&b();delete Wn[d]};
c.src=a}
;function ao(a,b){Q.call(this,1,arguments)}
pa(ao,Q);function bo(a,b){Q.call(this,1,arguments)}
pa(bo,Q);var co=new R("aft-recorded",ao),eo=new R("timing-sent",bo);var fo=window;function go(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var ho=fo.performance||fo.mozPerformance||fo.msPerformance||fo.webkitPerformance||new go;var io=!1;y(ho.clearResourceTimings||ho.webkitClearResourceTimings||ho.mozClearResourceTimings||ho.msClearResourceTimings||ho.oClearResourceTimings||Fa,ho);function jo(a){var b=ko(a);if(b.aft)return b.aft;a=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function lo(a){var b;(b=x("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},A("ytcsi."+(a||"")+"data_",b));return b}
function mo(a){a=lo(a);a.info||(a.info={});return a.info}
function ko(a){a=lo(a);a.tick||(a.tick={});return a.tick}
function no(a){var b=lo(a).nonce;b||(b=im(),lo(a).nonce=b);return b}
function oo(a){var b=ko(a||""),c=jo(a);c&&!io&&(S(co,new ao(Math.round(c-b._start),a)),io=!0)}
;function po(){var a=x("ytcsi.debug");a||(a=[],A("ytcsi.debug",a),A("ytcsi.reference",{}));return a}
function qo(a){a=a||"";var b=x("ytcsi.reference");b||(po(),b=x("ytcsi.reference"));if(b[a])return b[a];var c=po(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var ro=w.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",ro);function so(){this.i=0}
function to(){so.i||(so.i=new so);return so.i}
so.prototype.tick=function(a,b,c){uo(this,"tick_"+a+"_"+b)||Dn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
so.prototype.info=function(a,b){var c=Object.keys(a).join("");uo(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,Dn("latencyActionInfo",c))};
so.prototype.span=function(a,b){var c=Object.keys(a).join("");uo(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Dn("latencyActionSpan",a))};
function uo(a,b){ro[b]=ro[b]||{count:0};var c=ro[b];c.count++;c.time=Y();a.i||(a.i=wi(function(){var d=Y(),e;for(e in ro)ro[e]&&6E4<d-ro[e].time&&delete ro[e];a&&(a.i=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new rl("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Qn(c)),!0):!1}
;var Z={},vo=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid=
"requestIds",Z.GetBrowse_rid="requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",
Z.ncnp="webInfo.nonPreloadedNodeCount",Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",
Z.ssdm="shellStartupDurationMs",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",
Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),wo="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),xo={},yo=(xo.ccs="CANARY_STATE_",
xo.mver="MEASUREMENT_VERSION_",xo.pis="PLAYER_INITIALIZED_STATE_",xo.yt_pt="LATENCY_PLAYER_",xo.pa="LATENCY_ACTION_",xo.yt_vst="VIDEO_STREAM_TYPE_",xo),zo="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Ao(a){return!!P("FORCE_CSI_ON_GEL",!1)||X("csi_on_gel")||!!lo(a).useGel}
function Bo(a){a=lo(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Co(a,b,c){if(null!==b)if(mo(c)[a]=b,Ao(c)){var d=b;b=Bo(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in vo){b=vo[a];eb(wo,b)&&(d=!!d);a in yo&&"string"===typeof d&&(d=yo[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Rn({},e)}else eb(zo,a)||Qn(new rl("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Ao(c)&&(b=qo(c||""),Rn(b.info,f),b=Bo(c),"gelInfos"in b||(b.gelInfos={}),Rn(b.gelInfos,f),c=no(c),to().info(f,c))}else qo(c||"").info[a]=b}
function Do(a,b,c){var d=ko(c);if(X("use_first_tick")&&Eo(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;ho.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),ho.mark(e))}e=b||Y();d[a]=e;e=Bo(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||Y();if(Ao(c)){qo(c||"").tick[a]=b||Y();e=no(c);if("_start"===a){var f=to();uo(f,"baseline_"+e)||Dn("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else to().tick(a,e,b);oo(c);e=!0}else e=!1;if(!e){if(!x("yt.timing."+(c||"")+"pingSent_")&&
(f=P((c||"")+"TIMING_ACTION",void 0),e=ko(c),x("ytglobal.timing"+(c||"")+"ready_")&&f&&Eo("_start")&&jo(c)))if(oo(c),c)Fo(c);else{f=!0;var g=P("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&Fo(c)}qo(c||"").tick[a]=b||Y()}return d[a]}
function Eo(a,b){var c=ko(b);return a in c}
function Fo(a){if(!Ao(a)){var b=ko(a),c=mo(a),d=b._start,e=P("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:P((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=jo(a);var h=ko(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&mo(a).yt_pvis&&"youtube"===e&&(Co("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=Y();m={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),m[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;X("debug_csi_data")&&(c=x("yt.timing.csiData"),c||(c=[],A("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var r=void 0===r?"":r;Zn(f,r)||Yn(f,void 0,void 0,void 0,r)}else Yn(f);A("yt.timing."+(a||"")+"pingSent_",!0);S(eo,new bo(m.aft+(Number(g)||0),a))}}
var Go=window;Go.ytcsi&&(Go.ytcsi.info=Co,Go.ytcsi.tick=Do);new Ug(Ho,1E3);function Ho(){Do("vptl",0);Do("vpl",0)}
;function Io(a){this.i=a;this.P=null;P("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Jo(this),T(this.i,"mouseover",y(this.A,this)),T(this.i,"mouseout",y(this.za,this)),T(this.i,"click",y(this.za,this)),Ei(yj,Pa(this.j,!0),this),Ei(Dj,Pa(this.j,!1),this),Ko(this))}
function Jo(a){var b={url:P("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.i,relayOpen:"-1"};a=y(a.l,a);mj().open(b,a)}
function Ko(a){xn()||ki("LOGGED_IN",function(){this.P&&(this.za(),this.P.close(),this.P=null,Jo(this))},a)}
Io.prototype.l=function(a){this.P=a;a=yn.G().isSubscribed(this.i);this.j(a)};
Io.prototype.A=function(){this.P&&this.P.restyle({show:!0})};
Io.prototype.za=function(){this.P&&this.P.restyle({show:!1})};
Io.prototype.j=function(a){if(this.P){a={isSubscribed:a};try{this.P.send("msg-hovercard-subscription",a,void 0,x("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function Lo(){lj(function(){var a=Be(H("yt-subscribe"));a={width:a.width,height:a.height};var b=Mo;mj().ready(a,null,b)})}
function Mo(a){if(a.length&&a[a.length-1]){a=a[a.length-1].eurl;var b=H("yt-subscribe"),c=yn.G();if(b=I(U(c),b))a&&(yn.G(),pi(b,"parent-url",a)),new Io(b)}}
;var No=x("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",No);function Oo(){this.i=P("ALT_PREF_COOKIE_NAME","PREF");this.j=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=id.get(""+this.i,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(No[d]=c.toString())}}}
n=Oo.prototype;n.get=function(a,b){Po(a);Qo(a);var c=Ro(a);return null!=c?c:b?b:""};
n.set=function(a,b){Po(a);Qo(a);if(null==b)throw Error("ExpectedNotNull");No[a]=b.toString()};
function So(a){var b=Ro("f"+(Math.floor(a/31)+1));return!!(((null!=b&&/^[A-Fa-f0-9]+$/.test(b)?parseInt(b,16):null)||0)&1<<a%31)}
n.remove=function(a){Po(a);Qo(a);delete No[a]};
n.save=function(){Tk(this.i,this.dump(),63072E3,this.j)};
n.clear=function(){for(var a in No)delete No[a]};
n.dump=function(){var a=[],b;for(b in No)a.push(b+"="+encodeURIComponent(String(No[b])));return a.join("&")};
function Qo(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Po(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ro(a){return void 0!==No[a]?No[a].toString():null}
Ga(Oo);var To=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),Uo=["/fashion","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ","/channel/UCTApTkbpcqiLL39WUlne4ig","/channel/UCW5PCzG3KQvbOX4zc3KY0lQ"];function Vo(){var a=void 0===a?window.location.href:a;if(X("kevlar_disable_theme_param"))return null;var b=ec(fc(5,a));if(Wo(b))return"USER_INTERFACE_THEME_DARK";try{var c=ij(a).theme;return To.get(c)||null}catch(d){}return null}
function Wo(a){var b=Uo.map(function(c){return c.toLowerCase()});
return!X("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1}
;function Xo(){this.i={};var a=id.get("CONSISTENCY",void 0);a&&Yo(this,{encryptedTokenJarContents:a})}
Xo.prototype.j=function(a,b){var c,d,e,f=null===(d=null===(c=b.Sa.context)||void 0===c?void 0:c.request)||void 0===d?void 0:d.consistencyTokenJars,g=null===(e=a.responseContext)||void 0===e?void 0:e.consistencyTokenJar;f&&g&&this.replace(f,g)};
Xo.prototype.replace=function(a,b){for(var c=u(a),d=c.next();!d.done;d=c.next())delete this.i[d.value.encryptedTokenJarContents];Yo(this,b)};
function Yo(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
Tk("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;function Zo(){var a=P("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===P("INNERTUBE_CLIENT_NAME")&&(this.localStorage=$o(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
function ap(){Zo.i||(Zo.i=new Zo);return Zo.i}
Zo.prototype.j=function(a){var b,c,d=null===(b=a.responseContext)||void 0===b?void 0:b.locationPlayabilityToken;void 0!==d&&(this.locationPlayabilityToken=d,this.i=void 0,"TVHTML5"===(null===(c=a.responseContext)||void 0===c?void 0:c.clientName)?(this.localStorage=$o(this))&&this.localStorage.set("yt-location-playability-token",d,15552E3):Tk("YT_CL",JSON.stringify({Nc:d}),15552E3,void 0,!0))};
function $o(a){return void 0===a.localStorage?new Uk("yt-client-location"):a.localStorage}
;function bp(a){var b=this;this.i=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c})}
;var cp={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"};function dp(a,b,c){var d=ep.i;this.i=a;this.B=d;this.A=b;this.j=On;this.l=c}
function fp(a){if(!gp){var b={Ma:{playlistEditEndpoint:hp,subscribeEndpoint:ip,unsubscribeEndpoint:jp,modifyChannelNotificationPreferenceEndpoint:kp}},c=X("web_enable_client_location_service")?ap():void 0,d=[];c&&d.push(c);if(void 0===e){$k.i||($k.i=new $k);var e=$k.i}ep.i||(ep.i=new ep);dp.i=new dp(b,e,d);gp=dp.i}e=gp;var f=void 0===f?bl:f;a:{var g,h;if((null===(g=a.signalServiceEndpoint)||void 0===g?0:g.signal)&&e.i.fc&&(g=e.i.fc[a.signalServiceEndpoint.signal])){var k=new g;break a}if((null===
(h=a.continuationCommand)||void 0===h?0:h.request)&&e.i.wb&&(h=e.i.wb[a.continuationCommand.request])){k=new h;break a}for(k in a)if(e.i.Ma[k]&&(h=e.i.Ma[k])){k=new h;break a}k=void 0}if(!k)return e.j(new rl("Error: No request builder found for command.",a)),Hg({});var l;h=void 0;h=void 0===h?{}:h;f=void 0===f?bl:f;var m;b=a.clickTrackingParams;var p=void 0===p?!1:p;if(g=P("INNERTUBE_CONTEXT")){g=rb(g);var q;g.client||(g.client={});c=g.client;"MWEB"===c.clientName&&(c.clientFormFactor=P("IS_TABLET")?
"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");c.screenWidthPoints=window.innerWidth;c.screenHeightPoints=window.innerHeight;c.screenPixelDensity=Math.round(window.devicePixelRatio||1);c.screenDensityFloat=window.devicePixelRatio||1;c.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var r=void 0===r?!1:r;Oo.G();d="USER_INTERFACE_THEME_LIGHT";So(165)?d="USER_INTERFACE_THEME_DARK":So(174)?d="USER_INTERFACE_THEME_LIGHT":!X("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&
window.matchMedia("(prefers-color-scheme: dark)").matches&&(d="USER_INTERFACE_THEME_DARK");r=r?d:Vo()||d;c.userInterfaceTheme=r;if(X("web_log_connection")&&!p){c:{if(d=(r=window.navigator)?r.connection:void 0){r=cp[d.type||"unknown"]||"CONN_UNKNOWN";d=cp[d.i||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===r&&"CONN_UNKNOWN"!==d&&(r=d);if("CONN_UNKNOWN"!==r)break c;if("CONN_UNKNOWN"!==d){r=d;break c}}r=void 0}r&&(c.connectionType=r)}X("web_populate_graft_url_killswitch")||"MWEB"!==c.clientName&&
"WEB"!==c.clientName||(c.mainAppWebInfo={graftUrl:w.location.href});X("kevlar_woffle")&&bp.i&&("MWEB"===c.clientName||"WEB"===c.clientName)&&(g.client.mainAppWebInfo||(g.client.mainAppWebInfo={}),g.client.mainAppWebInfo.pwaInstallabilityStatus=bp.i.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN");X("web_populate_time_zone_itc_killswitch")||(r="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:void 0,r&&(c.timeZone=r));(r="MWEB"===c.clientName||
X("it_context_exp_goog_cookie_killswitch")?id.get("EXPERIMENTS_DEBUG",void 0):id.get("EXPERIMENTS_DEBUG"))?c.experimentsToken="ZERO"===r?"GgIQAQ%3D%3D":r:delete c.experimentsToken;r=bk();Xo.i||(Xo.i=new Xo);c=nb(Xo.i.i);g.request=Object.assign(Object.assign({},g.request),{internalExperimentFlags:r,consistencyTokenJars:c});c=Oo.G();r=So(58);c=c.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);c&&(g.user.lockedSafetyMode=!0);(r=P("DELEGATED_SESSION_ID"))&&!X("pageid_as_header_web")&&
(g.user.onBehalfOfUser=r);!p&&(p=nm())&&(g.clientScreenNonce=p);b&&(g.clickTracking={clickTrackingParams:b});X("web_enable_client_location_service")&&(p=ap(),g.client||(g.client={}),p.i?(g.client.locationInfo||(g.client.locationInfo={}),g.client.locationInfo.latitudeE7=1E7*p.i.coords.latitude,g.client.locationInfo.longitudeE7=1E7*p.i.coords.longitude,g.client.locationInfo.horizontalAccuracyMeters=p.i.coords.accuracy):p.locationPlayabilityToken&&(g.client.locationPlayabilityToken=p.locationPlayabilityToken));
if(X("web_enable_ad_signals_in_it_context")){p=null===(q=g.adSignalsInfo)||void 0===q?void 0:q.consentBumpParams;q=yk(void 0);b=q.bid;delete q.bid;g.adSignalsInfo={params:[],bid:b};q=u(Object.entries(q));for(b=q.next();!b.done;b=q.next())r=u(b.value),b=r.next().value,r=r.next().value,null===(m=g.adSignalsInfo.params)||void 0===m?void 0:m.push({key:b,value:""+r});!id.get("CONSENT","").startsWith("YES+")&&p&&(g.adSignalsInfo.consentBumpParams=p)}m=g}else Pn(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
m={};m={context:m};if(q=k.l(a)){k.i(m,q,h);var v;q="/youtubei/v1/"+lp(k.j());(k=null===(v=null===(l=a.commandMetadata)||void 0===l?void 0:l.webCommandMetadata)||void 0===v?void 0:v.apiUrl)&&(q=k);q=jj(q,{key:P("INNERTUBE_API_KEY")},!1);if(l=P("INNERTUBE_HOST_OVERRIDE"))l=String(l),v=String,h=q.match(dc),q=h[5],k=h[6],h=h[7],p="",q&&(p+=q),k&&(p+="?"+k),h&&(p+="#"+h),q=l+v(p);l=q;l={input:l,ia:{method:"POST",mode:kj(l)?"same-origin":"cors",credentials:kj(l)?"same-origin":"include"},Sa:m,config:Object.assign({},
void 0)};l.config.la?l.config.la.identity=f:l.config.la={identity:f}}else Pn(new rl("Error: Failed to create Request from Command.",a)),l=void 0;if(l)return Hg(mp(e,l));e.j(new rl("Error: Failed to build request for command.",a));return Hg({})}
function mp(a,b){return rc(a,function d(){var e=this,f,g,h,k,l,m;return Aa(d,function(p){switch(p.i){case 1:f=e;p.i=2;break;case 3:if((g=p.l)&&!g.isExpired())return p["return"](Promise.resolve(g.i()));case 2:h=JSON.stringify(b.Sa);if(e.A.i){k=np(b);p.i=4;break}return ta(p,op(b),5);case 5:k=p.l;case 4:return b.ia=Object.assign(Object.assign({},b.ia),{headers:k}),X("enable_get_account_switcher_endpoint_on_webfe")?(l=Object.assign({},b.ia),"POST"===b.ia.method&&(l=Object.assign(Object.assign({},l),{body:h}))):
l=Object.assign(Object.assign({},b.ia),{body:h}),m=e.B.fetch(b.input,l),p["return"](m.then(function(q){if(q&&f.l)for(var r=u(f.l),v=r.next();!v.done;v=r.next())v.value.j(q,b);return Promise.resolve(q)}))}})})}
function op(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.la)||void 0===c?void 0:c.sessionIndex;return Hg(al({sessionIndex:a})).then(function(d){return Promise.resolve(Object.assign(Object.assign({},pp()),d))})}
function np(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.la)||void 0===c?void 0:c.sessionIndex;a=al({sessionIndex:a});return Object.assign(Object.assign({},pp()),a)}
function pp(){var a={"Content-Type":"application/json"},b=P("VISITOR_DATA");b&&(a["X-Goog-Visitor-Id"]=b);X("enable_get_account_switcher_endpoint_on_webfe")&&((b=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(a["X-Youtube-Client-Name"]=b),(b=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(a["X-Youtube-Client-Version"]=b));X("webfe_track_one_platform_auth_mismatch")&&(a["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1));return a}
;var qp=["notification/modify_channel_preference"],rp=["browse/edit_playlist"],sp=["subscription/subscribe"],tp=["subscription/unsubscribe"];var up={},vp=(up.WEB_UNPLUGGED="^unplugged/",up.WEB_UNPLUGGED_ONBOARDING="^unplugged/",up.WEB_UNPLUGGED_OPS="^unplugged/",up.WEB_UNPLUGGED_PUBLIC="^unplugged/",up.WEB_CREATOR="^creator/",up.WEB_KIDS="^kids/",up.WEB_EXPERIMENTS="^experiments/",up.WEB_MUSIC="^music/",up.WEB_REMIX="^music/",up.WEB_MUSIC_EMBEDDED_PLAYER="^music/",up.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",up);
function lp(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=vp[b];if(c){var d=new RegExp(c),e=u(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(vp).forEach(function(g){var h=u(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=u(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function wp(){}
;function ip(){}
pa(ip,wp);ip.prototype.j=function(){return sp};
ip.prototype.l=function(a){return a.subscribeEndpoint};
ip.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};function jp(){}
pa(jp,wp);jp.prototype.j=function(){return tp};
jp.prototype.l=function(a){return a.unsubscribeEndpoint};
jp.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};function kp(){}
pa(kp,wp);kp.prototype.j=function(){return qp};
kp.prototype.l=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
kp.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function hp(){}
pa(hp,wp);hp.prototype.j=function(){return rp};
hp.prototype.l=function(a){return a.playlistEditEndpoint};
hp.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function ep(){this.i=this.j=void 0}
ep.prototype.fetch=function(a,b){var c=this,d;if(null===(d=this.j)||void 0===d?0:d.A(a,b))return Hg(this.j.l(a,b)["catch"](function(f){Qn(f)}));
if(this.i){var e=ec(fc(5,qc(a)))||"/UNKNOWN_PATH";this.i.start(e)}e=new Request(a,b);return Hg(fetch(e).then(function(f){return xp(c,f)})["catch"](function(f){var g,h;
if(null===(g=c.j)||void 0===g?0:g.i(a,b))return f=c.j.j(a,b),null===(h=c.i)||void 0===h?void 0:h.success(),f;Qn(f)}))};
function xp(a,b){var c=X("enable_get_account_switcher_endpoint_on_webfe")?b.text().then(function(d){return JSON.parse(d.replace(")]}'",""))}):b.json();
b.redirected||b.ok?a.i&&a.i.success():(a.i&&a.i.failure(),c=c.then(function(d){Qn(new rl("Error: API fetch failed",b.status,b.url,d));return Object.assign(Object.assign({},d),{errorMetadata:{status:b.status}})}));
return c}
;var gp;function yp(a){Q.call(this,1,arguments)}
B(yp,Q);function zp(a,b){Q.call(this,2,arguments);this.j=a;this.i=b}
B(zp,Q);function Ap(a,b,c,d){Q.call(this,1,arguments);this.i=b;this.itemType=c||null;this.itemId=d||null}
B(Ap,Q);function Bp(a,b){Q.call(this,1,arguments);this.j=a;this.i=b||null}
B(Bp,Q);function Cp(a){Q.call(this,1,arguments)}
B(Cp,Q);var Dp=new R("ypc-core-load",yp),Ep=new R("ypc-guide-sync-success",zp),Fp=new R("ypc-purchase-success",Ap),Gp=new R("ypc-subscription-cancel",Cp),Hp=new R("ypc-subscription-cancel-success",Bp),Ip=new R("ypc-init-subscription",Cp);var Jp=[];function Kp(a){a.j?S(Dp,new yp(function(){S(Ip,new Cp(a.j))})):X("web_classic_innertube_subscription_update")?Lp(a.i,a.params):Mp(a.i,a.A,a.l,a.source,a.params)}
function Np(a){a.j?S(Dp,new yp(function(){S(Gp,new Cp(a.j))})):X("web_classic_innertube_subscription_update")?Op(a.i,a.params):Pp(a.i,a.B,a.A,a.l,a.source)}
function Qp(a){Rp(hb(a.i))}
function Sp(a){Tp(hb(a.i))}
function Up(a){Vp(a.l,a.j,a.i)}
function Wp(a){var b=a.itemId,c=a.i.subscriptionId;b&&c&&S(yj,new rj(b,c,a.i.channelInfo))}
function Xp(a){var b=a.i;mb(a.j,function(c,d){S(yj,new rj(d,c,b[d]))})}
function Yp(a){S(Dj,new oj(a.j.itemId));a.i&&a.i.length&&(Zp(a.i,Dj),Zp(a.i,Fj))}
function Lp(a,b){var c=new oj(a);S(wj,c);Jg(fp({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/subscription/subscribe"}},subscribeEndpoint:{channelIds:[a],params:b}}).then(function(){S(yj,new rj(a,Math.round(1E4*Math.random()).toString(),{thumbnail:"",title:"",url:"",Lc:a}))}),function(){S(xj,c)})}
function Mp(a,b,c,d,e){var f=new oj(a);S(wj,f);var g={};g.c=a;c&&(g.eurl=c);d&&(g.source=d);c={};(d=P("PLAYBACK_ID"))&&(c.plid=d);(d=P("EVENT_ID"))&&(c.ei=d);e&&(c.params=e);b&&$p(b,c);Kk("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Fa:g,K:c,onSuccess:function(h,k){var l=k.response;S(yj,new rj(a,l.id,l.channel_info));l.show_feed_privacy_dialog&&ni("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
ha:function(){S(xj,f)}})}
function Op(a,b){var c=new oj(a);S(Bj,c);Jg(fp({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/subscription/unsubscribe"}},unsubscribeEndpoint:{channelIds:[a],params:b}}).then(function(){S(Dj,c)}),function(){S(Cj,c)})}
function Pp(a,b,c,d,e){var f=new oj(a);S(Bj,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=P("PLAYBACK_ID"))&&(d.plid=a);(a=P("EVENT_ID"))&&(d.ei=a);c&&$p(c,d);Kk("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Fa:g,K:d,onSuccess:function(){S(Dj,f)},
ha:function(){S(Cj,f)}})}
function Vp(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new pj(a,b,c);Kk("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",K:d,onError:function(){S(Jj,e)},
onSuccess:function(){S(Ij,e)}})}}
function Rp(a){if(a.length){var b=jb(a,0,40);S("subscription-batch-subscribe-loading");Zp(b,wj);var c={};c.a=b.join(",");var d=function(){S("subscription-batch-subscribe-loaded");Zp(b,xj)};
Kk("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",K:c,onSuccess:function(e,f){d();var g=f.response,h=g.id;if(Array.isArray(h)&&h.length==b.length){var k=g.channel_info_map;C(h,function(l,m){var p=b[m];S(yj,new rj(p,l,k[p]))});
a.length?Rp(a):S("subscription-batch-subscribe-finished")}},
onError:function(){d();S("subscription-batch-subscribe-failure")}})}}
function Tp(a){if(a.length){var b=jb(a,0,40);S("subscription-batch-unsubscribe-loading");Zp(b,Bj);var c={};c.c=b.join(",");var d=function(){S("subscription-batch-unsubscribe-loaded");Zp(b,Cj)};
Kk("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",K:c,onSuccess:function(){d();Zp(b,Dj);a.length&&Tp(a)},
onError:function(){d()}})}}
function Zp(a,b){C(a,function(c){S(b,new oj(c))})}
function $p(a,b){var c=hj(a),d;for(d in c)b[d]=c[d]}
;A("yt.setConfig",Zh);A("yt.config.set",Zh);A("ytbin.www.subscribeembed.init",function(){var a=!0;Jp.push(Ei(vj,Kp),Ei(Aj,Np));a||Jp.push(Ei(zj,Kp),Ei(Ej,Np),Ei(tj,Qp),Ei(uj,Sp),Ei(Hj,Up),Ei(Fp,Wp),Ei(Hp,Yp),Ei(Ep,Xp));a=yn.G();var b=U(a);b in ej||(a.register(),bj(a,"yt-uix-init-"+b,a.init),bj(a,"yt-uix-dispose-"+b,a.dispose),ej[b]=a);Lo()});}).call(this);
