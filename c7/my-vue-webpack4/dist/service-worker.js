"use strict";var precacheConfig=[["css/1.762cdecdf6404affeb15.css","dfca11727ccf9e74f393b0c223db19ce"],["css/1.a051268f7701d613854f.css","dfca11727ccf9e74f393b0c223db19ce"],["css/1.d90da5a6b4039217cde9.css","dfca11727ccf9e74f393b0c223db19ce"],["css/1.f4343402675cdb134462.css","dfca11727ccf9e74f393b0c223db19ce"],["css/14.762cdecdf6404affeb15.css","8e3912667f44e2f21601b4ce3155c084"],["css/14.a051268f7701d613854f.css","8e3912667f44e2f21601b4ce3155c084"],["css/14.d90da5a6b4039217cde9.css","8e3912667f44e2f21601b4ce3155c084"],["css/14.f4343402675cdb134462.css","8e3912667f44e2f21601b4ce3155c084"],["css/15.762cdecdf6404affeb15.css","e1d7b842c1f869b4299b3290ac453926"],["css/15.a051268f7701d613854f.css","e1d7b842c1f869b4299b3290ac453926"],["css/15.d90da5a6b4039217cde9.css","e1d7b842c1f869b4299b3290ac453926"],["css/15.f4343402675cdb134462.css","e1d7b842c1f869b4299b3290ac453926"],["index.html","9e18248a60058a75d35fbe317eb9832f"],["js/0.chunk.20bf48e3eb774198c246.js","a7c61470277e1d7fb591f2f7355e3491"],["js/1.chunk.9c7a3d1f90704d2f268c.js","ea2257141a0c94b5e74865d022ecd316"],["js/10.chunk.f8559d20b0f495799d8d.js","7891a0aebb2838dee1d7c28b5d01bb58"],["js/11.chunk.8f382d39326ab4208834.js","501da39f6cff7a77dc0470da1f14fc2a"],["js/12.chunk.c636cc5463c83a97f4c9.js","0e379117996f84b6ae4b8ce2a2a4bd75"],["js/14.chunk.773e0105d4b96e12569a.js","0b3ae6d218a06b2f0990c3061e6f76d6"],["js/14.chunk.994c1c74c7a7e9fe05d5.js","8315a23bc38d7b775a3e2bdc56f071e4"],["js/15.chunk.695fed9eea06f1a1e071.js","42efaba71e6693152b8bd44f9a3798bd"],["js/16.chunk.dd6e845dbe40bbef01f9.js","37a239edc0f1af142e9a90c701ea40ec"],["js/17.chunk.5977a5efeab9e7ef0590.js","1564f2e82994268a72c7c4bf4187a48b"],["js/2.chunk.8ef846356c2b12f3d413.js","a3666ed38821a9a1ddfdecd1080c435b"],["js/3.chunk.9e7eeb86b740c92ea148.js","9ba3ada73fb37cf9fd3b10256bafc853"],["js/4.chunk.eda19f65538946027a50.js","b8d613992b374335d0f3580048ea7681"],["js/5.chunk.be722e30d54d4c0fe399.js","2e3486e9d3f8e882dd5007b29c763ed0"],["js/6.chunk.1abd650fc043da1a3cb8.js","c609f4faf59100c8c9ad90ecd52ce8f0"],["js/7.chunk.46b75208bced3c7f42ae.js","90bd7186aa104b8055d8bf154b37e971"],["js/8.chunk.7ee1b69811072da2261c.js","982fed8b55e9b7fcb8727723e0a4b3d0"],["js/9.chunk.45b97424bfb28e667df9.js","9c8a634ec62ebf780be43e5580b71749"],["js/runtime.bundle.d0d52c7b68c67c6ed8f6.js","492cc0938bd195850fcd644f8e45088f"],["js/runtime.bundle.ef89bd39f66c8aa09774.js","85396570cfabfc44b4a48797ad559007"],["service-worker.js","e8e1c326eaf3d072430df03201ff182c"]],cacheName="sw-precache-v3-my-vue-webpack-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,n,!1);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function c(a,s){if(!n[a]){if(!t[a]){var i="function"==typeof require&&require;if(!s&&i)return i(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return c(n||e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)c(r[a]);return c}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function o(e,t,n){var c=e.url,o=n.maxAgeSeconds,a=n.maxEntries,s=n.name,i=Date.now();return r("Updating LRU order for "+c+". Max entries is "+a+", max age is "+o),u.getDb(s).then(function(e){return u.setTimestampForUrl(e,c,i)}).then(function(e){return u.expireEntries(e,a,o,i)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var s,i=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||i.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&c(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||i.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=o.bind(null,e,t,n);s=s?s.then(r):r()}(e,n,r)})}),r.clone()})},openCache:c,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return c(t).then(function(t){return t.add(e)})},uncache:function(e,t){return c(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||a(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:a,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",c=1,o="store",a="url",s="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=function(e){return new Promise(function(t,n){var i=indexedDB.open(r+e,c);i.onupgradeneeded=function(){i.result.createObjectStore(o,{keyPath:a}).createIndex(s,s,{unique:!1})},i.onsuccess=function(){t(i.result)},i.onerror=function(){n(i.error)}})}(e)),i[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,c){var a=e.transaction(o,"readwrite");a.objectStore(o).put({url:t,timestamp:n}),a.oncomplete=function(){r(e)},a.onabort=function(){c(a.error)}})},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise(function(r,c){var i=1e3*t,u=[],f=e.transaction(o,"readwrite"),h=f.objectStore(o);h.index(s).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[s]){var r=t.value[a];u.push(r),h.delete(r),t.continue()}},f.oncomplete=function(){r(u)},f.onabort=c}):Promise.resolve([])}(e,n,r).then(function(n){return function(e,t){return t?new Promise(function(n,r){var c=[],i=e.transaction(o,"readwrite"),u=i.objectStore(o),f=u.index(s),h=f.count();f.count().onsuccess=function(){var e=h.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var o=r.value[a];c.push(o),u.delete(o),e-c.length>t&&r.continue()}})},i.oncomplete=function(){n(c)},i.onabort=r}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var c=e("./helpers"),o=e("./router"),a=e("./options");t.exports={fetchListener:function(e){var t=o.match(e.request);t?e.respondWith(t(e.request)):o.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(o.default(e.request))},activateListener:function(e){c.debug("activate event fired");var t=a.cache.name+"$$$inactive$$$";e.waitUntil(c.renameCache(t,a.cache.name))},installListener:function(e){var t=a.cache.name+"$$$inactive$$$";c.debug("install event fired"),c.debug("creating cache ["+t+"]"),e.waitUntil(c.openCache({cache:{name:t}}).then(function(e){return Promise.all(a.preCacheItems).then(r).then(c.validatePrecacheInput).then(function(t){return c.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,c=e("path-to-regexp"),o=function(e,t,n,o){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=o,this.handler=n};o.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=o},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),c=e("./helpers"),o=function(e,t){for(var n=e.entries(),r=n.next(),c=[];!r.done;){new RegExp(r.value[0]).test(t)&&c.push(r.value[1]),r=n.next()}return c},a=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){a.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),a.prototype.add=function(e,t,n,o){var a;o=o||{},t instanceof RegExp?a=RegExp:a=(a=o.origin||self.location.origin)instanceof RegExp?a.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(a),e=e.toLowerCase();var s=new r(e,t,n,o);this.routes.has(a)||this.routes.set(a,new Map);var i=this.routes.get(a);i.has(e)||i.set(e,new Map);var u=i.get(e),f=s.regexp||s.fullUrlRegExp;u.has(f.source)&&c.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,s)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,c=n.pathname;return this._match(e,o(this.routes,r),c)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var c=t[r],a=c&&c.get(e.toLowerCase());if(a){var s=o(a,n);if(s.length>0)return s[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(e,t,n){return n=n||{},c.debug("Strategy: cache first ["+e.url+"]",n),c.openCache(n).then(function(t){return t.match(e).then(function(t){var o=n.cache||r.cache,a=Date.now();return c.isResponseFresh(t,o.maxAgeSeconds,a)?t:c.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(e,t,n){return n=n||{},c.debug("Strategy: cache only ["+e.url+"]",n),c.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,o=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,o))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),c=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(o,a){var s=!1,i=[],u=function(e){i.push(e.toString()),s?a(new Error('Both cache and network failed: "'+i.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?o(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),c(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(e,t,n){var o=(n=n||{}).successResponses||r.successResponses,a=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return c.debug("Strategy: network first ["+e.url+"]",n),c.openCache(n).then(function(t){var s,i,u=[];if(a){var f=new Promise(function(o){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,a=Date.now(),s=t.maxAgeSeconds;c.isResponseFresh(e,s,a)&&o(e)})},1e3*a)});u.push(f)}var h=c.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),o.test(e.status))return e;throw c.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return c.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(h),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),c=e("./router"),o=e("./helpers"),a=e("./strategies"),s=e("./listeners");o.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:a.networkOnly,networkFirst:a.networkFirst,cacheOnly:a.cacheOnly,cacheFirst:a.cacheFirst,fastest:a.fastest,router:c,options:r,cache:o.cache,uncache:o.uncache,precache:o.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],c=0,o=0,a="",u=t&&t.delimiter||"/";null!=(n=d.exec(e));){var f=n[0],h=n[1],l=n.index;if(a+=e.slice(o,l),o=l+f.length,h)a+=h[1];else{var p=e[o],m=n[2],b=n[3],g=n[4],v=n[5],w=n[6],x=n[7];a&&(r.push(a),a="");var y=null!=m&&null!=p&&p!==m,k="+"===w||"*"===w,j="?"===w||"*"===w,E=n[2]||u,R=g||v;r.push({name:b||c++,prefix:m||"",delimiter:E,optional:j,repeat:k,partial:y,asterisk:!!x,pattern:R?i(R):x?".*":"[^"+s(E)+"]+?"})}}return o<e.length&&(a+=e.substr(o)),a&&r.push(a),r}function c(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function o(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var a="",s=n||{},i=(r||{}).pretty?c:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var h,l=s[f.name];if(null==l){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(p(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=i(l[d]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");a+=(0===d?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?o(l):i(l),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');a+=f.prefix+h}}else a+=f}return a}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function h(e,t,n){p(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,c=!1!==n.end,o="",a=0;a<e.length;a++){var i=e[a];if("string"==typeof i)o+=s(i);else{var h=s(i.prefix),l="(?:"+i.pattern+")";t.push(i),i.repeat&&(l+="(?:"+h+l+")*"),o+=l=i.optional?i.partial?h+"("+l+")?":"(?:"+h+"("+l+"))?":h+"("+l+")"}}var d=s(n.delimiter||"/"),m=o.slice(-d.length)===d;return r||(o=(m?o.slice(0,-d.length):o)+"(?:"+d+"(?=$))?"),o+=c?"$":r&&m?"":"(?="+d+"|$)",u(new RegExp("^"+o,f(n)),t)}function l(e,t,n){return p(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(e,t):p(e)?function(e,t,n){for(var r=[],c=0;c<e.length;c++)r.push(l(e[c],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return h(r(e,n),t,n)}(e,t,n)}var p=e("isarray");t.exports=l,t.exports.parse=r,t.exports.compile=function(e,t){return a(r(e,t))},t.exports.tokensToFunction=a,t.exports.tokensToRegExp=h;var d=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/[.]png$/,toolbox.cacheFirst,{});