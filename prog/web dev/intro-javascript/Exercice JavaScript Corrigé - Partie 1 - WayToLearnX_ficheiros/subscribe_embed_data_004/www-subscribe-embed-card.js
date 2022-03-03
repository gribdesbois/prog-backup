(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
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
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
function v(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype}
function ma(){this.B=!1;this.j=null;this.A=void 0;this.i=1;this.D=this.o=0;this.l=null}
function na(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
ma.prototype.C=function(a){this.A=a};
function oa(a,b){a.l={ea:b,Ca:!0};a.i=a.o||a.D}
ma.prototype["return"]=function(a){this.l={"return":a};this.i=this.D};
function z(a,b,c){a.i=c;return{value:b}}
function pa(a){a.o=0;var b=a.l.ea;a.l=null;return b}
function qa(a){this.i=new ma;this.j=a}
function ra(a,b){na(a.i);var c=a.i.j;if(c)return sa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i["return"]);
a.i["return"](b);return ta(a)}
function sa(a,b,c,d){try{var e=b.call(a.i.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.B=!1,e;var f=e.value}catch(g){return a.i.j=null,oa(a.i,g),ta(a)}a.i.j=null;d.call(a.i,f);return ta(a)}
function ta(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.B=!1,{value:b.value,done:!1}}catch(c){a.i.A=void 0,oa(a.i,c)}a.i.B=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Ca)throw b.ea;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function ua(a){this.next=function(b){na(a.i);a.i.j?b=sa(a,a.i.j.next,b,a.i.C):(a.i.C(b),b=ta(a));return b};
this["throw"]=function(b){na(a.i);a.i.j?b=sa(a,a.i.j["throw"],b,a.i.C):(oa(a.i,b),b=ta(a));return b};
this["return"]=function(b){return ra(a,b)};
this[Symbol.iterator]=function(){return this}}
function va(a,b){var c=new ua(new qa(b));la&&a.prototype&&la(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:la?function(b,c){try{return la(b,c),!0}catch(d){return!1}}:null});
function wa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=wa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=wa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||la});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var xa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||xa});
t("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.C=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.A()})}this.i.push(g)};
var e=da.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.A=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.i=null};
c.prototype.o=function(g){this.l(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.oa),reject:g(this.A)}};
b.prototype.oa=function(g){if(g===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ra(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.na(g):this.B(g)}};
b.prototype.na=function(g){var h=void 0;try{h=g.then}catch(k){this.A(k);return}"function"==typeof h?this.sa(h,g):this.B(g)};
b.prototype.A=function(g){this.D(2,g)};
b.prototype.B=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.qa();this.N()};
b.prototype.qa=function(){var g=this;e(function(){if(g.Z()){var h=da.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.Z=function(){if(this.C)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.N=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.ra=function(g){var h=this.o();g.R(h.resolve,h.reject)};
b.prototype.sa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,q){return"function"==typeof p?function(w){try{l(p(w))}catch(x){m(x)}}:q}
var l,m,n=new b(function(p,q){l=p;m=q});
this.R(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.R=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).R(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(x){p[w]=x;q--;0==q&&l(p)}}
var p=[],q=0;do p.push(void 0),q++,d(k.value).R(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
function ya(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return ya(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return ya(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return ya(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==wa(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.i)};
b.prototype["delete"]=function(k){return d(k)&&A(k,g)&&A(k[g],this.i)?delete k[g][this.i]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ea(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.j[l];if(m&&A(h.j,l))for(var n=0;n<m.length;n++){var p=m[n];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:n,F:p}}return{id:l,list:m,index:-1,F:void 0}}
function e(h){this.j={};this.i=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.j[l.id]=[]);l.F?l.F.value=k:(l.F={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.F),this.i.previous.next=l.F,this.i.previous=l.F,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.F&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.j[h.id],h.F.previous.next=h.F.next,h.F.next.previous=h.F.previous,h.F.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.j={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).F};
e.prototype.get=function(h){return(h=d(this,h).F)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push(b[d]);return c}});
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
var B=this||self;function C(a,b){for(var c=a.split("."),d=b||B,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function za(){}
function Aa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ba(a){var b=Aa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Da(a,b,c){return a.call.apply(a.bind,arguments)}
function Ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Fa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Fa=Da:Fa=Ea;return Fa.apply(null,arguments)}
function D(a,b){var c=a.split("."),d=B;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Va=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ga(a){return a}
function Ha(a){var b=null,c=B.trustedTypes;if(!c||!c.createPolicy)return b;try{b=c.createPolicy(a,{createHTML:Ga,createScript:Ga,createScriptURL:Ga})}catch(d){B.console&&B.console.error(d.message)}return b}
;function Ia(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ia);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(Ia,Error);Ia.prototype.name="CustomError";function Ja(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;var Ka=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},La=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ma=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Na(a,b){var c=Ka(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Oa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Pa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Qa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ra(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Ra(a[c]);return b}
var Sa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ta(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Sa.length;f++)c=Sa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ua;var Va=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Wa(a,b){if(b)a=a.replace(Xa,"&amp;").replace(Ya,"&lt;").replace(Za,"&gt;").replace($a,"&quot;").replace(ab,"&#39;").replace(cb,"&#0;");else{if(!db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Xa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ya,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Za,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace($a,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ab,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(cb,"&#0;"))}return a}
var Xa=/&/g,Ya=/</g,Za=/>/g,$a=/"/g,ab=/'/g,cb=/\x00/g,db=/[\x00&<>"']/;function eb(a,b){return a<b?-1:a>b?1:0}
;function G(a,b){this.l=b===fb?a:""}
G.prototype.V=!0;G.prototype.S=function(){return this.l.toString()};
G.prototype.j=!0;G.prototype.i=function(){return 1};
var gb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,hb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,fb={},jb=new G("about:invalid#zClosurez",fb);var kb;a:{var lb=B.navigator;if(lb){var mb=lb.userAgent;if(mb){kb=mb;break a}}kb=""}function H(a){return-1!=kb.indexOf(a)}
;function nb(a,b,c){this.l=c===ob?a:"";this.o=b}
nb.prototype.j=!0;nb.prototype.i=function(){return this.o};
nb.prototype.V=!0;nb.prototype.S=function(){return this.l.toString()};
var ob={};function pb(a,b){void 0===Ua&&(Ua=Ha("goog#html"));var c=(c=Ua)?c.createHTML(a):a;return new nb(c,b,ob)}
;function qb(a){return a=Wa(a,void 0)}
;var rb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function sb(a){return a?decodeURI(a):a}
function tb(a){return sb(a.match(rb)[3]||null)}
function ub(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ub(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function vb(a){var b=[],c;for(c in a)ub(c,a[c],b);return b.join("&")}
var wb=/#|$/;function xb(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function yb(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;function zb(a){zb[" "](a);return a}
zb[" "]=za;var Ab=H("Opera"),Bb=H("Trident")||H("MSIE"),Cb=H("Edge"),Db=H("Gecko")&&!(-1!=kb.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Eb=-1!=kb.toLowerCase().indexOf("webkit")&&!H("Edge");function Fb(){var a=B.document;return a?a.documentMode:void 0}
var Gb;a:{var Hb="",Jb=function(){var a=kb;if(Db)return/rv:([^\);]+)(\)|;)/.exec(a);if(Cb)return/Edge\/([\d\.]+)/.exec(a);if(Bb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Eb)return/WebKit\/(\S+)/.exec(a);if(Ab)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Jb&&(Hb=Jb?Jb[1]:"");if(Bb){var Kb=Fb();if(null!=Kb&&Kb>parseFloat(Hb)){Gb=String(Kb);break a}}Gb=Hb}var Lb=Gb,Mb={},Nb;if(B.document&&Bb){var Ob=Fb();Nb=Ob?Ob:parseInt(Lb,10)||void 0}else Nb=void 0;var Pb=Nb;var Qb=H("Firefox")||H("FxiOS"),Rb=yb()||H("iPod"),Sb=H("iPad"),Tb=H("Safari")&&!((H("Chrome")||H("CriOS"))&&!H("Edge")||H("Coast")||H("Opera")||H("Edge")||H("Edg/")||H("OPR")||H("Firefox")||H("FxiOS")||H("Silk")||H("Android"))&&!(yb()||H("iPad")||H("iPod"));var Ub={},Vb=null;var I=window;function Wb(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Xb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Yb[c])c=Yb[c];else{c=String(c);if(!Yb[c]){var f=/function\s+([^\(]+)/m.exec(c);Yb[c]=f?f[1]:"[Anonymous]"}c=Yb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function Xb(a,b){b||(b={});b[Zb(a)]=!0;var c=a.stack||"",d=a.Wa;d&&!b[Zb(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=Xb(d,b));return c}
function Zb(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Yb={};function $b(a){this.i=a||{cookie:""}}
r=$b.prototype;r.isEnabled=function(){return navigator.cookieEnabled};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.gb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.fa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.i.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Va(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{fa:0,path:b,domain:c});return d};
r.isEmpty=function(){return!this.i.cookie};
r.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Va(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ac=new $b("undefined"==typeof document?null:document);var bc=!Bb||9<=Number(Pb);function cc(a,b){this.width=a;this.height=b}
r=cc.prototype;r.clone=function(){return new cc(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.isEmpty=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function dc(a,b){Qa(b,function(c,d){c&&"object"==typeof c&&c.V&&(c=c.S());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:ec.hasOwnProperty(d)?a.setAttribute(ec[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var ec={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function fc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!bc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',qb(g.name),'"');if(g.type){f.push(' type="',qb(g.type),'"');var h={};Ta(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=gc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):dc(f,g));2<d.length&&hc(e,f,d);return f}
function hc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ba(f)||Ca(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ca(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}F(g?Oa(f):f,d)}}}
function gc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
;function ic(a){var b=jc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function kc(){var a=[];ic(function(b){a.push(b)});
return a}
var jc={Ia:"allow-forms",Ja:"allow-modals",Ka:"allow-orientation-lock",La:"allow-pointer-lock",Ma:"allow-popups",Na:"allow-popups-to-escape-sandbox",Oa:"allow-presentation",Pa:"allow-same-origin",Qa:"allow-scripts",Ra:"allow-top-navigation",Sa:"allow-top-navigation-by-user-activation"},lc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return kc()});
function mc(){var a=gc(document,"IFRAME"),b={};F(lc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function nc(){this.l=this.l;this.A=this.A}
nc.prototype.l=!1;nc.prototype.dispose=function(){this.l||(this.l=!0,this.K())};
nc.prototype.K=function(){if(this.A)for(;this.A.length;)this.A.shift()()};var oc={};function pc(a){if(a!==oc)throw Error("Bad secret");}
;function qc(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var rc;function sc(){}
function tc(a,b){pc(b);this.i=a}
v(tc,sc);tc.prototype.toString=function(){return this.i.toString()};
var uc=null===(rc=qc())||void 0===rc?void 0:rc.emptyHTML;new tc(null!==uc&&void 0!==uc?uc:"",oc);var vc;function wc(){}
function xc(a,b){pc(b);this.i=a}
v(xc,wc);xc.prototype.toString=function(){return this.i.toString()};
var yc=null===(vc=qc())||void 0===vc?void 0:vc.emptyScript;new xc(null!==yc&&void 0!==yc?yc:"",oc);function zc(){}
function Ac(a,b){pc(b);this.i=a}
v(Ac,zc);Ac.prototype.toString=function(){return this.i};new Ac("about:blank",oc);new Ac("about:invalid#zTSz",oc);function Bc(a){var b=a.offsetWidth,c=a.offsetHeight,d=Eb&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){try{var e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0}}return new cc(e.right-e.left,e.bottom-e.top)}return new cc(b,c)}
;var Cc=(new Date).getTime();function Dc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Ec=window,Fc=document,Gc=Ec.location;function Hc(){}
var Ic=/\[native code\]/;function J(a,b,c){return a[b]=a[b]||c}
function Jc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function M(){var a;if((a=Object.create)&&Ic.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Kc=J(Ec,"gapi",{});var N;N=J(Ec,"___jsl",M());J(N,"I",0);J(N,"hel",10);function Lc(){var a=Gc.href;if(N.dpo)var b=N.h;else{b=N.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Mc(a){var b=J(N,"PQ",[]);N.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Nc(a){return J(J(N,"H",M()),a,M())}
;function Oc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,q=0;64>q;q+=4)p[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=p[q-3]^p[q-8]^p[q-14]^p[q-16],p[q]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],x=e[2],y=e[3],L=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var K=y^w&(x^y);var Y=1518500249}else K=w^x^y,Y=1859775393;else 60>q?(K=w&x|y&(w|x),Y=2400959708):(K=w^x^y,Y=3395469782);K=((n<<5|n>>>27)&4294967295)+K+L+Y+p[q]&4294967295;L=y;y=x;x=(w<<30|w>>>2)&4294967295;w=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+L&4294967295}
function c(n,p){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],w=0,x=n.length;w<x;++w)q.push(n.charCodeAt(w));n=q}p||(p=n.length);q=0;if(0==l)for(;q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<p;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],p=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=p&255,p>>>=8;b(f);for(q=p=0;5>q;q++)for(var w=24;0<=w;w-=8)n[p++]=e[q]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ta:function(){for(var n=d(),p="",q=0;q<n.length;q++)p+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return p}}}
;function Pc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),Qc(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=Qc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Qc(a){var b=Oc();b.update(a);return b.ta().toLowerCase()}
;function Rc(a){var b=Dc(String(B.location.href)),c;(c=B.__SAPISID||B.__APISID||B.__OVERRIDE_SID)?c=!0:(c=new $b(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,c||(c=new $b(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(B.location.href);return d&&c&&b?[b,Pc(Dc(d),
c,a||null)].join(" "):null}return null}
;var Sc=J(N,"perf",M());J(Sc,"g",M());var Tc=J(Sc,"i",M());J(Sc,"r",[]);M();M();function Uc(a,b,c){b&&0<b.length&&(b=Vc(b),c&&0<c.length&&(b+="___"+Vc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=J(Tc,"_p",M()),J(b,c,M())[a]=(new Date).getTime(),b=Sc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Vc(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Wc=M(),Xc=[];function O(a){throw Error("Bad hint"+(a?": "+a:""));}
Xc.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?N[b]=J(N,b,[]).concat(c):J(N,b,c)}if(b=a.u)a=J(N,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Yc=/^(\/[a-zA-Z0-9_\-]+)+$/,Zc=[/\/amp\//,/\/amp$/,/^\/amp$/],$c=/^[a-zA-Z0-9\-_\.,!]+$/,ad=/^gapi\.loaded_[0-9]+$/,bd=/^[a-zA-Z0-9,._-]+$/;function cd(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Wc[f],h=null;g?h=g(e,b,c,d):O("no hint processor for: "+f);h||O("failed to generate load url");b=h;c=b.match(dd);(d=b.match(ed))&&1===d.length&&fd.test(b)&&c&&1===c.length||O("failed sanity: "+a);return h}
function gd(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=hd(a);ad.test(c)||O("invalid_callback");b=id(b);d=d&&d.length?id(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ca?"/am="+e(a.ca):"",a.ka?"/rs="+e(a.ka):"",a.ma?"/t="+e(a.ma):"","/cb=",e(c)].join("")}
function hd(a){"/"!==a.charAt(0)&&O("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))O("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Yc.test(b)||O("invalid_prefix");c=0;for(d=Zc.length;c<d;++c)Zc[c].test(b)&&O("invalid_prefix");c=jd(a,
"k",!0);d=jd(a,"am");e=jd(a,"rs");a=jd(a,"t");return{pathPrefix:b,version:c,ca:d,ka:e,ma:a}}
function id(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");bd.test(e)&&b.push(e)}return b.join(",")}
function jd(a,b,c){a=a[b];!a&&c&&O("missing: "+b);if(a){if($c.test(a))return a;O("invalid: "+b)}return null}
var fd=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ed=/\/cb=/g,dd=/\/\//g;function kd(){var a=Lc();if(!a)throw Error("Bad hint");return a}
Wc.m=function(a,b,c,d){(a=a[0])||O("missing_hint");return"https://apis.google.com"+gd(a,b,c,d)};
var ld=decodeURI("%73cript"),md=/^[-+_0-9\/A-Za-z]+={0,2}$/;function nd(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function od(){var a=N.nonce;return void 0!==a?a&&a===String(a)&&a.match(md)?a:N.nonce=null:Fc.querySelector?(a=Fc.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(md)?N.nonce=a:N.nonce=null):null:null}
function pd(a){if("loading"!=Fc.readyState)qd(a);else{var b=od(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+ld+' src="'+encodeURI(a)+'"'+c+"></"+ld+">";Fc.write(rd?rd.createHTML(a):a)}}
function qd(a){var b=Fc.createElement(ld);b.setAttribute("src",rd?rd.createScriptURL(a):a);a=od();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Fc.getElementsByTagName(ld)[0])?a.parentNode.insertBefore(b,a):(Fc.head||Fc.body||Fc.documentElement).appendChild(b)}
function sd(a,b){var c=b&&b._c;if(c)for(var d=0;d<Xc.length;d++){var e=Xc[d][0],f=Xc[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function td(a,b,c){ud(function(){var d=b===Lc()?J(Kc,"_",M()):M();d=J(Nc(b),"_",d);a(d)},c)}
function vd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);sd(a,c);var d=a?a.split(":"):[],e=c.h||kd(),f=J(N,"ah",M());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var l=g.length&&g[g.length-1]||null,m=l;l&&l.hint==k||(m={hint:k,features:[]},g.push(m));m.features.push(h)}var n=g.length;if(1<n){var p=c.callback;p&&(c.callback=function(){0==--n&&p()})}for(;d=g.shift();)wd(d.features,c,d.hint)}else wd(d||[],c,e)}
function wd(a,b,c){function d(K,Y){if(n)return 0;Ec.clearTimeout(m);p.push.apply(p,w);var bb=((Kc||{}).config||{}).update;bb?bb(f):f&&J(N,"cu",[]).push(f);if(Y){Uc("me0",K,q);try{td(Y,c,l)}finally{Uc("me1",K,q)}}return 1}
a=Jc(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var m=null,n=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=J(Nc(c),"r",[]).sort();var p=J(Nc(c),"L",[]).sort(),q=[].concat(k);0<g&&(m=Ec.setTimeout(function(){n=!0;h()},g));
var w=nd(a,p);if(w.length){w=nd(a,k);var x=J(N,"CP",[]),y=x.length;x[y]=function(K){function Y(){var Ib=x[y+1];Ib&&Ib()}
function bb(Ib){x[y]=null;d(w,K)&&Mc(function(){e&&e();Ib()})}
if(!K)return 0;Uc("ml1",w,q);0<y&&x[y-1]?x[y]=function(){bb(Y)}:bb(Y)};
if(w.length){var L="loaded_"+N.I++;Kc[L]=function(K){x[y](K);Kc[L]=null};
a=cd(c,w,"gapi."+L,k);k.push.apply(k,w);Uc("ml0",w,q);b.sync||Ec.___gapisync?pd(a):qd(a)}else x[y](Hc)}else d(w)&&e&&e()}
var rd=Ha("goog#gapi");function ud(a,b){if(N.hee&&0<N.hel)try{return a()}catch(c){b&&b(c),N.hel--,vd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Kc.load=function(a,b){return ud(function(){return vd(a,b)})};function xd(){this.j=[];this.i=-1}
xd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.j[a]!=b&&(this.j[a]=b,this.i=-1)};
xd.prototype.get=function(a){return!!this.j[a]};
function yd(a){-1==a.i&&(a.i=Ma(a.j,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function zd(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=!1}
zd.prototype.j=function(){this.defaultPrevented=!0};var Ad=!Bb||9<=Number(Pb),Bd;
if(Bd=Bb){var Cd;if(Object.prototype.hasOwnProperty.call(Mb,"9"))Cd=Mb["9"];else{for(var Dd=0,Ed=Va(String(Lb)).split("."),Fd=Va("9").split("."),Gd=Math.max(Ed.length,Fd.length),Hd=0;0==Dd&&Hd<Gd;Hd++){var Id=Ed[Hd]||"",Jd=Fd[Hd]||"";do{var Kd=/(\d*)(\D*)(.*)/.exec(Id)||["","","",""],Ld=/(\d*)(\D*)(.*)/.exec(Jd)||["","","",""];if(0==Kd[0].length&&0==Ld[0].length)break;Dd=eb(0==Kd[1].length?0:parseInt(Kd[1],10),0==Ld[1].length?0:parseInt(Ld[1],10))||eb(0==Kd[2].length,0==Ld[2].length)||eb(Kd[2],Ld[2]);
Id=Kd[3];Jd=Ld[3]}while(0==Dd)}Cd=Mb["9"]=0<=Dd}Bd=!Cd}var Md=Bd,Nd=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",za,b),B.removeEventListener("test",za,b)}catch(c){}return a}();function Od(a,b){zd.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
E(Od,zd);var Pd={2:"touch",3:"pen",4:"mouse"};
Od.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;var e=a.relatedTarget;if(e){if(Db){a:{try{zb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Pd[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&this.j()};
Od.prototype.j=function(){Od.H.j.call(this);var a=this.l;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Md)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Qd="closure_listenable_"+(1E6*Math.random()|0),Rd=0;function Sd(a,b,c,d,e){this.listener=a;this.i=null;this.src=b;this.type=c;this.capture=!!d;this.U=e;this.key=++Rd;this.M=this.P=!1}
function Td(a){a.M=!0;a.listener=null;a.i=null;a.src=null;a.U=null}
;function Ud(a){this.src=a;this.listeners={};this.i=0}
Ud.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Vd(a,b,d,e);-1<g?(b=a[g],c||(b.P=!1)):(b=new Sd(b,this.src,f,!!d,e),b.P=c,a.push(b));return b};
Ud.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Vd(e,b,c,d);return-1<b?(Td(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Wd(a,b){var c=b.type;c in a.listeners&&Na(a.listeners[c],b)&&(Td(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Vd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.M&&f.listener==b&&f.capture==!!c&&f.U==d)return e}return-1}
;var Xd="closure_lm_"+(1E6*Math.random()|0),Yd={},Zd=0;function $d(a,b,c,d,e){if(d&&d.once)ae(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)$d(a,b[f],c,d,e);else c=be(c),a&&a[Qd]?ce(a,b,c,Ca(d)?!!d.capture:!!d,e):de(a,b,c,!1,d,e)}
function de(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ca(e)?!!e.capture:!!e,h=ee(a);h||(a[Xd]=h=new Ud(a));c=h.add(b,c,d,g,f);if(!c.i){d=fe();c.i=d;d.src=a;d.listener=c;if(a.addEventListener)Nd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ge(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Zd++}}
function fe(){var a=he,b=Ad?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function ae(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ae(a,b[f],c,d,e);else c=be(c),a&&a[Qd]?a.i.add(String(b),c,!0,Ca(d)?!!d.capture:!!d,e):de(a,b,c,!0,d,e)}
function ie(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ie(a,b[f],c,d,e);else(d=Ca(d)?!!d.capture:!!d,c=be(c),a&&a[Qd])?a.i.remove(String(b),c,d,e):a&&(a=ee(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Vd(b,c,d,e)),(c=-1<a?b[a]:null)&&je(c))}
function je(a){if("number"!==typeof a&&a&&!a.M){var b=a.src;if(b&&b[Qd])Wd(b.i,a);else{var c=a.type,d=a.i;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ge(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Zd--;(c=ee(b))?(Wd(c,a),0==c.i&&(c.src=null,b[Xd]=null)):Td(a)}}}
function ge(a){return a in Yd?Yd[a]:Yd[a]="on"+a}
function ke(a,b,c,d){var e=!0;if(a=ee(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.M&&(f=le(f,d),e=e&&!1!==f)}return e}
function le(a,b){var c=a.listener,d=a.U||a.src;a.P&&je(a);return c.call(d,b)}
function he(a,b){if(a.M)return!0;if(!Ad){var c=b||C("window.event"),d=new Od(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.i;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;0<=g;g--){d.i=c[g];var h=ke(c[g],f,!0,d);e=e&&h}for(g=0;g<c.length;g++)d.i=c[g],h=ke(c[g],f,!1,d),e=e&&h}return e}return le(a,new Od(b,this))}
function ee(a){a=a[Xd];return a instanceof Ud?a:null}
var me="__closure_events_fn_"+(1E9*Math.random()>>>0);function be(a){if("function"===typeof a)return a;a[me]||(a[me]=function(b){return a.handleEvent(b)});
return a[me]}
;function P(){nc.call(this);this.i=new Ud(this);this.N=this;this.B=null}
E(P,nc);P.prototype[Qd]=!0;P.prototype.addEventListener=function(a,b,c,d){$d(this,a,b,c,d)};
P.prototype.removeEventListener=function(a,b,c,d){ie(this,a,b,c,d)};
P.prototype.dispatchEvent=function(a){var b=this.B;if(b){var c=[];for(var d=1;b;b=b.B)c.push(b),++d}b=this.N;d=a.type||a;if("string"===typeof a)a=new zd(a,b);else if(a instanceof zd)a.target=a.target||b;else{var e=a;a=new zd(d,b);Ta(a,e)}e=!0;if(c)for(var f=c.length-1;0<=f;f--){var g=a.i=c[f];e=ne(g,d,!0,a)&&e}g=a.i=b;e=ne(g,d,!0,a)&&e;e=ne(g,d,!1,a)&&e;if(c)for(f=0;f<c.length;f++)g=a.i=c[f],e=ne(g,d,!1,a)&&e;return e};
P.prototype.K=function(){P.H.K.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Td(d[e]);delete a.listeners[c];a.i--}}this.B=null};
function ce(a,b,c,d,e){a.i.add(String(b),c,!1,d,e)}
function ne(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.M&&g.capture==c){var h=g.listener,k=g.U||g.src;g.P&&Wd(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function oe(a,b){this.l=a;this.o=b;this.j=0;this.i=null}
oe.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function pe(a,b){a.o(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;function qe(a){B.setTimeout(function(){throw a;},0)}
var re;
function se(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=gc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Fa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.da;c.da=null;e()}};
return function(e){d.next={da:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function te(){this.j=this.i=null}
te.prototype.add=function(a,b){var c=ue.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
te.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var ue=new oe(function(){return new ve},function(a){return a.reset()});
function ve(){this.next=this.scope=this.i=null}
ve.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
ve.prototype.reset=function(){this.next=this.scope=this.i=null};function we(a,b){xe||ye();ze||(xe(),ze=!0);Ae.add(a,b)}
var xe;function ye(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);xe=function(){a.then(Be)}}else xe=function(){var b=Be;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!H("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(re||(re=se()),re(b)):B.setImmediate(b)}}
var ze=!1,Ae=new te;function Be(){for(var a;a=Ae.remove();){try{a.i.call(a.scope)}catch(b){qe(b)}pe(ue,a)}ze=!1}
;function Ce(a){this.i=0;this.C=void 0;this.o=this.j=this.l=null;this.A=this.B=!1;if(a!=za)try{var b=this;a.call(void 0,function(c){De(b,2,c)},function(c){De(b,3,c)})}catch(c){De(this,3,c)}}
function Ee(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Ee.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Fe=new oe(function(){return new Ee},function(a){a.reset()});
function Ge(a,b,c){var d=Fe.get();d.j=a;d.onRejected=b;d.context=c;return d}
Ce.prototype.then=function(a,b,c){return He(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ce.prototype.$goog_Thenable=!0;Ce.prototype.cancel=function(a){if(0==this.i){var b=new Ie(a);we(function(){Je(this,b)},this)}};
function Je(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?Je(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):Ke(c),Le(c,e,3,b)))}a.l=null}else De(a,3,b)}
function Me(a,b){a.j||2!=a.i&&3!=a.i||Ne(a);a.o?a.o.next=b:a.j=b;a.o=b}
function He(a,b,c,d){var e=Ge(null,null,null);e.i=new Ce(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ie?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;Me(a,e);return e.i}
Ce.prototype.N=function(a){this.i=0;De(this,2,a)};
Ce.prototype.Z=function(a){this.i=0;De(this,3,a)};
function De(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.N,f=a.Z;if(d instanceof Ce){Me(d,Ge(e||za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ca(d))try{var k=d.then;if("function"===typeof k){Oe(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.C=c,a.i=b,a.l=null,Ne(a),3!=b||c instanceof Ie||Pe(a,c))}}
function Oe(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ne(a){a.B||(a.B=!0,we(a.D,a))}
function Ke(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.o=null);return b}
Ce.prototype.D=function(){for(var a;a=Ke(this);)Le(this,a,this.i,this.C);this.B=!1};
function Le(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.A;a=a.l)a.A=!1;if(b.i)b.i.l=null,Qe(b,c,d);else try{b.l?b.j.call(b.context):Qe(b,c,d)}catch(e){Re.call(null,e)}pe(Fe,b)}
function Qe(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Pe(a,b){a.A=!0;we(function(){a.A&&Re.call(null,b)})}
var Re=qe;function Ie(a){Ia.call(this,a)}
E(Ie,Ia);Ie.prototype.name="cancel";function Se(a,b,c){nc.call(this);this.i=a;this.B=b||0;this.j=c;this.o=Fa(this.ua,this)}
E(Se,nc);r=Se.prototype;r.O=0;r.K=function(){Se.H.K.call(this);this.stop();delete this.i;delete this.j};
r.start=function(a){this.stop();var b=this.o;a=void 0!==a?a:this.B;if("function"!==typeof b)if(b&&"function"==typeof b.handleEvent)b=Fa(b.handleEvent,b);else throw Error("Invalid listener argument");this.O=2147483647<Number(a)?-1:B.setTimeout(b,a||0)};
r.stop=function(){this.isActive()&&B.clearTimeout(this.O);this.O=0};
r.isActive=function(){return 0!=this.O};
r.ua=function(){this.O=0;this.i&&this.i.call(this.j)};function Te(){this.j=-1}
;function Ue(){this.j=64;this.i=[];this.B=[];this.C=[];this.o=[];this.o[0]=128;for(var a=1;a<this.j;++a)this.o[a]=0;this.A=this.l=0;this.reset()}
E(Ue,Te);Ue.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.A=this.l=0};
function Ve(a,b,c){c||(c=0);var d=a.C;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Ue.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.j,d=0,e=this.B,f=this.l;d<b;){if(0==f)for(;d<=c;)Ve(this,a,d),d+=this.j;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.j){Ve(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.j){Ve(this,e);f=0;break}}this.l=f;this.A+=b}};
Ue.prototype.digest=function(){var a=[],b=8*this.A;56>this.l?this.update(this.o,56-this.l):this.update(this.o,this.j-(this.l-56));for(var c=this.j-1;56<=c;c--)this.B[c]=b&255,b/=256;Ve(this,this.B);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};var We="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function Xe(){}
Xe.prototype.next=function(){throw We;};
Xe.prototype.J=function(){return this};
function Ye(a){if(a instanceof Xe)return a;if("function"==typeof a.J)return a.J(!1);if(Ba(a)){var b=0,c=new Xe;c.next=function(){for(;;){if(b>=a.length)throw We;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ze(a,b){if(Ba(a))try{F(a,b,void 0)}catch(c){if(c!==We)throw c;}else{a=Ye(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==We)throw c;}}}
function $e(a){if(Ba(a))return Oa(a);a=Ye(a);var b=[];Ze(a,function(c){b.push(c)});
return b}
;function af(a,b){this.l={};this.i=[];this.o=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof af)for(c=bf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function bf(a){cf(a);return a.i.concat()}
r=af.prototype;r.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;var c=b||df;cf(this);for(var d,e=0;d=this.i[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function df(a,b){return a===b}
r.isEmpty=function(){return 0==this.j};
r.clear=function(){this.l={};this.o=this.j=this.i.length=0};
r.remove=function(a){return Object.prototype.hasOwnProperty.call(this.l,a)?(delete this.l[a],this.j--,this.o++,this.i.length>2*this.j&&cf(this),!0):!1};
function cf(a){if(a.j!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Object.prototype.hasOwnProperty.call(a.l,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.j!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Object.prototype.hasOwnProperty.call(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
r.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.l,a)?this.l[a]:b};
r.set=function(a,b){Object.prototype.hasOwnProperty.call(this.l,a)||(this.j++,this.i.push(a),this.o++);this.l[a]=b};
r.forEach=function(a,b){for(var c=bf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new af(this)};
r.J=function(a){cf(this);var b=0,c=this.o,d=this,e=new Xe;e.next=function(){if(c!=d.o)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)throw We;var f=d.i[b++];return a?f:d.l[f]};
return e};function ef(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function ff(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function gf(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:ef(a).match(/\S+/g)||[],c=0<=Ka(c,b);return c}
function hf(a,b){if(a.classList)a.classList.add(b);else if(!gf(a,b)){var c=ef(a);ff(a,c+(0<c.length?" "+b:b))}}
function jf(a,b){a.classList?a.classList.remove(b):gf(a,b)&&ff(a,La(a.classList?a.classList:ef(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function kf(a){var b=[];lf(new mf,a,b);return b.join("")}
function mf(){}
function lf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),lf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),nf(d,c),c.push(":"),lf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":nf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var of={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function nf(a,b){b.push('"',a.replace(pf,function(c){var d=of[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),of[c]=d);return d}),'"')}
;function Q(a){nc.call(this);this.C=1;this.o=[];this.B=0;this.i=[];this.j={};this.D=!!a}
E(Q,nc);r=Q.prototype;r.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.C;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.C=e+3;d.push(e);return e};
r.Y=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.B?(this.o.push(a),this.i[a+1]=za):(c&&Na(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
r.T=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];qf(this.i[g+1],this.i[g+2],d)}else{this.B++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.B--,0<this.o.length&&0==this.B)for(;c=this.o.pop();)this.Y(c)}}return 0!=e}return!1};
function qf(a,b,c){we(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.j[a];b&&(F(b,this.Y,this),delete this.j[a])}else this.i.length=0,this.j={}};
r.K=function(){Q.H.K.call(this);this.clear();this.o.length=0};function rf(a){this.i=a}
rf.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,kf(b))};
rf.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
rf.prototype.remove=function(a){this.i.remove(a)};function sf(a){this.i=a}
E(sf,rf);function tf(a){this.data=a}
function uf(a){return void 0===a||a instanceof tf?a:new tf(a)}
sf.prototype.set=function(a,b){sf.H.set.call(this,a,uf(b))};
sf.prototype.j=function(a){a=sf.H.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
sf.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function vf(a){this.i=a}
E(vf,sf);vf.prototype.set=function(a,b,c){if(b=uf(b)){if(c){if(c<Date.now()){vf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}vf.H.set.call(this,a,b)};
vf.prototype.j=function(a){var b=vf.H.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())vf.prototype.remove.call(this,a);else return b}};function wf(){}
;function xf(){}
E(xf,wf);xf.prototype.clear=function(){var a=$e(this.J(!0)),b=this;F(a,function(c){b.remove(c)})};function yf(a){this.i=a}
E(yf,xf);r=yf.prototype;r.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
r.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.i.removeItem(a)};
r.J=function(a){var b=0,c=this.i,d=new Xe;d.next=function(){if(b>=c.length)throw We;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){this.i.clear()};
r.key=function(a){return this.i.key(a)};function zf(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
E(zf,yf);function Af(a,b){this.j=a;this.i=null;if(Bb&&!(9<=Number(Pb))){Bf||(Bf=new af);this.i=Bf.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Bf.set(a,this.i));try{this.i.load(this.j)}catch(c){this.i=null}}}
E(Af,xf);var Cf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Bf=null;function Df(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Cf[b]})}
r=Af.prototype;r.isAvailable=function(){return!!this.i};
r.set=function(a,b){this.i.setAttribute(Df(a),b);Ef(this)};
r.get=function(a){a=this.i.getAttribute(Df(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.i.removeAttribute(Df(a));Ef(this)};
r.J=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Xe;d.next=function(){if(b>=c.length)throw We;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ef(this)};
function Ef(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ff(a,b){this.j=a;this.i=b+"::"}
E(Ff,xf);Ff.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Ff.prototype.get=function(a){return this.j.get(this.i+a)};
Ff.prototype.remove=function(a){this.j.remove(this.i+a)};
Ff.prototype.J=function(a){var b=this.j.J(!0),c=this,d=new Xe;d.next=function(){for(var e=b.next();e.substr(0,c.i.length)!=c.i;)e=b.next();return a?e.substr(c.i.length):c.j.get(e)};
return d};var Gf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};D("yt.config_",Gf);function Hf(a){var b=arguments;1<b.length?Gf[b[0]]=b[1]:1===b.length&&Object.assign(Gf,b[0])}
function R(a,b){return a in Gf?Gf[a]:b}
;var If=[];function Jf(a){If.forEach(function(b){return b(a)})}
function Kf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Lf(b),Jf(b)}}:a}
function Lf(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Hf("ERRORS",b))}
function Mf(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Hf("ERRORS",b))}
;var Nf={q:!0,search_query:!0};function Of(a){var b=[];Qa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];F(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Pf(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?Pa(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){k.args=[{key:f[0],value:f[1],query:a}],Nf.hasOwnProperty(f[0])||("ReferenceError"===k.name?Mf(k):Lf(k))}}return c}
function Qf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Pf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=vb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;function Rf(){return C("gapi.iframes.getContext")()}
function Sf(){return C("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;function S(a){a=Tf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Uf(a,b){var c=Tf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Tf(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
;var Vf=0;D("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Vf});D("ytEventsEventsListeners",B.ytEventsEventsListeners||{});D("ytEventsEventsCounter",B.ytEventsEventsCounter||{count:0});function Wf(a,b){"function"===typeof a&&(a=Kf(a));return window.setTimeout(a,b)}
;function Xf(){}
function Yf(a,b){return Zf(a,1,b)}
;function $f(){Xf.apply(this,arguments)}
v($f,Xf);function Zf(a,b,c){isNaN(c)&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Wf(a,c||0)}
function ag(a){if(!isNaN(a)){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
$f.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
$f.i=void 0;$f.j=function(){$f.i||($f.i=new $f)};
$f.j();var bg=B.ytPubsubPubsubInstance||new Q,cg=B.ytPubsubPubsubSubscribedKeys||{},dg=B.ytPubsubPubsubTopicToKeys||{},eg=B.ytPubsubPubsubIsSynchronous||{};Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.Y;Q.prototype.publish=Q.prototype.T;Q.prototype.clear=Q.prototype.clear;D("ytPubsubPubsubInstance",bg);D("ytPubsubPubsubTopicToKeys",dg);D("ytPubsubPubsubIsSynchronous",eg);D("ytPubsubPubsubSubscribedKeys",cg);var fg=window,T=fg.ytcsi&&fg.ytcsi.now?fg.ytcsi.now:fg.performance&&fg.performance.timing&&fg.performance.now&&fg.performance.timing.navigationStart?function(){return fg.performance.timing.navigationStart+fg.performance.now()}:function(){return(new Date).getTime()};var gg=Uf("initial_gel_batch_timeout",1E3),hg=Math.pow(2,16)-1,ig=null,jg=0,kg=void 0,lg=0,mg=0,ng=0,og=!0,pg=B.ytLoggingTransportGELQueue_||new Map;D("ytLoggingTransportGELQueue_",pg);var qg=B.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",qg);function rg(a){a=void 0===a?!1:a;return new Ce(function(b){window.clearTimeout(lg);window.clearTimeout(mg);mg=0;kg&&kg.isReady()?(sg(b,a),pg.clear()):(tg(),b())})}
function tg(){S("web_gel_timeout_cap")&&!mg&&(mg=Wf(rg,6E4));window.clearTimeout(lg);var a=R("LOGGING_BATCH_TIMEOUT",Uf("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&og&&(a=gg);lg=Wf(rg,a)}
function sg(a,b){var c=kg;b=void 0===b?!1:b;for(var d=Math.round(T()),e=pg.size,f=u(pg),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=Ra({context:ug(c.i||vg())});h.events=k;(k=qg[g])&&wg(h,g,k);delete qg[g];xg(h,d);yg(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();jg=Math.round(T()-d)},
onError:function(){e--;e||a()},
Ha:b});og=!1}}
function xg(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=R("EVENT_ID",void 0);if(c){var d=R("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*hg/2));d++;d>hg&&(d=1);Hf("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;ig&&jg&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:ig,roundtripMs:String(jg)});ig=c;jg=0}}
function wg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var zg=B.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",zg);
function Ag(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||T());e[a]=b;a=C("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};S("log_sequence_info_on_gel_web")&&d.la&&(a=e.context,b=d.la,zg[b]=b in zg?zg[b]+1:0,a.sequence={index:zg[b],groupKey:b},d.Za&&delete zg[d.la]);d=d.Ya;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),qg[d.token]=a,a=d.token);d=pg.get(a)||[];pg.set(a,
d);d.push(e);c&&(kg=new c);c=Uf("web_logging_max_batch")||100;e=T();d.length>=c?rg(!0):10<=e-ng&&(tg(),ng=e)}
;function Bg(a){var b=Cg;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Cc;e.flash="0";a:{try{var f=b.i.top.location.href}catch(L){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?I:g;try{var h=g.history.length}catch(L){h=0}e.u_his=h;e.u_java=!!I.navigator&&"unknown"!==typeof I.navigator.javaEnabled&&!!I.navigator.javaEnabled&&I.navigator.javaEnabled();I.screen&&(e.u_h=I.screen.height,e.u_w=I.screen.width,
e.u_ah=I.screen.availHeight,e.u_aw=I.screen.availWidth,e.u_cd=I.screen.colorDepth);I.navigator&&I.navigator.plugins&&(e.u_nplug=I.navigator.plugins.length);I.navigator&&I.navigator.mimeTypes&&(e.u_nmime=I.navigator.mimeTypes.length);h=b.i;try{var k=h.screenX;var l=h.screenY}catch(L){}try{var m=h.outerWidth;var n=h.outerHeight}catch(L){}try{var p=h.innerWidth;var q=h.innerHeight}catch(L){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,m,n,p,q];
l=b.i.top;try{var w=(l||window).document,x="CSS1Compat"==w.compatMode?w.documentElement:w.body;var y=(new cc(x.clientWidth,x.clientHeight)).round()}catch(L){y=new cc(-12245933,-12245933)}w=y;y={};x=new xd;B.SVGElement&&B.document.createElementNS&&x.set(0);l=mc();l["allow-top-navigation-by-user-activation"]&&x.set(1);l["allow-popups-to-escape-sandbox"]&&x.set(2);B.crypto&&B.crypto.subtle&&x.set(3);B.TextDecoder&&B.TextEncoder&&x.set(4);x=yd(x);y.bc=x;y.bih=w.height;y.biw=w.width;y.brdim=k.join();b=
b.j;b=(y.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,y.wgl=!!I.WebGLRenderingContext,y);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Cg=new function(){var a=window.document;this.i=window;this.j=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Of(Bg(a))});var Dg="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function Eg(){if(!Dg)return null;var a=Dg();return"open"in a?a:null}
;var Fg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Gg="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
Hg=!1;
function Ig(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(rb)[1]||null,e=tb(a);d&&e?(d=c,c=a.match(rb),d=d.match(rb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?tb(c)==e&&(Number(c.match(rb)[4]||null)||null)==(Number(a.match(rb)[4]||null)||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in Fg)e=R(Fg[f]),!e||!c&&tb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!tb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!tb(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!tb(a))b["X-YouTube-Ad-Signals"]=Of(Bg(void 0));return b}
function Jg(a){var b=window.location.search,c=tb(a),d=sb(a.match(rb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Pf(b),f={};F(Gg,function(g){e[g]&&(f[g]=e[g])});
return Qf(a,f||{},!1)}
function Kg(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Lg(a,b);var d=Mg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||B;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.aa&&b.aa.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ia&&0<b.timeout&&(f=Wf(function(){e||(e=!0,window.clearTimeout(f),b.ia.call(b.context||B))},b.timeout))}else Ng(a,b)}
function Ng(a,b){var c=b.format||"JSON";a=Lg(a,b);var d=Mg(a,b),e=!1,f=Og(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,p=500<=k.status&&600>k.status;if(l||n||p)m=Pg(a,c,k,b.Xa);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.aa&&b.aa.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.W&&0<b.timeout){var g=b.W;var h=Wf(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function Lg(a,b){b.bb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.Ga;d&&(d[c]&&delete d[c],a=Qf(a,d||{},!0));return a}
function Mg(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.G,g=R("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.ab||tb(a)&&!b.withCredentials&&tb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.G&&b.G[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Pf(e),Ta(e,f),e=b.ja&&"JSON"==b.ja?JSON.stringify(e):vb(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!Hg&&c&&"POST"!=b.method&&
(Hg=!0,Lf(Error("AJAX request with postData should use POST")));return e}
function Pg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Mf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Qg(a):null)e={},F(a.getElementsByTagName("*"),function(g){e[g.tagName]=Rg(g)})}d&&Sg(e);
return e}
function Sg(a){if(Ca(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=pb(a[b],null);a[c]=d}else Sg(a[b])}}
function Qg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Rg(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Og(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Kf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Eg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=Jg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ig(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Tg(){return"INNERTUBE_API_KEY"in Gf&&"INNERTUBE_API_VERSION"in Gf}
function vg(){return{innertubeApiKey:R("INNERTUBE_API_KEY",void 0),innertubeApiVersion:R("INNERTUBE_API_VERSION",void 0),va:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wa:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ya:R("INNERTUBE_CONTEXT_HL",void 0),xa:R("INNERTUBE_CONTEXT_GL",void 0),za:R("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ba:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Aa:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function ug(a){var b={client:{hl:a.ya,gl:a.xa,clientName:a.wa,clientVersion:a.innertubeContextClientVersion,configInfo:a.va}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=R("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=R("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&S("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=u(Object.entries(Pf(R("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function Ug(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ua||R("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Ta:b=Rc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
;function Vg(a){a=Object.assign({},a);delete a.Authorization;var b=Rc();if(b){var c=new Ue;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ba(b);void 0===c&&(c=0);if(!Vb){Vb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Ub[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Vb[k]&&(Vb[k]=h)}}}c=Ub[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Wg(a){var b=new zf;(b=b.isAvailable()?a?new Ff(b,a):b:null)||(a=new Af(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new vf(a):null;this.j=document.domain||window.location.hostname}
Wg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(kf(b))}catch(f){return}else e=escape(b);b=this.j;ac.set(""+a,e,{fa:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Wg.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=ac.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Wg.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;ac.remove(""+a,"/",void 0===b?"youtube.com":b)};var Xg;function Yg(){Xg||(Xg=new Wg("yt.innertube"));return Xg}
function Zg(a,b,c,d){if(d)return null;d=Yg().get("nextId",!0)||1;var e=Yg().get("requests",!0)||{};e[d]={method:a,request:b,authState:Vg(c),requestTime:Math.round(T())};Yg().set("nextId",d+1,86400,!0);Yg().set("requests",e,86400,!0);return d}
function $g(a){var b=Yg().get("requests",!0)||{};delete b[a];Yg().set("requests",b,86400,!0)}
function ah(a){var b=Yg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState;var f=Vg(Ug(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),yg(a,d.method,e,{}));delete b[c]}}Yg().set("requests",b,86400,!0)}}
;function bh(a,b){this.version=a;this.args=b}
;function ch(a){this.topic=a}
ch.prototype.toString=function(){return this.topic};var dh=C("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.Y;Q.prototype.publish=Q.prototype.T;Q.prototype.clear=Q.prototype.clear;D("ytPubsub2Pubsub2Instance",dh);D("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});D("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});D("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});D("ytPubsub2Pubsub2SkipSubKey",null);
function eh(a,b){var c=C("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var fh=[],gh=!1;function hh(a,b){gh||(fh.push({type:"EVENT",eventType:a,payload:b}),10<fh.length&&fh.shift())}
;function ih(a){if(!a)throw Error();throw a;}
function jh(a){return a}
function U(a){var b=this;this.j=a;this.state={status:"PENDING"};this.i=[];this.onRejected=[];this.j(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.i);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
U.all=function(a){return new U(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={L:0};f.L<a.length;f={L:f.L},++f.L)kh(U.resolve(a[f.L]).then(function(g){return function(h){d[g.L]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
U.resolve=function(a){return new U(function(b,c){a instanceof U?a.then(b,c):b(a)})};
U.reject=function(a){return new U(function(b,c){c(a)})};
U.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:jh,e=null!==b&&void 0!==b?b:ih;return new U(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){lh(c,c,d,f,g)}),c.onRejected.push(function(){mh(c,c,e,f,g)})):"FULFILLED"===c.state.status?lh(c,c,d,f,g):"REJECTED"===c.state.status&&mh(c,c,e,f,g)})};
function kh(a,b){a.then(void 0,b)}
function lh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof U?nh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function mh(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof U?nh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function nh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof U?nh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function oh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function ph(a){return new Promise(function(b,c){oh(a,b,c)})}
function V(a){return new U(function(b,c){oh(a,b,c)})}
;function qh(a,b){return new U(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;var rh=Rb||Sb;function sh(a){var b=kb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function W(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);d=[];var e=d.concat;if(!(c instanceof Array)){c=u(c);for(var f,g=[];!(f=c.next()).done;)g.push(f.value);c=g}this.args=e.call(d,c)}
v(W,Error);var th={},uh=(th.AUTH_INVALID="No user identifier specified.",th.EXPLICIT_ABORT="Transaction was explicitly aborted.",th.IDB_NOT_SUPPORTED="IndexedDB is not supported.",th.MISSING_OBJECT_STORE="Object store not created.",th.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",th.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",th.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",th);
function X(a,b,c){b=void 0===b?{}:b;c=void 0===c?uh[a]:c;W.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,X.prototype);gh||(fh.push({type:"ERROR",payload:this}),10<fh.length&&fh.shift())}
v(X,W);function vh(a){X.call(this,"MISSING_OBJECT_STORE",{cb:a},uh.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,vh.prototype)}
v(vh,X);function wh(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(T());this.j=!1}
r=wh.prototype;r.add=function(a,b,c){return xh(this,[a],"readwrite",function(d){return yh(d,a).add(b,c)})};
r.clear=function(a){return xh(this,[a],"readwrite",function(b){return yh(b,a).clear()})};
r.close=function(){var a;this.i.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return xh(this,[a],"readonly",function(c){return yh(c,a).count(b)})};
r["delete"]=function(a,b){return xh(this,[a],"readwrite",function(c){return yh(c,a)["delete"](b)})};
r.get=function(a,b){return xh(this,[a],"readwrite",function(c){return yh(c,a).get(b)})};
function xh(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.i.transaction(b,c);d=zh(e,d)["catch"](function(f){var g=a.i.name,h=b.join();f instanceof X||f instanceof W||("QuotaExceededError"===f.name?f=new X("QUOTA_EXCEEDED",{objectStoreNames:h,dbName:g}):Tb&&"UnknownError"===f.name?f=new X("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:h,dbName:g}):(Object.setPrototypeOf(f,W.prototype),f.args=[{name:"IdbError",fb:f.name,dbName:g,objectStoreNames:h}]));throw f;});
Ah(a,d,b.join(),c);return d}
function Ah(a,b,c,d){xb(a,function f(){var g,h,k=this,l,m,n;return va(f,function(p){if(1==p.i)return g=Math.round(T()),p.o=2,z(p,b,4);2!=p.i?(h=Math.round(T()),Bh(k,!0,c,h-g),p.i=0,p.o=0):(l=pa(p),m=Math.round(T()),n=m-g,l instanceof X&&("QUOTA_EXCEEDED"===l.type||"QUOTA_MAYBE_EXCEEDED"===l.type)&&hh("QUOTA_EXCEEDED",{dbName:k.i.name,objectStoreNames:c,transactionCount:k.transactionCount,transactionMode:d}),l instanceof X&&"UNKNOWN_ABORT"===l.type&&(hh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,
transactionDuration:n,transactionCount:k.transactionCount,dbDuration:m-k.l}),k.j=!0),Bh(k,!1,c,n),p.i=0)})})}
function Bh(a,b,c,d){hh("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.j,duration:d,isSuccessful:b})}
function Ch(a){this.i=a}
r=Ch.prototype;r.add=function(a,b){return V(this.i.add(a,b))};
r.clear=function(){return V(this.i.clear()).then(function(){})};
r.count=function(a){return V(this.i.count(a))};
function Dh(a,b){return Eh(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
r["delete"]=function(a){return a instanceof IDBKeyRange?Dh(this,a):V(this.i["delete"](a))};
r.get=function(a){return V(this.i.get(a))};
r.index=function(a){return new Fh(this.i.index(a))};
r.getName=function(){return this.i.name};
function Eh(a,b,c){a=a.i.openCursor(b.query,b.direction);return Gh(a).then(function(d){return qh(d,c)})}
function Hh(a){var b=this;this.i=a;this.j=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.aborted){e=X;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function zh(a,b){var c=new Hh(a);return Ih(c,b)}
function Ih(a,b){var c=new Promise(function(d,e){kh(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Hh.prototype.abort=function(){this.i.abort();this.aborted=!0;throw new X("EXPLICIT_ABORT");};
Hh.prototype.commit=function(){var a=this.i;a.commit&&!this.aborted&&a.commit()};
function yh(a,b){var c=a.i.objectStore(b),d=a.j.get(c);d||(d=new Ch(c),a.j.set(c,d));return d}
function Fh(a){this.i=a}
Fh.prototype.count=function(a){return V(this.i.count(a))};
Fh.prototype["delete"]=function(a){return Jh(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Fh.prototype.get=function(a){return V(this.i.get(a))};
Fh.prototype.getKey=function(a){return V(this.i.getKey(a))};
function Jh(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Gh(a).then(function(d){return qh(d,c)})}
function Kh(a,b){this.request=a;this.cursor=b}
function Gh(a){return V(a).then(function(b){return null===b?null:new Kh(a,b)})}
r=Kh.prototype;r.advance=function(a){this.cursor.advance(a);return Gh(this.request)};
r["continue"]=function(a){this.cursor["continue"](a);return Gh(this.request)};
r["delete"]=function(){return V(this.cursor["delete"]()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.update=function(a){return V(this.cursor.update(a))};function Lh(a,b,c){return xb(this,function e(){var f,g,h,k,l,m,n,p,q,w;return va(e,function(x){if(1==x.i)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.Fa,m=g.upgrade,n=g.closed,q=function(){p||(p=new wh(f.result,{closed:n}));return p},f.addEventListener("upgradeneeded",function(y){if(null===y.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");y.dataLoss&&"none"!==y.dataLoss&&hh("IDB_DATA_CORRUPTED",{reason:y.dataLossMessage||"unknown reason",dbName:a});var L=q(),K=new Hh(f.transaction);m&&m(L,y.oldVersion,y.newVersion,K)}),h&&f.addEventListener("blocked",function(){h()}),z(x,ph(f),2);
w=x.A;k&&w.addEventListener("versionchange",function(){k(q())});
w.addEventListener("close",function(){hh("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:w.version});l&&l()});
return x["return"](q())})})}
function Mh(a,b){b=void 0===b?{}:b;return xb(this,function d(){var e,f,g;return va(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return z(h,ph(e),0)})})}
;function Nh(a){this.name="YtIdbMeta";this.options=a;this.j=!1}
function Oh(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Lh(a,b,c)}
Nh.prototype["delete"]=function(a){a=void 0===a?{}:a;return Mh(this.name,a)};
Nh.prototype.open=function(){var a=this;if(!this.i){var b,c=function(){a.i===b&&(a.i=void 0)},d={blocking:function(f){f.close()},
closed:c,Fa:c,upgrade:this.options.upgrade},e=function(){return xb(a,function g(){var h=this,k,l,m;return va(g,function(n){switch(n.i){case 1:return n.o=2,z(n,Oh(h.name,h.options.version,d),4);case 4:k=n.A;if(!Qb){n.i=5;break}a:{var p=u(Object.keys(h.options.Ea));for(var q=p.next();!q.done;q=p.next())if(q=q.value,!k.i.objectStoreNames.contains(q)){p=q;break a}p=void 0}l=p;if(void 0===l){n.i=5;break}if(!Qb||h.j){n.i=7;break}h.j=!0;return z(n,h["delete"](),8);case 8:return n["return"](e());case 7:throw new vh(l);
case 5:return n["return"](k);case 2:m=pa(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n["return"](Oh(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.i=b=e()}return this.i};var Ph=new Nh({Ea:{databases:!0},upgrade:function(a,b){1>b&&a.i.createObjectStore("databases",{keyPath:"actualName"})}});
function Qh(a){return xb(this,function c(){var d;return va(c,function(e){if(1==e.i)return z(e,Ph.open(),2);d=e.A;return e["return"](xh(d,["databases"],"readwrite",function(f){var g=yh(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return V(g.i.put(a,void 0)).then(function(){})})}))})})}
function Rh(){return xb(this,function b(){var c;return va(b,function(d){if(1==d.i)return z(d,Ph.open(),2);c=d.A;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;new P;var Sh;
function Th(){return xb(this,function b(){var c,d;return va(b,function(e){switch(e.i){case 1:var f;if(f=rh)f=/WebKit\/([0-9]+)/.exec(kb),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(kb),f=!(f&&602<=parseInt(f[1],10)));if(f&&!S("ytidb_allow_on_ios_safari_v8_and_v9")||Cb)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.o=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return z(e,Qh(d),4);case 4:return z(e,Rh(),5);case 5:return e["return"](!0);case 2:return pa(e),e["return"](!1)}})})}
function Uh(){if(void 0!==Sh)return Sh;gh=!0;return Sh=Th().then(function(a){gh=!1;return a})}
;var Vh;function Wh(){Vh||(Vh=new Wg("yt.offline"));return Vh}
;function Xh(){P.call(this);this.C=this.D=this.j=!1;this.o=Yh();Zh(this);$h(this)}
v(Xh,P);function Yh(){var a=window.navigator.onLine;return void 0===a?!0:a}
function $h(a){window.addEventListener("online",function(){a.o=!0;a.j&&a.dispatchEvent("ytnetworkstatus-online");ai(a);if(a.C&&S("offline_error_handling")){var b=Wh().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new W(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;Lf(d)}Wh().set("errors",{},2592E3,!0)}}})}
function Zh(a){window.addEventListener("offline",function(){a.o=!1;a.j&&a.dispatchEvent("ytnetworkstatus-offline");ai(a)})}
function ai(a){a.D&&(Mf(new W("NetworkStatusManager state did not match poll",T()-0)),a.D=!1)}
;function bi(a){a=void 0===a?{}:a;P.call(this);var b=this;this.o=this.D=0;Xh.i||(Xh.i=new Xh);this.j=Xh.i;this.j.j=!0;a.Da&&(this.j.C=!0);a.X?(this.X=a.X,ce(this.j,"ytnetworkstatus-online",function(){ci(b,"publicytnetworkstatus-online")}),ce(this.j,"ytnetworkstatus-offline",function(){ci(b,"publicytnetworkstatus-offline")})):(ce(this.j,"ytnetworkstatus-online",function(){b.dispatchEvent("publicytnetworkstatus-online")}),ce(this.j,"ytnetworkstatus-offline",function(){b.dispatchEvent("publicytnetworkstatus-offline")}))}
v(bi,P);function ci(a,b){a.X?a.o?(ag(a.D),a.D=Yf(function(){a.C!==b&&(a.dispatchEvent(b),a.C=b,a.o=T())},a.X-(T()-a.o))):(a.dispatchEvent(b),a.C=b,a.o=T()):a.dispatchEvent(b)}
;var di;function ei(a,b){b=void 0===b?{}:b;Uh().then(function(){di||(di=new bi({Da:!0}));di.j.o!==Yh()&&Mf(new W("NetworkStatusManager isOnline does not match window status"));Ng(a,b)})}
function fi(a,b){b=void 0===b?{}:b;Uh().then(function(){Ng(a,b)})}
;function gi(a){var b=this;this.i=null;a?this.i=a:Tg()&&(this.i=vg());Zf(function(){ah(b)},0,5E3)}
gi.prototype.isReady=function(){!this.i&&Tg()&&(this.i=vg());return!!this.i};
function yg(a,b,c,d){!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Mf(new W("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new W("innertube xhrclient not ready",b,c,d);Lf(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",G:c,ja:"JSON",W:function(){d.W()},
ia:d.W,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
ha:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
eb:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.i.za)&&(g=e);var h=a.i.Ba||!1,k=Ug(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.i.innertubeApiVersion+"/"+b;var l={alt:"json"};a.i.Aa&&f.headers.Authorization||(l.key=a.i.innertubeApiKey);var m=Qf(""+g+e,l||{},!0);Uh().then(function(n){if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(S("networkless_gel")&&!n||!S("networkless_gel"))var p=Zg(b,
c,k,h);if(p){var q=f.onSuccess,w=f.ha;f.onSuccess=function(x,y){$g(p);q(x,y)};
c.ha=function(x,y){$g(p);w(x,y)}}}try{S("use_fetch_for_op_xhr")?Kg(m,f):S("networkless_gel")&&d.retry?(f.method="POST",!d.Ha&&S("nwl_send_fast_on_unload")?fi(m,f):ei(m,f)):(f.method="POST",f.G||(f.G={}),Ng(m,f))}catch(x){if("InvalidAccessError"==x.name)p&&($g(p),p=0),Mf(Error("An extension is blocking network request."));
else throw x;}p&&Zf(function(){ah(a)},0,5E3)})}
;function hi(a,b,c){c=void 0===c?{}:c;var d=gi;R("ytLoggingEventsDefaultDisabled",!1)&&gi==gi&&(d=null);Ag(a,b,d,c)}
;var ii=Date.now().toString();
function ji(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ii)for(a=1,b=0;b<ii.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ii.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ki=B.ytLoggingDocDocumentNonce_||ji();D("ytLoggingDocDocumentNonce_",ki);function li(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function mi(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
D("yt_logging_screen.getRootVeType",function(a){return R(mi(void 0===a?0:a),void 0)});
function ni(){var a=R("csn-to-ctt-auth-info");a||(a={},Hf("csn-to-ctt-auth-info",a));return a}
function oi(a){a=void 0===a?0:a;var b=R(li(a));if(!b&&!R("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
D("yt_logging_screen.getCurrentCsn",oi);function pi(a,b,c){var d=ni();(c=oi(c))&&delete d[c];b&&(d[a]=b)}
D("yt_logging_screen.getCttAuthInfo",function(a){return ni()[a]});
D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==R(li(c))||b!==R(mi(c)))if(pi(a,d,c),Hf(li(c),a),Hf(mi(c),b),0==c||S("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&Ag("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ki,clientScreenNonce:a},gi)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()});var qi=[{ga:function(a){return"Cannot read property '"+a.key+"'"},
ba:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ga:function(a){return"Cannot call '"+a.key+"'"},
ba:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function ri(){this.i=[];this.j=[]}
var si;var ti=new Q;function ui(a,b,c,d){c+="."+a;a=vi(b);d[c]=a;return c.length+a.length}
function vi(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var wi=new Set,xi=0,yi=0,zi=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];
function Ai(a){var b=void 0===b?{}:b;b.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);b.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var c=b||{};b="WARNING";b=void 0===b?"ERROR":b;var d=void 0===d?!1:d;if(a){if(S("console_log_js_exceptions")){var e=[];e.push("Name: "+a.name);e.push("Message: "+a.message);a.hasOwnProperty("params")&&e.push("Error Params: "+JSON.stringify(a.params));e.push("File name: "+a.fileName);e.push("Stacktrace: "+a.stack);window.console.log(e.join("\n"),a)}if((!S("web_yterr_killswitch")||
window&&window.yterr||d)&&!(5<=xi)&&0!==a.sampleWeight){var f=Wb(a);d=f.message||"Unknown Error";e=f.name||"UnknownError";var g=f.stack||a.i||"Not available";if(g.startsWith(e+": "+d)){var h=g.split("\n");h.shift();g=h.join("\n")}h=f.lineNumber||"Not available";f=f.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],n="params."+l;k+=n.length;if(m)if(Array.isArray(m))for(var p=c,q=0;q<m.length&&!(m[q]&&(k+=ui(q,m[q],n,p),
500<k));q++);else if("object"===typeof m)for(p in p=void 0,q=c,m){if(m[p]&&(k+=ui(p,m[p],n,q),500<k))break}else c[n]=vi(m),k+=c[n].length;else c[n]=vi(m),k+=c[n].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in n=0,m){if(m[l]&&(k="params."+l,p=vi(m[l]),c[k]=p,n+=k.length+p.length,500<n))break}else c.params=vi(m);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=navigator.vendor);c={message:d,name:e,lineNumber:h,fileName:f,
stack:g,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=u(qi);for(d=a.next();!d.done;d=a.next())if(d=d.value,d.ba[c.name])for(h=u(d.ba[c.name]),e=h.next();!e.done;e=h.next())if(f=e.value,e=c.message.match(f.regexp)){c.params["params.error.original"]=e[0];h=f.groups;f={};for(g=0;g<h.length;g++)f[h[g]]=e[g+1],c.params["params.error."+h[g]]=e[g+1];c.message=d.ga(f);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(wi.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||
0<=c.stack.indexOf("/mytube.js"))){"ERROR"===b?(ti.T("handleError",c),S("record_app_crashed_web")&&0===yi&&hi("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"}),yi++):"WARNING"===b&&ti.T("handleWarning",c);if(S("kevlar_gel_error_routing")){a=b;a:{d=u(zi);for(e=d.next();!e.done;e=d.next())if(sh(e.value.toLowerCase())){d=!0;break a}d=!1}if(!d){e={stackTrace:c.stack};c.fileName&&(e.filename=c.fileName);d=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==d.length&&(1!==d.length||isNaN(Number(d[0]))?
2!==d.length||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(e.lineNumber=Number(d[0]),e.columnNumber=Number(d[1])):e.lineNumber=Number(d[0]));si||(si=new ri);d=si;h=c.message;f=c.name;a:{g=u(d.j);for(l=g.next();!l.done;l=g.next())if(l=l.value,c.message&&c.message.match(l.i)){g=l.weight;break a}g=u(d.i);for(l=g.next();!l.done;l=g.next())if(l=l.value,l.callback(c)){g=l.weight;break a}g=1}h={level:"ERROR_LEVEL_UNKNOWN",message:h,errorClassName:f,sampleWeight:g};"ERROR"===a?h.level="ERROR_LEVEL_ERROR":"WARNING"===
a&&(h.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:e};e={pageUrl:window.location.href};R("FEXP_EXPERIMENTS")&&(e.experimentIds=R("FEXP_EXPERIMENTS"));e.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+d.j.length+"&cb="+d.i.length},{key:"client.params.serviceWorker",value:"false"}];if(d=c.params)for(f=u(Object.keys(d)),g=f.next();!g.done;g=f.next())g=g.value,e.kvPairs.push({key:"client."+g,value:String(d[g])});d=R("SERVER_NAME",void 0);f=R("SERVER_VERSION",void 0);
d&&f&&(e.kvPairs.push({key:"server.name",value:d}),e.kvPairs.push({key:"server.version",value:f}));hi("clientError",{errorMetadata:e,stackTrace:a,logMessage:h});rg()}}if(!S("suppress_error_204_logging")){a=c.params||{};b={Ga:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},G:{url:R("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.G){c.stack&&(b.G.stack=c.stack);d=u(Object.keys(a));
for(e=d.next();!e.done;e=d.next())e=e.value,b.G["client."+e]=a[e];if(a=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=u(Object.keys(a)),e=d.next();!e.done;e=d.next())e=e.value,b.G[e]=a[e];a=R("SERVER_NAME",void 0);d=R("SERVER_VERSION",void 0);a&&d&&(b.G["server.name"]=a,b.G["server.version"]=d)}Ng(R("ECATCHER_REPORT_HOST","")+"/error_204",b)}wi.add(c.message);xi++}}}}
;function Bi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Ci(a)||c.some(function(e){return!Ci(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Di(a,d.value);return a}
function Di(a,b){for(var c in b)if(Ci(b[c])){if(c in a&&!Ci(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Di(a[c],b[c])}else if(Ei(b[c])){if(c in a&&!Ei(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Fi(a[c],b[c])}else a[c]=b[c];return a}
function Fi(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,Ci(d)?a.push(Di({},d)):Ei(d)?a.push(Fi([],d)):a.push(d);return a}
function Ci(a){return"object"===typeof a&&!Array.isArray(a)}
function Ei(a){return"object"===typeof a&&Array.isArray(a)}
;var Gi={},Hi=0;
function Ii(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!sh("cobalt")){if(a){a instanceof G||(a="object"==typeof a&&a.V?a.S():String(a),ib.test(a)?a=new G(a,fb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(hb))&&gb.test(b[1])?new G(a,fb):null));a=a||jb;a instanceof G&&a.constructor===G?a=a.l:(Aa(a),a="type_error:SafeUrl");if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof nb)){b="object"==typeof a;var f=null;b&&a.j&&(f=a.i());a=pb(Wa(b&&a.V?a.S():String(a)),f)}a instanceof
nb&&a.constructor===nb?a=a.l:(Aa(a),a="type_error:SafeHtml");a=encodeURIComponent(String(kf(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=fc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Og(a,b,"POST",e,d);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Og(a,b,"GET","",d);else{b:{try{var g=new Ja({url:a});if(g.l&&g.j||g.o){var h=sb(a.match(rb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=
a.search(wb);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var n=a.charCodeAt(c+2);if(!n||61==n||38==n||35==n){var p=c;break d}}c+=3}p=-1}if(0>p)var q=null;else{var w=a.indexOf("&",p);if(0>w||w>l)w=l;p+=3;q=decodeURIComponent(a.substr(p,w-p).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(x){}f=!1}f?Ji(a)?(b&&b(),f=!0):f=!1:f=!1;f||Ki(a,b)}}
function Ji(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Ki(a,b){var c=new Image,d=""+Hi++;Gi[d]=c;c.onload=c.onerror=function(){b&&Gi[d]&&b();delete Gi[d]};
c.src=a}
;function Li(a,b){bh.call(this,1,arguments)}
v(Li,bh);function Mi(a,b){bh.call(this,1,arguments)}
v(Mi,bh);var Ni=new ch("aft-recorded"),Oi=new ch("timing-sent");var Pi=window;function Qi(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Ri=Pi.performance||Pi.mozPerformance||Pi.msPerformance||Pi.webkitPerformance||new Qi;var Si=!1;Fa(Ri.clearResourceTimings||Ri.webkitClearResourceTimings||Ri.mozClearResourceTimings||Ri.msClearResourceTimings||Ri.oClearResourceTimings||za,Ri);function Ti(a){var b=Ui(a);if(b.aft)return b.aft;a=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Vi(a){var b;(b=C("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Wi(a){a=Vi(a);a.info||(a.info={});return a.info}
function Ui(a){a=Vi(a);a.tick||(a.tick={});return a.tick}
function Xi(a){var b=Vi(a).nonce;b||(b=ji(),Vi(a).nonce=b);return b}
function Yi(a){var b=Ui(a||""),c=Ti(a);c&&!Si&&(eh(Ni,new Li(Math.round(c-b._start),a)),Si=!0)}
;function Zi(){var a=C("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function $i(a){a=a||"";var b=C("ytcsi.reference");b||(Zi(),b=C("ytcsi.reference"));if(b[a])return b[a];var c=Zi(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var aj=B.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",aj);function bj(){this.i=0}
function cj(){bj.i||(bj.i=new bj);return bj.i}
bj.prototype.tick=function(a,b,c){dj(this,"tick_"+a+"_"+b)||hi("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
bj.prototype.info=function(a,b){var c=Object.keys(a).join("");dj(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,hi("latencyActionInfo",c))};
bj.prototype.span=function(a,b){var c=Object.keys(a).join("");dj(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,hi("latencyActionSpan",a))};
function dj(a,b){aj[b]=aj[b]||{count:0};var c=aj[b];c.count++;c.time=T();a.i||(a.i=Zf(function(){var d=T(),e;for(e in aj)aj[e]&&6E4<d-aj[e].time&&delete aj[e];a&&(a.i=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new W("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Ai(c)),!0):!1}
;var Z={},ej=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid=
"requestIds",Z.GetBrowse_rid="requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",
Z.ncnp="webInfo.nonPreloadedNodeCount",Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",
Z.ssdm="shellStartupDurationMs",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",
Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),fj="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),gj={},hj=(gj.ccs="CANARY_STATE_",
gj.mver="MEASUREMENT_VERSION_",gj.pis="PLAYER_INITIALIZED_STATE_",gj.yt_pt="LATENCY_PLAYER_",gj.pa="LATENCY_ACTION_",gj.yt_vst="VIDEO_STREAM_TYPE_",gj),ij="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function jj(a){return!!R("FORCE_CSI_ON_GEL",!1)||S("csi_on_gel")||!!Vi(a).useGel}
function kj(a){a=Vi(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function lj(a,b,c){if(null!==b)if(Wi(c)[a]=b,jj(c)){var d=b;b=kj(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in ej){b=ej[a];0<=Ka(fj,b)&&(d=!!d);a in hj&&"string"===typeof d&&(d=hj[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Bi({},e)}else 0<=Ka(ij,a)||Ai(new W("Unknown label logged with GEL CSI",
a)),f=void 0;f&&jj(c)&&(b=$i(c||""),Bi(b.info,f),b=kj(c),"gelInfos"in b||(b.gelInfos={}),Bi(b.gelInfos,f),c=Xi(c),cj().info(f,c))}else $i(c||"").info[a]=b}
function mj(a,b,c){var d=Ui(c);if(S("use_first_tick")&&nj(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Ri.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Ri.mark(e))}e=b||T();d[a]=e;e=kj(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||T();if(jj(c)){$i(c||"").tick[a]=b||T();e=Xi(c);if("_start"===a){var f=cj();dj(f,"baseline_"+e)||hi("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else cj().tick(a,e,b);Yi(c);e=!0}else e=!1;if(!e){if(!C("yt.timing."+(c||"")+"pingSent_")&&
(f=R((c||"")+"TIMING_ACTION",void 0),e=Ui(c),C("ytglobal.timing"+(c||"")+"ready_")&&f&&nj("_start")&&Ti(c)))if(Yi(c),c)oj(c);else{f=!0;var g=R("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&oj(c)}$i(c||"").tick[a]=b||T()}return d[a]}
function nj(a,b){var c=Ui(b);return a in c}
function oj(a){if(!jj(a)){var b=Ui(a),c=Wi(a),d=b._start,e=R("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:R((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Ti(a);var h=Ui(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Wi(a).yt_pvis&&"youtube"===e&&(lj("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=T();m={};e=[];for(var n in b)"_"!==n.charAt(0)&&(k=Math.round(b[n]-d),m[n]=k,e.push(n+"."+k));f.rt=
e.join(",");b=!!c.ap;S("debug_csi_data")&&(c=C("yt.timing.csiData"),c||(c=[],D("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var p in f)f.hasOwnProperty(p)&&(c+="&"+p+"="+f[p]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var q=void 0===q?"":q;Ji(f,q)||Ii(f,void 0,void 0,void 0,q)}else Ii(f);D("yt.timing."+(a||"")+"pingSent_",!0);eh(Oi,new Mi(m.aft+(Number(g)||0),a))}}
var pj=window;pj.ytcsi&&(pj.ytcsi.info=lj,pj.ytcsi.tick=mj);new Se(qj,1E3);function qj(){mj("vptl",0);mj("vpl",0)}
;function rj(a){try{a.register("msg-hovercard-subscription",sj,Sf())}catch(b){}}
function sj(a){if(a){a=!!a.isSubscribed;var b=document.getElementById("yt-subscribe-card");a?jf(b,"subscribe"):hf(b,"subscribe");a?hf(b,"subscribed"):jf(b,"subscribed")}}
;function tj(){var a=document.getElementById("yt-subscribe-card");b:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=Bc(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=Bc(a);b.display=
c;b.position=e;b.visibility=d}a={width:a.width,height:a.height};Rf().ready(a,null,void 0);a=Sf();Rf().addOnOpenerHandler(rj,null,a)}
var uj=tj;uj=void 0===uj?{}:uj;"function"===typeof uj&&(uj={callback:uj});tj=uj;if(tj.gapiHintOverride||R("GAPI_HINT_OVERRIDE")){var vj;var wj=document.location.href;if(-1!=wj.indexOf("?")){wj=(wj||"").split("#")[0];var xj=wj.split("?",2);vj=Pf(1<xj.length?xj[1]:xj[0])}else vj={};var yj=vj.gapi_jsh;yj&&Ta(tj,{_c:{jsl:{h:yj}}})}vd("gapi.iframes:gapi.iframes.style.common",tj);}).call(this);
