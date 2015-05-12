/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);;var jsfeat=jsfeat||{REVISION:"ALPHA"};(function(r){var o=1.192092896e-7;var l=1e-37;var m=256,i=512,h=1024,x=2048,w=4096;var A=1,n=2,b=3,p=4;var z=new Int32Array([-1,1,4,-1,4,-1,-1,-1,8,-1,-1,-1,-1,-1,-1,-1,8]);var y=(function(){return function(B){return(B&65280)}})();var k=(function(){return function(B){return(B&255)}})();var c=(function(){return function(B){return z[(B&65280)>>8]}})();var a=0;var f=1;var e=2;var u=3;var d=1;var s=1;var g=2;var v=(function(){function B(D,C){this.size=((D+7)|0)&-8;if(typeof C==="undefined"){this.buffer=new ArrayBuffer(this.size)}else{this.buffer=C;this.size=C.length}this.u8=new Uint8Array(this.buffer);this.i32=new Int32Array(this.buffer);this.f32=new Float32Array(this.buffer);this.f64=new Float64Array(this.buffer)}return B})();var q=(function(){function B(F,D,E,C){this.type=y(E)|0;this.channel=k(E)|0;this.cols=F|0;this.rows=D|0;if(typeof C==="undefined"){this.allocate()}else{this.buffer=C;this.data=this.type&m?this.buffer.u8:(this.type&i?this.buffer.i32:(this.type&h?this.buffer.f32:this.buffer.f64))}}B.prototype.allocate=function(){delete this.data;delete this.buffer;this.buffer=new v((this.cols*c(this.type)*this.channel)*this.rows);this.data=this.type&m?this.buffer.u8:(this.type&i?this.buffer.i32:(this.type&h?this.buffer.f32:this.buffer.f64))};B.prototype.copy_to=function(D){var C=D.data,G=this.data;var E=0,F=(this.cols*this.rows*this.channel)|0;for(;E<F-4;E+=4){C[E]=G[E];C[E+1]=G[E+1];C[E+2]=G[E+2];C[E+3]=G[E+3]}for(;E<F;++E){C[E]=G[E]}};B.prototype.resize=function(F,D,C){if(typeof C==="undefined"){C=this.channel}var E=(F*c(this.type)*C)*D;if(E>this.buffer.size){this.cols=F;this.rows=D;this.channel=C;this.allocate()}else{this.cols=F;this.rows=D;this.channel=C}};return B})();var t=(function(){function B(C){this.levels=C|0;this.data=new Array(C);this.pyrdown=jsfeat.imgproc.pyrdown}B.prototype.allocate=function(C,E,F){var D=this.levels;while(--D>=0){this.data[D]=new q(C>>D,E>>D,F)}};B.prototype.build=function(F,E){if(typeof E==="undefined"){E=true}var H=2,D=F,C=this.data[0];if(!E){var G=F.cols*F.rows;while(--G>=0){C.data[G]=F.data[G]}}C=this.data[1];this.pyrdown(D,C);for(;H<this.levels;++H){D=C;C=this.data[H];this.pyrdown(D,C)}};return B})();var j=(function(){function B(C,G,E,F,D){if(typeof C==="undefined"){C=0}if(typeof G==="undefined"){G=0}if(typeof E==="undefined"){E=0}if(typeof F==="undefined"){F=0}if(typeof D==="undefined"){D=-1}this.x=C;this.y=G;this.score=E;this.level=F;this.angle=D}return B})();r.U8_t=m;r.S32_t=i;r.F32_t=h;r.S64_t=x;r.F64_t=w;r.C1_t=A;r.C2_t=n;r.C3_t=b;r.C4_t=p;r.U8C1_t=m|A;r.U8C3_t=m|b;r.U8C4_t=m|p;r.F32C1_t=h|A;r.F32C2_t=h|n;r.S32C1_t=i|A;r.S32C2_t=i|n;r.EPSILON=o;r.FLT_MIN=l;r.COLOR_RGBA2GRAY=a;r.COLOR_RGB2GRAY=f;r.COLOR_BGRA2GRAY=e;r.COLOR_BGR2GRAY=u;r.BOX_BLUR_NOSCALE=d;r.SVD_U_T=s;r.SVD_V_T=g;r.get_data_type=y;r.get_channel=k;r.get_data_type_size=c;r.data_t=v;r.matrix_t=q;r.pyramid_t=t;r.keypoint_t=j})(jsfeat);(function(b){var a=(function(){var f=(function(){function g(h){this.next=null;this.data=new jsfeat.data_t(h);this.size=this.data.size;this.buffer=this.data.buffer;this.u8=this.data.u8;this.i32=this.data.i32;this.f32=this.data.f32;this.f64=this.data.f64}g.prototype.resize=function(h){delete this.data;this.data=new jsfeat.data_t(h);this.size=this.data.size;this.buffer=this.data.buffer;this.u8=this.data.u8;this.i32=this.data.i32;this.f32=this.data.f32;this.f64=this.data.f64};return g})();var e,c;var d=0;return{allocate:function(g,k){e=c=new f(k);for(var h=0;h<g;++h){var j=new f(k);c=c.next=j;d++}},get_buffer:function(g){var h=e;e=e.next;d--;if(g>h.size){h.resize(g)}return h},put_buffer:function(g){c=c.next=g;d++}}})();b.cache=a;a.allocate(30,640*4)})(jsfeat);(function(b){var a=(function(){var c=new Int32Array(48*2);return{get_gaussian_kernel:function(p,m,e,l){var f=0,j=0,o=0,n=0,d=0;var g=0;var h=jsfeat.cache.get_buffer(p<<2);var k=h.f32;if((p&1)==1&&p<=7&&m<=0){switch(p>>1){case 0:k[0]=1;g=1;break;case 1:k[0]=0.25,k[1]=0.5,k[2]=0.25;g=0.25+0.5+0.25;break;case 2:k[0]=0.0625,k[1]=0.25,k[2]=0.375,k[3]=0.25,k[4]=0.0625;g=0.0625+0.25+0.375+0.25+0.0625;break;case 3:k[0]=0.03125,k[1]=0.109375,k[2]=0.21875,k[3]=0.28125,k[4]=0.21875,k[5]=0.109375,k[6]=0.03125;g=0.03125+0.109375+0.21875+0.28125+0.21875+0.109375+0.03125;break}}else{n=m>0?m:((p-1)*0.5-1)*0.3+0.8;d=-0.5/(n*n);for(;f<p;++f){j=f-(p-1)*0.5;o=Math.exp(d*j*j);k[f]=o;g+=o}}if(l&jsfeat.U8_t){g=256/g;for(f=0;f<p;++f){e[f]=(k[f]*g+0.5)|0}}else{g=1/g;for(f=0;f<p;++f){e[f]=k[f]*g}}jsfeat.cache.put_buffer(h)},perspective_4point_transform:function(x,B,r,w,g,A,q,v,f,z,p,u,e,y,o,t,d){var Y=B;var X=z;var W=q;var V=Y*X*W;var U=o;var T=Y*U;var S=X*T;var R=p;var n=Y*R;var m=A;var k=r;var j=y;var i=k*j;var h=i*m;var ax=j*m*R;var aw=j*W;var aq=j*R;var ao=X*W;var am=U*X;var aj=U*m;var ag=R*m;var Q=1/(aw-aq-ao+am-aj+ag);var O=Y*j;var N=k*m;var M=W*Y;var L=U*M;var K=k*X;var I=i*R;var G=k*R*m;var D=W*U*X;var C=U*k;var av=-(S-V+n*m-m*T-i*X+h-ax+aw*X)*Q;var au=(V-S-O*W+O*R+h-X*N+aj*X-ax)*Q;var ar=Y;var ap=(-R*T+L+K*W-i*W+I-G+aj*R-D)*Q;var an=(-L+M*R-C*X+I-G+C*m+D-aw*R)*Q;var al=k;var ai=(-n+M+K-N+aq-aw-am+aj)*Q;var af=(-T+n+i-K+aj-ag-aw+ao)*Q;Y=w;X=u;W=f;V=Y*X*W;U=d;T=Y*U;S=X*T;R=e;n=Y*R;m=v;k=g;j=t;i=k*j;h=i*m;ax=j*m*R;aw=j*W;aq=j*R;ao=X*W;am=U*X;aj=U*m;ag=R*m;Q=1/(aw-aq-ao+am-aj+ag);O=Y*j;N=k*m;M=W*Y;L=U*M;K=k*X;I=i*R;G=k*R*m;D=W*U*X;C=U*k;var ak=-(S-V+n*m-m*T-i*X+h-ax+aw*X)*Q;var ah=(V-S-O*W+O*R+h-X*N+aj*X-ax)*Q;var ae=Y;var ad=(-R*T+L+K*W-i*W+I-G+aj*R-D)*Q;var ac=(-L+M*R-C*X+I-G+C*m+D-aw*R)*Q;var ab=k;var aa=(-n+M+K-N+aq-aw-am+aj)*Q;var Z=(-T+n+i-K+aj-ag-aw+ao)*Q;X=an-af*al;W=av*an;V=av*al;T=ap*au;S=ar*ap;n=au*ai;var l=ar*ai;j=1/(W-V*af-T+S*af+n*al-l*an);h=-ap+al*ai;var at=-ap*af+an*ai;ag=-au+ar*af;var P=av-l;N=av*af-n;M=-au*al+ar*an;var J=V-S;var H=W-T;G=X*j;var F=ag*j;var E=M*j;var s=x.data;s[0]=ak*G+ah*(h*j)-ae*(at*j);s[1]=ak*F+ah*(P*j)-ae*(N*j);s[2]=-ak*E-ah*(J*j)+ae*(H*j);s[3]=ad*G+ac*(h*j)-ab*(at*j);s[4]=ad*F+ac*(P*j)-ab*(N*j);s[5]=-ad*E-ac*(J*j)+ab*(H*j);s[6]=aa*G+Z*(h*j)-at*j;s[7]=aa*F+Z*(P*j)-N*j;s[8]=-aa*E-Z*(J*j)+H*j},qsort:function(o,J,s,u){var D=7;var v,r,q,p;var C=0,j=0,G=0,B=0,z=0,A=0,e=0,y=0,E=0;var x=0,w=0,h=0,g=0,l=0,I=0,H=0,F=0,f=0;var k=c;if((s-J+1)<=1){return}k[0]=J;k[1]=s;while(C>=0){j=k[C<<1];G=k[(C<<1)+1];C--;for(;;){z=(G-j)+1;if(z<=D){for(e=j+1;e<=G;e++){for(y=e;y>j&&u(o[y],o[y-1]);y--){v=o[y];o[y]=o[y-1];o[y-1]=v}}break}else{f=0;x=j;h=G;l=j+(z>>1);if(z>40){E=z>>3;I=j,H=j+E,F=j+(E<<1);r=o[I],q=o[H],p=o[F];j=u(r,q)?(u(q,p)?H:(u(r,p)?F:I)):(u(p,q)?H:(u(r,p)?I:F));I=l-E,H=l,F=l+E;r=o[I],q=o[H],p=o[F];l=u(r,q)?(u(q,p)?H:(u(r,p)?F:I)):(u(p,q)?H:(u(r,p)?I:F));I=G-(E<<1),H=G-E,F=G;r=o[I],q=o[H],p=o[F];G=u(r,q)?(u(q,p)?H:(u(r,p)?F:I)):(u(p,q)?H:(u(r,p)?I:F))}I=j,H=l,F=G;r=o[I],q=o[H],p=o[F];l=u(r,q)?(u(q,p)?H:(u(r,p)?F:I)):(u(p,q)?H:(u(r,p)?I:F));if(l!=x){v=o[l];o[l]=o[x];o[x]=v;l=x}j=w=x+1;G=g=h;r=o[l];for(;;){while(j<=G&&!u(r,o[j])){if(!u(o[j],r)){if(j>w){v=o[w];o[w]=o[j];o[j]=v}f=1;w++}j++}while(j<=G&&!u(o[G],r)){if(!u(r,o[G])){if(G<g){v=o[g];o[g]=o[G];o[G]=v}f=1;g--}G--}if(j>G){break}v=o[j];o[j]=o[G];o[G]=v;f=1;j++;G--}if(f==0){j=x,G=h;for(e=j+1;e<=G;e++){for(y=e;y>j&&u(o[y],o[y-1]);y--){v=o[y];o[y]=o[y-1];o[y-1]=v}}break}z=Math.min((w-x),(j-w));A=(j-z)|0;for(B=0;B<z;++B,++A){v=o[x+B];o[x+B]=o[A];o[A]=v}z=Math.min((h-g),(g-G));A=(h-z+1)|0;for(B=0;B<z;++B,++A){v=o[j+B];o[j+B]=o[A];o[A]=v}z=(j-w);A=(g-G);if(z>1){if(A>1){if(z>A){++C;k[C<<1]=x;k[(C<<1)+1]=x+z-1;j=h-A+1,G=h}else{++C;k[C<<1]=h-A+1;k[(C<<1)+1]=h;j=x,G=x+z-1}}else{j=x,G=x+z-1}}else{if(A>1){j=h-A+1,G=h}else{break}}}}}},median:function(k,d,i){var e;var f=0,j=0,g=0,h=(d+i)>>1;for(;;){if(i<=d){return k[h]}if(i==(d+1)){if(k[d]>k[i]){e=k[d];k[d]=k[i];k[i]=e}return k[h]}f=((d+i)>>1);if(k[f]>k[i]){e=k[f];k[f]=k[i];k[i]=e}if(k[d]>k[i]){e=k[d];k[d]=k[i];k[i]=e}if(k[f]>k[d]){e=k[f];k[f]=k[d];k[d]=e}j=(d+1);e=k[f];k[f]=k[j];k[j]=e;g=i;for(;;){do{++j}while(k[d]>k[j]);do{--g}while(k[g]>k[d]);if(g<j){break}e=k[j];k[j]=k[g];k[g]=e}e=k[d];k[d]=k[g];k[g]=e;if(g<=h){d=j}else{if(g>=h){i=(g-1)}}}return 0}}})();b.math=a})(jsfeat);(function(b){var a=(function(){return{identity:function(j,g){if(typeof g==="undefined"){g=1}var i=j.data;var f=j.rows,h=j.cols,e=(h+1)|0;var c=f*h;var d=c;while(--c>=0){i[c]=0}c=d;d=0;while(d<c){i[d]=g;d=d+e}},transpose:function(f,d){var l=0,h=0,k=d.rows,c=d.cols;var n=0,e=0,m=0;var o=d.data,g=f.data;for(;l<k;e+=1,n+=c,l++){m=e;for(h=0;h<c;m+=k,h++){g[m]=o[n+h]}}},multiply:function(l,n,m){var u=0,s=0,o=0;var r=0,t=0,q=0,w=0,g=0;var f=n.cols,e=n.rows,p=m.cols;var v=n.data,d=m.data,h=l.data;var c=0;for(;u<e;r+=f,u++){for(w=0,s=0;s<p;g++,w++,s++){q=w;t=r;c=0;for(o=0;o<f;t++,q+=p,o++){c+=v[t]*d[q]}h[g]=c}}},multiply_ABt:function(c,g,d){var p=0,n=0,m=0;var r=0,l=0,f=0,u=0;var e=g.cols,o=g.rows,q=d.rows;var v=g.data,t=d.data,h=c.data;var s=0;for(;p<o;r+=e,p++){for(f=0,n=0;n<q;u++,n++){l=r;s=0;for(m=0;m<e;l++,f++,m++){s+=v[l]*t[f]}h[u]=s}}},multiply_AtB:function(l,n,m){var u=0,s=0,o=0;var r=0,t=0,q=0,w=0,g=0;var f=n.cols,e=n.rows,p=m.cols;var v=n.data,d=m.data,h=l.data;var c=0;for(;u<f;r++,u++){for(w=0,s=0;s<p;g++,w++,s++){q=w;t=r;c=0;for(o=0;o<e;t+=f,q+=p,o++){c+=v[t]*d[q]}h[g]=c}}},multiply_AAt:function(d,h){var q=0,o=0,n=0;var c=0,r=0,m=0,g=0,e=0,u=0;var f=h.cols,p=h.rows;var t=h.data,l=d.data;var s=0;for(;q<p;c+=p+1,r=m,q++){e=c;u=c;g=r;for(o=q;o<p;e++,u+=p,o++){m=r;s=0;for(n=0;n<f;n++){s+=t[m++]*t[g++]}l[e]=s;l[u]=s}}},multiply_AtA:function(c,g){var r=0,p=0,n=0;var s=0,m=0,f=0,o=0,d=0,l=0;var e=g.cols,q=g.rows;var u=g.data,h=c.data;var t=0;for(;r<e;o+=e,r++){s=r;l=o+r;d=l;for(p=r;p<e;d++,l+=e,p++){m=s;f=p;t=0;for(n=0;n<q;m+=e,f+=e,n++){t+=u[m]*u[f]}h[d]=t;h[l]=t}}},identity_3x3:function(e,d){if(typeof d==="undefined"){d=1}var c=e.data;c[0]=c[4]=c[8]=d;c[1]=c[2]=c[3]=0;c[5]=c[6]=c[7]=0},invert_3x3:function(s,e){var o=s.data,h=e.data;var n=o[4];var m=o[8];var l=o[5];var k=o[7];var j=o[0];var i=j*n;var v=j*l;var u=o[3];var t=o[1];var r=u*t;var q=o[2];var p=u*q;var g=o[6];var f=g*t;var d=g*q;var c=1/(i*m-v*k-r*m+p*k+f*l-d*n);h[0]=(n*m-l*k)*c;h[1]=-(t*m-q*k)*c;h[2]=-(-t*l+q*n)*c;h[3]=-(u*m-l*g)*c;h[4]=(j*m-d)*c;h[5]=-(v-p)*c;h[6]=-(-u*k+n*g)*c;h[7]=-(j*k-f)*c;h[8]=(i-r)*c},multiply_3x3:function(r,v,t){var y=r.data,z=v.data,l=t.data;var x=z[0],w=z[1],u=z[2];var s=z[3],q=z[4],p=z[5];var o=z[6],n=z[7],m=z[8];var k=l[0],j=l[1],i=l[2];var h=l[3],g=l[4],f=l[5];var e=l[6],d=l[7],c=l[8];y[0]=x*k+w*h+u*e;y[1]=x*j+w*g+u*d;y[2]=x*i+w*f+u*c;y[3]=s*k+q*h+p*e;y[4]=s*j+q*g+p*d;y[5]=s*i+q*f+p*c;y[6]=o*k+n*h+m*e;y[7]=o*j+n*g+m*d;y[8]=o*i+n*f+m*c},mat3x3_determinant:function(d){var c=d.data;return c[0]*c[4]*c[8]-c[0]*c[5]*c[7]-c[3]*c[1]*c[8]+c[3]*c[2]*c[7]+c[6]*c[1]*c[5]-c[6]*c[2]*c[4]},determinant_3x3:function(h,g,f,e,d,c,k,j,i){return h*d*i-h*c*j-e*g*i+e*f*j+k*g*c-k*f*d}}})();b.matmath=a})(jsfeat);(function(b){var a=(function(){var f=function(g,j,i,h){h=g[j];g[j]=g[i];g[i]=h};var d=function(h,g){h=Math.abs(h);g=Math.abs(g);if(h>g){g/=h;return h*Math.sqrt(1+g*g)}if(g>0){h/=g;return g*Math.sqrt(1+h*h)}return 0};var c=function(H,o,q,r,h,I){var C=jsfeat.EPSILON;var N=0,M=0,L=0,J=0,K=0,D=0,R=0,G=0;var u=0,v=I*I*30;var E=0,U=0,F=0,x=0,z=0,B=0,Q=0,T=0,w=0;var P=jsfeat.cache.get_buffer(I<<2);var S=jsfeat.cache.get_buffer(I<<2);var O=P.i32;var g=S.i32;if(r){for(;N<I;N++){L=N*h;for(M=0;M<I;M++){r[L+M]=0}r[L+N]=1}}for(L=0;L<I;L++){q[L]=H[(o+1)*L];if(L<I-1){for(J=L+1,E=Math.abs(H[o*L+J]),N=L+2;N<I;N++){U=Math.abs(H[o*L+N]);if(E<U){E=U,J=N}}O[L]=J}if(L>0){for(J=0,E=Math.abs(H[L]),N=1;N<L;N++){U=Math.abs(H[o*N+L]);if(E<U){E=U,J=N}}g[L]=J}}if(I>1){for(;u<v;u++){for(L=0,E=Math.abs(H[O[0]]),N=1;N<I-1;N++){U=Math.abs(H[o*N+O[N]]);if(E<U){E=U,L=N}}K=O[L];for(N=1;N<I;N++){U=Math.abs(H[o*g[N]+N]);if(E<U){E=U,L=g[N],K=N}}F=H[o*L+K];if(Math.abs(F)<=C){break}x=(q[K]-q[L])*0.5;z=Math.abs(x)+d(F,x);B=d(F,z);Q=z/B;B=F/B;z=(F/z)*F;if(x<0){B=-B,z=-z}H[o*L+K]=0;q[L]-=z;q[K]+=z;for(N=0;N<L;N++){R=(o*N+L);G=(o*N+K);T=H[R];w=H[G];H[R]=T*Q-w*B;H[G]=T*B+w*Q}for(N=(L+1);N<K;N++){R=(o*L+N);G=(o*N+K);T=H[R];w=H[G];H[R]=T*Q-w*B;H[G]=T*B+w*Q}N=K+1;R=(o*L+N);G=(o*K+N);for(;N<I;N++,R++,G++){T=H[R];w=H[G];H[R]=T*Q-w*B;H[G]=T*B+w*Q}if(r){R=h*L;G=h*K;for(N=0;N<I;N++,R++,G++){T=r[R];w=r[G];r[R]=T*Q-w*B;r[G]=T*B+w*Q}}for(M=0;M<2;M++){D=M==0?L:K;if(D<I-1){for(J=D+1,E=Math.abs(H[o*D+J]),N=D+2;N<I;N++){U=Math.abs(H[o*D+N]);if(E<U){E=U,J=N}}O[D]=J}if(D>0){for(J=0,E=Math.abs(H[D]),N=1;N<D;N++){U=Math.abs(H[o*N+D]);if(E<U){E=U,J=N}}g[D]=J}}}}for(L=0;L<I-1;L++){J=L;for(N=L+1;N<I;N++){if(q[J]<q[N]){J=N}}if(L!=J){f(q,J,L,E);if(r){for(N=0;N<I;N++){f(r,h*J+N,h*L+N,E)}}}}jsfeat.cache.put_buffer(P);jsfeat.cache.put_buffer(S)};var e=function(D,l,h,M,v,T,S,E){var C=jsfeat.EPSILON*2;var q=jsfeat.FLT_MIN;var X=0,V=0,U=0,A=0,u=Math.max(T,30);var K=0,J=0,R=0,Q=0,F=0;var Y=0,O=0,N=0;var H=0,G=0,x=0,I=0,w=0,L=0,aa=0,P=0,Z=0;var z=4660;var B=0,y=0,o=0;var r=jsfeat.cache.get_buffer(S<<3);var g=r.f64;for(;X<S;X++){for(U=0,x=0;U<T;U++){N=D[X*l+U];x+=N*N}g[X]=x;if(M){for(U=0;U<S;U++){M[X*v+U]=0}M[X*v+X]=1}}for(;A<u;A++){F=0;for(X=0;X<S-1;X++){for(V=X+1;V<S;V++){K=(X*l)|0,J=(V*l)|0;aa=g[X],P=0,Z=g[V];U=2;P+=D[K]*D[J];P+=D[K+1]*D[J+1];for(;U<T;U++){P+=D[K+U]*D[J+U]}if(Math.abs(P)<=C*Math.sqrt(aa*Z)){continue}P*=2;I=aa-Z,w=d(P,I);if(I<0){L=(w-I)*0.5;O=Math.sqrt(L/w);Y=(P/(w*O*2))}else{Y=Math.sqrt((w+I)/(w*2));O=(P/(w*Y*2))}aa=0,Z=0;U=2;H=Y*D[K]+O*D[J];G=-O*D[K]+Y*D[J];D[K]=H;D[J]=G;aa+=H*H;Z+=G*G;H=Y*D[K+1]+O*D[J+1];G=-O*D[K+1]+Y*D[J+1];D[K+1]=H;D[J+1]=G;aa+=H*H;Z+=G*G;for(;U<T;U++){H=Y*D[K+U]+O*D[J+U];G=-O*D[K+U]+Y*D[J+U];D[K+U]=H;D[J+U]=G;aa+=H*H;Z+=G*G}g[X]=aa;g[V]=Z;F=1;if(M){R=(X*v)|0,Q=(V*v)|0;U=2;H=Y*M[R]+O*M[Q];G=-O*M[R]+Y*M[Q];M[R]=H;M[Q]=G;H=Y*M[R+1]+O*M[Q+1];G=-O*M[R+1]+Y*M[Q+1];M[R+1]=H;M[Q+1]=G;for(;U<S;U++){H=Y*M[R+U]+O*M[Q+U];G=-O*M[R+U]+Y*M[Q+U];M[R+U]=H;M[Q+U]=G}}}}if(F==0){break}}for(X=0;X<S;X++){for(U=0,x=0;U<T;U++){N=D[X*l+U];x+=N*N}g[X]=Math.sqrt(x)}for(X=0;X<S-1;X++){V=X;for(U=X+1;U<S;U++){if(g[V]<g[U]){V=U}}if(X!=V){f(g,X,V,x);if(M){for(U=0;U<T;U++){f(D,X*l+U,V*l+U,N)}for(U=0;U<S;U++){f(M,X*v+U,V*v+U,N)}}}}for(X=0;X<S;X++){h[X]=g[X]}if(!M){jsfeat.cache.put_buffer(r);return}for(X=0;X<E;X++){x=X<S?g[X]:0;while(x<=q){y=(1/T);for(U=0;U<T;U++){z=(z*214013+2531011);B=(((z>>16)&32767)&256)!=0?y:-y;D[X*l+U]=B}for(A=0;A<2;A++){for(V=0;V<X;V++){x=0;for(U=0;U<T;U++){x+=D[X*l+U]*D[V*l+U]}o=0;for(U=0;U<T;U++){N=(D[X*l+U]-x*D[V*l+U]);D[X*l+U]=N;o+=Math.abs(N)}o=o?1/o:0;for(U=0;U<T;U++){D[X*l+U]*=o}}}x=0;for(U=0;U<T;U++){N=D[X*l+U];x+=N*N}x=Math.sqrt(x)}O=(1/x);for(U=0;U<T;U++){D[X*l+U]*=O}}jsfeat.cache.put_buffer(r)};return{lu_solve:function(l,g){var q=0,o=0,n=0,h=1,v=l.cols;var w=l.data,r=g.data;var x,m,u,y;for(q=0;q<v;q++){n=q;for(o=q+1;o<v;o++){if(Math.abs(w[o*v+q])>Math.abs(w[n*v+q])){n=o}}if(Math.abs(w[n*v+q])<jsfeat.EPSILON){return 0}if(n!=q){for(o=q;o<v;o++){f(w,q*v+o,n*v+o,x)}f(r,q,n,x);h=-h}u=-1/w[q*v+q];for(o=q+1;o<v;o++){m=w[o*v+q]*u;for(n=q+1;n<v;n++){w[o*v+n]+=m*w[q*v+n]}r[o]+=m*r[q]}w[q*v+q]=-u}for(q=v-1;q>=0;q--){y=r[q];for(n=q+1;n<v;n++){y-=w[q*v+n]*r[n]}r[q]=y*w[q*v+q]}return 1},cholesky_solve:function(h,g){var l=0,v=0,r=0,s=0,n=0,p=0,o=0;var u=h.cols;var t=h.data,q=g.data;var k,m;for(l=0;l<u;l++){m=1;s=(l*u);n=s;for(v=l;v<u;v++){k=t[(n+l)];for(r=0;r<l;r++){k-=t[(r*u+l)]*t[(n+r)]}if(v==l){t[(n+l)]=k;if(k==0){return 0}m=1/k}else{t[(s+v)]=k;t[(n+l)]=k*m}n=(n+u)}}s=0;for(p=0;p<u;p++){k=q[p];for(o=0;o<p;o++){k-=t[(s+o)]*q[o]}q[p]=k;s=(s+u)}s=0;for(p=0;p<u;p++){q[p]/=t[(s+p)];s=(s+u)}p=(u-1);for(;p>=0;p--){k=q[p];o=(p+1);s=(o*u);for(;o<u;o++){k-=t[(s+p)]*q[o];s=(s+u)}q[p]=k}return 1},svd_decompose:function(t,k,p,l,o){if(typeof o==="undefined"){o=0}var r=0,z=0,x=0,g=t.rows,D=t.cols,w=g,v=D;var s=t.type|jsfeat.C1_t;if(w<v){r=1;z=w;w=v;v=z}var q=jsfeat.cache.get_buffer((w*w)<<3);var h=jsfeat.cache.get_buffer(v<<3);var C=jsfeat.cache.get_buffer((v*v)<<3);var u=new jsfeat.matrix_t(w,w,s,q.data);var B=new jsfeat.matrix_t(1,v,s,h.data);var y=new jsfeat.matrix_t(v,v,s,C.data);if(r==0){jsfeat.matmath.transpose(u,t)}else{for(z=0;z<D*g;z++){u.data[z]=t.data[z]}for(;z<v*w;z++){u.data[z]=0}}e(u.data,w,B.data,y.data,v,w,v,w);if(k){for(z=0;z<v;z++){k.data[z]=B.data[z]}for(;z<D;z++){k.data[z]=0}}if(r==0){if(p&&(o&jsfeat.SVD_U_T)){z=w*w;while(--z>=0){p.data[z]=u.data[z]}}else{if(p){jsfeat.matmath.transpose(p,u)}}if(l&&(o&jsfeat.SVD_V_T)){z=v*v;while(--z>=0){l.data[z]=y.data[z]}}else{if(l){jsfeat.matmath.transpose(l,y)}}}else{if(p&&(o&jsfeat.SVD_U_T)){z=v*v;while(--z>=0){p.data[z]=y.data[z]}}else{if(p){jsfeat.matmath.transpose(p,y)}}if(l&&(o&jsfeat.SVD_V_T)){z=w*w;while(--z>=0){l.data[z]=u.data[z]}}else{if(l){jsfeat.matmath.transpose(l,u)}}}jsfeat.cache.put_buffer(q);jsfeat.cache.put_buffer(h);jsfeat.cache.put_buffer(C)},svd_solve:function(v,l,s){var E=0,C=0,z=0;var w=0,u=0;var o=v.rows,p=v.cols;var h=0,I=0,x=0;var r=v.type|jsfeat.C1_t;var F=jsfeat.cache.get_buffer((o*o)<<3);var m=jsfeat.cache.get_buffer(p<<3);var H=jsfeat.cache.get_buffer((p*p)<<3);var t=new jsfeat.matrix_t(o,o,r,F.data);var G=new jsfeat.matrix_t(1,p,r,m.data);var D=new jsfeat.matrix_t(p,p,r,H.data);var n=s.data,y=t.data,q=G.data,g=D.data;this.svd_decompose(v,G,t,D,0);x=jsfeat.EPSILON*q[0]*p;for(;E<p;E++,u+=p){I=0;for(C=0;C<p;C++){if(q[C]>x){for(z=0,h=0,w=0;z<o;z++,w+=p){h+=y[w+C]*n[z]}I+=h*g[u+C]/q[C]}}l.data[E]=I}jsfeat.cache.put_buffer(F);jsfeat.cache.put_buffer(m);jsfeat.cache.put_buffer(H)},svd_invert:function(E,t){var C=0,z=0,y=0;var v=0,s=0,h=0;var n=t.rows,o=t.cols;var l=0,w=0;var q=t.type|jsfeat.C1_t;var D=jsfeat.cache.get_buffer((n*n)<<3);var m=jsfeat.cache.get_buffer(o<<3);var G=jsfeat.cache.get_buffer((o*o)<<3);var u=new jsfeat.matrix_t(n,n,q,D.data);var F=new jsfeat.matrix_t(1,o,q,m.data);var B=new jsfeat.matrix_t(o,o,q,G.data);var r=E.data,x=u.data,p=F.data,g=B.data;this.svd_decompose(t,F,u,B,0);w=jsfeat.EPSILON*p[0]*o;for(;C<o;C++,s+=o){for(z=0,v=0;z<n;z++,h++){for(y=0,l=0;y<o;y++,v++){if(p[y]>w){l+=g[s+y]*x[v]/p[y]}}r[h]=l}}jsfeat.cache.put_buffer(D);jsfeat.cache.put_buffer(m);jsfeat.cache.put_buffer(G)},eigenVV:function(j,p,r){var k=j.cols,m=k*k;var g=j.type|jsfeat.C1_t;var o=jsfeat.cache.get_buffer((k*k)<<3);var h=jsfeat.cache.get_buffer(k<<3);var l=new jsfeat.matrix_t(k,k,g,o.data);var q=new jsfeat.matrix_t(1,k,g,h.data);while(--m>=0){l.data[m]=j.data[m]}c(l.data,k,q.data,p?p.data:null,k,k);if(r){while(--k>=0){r.data[k]=q.data[k]}}jsfeat.cache.put_buffer(o);jsfeat.cache.put_buffer(h)}}})();b.linalg=a})(jsfeat);(function(a){var c=(function(){var m=function(p){return p*p};var e=function(z,A,x,w,u){var t=0;var y=0,s=0,q=0,C=0;var v=0,r=0,p=0,B=0;var E=0,D=0;for(;t<u;++t){y+=z[t].x;s+=z[t].y;v+=A[t].x;r+=A[t].y}y/=u;s/=u;v/=u;r/=u;for(t=0;t<u;++t){E=z[t].x-y;D=z[t].y-s;q+=Math.sqrt(E*E+D*D);E=A[t].x-v;D=A[t].y-r;p+=Math.sqrt(E*E+D*D)}q/=u;p/=u;C=Math.SQRT2/q;B=Math.SQRT2/p;x[0]=x[4]=C;x[2]=-y*C;x[5]=-s*C;x[1]=x[3]=x[6]=x[7]=0;x[8]=1;w[0]=w[4]=B;w[2]=-v*B;w[5]=-r*B;w[1]=w[3]=w[6]=w[7]=0;w[8]=1};var h=function(x,u){var q=0,p=0,r=(u-1)|0;var w=0,t=0,v=0,s=0;for(;q<r;++q){w=x[q].x-x[r].x;t=x[q].y-x[r].y;for(p=0;p<q;++p){v=x[p].x-x[r].x;s=x[p].y-x[r].y;if(Math.abs(v*t-s*w)<=jsfeat.EPSILON*(Math.abs(w)+Math.abs(t)+Math.abs(v)+Math.abs(s))){return true}}}return false};var k=new jsfeat.matrix_t(3,3,jsfeat.F32_t|jsfeat.C1_t);var i=new jsfeat.matrix_t(3,3,jsfeat.F32_t|jsfeat.C1_t);var o=new jsfeat.matrix_t(6,6,jsfeat.F32_t|jsfeat.C1_t);var n=new jsfeat.matrix_t(6,1,jsfeat.F32_t|jsfeat.C1_t);var j=(function(){function p(){}p.prototype.run=function(D,q,r,t){var G=0,F=0;var B=r.type|jsfeat.C1_t;var J=r.data,v=k.data,E=i.data;var x,w,A=0,z=0;e(D,q,v,E,t);var u=jsfeat.cache.get_buffer((2*t*6)<<3);var y=jsfeat.cache.get_buffer((2*t)<<3);var C=new jsfeat.matrix_t(6,2*t,B,u.data);var H=new jsfeat.matrix_t(1,2*t,B,y.data);var I=C.data,s=H.data;for(;G<t;++G){x=D[G];w=q[G];A=v[0]*x.x+v[1]*x.y+v[2];z=v[3]*x.x+v[4]*x.y+v[5];F=G*2*6;I[F]=A,I[F+1]=z,I[F+2]=1,I[F+3]=0,I[F+4]=0,I[F+5]=0;F+=6;I[F]=0,I[F+1]=0,I[F+2]=0,I[F+3]=A,I[F+4]=z,I[F+5]=1;s[G<<1]=E[0]*w.x+E[1]*w.y+E[2];s[(G<<1)+1]=E[3]*w.x+E[4]*w.y+E[5]}jsfeat.matmath.multiply_AtA(o,C);jsfeat.matmath.multiply_AtB(n,C,H);jsfeat.linalg.lu_solve(o,n);J[0]=n.data[0],J[1]=n.data[1],J[2]=n.data[2];J[3]=n.data[3],J[4]=n.data[4],J[5]=n.data[5];J[6]=0,J[7]=0,J[8]=1;jsfeat.matmath.invert_3x3(i,i);jsfeat.matmath.multiply_3x3(r,i,r);jsfeat.matmath.multiply_3x3(r,r,k);jsfeat.cache.put_buffer(u);jsfeat.cache.put_buffer(y);return 1};p.prototype.error=function(v,w,t,r,u){var s=0;var y,x;var q=t.data;for(;s<u;++s){y=v[s];x=w[s];r[s]=m(x.x-q[0]*y.x-q[1]*y.y-q[2])+m(x.y-q[3]*y.x-q[4]*y.y-q[5])}};p.prototype.check_subset=function(s,r,q){return true};return p})();var g=new jsfeat.matrix_t(9,9,jsfeat.F32_t|jsfeat.C1_t);var f=new jsfeat.matrix_t(9,9,jsfeat.F32_t|jsfeat.C1_t);var l=(function(){function p(){}p.prototype.run=function(I,r,v,C){var L=0,K=0;var O=v.data,D=k.data,J=i.data;var M=g.data,N=f.data;var H=0,G=0,s=0,q=0;var u=0,t=0,B=0,A=0,z=0,w=0,F=0,E=0;for(;L<C;++L){B+=r[L].x;A+=r[L].y;F+=I[L].x;E+=I[L].y}B/=C;A/=C;F/=C;E/=C;for(L=0;L<C;++L){u+=Math.abs(r[L].x-B);t+=Math.abs(r[L].y-A);z+=Math.abs(I[L].x-F);w+=Math.abs(I[L].y-E)}if(Math.abs(u)<jsfeat.EPSILON||Math.abs(t)<jsfeat.EPSILON||Math.abs(z)<jsfeat.EPSILON||Math.abs(w)<jsfeat.EPSILON){return 0}u=C/u;t=C/t;z=C/z;w=C/w;D[0]=z;D[1]=0;D[2]=-F*z;D[3]=0;D[4]=w;D[5]=-E*w;D[6]=0;D[7]=0;D[8]=1;J[0]=1/u;J[1]=0;J[2]=B;J[3]=0;J[4]=1/t;J[5]=A;J[6]=0;J[7]=0;J[8]=1;L=81;while(--L>=0){M[L]=0}for(L=0;L<C;++L){H=(r[L].x-B)*u;G=(r[L].y-A)*t;s=(I[L].x-F)*z;q=(I[L].y-E)*w;M[0]+=s*s;M[1]+=s*q;M[2]+=s;M[6]+=s*-H*s;M[7]+=s*-H*q;M[8]+=s*-H;M[10]+=q*q;M[11]+=q;M[15]+=q*-H*s;M[16]+=q*-H*q;M[17]+=q*-H;M[20]+=1;M[24]+=-H*s;M[25]+=-H*q;M[26]+=-H;M[30]+=s*s;M[31]+=s*q;M[32]+=s;M[33]+=s*-G*s;M[34]+=s*-G*q;M[35]+=s*-G;M[40]+=q*q;M[41]+=q;M[42]+=q*-G*s;M[43]+=q*-G*q;M[44]+=q*-G;M[50]+=1;M[51]+=-G*s;M[52]+=-G*q;M[53]+=-G;M[60]+=-H*s*-H*s+-G*s*-G*s;M[61]+=-H*s*-H*q+-G*s*-G*q;M[62]+=-H*s*-H+-G*s*-G;M[70]+=-H*q*-H*q+-G*q*-G*q;M[71]+=-H*q*-H+-G*q*-G;M[80]+=-H*-H+-G*-G}for(L=0;L<9;++L){for(K=0;K<L;++K){M[L*9+K]=M[K*9+L]}}jsfeat.linalg.eigenVV(g,f);O[0]=N[72],O[1]=N[73],O[2]=N[74];O[3]=N[75],O[4]=N[76],O[5]=N[77];O[6]=N[78],O[7]=N[79],O[8]=N[80];jsfeat.matmath.multiply_3x3(v,i,v);jsfeat.matmath.multiply_3x3(v,v,k);H=1/O[8];O[0]*=H;O[1]*=H;O[2]*=H;O[3]*=H;O[4]*=H;O[5]*=H;O[6]*=H;O[7]*=H;O[8]=1;return 1};p.prototype.error=function(w,x,u,r,v){var t=0;var z,y,s=0,B=0,A=0;var q=u.data;for(;t<v;++t){z=w[t];y=x[t];s=1/(q[6]*z.x+q[7]*z.y+1);B=(q[0]*z.x+q[1]*z.y+q[2])*s-y.x;A=(q[3]*z.x+q[4]*z.y+q[5])*s-y.y;r[t]=(B*B+A*A)}};p.prototype.check_subset=function(M,s,B){if(B==4){var N=0;var I=M[0],H=M[1],G=M[2],E=M[3];var A=s[0],y=s[1],w=s[2],u=s[3];var L=I.x,K=I.y,J=1;var V=H.x,U=H.y,T=1;var z=G.x,x=G.y,v=1;var t=A.x,r=A.y,q=1;var F=y.x,D=y.y,C=1;var Q=w.x,P=w.y,O=1;var S=jsfeat.matmath.determinant_3x3(L,K,J,V,U,T,z,x,v);var R=jsfeat.matmath.determinant_3x3(t,r,q,F,D,C,Q,P,O);if(S*R<0){N++}L=H.x,K=H.y;V=G.x,U=G.y;z=E.x,x=E.y;t=y.x,r=y.y;F=w.x,D=w.y;Q=u.x,P=u.y;S=jsfeat.matmath.determinant_3x3(L,K,J,V,U,T,z,x,v);R=jsfeat.matmath.determinant_3x3(t,r,q,F,D,C,Q,P,O);if(S*R<0){N++}L=I.x,K=I.y;V=G.x,U=G.y;z=E.x,x=E.y;t=A.x,r=A.y;F=w.x,D=w.y;Q=u.x,P=u.y;S=jsfeat.matmath.determinant_3x3(L,K,J,V,U,T,z,x,v);R=jsfeat.matmath.determinant_3x3(t,r,q,F,D,C,Q,P,O);if(S*R<0){N++}L=I.x,K=I.y;V=H.x,U=H.y;z=E.x,x=E.y;t=A.x,r=A.y;F=y.x,D=y.y;Q=u.x,P=u.y;S=jsfeat.matmath.determinant_3x3(L,K,J,V,U,T,z,x,v);R=jsfeat.matmath.determinant_3x3(t,r,q,F,D,C,Q,P,O);if(S*R<0){N++}if(N!=0&&N!=4){return false}}return true};return p})();return{affine2d:j,homography2d:l}})();var b=(function(){function e(h,i,f,g){if(typeof h==="undefined"){h=0}if(typeof i==="undefined"){i=0.5}if(typeof f==="undefined"){f=0.5}if(typeof g==="undefined"){g=0.99}this.size=h;this.thresh=i;this.eps=f;this.prob=g}e.prototype.update_iters=function(g,i){var h=Math.log(1-this.prob);var f=Math.log(1-Math.pow(1-g,this.size));return(f>=0||-h>=i*(-f)?i:Math.round(h/f))|0};return e})();var d=(function(){var e=function(l,q,r,p,t,m,g){var v=1000;var s=[];var n=0,k=0,u=0,h=0,o=false;for(;u<v;++u){n=0;for(;n<p&&u<v;){o=false;h=0;while(!o){o=true;h=s[n]=Math.floor(Math.random()*t)|0;for(k=0;k<n;++k){if(h==s[k]){o=false;break}}}m[n]=q[h];g[n]=r[h];if(!l.check_subset(m,g,n+1)){u++;continue}++n}break}return(n==p&&u<v)};var f=function(k,m,p,q,o,g,h,s){var j=0,l=0,n=0;var r=g*g;k.error(p,q,m,h,o);for(;l<o;++l){n=h[l]<=r;s[l]=n;j+=n}return j};return{ransac:function(E,m,x,i,l,j,y,g){if(typeof g==="undefined"){g=1000}if(l<E.size){return false}var v=E.size;var A=g,z=0;var q=false;var D=[];var C=[];var r=false;var G=j.cols,w=j.rows;var u=j.type|jsfeat.C1_t;var B=jsfeat.cache.get_buffer((G*w)<<3);var h=jsfeat.cache.get_buffer(l);var t=jsfeat.cache.get_buffer(l<<2);var o=new jsfeat.matrix_t(G,w,u,B.data);var s=new jsfeat.matrix_t(l,1,jsfeat.U8C1_t,h.data);var F=-1,p=0;var n=0;var k=t.f32;if(l==v){if(m.run(x,i,o,l)<=0){jsfeat.cache.put_buffer(B);jsfeat.cache.put_buffer(h);jsfeat.cache.put_buffer(t);return false}o.copy_to(j);if(y){while(--l>=0){y.data[l]=1}}jsfeat.cache.put_buffer(B);jsfeat.cache.put_buffer(h);jsfeat.cache.put_buffer(t);return true}for(;z<A;++z){r=e(m,x,i,v,l,D,C);if(!r){if(z==0){jsfeat.cache.put_buffer(B);jsfeat.cache.put_buffer(h);jsfeat.cache.put_buffer(t);return false}break}n=m.run(D,C,o,v);if(n<=0){continue}p=f(m,o,x,i,l,E.thresh,k,s.data);if(p>Math.max(F,v-1)){o.copy_to(j);F=p;if(y){s.copy_to(y)}A=E.update_iters((l-p)/l,A);q=true}}jsfeat.cache.put_buffer(B);jsfeat.cache.put_buffer(h);jsfeat.cache.put_buffer(t);return q},lmeds:function(H,n,z,i,l,j,B,g){if(typeof g==="undefined"){g=1000}if(l<H.size){return false}var w=H.size;var D=g,C=0;var r=false;var G=[];var F=[];var s=false;var I=j.cols,y=j.rows;var v=j.type|jsfeat.C1_t;var E=jsfeat.cache.get_buffer((I*y)<<3);var h=jsfeat.cache.get_buffer(l);var u=jsfeat.cache.get_buffer(l<<2);var p=new jsfeat.matrix_t(I,y,v,E.data);var t=new jsfeat.matrix_t(l,1,jsfeat.U8_t|jsfeat.C1_t,h.data);var q=0;var o=0;var k=u.f32;var A=1000000000,x=0,m=0;H.eps=0.45;D=H.update_iters(H.eps,D);if(l==w){if(n.run(z,i,p,l)<=0){jsfeat.cache.put_buffer(E);jsfeat.cache.put_buffer(h);jsfeat.cache.put_buffer(u);return false}p.copy_to(j);if(B){while(--l>=0){B.data[l]=1}}jsfeat.cache.put_buffer(E);jsfeat.cache.put_buffer(h);jsfeat.cache.put_buffer(u);return true}for(;C<D;++C){s=e(n,z,i,w,l,G,F);if(!s){if(C==0){jsfeat.cache.put_buffer(E);jsfeat.cache.put_buffer(h);jsfeat.cache.put_buffer(u);return false}break}o=n.run(G,F,p,w);if(o<=0){continue}n.error(z,i,p,k,l);m=jsfeat.math.median(k,0,l-1);if(m<A){A=m;p.copy_to(j);r=true}}if(r){x=2.5*1.4826*(1+5/(l-w))*Math.sqrt(A);x=Math.max(x,0.001);q=f(n,j,z,i,l,x,k,t.data);if(B){t.copy_to(B)}r=q>=w}jsfeat.cache.put_buffer(E);jsfeat.cache.put_buffer(h);jsfeat.cache.put_buffer(u);return r}}})();a.ransac_params_t=b;a.motion_model=c;a.motion_estimator=d})(jsfeat);(function(b){var a=(function(){var c=function(q,S,O,p){var r=0;var y=q.channel,v=q.cols,J=q.rows;var P=q.data,m=S.data;var I=v/O,H=J/p;var n=(I*H*65536)|0;var x=0,u=0,C=0,A=0,t=0,s=0,G=0,F=0,D=0,B=0;var Q=0,N=0,K=0,o=0,M=0,E=0;var l=jsfeat.cache.get_buffer((O*y)<<2);var g=jsfeat.cache.get_buffer((O*y)<<2);var R=jsfeat.cache.get_buffer((v*2*3)<<2);var L=l.i32;var j=g.i32;var z=R.i32;for(;x<O;x++){D=x*I,B=D+I;t=(D+1-0.000001)|0,s=B|0;t=Math.min(t,v-1);s=Math.min(s,v-1);if(t>D){z[F++]=(x*y)|0;z[F++]=((t-1)*y)|0;z[F++]=((t-D)*256)|0;r++}for(C=t;C<s;C++){r++;z[F++]=(x*y)|0;z[F++]=(C*y)|0;z[F++]=256}if(B-s>0.001){r++;z[F++]=(x*y)|0;z[F++]=(s*y)|0;z[F++]=((B-s)*256)|0}}for(x=0;x<O*y;x++){L[x]=j[x]=0}u=0;for(A=0;A<J;A++){Q=v*A;for(F=0;F<r;F++){K=z[F*3];t=z[F*3+1];o=z[F*3+2];for(G=0;G<y;G++){L[K+G]+=P[Q+t+G]*o}}if((u+1)*H<=A+1||A==J-1){M=(Math.max(A+1-(u+1)*H,0)*256)|0;E=256-M;N=O*u;if(M<=0){for(x=0;x<O*y;x++){m[N+x]=Math.min(Math.max((j[x]+L[x]*256)/n,0),255);j[x]=L[x]=0}}else{for(x=0;x<O*y;x++){m[N+x]=Math.min(Math.max((j[x]+L[x]*E)/n,0),255);j[x]=L[x]*M;L[x]=0}}u++}else{for(x=0;x<O*y;x++){j[x]+=L[x]*256;L[x]=0}}}jsfeat.cache.put_buffer(g);jsfeat.cache.put_buffer(l);jsfeat.cache.put_buffer(R)};var f=function(p,S,N,o){var q=0;var x=p.channel,u=p.cols,I=p.rows;var O=p.data,m=S.data;var H=u/N,G=I/o;var Q=1/(H*G);var v=0,t=0,B=0,z=0,s=0,r=0,F=0,E=0,C=0,A=0;var P=0,M=0,J=0,n=0,L=0,D=0;var l=jsfeat.cache.get_buffer((N*x)<<2);var g=jsfeat.cache.get_buffer((N*x)<<2);var R=jsfeat.cache.get_buffer((u*2*3)<<2);var K=l.f32;var j=g.f32;var y=R.f32;for(;v<N;v++){C=v*H,A=C+H;s=(C+1-0.000001)|0,r=A|0;s=Math.min(s,u-1);r=Math.min(r,u-1);if(s>C){q++;y[E++]=((s-1)*x)|0;y[E++]=(v*x)|0;y[E++]=(s-C)*Q}for(B=s;B<r;B++){q++;y[E++]=(B*x)|0;y[E++]=(v*x)|0;y[E++]=Q}if(A-r>0.001){q++;y[E++]=(r*x)|0;y[E++]=(v*x)|0;y[E++]=(A-r)*Q}}for(v=0;v<N*x;v++){K[v]=j[v]=0}t=0;for(z=0;z<I;z++){P=u*z;for(E=0;E<q;E++){s=y[E*3]|0;J=y[E*3+1]|0;n=y[E*3+2];for(F=0;F<x;F++){K[J+F]+=O[P+s+F]*n}}if((t+1)*G<=z+1||z==I-1){L=Math.max(z+1-(t+1)*G,0);D=1-L;M=N*t;if(Math.abs(L)<0.001){for(v=0;v<N*x;v++){m[M+v]=j[v]+K[v];j[v]=K[v]=0}}else{for(v=0;v<N*x;v++){m[M+v]=j[v]+K[v]*D;j[v]=K[v]*L;K[v]=0}}t++}else{for(v=0;v<N*x;v++){j[v]+=K[v];K[v]=0}}}jsfeat.cache.put_buffer(g);jsfeat.cache.put_buffer(l);jsfeat.cache.put_buffer(R)};var e=function(D,F,m,s,B,t,g,n){var z=0,y=0,x=0,A=0,u=0,l=0,G=0,E=0,C=0,v=t[0],r=0;var q=s<<1,p=s*3,o=s<<2;for(;z<B;++z){l=F[A];for(y=0;y<n;++y){D[y]=l}for(y=0;y<=s-2;y+=2){D[y+n]=F[A+y];D[y+n+1]=F[A+y+1]}for(;y<s;++y){D[y+n]=F[A+y]}l=F[A+s-1];for(y=s;y<n+s;++y){D[y+n]=l}for(y=0;y<=s-4;y+=4){l=D[y]*v,G=D[y+1]*v,E=D[y+2]*v,C=D[y+3]*v;for(x=1;x<g;++x){r=t[x];l+=D[x+y]*r;G+=D[x+y+1]*r;E+=D[x+y+2]*r;C+=D[x+y+3]*r}m[u+y]=Math.min(l>>8,255);m[u+y+1]=Math.min(G>>8,255);m[u+y+2]=Math.min(E>>8,255);m[u+y+3]=Math.min(C>>8,255)}for(;y<s;++y){l=D[y]*v;for(x=1;x<g;++x){l+=D[x+y]*t[x]}m[u+y]=Math.min(l>>8,255)}A+=s;u+=s}for(z=0;z<s;++z){l=m[z];for(y=0;y<n;++y){D[y]=l}x=z;for(y=0;y<=B-2;y+=2,x+=q){D[y+n]=m[x];D[y+n+1]=m[x+s]}for(;y<B;++y,x+=s){D[y+n]=m[x]}l=m[(B-1)*s+z];for(y=B;y<n+B;++y){D[y+n]=l}u=z;for(y=0;y<=B-4;y+=4,u+=o){l=D[y]*v,G=D[y+1]*v,E=D[y+2]*v,C=D[y+3]*v;for(x=1;x<g;++x){r=t[x];l+=D[x+y]*r;G+=D[x+y+1]*r;E+=D[x+y+2]*r;C+=D[x+y+3]*r}m[u]=Math.min(l>>8,255);m[u+s]=Math.min(G>>8,255);m[u+q]=Math.min(E>>8,255);m[u+p]=Math.min(C>>8,255)}for(;y<B;++y,u+=s){l=D[y]*v;for(x=1;x<g;++x){l+=D[x+y]*t[x]}m[u]=Math.min(l>>8,255)}}};var d=function(D,F,m,s,B,t,g,n){var z=0,y=0,x=0,A=0,u=0,l=0,G=0,E=0,C=0,v=t[0],r=0;var q=s<<1,p=s*3,o=s<<2;for(;z<B;++z){l=F[A];for(y=0;y<n;++y){D[y]=l}for(y=0;y<=s-2;y+=2){D[y+n]=F[A+y];D[y+n+1]=F[A+y+1]}for(;y<s;++y){D[y+n]=F[A+y]}l=F[A+s-1];for(y=s;y<n+s;++y){D[y+n]=l}for(y=0;y<=s-4;y+=4){l=D[y]*v,G=D[y+1]*v,E=D[y+2]*v,C=D[y+3]*v;for(x=1;x<g;++x){r=t[x];l+=D[x+y]*r;G+=D[x+y+1]*r;E+=D[x+y+2]*r;C+=D[x+y+3]*r}m[u+y]=l;m[u+y+1]=G;m[u+y+2]=E;m[u+y+3]=C}for(;y<s;++y){l=D[y]*v;for(x=1;x<g;++x){l+=D[x+y]*t[x]}m[u+y]=l}A+=s;u+=s}for(z=0;z<s;++z){l=m[z];for(y=0;y<n;++y){D[y]=l}x=z;for(y=0;y<=B-2;y+=2,x+=q){D[y+n]=m[x];D[y+n+1]=m[x+s]}for(;y<B;++y,x+=s){D[y+n]=m[x]}l=m[(B-1)*s+z];for(y=B;y<n+B;++y){D[y+n]=l}u=z;for(y=0;y<=B-4;y+=4,u+=o){l=D[y]*v,G=D[y+1]*v,E=D[y+2]*v,C=D[y+3]*v;for(x=1;x<g;++x){r=t[x];l+=D[x+y]*r;G+=D[x+y+1]*r;E+=D[x+y+2]*r;C+=D[x+y+3]*r}m[u]=l;m[u+s]=G;m[u+q]=E;m[u+p]=C}for(;y<B;++y,u+=s){l=D[y]*v;for(x=1;x<g;++x){l+=D[x+y]*t[x]}m[u]=l}}};return{grayscale:function(n,r,A,D,g){if(typeof g==="undefined"){g=jsfeat.COLOR_RGBA2GRAY}var q=0,p=0,z=0,v=0,m=0,u=0;var s=4899,B=9617,C=1868,o=4;if(g==jsfeat.COLOR_BGRA2GRAY||g==jsfeat.COLOR_BGR2GRAY){s=1868;C=4899}if(g==jsfeat.COLOR_RGB2GRAY||g==jsfeat.COLOR_BGR2GRAY){o=3}var l=o<<1,k=(o*3)|0;D.resize(r,A,1);var t=D.data;for(p=0;p<A;++p,v+=r,z+=r*o){for(q=0,m=z,u=v;q<=r-4;q+=4,m+=o<<2,u+=4){t[u]=(n[m]*s+n[m+1]*B+n[m+2]*C+8192)>>14;t[u+1]=(n[m+o]*s+n[m+o+1]*B+n[m+o+2]*C+8192)>>14;t[u+2]=(n[m+l]*s+n[m+l+1]*B+n[m+l+2]*C+8192)>>14;t[u+3]=(n[m+k]*s+n[m+k+1]*B+n[m+k+2]*C+8192)>>14}for(;q<r;++q,++u,m+=o){t[u]=(n[m]*s+n[m+1]*B+n[m+2]*C+8192)>>14}}},resample:function(l,m,i,k){var j=l.rows,g=l.cols;if(j>k&&g>i){m.resize(i,k,l.channel);if(l.type&jsfeat.U8_t&&m.type&jsfeat.U8_t&&j*g/(k*i)<256){c(l,m,i,k)}else{f(l,m,i,k)}}},box_blur_gray:function(r,J,n,l){if(typeof l==="undefined"){l=0}var z=r.cols,E=r.rows,s=E<<1,v=z<<1;var D=0,u=0,t=0,m=0;var B=((n<<1)+1)|0;var p=(n+1)|0,H=(p+1)|0;var I=l&jsfeat.BOX_BLUR_NOSCALE?1:(1/(B*B));var C=jsfeat.cache.get_buffer((z*E)<<2);var j=0,G=0,o=0,q=0,k=0;var F=C.i32;var g=r.data;var A=0;J.resize(z,E,r.channel);for(t=0;t<E;++t){G=t;j=p*g[o];for(D=(o+1)|0,m=(o+n)|0;D<=m;++D){j+=g[D]}q=(o+p)|0;k=o;A=g[k];for(u=0;u<n;++u,G+=E){F[G]=j;j+=g[q]-A;q++}for(;u<z-H;u+=2,G+=s){F[G]=j;j+=g[q]-g[k];F[G+E]=j;j+=g[q+1]-g[k+1];q+=2;k+=2}for(;u<z-p;++u,G+=E){F[G]=j;j+=g[q]-g[k];q++;k++}A=g[q-1];for(;u<z;++u,G+=E){F[G]=j;j+=A-g[k];k++}o+=z}o=0;g=J.data;if(I==1){for(t=0;t<z;++t){G=t;j=p*F[o];for(D=(o+1)|0,m=(o+n)|0;D<=m;++D){j+=F[D]}q=o+p;k=o;A=F[k];for(u=0;u<n;++u,G+=z){g[G]=j;j+=F[q]-A;q++}for(;u<E-H;u+=2,G+=v){g[G]=j;j+=F[q]-F[k];g[G+z]=j;j+=F[q+1]-F[k+1];q+=2;k+=2}for(;u<E-p;++u,G+=z){g[G]=j;j+=F[q]-F[k];q++;k++}A=F[q-1];for(;u<E;++u,G+=z){g[G]=j;j+=A-F[k];k++}o+=E}}else{for(t=0;t<z;++t){G=t;j=p*F[o];for(D=(o+1)|0,m=(o+n)|0;D<=m;++D){j+=F[D]}q=o+p;k=o;A=F[k];for(u=0;u<n;++u,G+=z){g[G]=j*I;j+=F[q]-A;q++}for(;u<E-H;u+=2,G+=v){g[G]=j*I;j+=F[q]-F[k];g[G+z]=j*I;j+=F[q+1]-F[k+1];q+=2;k+=2}for(;u<E-p;++u,G+=z){g[G]=j*I;j+=F[q]-F[k];q++;k++}A=F[q-1];for(;u<E;++u,G+=z){g[G]=j*I;j+=A-F[k];k++}o+=E}}jsfeat.cache.put_buffer(C)},gaussian_blur:function(g,s,r,v){if(typeof v==="undefined"){v=0}if(typeof r==="undefined"){r=0}r=r==0?(Math.max(1,(4*v+1-1e-8))*2+1)|0:r;var x=r>>1;var t=g.cols,p=g.rows;var u=g.type,n=u&jsfeat.U8_t;s.resize(t,p,g.channel);var m=g.data,j=s.data;var k,i,q=(r+Math.max(p,t))|0;var l=jsfeat.cache.get_buffer(q<<2);var o=jsfeat.cache.get_buffer(r<<2);if(n){k=l.i32;i=o.i32}else{if(u&jsfeat.S32_t){k=l.i32;i=o.f32}else{k=l.f32;i=o.f32}}jsfeat.math.get_gaussian_kernel(r,v,i,u);if(n){e(k,m,j,t,p,i,r,x)}else{d(k,m,j,t,p,i,r,x)}jsfeat.cache.put_buffer(l);jsfeat.cache.put_buffer(o)},pyrdown:function(k,A,s,r){if(typeof s==="undefined"){s=0}if(typeof r==="undefined"){r=0}var q=k.cols,t=k.rows;var p=q>>1,l=t>>1;var B=p-(s<<1),u=l-(r<<1);var o=0,n=0,g=s+r*q,m=0,v=0,i=0;A.resize(p,l,k.channel);var z=k.data,j=A.data;for(n=0;n<u;++n){m=g;i=v;for(o=0;o<=B-2;o+=2,i+=2,m+=4){j[i]=(z[m]+z[m+1]+z[m+q]+z[m+q+1]+2)>>2;j[i+1]=(z[m+2]+z[m+3]+z[m+q+2]+z[m+q+3]+2)>>2}for(;o<B;++o,++i,m+=2){j[i]=(z[m]+z[m+1]+z[m+q]+z[m+q+1]+2)>>2}g+=q<<1;v+=p}},scharr_derivatives:function(j,G){var p=j.cols,s=j.rows;var H=p<<1,o=0,m=0,u=0,E,D,C,B,A,z;var v=0,t=0,r=0,i=0;var n,l;G.resize(p,s,2);var F=j.data,g=G.data;var k=jsfeat.cache.get_buffer((p+2)<<2);var q=jsfeat.cache.get_buffer((p+2)<<2);if(j.type&jsfeat.U8_t||j.type&jsfeat.S32_t){n=k.i32;l=q.i32}else{n=k.f32;l=q.f32}for(;m<s;++m,t+=p){v=((m>0?m-1:1)*p)|0;r=((m<s-1?m+1:s-2)*p)|0;i=(m*H)|0;for(o=0,u=1;o<=p-2;o+=2,u+=2){E=F[v+o],D=F[r+o];n[u]=((E+D)*3+(F[t+o])*10);l[u]=(D-E);E=F[v+o+1],D=F[r+o+1];n[u+1]=((E+D)*3+(F[t+o+1])*10);l[u+1]=(D-E)}for(;o<p;++o,++u){E=F[v+o],D=F[r+o];n[u]=((E+D)*3+(F[t+o])*10);l[u]=(D-E)}o=(p+1)|0;n[0]=n[1];n[o]=n[p];l[0]=l[1];l[o]=l[p];for(o=0;o<=p-4;o+=4){E=l[o+2],D=l[o+1],C=l[o+3],B=l[o+4],A=n[o+2],z=n[o+3];g[i++]=(A-n[o]);g[i++]=((E+l[o])*3+D*10);g[i++]=(z-n[o+1]);g[i++]=((C+D)*3+E*10);g[i++]=((n[o+4]-A));g[i++]=(((B+E)*3+C*10));g[i++]=((n[o+5]-z));g[i++]=(((l[o+5]+C)*3+B*10))}for(;o<p;++o){g[i++]=((n[o+2]-n[o]));g[i++]=(((l[o+2]+l[o])*3+l[o+1]*10))}}jsfeat.cache.put_buffer(k);jsfeat.cache.put_buffer(q)},sobel_derivatives:function(j,G){var p=j.cols,s=j.rows;var H=p<<1,o=0,m=0,u=0,E,D,C,B,A,z;var v=0,t=0,r=0,i=0;var n,l;G.resize(p,s,2);var F=j.data,g=G.data;var k=jsfeat.cache.get_buffer((p+2)<<2);var q=jsfeat.cache.get_buffer((p+2)<<2);if(j.type&jsfeat.U8_t||j.type&jsfeat.S32_t){n=k.i32;l=q.i32}else{n=k.f32;l=q.f32}for(;m<s;++m,t+=p){v=((m>0?m-1:1)*p)|0;r=((m<s-1?m+1:s-2)*p)|0;i=(m*H)|0;for(o=0,u=1;o<=p-2;o+=2,u+=2){E=F[v+o],D=F[r+o];n[u]=((E+D)+(F[t+o]*2));l[u]=(D-E);E=F[v+o+1],D=F[r+o+1];n[u+1]=((E+D)+(F[t+o+1]*2));l[u+1]=(D-E)}for(;o<p;++o,++u){E=F[v+o],D=F[r+o];n[u]=((E+D)+(F[t+o]*2));l[u]=(D-E)}o=(p+1)|0;n[0]=n[1];n[o]=n[p];l[0]=l[1];l[o]=l[p];for(o=0;o<=p-4;o+=4){E=l[o+2],D=l[o+1],C=l[o+3],B=l[o+4],A=n[o+2],z=n[o+3];g[i++]=(A-n[o]);g[i++]=(E+l[o]+D*2);g[i++]=(z-n[o+1]);g[i++]=(C+D+E*2);g[i++]=(n[o+4]-A);g[i++]=(B+E+C*2);g[i++]=(n[o+5]-z);g[i++]=(l[o+5]+C+B*2)}for(;o<p;++o){g[i++]=(n[o+2]-n[o]);g[i++]=(l[o+2]+l[o]+l[o+1]*2)}}jsfeat.cache.put_buffer(k);jsfeat.cache.put_buffer(q)},compute_integral_image:function(g,l,y,u){var t=g.cols|0,w=g.rows|0,o=g.data;var r=(t+1)|0;var B=0,z=0,h=0,x=0,q=0,n=0,A=0,m=0;if(l&&y){for(;q<r;++q){l[q]=0,y[q]=0}h=(r+1)|0,x=1;for(q=0,m=0;q<w;++q,++h,++x){B=z=0;for(n=0;n<=t-2;n+=2,m+=2,h+=2,x+=2){A=o[m];B+=A,z+=A*A;l[h]=l[x]+B;y[h]=y[x]+z;A=o[m+1];B+=A,z+=A*A;l[h+1]=l[x+1]+B;y[h+1]=y[x+1]+z}for(;n<t;++n,++m,++h,++x){A=o[m];B+=A,z+=A*A;l[h]=l[x]+B;y[h]=y[x]+z}}}else{if(l){for(;q<r;++q){l[q]=0}h=(r+1)|0,x=1;for(q=0,m=0;q<w;++q,++h,++x){B=0;for(n=0;n<=t-2;n+=2,m+=2,h+=2,x+=2){B+=o[m];l[h]=l[x]+B;B+=o[m+1];l[h+1]=l[x+1]+B}for(;n<t;++n,++m,++h,++x){B+=o[m];l[h]=l[x]+B}}}else{if(y){for(;q<r;++q){y[q]=0}h=(r+1)|0,x=1;for(q=0,m=0;q<w;++q,++h,++x){z=0;for(n=0;n<=t-2;n+=2,m+=2,h+=2,x+=2){A=o[m];z+=A*A;y[h]=y[x]+z;A=o[m+1];z+=A*A;y[h+1]=y[x+1]+z}for(;n<t;++n,++m,++h,++x){A=o[m];z+=A*A;y[h]=y[x]+z}}}}}if(u){for(q=0;q<r;++q){u[q]=0}h=(r+1)|0,x=0;for(q=0,m=0;q<w;++q,++h,++x){for(n=0;n<=t-2;n+=2,m+=2,h+=2,x+=2){u[h]=o[m]+u[x];u[h+1]=o[m+1]+u[x+1]}for(;n<t;++n,++m,++h,++x){u[h]=o[m]+u[x]}}h=(r+t)|0,x=t;for(q=0;q<w;++q,h+=r,x+=r){u[h]+=u[x]}for(n=t-1;n>0;--n){h=n+w*r,x=h-r;for(q=w;q>0;--q,h-=r,x-=r){u[h]+=u[x]+u[x+1]}}}},equalize_histogram:function(j,r){var s=j.cols,q=j.rows,o=j.data;r.resize(s,q,j.channel);var l=r.data,t=s*q;var p=0,n=0,k,g;var m=jsfeat.cache.get_buffer(256<<2);k=m.i32;for(;p<256;++p){k[p]=0}for(p=0;p<t;++p){++k[o[p]]}n=k[0];for(p=1;p<256;++p){n=k[p]+=n}g=255/t;for(p=0;p<t;++p){l[p]=(k[o[p]]*g+0.5)|0}jsfeat.cache.put_buffer(m)},canny:function(u,V,E,k){var C=u.cols,L=u.rows,S=u.data;V.resize(C,L,u.channel);var o=V.data;var K=0,H=0,q=0,A=C<<1,R=0,J=0,N=0,z=0,v=0,D=0;var g=0,U=0;var p=jsfeat.cache.get_buffer((L*A)<<2);var m=jsfeat.cache.get_buffer((3*(C+2))<<2);var n=jsfeat.cache.get_buffer(((L+2)*(C+2))<<2);var t=jsfeat.cache.get_buffer((L*C)<<2);var Q=m.i32;var T=n.i32;var r=t.i32;var G=p.i32;var l=new jsfeat.matrix_t(C,L,jsfeat.S32C2_t,p.data);var P=1,O=(C+2+1)|0,M=(2*(C+2)+1)|0,B=(C+2)|0,I=(B+1)|0,F=0;this.sobel_derivatives(u,l);if(E>k){K=E;E=k;k=K}K=(3*(C+2))|0;while(--K>=0){Q[K]=0}K=((L+2)*(C+2))|0;while(--K>=0){T[K]=0}for(;H<C;++H,q+=2){z=G[q],v=G[q+1];Q[O+H]=((z^(z>>31))-(z>>31))+((v^(v>>31))-(v>>31))}for(K=1;K<=L;++K,q+=A){if(K==L){H=M+C;while(--H>=M){Q[H]=0}}else{for(H=0;H<C;H++){z=G[q+(H<<1)],v=G[q+(H<<1)+1];Q[M+H]=((z^(z>>31))-(z>>31))+((v^(v>>31))-(v>>31))}}R=(q-A)|0;T[I-1]=0;J=0;for(H=0;H<C;++H,R+=2){N=Q[O+H];if(N>E){z=G[R];v=G[R+1];D=z^v;z=((z^(z>>31))-(z>>31))|0;v=((v^(v>>31))-(v>>31))|0;g=z*13573;U=g+((z+z)<<15);v<<=15;if(v<g){if(N>Q[O+H-1]&&N>=Q[O+H+1]){if(N>k&&!J&&T[I+H-B]!=2){T[I+H]=2;J=1;r[F++]=I+H}else{T[I+H]=1}continue}}else{if(v>U){if(N>Q[P+H]&&N>=Q[M+H]){if(N>k&&!J&&T[I+H-B]!=2){T[I+H]=2;J=1;r[F++]=I+H}else{T[I+H]=1}continue}}else{D=D<0?-1:1;if(N>Q[P+H-D]&&N>Q[M+H+D]){if(N>k&&!J&&T[I+H-B]!=2){T[I+H]=2;J=1;r[F++]=I+H}else{T[I+H]=1}continue}}}}T[I+H]=0;J=0}T[I+C]=0;I+=B;H=P;P=O;O=M;M=H}H=I-B-1;for(K=0;K<B;++K,++H){T[H]=0}while(F>0){I=r[--F];I-=B+1;if(T[I]==1){T[I]=2,r[F++]=I}I+=1;if(T[I]==1){T[I]=2,r[F++]=I}I+=1;if(T[I]==1){T[I]=2,r[F++]=I}I+=B;if(T[I]==1){T[I]=2,r[F++]=I}I-=2;if(T[I]==1){T[I]=2,r[F++]=I}I+=B;if(T[I]==1){T[I]=2,r[F++]=I}I+=1;if(T[I]==1){T[I]=2,r[F++]=I}I+=1;if(T[I]==1){T[I]=2,r[F++]=I}}I=B+1;P=0;for(K=0;K<L;++K,I+=B){for(H=0;H<C;++H){o[P++]=(T[I+H]==2)*255}}jsfeat.cache.put_buffer(p);jsfeat.cache.put_buffer(m);jsfeat.cache.put_buffer(n);jsfeat.cache.put_buffer(t)},warp_perspective:function(t,D,A,r){if(typeof r==="undefined"){r=0}var l=t.cols|0,v=t.rows|0,L=D.cols|0,j=D.rows|0;var H=t.data,q=D.data;var F=0,E=0,G=0,u=0,k=0,C=0,p=0,h=0,O=0,P=0,s=0,R=0,Q=0,N=0,M=0;var i=A.data;var o=i[0],n=i[1],m=i[2],K=i[3],J=i[4],I=i[5],B=i[6],z=i[7],w=i[8];for(var g=0;E<j;++E){h=n*E+m,O=J*E+I,P=z*E+w;for(F=0;F<L;++F,++g,h+=o,O+=K,P+=B){s=1/P;C=h*s,p=O*s;u=C|0,k=p|0;if(C>0&&p>0&&u<(l-1)&&k<(v-1)){R=Math.max(C-u,0);Q=Math.max(p-k,0);G=(l*k+u)|0;N=H[G]+R*(H[G+1]-H[G]);M=H[G+l]+R*(H[G+l+1]-H[G+l]);q[g]=N+Q*(M-N)}else{q[g]=r}}}},warp_affine:function(k,K,p,J){if(typeof J==="undefined"){J=0}var u=k.cols,z=k.rows,j=K.cols,v=K.rows;var E=k.data,i=K.data;var o=0,n=0,I=0,q=0,A=0,m=0,w=0,G=0,D=0,h=0,g=0;var l=p.data;var t=l[0],s=l[1],r=l[2],H=l[3],F=l[4],C=l[5];for(var B=0;n<v;++n){m=s*n+r;w=F*n+C;for(o=0;o<j;++o,++B,m+=t,w+=H){q=m|0;A=w|0;if(q>=0&&A>=0&&q<(u-1)&&A<(z-1)){G=m-q;D=w-A;I=u*A+q;h=E[I]+G*(E[I+1]-E[I]);g=E[I+u]+G*(E[I+u+1]-E[I+u]);i[B]=h+D*(g-h)}else{i[B]=J}}}},skindetector:function(o,p){var n,m,h,k;var l=o.width*o.height;while(l--){k=l*4;n=o.data[k];m=o.data[k+1];h=o.data[k+2];if((n>95)&&(m>40)&&(h>20)&&(n>m)&&(n>h)&&(n-Math.min(m,h)>15)&&(Math.abs(n-m)>15)){p[l]=255}else{p[l]=0}}}}})();b.imgproc=a})(jsfeat);(function(a){var b=(function(){var h=new Int32Array([0,3,1,3,2,2,3,1,3,0,3,-1,2,-2,1,-3,0,-3,-1,-3,-2,-2,-3,-1,-3,0,-3,1,-2,2,-1,3]);var f=new Uint8Array(512);var e=new Int32Array(25);var i=new Int32Array(25);var d=function(l,n,o){var j=0;var m=h;for(;j<o;++j){l[j]=m[j<<1]+m[(j<<1)+1]*n}for(;j<25;++j){l[j]=l[j-o]}},g=function(j,n,l,r,p){var q=25,o=0,w=j[n];var m=p,t=0,u=0,s=0;for(;o<q;++o){r[o]=w-j[n+l[o]]}for(o=0;o<16;o+=2){t=Math.min(r[o+1],r[o+2]);t=Math.min(t,r[o+3]);if(t<=m){continue}t=Math.min(t,r[o+4]);t=Math.min(t,r[o+5]);t=Math.min(t,r[o+6]);t=Math.min(t,r[o+7]);t=Math.min(t,r[o+8]);m=Math.max(m,Math.min(t,r[o]));m=Math.max(m,Math.min(t,r[o+9]))}u=-m;for(o=0;o<16;o+=2){s=Math.max(r[o+1],r[o+2]);s=Math.max(s,r[o+3]);s=Math.max(s,r[o+4]);s=Math.max(s,r[o+5]);if(s>=u){continue}s=Math.max(s,r[o+6]);s=Math.max(s,r[o+7]);s=Math.max(s,r[o+8]);u=Math.min(u,Math.max(s,r[o]));u=Math.min(u,Math.max(s,r[o+9]))}return -u-1};var c=20;return{set_threshold:function(j){c=Math.min(Math.max(j,0),255);for(var k=-255;k<=255;++k){f[(k+255)]=(k<-c?1:(k>c?2:0))}return c},detect:function(L,H,D){if(typeof D==="undefined"){D=3}var A=8,t=25;var u=L.data,X=L.cols,ar=L.rows;var ap=0,an=0,al=0,E=0,W=0,aq=0;var B=jsfeat.cache.get_buffer(3*X);var O=jsfeat.cache.get_buffer(((X+1)*3)<<2);var I=B.u8;var F=O.i32;var M=e;var J=i;var y=Math.max(3,D);var Z=Math.min((ar-2),(ar-D));var z=Math.max(3,D);var aa=Math.min((X-3),(X-D));var ah=0,P=0,C;var Q=g;var G=f;var p=c;var Y=0,ao=0,au=0,aw=0,U=0,V=0,av=0,R=0,at=0;var T=0,S=0,o=0;d(M,X,16);var am=M[0];var ak=M[1];var aj=M[2];var ai=M[3];var ag=M[4];var af=M[5];var ae=M[6];var ad=M[7];var ac=M[8];var ab=M[9];var s=M[10];var r=M[11];var q=M[12];var n=M[13];var m=M[14];var l=M[15];for(ap=0;ap<X*3;++ap){I[ap]=0}for(ap=y;ap<Z;++ap){av=((ap*X)+z)|0;aq=(ap-3)%3;V=(aq*X)|0;U=(aq*(X+1))|0;for(an=0;an<X;++an){I[V+an]=0}aw=0;if(ap<(Z-1)){an=z;for(;an<aa;++an,++av){Y=u[av];ao=(-Y+255);au=(G[ao+u[av+am]]|G[ao+u[av+ac]]);if(au==0){continue}au&=(G[ao+u[av+aj]]|G[ao+u[av+s]]);au&=(G[ao+u[av+ag]]|G[ao+u[av+q]]);au&=(G[ao+u[av+ae]]|G[ao+u[av+m]]);if(au==0){continue}au&=(G[ao+u[av+ak]]|G[ao+u[av+ab]]);au&=(G[ao+u[av+ai]]|G[ao+u[av+r]]);au&=(G[ao+u[av+af]]|G[ao+u[av+n]]);au&=(G[ao+u[av+ad]]|G[ao+u[av+l]]);if(au&1){E=(Y-p);ah=0;for(al=0;al<t;++al){W=u[(av+M[al])];if(W<E){++ah;if(ah>A){++aw;F[U+aw]=an;I[V+an]=Q(u,av,M,J,p);break}}else{ah=0}}}if(au&2){E=(Y+p);ah=0;for(al=0;al<t;++al){W=u[(av+M[al])];if(W>E){++ah;if(ah>A){++aw;F[U+aw]=an;I[V+an]=Q(u,av,M,J,p);break}}else{ah=0}}}}}F[U+X]=aw;if(ap==y){continue}aq=(ap-4+3)%3;R=(aq*X)|0;U=(aq*(X+1))|0;aq=(ap-5+3)%3;at=(aq*X)|0;aw=F[U+X];for(al=0;al<aw;++al){an=F[U+al];T=(an+1)|0;S=(an-1)|0;o=I[R+an];if((o>I[R+T]&&o>I[R+S]&&o>I[at+S]&&o>I[at+an]&&o>I[at+T]&&o>I[V+S]&&o>I[V+an]&&o>I[V+T])){C=H[P];C.x=an,C.y=(ap-1),C.score=o;P++}}}jsfeat.cache.put_buffer(B);jsfeat.cache.put_buffer(O);return P}}})();a.fast_corners=b;b.set_threshold(20)})(jsfeat);(function(b){var a=(function(){var d=function(e,l,q,i,r,g,p,n,k,j){var m=0,o=0,f=(n*q+p)|0,s=f;for(m=n;m<j;++m,f+=q,s=f){for(o=p;o<k;++o,++s){l[s]=-4*e[s]+e[s+r]+e[s-r]+e[s+g]+e[s-g]}}};var c=function(e,f,k,m,g,l,h){var o=-2*e[f]+e[f+m]+e[f-m];var i=-2*e[f]+e[f+g]+e[f-g];var n=e[f+l]+e[f-l]-e[f+h]-e[f-h];var j=(Math.sqrt(((o-i)*(o-i)+4*n*n)))|0;return Math.min(Math.abs(k-j),Math.abs(-(k+j)))};return{laplacian_threshold:30,min_eigen_value_threshold:25,detect:function(l,A,z){if(typeof z==="undefined"){z=5}var o=0,n=0;var p=l.cols,B=l.rows,q=l.data;var H=5,f=(5*p)|0;var G=(3+3*p)|0,g=(3-3*p)|0;var e=jsfeat.cache.get_buffer((p*B)<<2);var j=e.i32;var i=0,k=0,m=0,r=0,v;var u=0;var F=this.laplacian_threshold;var D=this.min_eigen_value_threshold;var t=Math.max(5,z)|0;var s=Math.max(3,z)|0;var E=Math.min(p-5,p-z)|0;var C=Math.min(B-3,B-z)|0;o=p*B;while(--o>=0){j[o]=0}d(q,j,p,B,H,f,t,s,E,C);k=(s*p+t)|0;for(n=s;n<C;++n,k+=p){for(o=t,m=k;o<E;++o,++m){i=j[m];if((i<-F&&i<j[m-1]&&i<j[m+1]&&i<j[m-p]&&i<j[m+p]&&i<j[m-p-1]&&i<j[m+p-1]&&i<j[m-p+1]&&i<j[m+p+1])||(i>F&&i>j[m-1]&&i>j[m+1]&&i>j[m-p]&&i>j[m+p]&&i>j[m-p-1]&&i>j[m+p-1]&&i>j[m-p+1]&&i>j[m+p+1])){r=c(q,m,i,H,f,G,g);if(r>D){v=A[u];v.x=o,v.y=n,v.score=r;++u;++o,++m}}}}jsfeat.cache.put_buffer(e);return u}}})();b.yape06=a})(jsfeat);(function(a){var b=(function(){var d=function(l,m,k){var j=0;var h,n;h=k;for(n=0;n<h;n++,j++){h=(Math.sqrt((k*k-n*n))+0.5)|0;m[j]=(h+l*n)}for(h--;h<n&&h>=0;h--,j++){n=(Math.sqrt((k*k-h*h))+0.5)|0;m[j]=(h+l*n)}for(;-h<n;h--,j++){n=(Math.sqrt((k*k-h*h))+0.5)|0;m[j]=(h+l*n)}for(n--;n>=0;n--,j++){h=(-Math.sqrt((k*k-n*n))-0.5)|0;m[j]=(h+l*n)}for(;n>h;n--,j++){h=(-Math.sqrt((k*k-n*n))-0.5)|0;m[j]=(h+l*n)}for(h++;h<=0;h++,j++){n=(-Math.sqrt((k*k-h*h))-0.5)|0;m[j]=(h+l*n)}for(;h<-n;h++,j++){n=(-Math.sqrt((k*k-h*h))-0.5)|0;m[j]=(h+l*n)}for(n++;n<0;n++,j++){h=(Math.sqrt((k*k-n*n))+0.5)|0;m[j]=(h+l*n)}m[j]=m[0];m[j+1]=m[1];return j};var g=function(h,j,i){var k=0;if(h[j+1]!=0){k++}if(h[j-1]!=0){k++}if(h[j+i]!=0){k++}if(h[j+i+1]!=0){k++}if(h[j+i-1]!=0){k++}if(h[j-i]!=0){k++}if(h[j-i+1]!=0){k++}if(h[j-i-1]!=0){k++}return k};var c=function(l,m,i,k,j){var h,n;if(i>0){m-=k*j;for(n=-j;n<=j;++n){for(h=-j;h<=j;++h){if(l[m+h]>i){return false}}m+=k}}else{m-=k*j;for(n=-j;n<=j;++n){for(h=-j;h<=j;++h){if(l[m+h]<i){return false}}m+=k}}return true};var e=function(s,r,m,u,p,i,l,n){var k=0;var q=0,o=(l-1)|0;var j=0,w=0,v=0,t=0;var h=0;j=s[r+i[q]];if((j<=p)){if((j>=u)){w=s[r+i[o]];if((w<=p)){if((w>=u)){m[r]=0;return}else{o++;v=s[r+i[o]];if((v>p)){o++;t=s[r+i[o]];if((t>p)){h=3}else{if((t<u)){h=6}else{m[r]=0;return}}}else{o++;t=s[r+i[o]];if((t>p)){h=7}else{if((t<u)){h=2}else{m[r]=0;return}}}}}else{o++;v=s[r+i[o]];if((v>p)){o++;t=s[r+i[o]];if((t>p)){h=3}else{if((t<u)){h=6}else{m[r]=0;return}}}else{if((v<u)){o++;t=s[r+i[o]];if((t>p)){h=7}else{if((t<u)){h=2}else{m[r]=0;return}}}else{m[r]=0;return}}}}else{w=s[r+i[o]];if((w>p)){m[r]=0;return}o++;v=s[r+i[o]];if((v>p)){m[r]=0;return}o++;t=s[r+i[o]];if((t>p)){m[r]=0;return}h=1}}else{w=s[r+i[o]];if((w<u)){m[r]=0;return}o++;v=s[r+i[o]];if((v<u)){m[r]=0;return}o++;t=s[r+i[o]];if((t<u)){m[r]=0;return}h=0}for(q=1;q<=l;q++){j=s[r+i[q]];switch(h){case 0:if((j>p)){v=t;o++;t=s[r+i[o]];if((t<u)){m[r]=0;return}k-=j+v;h=0;break}if((j<u)){if((v>p)){m[r]=0;return}if((t>p)){m[r]=0;return}v=t;o++;t=s[r+i[o]];if((t>p)){m[r]=0;return}k-=j+v;h=8;break}if((v<=p)){m[r]=0;return}if((t<=p)){m[r]=0;return}v=t;o++;t=s[r+i[o]];if((t>p)){k-=j+v;h=3;break}if((t<u)){k-=j+v;h=6;break}m[r]=0;return;case 1:if((j<u)){v=t;o++;t=s[r+i[o]];if((t>p)){m[r]=0;return}k-=j+v;h=1;break}if((j>p)){if((v<u)){m[r]=0;return}if((t<u)){m[r]=0;return}v=t;o++;t=s[r+i[o]];if((t<u)){m[r]=0;return}k-=j+v;h=9;break}if((v>=u)){m[r]=0;return}if((t>=u)){m[r]=0;return}v=t;o++;t=s[r+i[o]];if((t<u)){k-=j+v;h=2;break}if((t>p)){k-=j+v;h=7;break}m[r]=0;return;case 2:if((j>p)){m[r]=0;return}v=t;o++;t=s[r+i[o]];if((j<u)){if((t>p)){m[r]=0;return}k-=j+v;h=4;break}if((t>p)){k-=j+v;h=7;break}if((t<u)){k-=j+v;h=2;break}m[r]=0;return;case 3:if((j<u)){m[r]=0;return}v=t;o++;t=s[r+i[o]];if((j>p)){if((t<u)){m[r]=0;return}k-=j+v;h=5;break}if((t>p)){k-=j+v;h=3;break}if((t<u)){k-=j+v;h=6;break}m[r]=0;return;case 4:if((j>p)){m[r]=0;return}if((j<u)){v=t;o++;t=s[r+i[o]];if((t>p)){m[r]=0;return}k-=j+v;h=1;break}if((t>=u)){m[r]=0;return}v=t;o++;t=s[r+i[o]];if((t<u)){k-=j+v;h=2;break}if((t>p)){k-=j+v;h=7;break}m[r]=0;return;case 5:if((j<u)){m[r]=0;return}if((j>p)){v=t;o++;t=s[r+i[o]];if((t<u)){m[r]=0;return}k-=j+v;h=0;break}if((t<=p)){m[r]=0;return}v=t;o++;t=s[r+i[o]];if((t>p)){k-=j+v;h=3;break}if((t<u)){k-=j+v;h=6;break}m[r]=0;return;case 7:if((j>p)){m[r]=0;return}if((j<u)){m[r]=0;return}v=t;o++;t=s[r+i[o]];if((t>p)){k-=j+v;h=3;break}if((t<u)){k-=j+v;h=6;break}m[r]=0;return;case 6:if((j>p)){m[r]=0;return}if((j<u)){m[r]=0;return}v=t;o++;t=s[r+i[o]];if((t<u)){k-=j+v;h=2;break}if((t>p)){k-=j+v;h=7;break}m[r]=0;return;case 8:if((j>p)){if((t<u)){m[r]=0;return}v=t;o++;t=s[r+i[o]];if((t<u)){m[r]=0;return}k-=j+v;h=9;break}if((j<u)){v=t;o++;t=s[r+i[o]];if((t>p)){m[r]=0;return}k-=j+v;h=1;break}m[r]=0;return;case 9:if((j<u)){if((t>p)){m[r]=0;return}v=t;o++;t=s[r+i[o]];if((t>p)){m[r]=0;return}k-=j+v;h=8;break}if((j>p)){v=t;o++;t=s[r+i[o]];if((t<u)){m[r]=0;return}k-=j+v;h=0;break}m[r]=0;return;default:break}}m[r]=(k+n*s[r])};var f=(function(){function h(i,j,k){this.dirs=new Int32Array(1024);this.dirs_count=d(i,this.dirs,k)|0;this.scores=new Int32Array(i*j);this.radius=k|0}return h})();return{level_tables:[],tau:7,init:function(m,j,h,l){if(typeof l==="undefined"){l=1}var k;h=Math.min(h,7);h=Math.max(h,3);for(k=0;k<l;++k){this.level_tables[k]=new f(m>>k,j>>k,h)}},detect:function(k,J,G){if(typeof G==="undefined"){G=4}var A=this.level_tables[0];var i=A.radius|0,q=(i-1)|0;var m=A.dirs;var n=A.dirs_count|0;var v=n>>1;var O=k.data,u=k.cols|0,K=k.rows|0,N=u>>1;var H=A.scores;var s=0,r=0,j=0,l=0,o=0,p=0,z=0,I=0;var F=this.tau|0;var D=0,E;var C=Math.max(i+1,G)|0;var B=Math.max(i+1,G)|0;var M=Math.min(u-i-2,u-G)|0;var L=Math.min(K-i-2,K-G)|0;j=(B*u+C)|0;for(r=B;r<L;++r,j+=u){for(s=C,l=j;s<M;++s,++l){o=O[l]+F,p=O[l]-F;if(p<O[l+i]&&O[l+i]<o&&p<O[l-i]&&O[l-i]<o){H[l]=0}else{e(O,l,H,p,o,m,v,n)}}}j=(B*u+C)|0;for(r=B;r<L;++r,j+=u){for(s=C,l=j;s<M;++s,++l){I=H[l];z=Math.abs(I);if(z<5){++s,++l}else{if(g(H,l,u)>=3&&c(H,l,I,N,i)){E=J[D];E.x=s,E.y=r,E.score=z;++D;s+=q,l+=q}}}}return D}}})();a.yape=b})(jsfeat);(function(b){var a=(function(){var d=new Int32Array([8,-3,9,5,4,2,7,-12,-11,9,-8,2,7,-12,12,-13,2,-13,2,12,1,-7,1,6,-2,-10,-2,-4,-13,-13,-11,-8,-13,-3,-12,-9,10,4,11,9,-13,-8,-8,-9,-11,7,-9,12,7,7,12,6,-4,-5,-3,0,-13,2,-12,-3,-9,0,-7,5,12,-6,12,-1,-3,6,-2,12,-6,-13,-4,-8,11,-13,12,-8,4,7,5,1,5,-3,10,-3,3,-7,6,12,-8,-7,-6,-2,-2,11,-1,-10,-13,12,-8,10,-7,3,-5,-3,-4,2,-3,7,-10,-12,-6,11,5,-12,6,-7,5,-6,7,-1,1,0,4,-5,9,11,11,-13,4,7,4,12,2,-1,4,4,-4,-12,-2,7,-8,-5,-7,-10,4,11,9,12,0,-8,1,-13,-13,-2,-8,2,-3,-2,-2,3,-6,9,-4,-9,8,12,10,7,0,9,1,3,7,-5,11,-10,-13,-6,-11,0,10,7,12,1,-6,-3,-6,12,10,-9,12,-4,-13,8,-8,-12,-13,0,-8,-4,3,3,7,8,5,7,10,-7,-1,7,1,-12,3,-10,5,6,2,-4,3,-10,-13,0,-13,5,-13,-7,-12,12,-13,3,-11,8,-7,12,-4,7,6,-10,12,8,-9,-1,-7,-6,-2,-5,0,12,-12,5,-7,5,3,-10,8,-13,-7,-7,-4,5,-3,-2,-1,-7,2,9,5,-11,-11,-13,-5,-13,-1,6,0,-1,5,-3,5,2,-4,-13,-4,12,-9,-6,-9,6,-12,-10,-8,-4,10,2,12,-3,7,12,12,12,-7,-13,-6,5,-4,9,-3,4,7,-1,12,2,-7,6,-5,1,-13,11,-12,5,-3,7,-2,-6,7,-8,12,-7,-13,-7,-11,-12,1,-3,12,12,2,-6,3,0,-4,3,-2,-13,-1,-13,1,9,7,1,8,-6,1,-1,3,12,9,1,12,6,-1,-9,-1,3,-13,-13,-10,5,7,7,10,12,12,-5,12,9,6,3,7,11,5,-13,6,10,2,-12,2,3,3,8,4,-6,2,6,12,-13,9,-12,10,3,-8,4,-7,9,-11,12,-4,-6,1,12,2,-8,6,-9,7,-4,2,3,3,-2,6,3,11,0,3,-3,8,-8,7,8,9,3,-11,-5,-6,-4,-10,11,-5,10,-5,-8,-3,12,-10,5,-9,0,8,-1,12,-6,4,-6,6,-11,-10,12,-8,7,4,-2,6,7,-2,0,-2,12,-5,-8,-5,2,7,-6,10,12,-9,-13,-8,-8,-5,-13,-5,-2,8,-8,9,-13,-9,-11,-9,0,1,-8,1,-2,7,-4,9,1,-2,1,-1,-4,11,-6,12,-11,-12,-9,-6,4,3,7,7,12,5,5,10,8,0,-4,2,8,-9,12,-5,-13,0,7,2,12,-1,2,1,7,5,11,7,-9,3,5,6,-8,-13,-4,-8,9,-5,9,-3,-3,-4,-7,-3,-12,6,5,8,0,-7,6,-6,12,-13,6,-5,-2,1,-10,3,10,4,1,8,-4,-2,-2,2,-13,2,-12,12,12,-2,-13,0,-6,4,1,9,3,-6,-10,-3,-5,-3,-13,-1,1,7,5,12,-11,4,-2,5,-7,-13,9,-9,-5,7,1,8,6,7,-8,7,6,-7,-4,-7,1,-8,11,-7,-8,-13,6,-12,-8,2,4,3,9,10,-5,12,3,-6,-5,-6,7,8,-3,9,-8,2,-12,2,8,-11,-2,-10,3,-12,-13,-7,-9,-11,0,-10,-5,5,-3,11,8,-2,-13,-1,12,-1,-8,0,9,-13,-11,-12,-5,-10,-2,-10,11,-3,9,-2,-13,2,-3,3,2,-9,-13,-4,0,-4,6,-3,-10,-4,12,-2,-7,-6,-11,-4,9,6,-3,6,11,-13,11,-5,5,11,11,12,6,7,-5,12,-2,-1,12,0,7,-4,-8,-3,-2,-7,1,-6,7,-13,-12,-8,-13,-7,-2,-6,-8,-8,5,-6,-9,-5,-1,-4,5,-13,7,-8,10,1,5,5,-13,1,0,10,-13,9,12,10,-1,5,-8,10,-9,-1,11,1,-13,-9,-3,-6,2,-1,-10,1,12,-13,1,-8,-10,8,-11,10,-6,2,-13,3,-6,7,-13,12,-9,-10,-10,-5,-7,-10,-8,-8,-13,4,-6,8,5,3,12,8,-13,-4,2,-3,-3,5,-13,10,-12,4,-13,5,-1,-9,9,-4,3,0,3,3,-9,-12,1,-6,1,3,2,4,-8,-10,-10,-10,9,8,-13,12,12,-8,-12,-6,-5,2,2,3,7,10,6,11,-8,6,8,8,-12,-7,10,-6,5,-3,-9,-3,9,-1,-13,-1,5,-3,-7,-3,4,-8,-2,-8,3,4,2,12,12,2,-5,3,11,6,-9,11,-13,3,-1,7,12,11,-1,12,4,-3,0,-3,6,4,-11,4,12,2,-4,2,1,-10,-6,-8,1,-13,7,-11,1,-13,12,-11,-13,6,0,11,-13,0,-1,1,4,-13,3,-9,-2,-9,8,-6,-3,-13,-6,-8,-2,5,-9,8,10,2,7,3,-9,-1,-6,-1,-1,9,5,11,-2,11,-3,12,-8,3,0,3,5,-1,4,0,10,3,-6,4,5,-13,0,-10,5,5,8,12,11,8,9,9,-6,7,-4,8,-12,-10,4,-10,9,7,3,12,4,9,-7,10,-2,7,0,12,-2,-1,-6,0,-11]);var c=new jsfeat.matrix_t(3,3,jsfeat.F32_t|jsfeat.C1_t);var f=new jsfeat.matrix_t(32,32,jsfeat.U8_t|jsfeat.C1_t);var e=function(l,n,k,i,h,j){var m=Math.cos(k);var g=Math.sin(k);c.data[0]=m,c.data[1]=-g,c.data[2]=(-m+g)*j*0.5+i,c.data[3]=g,c.data[4]=m,c.data[5]=(-g-m)*j*0.5+h;jsfeat.imgproc.warp_affine(l,n,c,128)};return{describe:function(j,u,g,B){var r=32;var x=0,A=0,q=0,p=0,z=0;var o=0,m=0,D=0;var C=j.data,n=j.cols,y=j.rows;var t=f.data;var v=16*32+16;var k=0;if(!(B.type&jsfeat.U8_t)){B.type=jsfeat.U8_t;B.cols=r;B.rows=g;B.channel=1;B.allocate()}else{B.resize(r,g,1)}var l=B.data;var s=0;for(x=0;x<g;++x){q=u[x].x;p=u[x].y;z=u[x].angle;e(j,f,z,q,p,32);k=0;for(A=0;A<r;++A){o=t[v+d[k+1]*32+d[k]];k+=2;m=t[v+d[k+1]*32+d[k]];k+=2;D=(o<m)|0;o=t[v+d[k+1]*32+d[k]];k+=2;m=t[v+d[k+1]*32+d[k]];k+=2;D|=(o<m)<<1;o=t[v+d[k+1]*32+d[k]];k+=2;m=t[v+d[k+1]*32+d[k]];k+=2;D|=(o<m)<<2;o=t[v+d[k+1]*32+d[k]];k+=2;m=t[v+d[k+1]*32+d[k]];k+=2;D|=(o<m)<<3;o=t[v+d[k+1]*32+d[k]];k+=2;m=t[v+d[k+1]*32+d[k]];k+=2;D|=(o<m)<<4;o=t[v+d[k+1]*32+d[k]];k+=2;m=t[v+d[k+1]*32+d[k]];k+=2;D|=(o<m)<<5;o=t[v+d[k+1]*32+d[k]];k+=2;m=t[v+d[k+1]*32+d[k]];k+=2;D|=(o<m)<<6;o=t[v+d[k+1]*32+d[k]];k+=2;m=t[v+d[k+1]*32+d[k]];k+=2;D|=(o<m)<<7;l[s+A]=D}s+=r}}}})();b.orb=a})(jsfeat);(function(b){var a=(function(){var c=jsfeat.imgproc.scharr_derivatives;return{track:function(n,u,ap,aL,k,N,R,K,f,q){if(typeof R==="undefined"){R=30}if(typeof K==="undefined"){K=new Uint8Array(k)}if(typeof f==="undefined"){f=0.01}if(typeof q==="undefined"){q=0.0001}var e=(N-1)*0.5;var h=(N*N)|0;var aa=h<<1;var r=n.data,S=u.data;var g=r[0].data,F=S[0].data;var M=r[0].cols,aB=r[0].rows,ay=0,aH=0;var az=jsfeat.cache.get_buffer(h<<2);var s=jsfeat.cache.get_buffer(aa<<2);var t=jsfeat.cache.get_buffer((aB*(M<<1))<<2);var V=new jsfeat.matrix_t(M,aB,jsfeat.S32C2_t,t.data);var w=az.i32;var ac=s.i32;var aA=t.i32;var ab=0,I=0,aM=0,at=0,aI=0,au=0;var am=0,aF=0,aD=0,af=0,ae=0;var E=0,z=0,Y=0,W=0;var p=0,o=0,aE=0,aC=0;var Q=0,P=0,J=0,H=0,ai=0,ak=0,l=0;var d=0,A=0,O=0;var U=0,T=0,aw=0,av=0;var ah=14;var C=14;var Z=C-5;var ax=(1<<((Z)-1));var ad=(1<<ah);var m=(1<<((C)-1));var X=1/(1<<20);var aK=0,aJ=0,ar=0,aq=0,al=0,v=0,B=0;var ao=0,an=0,ag=0,aj=0,aG=0;var G=1.1920929e-7;f*=f;for(;Q<k;++Q){K[Q]=1}var L=(n.levels-1)|0;ai=L;for(;ai>=0;--ai){am=(1/(1<<ai));ay=M>>ai;aH=aB>>ai;ab=ay<<1;g=r[ai].data;F=S[ai].data;A=(ay-N)|0;O=(aH-N)|0;c(r[ai],V);for(ak=0;ak<k;++ak){Q=ak<<1;P=Q+1;aF=ap[Q]*am;aD=ap[P]*am;if(ai==L){af=aF;ae=aD}else{af=aL[Q]*2;ae=aL[P]*2}aL[Q]=af;aL[P]=ae;aF-=e;aD-=e;p=aF|0;o=aD|0;J=(p<=d)|(p>=A)|(o<=d)|(o>=O);if(J!=0){if(ai==0){K[ak]=0}continue}U=aF-p;T=aD-o;aK=(((1-U)*(1-T)*ad)+0.5)|0;aJ=((U*(1-T)*ad)+0.5)|0;ar=(((1-U)*T*ad)+0.5)|0;aq=(ad-aK-aJ-ar);ao=0,an=0,ag=0;for(H=0;H<N;++H){I=((H+o)*ay+p)|0;aM=I<<1;at=(H*N)|0;aI=at<<1;for(J=0;J<N;++J,++I,++at,aM+=2){al=((g[I])*aK+(g[I+1])*aJ+(g[I+ay])*ar+(g[I+ay+1])*aq);al=(((al)+ax)>>(Z));v=(aA[aM]*aK+aA[aM+2]*aJ+aA[aM+ab]*ar+aA[aM+ab+2]*aq);v=(((v)+m)>>(C));B=(aA[aM+1]*aK+aA[aM+3]*aJ+aA[aM+ab+1]*ar+aA[aM+ab+3]*aq);B=(((B)+m)>>(C));w[at]=al;ac[aI++]=v;ac[aI++]=B;ao+=v*v;an+=v*B;ag+=B*B}}ao*=X;an*=X;ag*=X;aj=ao*ag-an*an;aG=(ag+ao-Math.sqrt((ao-ag)*(ao-ag)+4*an*an))/aa;if(aG<q||aj<G){if(ai==0){K[ak]=0}continue}aj=1/aj;af-=e;ae-=e;E=0;z=0;for(l=0;l<R;++l){aE=af|0;aC=ae|0;J=(aE<=d)|(aE>=A)|(aC<=d)|(aC>=O);if(J!=0){if(ai==0){K[ak]=0}break}U=af-aE;T=ae-aC;aK=(((1-U)*(1-T)*ad)+0.5)|0;aJ=((U*(1-T)*ad)+0.5)|0;ar=(((1-U)*T*ad)+0.5)|0;aq=(ad-aK-aJ-ar);aw=0,av=0;for(H=0;H<N;++H){au=((H+aC)*ay+aE)|0;at=(H*N)|0;aI=at<<1;for(J=0;J<N;++J,++au,++at){al=((F[au])*aK+(F[au+1])*aJ+(F[au+ay])*ar+(F[au+ay+1])*aq);al=(((al)+ax)>>(Z));al=(al-w[at]);aw+=al*ac[aI++];av+=al*ac[aI++]}}aw*=X;av*=X;Y=((an*av-ag*aw)*aj);W=((an*aw-ao*av)*aj);af+=Y;ae+=W;aL[Q]=af+e;aL[P]=ae+e;if(Y*Y+W*W<=f){break}if(l>0&&Math.abs(Y+E)<0.01&&Math.abs(W+z)<0.01){aL[Q]-=Y*0.5;aL[P]-=W*0.5;break}E=Y;z=W}}}jsfeat.cache.put_buffer(az);jsfeat.cache.put_buffer(s);jsfeat.cache.put_buffer(t)}}})();b.optical_flow_lk=a})(jsfeat);(function(b){var a=(function(){var c=function(e,d){var f=(e.width*0.25+0.5)|0;return d.x<=e.x+f&&d.x>=e.x-f&&d.y<=e.y+f&&d.y>=e.y-f&&d.width<=(e.width*1.5+0.5)|0&&(d.width*1.5+0.5)|0>=e.width};return{edges_density:0.07,detect_single_scale:function(E,ad,af,q,d,f,D,B){var z=(B.size[0]*D)|0,N=(B.size[1]*D)|0,V=(0.5*D+1.5)|0,U=V;var Z,X,W,Q,O,T=(d-z)|0,R=(f-N)|0;var H=(d+1)|0,w,p,r,S;var e=1/(z*N);var t,o,l,u,s,ae,A,g=true,L,h,n,G,m;var M,K,J,I,v,C;var ac=0,ab=z,aa=N*H,Y=aa+z;var F=((z*N)*255*this.edges_density)|0;var P=[];for(O=0;O<R;O+=U){ac=O*H;for(Q=0;Q<T;Q+=V,ac+=V){p=E[ac]-E[ac+ab]-E[ac+aa]+E[ac+Y];if(q){w=(q[ac]-q[ac+ab]-q[ac+aa]+q[ac+Y]);if(w<F||p<20){Q+=V,ac+=V;continue}}p*=e;r=(ad[ac]-ad[ac+ab]-ad[ac+aa]+ad[ac+Y])*e-p*p;S=r>0?Math.sqrt(r):1;t=B.complexClassifiers;s=t.length;g=true;for(Z=0;Z<s;++Z){o=t[Z];L=o.threshold;l=o.simpleClassifiers;ae=l.length;h=0;for(X=0;X<ae;++X){u=l[X];n=0;m=u.features;A=m.length;if(u.tilted===1){for(W=0;W<A;++W){G=m[W];M=~~(Q+G[0]*D)+~~(O+G[1]*D)*H;v=~~(G[2]*D);C=~~(G[3]*D);K=v*H;J=C*H;n+=(af[M]-af[M+v+K]-af[M-C+J]+af[M+v-C+K+J])*G[4]}}else{for(W=0;W<A;++W){G=m[W];M=~~(Q+G[0]*D)+~~(O+G[1]*D)*H;v=~~(G[2]*D);C=~~(G[3]*D);J=C*H;n+=(E[M]-E[M+v]-E[M+J]+E[M+J+v])*G[4]}}h+=(n*e<u.threshold*S)?u.left_val:u.right_val}if(h<L){g=false;break}}if(g){P.push({x:Q,y:O,width:z,height:N,neighbor:1,confidence:h});Q+=V,ac+=V}}}return P},detect_multi_scale:function(e,m,f,h,d,n,i,g,k){if(typeof g==="undefined"){g=1.2}if(typeof k==="undefined"){k=1}var o=i.size[0];var j=i.size[1];var l=[];while(k*o<d&&k*j<n){l=l.concat(this.detect_single_scale(e,m,f,h,d,n,k,i));k*=g}return l},group_rectangles:function(g,l){if(typeof l==="undefined"){l=1}var y,v,q=g.length;var r=[];for(y=0;y<q;++y){r[y]={parent:-1,element:g[y],rank:0}}for(y=0;y<q;++y){if(!r[y].element){continue}var t=y;while(r[t].parent!=-1){t=r[t].parent}for(v=0;v<q;++v){if(y!=v&&r[v].element&&c(r[y].element,r[v].element)){var s=v;while(r[s].parent!=-1){s=r[s].parent}if(s!=t){if(r[t].rank>r[s].rank){r[s].parent=t}else{r[t].parent=s;if(r[t].rank==r[s].rank){r[s].rank++}t=s}var A,d=v;while(r[d].parent!=-1){A=d;d=r[d].parent;r[A].parent=t}d=y;while(r[d].parent!=-1){A=d;d=r[d].parent;r[A].parent=t}}}}}var w=[];var o=0;for(y=0;y<q;y++){v=-1;var e=y;if(r[e].element){while(r[e].parent!=-1){e=r[e].parent}if(r[e].rank>=0){r[e].rank=~o++}v=~r[e].rank}w[y]=v}var m=[];for(y=0;y<o+1;++y){m[y]={neighbors:0,x:0,y:0,width:0,height:0,confidence:0}}for(y=0;y<q;++y){var z=g[y];var k=w[y];if(m[k].neighbors==0){m[k].confidence=z.confidence}++m[k].neighbors;m[k].x+=z.x;m[k].y+=z.y;m[k].width+=z.width;m[k].height+=z.height;m[k].confidence=Math.max(m[k].confidence,z.confidence)}var h=[];for(y=0;y<o;++y){q=m[y].neighbors;if(q>=l){h.push({x:(m[y].x*2+q)/(2*q),y:(m[y].y*2+q)/(2*q),width:(m[y].width*2+q)/(2*q),height:(m[y].height*2+q)/(2*q),neighbors:m[y].neighbors,confidence:m[y].confidence})}}var p=[];q=h.length;for(y=0;y<q;++y){var z=h[y];var x=true;for(v=0;v<q;++v){var u=h[v];var f=(u.width*0.25+0.5)|0;if(y!=v&&z.x>=u.x-f&&z.y>=u.y-f&&z.x+z.width<=u.x+u.width+f&&z.y+z.height<=u.y+u.height+f&&(u.neighbors>Math.max(3,z.neighbors)||z.neighbors<3)){x=false;break}}if(x){p.push(z)}}return p}}})();b.haar=a})(jsfeat);(function(a){var b=(function(){var c=function(f,e){var g=(f.width*0.25+0.5)|0;return e.x<=f.x+g&&e.x>=f.x-g&&e.y<=f.y+g&&e.y>=f.y-g&&e.width<=(f.width*1.5+0.5)|0&&(e.width*1.5+0.5)|0>=f.width};var d=new jsfeat.pyramid_t(1);return{interval:4,scale:1.1486,next:5,scale_to:1,prepare_cascade:function(g){var m=g.stage_classifier.length;for(var h=0;h<m;h++){var l=g.stage_classifier[h].feature;var e=g.stage_classifier[h].count;var i=g.stage_classifier[h]._feature=new Array(e);for(var f=0;f<e;f++){i[f]={size:l[f].size,px:new Array(l[f].size),pz:new Array(l[f].size),nx:new Array(l[f].size),nz:new Array(l[f].size)}}}},build_pyramid:function(e,k,s,f){if(typeof f==="undefined"){f=4}var q=e.cols,m=e.rows;var l=0,n=0,h=0;var p=false;var j=e,g=e;var r=jsfeat.U8_t|jsfeat.C1_t;this.interval=f;this.scale=Math.pow(2,1/(this.interval+1));this.next=(this.interval+1)|0;this.scale_to=(Math.log(Math.min(q/k,m/s))/Math.log(this.scale))|0;var o=((this.scale_to+this.next*2)*4)|0;if(d.levels!=o){d.levels=o;d.data=new Array(o);p=true;d.data[0]=e}for(l=1;l<=this.interval;++l){n=(q/Math.pow(this.scale,l))|0;h=(m/Math.pow(this.scale,l))|0;j=d.data[l<<2];if(p||n!=j.cols||h!=j.rows){d.data[l<<2]=new jsfeat.matrix_t(n,h,r);j=d.data[l<<2]}jsfeat.imgproc.resample(e,j,n,h)}for(l=this.next;l<this.scale_to+this.next*2;++l){g=d.data[(l<<2)-(this.next<<2)];j=d.data[l<<2];n=g.cols>>1;h=g.rows>>1;if(p||n!=j.cols||h!=j.rows){d.data[l<<2]=new jsfeat.matrix_t(n,h,r);j=d.data[l<<2]}jsfeat.imgproc.pyrdown(g,j)}for(l=this.next*2;l<this.scale_to+this.next*2;++l){g=d.data[(l<<2)-(this.next<<2)];n=g.cols>>1;h=g.rows>>1;j=d.data[(l<<2)+1];if(p||n!=j.cols||h!=j.rows){d.data[(l<<2)+1]=new jsfeat.matrix_t(n,h,r);j=d.data[(l<<2)+1]}jsfeat.imgproc.pyrdown(g,j,1,0);j=d.data[(l<<2)+2];if(p||n!=j.cols||h!=j.rows){d.data[(l<<2)+2]=new jsfeat.matrix_t(n,h,r);j=d.data[(l<<2)+2]}jsfeat.imgproc.pyrdown(g,j,0,1);j=d.data[(l<<2)+3];if(p||n!=j.cols||h!=j.rows){d.data[(l<<2)+3]=new jsfeat.matrix_t(n,h,r);j=d.data[(l<<2)+3]}jsfeat.imgproc.pyrdown(g,j,1,1)}return d},detect:function(G,L){var h=this.interval;var N=this.scale;var m=this.next;var l=this.scale_to;var ab=0,aa=0,Z=0,W=0,S=0,R=0,U=0,B=0,J=0,I=0,V=0,ae=0,M=0,ad=0,w=0,Y=0,g=0;var E=0,X,Q,D,H,F,O=true,o=true;var z=1,v=1;var s=[0,1,0,1];var r=[0,0,1,1];var K=[];var C=G.data,ac=1,u=2,t=4;var A=[],e=[0,0,0];var P=[0,0,0];var T=[0,0,0];for(ab=0;ab<l;ab++){w=(ab<<2);Y=C[w+(m<<3)].cols-(L.width>>2);g=C[w+(m<<3)].rows-(L.height>>2);P[0]=C[w].cols*ac;P[1]=C[w+(m<<2)].cols*ac;P[2]=C[w+(m<<3)].cols*ac;T[0]=(C[w].cols*t)-(Y*t);T[1]=(C[w+(m<<2)].cols*u)-(Y*u);T[2]=(C[w+(m<<3)].cols*ac)-(Y*ac);B=L.stage_classifier.length;for(aa=0;aa<B;aa++){D=L.stage_classifier[aa].feature;Q=L.stage_classifier[aa]._feature;J=L.stage_classifier[aa].count;for(Z=0;Z<J;Z++){H=Q[Z];F=D[Z];I=F.size|0;for(U=0;U<I;U++){H.px[U]=(F.px[U]*ac)+F.py[U]*P[F.pz[U]];H.pz[U]=F.pz[U];H.nx[U]=(F.nx[U]*ac)+F.ny[U]*P[F.nz[U]];H.nz[U]=F.nz[U]}}}A[0]=C[w].data;A[1]=C[w+(m<<2)].data;for(U=0;U<4;U++){A[2]=C[w+(m<<3)+U].data;e[0]=(s[U]*u)+r[U]*(C[w].cols*u);e[1]=(s[U]*ac)+r[U]*(C[w+(m<<2)].cols*ac);e[2]=0;for(R=0;R<g;R++){for(S=0;S<Y;S++){E=0;O=true;B=L.stage_classifier.length;for(aa=0;aa<B;aa++){E=0;X=L.stage_classifier[aa].alpha;Q=L.stage_classifier[aa]._feature;J=L.stage_classifier[aa].count;for(Z=0;Z<J;Z++){H=Q[Z];ae=A[H.pz[0]][e[H.pz[0]]+H.px[0]];M=A[H.nz[0]][e[H.nz[0]]+H.nx[0]];if(ae<=M){E+=X[Z<<1]}else{o=true;I=H.size;for(ad=1;ad<I;ad++){if(H.pz[ad]>=0){V=A[H.pz[ad]][e[H.pz[ad]]+H.px[ad]];if(V<ae){if(V<=M){o=false;break}ae=V}}if(H.nz[ad]>=0){W=A[H.nz[ad]][e[H.nz[ad]]+H.nx[ad]];if(W>M){if(ae<=W){o=false;break}M=W}}}E+=(o)?X[(Z<<1)+1]:X[Z<<1]}}if(E<L.stage_classifier[aa].threshold){O=false;break}}if(O){K.push({x:(S*4+s[U]*2)*z,y:(R*4+r[U]*2)*v,width:L.width*z,height:L.height*v,neighbor:1,confidence:E});++S;e[0]+=t;e[1]+=u;e[2]+=ac}e[0]+=t;e[1]+=u;e[2]+=ac}e[0]+=T[0];e[1]+=T[1];e[2]+=T[2]}}z*=N;v*=N}return K},group_rectangles:function(h,m){if(typeof m==="undefined"){m=1}var z,w,r=h.length;var s=[];for(z=0;z<r;++z){s[z]={parent:-1,element:h[z],rank:0}}for(z=0;z<r;++z){if(!s[z].element){continue}var u=z;while(s[u].parent!=-1){u=s[u].parent}for(w=0;w<r;++w){if(z!=w&&s[w].element&&c(s[z].element,s[w].element)){var t=w;while(s[t].parent!=-1){t=s[t].parent}if(t!=u){if(s[u].rank>s[t].rank){s[t].parent=u}else{s[u].parent=t;if(s[u].rank==s[t].rank){s[t].rank++}u=t}var B,e=w;while(s[e].parent!=-1){B=e;e=s[e].parent;s[B].parent=u}e=z;while(s[e].parent!=-1){B=e;e=s[e].parent;s[B].parent=u}}}}}var x=[];var p=0;for(z=0;z<r;z++){w=-1;var f=z;if(s[f].element){while(s[f].parent!=-1){f=s[f].parent}if(s[f].rank>=0){s[f].rank=~p++}w=~s[f].rank}x[z]=w}var o=[];for(z=0;z<p+1;++z){o[z]={neighbors:0,x:0,y:0,width:0,height:0,confidence:0}}for(z=0;z<r;++z){var A=h[z];var l=x[z];if(o[l].neighbors==0){o[l].confidence=A.confidence}++o[l].neighbors;o[l].x+=A.x;o[l].y+=A.y;o[l].width+=A.width;o[l].height+=A.height;o[l].confidence=Math.max(o[l].confidence,A.confidence)}var k=[];for(z=0;z<p;++z){r=o[z].neighbors;if(r>=m){k.push({x:(o[z].x*2+r)/(2*r),y:(o[z].y*2+r)/(2*r),width:(o[z].width*2+r)/(2*r),height:(o[z].height*2+r)/(2*r),neighbors:o[z].neighbors,confidence:o[z].confidence})}}var q=[];r=k.length;for(z=0;z<r;++z){var A=k[z];var y=true;for(w=0;w<r;++w){var v=k[w];var g=(v.width*0.25+0.5)|0;if(z!=w&&A.x>=v.x-g&&A.y>=v.y-g&&A.x+A.width<=v.x+v.width+g&&A.y+A.height<=v.y+v.height+g&&(v.neighbors>Math.max(3,A.neighbors)||A.neighbors<3)){y=false;break}}if(y){q.push(A)}}return q}}})();a.bbf=b})(jsfeat);(function(a){if(typeof module==="undefined"||typeof module.exports==="undefined"){window.jsfeat=a}else{module.exports=a}})(jsfeat);;"use strict";var numeric=typeof exports=="undefined"?function(){}:exports;typeof global!="undefined"&&(global.numeric=numeric),numeric.version="1.2.6",numeric.bench=function(t,n){var r,i,s,o;typeof n=="undefined"&&(n=15),s=.5,r=new Date;for(;;){s*=2;for(o=s;o>3;o-=4)t(),t(),t(),t();while(o>0)t(),o--;i=new Date;if(i-r>n)break}for(o=s;o>3;o-=4)t(),t(),t(),t();while(o>0)t(),o--;return i=new Date,1e3*(3*s-1)/(i-r)},numeric._myIndexOf=function(t){var n=this.length,r;for(r=0;r<n;++r)if(this[r]===t)return r;return-1},numeric.myIndexOf=Array.prototype.indexOf?Array.prototype.indexOf:numeric._myIndexOf,numeric.Function=Function,numeric.precision=4,numeric.largeArray=50,numeric.prettyPrint=function(t){function n(e){if(e===0)return"0";if(isNaN(e))return"NaN";if(e<0)return"-"+n(-e);if(isFinite(e)){var t=Math.floor(Math.log(e)/Math.log(10)),r=e/Math.pow(10,t),i=r.toPrecision(numeric.precision);return parseFloat(i)===10&&(t++,r=1,i=r.toPrecision(numeric.precision)),parseFloat(i).toString()+"e"+t.toString()}return"Infinity"}function i(e){var t;if(typeof e=="undefined")return r.push(Array(numeric.precision+8).join(" ")),!1;if(typeof e=="string")return r.push('"'+e+'"'),!1;if(typeof e=="boolean")return r.push(e.toString()),!1;if(typeof e=="number"){var s=n(e),o=e.toPrecision(numeric.precision),u=parseFloat(e.toString()).toString(),a=[s,o,u,parseFloat(o).toString(),parseFloat(u).toString()];for(t=1;t<a.length;t++)a[t].length<s.length&&(s=a[t]);return r.push(Array(numeric.precision+8-s.length).join(" ")+s),!1}if(e===null)return r.push("null"),!1;if(typeof e=="function"){r.push(e.toString());var f=!1;for(t in e)e.hasOwnProperty(t)&&(f?r.push(",\n"):r.push("\n{"),f=!0,r.push(t),r.push(": \n"),i(e[t]));return f&&r.push("}\n"),!0}if(e instanceof Array){if(e.length>numeric.largeArray)return r.push("...Large Array..."),!0;var f=!1;r.push("[");for(t=0;t<e.length;t++)t>0&&(r.push(","),f&&r.push("\n ")),f=i(e[t]);return r.push("]"),!0}r.push("{");var f=!1;for(t in e)e.hasOwnProperty(t)&&(f&&r.push(",\n"),f=!0,r.push(t),r.push(": \n"),i(e[t]));return r.push("}"),!0}var r=[];return i(t),r.join("")},numeric.parseDate=function(t){function n(e){if(typeof e=="string")return Date.parse(e.replace(/-/g,"/"));if(e instanceof Array){var t=[],r;for(r=0;r<e.length;r++)t[r]=n(e[r]);return t}throw new Error("parseDate: parameter must be arrays of strings")}return n(t)},numeric.parseFloat=function(t){function n(e){if(typeof e=="string")return parseFloat(e);if(e instanceof Array){var t=[],r;for(r=0;r<e.length;r++)t[r]=n(e[r]);return t}throw new Error("parseFloat: parameter must be arrays of strings")}return n(t)},numeric.parseCSV=function(t){var n=t.split("\n"),r,i,s=[],o=/(([^'",]*)|('[^']*')|("[^"]*")),/g,u=/^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/,a=function(e){return e.substr(0,e.length-1)},f=0;for(i=0;i<n.length;i++){var l=(n[i]+",").match(o),c;if(l.length>0){s[f]=[];for(r=0;r<l.length;r++)c=a(l[r]),u.test(c)?s[f][r]=parseFloat(c):s[f][r]=c;f++}}return s},numeric.toCSV=function(t){var n=numeric.dim(t),r,i,s,o,u,a;s=n[0],o=n[1],a=[];for(r=0;r<s;r++){u=[];for(i=0;i<s;i++)u[i]=t[r][i].toString();a[r]=u.join(", ")}return a.join("\n")+"\n"},numeric.getURL=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(),n},numeric.imageURL=function(t){function n(e){var t=e.length,n,r,i,s,o,u,a,f,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="";for(n=0;n<t;n+=3)r=e[n],i=e[n+1],s=e[n+2],o=r>>2,u=((r&3)<<4)+(i>>4),a=((i&15)<<2)+(s>>6),f=s&63,n+1>=t?a=f=64:n+2>=t&&(f=64),c+=l.charAt(o)+l.charAt(u)+l.charAt(a)+l.charAt(f);return c}function r(e,t,n){typeof t=="undefined"&&(t=0),typeof n=="undefined"&&(n=e.length);var r=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],i=-1,s=0,o=e.length,u;for(u=t;u<n;u++)s=(i^e[u])&255,i=i>>>8^r[s];return i^-1}var i=t[0].length,s=t[0][0].length,o,u,a,f,l,c,h,p,d,v,m,g=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,s>>24&255,s>>16&255,s>>8&255,s&255,i>>24&255,i>>16&255,i>>8&255,i&255,8,2,0,0,0,-1,-2,-3,-4,-5,-6,-7,-8,73,68,65,84,8,29];m=r(g,12,29),g[29]=m>>24&255,g[30]=m>>16&255,g[31]=m>>8&255,g[32]=m&255,o=1,u=0;for(p=0;p<i;p++){p<i-1?g.push(0):g.push(1),c=3*s+1+(p===0)&255,h=3*s+1+(p===0)>>8&255,g.push(c),g.push(h),g.push(~c&255),g.push(~h&255),p===0&&g.push(0);for(d=0;d<s;d++)for(f=0;f<3;f++)c=t[f][p][d],c>255?c=255:c<0?c=0:c=Math.round(c),o=(o+c)%65521,u=(u+o)%65521,g.push(c);g.push(0)}return v=(u<<16)+o,g.push(v>>24&255),g.push(v>>16&255),g.push(v>>8&255),g.push(v&255),l=g.length-41,g[33]=l>>24&255,g[34]=l>>16&255,g[35]=l>>8&255,g[36]=l&255,m=r(g,37),g.push(m>>24&255),g.push(m>>16&255),g.push(m>>8&255),g.push(m&255),g.push(0),g.push(0),g.push(0),g.push(0),g.push(73),g.push(69),g.push(78),g.push(68),g.push(174),g.push(66),g.push(96),g.push(130),"data:image/png;base64,"+n(g)},numeric._dim=function(t){var n=[];while(typeof t=="object")n.push(t.length),t=t[0];return n},numeric.dim=function(t){var n,r;if(typeof t=="object")return n=t[0],typeof n=="object"?(r=n[0],typeof r=="object"?numeric._dim(t):[t.length,n.length]):[t.length];return[]},numeric.mapreduce=function(t,n){return Function("x","accum","_s","_k",'if(typeof accum === "undefined") accum = '+n+";\n"+'if(typeof x === "number") { var xi = x; '+t+"; return accum; }\n"+'if(typeof _s === "undefined") _s = numeric.dim(x);\n'+'if(typeof _k === "undefined") _k = 0;\n'+"var _n = _s[_k];\n"+"var i,xi;\n"+"if(_k < _s.length-1) {\n"+"    for(i=_n-1;i>=0;i--) {\n"+"        accum = arguments.callee(x[i],accum,_s,_k+1);\n"+"    }"+"    return accum;\n"+"}\n"+"for(i=_n-1;i>=1;i-=2) { \n"+"    xi = x[i];\n"+"    "+t+";\n"+"    xi = x[i-1];\n"+"    "+t+";\n"+"}\n"+"if(i === 0) {\n"+"    xi = x[i];\n"+"    "+t+"\n"+"}\n"+"return accum;")},numeric.mapreduce2=function(t,n){return Function("x","var n = x.length;\nvar i,xi;\n"+n+";\n"+"for(i=n-1;i!==-1;--i) { \n"+"    xi = x[i];\n"+"    "+t+";\n"+"}\n"+"return accum;")},numeric.same=function same(e,t){var n,r;if(e instanceof Array&&t instanceof Array){r=e.length;if(r!==t.length)return!1;for(n=0;n<r;n++){if(e[n]===t[n])continue;if(typeof e[n]!="object")return!1;if(!same(e[n],t[n]))return!1}return!0}return!1},numeric.rep=function(t,n,r){typeof r=="undefined"&&(r=0);var i=t[r],s=Array(i),o;if(r===t.length-1){for(o=i-2;o>=0;o-=2)s[o+1]=n,s[o]=n;return o===-1&&(s[0]=n),s}for(o=i-1;o>=0;o--)s[o]=numeric.rep(t,n,r+1);return s},numeric.dotMMsmall=function(t,n){var r,i,s,o,u,a,f,l,c,h,p,d,v,m;o=t.length,u=n.length,a=n[0].length,f=Array(o);for(r=o-1;r>=0;r--){l=Array(a),c=t[r];for(s=a-1;s>=0;s--){h=c[u-1]*n[u-1][s];for(i=u-2;i>=1;i-=2)p=i-1,h+=c[i]*n[i][s]+c[p]*n[p][s];i===0&&(h+=c[0]*n[0][s]),l[s]=h}f[r]=l}return f},numeric._getCol=function(t,n,r){var i=t.length,s;for(s=i-1;s>0;--s)r[s]=t[s][n],--s,r[s]=t[s][n];s===0&&(r[0]=t[0][n])},numeric.dotMMbig=function(t,n){var r=numeric._getCol,i=n.length,s=Array(i),o=t.length,u=n[0].length,a=new Array(o),f,l=numeric.dotVV,c,h,p,d;--i,--o;for(c=o;c!==-1;--c)a[c]=Array(u);--u;for(c=u;c!==-1;--c){r(n,c,s);for(h=o;h!==-1;--h)d=0,f=t[h],a[h][c]=l(f,s)}return a},numeric.dotMV=function(t,n){var r=t.length,i=n.length,s,o=Array(r),u=numeric.dotVV;for(s=r-1;s>=0;s--)o[s]=u(t[s],n);return o},numeric.dotVM=function(t,n){var r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E;o=t.length,u=n[0].length,f=Array(u);for(s=u-1;s>=0;s--){h=t[o-1]*n[o-1][s];for(i=o-2;i>=1;i-=2)p=i-1,h+=t[i]*n[i][s]+t[p]*n[p][s];i===0&&(h+=t[0]*n[0][s]),f[s]=h}return f},numeric.dotVV=function(t,n){var r,i=t.length,s,o=t[i-1]*n[i-1];for(r=i-2;r>=1;r-=2)s=r-1,o+=t[r]*n[r]+t[s]*n[s];return r===0&&(o+=t[0]*n[0]),o},numeric.dot=function(t,n){var r=numeric.dim;switch(r(t).length*1e3+r(n).length){case 2002:return n.length<10?numeric.dotMMsmall(t,n):numeric.dotMMbig(t,n);case 2001:return numeric.dotMV(t,n);case 1002:return numeric.dotVM(t,n);case 1001:return numeric.dotVV(t,n);case 1e3:return numeric.mulVS(t,n);case 1:return numeric.mulSV(t,n);case 0:return t*n;default:throw new Error("numeric.dot only works on vectors and matrices")}},numeric.diag=function(t){var n,r,i,s=t.length,o=Array(s),u;for(n=s-1;n>=0;n--){u=Array(s),r=n+2;for(i=s-1;i>=r;i-=2)u[i]=0,u[i-1]=0;i>n&&(u[i]=0),u[n]=t[n];for(i=n-1;i>=1;i-=2)u[i]=0,u[i-1]=0;i===0&&(u[0]=0),o[n]=u}return o},numeric.getDiag=function(e){var t=Math.min(e.length,e[0].length),n,r=Array(t);for(n=t-1;n>=1;--n)r[n]=e[n][n],--n,r[n]=e[n][n];return n===0&&(r[0]=e[0][0]),r},numeric.identity=function(t){return numeric.diag(numeric.rep([t],1))},numeric.pointwise=function(t,n,r){typeof r=="undefined"&&(r="");var i=[],s,o=/\[i\]$/,u,a="",f=!1;for(s=0;s<t.length;s++)o.test(t[s])?(u=t[s].substring(0,t[s].length-3),a=u):u=t[s],u==="ret"&&(f=!0),i.push(u);return i[t.length]="_s",i[t.length+1]="_k",i[t.length+2]='if(typeof _s === "undefined") _s = numeric.dim('+a+");\n"+'if(typeof _k === "undefined") _k = 0;\n'+"var _n = _s[_k];\n"+"var i"+(f?"":", ret = Array(_n)")+";\n"+"if(_k < _s.length-1) {\n"+"    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee("+t.join(",")+",_s,_k+1);\n"+"    return ret;\n"+"}\n"+r+"\n"+"for(i=_n-1;i!==-1;--i) {\n"+"    "+n+"\n"+"}\n"+"return ret;",Function.apply(null,i)},numeric.pointwise2=function(t,n,r){typeof r=="undefined"&&(r="");var i=[],s,o=/\[i\]$/,u,a="",f=!1;for(s=0;s<t.length;s++)o.test(t[s])?(u=t[s].substring(0,t[s].length-3),a=u):u=t[s],u==="ret"&&(f=!0),i.push(u);return i[t.length]="var _n = "+a+".length;\n"+"var i"+(f?"":", ret = Array(_n)")+";\n"+r+"\n"+"for(i=_n-1;i!==-1;--i) {\n"+n+"\n"+"}\n"+"return ret;",Function.apply(null,i)},numeric._biforeach=function _biforeach(e,t,n,r,i){if(r===n.length-1){i(e,t);return}var s,o=n[r];for(s=o-1;s>=0;s--)_biforeach(typeof e=="object"?e[s]:e,typeof t=="object"?t[s]:t,n,r+1,i)},numeric._biforeach2=function _biforeach2(e,t,n,r,i){if(r===n.length-1)return i(e,t);var s,o=n[r],u=Array(o);for(s=o-1;s>=0;--s)u[s]=_biforeach2(typeof e=="object"?e[s]:e,typeof t=="object"?t[s]:t,n,r+1,i);return u},numeric._foreach=function _foreach(e,t,n,r){if(n===t.length-1){r(e);return}var i,s=t[n];for(i=s-1;i>=0;i--)_foreach(e[i],t,n+1,r)},numeric._foreach2=function _foreach2(e,t,n,r){if(n===t.length-1)return r(e);var i,s=t[n],o=Array(s);for(i=s-1;i>=0;i--)o[i]=_foreach2(e[i],t,n+1,r);return o},numeric.ops2={add:"+",sub:"-",mul:"*",div:"/",mod:"%",and:"&&",or:"||",eq:"===",neq:"!==",lt:"<",gt:">",leq:"<=",geq:">=",band:"&",bor:"|",bxor:"^",lshift:"<<",rshift:">>",rrshift:">>>"},numeric.opseq={addeq:"+=",subeq:"-=",muleq:"*=",diveq:"/=",modeq:"%=",lshifteq:"<<=",rshifteq:">>=",rrshifteq:">>>=",bandeq:"&=",boreq:"|=",bxoreq:"^="},numeric.mathfuns=["abs","acos","asin","atan","ceil","cos","exp","floor","log","round","sin","sqrt","tan","isNaN","isFinite"],numeric.mathfuns2=["atan2","pow","max","min"],numeric.ops1={neg:"-",not:"!",bnot:"~",clone:""},numeric.mapreducers={any:["if(xi) return true;","var accum = false;"],all:["if(!xi) return false;","var accum = true;"],sum:["accum += xi;","var accum = 0;"],prod:["accum *= xi;","var accum = 1;"],norm2Squared:["accum += xi*xi;","var accum = 0;"],norminf:["accum = max(accum,abs(xi));","var accum = 0, max = Math.max, abs = Math.abs;"],norm1:["accum += abs(xi)","var accum = 0, abs = Math.abs;"],sup:["accum = max(accum,xi);","var accum = -Infinity, max = Math.max;"],inf:["accum = min(accum,xi);","var accum = Infinity, min = Math.min;"]},function(){var e,t;for(e=0;e<numeric.mathfuns2.length;++e)t=numeric.mathfuns2[e],numeric.ops2[t]=t;for(e in numeric.ops2)if(numeric.ops2.hasOwnProperty(e)){t=numeric.ops2[e];var n,r,i="";numeric.myIndexOf.call(numeric.mathfuns2,e)!==-1?(i="var "+t+" = Math."+t+";\n",n=function(e,n,r){return e+" = "+t+"("+n+","+r+")"},r=function(e,n){return e+" = "+t+"("+e+","+n+")"}):(n=function(e,n,r){return e+" = "+n+" "+t+" "+r},numeric.opseq.hasOwnProperty(e+"eq")?r=function(e,n){return e+" "+t+"= "+n}:r=function(e,n){return e+" = "+e+" "+t+" "+n}),numeric[e+"VV"]=numeric.pointwise2(["x[i]","y[i]"],n("ret[i]","x[i]","y[i]"),i),numeric[e+"SV"]=numeric.pointwise2(["x","y[i]"],n("ret[i]","x","y[i]"),i),numeric[e+"VS"]=numeric.pointwise2(["x[i]","y"],n("ret[i]","x[i]","y"),i),numeric[e]=Function("var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric."+e+"VV, VS = numeric."+e+"VS, SV = numeric."+e+"SV;\n"+"var dim = numeric.dim;\n"+"for(i=1;i!==n;++i) { \n"+"  y = arguments[i];\n"+'  if(typeof x === "object") {\n'+'      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n'+"      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n"+'  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n'+"  else "+r("x","y")+"\n"+"}\nreturn x;\n"),numeric[t]=numeric[e],numeric[e+"eqV"]=numeric.pointwise2(["ret[i]","x[i]"],r("ret[i]","x[i]"),i),numeric[e+"eqS"]=numeric.pointwise2(["ret[i]","x"],r("ret[i]","x"),i),numeric[e+"eq"]=Function("var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric."+e+"eqV, S = numeric."+e+"eqS\n"+"var s = numeric.dim(x);\n"+"for(i=1;i!==n;++i) { \n"+"  y = arguments[i];\n"+'  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n'+"  else numeric._biforeach(x,y,s,0,S);\n"+"}\nreturn x;\n")}for(e=0;e<numeric.mathfuns2.length;++e)t=numeric.mathfuns2[e],delete numeric.ops2[t];for(e=0;e<numeric.mathfuns.length;++e)t=numeric.mathfuns[e],numeric.ops1[t]=t;for(e in numeric.ops1)numeric.ops1.hasOwnProperty(e)&&(i="",t=numeric.ops1[e],numeric.myIndexOf.call(numeric.mathfuns,e)!==-1&&Math.hasOwnProperty(t)&&(i="var "+t+" = Math."+t+";\n"),numeric[e+"eqV"]=numeric.pointwise2(["ret[i]"],"ret[i] = "+t+"(ret[i]);",i),numeric[e+"eq"]=Function("x",'if(typeof x !== "object") return '+t+"x\n"+"var i;\n"+"var V = numeric."+e+"eqV;\n"+"var s = numeric.dim(x);\n"+"numeric._foreach(x,s,0,V);\n"+"return x;\n"),numeric[e+"V"]=numeric.pointwise2(["x[i]"],"ret[i] = "+t+"(x[i]);",i),numeric[e]=Function("x",'if(typeof x !== "object") return '+t+"(x)\n"+"var i;\n"+"var V = numeric."+e+"V;\n"+"var s = numeric.dim(x);\n"+"return numeric._foreach2(x,s,0,V);\n"));for(e=0;e<numeric.mathfuns.length;++e)t=numeric.mathfuns[e],delete numeric.ops1[t];for(e in numeric.mapreducers)numeric.mapreducers.hasOwnProperty(e)&&(t=numeric.mapreducers[e],numeric[e+"V"]=numeric.mapreduce2(t[0],t[1]),numeric[e]=Function("x","s","k",t[1]+'if(typeof x !== "object") {'+"    xi = x;\n"+t[0]+";\n"+"    return accum;\n"+"}"+'if(typeof s === "undefined") s = numeric.dim(x);\n'+'if(typeof k === "undefined") k = 0;\n'+"if(k === s.length-1) return numeric."+e+"V(x);\n"+"var xi;\n"+"var n = x.length, i;\n"+"for(i=n-1;i!==-1;--i) {\n"+"   xi = arguments.callee(x[i]);\n"+t[0]+";\n"+"}\n"+"return accum;\n"))}(),numeric.truncVV=numeric.pointwise(["x[i]","y[i]"],"ret[i] = round(x[i]/y[i])*y[i];","var round = Math.round;"),numeric.truncVS=numeric.pointwise(["x[i]","y"],"ret[i] = round(x[i]/y)*y;","var round = Math.round;"),numeric.truncSV=numeric.pointwise(["x","y[i]"],"ret[i] = round(x/y[i])*y[i];","var round = Math.round;"),numeric.trunc=function(t,n){return typeof t=="object"?typeof n=="object"?numeric.truncVV(t,n):numeric.truncVS(t,n):typeof n=="object"?numeric.truncSV(t,n):Math.round(t/n)*n},numeric.inv=function(t){var n=numeric.dim(t),r=Math.abs,i=n[0],s=n[1],o=numeric.clone(t),u,a,f=numeric.identity(i),l,c,h,p,d,t;for(p=0;p<s;++p){var v=-1,m=-1;for(h=p;h!==i;++h)d=r(o[h][p]),d>m&&(v=h,m=d);a=o[v],o[v]=o[p],o[p]=a,c=f[v],f[v]=f[p],f[p]=c,t=a[p];for(d=p;d!==s;++d)a[d]/=t;for(d=s-1;d!==-1;--d)c[d]/=t;for(h=i-1;h!==-1;--h)if(h!==p){u=o[h],l=f[h],t=u[p];for(d=p+1;d!==s;++d)u[d]-=a[d]*t;for(d=s-1;d>0;--d)l[d]-=c[d]*t,--d,l[d]-=c[d]*t;d===0&&(l[0]-=c[0]*t)}}return f},numeric.det=function(t){var n=numeric.dim(t);if(n.length!==2||n[0]!==n[1])throw new Error("numeric: det() only works on square matrices");var r=n[0],i=1,s,o,u,a=numeric.clone(t),f,l,c,h,p,d,v;for(o=0;o<r-1;o++){u=o;for(s=o+1;s<r;s++)Math.abs(a[s][o])>Math.abs(a[u][o])&&(u=s);u!==o&&(h=a[u],a[u]=a[o],a[o]=h,i*=-1),f=a[o];for(s=o+1;s<r;s++){l=a[s],c=l[o]/f[o];for(u=o+1;u<r-1;u+=2)p=u+1,l[u]-=f[u]*c,l[p]-=f[p]*c;u!==r&&(l[u]-=f[u]*c)}if(f[o]===0)return 0;i*=f[o]}return i*a[o][o]},numeric.transpose=function(t){var n,r,i=t.length,s=t[0].length,o=Array(s),u,a,f;for(r=0;r<s;r++)o[r]=Array(i);for(n=i-1;n>=1;n-=2){a=t[n],u=t[n-1];for(r=s-1;r>=1;--r)f=o[r],f[n]=a[r],f[n-1]=u[r],--r,f=o[r],f[n]=a[r],f[n-1]=u[r];r===0&&(f=o[0],f[n]=a[0],f[n-1]=u[0])}if(n===0){u=t[0];for(r=s-1;r>=1;--r)o[r][0]=u[r],--r,o[r][0]=u[r];r===0&&(o[0][0]=u[0])}return o},numeric.negtranspose=function(t){var n,r,i=t.length,s=t[0].length,o=Array(s),u,a,f;for(r=0;r<s;r++)o[r]=Array(i);for(n=i-1;n>=1;n-=2){a=t[n],u=t[n-1];for(r=s-1;r>=1;--r)f=o[r],f[n]=-a[r],f[n-1]=-u[r],--r,f=o[r],f[n]=-a[r],f[n-1]=-u[r];r===0&&(f=o[0],f[n]=-a[0],f[n-1]=-u[0])}if(n===0){u=t[0];for(r=s-1;r>=1;--r)o[r][0]=-u[r],--r,o[r][0]=-u[r];r===0&&(o[0][0]=-u[0])}return o},numeric._random=function _random(e,t){var n,r=e[t],i=Array(r),s;if(t===e.length-1){s=Math.random;for(n=r-1;n>=1;n-=2)i[n]=s(),i[n-1]=s();return n===0&&(i[0]=s()),i}for(n=r-1;n>=0;n--)i[n]=_random(e,t+1);return i},numeric.random=function(t){return numeric._random(t,0)},numeric.norm2=function(t){return Math.sqrt(numeric.norm2Squared(t))},numeric.linspace=function(t,n,r){typeof r=="undefined"&&(r=Math.max(Math.round(n-t)+1,1));if(r<2)return r===1?[t]:[];var i,s=Array(r);r--;for(i=r;i>=0;i--)s[i]=(i*n+(r-i)*t)/r;return s},numeric.getBlock=function(t,n,r){function s(e,t){var o,u=n[t],a=r[t]-u,f=Array(a);if(t===i.length-1){for(o=a;o>=0;o--)f[o]=e[o+u];return f}for(o=a;o>=0;o--)f[o]=s(e[o+u],t+1);return f}var i=numeric.dim(t);return s(t,0)},numeric.setBlock=function(t,n,r,i){function o(e,t,i){var u,a=n[i],f=r[i]-a;if(i===s.length-1)for(u=f;u>=0;u--)e[u+a]=t[u];for(u=f;u>=0;u--)o(e[u+a],t[u],i+1)}var s=numeric.dim(t);return o(t,i,0),t},numeric.getRange=function(t,n,r){var i=n.length,s=r.length,o,u,a=Array(i),f,l;for(o=i-1;o!==-1;--o){a[o]=Array(s),f=a[o],l=t[n[o]];for(u=s-1;u!==-1;--u)f[u]=l[r[u]]}return a},numeric.blockMatrix=function(t){var n=numeric.dim(t);if(n.length<4)return numeric.blockMatrix([t]);var r=n[0],i=n[1],s,o,u,a,f;s=0,o=0;for(u=0;u<r;++u)s+=t[u][0].length;for(a=0;a<i;++a)o+=t[0][a][0].length;var l=Array(s);for(u=0;u<s;++u)l[u]=Array(o);var c=0,h,p,d,v,m;for(u=0;u<r;++u){h=o;for(a=i-1;a!==-1;--a){f=t[u][a],h-=f[0].length;for(d=f.length-1;d!==-1;--d){m=f[d],p=l[c+d];for(v=m.length-1;v!==-1;--v)p[h+v]=m[v]}}c+=t[u][0].length}return l},numeric.tensor=function(t,n){if(typeof t=="number"||typeof n=="number")return numeric.mul(t,n);var r=numeric.dim(t),i=numeric.dim(n);if(r.length!==1||i.length!==1)throw new Error("numeric: tensor product is only defined for vectors");var s=r[0],o=i[0],u=Array(s),a,f,l,c;for(f=s-1;f>=0;f--){a=Array(o),c=t[f];for(l=o-1;l>=3;--l)a[l]=c*n[l],--l,a[l]=c*n[l],--l,a[l]=c*n[l],--l,a[l]=c*n[l];while(l>=0)a[l]=c*n[l],--l;u[f]=a}return u},numeric.T=function(t,n){this.x=t,this.y=n},numeric.t=function(t,n){return new numeric.T(t,n)},numeric.Tbinop=function(t,n,r,i,s){var o=numeric.indexOf;if(typeof s!="string"){var u;s="";for(u in numeric)numeric.hasOwnProperty(u)&&(t.indexOf(u)>=0||n.indexOf(u)>=0||r.indexOf(u)>=0||i.indexOf(u)>=0)&&u.length>1&&(s+="var "+u+" = numeric."+u+";\n")}return Function(["y"],"var x = this;\nif(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n"+s+"\n"+"if(x.y) {"+"  if(y.y) {"+"    return new numeric.T("+i+");\n"+"  }\n"+"  return new numeric.T("+r+");\n"+"}\n"+"if(y.y) {\n"+"  return new numeric.T("+n+");\n"+"}\n"+"return new numeric.T("+t+");\n")},numeric.T.prototype.add=numeric.Tbinop("add(x.x,y.x)","add(x.x,y.x),y.y","add(x.x,y.x),x.y","add(x.x,y.x),add(x.y,y.y)"),numeric.T.prototype.sub=numeric.Tbinop("sub(x.x,y.x)","sub(x.x,y.x),neg(y.y)","sub(x.x,y.x),x.y","sub(x.x,y.x),sub(x.y,y.y)"),numeric.T.prototype.mul=numeric.Tbinop("mul(x.x,y.x)","mul(x.x,y.x),mul(x.x,y.y)","mul(x.x,y.x),mul(x.y,y.x)","sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))"),numeric.T.prototype.reciprocal=function(){var t=numeric.mul,n=numeric.div;if(this.y){var r=numeric.add(t(this.x,this.x),t(this.y,this.y));return new numeric.T(n(this.x,r),n(numeric.neg(this.y),r))}return new T(n(1,this.x))},numeric.T.prototype.div=function div(e){e instanceof numeric.T||(e=new numeric.T(e));if(e.y)return this.mul(e.reciprocal());var div=numeric.div;return this.y?new numeric.T(div(this.x,e.x),div(this.y,e.x)):new numeric.T(div(this.x,e.x))},numeric.T.prototype.dot=numeric.Tbinop("dot(x.x,y.x)","dot(x.x,y.x),dot(x.x,y.y)","dot(x.x,y.x),dot(x.y,y.x)","sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))"),numeric.T.prototype.transpose=function(){var t=numeric.transpose,n=this.x,r=this.y;return r?new numeric.T(t(n),t(r)):new numeric.T(t(n))},numeric.T.prototype.transjugate=function(){var t=numeric.transpose,n=this.x,r=this.y;return r?new numeric.T(t(n),numeric.negtranspose(r)):new numeric.T(t(n))},numeric.Tunop=function(t,n,r){return typeof r!="string"&&(r=""),Function("var x = this;\n"+r+"\n"+"if(x.y) {"+"  "+n+";\n"+"}\n"+t+";\n")},numeric.T.prototype.exp=numeric.Tunop("return new numeric.T(ex)","return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))","var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;"),numeric.T.prototype.conj=numeric.Tunop("return new numeric.T(x.x);","return new numeric.T(x.x,numeric.neg(x.y));"),numeric.T.prototype.neg=numeric.Tunop("return new numeric.T(neg(x.x));","return new numeric.T(neg(x.x),neg(x.y));","var neg = numeric.neg;"),numeric.T.prototype.sin=numeric.Tunop("return new numeric.T(numeric.sin(x.x))","return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));"),numeric.T.prototype.cos=numeric.Tunop("return new numeric.T(numeric.cos(x.x))","return x.exp().add(x.neg().exp()).div(2);"),numeric.T.prototype.abs=numeric.Tunop("return new numeric.T(numeric.abs(x.x));","return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));","var mul = numeric.mul;"),numeric.T.prototype.log=numeric.Tunop("return new numeric.T(numeric.log(x.x));","var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\nreturn new numeric.T(numeric.log(r.x),theta.x);"),numeric.T.prototype.norm2=numeric.Tunop("return numeric.norm2(x.x);","var f = numeric.norm2Squared;\nreturn Math.sqrt(f(x.x)+f(x.y));"),numeric.T.prototype.inv=function(){var t=this;if(typeof t.y=="undefined")return new numeric.T(numeric.inv(t.x));var n=t.x.length,r,i,s,o=numeric.identity(n),u=numeric.rep([n,n],0),a=numeric.clone(t.x),f=numeric.clone(t.y),l,c,h,p,d,v,m,g,r,i,s,y,b,w,E,S,x,T;for(r=0;r<n;r++){w=a[r][r],E=f[r][r],y=w*w+E*E,s=r;for(i=r+1;i<n;i++)w=a[i][r],E=f[i][r],b=w*w+E*E,b>y&&(s=i,y=b);s!==r&&(T=a[r],a[r]=a[s],a[s]=T,T=f[r],f[r]=f[s],f[s]=T,T=o[r],o[r]=o[s],o[s]=T,T=u[r],u[r]=u[s],u[s]=T),l=a[r],c=f[r],d=o[r],v=u[r],w=l[r],E=c[r];for(i=r+1;i<n;i++)S=l[i],x=c[i],l[i]=(S*w+x*E)/y,c[i]=(x*w-S*E)/y;for(i=0;i<n;i++)S=d[i],x=v[i],d[i]=(S*w+x*E)/y,v[i]=(x*w-S*E)/y;for(i=r+1;i<n;i++){h=a[i],p=f[i],m=o[i],g=u[i],w=h[r],E=p[r];for(s=r+1;s<n;s++)S=l[s],x=c[s],h[s]-=S*w-x*E,p[s]-=x*w+S*E;for(s=0;s<n;s++)S=d[s],x=v[s],m[s]-=S*w-x*E,g[s]-=x*w+S*E}}for(r=n-1;r>0;r--){d=o[r],v=u[r];for(i=r-1;i>=0;i--){m=o[i],g=u[i],w=a[i][r],E=f[i][r];for(s=n-1;s>=0;s--)S=d[s],x=v[s],m[s]-=w*S-E*x,g[s]-=w*x+E*S}}return new numeric.T(o,u)},numeric.T.prototype.get=function(t){var n=this.x,r=this.y,i=0,s,o=t.length;if(r){while(i<o)s=t[i],n=n[s],r=r[s],i++;return new numeric.T(n,r)}while(i<o)s=t[i],n=n[s],i++;return new numeric.T(n)},numeric.T.prototype.set=function(t,n){var r=this.x,i=this.y,s=0,o,u=t.length,a=n.x,f=n.y;if(u===0)return f?this.y=f:i&&(this.y=undefined),this.x=r,this;if(f){i||(i=numeric.rep(numeric.dim(r),0),this.y=i);while(s<u-1)o=t[s],r=r[o],i=i[o],s++;return o=t[s],r[o]=a,i[o]=f,this}if(i){while(s<u-1)o=t[s],r=r[o],i=i[o],s++;return o=t[s],r[o]=a,a instanceof Array?i[o]=numeric.rep(numeric.dim(a),0):i[o]=0,this}while(s<u-1)o=t[s],r=r[o],s++;return o=t[s],r[o]=a,this},numeric.T.prototype.getRows=function(t,n){var r=n-t+1,i,s=Array(r),o,u=this.x,a=this.y;for(i=t;i<=n;i++)s[i-t]=u[i];if(a){o=Array(r);for(i=t;i<=n;i++)o[i-t]=a[i];return new numeric.T(s,o)}return new numeric.T(s)},numeric.T.prototype.setRows=function(t,n,r){var i,s=this.x,o=this.y,u=r.x,a=r.y;for(i=t;i<=n;i++)s[i]=u[i-t];if(a){o||(o=numeric.rep(numeric.dim(s),0),this.y=o);for(i=t;i<=n;i++)o[i]=a[i-t]}else if(o)for(i=t;i<=n;i++)o[i]=numeric.rep([u[i-t].length],0);return this},numeric.T.prototype.getRow=function(t){var n=this.x,r=this.y;return r?new numeric.T(n[t],r[t]):new numeric.T(n[t])},numeric.T.prototype.setRow=function(t,n){var r=this.x,i=this.y,s=n.x,o=n.y;return r[t]=s,o?(i||(i=numeric.rep(numeric.dim(r),0),this.y=i),i[t]=o):i&&(i=numeric.rep([s.length],0)),this},numeric.T.prototype.getBlock=function(t,n){var r=this.x,i=this.y,s=numeric.getBlock;return i?new numeric.T(s(r,t,n),s(i,t,n)):new numeric.T(s(r,t,n))},numeric.T.prototype.setBlock=function(t,n,r){r instanceof numeric.T||(r=new numeric.T(r));var i=this.x,s=this.y,o=numeric.setBlock,u=r.x,a=r.y;if(a)return s||(this.y=numeric.rep(numeric.dim(this),0),s=this.y),o(i,t,n,u),o(s,t,n,a),this;o(i,t,n,u),s&&o(s,t,n,numeric.rep(numeric.dim(u),0))},numeric.T.rep=function(t,n){var r=numeric.T;n instanceof r||(n=new r(n));var i=n.x,s=n.y,o=numeric.rep;return s?new r(o(t,i),o(t,s)):new r(o(t,i))},numeric.T.diag=function diag(e){e instanceof numeric.T||(e=new numeric.T(e));var t=e.x,n=e.y,diag=numeric.diag;return n?new numeric.T(diag(t),diag(n)):new numeric.T(diag(t))},numeric.T.eig=function(){if(this.y)throw new Error("eig: not implemented for complex matrices.");return numeric.eig(this.x)},numeric.T.identity=function(t){return new numeric.T(numeric.identity(t))},numeric.T.prototype.getDiag=function(){var t=numeric,n=this.x,r=this.y;return r?new t.T(t.getDiag(n),t.getDiag(r)):new t.T(t.getDiag(n))},numeric.house=function(t){var n=numeric.clone(t),r=t[0]>=0?1:-1,i=r*numeric.norm2(t);n[0]+=i;var s=numeric.norm2(n);if(s===0)throw new Error("eig: internal error");return numeric.div(n,s)},numeric.toUpperHessenberg=function(t){var n=numeric.dim(t);if(n.length!==2||n[0]!==n[1])throw new Error("numeric: toUpperHessenberg() only works on square matrices");var r=n[0],i,s,o,u,a,f=numeric.clone(t),l,c,h,p,d=numeric.identity(r),v;for(s=0;s<r-2;s++){u=Array(r-s-1);for(i=s+1;i<r;i++)u[i-s-1]=f[i][s];if(numeric.norm2(u)>0){a=numeric.house(u),l=numeric.getBlock(f,[s+1,s],[r-1,r-1]),c=numeric.tensor(a,numeric.dot(a,l));for(i=s+1;i<r;i++){h=f[i],p=c[i-s-1];for(o=s;o<r;o++)h[o]-=2*p[o-s]}l=numeric.getBlock(f,[0,s+1],[r-1,r-1]),c=numeric.tensor(numeric.dot(l,a),a);for(i=0;i<r;i++){h=f[i],p=c[i];for(o=s+1;o<r;o++)h[o]-=2*p[o-s-1]}l=Array(r-s-1);for(i=s+1;i<r;i++)l[i-s-1]=d[i];c=numeric.tensor(a,numeric.dot(a,l));for(i=s+1;i<r;i++){v=d[i],p=c[i-s-1];for(o=0;o<r;o++)v[o]-=2*p[o]}}}return{H:f,Q:d}},numeric.epsilon=2.220446049250313e-16,numeric.QRFrancis=function(e,t){typeof t=="undefined"&&(t=1e4),e=numeric.clone(e);var n=numeric.clone(e),r=numeric.dim(e),i=r[0],s,o,u,a,f,l,c,h,p,d=numeric.identity(i),v,m,g,y,b,w,E,S,x;if(i<3)return{Q:d,B:[[0,i-1]]};var T=numeric.epsilon;for(x=0;x<t;x++){for(E=0;E<i-1;E++)if(Math.abs(e[E+1][E])<T*(Math.abs(e[E][E])+Math.abs(e[E+1][E+1]))){var N=numeric.QRFrancis(numeric.getBlock(e,[0,0],[E,E]),t),C=numeric.QRFrancis(numeric.getBlock(e,[E+1,E+1],[i-1,i-1]),t);g=Array(E+1);for(w=0;w<=E;w++)g[w]=d[w];y=numeric.dot(N.Q,g);for(w=0;w<=E;w++)d[w]=y[w];g=Array(i-E-1);for(w=E+1;w<i;w++)g[w-E-1]=d[w];y=numeric.dot(C.Q,g);for(w=E+1;w<i;w++)d[w]=y[w-E-1];return{Q:d,B:N.B.concat(numeric.add(C.B,E+1))}}u=e[i-2][i-2],a=e[i-2][i-1],f=e[i-1][i-2],l=e[i-1][i-1],h=u+l,c=u*l-a*f,p=numeric.getBlock(e,[0,0],[2,2]);if(h*h>=4*c){var k,L;k=.5*(h+Math.sqrt(h*h-4*c)),L=.5*(h-Math.sqrt(h*h-4*c)),p=numeric.add(numeric.sub(numeric.dot(p,p),numeric.mul(p,k+L)),numeric.diag(numeric.rep([3],k*L)))}else p=numeric.add(numeric.sub(numeric.dot(p,p),numeric.mul(p,h)),numeric.diag(numeric.rep([3],c)));s=[p[0][0],p[1][0],p[2][0]],o=numeric.house(s),g=[e[0],e[1],e[2]],y=numeric.tensor(o,numeric.dot(o,g));for(w=0;w<3;w++){m=e[w],b=y[w];for(S=0;S<i;S++)m[S]-=2*b[S]}g=numeric.getBlock(e,[0,0],[i-1,2]),y=numeric.tensor(numeric.dot(g,o),o);for(w=0;w<i;w++){m=e[w],b=y[w];for(S=0;S<3;S++)m[S]-=2*b[S]}g=[d[0],d[1],d[2]],y=numeric.tensor(o,numeric.dot(o,g));for(w=0;w<3;w++){v=d[w],b=y[w];for(S=0;S<i;S++)v[S]-=2*b[S]}var A;for(E=0;E<i-2;E++){for(S=E;S<=E+1;S++)if(Math.abs(e[S+1][S])<T*(Math.abs(e[S][S])+Math.abs(e[S+1][S+1]))){var N=numeric.QRFrancis(numeric.getBlock(e,[0,0],[S,S]),t),C=numeric.QRFrancis(numeric.getBlock(e,[S+1,S+1],[i-1,i-1]),t);g=Array(S+1);for(w=0;w<=S;w++)g[w]=d[w];y=numeric.dot(N.Q,g);for(w=0;w<=S;w++)d[w]=y[w];g=Array(i-S-1);for(w=S+1;w<i;w++)g[w-S-1]=d[w];y=numeric.dot(C.Q,g);for(w=S+1;w<i;w++)d[w]=y[w-S-1];return{Q:d,B:N.B.concat(numeric.add(C.B,S+1))}}A=Math.min(i-1,E+3),s=Array(A-E);for(w=E+1;w<=A;w++)s[w-E-1]=e[w][E];o=numeric.house(s),g=numeric.getBlock(e,[E+1,E],[A,i-1]),y=numeric.tensor(o,numeric.dot(o,g));for(w=E+1;w<=A;w++){m=e[w],b=y[w-E-1];for(S=E;S<i;S++)m[S]-=2*b[S-E]}g=numeric.getBlock(e,[0,E+1],[i-1,A]),y=numeric.tensor(numeric.dot(g,o),o);for(w=0;w<i;w++){m=e[w],b=y[w];for(S=E+1;S<=A;S++)m[S]-=2*b[S-E-1]}g=Array(A-E);for(w=E+1;w<=A;w++)g[w-E-1]=d[w];y=numeric.tensor(o,numeric.dot(o,g));for(w=E+1;w<=A;w++){v=d[w],b=y[w-E-1];for(S=0;S<i;S++)v[S]-=2*b[S]}}}throw new Error("numeric: eigenvalue iteration does not converge -- increase maxiter?")},numeric.eig=function(t,n){var r=numeric.toUpperHessenberg(t),i=numeric.QRFrancis(r.H,n),s=numeric.T,o=t.length,u,a,f=!1,l=i.B,c=numeric.dot(i.Q,numeric.dot(r.H,numeric.transpose(i.Q))),h=new s(numeric.dot(i.Q,r.Q)),p,d=l.length,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A=Math.sqrt;for(a=0;a<d;a++){u=l[a][0];if(u!==l[a][1]){v=u+1,m=c[u][u],g=c[u][v],y=c[v][u],b=c[v][v];if(g===0&&y===0)continue;w=-m-b,E=m*b-g*y,S=w*w-4*E,S>=0?(w<0?x=-0.5*(w-A(S)):x=-0.5*(w+A(S)),k=(m-x)*(m-x)+g*g,L=y*y+(b-x)*(b-x),k>L?(k=A(k),N=(m-x)/k,C=g/k):(L=A(L),N=y/L,C=(b-x)/L),p=new s([[C,-N],[N,C]]),h.setRows(u,v,p.dot(h.getRows(u,v)))):(x=-0.5*w,T=.5*A(-S),k=(m-x)*(m-x)+g*g,L=y*y+(b-x)*(b-x),k>L?(k=A(k+T*T),N=(m-x)/k,C=g/k,x=0,T/=k):(L=A(L+T*T),N=y/L,C=(b-x)/L,x=T/L,T=0),p=new s([[C,-N],[N,C]],[[x,
T],[T,-x]]),h.setRows(u,v,p.dot(h.getRows(u,v))))}}var O=h.dot(t).dot(h.transjugate()),o=t.length,M=numeric.T.identity(o);for(v=0;v<o;v++)if(v>0)for(a=v-1;a>=0;a--){var _=O.get([a,a]),D=O.get([v,v]);if(!numeric.neq(_.x,D.x)&&!numeric.neq(_.y,D.y)){M.setRow(v,M.getRow(a));continue}x=O.getRow(a).getBlock([a],[v-1]),T=M.getRow(v).getBlock([a],[v-1]),M.set([v,a],O.get([a,v]).neg().sub(x.dot(T)).div(_.sub(D)))}for(v=0;v<o;v++)x=M.getRow(v),M.setRow(v,x.div(x.norm2()));return M=M.transpose(),M=h.transjugate().dot(M),{lambda:O.getDiag(),E:M}},numeric.ccsSparse=function(t){var n=t.length,r,i,s,o,u=[];for(s=n-1;s!==-1;--s){i=t[s];for(o in i){o=parseInt(o);while(o>=u.length)u[u.length]=0;i[o]!==0&&u[o]++}}var r=u.length,a=Array(r+1);a[0]=0;for(s=0;s<r;++s)a[s+1]=a[s]+u[s];var f=Array(a[r]),l=Array(a[r]);for(s=n-1;s!==-1;--s){i=t[s];for(o in i)i[o]!==0&&(u[o]--,f[a[o]+u[o]]=s,l[a[o]+u[o]]=i[o])}return[a,f,l]},numeric.ccsFull=function(t){var n=t[0],r=t[1],i=t[2],s=numeric.ccsDim(t),o=s[0],u=s[1],a,f,l,c,h,p=numeric.rep([o,u],0);for(a=0;a<u;a++){l=n[a],c=n[a+1];for(f=l;f<c;++f)p[r[f]][a]=i[f]}return p},numeric.ccsTSolve=function(t,n,r,i,s){function h(e){var t;if(r[e]!==0)return;r[e]=1;for(t=o[e];t<o[e+1];++t)h(u[t]);s[c]=e,++c}var o=t[0],u=t[1],a=t[2],f=o.length-1,l=Math.max,c=0;typeof i=="undefined"&&(r=numeric.rep([f],0)),typeof i=="undefined"&&(i=numeric.linspace(0,r.length-1)),typeof s=="undefined"&&(s=[]);var p,d,v,m,g,y,b,w,E;for(p=i.length-1;p!==-1;--p)h(i[p]);s.length=c;for(p=s.length-1;p!==-1;--p)r[s[p]]=0;for(p=i.length-1;p!==-1;--p)d=i[p],r[d]=n[d];for(p=s.length-1;p!==-1;--p){d=s[p],v=o[d],m=l(o[d+1],v);for(g=v;g!==m;++g)if(u[g]===d){r[d]/=a[g];break}E=r[d];for(g=v;g!==m;++g)y=u[g],y!==d&&(r[y]-=E*a[g])}return r},numeric.ccsDFS=function(t){this.k=Array(t),this.k1=Array(t),this.j=Array(t)},numeric.ccsDFS.prototype.dfs=function(t,n,r,i,s,o){var u=0,a,f=s.length,l=this.k,c=this.k1,h=this.j,p,d;if(i[t]!==0)return;i[t]=1,h[0]=t,l[0]=p=n[t],c[0]=d=n[t+1];for(;;)if(p>=d){s[f]=h[u];if(u===0)return;++f,--u,p=l[u],d=c[u]}else a=o[r[p]],i[a]===0?(i[a]=1,l[u]=p,++u,h[u]=a,p=n[a],c[u]=d=n[a+1]):++p},numeric.ccsLPSolve=function(t,n,r,i,s,o,u){var a=t[0],f=t[1],l=t[2],c=a.length-1,h=0,p=n[0],d=n[1],v=n[2],m,g,y,b,w,E,S,x,T,N,C,k;g=p[s],y=p[s+1],i.length=0;for(m=g;m<y;++m)u.dfs(o[d[m]],a,f,r,i,o);for(m=i.length-1;m!==-1;--m)r[i[m]]=0;for(m=g;m!==y;++m)b=o[d[m]],r[b]=v[m];for(m=i.length-1;m!==-1;--m){b=i[m],E=a[b],S=a[b+1];for(x=E;x<S;++x)if(o[f[x]]===b){r[b]/=l[x];break}k=r[b];for(x=E;x<S;++x)T=o[f[x]],T!==b&&(r[T]-=k*l[x])}return r},numeric.ccsLUP1=function(t,n){var r=t[0].length-1,i=[numeric.rep([r+1],0),[],[]],s=[numeric.rep([r+1],0),[],[]],o=i[0],u=i[1],a=i[2],f=s[0],l=s[1],c=s[2],h=numeric.rep([r],0),p=numeric.rep([r],0),d,v,m,g,y,b,w,E,S,x,T=numeric.ccsLPSolve,N=Math.max,C=Math.abs,k=numeric.linspace(0,r-1),L=numeric.linspace(0,r-1),A=new numeric.ccsDFS(r);typeof n=="undefined"&&(n=1);for(d=0;d<r;++d){T(i,t,h,p,d,L,A),b=-1,w=-1;for(v=p.length-1;v!==-1;--v){m=p[v];if(m<=d)continue;E=C(h[m]),E>b&&(w=m,b=E)}C(h[d])<n*b&&(v=k[d],b=k[w],k[d]=b,L[b]=d,k[w]=v,L[v]=w,b=h[d],h[d]=h[w],h[w]=b),b=o[d],w=f[d],S=h[d],u[b]=k[d],a[b]=1,++b;for(v=p.length-1;v!==-1;--v)m=p[v],E=h[m],p[v]=0,h[m]=0,m<=d?(l[w]=m,c[w]=E,++w):(u[b]=k[m],a[b]=E/S,++b);o[d+1]=b,f[d+1]=w}for(v=u.length-1;v!==-1;--v)u[v]=L[u[v]];return{L:i,U:s,P:k,Pinv:L}},numeric.ccsDFS0=function(t){this.k=Array(t),this.k1=Array(t),this.j=Array(t)},numeric.ccsDFS0.prototype.dfs=function(t,n,r,i,s,o,u){var a=0,f,l=s.length,c=this.k,h=this.k1,p=this.j,d,v;if(i[t]!==0)return;i[t]=1,p[0]=t,c[0]=d=n[o[t]],h[0]=v=n[o[t]+1];for(;;){if(isNaN(d))throw new Error("Ow!");if(d>=v){s[l]=o[p[a]];if(a===0)return;++l,--a,d=c[a],v=h[a]}else f=r[d],i[f]===0?(i[f]=1,c[a]=d,++a,p[a]=f,f=o[f],d=n[f],h[a]=v=n[f+1]):++d}},numeric.ccsLPSolve0=function(t,n,r,i,s,o,u,a){var f=t[0],l=t[1],c=t[2],h=f.length-1,p=0,d=n[0],v=n[1],m=n[2],g,y,b,w,E,S,x,T,N,C,k,L;y=d[s],b=d[s+1],i.length=0;for(g=y;g<b;++g)a.dfs(v[g],f,l,r,i,o,u);for(g=i.length-1;g!==-1;--g)w=i[g],r[u[w]]=0;for(g=y;g!==b;++g)w=v[g],r[w]=m[g];for(g=i.length-1;g!==-1;--g){w=i[g],N=u[w],S=f[w],x=f[w+1];for(T=S;T<x;++T)if(l[T]===N){r[N]/=c[T];break}L=r[N];for(T=S;T<x;++T)r[l[T]]-=L*c[T];r[N]=L}},numeric.ccsLUP0=function(t,n){var r=t[0].length-1,i=[numeric.rep([r+1],0),[],[]],s=[numeric.rep([r+1],0),[],[]],o=i[0],u=i[1],a=i[2],f=s[0],l=s[1],c=s[2],h=numeric.rep([r],0),p=numeric.rep([r],0),d,v,m,g,y,b,w,E,S,x,T=numeric.ccsLPSolve0,N=Math.max,C=Math.abs,k=numeric.linspace(0,r-1),L=numeric.linspace(0,r-1),A=new numeric.ccsDFS0(r);typeof n=="undefined"&&(n=1);for(d=0;d<r;++d){T(i,t,h,p,d,L,k,A),b=-1,w=-1;for(v=p.length-1;v!==-1;--v){m=p[v];if(m<=d)continue;E=C(h[k[m]]),E>b&&(w=m,b=E)}C(h[k[d]])<n*b&&(v=k[d],b=k[w],k[d]=b,L[b]=d,k[w]=v,L[v]=w),b=o[d],w=f[d],S=h[k[d]],u[b]=k[d],a[b]=1,++b;for(v=p.length-1;v!==-1;--v)m=p[v],E=h[k[m]],p[v]=0,h[k[m]]=0,m<=d?(l[w]=m,c[w]=E,++w):(u[b]=k[m],a[b]=E/S,++b);o[d+1]=b,f[d+1]=w}for(v=u.length-1;v!==-1;--v)u[v]=L[u[v]];return{L:i,U:s,P:k,Pinv:L}},numeric.ccsLUP=numeric.ccsLUP0,numeric.ccsDim=function(t){return[numeric.sup(t[1])+1,t[0].length-1]},numeric.ccsGetBlock=function(t,n,r){var i=numeric.ccsDim(t),s=i[0],o=i[1];typeof n=="undefined"?n=numeric.linspace(0,s-1):typeof n=="number"&&(n=[n]),typeof r=="undefined"?r=numeric.linspace(0,o-1):typeof r=="number"&&(r=[r]);var u,a,f,l=n.length,c,h=r.length,p,d,v,m=numeric.rep([o],0),g=[],y=[],b=[m,g,y],w=t[0],E=t[1],S=t[2],x=numeric.rep([s],0),T=0,N=numeric.rep([s],0);for(c=0;c<h;++c){d=r[c];var C=w[d],k=w[d+1];for(u=C;u<k;++u)p=E[u],N[p]=1,x[p]=S[u];for(u=0;u<l;++u)v=n[u],N[v]&&(g[T]=u,y[T]=x[n[u]],++T);for(u=C;u<k;++u)p=E[u],N[p]=0;m[c+1]=T}return b},numeric.ccsDot=function(t,n){var r=t[0],i=t[1],s=t[2],o=n[0],u=n[1],a=n[2],f=numeric.ccsDim(t),l=numeric.ccsDim(n),c=f[0],h=f[1],p=l[1],d=numeric.rep([c],0),v=numeric.rep([c],0),m=Array(c),g=numeric.rep([p],0),y=[],b=[],w=[g,y,b],E,S,x,T,N,C,k,L,A,O,M;for(x=0;x!==p;++x){T=o[x],N=o[x+1],A=0;for(S=T;S<N;++S){O=u[S],M=a[S],C=r[O],k=r[O+1];for(E=C;E<k;++E)L=i[E],v[L]===0&&(m[A]=L,v[L]=1,A+=1),d[L]=d[L]+s[E]*M}T=g[x],N=T+A,g[x+1]=N;for(S=A-1;S!==-1;--S)M=T+S,E=m[S],y[M]=E,b[M]=d[E],v[E]=0,d[E]=0;g[x+1]=g[x]+A}return w},numeric.ccsLUPSolve=function(t,n){var r=t.L,i=t.U,s=t.P,o=n[0],u=!1;typeof o!="object"&&(n=[[0,n.length],numeric.linspace(0,n.length-1),n],o=n[0],u=!0);var a=n[1],f=n[2],l=r[0].length-1,c=o.length-1,h=numeric.rep([l],0),p=Array(l),d=numeric.rep([l],0),v=Array(l),m=numeric.rep([c+1],0),g=[],y=[],b=numeric.ccsTSolve,w,E,S,x,T,N,C=0;for(w=0;w<c;++w){T=0,S=o[w],x=o[w+1];for(E=S;E<x;++E)N=t.Pinv[a[E]],v[T]=N,d[N]=f[E],++T;v.length=T,b(r,d,h,v,p);for(E=v.length-1;E!==-1;--E)d[v[E]]=0;b(i,h,d,p,v);if(u)return d;for(E=p.length-1;E!==-1;--E)h[p[E]]=0;for(E=v.length-1;E!==-1;--E)N=v[E],g[C]=N,y[C]=d[N],d[N]=0,++C;m[w+1]=C}return[m,g,y]},numeric.ccsbinop=function(t,n){return typeof n=="undefined"&&(n=""),Function("X","Y","var Xi = X[0], Xj = X[1], Xv = X[2];\nvar Yi = Y[0], Yj = Y[1], Yv = Y[2];\nvar n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\nvar Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\nvar x = numeric.rep([m],0),y = numeric.rep([m],0);\nvar xk,yk,zk;\nvar i,j,j0,j1,k,p=0;\n"+n+"for(i=0;i<n;++i) {\n"+"  j0 = Xi[i]; j1 = Xi[i+1];\n"+"  for(j=j0;j!==j1;++j) {\n"+"    k = Xj[j];\n"+"    x[k] = 1;\n"+"    Zj[p] = k;\n"+"    ++p;\n"+"  }\n"+"  j0 = Yi[i]; j1 = Yi[i+1];\n"+"  for(j=j0;j!==j1;++j) {\n"+"    k = Yj[j];\n"+"    y[k] = Yv[j];\n"+"    if(x[k] === 0) {\n"+"      Zj[p] = k;\n"+"      ++p;\n"+"    }\n"+"  }\n"+"  Zi[i+1] = p;\n"+"  j0 = Xi[i]; j1 = Xi[i+1];\n"+"  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n"+"  j0 = Zi[i]; j1 = Zi[i+1];\n"+"  for(j=j0;j!==j1;++j) {\n"+"    k = Zj[j];\n"+"    xk = x[k];\n"+"    yk = y[k];\n"+t+"\n"+"    Zv[j] = zk;\n"+"  }\n"+"  j0 = Xi[i]; j1 = Xi[i+1];\n"+"  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n"+"  j0 = Yi[i]; j1 = Yi[i+1];\n"+"  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n"+"}\n"+"return [Zi,Zj,Zv];")},function(){var k,A,B,C;for(k in numeric.ops2)isFinite(eval("1"+numeric.ops2[k]+"0"))?A="[Y[0],Y[1],numeric."+k+"(X,Y[2])]":A="NaN",isFinite(eval("0"+numeric.ops2[k]+"1"))?B="[X[0],X[1],numeric."+k+"(X[2],Y)]":B="NaN",isFinite(eval("1"+numeric.ops2[k]+"0"))&&isFinite(eval("0"+numeric.ops2[k]+"1"))?C="numeric.ccs"+k+"MM(X,Y)":C="NaN",numeric["ccs"+k+"MM"]=numeric.ccsbinop("zk = xk "+numeric.ops2[k]+"yk;"),numeric["ccs"+k]=Function("X","Y",'if(typeof X === "number") return '+A+";\n"+'if(typeof Y === "number") return '+B+";\n"+"return "+C+";\n")}(),numeric.ccsScatter=function(t){var n=t[0],r=t[1],i=t[2],s=numeric.sup(r)+1,o=n.length,u=numeric.rep([s],0),a=Array(o),f=Array(o),l=numeric.rep([s],0),c;for(c=0;c<o;++c)l[r[c]]++;for(c=0;c<s;++c)u[c+1]=u[c]+l[c];var h=u.slice(0),p,d;for(c=0;c<o;++c)d=r[c],p=h[d],a[p]=n[c],f[p]=i[c],h[d]=h[d]+1;return[u,a,f]},numeric.ccsGather=function(t){var n=t[0],r=t[1],i=t[2],s=n.length-1,o=r.length,u=Array(o),a=Array(o),f=Array(o),l,c,h,p,d;d=0;for(l=0;l<s;++l){h=n[l],p=n[l+1];for(c=h;c!==p;++c)a[d]=l,u[d]=r[c],f[d]=i[c],++d}return[u,a,f]},numeric.sdim=function dim(e,t,n){typeof t=="undefined"&&(t=[]);if(typeof e!="object")return t;typeof n=="undefined"&&(n=0),n in t||(t[n]=0),e.length>t[n]&&(t[n]=e.length);var r;for(r in e)e.hasOwnProperty(r)&&dim(e[r],t,n+1);return t},numeric.sclone=function clone(e,t,n){typeof t=="undefined"&&(t=0),typeof n=="undefined"&&(n=numeric.sdim(e).length);var r,i=Array(e.length);if(t===n-1){for(r in e)e.hasOwnProperty(r)&&(i[r]=e[r]);return i}for(r in e)e.hasOwnProperty(r)&&(i[r]=clone(e[r],t+1,n));return i},numeric.sdiag=function(t){var n=t.length,r,i=Array(n),s,o,u;for(r=n-1;r>=1;r-=2)s=r-1,i[r]=[],i[r][r]=t[r],i[s]=[],i[s][s]=t[s];return r===0&&(i[0]=[],i[0][0]=t[r]),i},numeric.sidentity=function(t){return numeric.sdiag(numeric.rep([t],1))},numeric.stranspose=function(t){var n=[],r=t.length,i,s,o;for(i in t){if(!t.hasOwnProperty(i))continue;o=t[i];for(s in o){if(!o.hasOwnProperty(s))continue;typeof n[s]!="object"&&(n[s]=[]),n[s][i]=o[s]}}return n},numeric.sLUP=function(t,n){throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.")},numeric.sdotMM=function(t,n){var r=t.length,i=n.length,s=numeric.stranspose(n),o=s.length,u,a,f,l,c,h,p=Array(r),d;for(f=r-1;f>=0;f--){d=[],u=t[f];for(c=o-1;c>=0;c--){h=0,a=s[c];for(l in u){if(!u.hasOwnProperty(l))continue;l in a&&(h+=u[l]*a[l])}h&&(d[c]=h)}p[f]=d}return p},numeric.sdotMV=function(t,n){var r=t.length,i,s,o,u=Array(r),a;for(s=r-1;s>=0;s--){i=t[s],a=0;for(o in i){if(!i.hasOwnProperty(o))continue;n[o]&&(a+=i[o]*n[o])}a&&(u[s]=a)}return u},numeric.sdotVM=function(t,n){var r,i,s,o,u=[],a;for(r in t){if(!t.hasOwnProperty(r))continue;s=n[r],o=t[r];for(i in s){if(!s.hasOwnProperty(i))continue;u[i]||(u[i]=0),u[i]+=o*s[i]}}return u},numeric.sdotVV=function(t,n){var r,i=0;for(r in t)t[r]&&n[r]&&(i+=t[r]*n[r]);return i},numeric.sdot=function(t,n){var r=numeric.sdim(t).length,i=numeric.sdim(n).length,s=r*1e3+i;switch(s){case 0:return t*n;case 1001:return numeric.sdotVV(t,n);case 2001:return numeric.sdotMV(t,n);case 1002:return numeric.sdotVM(t,n);case 2002:return numeric.sdotMM(t,n);default:throw new Error("numeric.sdot not implemented for tensors of order "+r+" and "+i)}},numeric.sscatter=function(t){var n=t[0].length,r,i,s,o=t.length,u=[],a;for(i=n-1;i>=0;--i){if(!t[o-1][i])continue;a=u;for(s=0;s<o-2;s++)r=t[s][i],a[r]||(a[r]=[]),a=a[r];a[t[s][i]]=t[s+1][i]}return u},numeric.sgather=function gather(e,t,n){typeof t=="undefined"&&(t=[]),typeof n=="undefined"&&(n=[]);var r,i,s;r=n.length;for(i in e)if(e.hasOwnProperty(i)){n[r]=parseInt(i),s=e[i];if(typeof s=="number"){if(s){if(t.length===0)for(i=r+1;i>=0;--i)t[i]=[];for(i=r;i>=0;--i)t[i].push(n[i]);t[r+1].push(s)}}else gather(s,t,n)}return n.length>r&&n.pop(),t},numeric.cLU=function(t){var n=t[0],r=t[1],i=t[2],s=n.length,o=0,u,a,f,l,c,h;for(u=0;u<s;u++)n[u]>o&&(o=n[u]);o++;var p=Array(o),d=Array(o),v=numeric.rep([o],Infinity),m=numeric.rep([o],-Infinity),g,y,b;for(f=0;f<s;f++)u=n[f],a=r[f],a<v[u]&&(v[u]=a),a>m[u]&&(m[u]=a);for(u=0;u<o-1;u++)m[u]>m[u+1]&&(m[u+1]=m[u]);for(u=o-1;u>=1;u--)v[u]<v[u-1]&&(v[u-1]=v[u]);var w=0,E=0;for(u=0;u<o;u++)d[u]=numeric.rep([m[u]-v[u]+1],0),p[u]=numeric.rep([u-v[u]],0),w+=u-v[u]+1,E+=m[u]-u+1;for(f=0;f<s;f++)u=n[f],d[u][r[f]-v[u]]=i[f];for(u=0;u<o-1;u++){l=u-v[u],g=d[u];for(a=u+1;v[a]<=u&&a<o;a++){c=u-v[a],h=m[u]-u,y=d[a],b=y[c]/g[l];if(b){for(f=1;f<=h;f++)y[f+c]-=b*g[f+l];p[a][u-v[a]]=b}}}var g=[],y=[],S=[],x=[],T=[],N=[],s,C,k;s=0,C=0;for(u=0;u<o;u++){l=v[u],c=m[u],k=d[u];for(a=u;a<=c;a++)k[a-l]&&(g[s]=u,y[s]=a,S[s]=k[a-l],s++);k=p[u];for(a=l;a<u;a++)k[a-l]&&(x[C]=u,T[C]=a,N[C]=k[a-l],C++);x[C]=u,T[C]=u,N[C]=1,C++}return{U:[g,y,S],L:[x,T,N]}},numeric.cLUsolve=function(t,n){var r=t.L,i=t.U,s=numeric.clone(n),o=r[0],u=r[1],a=r[2],f=i[0],l=i[1],c=i[2],h=f.length,p=o.length,d=s.length,v,m,g;g=0;for(v=0;v<d;v++){while(u[g]<v)s[v]-=a[g]*s[u[g]],g++;g++}g=h-1;for(v=d-1;v>=0;v--){while(l[g]>v)s[v]-=c[g]*s[l[g]],g--;s[v]/=c[g],g--}return s},numeric.cgrid=function(t,n){typeof t=="number"&&(t=[t,t]);var r=numeric.rep(t,-1),i,s,o;if(typeof n!="function")switch(n){case"L":n=function(e,n){return e>=t[0]/2||n<t[1]/2};break;default:n=function(e,t){return!0}}o=0;for(i=1;i<t[0]-1;i++)for(s=1;s<t[1]-1;s++)n(i,s)&&(r[i][s]=o,o++);return r},numeric.cdelsq=function(t){var n=[[-1,0],[0,-1],[0,1],[1,0]],r=numeric.dim(t),i=r[0],s=r[1],o,u,a,f,l,c=[],h=[],p=[];for(o=1;o<i-1;o++)for(u=1;u<s-1;u++){if(t[o][u]<0)continue;for(a=0;a<4;a++){f=o+n[a][0],l=u+n[a][1];if(t[f][l]<0)continue;c.push(t[o][u]),h.push(t[f][l]),p.push(-1)}c.push(t[o][u]),h.push(t[o][u]),p.push(4)}return[c,h,p]},numeric.cdotMV=function(t,n){var r,i=t[0],s=t[1],o=t[2],u,a=i.length,f;f=0;for(u=0;u<a;u++)i[u]>f&&(f=i[u]);f++,r=numeric.rep([f],0);for(u=0;u<a;u++)r[i[u]]+=o[u]*n[s[u]];return r},numeric.Spline=function(t,n,r,i,s){this.x=t,this.yl=n,this.yr=r,this.kl=i,this.kr=s},numeric.Spline.prototype._at=function(t,n){var r=this.x,i=this.yl,s=this.yr,o=this.kl,u=this.kr,t,a,f,l,c=numeric.add,h=numeric.sub,p=numeric.mul;a=h(p(o[n],r[n+1]-r[n]),h(s[n+1],i[n])),f=c(p(u[n+1],r[n]-r[n+1]),h(s[n+1],i[n])),l=(t-r[n])/(r[n+1]-r[n]);var d=l*(1-l);return c(c(c(p(1-l,i[n]),p(l,s[n+1])),p(a,d*(1-l))),p(f,d*l))},numeric.Spline.prototype.at=function(t){if(typeof t=="number"){var n=this.x,r=n.length,i,s,o,u=Math.floor,a,f,l;i=0,s=r-1;while(s-i>1)o=u((i+s)/2),n[o]<=t?i=o:s=o;return this._at(t,i)}var r=t.length,c,h=Array(r);for(c=r-1;c!==-1;--c)h[c]=this.at(t[c]);return h},numeric.Spline.prototype.diff=function(){var t=this.x,n=this.yl,r=this.yr,i=this.kl,s=this.kr,o=n.length,u,a,f,l=i,c=s,h=Array(o),p=Array(o),d=numeric.add,v=numeric.mul,m=numeric.div,g=numeric.sub;for(u=o-1;u!==-1;--u)a=t[u+1]-t[u],f=g(r[u+1],n[u]),h[u]=m(d(v(f,6),v(i[u],-4*a),v(s[u+1],-2*a)),a*a),p[u+1]=m(d(v(f,-6),v(i[u],2*a),v(s[u+1],4*a)),a*a);return new numeric.Spline(t,l,c,h,p)},numeric.Spline.prototype.roots=function(){function t(e){return e*e}function n(e,t,n,r,i){var s=n*2-(t-e),o=-r*2+(t-e),u=(i+1)*.5,a=u*(1-u);return(1-u)*e+u*t+s*a*(1-u)+o*a*u}var r=[],i=this.x,s=this.yl,o=this.yr,u=this.kl,a=this.kr;typeof s[0]=="number"&&(s=[s],o=[o],u=[u],a=[a]);var f=s.length,l=i.length-1,c,h,p,d,v,m,g,y,b,w,r=Array(f),E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F=Math.sqrt;for(c=0;c!==f;++c){g=s[c],y=o[c],b=u[c],w=a[c],E=[];for(h=0;h!==l;h++){h>0&&y[h]*g[h]<0&&E.push(i[h]),A=i[h+1]-i[h],O=i[h],T=g[h],N=y[h+1],S=b[h]/A,x=w[h+1]/A,L=t(S-x+3*(T-N))+12*x*T,C=x+3*T+2*S-3*N,k=3*(x+S+2*(T-N)),L<=0?(_=C/k,_>i[h]&&_<i[h+1]?M=[i[h],_,i[h+1]]:M=[i[h],i[h+1]]):(_=(C-F(L))/k,D=(C+F(L))/k,M=[i[h]],_>i[h]&&_<i[h+1]&&M.push(_),D>i[h]&&D<i[h+1]&&M.push(D),M.push(i[h+1])),H=M[0],_=this._at(H,h);for(p=0;p<M.length-1;p++){B=M[p+1],D=this._at(B,h);if(_===0){E.push(H),H=B,_=D;continue}if(D===0||_*D>0){H=B,_=D;continue}var I=0;for(;;){j=(_*B-D*H)/(_-D);if(j<=H||j>=B)break;P=this._at(j,h);if(P*D>0)B=j,D=P,I===-1&&(_*=.5),I=-1;else{if(!(P*_>0))break;H=j,_=P,I===1&&(D*=.5),I=1}}E.push(j),H=M[p+1],_=this._at(H,h)}D===0&&E.push(B)}r[c]=E}return typeof this.yl[0]=="number"?r[0]:r},numeric.spline=function(t,n,r,i){var s=t.length,o=[],u=[],a=[],f,l=numeric.sub,c=numeric.mul,h=numeric.add;for(f=s-2;f>=0;f--)u[f]=t[f+1]-t[f],a[f]=l(n[f+1],n[f]);if(typeof r=="string"||typeof i=="string")r=i="periodic";var p=[[],[],[]];switch(typeof r){case"undefined":o[0]=c(3/(u[0]*u[0]),a[0]),p[0].push(0,0),p[1].push(0,1),p[2].push(2/u[0],1/u[0]);break;case"string":o[0]=h(c(3/(u[s-2]*u[s-2]),a[s-2]),c(3/(u[0]*u[0]),a[0])),p[0].push(0,0,0),p[1].push(s-2,0,1),p[2].push(1/u[s-2],2/u[s-2]+2/u[0],1/u[0]);break;default:o[0]=r,p[0].push(0),p[1].push(0),p[2].push(1)}for(f=1;f<s-1;f++)o[f]=h(c(3/(u[f-1]*u[f-1]),a[f-1]),c(3/(u[f]*u[f]),a[f])),p[0].push(f,f,f),p[1].push(f-1,f,f+1),p[2].push(1/u[f-1],2/u[f-1]+2/u[f],1/u[f]);switch(typeof i){case"undefined":o[s-1]=c(3/(u[s-2]*u[s-2]),a[s-2]),p[0].push(s-1,s-1),p[1].push(s-2,s-1),p[2].push(1/u[s-2],2/u[s-2]);break;case"string":p[1][p[1].length-1]=0;break;default:o[s-1]=i,p[0].push(s-1),p[1].push(s-1),p[2].push(1)}typeof o[0]!="number"?o=numeric.transpose(o):o=[o];var d=Array(o.length);if(typeof r=="string")for(f=d.length-1;f!==-1;--f)d[f]=numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(p)),o[f]),d[f][s-1]=d[f][0];else for(f=d.length-1;f!==-1;--f)d[f]=numeric.cLUsolve(numeric.cLU(p),o[f]);return typeof n[0]=="number"?d=d[0]:d=numeric.transpose(d),new numeric.Spline(t,n,n,d,d)},numeric.fftpow2=function fftpow2(e,t){var n=e.length;if(n===1)return;var r=Math.cos,i=Math.sin,s,o,u=Array(n/2),a=Array(n/2),f=Array(n/2),l=Array(n/2);o=n/2;for(s=n-1;s!==-1;--s)--o,f[o]=e[s],l[o]=t[s],--s,u[o]=e[s],a[o]=t[s];fftpow2(u,a),fftpow2(f,l),o=n/2;var c,h=-6.283185307179586/n,p,d;for(s=n-1;s!==-1;--s)--o,o===-1&&(o=n/2-1),c=h*s,p=r(c),d=i(c),e[s]=u[o]+p*f[o]-d*l[o],t[s]=a[o]+p*l[o]+d*f[o]},numeric._ifftpow2=function _ifftpow2(e,t){var n=e.length;if(n===1)return;var r=Math.cos,i=Math.sin,s,o,u=Array(n/2),a=Array(n/2),f=Array(n/2),l=Array(n/2);o=n/2;for(s=n-1;s!==-1;--s)--o,f[o]=e[s],l[o]=t[s],--s,u[o]=e[s],a[o]=t[s];_ifftpow2(u,a),_ifftpow2(f,l),o=n/2;var c,h=6.283185307179586/n,p,d;for(s=n-1;s!==-1;--s)--o,o===-1&&(o=n/2-1),c=h*s,p=r(c),d=i(c),e[s]=u[o]+p*f[o]-d*l[o],t[s]=a[o]+p*l[o]+d*f[o]},numeric.ifftpow2=function(t,n){numeric._ifftpow2(t,n),numeric.diveq(t,t.length),numeric.diveq(n,n.length)},numeric.convpow2=function(t,n,r,i){numeric.fftpow2(t,n),numeric.fftpow2(r,i);var s,o=t.length,u,a,f,l;for(s=o-1;s!==-1;--s)u=t[s],f=n[s],a=r[s],l=i[s],t[s]=u*a-f*l,n[s]=u*l+f*a;numeric.ifftpow2(t,n)},numeric.T.prototype.fft=function(){var t=this.x,n=this.y,r=t.length,i=Math.log,s=i(2),o=Math.ceil(i(2*r-1)/s),u=Math.pow(2,o),a=numeric.rep([u],0),f=numeric.rep([u],0),l=Math.cos,c=Math.sin,h,p=-3.141592653589793/r,d,v=numeric.rep([u],0),m=numeric.rep([u],0),g=Math.floor(r/2);for(h=0;h<r;h++)v[h]=t[h];if(typeof n!="undefined")for(h=0;h<r;h++)m[h]=n[h];a[0]=1;for(h=1;h<=u/2;h++)d=p*h*h,a[h]=l(d),f[h]=c(d),a[u-h]=l(d),f[u-h]=c(d);var y=new numeric.T(v,m),b=new numeric.T(a,f);return y=y.mul(b),numeric.convpow2(y.x,y.y,numeric.clone(b.x),numeric.neg(b.y)),y=y.mul(b),y.x.length=r,y.y.length=r,y},numeric.T.prototype.ifft=function(){var t=this.x,n=this.y,r=t.length,i=Math.log,s=i(2),o=Math.ceil(i(2*r-1)/s),u=Math.pow(2,o),a=numeric.rep([u],0),f=numeric.rep([u],0),l=Math.cos,c=Math.sin,h,p=3.141592653589793/r,d,v=numeric.rep([u],0),m=numeric.rep([u],0),g=Math.floor(r/2);for(h=0;h<r;h++)v[h]=t[h];if(typeof n!="undefined")for(h=0;h<r;h++)m[h]=n[h];a[0]=1;for(h=1;h<=u/2;h++)d=p*h*h,a[h]=l(d),f[h]=c(d),a[u-h]=l(d),f[u-h]=c(d);var y=new numeric.T(v,m),b=new numeric.T(a,f);return y=y.mul(b),numeric.convpow2(y.x,y.y,numeric.clone(b.x),numeric.neg(b.y)),y=y.mul(b),y.x.length=r,y.y.length=r,y.div(r)},numeric.gradient=function(t,n){var r=n.length,i=t(n);if(isNaN(i))throw new Error("gradient: f(x) is a NaN!");var s=Math.max,o,u=numeric.clone(n),a,f,l=Array(r),c=numeric.div,h=numeric.sub,p,d,s=Math.max,v=.001,m=Math.abs,g=Math.min,y,b,w,E=0,S,x,T;for(o=0;o<r;o++){var N=s(1e-6*i,1e-8);for(;;){++E;if(E>20)throw new Error("Numerical gradient fails");u[o]=n[o]+N,a=t(u),u[o]=n[o]-N,f=t(u),u[o]=n[o];if(isNaN(a)||isNaN(f)){N/=16;continue}l[o]=(a-f)/(2*N),y=n[o]-N,b=n[o],w=n[o]+N,S=(a-i)/N,x=(i-f)/N,T=s(m(l[o]),m(i),m(a),m(f),m(y),m(b),m(w),1e-8),p=g(s(m(S-l[o]),m(x-l[o]),m(S-x))/T,N/T);if(!(p>v))break;N/=16}}return l},numeric.uncmin=function(t,n,r,i,s,o,u){var a=numeric.gradient;typeof u=="undefined"&&(u={}),typeof r=="undefined"&&(r=1e-8),typeof i=="undefined"&&(i=function(e){return a(t,e)}),typeof s=="undefined"&&(s=1e3),n=numeric.clone(n);var f=n.length,l=t(n),c,h;if(isNaN(l))throw new Error("uncmin: f(x0) is a NaN!");var p=Math.max,d=numeric.norm2;r=p(r,numeric.epsilon);var v,m,g,y=u.Hinv||numeric.identity(f),b=numeric.dot,w=numeric.inv,E=numeric.sub,S=numeric.add,x=numeric.tensor,T=numeric.div,N=numeric.mul,C=numeric.all,k=numeric.isFinite,L=numeric.neg,A=0,O,M,_,D,P,H,B,j,F,I,q,R,U="";m=i(n);while(A<s){if(typeof o=="function"&&o(A,n,l,m,y)){U="Callback returned true";break}if(!C(k(m))){U="Gradient has Infinity or NaN";break}v=L(b(y,m));if(!C(k(v))){U="Search direction has Infinity or NaN";break}I=d(v);if(I<r){U="Newton step smaller than tol";break}F=1,h=b(m,v),_=n;while(A<s){if(F*I<r)break;M=N(v,F),_=S(n,M),c=t(_);if(c-l>=.1*F*h||isNaN(c)){F*=.5,++A;continue}break}if(F*I<r){U="Line search step size smaller than tol";break}if(A===s){U="maxit reached during line search";break}g=i(_),D=E(g,m),B=b(D,M),P=b(y,D),y=E(S(y,N((B+b(D,P))/(B*B),x(M,M))),T(S(x(P,M),x(M,P)),B)),n=_,l=c,m=g,++A}return{solution:n,f:l,gradient:m,invHessian:y,iterations:A,message:U}},numeric.Dopri=function(t,n,r,i,s,o,u){this.x=t,this.y=n,this.f=r,this.ymid=i,this.iterations=s,this.events=u,this.message=o},numeric.Dopri.prototype._at=function(t,n){function r(e){return e*e}var i=this,s=i.x,o=i.y,u=i.f,a=i.ymid,f=s.length,l,c,h,p,d,v,t,m=Math.floor,g,y=.5,b=numeric.add,w=numeric.mul,E=numeric.sub,S,x,T;return l=s[n],c=s[n+1],p=o[n],d=o[n+1],g=c-l,h=l+y*g,v=a[n],S=E(u[n],w(p,1/(l-h)+2/(l-c))),x=E(u[n+1],w(d,1/(c-h)+2/(c-l))),T=[r(t-c)*(t-h)/r(l-c)/(l-h),r(t-l)*r(t-c)/r(l-h)/r(c-h),r(t-l)*(t-h)/r(c-l)/(c-h),(t-l)*r(t-c)*(t-h)/r(l-c)/(l-h),(t-c)*r(t-l)*(t-h)/r(l-c)/(c-h)],b(b(b(b(w(p,T[0]),w(v,T[1])),w(d,T[2])),w(S,T[3])),w(x,T[4]))},numeric.Dopri.prototype.at=function(t){var n,r,i,s=Math.floor;if(typeof t!="number"){var o=t.length,u=Array(o);for(n=o-1;n!==-1;--n)u[n]=this.at(t[n]);return u}var a=this.x;n=0,r=a.length-1;while(r-n>1)i=s(.5*(n+r)),a[i]<=t?n=i:r=i;return this._at(t,n)},numeric.dopri=function(t,n,r,i,s,o,u){typeof s=="undefined"&&(s=1e-6),typeof o=="undefined"&&(o=1e3);var a=[t],f=[r],l=[i(t,r)],c,h,p,d,v,m,g=[],y=.2,b=[.075,.225],w=[44/45,-56/15,32/9],E=[19372/6561,-25360/2187,64448/6561,-212/729],S=[9017/3168,-355/33,46732/5247,49/176,-5103/18656],x=[35/384,0,500/1113,125/192,-2187/6784,11/84],T=[.10013431883002395,0,.3918321794184259,-0.02982460176594817,.05893268337240795,-0.04497888809104361,.023904308236133973],N=[.2,.3,.8,8/9,1,1],C=[-71/57600,0,71/16695,-71/1920,17253/339200,-22/525,.025],k=0,L,A,O=(n-t)/10,M=0,_=numeric.add,D=numeric.mul,P,H,B=Math.max,j=Math.min,F=Math.abs,I=numeric.norminf,q=Math.pow,R=numeric.any,U=numeric.lt,z=numeric.and,W=numeric.sub,X,V,$,J=new numeric.Dopri(a,f,l,g,-1,"");typeof u=="function"&&(X=u(t,r));while(t<n&&M<o){++M,t+O>n&&(O=n-t),c=i(t+N[0]*O,_(r,D(y*O,l[k]))),h=i(t+N[1]*O,_(_(r,D(b[0]*O,l[k])),D(b[1]*O,c))),p=i(t+N[2]*O,_(_(_(r,D(w[0]*O,l[k])),D(w[1]*O,c)),D(w[2]*O,h))),d=i(t+N[3]*O,_(_(_(_(r,D(E[0]*O,l[k])),D(E[1]*O,c)),D(E[2]*O,h)),D(E[3]*O,p))),v=i(t+N[4]*O,_(_(_(_(_(r,D(S[0]*O,l[k])),D(S[1]*O,c)),D(S[2]*O,h)),D(S[3]*O,p)),D(S[4]*O,d))),P=_(_(_(_(_(r,D(l[k],O*x[0])),D(h,O*x[2])),D(p,O*x[3])),D(d,O*x[4])),D(v,O*x[5])),m=i(t+O,P),L=_(_(_(_(_(D(l[k],O*C[0]),D(h,O*C[2])),D(p,O*C[3])),D(d,O*C[4])),D(v,O*C[5])),D(m,O*C[6])),typeof L=="number"?H=F(L):H=I(L);if(H>s){O=.2*O*q(s/H,.25);if(t+O===t){J.msg="Step size became too small";break}continue}g[k]=_(_(_(_(_(_(r,D(l[k],O*T[0])),D(h,O*T[2])),D(p,O*T[3])),D(d,O*T[4])),D(v,O*T[5])),D(m,O*T[6])),++k,a[k]=t+O,f[k]=P,l[k]=m;if(typeof u=="function"){var K,Q=t,G=t+.5*O,Y;V=u(G,g[k-1]),$=z(U(X,0),U(0,V)),R($)||(Q=G,G=t+O,X=V,V=u(G,P),$=z(U(X,0),U(0,V)));if(R($)){var Z,et,tt,nt,rt=0,it=1,st=1;for(;;){if(typeof X=="number")Y=(st*V*Q-it*X*G)/(st*V-it*X);else{Y=G;for(A=X.length-1;A!==-1;--A)X[A]<0&&V[A]>0&&(Y=j(Y,(st*V[A]*Q-it*X[A]*G)/(st*V[A]-it*X[A])))}if(Y<=Q||Y>=G)break;K=J._at(Y,k-1),nt=u(Y,K),tt=z(U(X,0),U(0,nt)),R(tt)?(G=Y,V=nt,$=tt,st=1,rt===-1?it*=.5:it=1,rt=-1):(Q=Y,X=nt,it=1,rt===1?st*=.5:st=1,rt=1)}return P=J._at(.5*(t+Y),k-1),J.f[k]=i(Y,K),J.x[k]=Y,J.y[k]=K,J.ymid[k-1]=P,J.events=$,J.iterations=M,J}}t+=O,r=P,X=V,O=j(.8*O*q(s/H,.25),4*O)}return J.iterations=M,J},numeric.LU=function(e,t){t=t||!1;var n=Math.abs,r,i,s,o,u,a,f,l,c,h=e.length,p=h-1,d=new Array(h);t||(e=numeric.clone(e));for(s=0;s<h;++s){f=s,a=e[s],c=n(a[s]);for(i=s+1;i<h;++i)o=n(e[i][s]),c<o&&(c=o,f=i);d[s]=f,f!=s&&(e[s]=e[f],e[f]=a,a=e[s]),u=a[s];for(r=s+1;r<h;++r)e[r][s]/=u;for(r=s+1;r<h;++r){l=e[r];for(i=s+1;i<p;++i)l[i]-=l[s]*a[i],++i,l[i]-=l[s]*a[i];i===p&&(l[i]-=l[s]*a[i])}}return{LU:e,P:d}},numeric.LUsolve=function(t,n){var r,i,s=t.LU,o=s.length,u=numeric.clone(n),a=t.P,f,l,c,h;for(r=o-1;r!==-1;--r)u[r]=n[r];for(r=0;r<o;++r){f=a[r],a[r]!==r&&(h=u[r],u[r]=u[f],u[f]=h),l=s[r];for(i=0;i<r;++i)u[r]-=u[i]*l[i]}for(r=o-1;r>=0;--r){l=s[r];for(i=r+1;i<o;++i)u[r]-=u[i]*l[i];u[r]/=l[r]}return u},numeric.solve=function(t,n,r){return numeric.LUsolve(numeric.LU(t,r),n)},numeric.echelonize=function(t){var n=numeric.dim(t),r=n[0],i=n[1],s=numeric.identity(r),o=Array(r),u,a,f,l,c,h,p,d,v=Math.abs,m=numeric.diveq;t=numeric.clone(t);for(u=0;u<r;++u){f=0,c=t[u],h=s[u];for(a=1;a<i;++a)v(c[f])<v(c[a])&&(f=a);o[u]=f,m(h,c[f]),m(c,c[f]);for(a=0;a<r;++a)if(a!==u){p=t[a],d=p[f];for(l=i-1;l!==-1;--l)p[l]-=c[l]*d;p=s[a];for(l=r-1;l!==-1;--l)p[l]-=h[l]*d}}return{I:s,A:t,P:o}},numeric.__solveLP=function(t,n,r,i,s,o,u){var a=numeric.sum,f=numeric.log,l=numeric.mul,c=numeric.sub,h=numeric.dot,p=numeric.div,d=numeric.add,v=t.length,m=r.length,g,y=!1,b,w=0,E=1,S,x,T=numeric.transpose(n),N=numeric.svd,C=numeric.transpose,k=numeric.leq,L=Math.sqrt,A=Math.abs,O=numeric.muleq,M=numeric.norminf,_=numeric.any,D=Math.min,P=numeric.all,H=numeric.gt,B=Array(v),j=Array(m),F=numeric.rep([m],1),I,q=numeric.solve,R=c(r,h(n,o)),U,z=h(t,t),W;for(U=w;U<s;++U){var X,V,$;for(X=m-1;X!==-1;--X)j[X]=p(n[X],R[X]);var J=C(j);for(X=v-1;X!==-1;--X)B[X]=a(J[X]);E=.25*A(z/h(t,B));var K=100*L(z/h(B,B));if(!isFinite(E)||E>K)E=K;W=d(t,l(E,B)),I=h(J,j);for(X=v-1;X!==-1;--X)I[X][X]+=1;$=q(I,p(W,E),!0);var Q=p(R,h(n,$)),G=1;for(X=m-1;X!==-1;--X)Q[X]<0&&(G=D(G,-0.999*Q[X]));g=c(o,l($,G)),R=c(r,h(n,g));if(!P(H(R,0)))return{solution:o,message:"",iterations:U};o=g;if(E<i)return{solution:g,message:"",iterations:U};if(u){var Y=h(t,W),Z=h(n,W);y=!0;for(X=m-1;X!==-1;--X)if(Y*Z[X]<0){y=!1;break}}else o[v-1]>=0?y=!1:y=!0;if(y)return{solution:g,message:"Unbounded",iterations:U}}return{solution:o,message:"maximum iteration count exceeded",iterations:U}},numeric._solveLP=function(t,n,r,i,s){var o=t.length,u=r.length,a,f=numeric.sum,l=numeric.log,c=numeric.mul,h=numeric.sub,p=numeric.dot,d=numeric.div,v=numeric.add,m=numeric.rep([o],0).concat([1]),g=numeric.rep([u,1],-1),y=numeric.blockMatrix([[n,g]]),b=r,a=numeric.rep([o],0).concat(Math.max(0,numeric.sup(numeric.neg(r)))+1),w=numeric.__solveLP(m,y,b,i,s,a,!1),E=numeric.clone(w.solution);E.length=o;var S=numeric.inf(h(r,p(n,E)));if(S<0)return{solution:NaN,message:"Infeasible",iterations:w.iterations};var x=numeric.__solveLP(t,n,r,i,s-w.iterations,E,!0);return x.iterations+=w.iterations,x},numeric.solveLP=function(t,n,r,i,s,o,u){typeof u=="undefined"&&(u=1e3),typeof o=="undefined"&&(o=numeric.epsilon);if(typeof i=="undefined")return numeric._solveLP(t,n,r,o,u);var a=i.length,f=i[0].length,l=n.length,c=numeric.echelonize(i),h=numeric.rep([f],0),p=c.P,d=[],v;for(v=p.length-1;v!==-1;--v)h[p[v]]=1;for(v=f-1;v!==-1;--v)h[v]===0&&d.push(v);var m=numeric.getRange,g=numeric.linspace(0,a-1),y=numeric.linspace(0,l-1),b=m(i,g,d),w=m(n,y,p),E=m(n,y,d),S=numeric.dot,x=numeric.sub,T=S(w,c.I),N=x(E,S(T,b)),C=x(r,S(T,s)),k=Array(p.length),L=Array(d.length);for(v=p.length-1;v!==-1;--v)k[v]=t[p[v]];for(v=d.length-1;v!==-1;--v)L[v]=t[d[v]];var A=x(L,S(k,S(c.I,b))),O=numeric._solveLP(A,N,C,o,u),M=O.solution;if(M!==M)return O;var _=S(c.I,x(s,S(b,M))),D=Array(t.length);for(v=p.length-1;v!==-1;--v)D[p[v]]=_[v];for(v=d.length-1;v!==-1;--v)D[d[v]]=M[v];return{solution:D,message:O.message,iterations:O.iterations}},numeric.MPStoLP=function(t){function y(e){throw new Error("MPStoLP: "+e+"\nLine "+s+": "+t[s]+"\nCurrent state: "+r[n]+"\n")}t instanceof String&&t.split("\n");var n=0,r=["Initial state","NAME","ROWS","COLUMNS","RHS","BOUNDS","ENDATA"],i=t.length,s,o,u,a=0,f={},l=[],c=0,h={},p=0,d,v=[],m=[],g=[];for(s=0;s<i;++s){u=t[s];var b=u.match(/\S*/g),w=[];for(o=0;o<b.length;++o)b[o]!==""&&w.push(b[o]);if(w.length===0)continue;for(o=0;o<r.length;++o)if(u.substr(0,r[o].length)===r[o])break;if(o<r.length){n=o,o===1&&(d=w[1]);if(o===6)return{name:d,c:v,A:numeric.transpose(m),b:g,rows:f,vars:h};continue}switch(n){case 0:case 1:y("Unexpected line");case 2:switch(w[0]){case"N":a===0?a=w[1]:y("Two or more N rows");break;case"L":f[w[1]]=c,l[c]=1,g[c]=0,++c;break;case"G":f[w[1]]=c,l[c]=-1,g[c]=0,++c;break;case"E":f[w[1]]=c,l[c]=0,g[c]=0,++c;break;default:y("Parse error "+numeric.prettyPrint(w))}break;case 3:h.hasOwnProperty(w[0])||(h[w[0]]=p,v[p]=0,m[p]=numeric.rep([c],0),++p);var E=h[w[0]];for(o=1;o<w.length;o+=2){if(w[o]===a){v[E]=parseFloat(w[o+1]);continue}var S=f[w[o]];m[E][S]=(l[S]<0?-1:1)*parseFloat(w[o+1])}break;case 4:for(o=1;o<w.length;o+=2)g[f[w[o]]]=(l[f[w[o]]]<0?-1:1)*parseFloat(w[o+1]);break;case 5:break;case 6:y("Internal error")}}y("Reached end of file without ENDATA")},numeric.seedrandom={pow:Math.pow,random:Math.random},function(e,t,n,r,i,s,o){function u(e){var t,r,i=this,s=e.length,o=0,u=i.i=i.j=i.m=0;i.S=[],i.c=[],s||(e=[s++]);while(o<n)i.S[o]=o++;for(o=0;o<n;o++)t=i.S[o],u=l(u+t+e[o%s]),r=i.S[u],i.S[o]=r,i.S[u]=t;i.g=function(t){var r=i.S,s=l(i.i+1),o=r[s],u=l(i.j+o),a=r[u];r[s]=a,r[u]=o;var f=r[l(o+a)];while(--t)s=l(s+1),o=r[s],u=l(u+o),a=r[u],r[s]=a,r[u]=o,f=f*n+r[l(o+a)];return i.i=s,i.j=u,f},i.g(n)}function a(e,t,n,r,i){n=[],i=typeof e;if(t&&i=="object")for(r in e)if(r.indexOf("S")<5)try{n.push(a(e[r],t-1))}catch(s){}return n.length?n:e+(i!="string"?"\0":"")}function f(e,t,n,r){e+="",n=0;for(r=0;r<e.length;r++)t[l(r)]=l((n^=t[l(r)]*19)+e.charCodeAt(r));e="";for(r in t)e+=String.fromCharCode(t[r]);return e}function l(e){return e&n-1}t.seedrandom=function(c,h){var p=[],d;return c=f(a(h?[c,e]:arguments.length?c:[(new Date).getTime(),e,window],3),p),d=new u(p),f(d.S,e),t.random=function(){var t=d.g(r),u=o,a=0;while(t<i)t=(t+a)*n,u*=n,a=d.g(1);while(t>=s)t/=2,u/=2,a>>>=1;return(t+a)/u},c},o=t.pow(n,r),i=t.pow(2,i),s=i*2,f(t.random(),e)}([],numeric.seedrandom,256,6,52),function(e){function t(e){if(typeof e!="object")return e;var n=[],r,i=e.length;for(r=0;r<i;r++)n[r+1]=t(e[r]);return n}function n(e){if(typeof e!="object")return e;var t=[],r,i=e.length;for(r=1;r<i;r++)t[r-1]=n(e[r]);return t}function r(e,t,n){var r,i,s,o,u;for(s=1;s<=n;s+=1){e[s][s]=1/e[s][s],u=-e[s][s];for(r=1;r<s;r+=1)e[r][s]=u*e[r][s];o=s+1;if(n<o)break;for(i=o;i<=n;i+=1){u=e[s][i],e[s][i]=0;for(r=1;r<=s;r+=1)e[r][i]=e[r][i]+u*e[r][s]}}}function i(e,t,n,r){var i,s,o,u;for(s=1;s<=n;s+=1){u=0;for(i=1;i<s;i+=1)u+=e[i][s]*r[i];r[s]=(r[s]-u)/e[s][s]}for(o=1;o<=n;o+=1){s=n+1-o,r[s]=r[s]/e[s][s],u=-r[s];for(i=1;i<s;i+=1)r[i]=r[i]+u*e[i][s]}}function s(e,t,n,r){var i,s,o,u,a,f;for(s=1;s<=n;s+=1){r[1]=s,f=0,o=s-1;if(o<1){f=e[s][s]-f;if(f<=0)break;e[s][s]=Math.sqrt(f)}else{for(u=1;u<=o;u+=1){a=e[u][s];for(i=1;i<u;i+=1)a-=e[i][s]*e[i][u];a/=e[u][u],e[u][s]=a,f+=a*a}f=e[s][s]-f;if(f<=0)break;e[s][s]=Math.sqrt(f)}r[1]=0}}function o(e,t,n,o,u,a,f,l,c,h,p,d,v,m,g,y){function V(){m[1]=m[1]+1,E=L;for(b=1;b<=h;b+=1){E+=1,P=-l[b];for(w=1;w<=o;w+=1)P+=f[w][b]*u[w];Math.abs(P)<U&&(P=0);if(b>p)g[E]=P;else{g[E]=-Math.abs(P);if(P>0){for(w=1;w<=o;w+=1)f[w][b]=-f[w][b];l[b]=-l[b]}}}for(b=1;b<=v;b+=1)g[L+d[b]]=0;O=0,D=0;for(b=1;b<=h;b+=1)g[L+b]<D*g[_+b]&&(O=b,D=g[L+b]/g[_+b]);return O===0?999:0}function $(){for(b=1;b<=o;b+=1){P=0;for(w=1;w<=o;w+=1)P+=e[w][b]*f[w][O];g[b]=P}S=N;for(b=1;b<=o;b+=1)g[S+b]=0;for(w=v+1;w<=o;w+=1)for(b=1;b<=o;b+=1)g[S+b]=g[S+b]+e[b][w]*g[w];q=!0;for(b=v;b>=1;b-=1){P=g[b],E=k+b*(b+3)/2,S=E-b;for(w=b+1;w<=v;w+=1)P-=g[E]*g[C+w],E+=w;P/=g[S],g[C+b]=P;if(d[b]<p)break;if(P<0)break;q=!1,T=b}if(!q){H=g[A+T]/g[C+T];for(b=1;b<=v;b+=1){if(d[b]<p)break;if(g[C+b]<0)break;D=g[A+b]/g[C+b],D<
H&&(H=D,T=b)}}P=0;for(b=N+1;b<=N+o;b+=1)P+=g[b]*g[b];if(Math.abs(P)<=U){if(q)return y[1]=1,999;for(b=1;b<=v;b+=1)g[A+b]=g[A+b]-H*g[C+b];return g[A+v+1]=g[A+v+1]+H,700}P=0;for(b=1;b<=o;b+=1)P+=g[N+b]*f[b][O];B=-g[L+O]/P,R=!0,q||H<B&&(B=H,R=!1);for(b=1;b<=o;b+=1)u[b]=u[b]+B*g[N+b],Math.abs(u[b])<U&&(u[b]=0);a[1]=a[1]+B*P*(B/2+g[A+v+1]);for(b=1;b<=v;b+=1)g[A+b]=g[A+b]-B*g[C+b];g[A+v+1]=g[A+v+1]+B;if(!R){P=-l[O];for(w=1;w<=o;w+=1)P+=u[w]*f[w][O];if(O>p)g[L+O]=P;else{g[L+O]=-Math.abs(P);if(P>0){for(w=1;w<=o;w+=1)f[w][O]=-f[w][O];l[O]=-l[O]}}return 700}v+=1,d[v]=O,E=k+(v-1)*v/2+1;for(b=1;b<=v-1;b+=1)g[E]=g[b],E+=1;if(v===o)g[E]=g[o];else{for(b=o;b>=v+1;b-=1){if(g[b]===0)break;j=Math.max(Math.abs(g[b-1]),Math.abs(g[b])),F=Math.min(Math.abs(g[b-1]),Math.abs(g[b])),g[b-1]>=0?D=Math.abs(j*Math.sqrt(1+F*F/(j*j))):D=-Math.abs(j*Math.sqrt(1+F*F/(j*j))),j=g[b-1]/D,F=g[b]/D;if(j===1)break;if(j===0){g[b-1]=F*D;for(w=1;w<=o;w+=1)D=e[w][b-1],e[w][b-1]=e[w][b],e[w][b]=D}else{g[b-1]=D,I=F/(1+j);for(w=1;w<=o;w+=1)D=j*e[w][b-1]+F*e[w][b],e[w][b]=I*(e[w][b-1]+D)-e[w][b],e[w][b-1]=D}}g[E]=g[v]}return 0}function J(){E=k+T*(T+1)/2+1,S=E+T;if(g[S]===0)return 798;j=Math.max(Math.abs(g[S-1]),Math.abs(g[S])),F=Math.min(Math.abs(g[S-1]),Math.abs(g[S])),g[S-1]>=0?D=Math.abs(j*Math.sqrt(1+F*F/(j*j))):D=-Math.abs(j*Math.sqrt(1+F*F/(j*j))),j=g[S-1]/D,F=g[S]/D;if(j===1)return 798;if(j===0){for(b=T+1;b<=v;b+=1)D=g[S-1],g[S-1]=g[S],g[S]=D,S+=b;for(b=1;b<=o;b+=1)D=e[b][T],e[b][T]=e[b][T+1],e[b][T+1]=D}else{I=F/(1+j);for(b=T+1;b<=v;b+=1)D=j*g[S-1]+F*g[S],g[S]=I*(g[S-1]+D)-g[S],g[S-1]=D,S+=b;for(b=1;b<=o;b+=1)D=j*e[b][T]+F*e[b][T+1],e[b][T+1]=I*(e[b][T]+D)-e[b][T+1],e[b][T]=D}return 0}function K(){S=E-T;for(b=1;b<=T;b+=1)g[S]=g[E],E+=1,S+=1;return g[A+T]=g[A+T+1],d[T]=d[T+1],T+=1,T<v?797:0}function Q(){return g[A+v]=g[A+v+1],g[A+v+1]=0,d[v]=0,v-=1,m[2]=m[2]+1,0}var b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X;M=Math.min(o,h),E=2*o+M*(M+5)/2+2*h+1,U=1e-60;do U+=U,z=1+.1*U,W=1+.2*U;while(z<=1||W<=1);for(b=1;b<=o;b+=1)g[b]=t[b];for(b=o+1;b<=E;b+=1)g[b]=0;for(b=1;b<=h;b+=1)d[b]=0;x=[];if(y[1]===0){s(e,n,o,x);if(x[1]!==0){y[1]=2;return}i(e,n,o,t),r(e,n,o)}else{for(w=1;w<=o;w+=1){u[w]=0;for(b=1;b<=w;b+=1)u[w]=u[w]+e[b][w]*t[b]}for(w=1;w<=o;w+=1){t[w]=0;for(b=w;b<=o;b+=1)t[w]=t[w]+e[w][b]*u[b]}}a[1]=0;for(w=1;w<=o;w+=1){u[w]=t[w],a[1]=a[1]+g[w]*u[w],g[w]=0;for(b=w+1;b<=o;b+=1)e[b][w]=0}a[1]=-a[1]/2,y[1]=0,N=o,C=N+o,A=C+M,k=A+M+1,L=k+M*(M+1)/2,_=L+h;for(b=1;b<=h;b+=1){P=0;for(w=1;w<=o;w+=1)P+=f[w][b]*f[w][b];g[_+b]=Math.sqrt(P)}v=0,m[1]=0,m[2]=0,X=0;for(;;){X=V();if(X===999)return;for(;;){X=$();if(X===0)break;if(X===999)return;if(X===700)if(T===v)Q();else{for(;;){J(),X=K();if(X!==797)break}Q()}}}}function u(e,r,i,s,u,a){e=t(e),r=t(r),i=t(i);var f,l,c,h,p,d=[],v=[],m=[],g=[],y=[],b;u=u||0,a=a?t(a):[undefined,0],s=s?t(s):[],l=e.length-1,c=i[1].length-1;if(!s)for(f=1;f<=c;f+=1)s[f]=0;for(f=1;f<=c;f+=1)v[f]=0;h=0,p=Math.min(l,c);for(f=1;f<=l;f+=1)m[f]=0;d[1]=0;for(f=1;f<=2*l+p*(p+5)/2+2*c+1;f+=1)g[f]=0;for(f=1;f<=2;f+=1)y[f]=0;return o(e,r,l,l,m,d,i,s,l,c,u,v,h,y,g,a),b="",a[1]===1&&(b="constraints are inconsistent, no solution!"),a[1]===2&&(b="matrix D in quadratic function is not positive definite!"),{solution:n(m),value:n(d),unconstrained_solution:n(r),iterations:n(y),iact:n(v),message:b}}e.solveQP=u}(numeric),numeric.svd=function(t){function g(e,t){return e=Math.abs(e),t=Math.abs(t),e>t?e*Math.sqrt(1+t*t/e/e):t==0?e:t*Math.sqrt(1+e*e/t/t)}var n,r=numeric.epsilon,i=1e-64/r,s=50,o=0,u=0,a=0,f=0,l=0,c=numeric.clone(t),h=c.length,p=c[0].length;if(h<p)throw"Need more rows than columns";var d=new Array(p),v=new Array(p);for(u=0;u<p;u++)d[u]=v[u]=0;var m=numeric.rep([p,p],0),y=0,b=0,w=0,E=0,S=0,x=0,T=0;for(u=0;u<p;u++){d[u]=b,T=0,l=u+1;for(a=u;a<h;a++)T+=c[a][u]*c[a][u];if(T<=i)b=0;else{y=c[u][u],b=Math.sqrt(T),y>=0&&(b=-b),w=y*b-T,c[u][u]=y-b;for(a=l;a<p;a++){T=0;for(f=u;f<h;f++)T+=c[f][u]*c[f][a];y=T/w;for(f=u;f<h;f++)c[f][a]+=y*c[f][u]}}v[u]=b,T=0;for(a=l;a<p;a++)T+=c[u][a]*c[u][a];if(T<=i)b=0;else{y=c[u][u+1],b=Math.sqrt(T),y>=0&&(b=-b),w=y*b-T,c[u][u+1]=y-b;for(a=l;a<p;a++)d[a]=c[u][a]/w;for(a=l;a<h;a++){T=0;for(f=l;f<p;f++)T+=c[a][f]*c[u][f];for(f=l;f<p;f++)c[a][f]+=T*d[f]}}S=Math.abs(v[u])+Math.abs(d[u]),S>E&&(E=S)}for(u=p-1;u!=-1;u+=-1){if(b!=0){w=b*c[u][u+1];for(a=l;a<p;a++)m[a][u]=c[u][a]/w;for(a=l;a<p;a++){T=0;for(f=l;f<p;f++)T+=c[u][f]*m[f][a];for(f=l;f<p;f++)m[f][a]+=T*m[f][u]}}for(a=l;a<p;a++)m[u][a]=0,m[a][u]=0;m[u][u]=1,b=d[u],l=u}for(u=p-1;u!=-1;u+=-1){l=u+1,b=v[u];for(a=l;a<p;a++)c[u][a]=0;if(b!=0){w=c[u][u]*b;for(a=l;a<p;a++){T=0;for(f=l;f<h;f++)T+=c[f][u]*c[f][a];y=T/w;for(f=u;f<h;f++)c[f][a]+=y*c[f][u]}for(a=u;a<h;a++)c[a][u]=c[a][u]/b}else for(a=u;a<h;a++)c[a][u]=0;c[u][u]+=1}r*=E;for(f=p-1;f!=-1;f+=-1)for(var N=0;N<s;N++){var C=!1;for(l=f;l!=-1;l+=-1){if(Math.abs(d[l])<=r){C=!0;break}if(Math.abs(v[l-1])<=r)break}if(!C){o=0,T=1;var k=l-1;for(u=l;u<f+1;u++){y=T*d[u],d[u]=o*d[u];if(Math.abs(y)<=r)break;b=v[u],w=g(y,b),v[u]=w,o=b/w,T=-y/w;for(a=0;a<h;a++)S=c[a][k],x=c[a][u],c[a][k]=S*o+x*T,c[a][u]=-S*T+x*o}}x=v[f];if(l==f){if(x<0){v[f]=-x;for(a=0;a<p;a++)m[a][f]=-m[a][f]}break}if(N>=s-1)throw"Error: no convergence.";E=v[l],S=v[f-1],b=d[f-1],w=d[f],y=((S-x)*(S+x)+(b-w)*(b+w))/(2*w*S),b=g(y,1),y<0?y=((E-x)*(E+x)+w*(S/(y-b)-w))/E:y=((E-x)*(E+x)+w*(S/(y+b)-w))/E,o=1,T=1;for(u=l+1;u<f+1;u++){b=d[u],S=v[u],w=T*b,b=o*b,x=g(y,w),d[u-1]=x,o=y/x,T=w/x,y=E*o+b*T,b=-E*T+b*o,w=S*T,S*=o;for(a=0;a<p;a++)E=m[a][u-1],x=m[a][u],m[a][u-1]=E*o+x*T,m[a][u]=-E*T+x*o;x=g(y,w),v[u-1]=x,o=y/x,T=w/x,y=o*b+T*S,E=-T*b+o*S;for(a=0;a<h;a++)S=c[a][u-1],x=c[a][u],c[a][u-1]=S*o+x*T,c[a][u]=-S*T+x*o}d[l]=0,d[f]=y,v[f]=E}for(u=0;u<v.length;u++)v[u]<r&&(v[u]=0);for(u=0;u<p;u++)for(a=u-1;a>=0;a--)if(v[a]<v[u]){o=v[a],v[a]=v[u],v[u]=o;for(f=0;f<c.length;f++)n=c[f][u],c[f][u]=c[f][a],c[f][a]=n;for(f=0;f<m.length;f++)n=m[f][u],m[f][u]=m[f][a],m[f][a]=n;u=a}return{U:c,S:v,V:m}};;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Similar to ES6's rest param (http://ariya.ofilabs.com/2013/03/es6-and-rest-parameter.html)
  // This accumulates the arguments passed into an array, after a given index.
  var restArgs = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0);
      var rest = Array(length);
      for (var index = 0; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    var iterator = function(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArgs(function(obj, method, args) {
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArgs(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = restArgs(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArgs(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArgs(function(obj, keys) {
    if (keys.length < 1) throw new Error('bindAll must be passed function names');
    return _.each(keys, function(key) {
      obj[key] = _.bind(obj[key], obj);
    });
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArgs(function(func, wait, args) {
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArgs = restArgs;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
      length = keys.length,
      results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = restArgs(function(args) {
        args.unshift(this._wrapped);
        return result(this, func.apply(_, args));
      });
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));
;// Provides a simple 3D vector class. Vector operations can be done using member
// functions, which return new vectors, or static functions, which reuse
// existing vectors to avoid generating garbage.
function Vector(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

// ### Instance Methods
// The methods `add()`, `subtract()`, `multiply()`, and `divide()` can all
// take either a vector or a number as an argument.
Vector.prototype = {
  dot: function(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  },
  length: function() {
    return Math.sqrt(this.dot(this));
  }
  // ,
  // negative: function() {
  //   return new Vector(-this.x, -this.y, -this.z);
  // },
  // add: function(v) {
  //   if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
  //   else return new Vector(this.x + v, this.y + v, this.z + v);
  // },
  // subtract: function(v) {
  //   if (v instanceof Vector) return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
  //   else return new Vector(this.x - v, this.y - v, this.z - v);
  // },
  // multiply: function(v) {
  //   if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);
  //   else return new Vector(this.x * v, this.y * v, this.z * v);
  // },
  // divide: function(v) {
  //   if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y, this.z / v.z);
  //   else return new Vector(this.x / v, this.y / v, this.z / v);
  // },
  // equals: function(v) {
  //   return this.x == v.x && this.y == v.y && this.z == v.z;
  // },
  // cross: function(v) {
  //   return new Vector(
  //     this.y * v.z - this.z * v.y,
  //     this.z * v.x - this.x * v.z,
  //     this.x * v.y - this.y * v.x
  //   );
  // },
  // unit: function() {
  //   return this.divide(this.length());
  // },
  // min: function() {
  //   return Math.min(Math.min(this.x, this.y), this.z);
  // },
  // max: function() {
  //   return Math.max(Math.max(this.x, this.y), this.z);
  // },
  // toAngles: function() {
  //   return {
  //     theta: Math.atan2(this.z, this.x),
  //     phi: Math.asin(this.y / this.length())
  //   };
  // },
  // angleTo: function(a) {
  //   return Math.acos(this.dot(a) / (this.length() * a.length()));
  // },
  // toArray: function(n) {
  //   return [this.x, this.y, this.z].slice(0, n || 3);
  // },
  // clone: function() {
  //   return new Vector(this.x, this.y, this.z);
  // },
  // init: function(x, y, z) {
  //   this.x = x; this.y = y; this.z = z;
  //   return this;
  // }
};

// ### Static Methods
// `Vector.randomDirection()` returns a vector with a length of 1 and a
// statistically uniform direction. `Vector.lerp()` performs linear
// interpolation between two vectors.
// Vector.negative = function(a, b) {
//   b.x = -a.x; b.y = -a.y; b.z = -a.z;
//   return b;
// };
// Vector.add = function(a, b, c) {
//   if (b instanceof Vector) { c.x = a.x + b.x; c.y = a.y + b.y; c.z = a.z + b.z; }
//   else { c.x = a.x + b; c.y = a.y + b; c.z = a.z + b; }
//   return c;
// };
// Vector.subtract = function(a, b, c) {
//   if (b instanceof Vector) { c.x = a.x - b.x; c.y = a.y - b.y; c.z = a.z - b.z; }
//   else { c.x = a.x - b; c.y = a.y - b; c.z = a.z - b; }
//   return c;
// };
// Vector.multiply = function(a, b, c) {
//   if (b instanceof Vector) { c.x = a.x * b.x; c.y = a.y * b.y; c.z = a.z * b.z; }
//   else { c.x = a.x * b; c.y = a.y * b; c.z = a.z * b; }
//   return c;
// };
// Vector.divide = function(a, b, c) {
//   if (b instanceof Vector) { c.x = a.x / b.x; c.y = a.y / b.y; c.z = a.z / b.z; }
//   else { c.x = a.x / b; c.y = a.y / b; c.z = a.z / b; }
//   return c;
// };
// Vector.cross = function(a, b, c) {
//   c.x = a.y * b.z - a.z * b.y;
//   c.y = a.z * b.x - a.x * b.z;
//   c.z = a.x * b.y - a.y * b.x;
//   return c;
// };
// Vector.unit = function(a, b) {
//   var length = a.length();
//   b.x = a.x / length;
//   b.y = a.y / length;
//   b.z = a.z / length;
//   return b;
// };
// Vector.fromAngles = function(theta, phi) {
//   return new Vector(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
// };
// Vector.randomDirection = function() {
//   return Vector.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
// };
// Vector.min = function(a, b) {
//   return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
// };
// Vector.max = function(a, b) {
//   return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
// };
// Vector.lerp = function(a, b, fraction) {
//   return b.subtract(a).multiply(fraction).add(a);
// };
// Vector.fromArray = function(a) {
//   return new Vector(a[0], a[1], a[2]);
// };
// Vector.angleBetween = function(a, b) {
//   return a.angleTo(b);
// };
;var stopwatch = (function() {
    "use strict";
    //
    function stopwatch() {
        this.start_time = 0;
        this.stop_time = 0;
        this.run_time = 0;
        this.running = false;
    }

    stopwatch.prototype.start = function() {
        this.start_time = new Date().getTime();
        this.running = true;
    }

    stopwatch.prototype.stop = function() {
        this.stop_time = new Date().getTime();
        this.run_time = (this.stop_time - this.start_time);
        this.running = false;
    }

    stopwatch.prototype.get_runtime = function() {
        return this.run_time;
    }

    stopwatch.prototype.reset = function() {
        this.run_time = 0;
    }

    return stopwatch;
})();

var ring_buffer = (function() {
    "use strict";
    
    function ring_buffer(size) {
        this.arr = new Int32Array(size);
        this.begin = 0;
        this.end = -1;
        this.num_el = 0;
        this.arr_size = size;
    }

    ring_buffer.prototype.push_back = function(elem) {
        if (this.num_el<this.arr_size) {
            this.end++;
            this.arr[this.end] = elem;
            this.num_el++;
        } else {
            this.end = (this.end+1)%this.arr_size;
            this.begin = (this.begin+1)%this.arr_size;
            this.arr[this.end] = elem;
        }
    }

    ring_buffer.prototype.get = function(i) {
        return this.arr[(this.begin+i)%this.arr_size];
    }

    ring_buffer.prototype.size = function() {
        return this.num_el;
    }

    return ring_buffer;

})();

var profiler = (function() {
    "use strict";
    //
    var count_frames = 0;
    var ringbuff = new ring_buffer(20);
    function profiler() {
        //this.fps = 0.0; // yeah float
        this.timers = [];
        //this.names = [];
        this.frame_timer = new stopwatch();
    }

    profiler.prototype.add = function(subj) {
        this.timers.push([subj, new stopwatch()]);
    }

    profiler.prototype.new_frame = function() {
        ++count_frames;
        var i = 0;
        var n = this.timers.length | 0;
        for(i = 0; i < n; ++i) {
            var sw = this.timers[i][1];
            sw.reset();
        }

        if(count_frames >= 1) {
            this.frame_timer.stop();
            ringbuff.push_back(this.frame_timer.get_runtime());
            var size = ringbuff.size();
            var sum = 0;
            for(i = 0; i < size; ++i) {
                sum += ringbuff.get(i);
            }
            //this.fps = size / sum * 1000;
            this.frame_timer.start();
        }
    }

    profiler.prototype.find_task = function(subj) {
        var n = this.timers.length | 0;
        var i = 0;
        for(i = 0; i < n; ++i) {
            var pair = this.timers[i];
            if(pair[0] === subj) {
                return pair;
            }
        }
        return null;
    }

    profiler.prototype.start = function(subj) {
        var task = this.find_task(subj);
        task[1].start();
    }

    profiler.prototype.stop = function(subj) {
        var task = this.find_task(subj);
        task[1].stop();
    }

    profiler.prototype.log = function(single) {
        var n = this.timers.length | 0;
        var i = 0;
        var str = ""//<strong>FPS: " + this.fps.toFixed(2) + "</strong>";
        if(!single){
            for(i = 0; i < n; ++i) {
                var pair = this.timers[i];
                str +=  pair[0] + ": " + pair[1].get_runtime() + "ms" + "<br/>";
            }
            return str;
        }
        else{
            return this.timers[0][1].get_runtime();
        }
    }

    return profiler;
})();;// This is a port of the UntidyPriorityQueue/PseudoPriorityQueue as written by Jerome Piovano.
// http://www-sop.inria.fr/members/Jerome.Piovano/LevelSet/classlevelset_1_1PriorityQueue.html

function UntidyPriorityQueue(_size, _inc_max) {
	this.m_tab = new Array(_size);
	for (var i=0; i < _size; i++) {
		this.m_tab[i] = [];
	}
	this.m_size = _size;
	this.m_nb_elem = 0;
	this.m_t0 = 0;
	this.m_i0 = 0;
	this.m_delta = _inc_max / _size;
	this.m_inc_max = _inc_max;

	this.empty = function() {
		return (this.m_nb_elem == 0);
	}

	this.push = function(e, t) {
		var i = 0;
		if (this.empty()) {
			this.m_t0 = t;
			this.m_i0 = 0;
		}
		else {

			// test to prevent errors
			if (t - this.m_t0 > this.m_inc_max) {
				console.log("Error: Increment="+(t - this.m_t0)+" >> Inc max "+this.m_inc_max);
				console.log("       e="+e+", t="+t+", m_t0="+this.m_t0);
			}

			// compute the indice in the circular array.
			i = Math.floor((t - this.m_t0) * this.m_size / this.m_inc_max);

			// compute the true indice in the regular array.
			if (i >= 0) {
				i = (i >= this.m_size) ? this.m_size - 1 : i;
				i = (i + this.m_i0) % this.m_size;
			}
			else {
				// if t < m_t0, compute new values for m_i0, m_t0, and verify that the end of the circular array is empty of at least |i| bucket.
				while (i++ < 0) {
					this.m_i0 = (this.m_i0 > 0) ? this.m_i0 - 1 : this.m_i0 - 1 + this.m_size;
					this.m_t0 -= this.m_delta;

					if (this.m_tab[this.m_i0].length) {
						console.log("Error : While shifting the begining of the queue, circular array not empty at the end");
						console.log("        e="+e+", t="+t);
						this.m_i0 = (this.m_i0 + 1) % this.m_size;
						this.m_t0 += this.m_delta;
						break;
					}
				}
				i = this.m_i0;
			}
		}

		this.m_nb_elem++;
		this.m_tab[i].push(e);
		return i;
	}

	this.pop = function() {
		if (this.empty()) return;
		
		// shift m_i0 in order to be on a non empty level of quantization
		while (!this.m_tab[this.m_i0].length) {
			this.m_i0 = (this.m_i0 + 1) % this.m_size;
			this.m_t0 += this.m_delta;
		}

		this.m_nb_elem--;
		return this.m_tab[this.m_i0].shift();
	}

	this.top = function() {
		if (this.empty()) return;
		
		// shift m_i0 in order to be on a non empty level of quantization
		while (!this.m_tab[this.m_i0].length) {
			this.m_i0 = (this.m_i0 + 1) % this.m_size;
			this.m_t0 += this.m_delta;
		}

		this.m_nb_elem--;
		return this.m_tab[this.m_i0][0];
	}

	this.increase_priority = function(e, bucket, t_new) {
		if (Math.abs(t_new - this.m_t0) > this.m_inc_max) {
			console.log("Error : Increment="+(t_new - this.m_t0)+" >> Inc max "+this.m_inc_max);
			console.log("        e="+e+", t="+t_new+", m_t0"+this.m_t0);
		}

		// compute the indice in the circular array
		var i = Math.floor((t_new-this.m_t0) * this.m_size / this.m_inc_max);

		// compute the true indice in the regular array.
		if (i >= 0) {
			i = (i >= this.m_size) ? this.m_size - 1 : i;
			i = (i + this.m_i0) % this.m_size;
		}
		else {
			// if t < m_t0, compute new values for m_i0, m_t0, and verify that the end of the circular array is empty of at least |i| bucket.
			while (i++ < 0) {
				this.m_i0 = (this.m_i0 > 0) ? this.m_i0 - 1 : this.m_i0 - 1 + this.m_size;
				this.m_t0 -= this.m_delta;

				if (this.m_tab[this.m_i0].length) {
					console.log("Error : While shifting the begining of the queue, circular array not empty at the end");
					console.log("        e="+e+", t="+t_new);
					this.m_i0 = (this.m_i0 + 1) % this.m_size;
					this.m_t0 += this.m_delta;
					break;
				}
			}
			i = this.m_i0;
		}

		this.m_tab[bucket].splice(this.m_tab[bucket].indexOf(e), 1);
		this.m_tab[i].push(e);

		return i;
	}

	this.clear = function() {
		this.m_nb_elem = 0;
		this.m_t0 = 0;
		this.m_i0 = 0;
		for (var i=0; i<this.m_size; i++) {
			this.m_tab[i].splice(0, this.m_tab[i].length);
		}
	}

	this.size = function() {
		return this.m_nb_elem;
	}
};/*
imageWarp
And some stuff
*/
// function warp_App(id, homographies,images) {
(function(_this){
"use strict";
    _this['imagewarp'] = function(id, homographies,images, callback){
        var imgOpt = function(imgsrc){
            this.warpData = 0;
            this.img = new Image();
            this.img.src = imgsrc;
        };

        var canvas, ctx,canvasWidth,canvasHeight;

        var imageW = 0;
        var imageH = 0;
        //This is the base image
        var baseImage = new imgOpt(images[0]);
        var baseImageMosaic;
        var mosaicImgs = new Array(images.length);

        // This is the warp images, loop and pusch them to the ImageList
        var imagesList = [];
        var overlapList = [0];
        var modoverlapList = [0];
        for (var i=0; i<images.length - 1; i++)
        {
            imagesList.push(new imgOpt(images[i + 1]));
        }

        baseImage.img.onload = function() {
            var scale = findScale(baseImage.img.width, baseImage.img.height);

            //Kan ta bort en av variablerna???
            imageW = canvasWidth = baseImage.img.width * scale |0;  //640;//892;
            imageH = canvasHeight = baseImage.img.height * scale |0;  //480;//642;
            canvasWidth = baseImage.img.width * scale |0;  //640;//892;
            canvasHeight = baseImage.img.height * scale |0;  //480;//642;
                       
            applyWarp(id, imagesList);

            // stopppp()
            callback();
        };

        function applyWarp(id, warpImages) {
            //Create a canvas, to temporary draw the warp
            canvas = createcanvas('canvas', imageW, imageH);
            ctx = canvas.getContext('2d');

            // Calculate the offsets
            var canvasOffset = new canvasOpt(homographies); //Homography

            //Create the final canvas
            var canvas2 = createcanvas(id, imageW, imageH);
            canvas2.width =  canvasOffset.maxW;
            canvas2.height =  canvasOffset.maxH;
            var ctx2 = canvas2.getContext('2d');

            //create histogram for base img
            var targetHistograms = getHisograms(images[0]);


            ////////////////////////
            ////Start the steps////
            ///////////////////////
            for (var i=0; i<warpImages.length; i++)
            {
                //START histogram matching
                var srcHistograms = getHisograms(images[i + 1]);
                var mapTables = new Array(3);
                for(var j = 0; j <mapTables.length ; ++j){

                    var pr_k = srcHistograms[j];
                    var specified_histogram_p_z = targetHistograms[j];

                    var s_k = histogramEqualizationTransform(pr_k);
                    var Gz_q = histogramEqualizationTransform(specified_histogram_p_z);

                    mapTables[j] = step3(s_k, Gz_q);
                }
                var modifiedImageData = ctx.getImageData(0, 0, imageW , imageH );
                // END histogram matching
                
                //Draw the image
                ctx.drawImage(warpImages[i].img, 0, 0, canvasWidth, canvasHeight);

                //Copy the image data into a var
                var imageData = ctx.getImageData(0, 0, imageW , imageH );
                correctImg(mapTables, imageData, modifiedImageData);

                // Reset canvas, optional
                canvas.width = canvasOffset.maxW;//max_img_size[0];
                canvas.height= canvasOffset.maxH;//max_img_size[1];

                // create the warp data, where we will store the warped image
                warpImages[i].warpData = ctx.getImageData(0, 0, canvasOffset.maxW,canvasOffset.maxH);
                var modifiedWarpData = ctx.getImageData(0, 0, canvasOffset.maxW,canvasOffset.maxH);


                // multiply the homographie with the transaltion matrix
                var h_dot = H_times_offset(homographies[i]);

                // Apply the warp
                warp_perspective_color(imageData, warpImages[i].warpData, h_dot);
                warp_perspective_color(modifiedImageData, modifiedWarpData, h_dot);

                // Update the context with newly-modified data
                ctx.putImageData(warpImages[i].warpData, 0, 0);
                // mosaicImgs[1] = canvas.toDataURL();

                var imagecanvas = document.createElement('CANVAS');
                        imagecanvas.width = canvas.width;
                        imagecanvas.height = canvas.height;
                        imagecanvas.getContext('2d').drawImage(ctx.canvas,0,0);
                        mosaicImgs[i+1] = imagecanvas;

                // ctx2.globalAlpha = 0.5;
                // Draw the image data in final canvas
                ctx2.drawImage(ctx.canvas,0,0); // Eventuellt pusha ctx.canvas för senare bruk
                // ctx2.globalAlpha = 1;

                // // OBS Spar denna i eget object
                var test = ctx.getImageData(- canvasOffset.minW , - canvasOffset.minH, imageW,imageH);
                overlapList.push(test);
                // ctx2.putImageData(test, 0, 0);
                // console.log(test);
                ctx.putImageData(modifiedWarpData, 0, 0);
                var test = ctx.getImageData(- canvasOffset.minW , - canvasOffset.minH, imageW,imageH);
                modoverlapList.push(test);
            }

            // Draw the base image at the offset
            ctx2.drawImage( baseImage.img, - canvasOffset.minW , - canvasOffset.minH, imageW, imageH);
            overlapList[0] = ctx2.getImageData(- canvasOffset.minW , - canvasOffset.minH, imageW,imageH);

            canvas.width = canvasOffset.maxW;//max_img_size[0];
            canvas.height= canvasOffset.maxH;//max_img_size[1];

            ctx.drawImage( baseImage.img, - canvasOffset.minW , - canvasOffset.minH, imageW, imageH);
            baseImageMosaic = ctx.getImageData(0, 0, canvasOffset.maxW, canvasOffset.maxH);
            // mosaicImgs[0] = canvas.toDataURL();
            var imagecanvas = document.createElement('CANVAS');
            imagecanvas.width = canvas.width;
            imagecanvas.height = canvas.height;
            imagecanvas.getContext('2d').drawImage(ctx.canvas,0,0);
            mosaicImgs[0] = imagecanvas;

            //hide the first canvas
            // canvas.width = 0;
            // canvas.height = 0;
            //canvas.style = ('visibility', 'hidden');

            
            // ctx2.drawImage(ctx.canvas,0,0);
           
            function H_times_offset(H){
                //create a 3 x 3 matrix
                var tmp_h = [[H[0],H[1],H[2]],[H[3],H[4],H[5]],[H[6],H[7],H[8]]];  
                var trans_offset_mul = [[1,0,canvasOffset.minW],[0,1,canvasOffset.minH],[0,0,1]];
                tmp_h = numeric.dot(tmp_h, trans_offset_mul);
                return( [tmp_h[0][0],tmp_h[0][1],tmp_h[0][2],tmp_h[1][0],tmp_h[1][1],tmp_h[1][2], tmp_h[2][0],tmp_h[2][1], tmp_h[2][2] ] );

            };

        };

        var canvasOpt = function(Hs){
            var points = [[0, 0], [canvasWidth, 0], [0, canvasHeight], [canvasWidth, canvasHeight]];
            var projpointsX = [];
            var projpointsY = [];
            for (var j=0; j<Hs.length; j++)
            {
                for(var i in points)
                {
                  projpointsX.push(perspectiveTransform(points[i], Hs[j])[0]);
                  projpointsY.push(perspectiveTransform(points[i], Hs[j])[1]);        
                }
            }

            projpointsX.push(0);
            projpointsY.push(0);

            this.minW = _.min(projpointsX);
            this.minH = _.min(projpointsY);

            projpointsX.push(canvasWidth);
            projpointsY.push(canvasHeight);

            this.maxW = _.max(projpointsX) - this.minW;
            this.maxH = _.max(projpointsY) - this.minH;
        };


        function perspectiveTransform(pt, H){
            var Hd = [[H[0],H[1],H[2]],[H[3],H[4],H[5]],[H[6],H[7],H[8]]];
            var Hdinv = numeric.inv(Hd);
            var X = [ pt[0], pt[1], 1];
            var Xp = numeric.dot(Hdinv, X);

            return [Xp[0]/Xp[2], Xp[1]/Xp[2]];
        };

        //Bilinear interpolation
        function warp_perspective_color(src, dst, transform){        
            var dst_width=dst.width|0, dst_height=dst.height|0;
            var src_width=src.width|0, src_height=src.height|0;

            var x=0,y=0,off=0,ixs=0,iys=0,xs=0.0,ys=0.0,xs0=0.0,ys0=0.0,ws=0.0,sc=0.0,a=0.0,b=0.0,p0r=0.0,p1r=0.0, p0g=0.0,p1g=0.0, p0b=0.0,p1b=0.0;
            var td=transform;
            var m00=td[0],m01=td[1],m02=td[2],
                m10=td[3],m11=td[4],m12=td[5],
                m20=td[6],m21=td[7],m22=td[8];

            var dptr = 0;
            for(var i = 0; i < dst_height; ++i)
            {
                xs0 = m01 * i + m02,
                ys0 = m11 * i + m12,
                ws  = m21 * i + m22;
                for(var j = 0; j < dst_width; j++, dptr+=4, xs0+=m00, ys0+=m10, ws+=m20)
                {
                    sc = 1.0 / ws;
                    xs = xs0 * sc, ys = ys0 * sc;
                    ixs = xs | 0, iys = ys | 0;

                    if(xs > 0 && ys > 0 && ixs < (src_width - 1) && iys < (src_height - 1))
                    {

                        a = Math.max(xs - ixs, 0.0);
                        b = Math.max(ys - iys, 0.0);
                        //off = (src_width*iys + ixs)|0;
                        off = (( (src.width*4)*iys) + (ixs * 4))|0;

                        p0r = src.data[off] +  a * (src.data[off+4] - src.data[off]);
                        p1r = src.data[off+(src_width*4)] + a * (src.data[off+(src_width*4)+4] - src.data[off+(src_width*4)]);

                        p0g = src.data[off +1] +  a * (src.data[off+4 +1] - src.data[off +1]);
                        p1g = src.data[off+(src_width*4)+1] + a * (src.data[off+(src_width*4)+4 +1] - src.data[off+(src_width*4) +1]);

                        p0b = src.data[off +2] +  a * (src.data[off+4 +2] - src.data[off +2]);
                        p1b = src.data[off+(src_width*4)+2] + a * (src.data[off+(src_width*4)+4 +2] - src.data[off+(src_width*4) +2]);

                        dst.data[dptr + 0] = p0r + b * (p1r - p0r);
                        dst.data[dptr + 1]= p0g + b * (p1g - p0g);
                        dst.data[dptr + 2]= p0b + b * (p1b - p0b);

                        dst.data[((i*(dst.width*4)) + (j*4))+ 3]= 255;
                    }
                    else
                        dst.data[((i*(dst.width*4)) + (j*4))+ 3]= 0;
                }
            }
        };
        return{
            getOverlap: function() {
                // console.log("Datan vi blendar fins i overlapList", overlapList);
                return overlapList;
            },
            getModOverlap: function() {
                
                return modoverlapList;
            },
            getMosaic: function() {
                //return the mosaic data
                return [baseImageMosaic, imagesList];
            },
            getMosaic2: function() {
                //return the mosaic data
                return mosaicImgs;
            }
        };
    };
}(this));

function createcanvas(id, imageW, imageH){
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = imageW;
    tmpCanvas.height = imageH;
    if(0 === id.localeCompare('CANVAS') || 0 === id.localeCompare('canvas')  ){}
    else{
        var div = document.getElementById(id); 
        div.appendChild(tmpCanvas);
    }

    return tmpCanvas;
};

/////////Functions for histogram matching

function getHisograms(imgRef){

      //the target histogra img
        var image = new Image();
        image.src = imgRef;
        var canvas = createcanvas("canvas", image.width, image.height); //document.getElementById("canvas"); 
        var ctx = canvas.getContext('2d');
              
        ctx.drawImage(image, 0, 0);
        var imageData = ctx.getImageData(0, 0, image.width, image.height);
        var img1_RGBA = getChanels_U8(imageData);
        // console.log("RGBA", img1_RGBA, "MAX", _.max(img1_RGBA[0]), "MIN", _.min(img1_RGBA[0]));

        var histR = get_histogram(img1_RGBA[0]);
        var histG = get_histogram(img1_RGBA[1]);
        var histB = get_histogram(img1_RGBA[2]);
       
        normalize(histR, image.width * image.height);
        normalize(histG, image.width * image.height);
        normalize(histB, image.width * image.height);

        return [histR, histG, histB];
}

function getChanels_U8(imageDatar){
    var dptr=0, dptrSingle=0;
    var imgR_u8 = new jsfeat.matrix_t(imageDatar.width, imageDatar.height, jsfeat.U8_t | jsfeat.C1_t);
    var imgG_u8 = new jsfeat.matrix_t(imageDatar.width, imageDatar.height, jsfeat.U8_t | jsfeat.C1_t);
    var imgB_u8 = new jsfeat.matrix_t(imageDatar.width, imageDatar.height, jsfeat.U8_t | jsfeat.C1_t);
    var imgAlpha = new jsfeat.matrix_t(imageDatar.width, imageDatar.height, jsfeat.U8_t | jsfeat.C1_t);

    for (var y = 0; y < imageDatar.height; y++) {
        for (var x = 0; x < imageDatar.width; x++, dptr+=4, dptrSingle+=1) {
            imgR_u8.data[dptrSingle] = imageDatar.data[dptr];
            imgG_u8.data[dptrSingle] = imageDatar.data[dptr + 1];
            imgB_u8.data[dptrSingle] = imageDatar.data[dptr + 2];
            imgAlpha.data[dptrSingle] = imageDatar.data[dptr + 3];
        }
    }
    return [imgR_u8.data, imgG_u8.data, imgB_u8.data, imgAlpha.data];
};

function get_histogram(src){

    var hist = new Array(256);
    for(var i = 0; i <256 ; ++i) hist[i] = 0;
    for (var i = 0; i < src.length; ++i) {
        ++hist[src[i]];
    }
    return hist;
}

function normalize(hist, NM){
    for(var i = 0; i <hist.length ; ++i) hist[i] = hist[i] / NM;
}

function histogramEqualizationTransform(hist){
    var prevValue = 0;
    var s_k = new Array(hist.length);
    for(var i = 0; i <hist.length ; ++i){
        s_k[i] = (hist.length - 1) * hist[i] + prevValue;
        prevValue = s_k[i];
        s_k[i] = Math.round(s_k[i]);
    }
    return s_k;
}

//Step 3. that is: For every value of s_k, k = 0,1,2 ... L -1, use the stored value og G to find 
//the corresponding value of z_q so that G_z is closest to sk and store the mapping from s to z.
//When more then one value of z_q satisfies the given s_k choose the smallest value.
function step3(s_k, Gz_q){
    var mapTable = new Array(s_k.length);
    // for(var i = 0; i <s_k.length ; ++i) hist[i] = 0;

    for(var i = 0; i <s_k.length ; ++i){
        // console.log("find the closest of ", s_k[i], " in", Gz_q);
        mapTable[i] = findClosest( s_k[i], Gz_q, i);
    }

    return mapTable;
}

function findClosest(val, arr, s_kIndx){

    var min = 9999;
    var indx = 0;

    for(var i = 0; i <arr.length ; ++i){
        var error = val - arr[i];
        error = error >= 0 ? error : -error;
        if(error < min){
            min = error;
            indx = i;
        }
    }
    ///////////////////////////
    var sameVal = [];
    for(var ii = 0; ii <arr.length ; ++ii){
        var error2 = val - arr[ii];
        error2 = error2 >= 0 ? error2 : -error2;
        if(error2 === min && ii !== indx){
            //console.log("saaaaaaaaame", val, s_kIndx,  " indx", ii, "or", indx, error2);
            sameVal.push(ii);
        }
    }
    // if(sameVal.length > 0){
        sameVal.push(indx);
        //console.log("sameVal does exsist", sameVal.length, sameVal);
        min = 9999;
        for(var ii = 0; ii <sameVal.length ; ++ii){
            var error = s_kIndx - sameVal[ii];
            error = error >= 0 ? error : -error;
            if(error <= min){
                min = error;
                indx = sameVal[ii];
            }
        }
        //To prevent local negative clipping
        if(min > 10){
            // console.log("Too High diff", min , val, s_kIndx,  " ->", indx);
            indx = s_kIndx;
        }


        // console.log(indx, "Choosen");
    // }
    //////////////////////////7
    return indx;
}

//apply the map
function correctImg(maps, srcImageData, dstImageData){
    
    var dptr=0, dptrSingle=0;

    for (var y = 0; y < srcImageData.height; y++) {
        for (var x = 0; x < srcImageData.width; x++, dptr+=4, dptrSingle+=1) {
            dstImageData.data[dptr]   = maps[0][srcImageData.data[dptr]];
            dstImageData.data[dptr+1] = maps[1][srcImageData.data[dptr + 1]];
            dstImageData.data[dptr+2] = maps[2][srcImageData.data[dptr + 2]];
            dstImageData.data[dptr+3] = srcImageData.data[dptr+3];
        }
    }
    // return modifiedImageData;
}

///END of Functions for histogram matching;//findDiff.js
// Input the two images


(function(_this){
"use strict";
	_this['findDiff'] = function(img1, img2, myImageW, myImageH, iid){
		
		var statdiff = new profiler();
		statdiff.add("statdiff");  
		statdiff.start("statdiff");
		var id = iid;

		var gGauss, rGauss;
		var gW = myImageW;
		var gH = myImageH;

		var myBlobs = computeGaussians();
					statdiff.stop("statdiff");
			console.log("Bluring done in:", statdiff.log(1), "ms"); 


		function computeGaussians(){
			var kernelSizePre = 5;
			var sigmaPre = 0.5;
			var kernelSizePost_Relative = 25; //6
			var sigmaPost_Relative = 3; //1

			var kernelSizePost = 120;//161; // 25
			var sigmaPost = 15;//20; // 3

	        var diff = new jsfeat.matrix_t(myImageW, myImageH, jsfeat.F32_t | jsfeat.C1_t);

			//diff per channel, normalized by 3, to remove noice
			for (var i = 0; i < 3; i++)
			{
				var img1GaussBlur = new jsfeat.matrix_t(myImageW, myImageH, jsfeat.F32_t | jsfeat.C1_t);
				var img2GaussBlur = new jsfeat.matrix_t(myImageW, myImageH, jsfeat.F32_t | jsfeat.C1_t);
		        
		        jsfeat.imgproc.gaussian_blur(img1[i], img1GaussBlur, kernelSizePre, sigmaPre);
	        	jsfeat.imgproc.gaussian_blur(img2[i], img2GaussBlur, kernelSizePre, sigmaPre);

				var tempArray = numeric.sub(img1GaussBlur.data, img2GaussBlur.data);
				tempArray = numeric.abs(tempArray);
				//	Pointwise sum x+=y 
				numeric.addeq(diff.data, tempArray);
			}

			numeric.diveq(diff.data, 3);

			//OBS olika resultat med olika datatyper
			// console.log("skillnad mellan olika datatyper");
			// var diff_u8 = new jsfeat.matrix_t(myImageW, myImageH, jsfeat.U8_t | jsfeat.C1_t);
			// var diffGaus_u8 = new jsfeat.matrix_t(myImageW, myImageH, jsfeat.U8_t | jsfeat.C1_t);

			var diff_u8 = new jsfeat.matrix_t(myImageW, myImageH, jsfeat.F32_t | jsfeat.C1_t);
			var diffGaus_u8 = new jsfeat.matrix_t(myImageW, myImageH, jsfeat.F32_t | jsfeat.C1_t);
			var diffGaus_u8_r = new jsfeat.matrix_t(myImageW, myImageH, jsfeat.F32_t | jsfeat.C1_t);

			diff_u8.data = numeric.floor(diff.data);
			
			// do not consider nonOverlap
	        var i = diffGaus_u8.cols*diffGaus_u8.rows;
	        while(--i >= 0) {
	        	if(img2[3].data[i] == 0){
		            diff_u8.data[i] = 0;
	        	}
	        }

	        jsfeat.imgproc.gaussian_blur(diff_u8, diffGaus_u8, kernelSizePost, sigmaPost); 	
	        //					   diff_u8, diffGaus_u8
			var blobs = findBlobs(diffGaus_u8.data, myImageW, myImageH, 24);
			gGauss = diffGaus_u8.data;

			jsfeat.imgproc.gaussian_blur(diff_u8, diffGaus_u8_r, kernelSizePost_Relative, sigmaPost_Relative);
			rGauss = diffGaus_u8_r.data;
			// printa32(numeric.round(gGauss), 32);
			return blobs;

		};
		
		return{
        	getGauss: function() {
				return {"g":gGauss, "r":rGauss}; 
        	},
        	getData: function() {
				return myBlobs;
        	},
        	compareToThres: function(cmpThreshold) {
        		myBlobs = findBlobs(gGauss, gW, gH, cmpThreshold);
				return myBlobs;
        	},
        	getSize: function(blobNr) {
        		var tmp = unique(myBlobs.data);
				return tmp[blobNr];
        	},
        	compareSingleBlob: function(cmpThreshold, blobNr, prevCmpThreshold) {
        		var myBlobsTmp = findBlobs2(myBlobs.data, gGauss, blobNr, gW, gH, cmpThreshold, prevCmpThreshold);
		
				// var newBlobs = {numberOfUnique: myBlobs.numberOfUnique, data: myBlobsTmp.slice()}
				// console.log("newblobs", newBlobs);

				return myBlobsTmp;
        	},
        	paint: function(clicked, xpos, ypos, radioval) {
        		console.log("paint");
        		
        		var inout = 0;
        		if(radioval == 2)
        			inout = 0;
        		else if(radioval == 3)
        			inout = clicked;

		        var pos = (xpos + ypos * gW);
        
		        var nn = pos - gW; 
		        var nnn = pos - 2 * gW; 
		        var ww = pos - 1;
		        var www = pos - 2;
		        var nw = pos - gW - 1;
		        var ne = pos - gW + 1;
		        var ee = pos + 1; 
		        var eee = pos + 2; 
		        var ss = pos + gW;
		        var sss = pos + 2 * gW;
		        var sw = pos + gW - 1; 
		        var se = pos + gW + 1; 

		        if(xpos > 0 && xpos < gW && ypos >= 0 && ypos < gH){
	        		myBlobs.data[pos] = inout;
        		
	        		if(nnn > gW){
	        			myBlobs.data[nnn] = inout;
	        			myBlobs.data[nn] = inout;
	        			myBlobs.data[nw] = inout;
	        			myBlobs.data[ne] = inout;
	        		}
	        		if(www > 3){
	        			myBlobs.data[www] = inout;
	        			myBlobs.data[ww] = inout;
	        		}
	        		if(xpos < (gW - 3)){
	        			myBlobs.data[eee] = inout;
	        			myBlobs.data[ee] = inout;
	        		}
	        		if(ypos < (gH - 2)){
	        			myBlobs.data[sss] = inout;
	        			myBlobs.data[ss] = inout;
		        		myBlobs.data[sw] = inout;
	        			myBlobs.data[se] = inout;
	        		}

			        }
		        else{
		        	console.log("utanför");
		        }

        		// console.log(clicked, xpos, ypos, eee, myBlobs.data.length);
        		// printa(myBlobs.data, 16);

        		function printa(data, myImageH){

				    var dptr = 0;
				    for (var ypsilon = 0; ypsilon < myImageH; ypsilon++) {
				        console.log(
				          data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++], data[dptr++] , data[dptr++], data[dptr++], data[dptr++], data[dptr++],"  ", ypsilon);    
				    }
				}

				return myBlobs.data.slice();
        	}
		};
	};
}(this));


;//
//Partially borrowed from 
//http://blog.acipo.com/blob-detection-js/
//
//
function findBlobs(srcPixels, xSize, ySize, thresBlob){

  var blobOpt = function(){
    this.numberOfUnique = 0;
    this.data = new Array(xSize * ySize);
  }

  var x, y; 
  var pos = 1;
  // var numberOfUnique = 0;
  // var theData = new Array(xSize * ySize);
  
  // var returnValues = new blobOpt();
  var returnValues = {numberOfUnique:0, data:new Array(xSize * ySize)};

  // This will hold the indecies of the regions we find
  var blobMap = [];
  var label = 1;

  // The labelTable remember when blobs of differen labels merge
  // so labelTabel[1] = 2; means that label 1 and 2 are the same blob
  var labelTable = [0];

  // Start by labeling every pixel as blob 0
  for(y=0; y<ySize; y++){
    blobMap.push([]);
    for(x=0; x<xSize; x++){
      blobMap[y].push(0);
    }
  }  

  // Temporary variables for neighboring pixels and other stuff
  var nn, nw, ne, ww, ee, sw, ss, se, minIndex;
  var isVisible = 0;

  // We're going to run this algorithm twice
  // The first time identifies all of the blobs candidates the second pass
  // merges any blobs that the first pass failed to merge
  var nIter = 2;
  while( nIter-- ){

    // We leave a 1 pixel border which is ignored so we do not get array
    // out of bounds errors
    for( y=1; y<ySize-1; y++){
      for( x=1; x<xSize-1; x++){
      	// console.log(pos);

        pos = (y*xSize+x);
        //pos += 1;

        isVisible = (srcPixels[pos] >= thresBlob);
        

        if( isVisible ){
        
          // Find the lowest blob index nearest this pixel
          nw = blobMap[y-1][x-1] || 0;
          nn = blobMap[y-1][x-0] || 0;
          ne = blobMap[y-1][x+1] || 0;
          ww = blobMap[y-0][x-1] || 0;
          ee = blobMap[y-0][x+1] || 0;
          sw = blobMap[y+1][x-1] || 0;
          ss = blobMap[y+1][x-0] || 0;
          se = blobMap[y+1][x+1] || 0;
          minIndex = ww;
          if( 0 < ww && ww < minIndex ){ minIndex = ww; }
          if( 0 < ee && ee < minIndex ){ minIndex = ee; }
          if( 0 < nn && nn < minIndex ){ minIndex = nn; }
          if( 0 < ne && ne < minIndex ){ minIndex = ne; }
          if( 0 < nw && nw < minIndex ){ minIndex = nw; }
          if( 0 < ss && ss < minIndex ){ minIndex = ss; }
          if( 0 < se && se < minIndex ){ minIndex = se; }
          if( 0 < sw && sw < minIndex ){ minIndex = sw; }
  
          // This point starts a new blob -- increase the lable count and
          // and an entry for it in the label table
          if( minIndex === 0 ){
            blobMap[y][x] = label;
            labelTable.push(label);
            label += 1;
  
          // This point is part of an old blob -- update the labels of the
          // neighboring pixels in the label table so that we know a merge
          // should occur and mark this pixel with the label.
          }else{
            if( minIndex < labelTable[nw] ){ labelTable[nw] = minIndex; }
            if( minIndex < labelTable[nn] ){ labelTable[nn] = minIndex; }
            if( minIndex < labelTable[ne] ){ labelTable[ne] = minIndex; }
            if( minIndex < labelTable[ww] ){ labelTable[ww] = minIndex; }
            if( minIndex < labelTable[ee] ){ labelTable[ee] = minIndex; }
            if( minIndex < labelTable[sw] ){ labelTable[sw] = minIndex; }
            if( minIndex < labelTable[ss] ){ labelTable[ss] = minIndex; }
            if( minIndex < labelTable[se] ){ labelTable[se] = minIndex; }

            blobMap[y][x] = minIndex;
          }

        // This pixel isn't visible so we won't mark it as special
        }else{
          //blobMap[y][x] = 0;
        }
  
      }
    }
  
    // Compress the table of labels so that every location refers to only 1
    // matching location
    var i = labelTable.length;
    while( i-- ){
      label = labelTable[i];
      while( label !== labelTable[label] ){
        label = labelTable[label];
      }
      labelTable[i] = label;
    }
  
    // Merge the blobs with multiple labels
    for(y=0; y<ySize; y++){
      for(x=0; x<xSize; x++){
        label = blobMap[y][x];
        if( label === 0 ){ continue; }
        while( label !== labelTable[label] ){
          label = labelTable[label];
        }
        blobMap[y][x] = label;
      }
    }
    pos = 1;
    label = 1;
  }

  // The blobs may have unusual labels: [1,38,205,316,etc..]
  // Let's rename them: [1,2,3,4,etc..]

  var uniqueLabels = unique(labelTable);
  var i = 0;
  for( label in uniqueLabels ){
    returnValues.numberOfUnique = i;
    labelTable[label] = i++;
  }

  // convert the blobs to the minimized labels
  pos = 0;
  for(y=0; y<ySize; y++){
    for(x=0; x<xSize; x++, pos++){
      label = blobMap[y][x];
      blobMap[y][x] = labelTable[label];
      returnValues.data[pos] = labelTable[label];
    }
  }
// console.log(thresBlob, unique(returnValues.data));
  // Return the blob data:
  return returnValues;

};

///////////////////////////////////////////////////////////////////////////////////////
function unique(arr){
/// Returns an object with the counts of unique elements in arr
/// unique([1,2,1,1,1,2,3,4]) === { 1:4, 2:2, 3:1, 4:1 }

    var value, counts = {};
    var i, l = arr.length;
    for( i=0; i<l; i+=1) {
        value = arr[i];
        if( counts[value] ){
            counts[value] += 1;
        }else{
            counts[value] = 1;
        }
    }

    return counts;
};
;//blobMan.js
function redrawScrean(maps, odata, blobSelected, hovered){
    var baseImgData = odata[0];

    var myHovered = hovered ? hovered : 0;
    
    var colors =    
        [
        [0,0,255,255],  //B
        [255,255,0,255],//Y
        [255,0,255,255],//P
        [0,255,255,255], //C
        [255,0,0,255],  //R
        [0,0,0,255],    //black
        [0,0,255,255],  //B
        [255,255,0,255],//Y
        [255,0,255,255],//P
        [0,255,255,255], //C
        [255,0,0,255],  //R
        [0,0,0,255]     //black
        ];


    result_canvas_bottom.width = baseImgData.width;
    result_canvas_bottom.height = baseImgData.height;   
    result_canvas_top.width = baseImgData.width;
    result_canvas_top.height = baseImgData.height;
    var result_ctx = result_canvas_bottom.getContext("2d");
    var canvas2 = document.createElement('CANVAS');
    // document.body.appendChild(canvas2);
    canvas2.width =  baseImgData.width;
    canvas2.height =  baseImgData.height;
    var ctx2 = canvas2.getContext('2d');
    var imageDatar = result_ctx.createImageData(baseImgData.width, baseImgData.height);

    var dptr = 0, dptr_s = 0;
    for (var y = 0; y < baseImgData.height; y++) {
        for (var x = 0; x < baseImgData.width; x++, dptr+=4, dptr_s+=1) {
            for (var yi = 0; yi < maps.length; yi++){
                if(maps[yi][0][dptr_s] === yi + 1 &&  odata[maps[yi][1]].data[dptr + 3] != 0){
                   
                    imageDatar.data[dptr]     =  blobSelected[yi + 1] ? ((myHovered == yi + 1) ? odata[maps[yi][1]].data[dptr] / 2 : 0) : colors[maps[yi][1] - 1][0] ? odata[maps[yi][1]].data[dptr] : 0;
                    imageDatar.data[dptr + 1] =  blobSelected[yi + 1] ? odata[maps[yi][1]].data[dptr + 1] : colors[maps[yi][1] - 1][1] ? odata[maps[yi][1]].data[dptr + 1] : 0 ;
                    imageDatar.data[dptr + 2] =  blobSelected[yi + 1] ? ((myHovered == yi + 1) ? odata[maps[yi][1]].data[dptr + 2] / 2 : 0) : colors[maps[yi][1] - 1][2] ? odata[maps[yi][1]].data[dptr + 2] : 0;

                    imageDatar.data[dptr + 3] =  blobSelected[yi + 1] ? 255 : 200;
                }
            }            
        }
    }
    ctx2.putImageData(imageDatar, 0, 0);
    result_ctx.putImageData(baseImgData, 0, 0);
    result_ctx.drawImage(canvas2,0,0);
}
function zeros(size) {
    var array = new Array(size);
    for (var i = 0; i < size; i++) {
        array[i] = 0;
    }
    return array;
};;// mouse(/touch) on a canvas

var cwidth, cheight;
var imgData = [], modImgData = [], blobData = [];
(function(_this){
"use strict";

    _this['interactMouse'] = function(overlap, imgs, selectedBlobs, w, h, modImgs){
        var blobSelected = {};
        var scrollThresh = 24, previousScrollThresh = 24;
        // var myblobs1 = [];

        var relativeBlobs = {};
        var relativeBlobsIndxs = [];
        var clickedBlobs  = [];
        var blobtopCTX;
        var dDelta = 0, prevdDelta = 0;
        var HoverSelectCnt = 0;
        var triggerHoverSelect = false;

        var SELBLOB  = 1;
        var PAINTOUT = 2;
        var PAINTIN  = 3;
        var hoveredIn = 0, previusHoveredIn = 0;
        var notSelecthoveredIn = 0, notSelectpreviusHoveredIn = 0;
        var startcalcDist = false;
        var radio = $('input[name=optradio]:checked', '#myForm').val(); 

        $('#myForm input').on('change', function() {
            radio = $('input[name=optradio]:checked', '#myForm').val(); 
            console.log("RADIO Cnagke", radio); 
            if(radio == 1){
                document.body.style.cursor = "auto";
            }else if(radio == 2){
                document.body.style.cursor = "cell";
            }else{
                document.body.style.cursor = "crosshair";
            }
        });

        //$('#myStateButton input').button('toggle');
        // $("#myButtons :input").change(function() {
        //     console.log(this); // points to the clicked input button
        // });
        
        var numBlobs = 0, dragging = false, mouseDown = false;
        var clicked = 0, previusClicked = 0;
        var is_mixing_gradients = true;
        var p_offseted = [];
        var ddx = 0, ddy = 0;
        blobSelected = selectedBlobs;
        cwidth = w;
        cheight = h;
        var setupOverlay = (function(){
            console.log("Do SET Up");
            function $(selector){
                var c = selector.charAt(0);
                if( c === '#' ){
                    var element = document.getElementById(selector.slice(1,selector.length));
                }else{
                    var element = document.getElementById(selector);
                }

                var self = {}
                var on = function(eventStr,callback){
                    var events = eventStr.split(' ');
                    var i, l = events.length;
                    for( i=0; i<l; i+=1 ){
                        if( element.attachEvent ){
                            element.attachEvent('on'+events[i], callback);
                        }else{
                            element.addEventListener(events[i], callback, false);
                        }
                    }
                    return self;
                };
                // element.children.blobs.remove();
                self.on = on;
                self.element = element;

                return self;
            }

            var getPointerPositionsIn = function(e){

                var locations = [], // array of x,y pairs (finger locations)
                nLocations = 0, // number of locations
                nTouches, // number of touches to look through
                mx = 0, // mouse position
                my = 0,
                i, iLocation, iTouch; // temp for iterating
            
                if(e.type === "touchstart"
                || e.type === "touchmove"
                || e.type === "touchend"){
                    nTouches = e.touches.length;
                    for(i=0; i<nTouches; i+= 1){
                        nLocations += 1;
                    }
                }else{  
                    nLocations += 1;
                }

                var bRect = result_canvas_top.getBoundingClientRect();
                for(i=0; i<nLocations; i+=1){
                    locations[i] = { x: 0, y: 0 };
                    mx = ((e.clientX - bRect.left)*(result_canvas_top.width/bRect.width)) |0;           
                    if( mx > 0 && mx <= result_canvas_top.width){
                        locations[i].x = mx;
                    }
                    my = ((e.clientY - bRect.top)*(result_canvas_top.height/bRect.height)) | 0;
                    if( my > 0 && my <= result_canvas_top.height){
                        locations[i].y = my;
                    }
                }
                return locations;
            };

            var lastPos = [];//null;
            var currPos = [];//null;
            var p_lastPos = null;
            var p_currPos = null;
            var canvas = null;
            
        
            return function(id,onChange){
                var localOnChange = (function(onChange){ return function(){
                    onChange();
                }; })(onChange);

                canvas = $(id);
                canvas.width = 0;
                canvas.height = 0;

                canvas.on('touchstart mousedown',function(e){

                    //prevents the mouse down from having an effect on the main browser window:
                    if (e.preventDefault) {
                        e.preventDefault();
                    } 
                    else if (e.returnValue) {
                        e.returnValue = false;
                    } 
                    mouseDown = true;
                }).on('touchmove mousemove',function(e){

                    var tmp = lastPos;
                    lastPos = currPos;
                    currPos = getPointerPositionsIn(e,canvas.element);
        
                    var dx = currPos[0].x;
                    var dy = currPos[0].y;
                    var paintData;

                   if(!dragging && mouseDown){
                        var dxx = currPos[0].x - lastPos[0].x;
                        var dyy = currPos[0].y - lastPos[0].y;
                        if( dxx*dxx + dyy*dyy < 32 ){
                            currPos = lastPos;
                            lastPos = tmp;
                        }
                        else{
                            console.log("set drag = true");
                            dragging = true;
                        }
                    }

                    if(dragging && (radio == PAINTIN || radio == PAINTOUT)){
                        if(clicked){
                            var ctx = canvas.element.getContext('2d');
                            //do first
                            ctx.lineWidth = 16;
                            ctx.lineCap = 'round';
                            ctx.beginPath();

                            //if paint in
                            if(radio == PAINTOUT){
                                ctx.globalCompositeOperation = 'source-over';
                                ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
                            }

                            if(radio == PAINTIN){
                                ctx.globalCompositeOperation = 'source-over';
                                ctx.strokeStyle = 'rgba(0, 255, 0, 1)';
                            }
                                                
                            //do after
                            ctx.moveTo(lastPos[0].x,lastPos[0].y);
                            ctx.lineTo(currPos[0].x,currPos[0].y);
                            ctx.stroke();
                            paintData = ctx.getImageData(0,0,w,h);
                        }
                    } 
                    if(_.some(blobSelected) || dragging){
                        //check if we are inside a selected blob or not
                        var dxx = currPos[0].x - lastPos[0].x;
                        var dyy = currPos[0].y - lastPos[0].y;
                        if( dxx*dxx + dyy*dyy < 32 ){
                            currPos = lastPos;
                            lastPos = tmp;
                        }
                        else{

                            if(dragging && (radio == PAINTIN || radio == PAINTOUT)){
                                if(clicked){
                                    maskOutRed(clicked, w, h, paintData, blobData[clicked - 1][0]);
                                }
                                redrawScrean(blobData, imgData, blobSelected, hoveredIn);
                            }

                            var ourPos = dy * result_canvas_top.width + dx;
                            previusHoveredIn = hoveredIn;
                            var blobs;
                            var blobArray = [];
                            for( blobs in blobSelected){
                                if(blobSelected[blobs]){
                                    var hoverOver = Number(blobs);
                                    if( blobData[hoverOver - 1][0][ourPos] !== 0){
                                        hoveredIn = hoverOver; //clickedBlobs[ourPos];
                                        clicked   = hoverOver; //clickedBlobs[ourPos];//
                                        blobArray.push(1);
                                    }
                                    else {
                                        blobArray.push(0);
                                    }
                                }
                            }
                            if(!_.contains(blobArray, 1) && !dragging){
                                hoveredIn = 0;
                                clicked   = 0;
                            }

                            //alt om previus hovered in != hoveredIn 
                            //then redraw screan
                            if(previusHoveredIn != hoveredIn){
                                console.log("***************************************************");
                                console.log("REDRAW for color change", hoveredIn, blobSelected);
                                redrawScrean(blobData, imgData, blobSelected, hoveredIn);
                            }
                        }
                    }

                    // clicked = 0;
                    notSelectpreviusHoveredIn = notSelecthoveredIn;
                    notSelecthoveredIn = 0;
                    var ourPos = 0;

                    for (var i= 1; i < numBlobs + 1; i++) {
                        //the Position
                        ourPos = (Math.abs(currPos[0].y - p_offseted[i].y) *(result_canvas_top.width)) + Math.abs(currPos[0].x - p_offseted[i].x);
                        if( blobData[i - 1][0][ourPos] === i){
                            
                            notSelecthoveredIn = i;
                            if(HoverSelectCnt < 2){
                                HoverSelectCnt++;
                                console.log("start, wait marker", HoverSelectCnt);
                            }
                            else{
                                triggerHoverSelect = false;
                            }
                        }
                    }

                   if(notSelectpreviusHoveredIn != notSelecthoveredIn && !hoveredIn){                        
                        if(notSelecthoveredIn !== 0){
                            console.log("hovered In", notSelecthoveredIn);
                            handleMouseOver(ourPos, notSelecthoveredIn);
                        }
                        else{
                            console.log("hovered Out");
                            HoverSelectCnt = 0;
                        }
                    }

                    if(startcalcDist){
                        var ourPos = (Math.abs(currPos[0].y - p_offseted[clicked].y) *(result_canvas_top.width)) + Math.abs(currPos[0].x - p_offseted[clicked].x);
                        calcDist(ourPos);
                    }

                    if( e.preventDefault ){
                        e.preventDefault();
                    }
                }).on('touchend mouseup mouseout',function(e){

                    mouseDown = false;

                    if(!dragging){
                        currPos = getPointerPositionsIn(e);
                        //Find out if we have a hit and which shape was clicked
                        for (var i= 1; i < numBlobs + 1; i++) {
                            var ourPos = (Math.abs(currPos[0].y - p_offseted[i].y) *(result_canvas_top.width)) + Math.abs(currPos[0].x - p_offseted[i].x);
                            handleMouseOver(ourPos, i);
                        }
                        redrawScrean(blobData, imgData, blobSelected, hoveredIn);                        
                    }
                    // else 
                    if(radio == PAINTIN || radio == PAINTOUT){

                        // dragging = true;
                        console.log("PAINT");
                        var dx_down = currPos[0].x;
                        var dy_down = currPos[0].y;

                        redrawScrean(blobData, imgData, blobSelected, hoveredIn);
                    }

                    if(startcalcDist){
                        var ourPos = (Math.abs(currPos[0].y - p_offseted[clicked].y) *(result_canvas_top.width)) + Math.abs(currPos[0].x - p_offseted[clicked].x);
                        calcDist(ourPos);
                    }

                    if(dragging){
                        dragging = false; 
                    }
                }).on('DOMMouseScroll mousewheel',function(e){
                    if (e.preventDefault) {
                        e.preventDefault();
                    } 
                    else if (e.returnValue) {
                        e.returnValue = false;
                    }
                    var delta = e.wheelDelta ? e.wheelDelta/40 : e.detail ? -e.detail : 0;
                    dDelta += delta;
                    console.log("===========================================================", hoveredIn);
                    console.log("thres", scrollThresh, "delta", dDelta, dDelta > prevdDelta);
                   

                    if(clicked){
                        console.log("clicked", clicked);
                        console.log("blobSelected", blobSelected);
                        console.log("relativeBlobs", relativeBlobs);
                        if(dDelta > prevdDelta){
                            blobData[clicked - 1][0] = relativeBlobs[clicked].updateThresholdDecreas();
                            redrawScrean(blobData, imgData, blobSelected, hoveredIn);


                        }else if(dDelta < prevdDelta){
                            blobData[clicked - 1][0] = relativeBlobs[clicked].updateThresholdIncreas();
                            redrawScrean(blobData, imgData, blobSelected, hoveredIn);
                        }
                    }
                    else{


                        if(_.some(blobSelected)){


                            if(delta > 0 && scrollThresh < (550) ){
                                scrollThresh = scrollThresh + 1;
                            }else if(delta < 0 && scrollThresh >= 0){
                                scrollThresh = scrollThresh - 1;
                            }

                            console.log("Special Case -------------------------------------------");
                            //save the cliced blobs to a global matrix

                            clickedBlobs = zeros(blobData[0][0].length);

                            var blobs;
                            for( blobs in blobSelected){
                                if(blobSelected[blobs]){
                                    //loop throo the whole matrix
                                    for (var x = 0; x < blobData[blobs - 1][0].length; x++){
                                        if(blobData[blobs - 1][0][x] == blobs){
                                            clickedBlobs[x] = Number(blobs);
                                        }                                            
                                    }
                                }
                            }
                            getBlobsIgnoreSelected(scrollThresh);
                            previousScrollThresh = scrollThresh;

                            // blobData[clicked - 1][0]
                        }else{
                            if(delta > 0 && scrollThresh < (550) ){
                                scrollThresh = scrollThresh + 1;
                                
                                getThemBlobs(scrollThresh);
                                
                                previousScrollThresh = scrollThresh;   
                            }else if(delta < 0 && scrollThresh >= 0){
                                scrollThresh = scrollThresh - 1;
                                getThemBlobs(scrollThresh);
                                
                                previousScrollThresh = scrollThresh;
                            }
                        }
                    }
                    prevdDelta = dDelta;
                });
            };
        })();

        function calcDist(ourPos){

            if(blobData[clicked - 1][1] > 1){
                var nrBlobsBefore = 0;
                for (var j = 0; j < clicked; j++){

                    if(blobData[j][1] < blobData[clicked - 1][1])
                        nrBlobsBefore++;
                }
               var theBlobNr = clicked - nrBlobsBefore;
                relativeBlobs[clicked] = new relativeBlobTreshold(clicked, myblobs1[blobData[clicked - 1][1]].getGauss(), result_canvas_top.width, result_canvas_top.height, scrollThresh, ourPos, myblobs1[blobData[clicked - 1][1]].getSize(theBlobNr), imgData[blobData[clicked - 1][1]].data);     
            }
            else{
                relativeBlobs[clicked] = new relativeBlobTreshold(clicked, myblobs1[blobData[clicked - 1][1]].getGauss(), result_canvas_top.width, result_canvas_top.height, scrollThresh, ourPos, myblobs1[blobData[clicked - 1][1]].getSize(clicked), imgData[blobData[clicked - 1][1]].data);                                             
            }                                                                                                
            //save the new blob
            blobData[clicked - 1][0] = relativeBlobs[clicked].getBlob();
            redrawScrean(blobData, imgData, blobSelected, hoveredIn);
            document.body.style.cursor = "auto";
            var blobs;
            for( blobs in blobSelected){
                if(blobSelected[blobs]){
                    //loop throo the whole matrix
                    for (var x = 0; x < blobData[blobs - 1][0].length; x++){
                        if(blobData[blobs - 1][0][x] == blobs){
                            clickedBlobs[x] = Number(blobs);
                        }                                            
                    }
                }
            }
            startcalcDist = false;

        }

        function handleMouseOver(ourPos, i){

            //the Position
            // var ourPos = (Math.abs(currPos[0].y - p_offseted[i].y) *(result_canvas_top.width)) + Math.abs(currPos[0].x - p_offseted[i].x);
            if( blobData[i - 1][0][ourPos] === i){
                // dragging = i;
                clicked = i;
                hoveredIn = i;
                console.log("HIIIIIIIIITT", i, "on", ourPos);
                blobSelected[i] = !blobSelected[i];
                console.log(blobSelected);

                if(relativeBlobs[i]){
                    console.log("already exist");
                    if(!blobSelected[i]){
                        hoveredIn = 0;
                        clicked   = 0; 
                        console.log("noll ställ");
                    }
                }

                else{
                    document.body.style.cursor = "wait";

                    startcalcDist = true;
                }
            }
            redrawScrean(blobData, imgData, blobSelected, hoveredIn);
        }

        function getBlobsIgnoreSelected(tvalues){
            var globalNumberOfUnique = 0;
            var selctedOrNot = [];
            var blobsChangeFrom = [];
            var blobsChangeTo = [];
            blobData = [];

            for (var xii = 1; xii < imagesRef.length; xii++){
                var overlap = imgData[xii];
                overlap.blobs = myblobs1[xii].compareToThres(tvalues);

                for (var y = 0; y < overlap.blobs.numberOfUnique; y++){          
                    var currentblobindx = y + 1;
                    var blobtmp = zeros(overlap.blobs.data.length);
                    var ignore = false;
                    var clickedBlobsIndx = 0;
                    for (var x = 0; x < overlap.blobs.data.length; x++){

                        if(currentblobindx === overlap.blobs.data[x]){
                            blobtmp[x] = currentblobindx + globalNumberOfUnique;
                            if(clickedBlobs[x] != 0){
                                ignore = true;
                                clickedBlobsIndx = clickedBlobs[x];
                                break;
                            }
                        }
                    }
                    if(ignore){ 
                        blobtmp = zeros(overlap.blobs.data.length);
                        for (var x = 0; x < overlap.blobs.data.length; x++){
                            if(clickedBlobs[x] == clickedBlobsIndx){
                                blobtmp[x] = currentblobindx + globalNumberOfUnique;
                            }
                        }
                        selctedOrNot.push(true);
                        blobsChangeFrom.push(clickedBlobsIndx);                            
                    }
                    else{
                        selctedOrNot.push(false);
                    }
                    blobData.push([blobtmp, xii]);
                }
                globalNumberOfUnique += overlap.blobs.numberOfUnique;
            }

            blobSelected = {};
            for (var xii = 0; xii < globalNumberOfUnique; xii++){
                if(selctedOrNot[xii]){
                    blobSelected[xii + 1] = true;
                    blobsChangeTo.push(xii + 1);

                }
                else{
                    blobSelected[xii + 1] = false;
                }
            }
            for (var ij= 1; ij < blobData.length + 1; ij++){
                p_offseted[ij] = { x: 0, y: 0 };
            }

            if(blobsChangeFrom.length > 0){
                // console.log("relativeBlobs before", relativeBlobs);
                console.log("MAKE THE CHANGES ************************", previousScrollThresh < scrollThresh);
                console.log("from :", blobsChangeFrom);
                console.log("to   :", blobsChangeTo);
                console.log("**************** ************************");
                var zipped = _.zip(blobsChangeFrom,blobsChangeTo);

                zipped = _.sortBy(zipped, function(num){ return -num[1]; });
                zipped = _.uniq(zipped, false, function(num) {return num [0];})
                
                var unzipped = _.unzip(zipped);  

                blobsChangeFrom = unzipped[0];
                blobsChangeTo   = unzipped[1];


                for (var ij= 0; ij < blobsChangeFrom.length; ij++){
                    relativeBlobs[blobsChangeFrom[ij]].changeId(blobsChangeTo[ij]);
                    changeKey(relativeBlobs, blobsChangeFrom[ij], blobsChangeTo[ij] + 99);
                  }


                for (var ij= 0; ij < blobsChangeFrom.length; ij++){
                     changeKey(relativeBlobs, blobsChangeFrom[ij] + 99 + (blobsChangeTo[ij] - blobsChangeFrom[ij]), blobsChangeTo[ij]); 
                }

                numBlobs = blobData.length;

                redrawScrean(blobData, imgData, blobSelected);

            }
        else{
            console.log("the array is empty", blobSelected);
        }
        }; 

        function zeros(size) {
            var array = new Array(size);
            for (var i = 0; i < size; i++) {
                array[i] = 0;
            }
            return array;
        };

        function getThemBlobs(tvalues){
            console.log(" get them, ");
            var globalNumberOfUnique = 0;
            blobData = [];

            for (var xii = 1; xii < imagesRef.length; xii++){
                var overlap = imgData[xii];
                // overlap.blobs = myblobs1[xii].compareToThres(tvalues[xii]);
                overlap.blobs = myblobs1[xii].compareToThres(tvalues);
                for (var y = 0; y < overlap.blobs.numberOfUnique; y++){          
                    var currentblobindx = y + 1;
                    var blobtmp = zeros(overlap.blobs.data.length);
                    for (var x = 0; x < overlap.blobs.data.length; x++){
                        if(currentblobindx === overlap.blobs.data[x]){
                            blobtmp[x] = currentblobindx + globalNumberOfUnique;
                        }
                    }
                    blobData.push([blobtmp, xii]);
                }
                globalNumberOfUnique += overlap.blobs.numberOfUnique;
            }
            blobSelected = {};
            for (var xii = 0; xii < globalNumberOfUnique; xii++){
                blobSelected[xii + 1] = false;
            }
            for (var ij= 1; ij < blobData.length + 1; ij++){
                p_offseted[ij] = { x: 0, y: 0 };
            }
            numBlobs = blobData.length;

            redrawScrean(blobData, imgData, blobSelected);

        }; 

        return{
            setup: function(theblobs) {

                // myblobs1 = theblobs.slice();
                (function(){    
                    numBlobs = overlap.length;
                    blobData = overlap.slice();
                    imgData = imgs.slice();
                    modImgData = modImgs.slice();
                    for (var ij= 1; ij < numBlobs + 1; ij++){
                            p_offseted[ij] = { x: 0, y: 0 };          
                    }

                    setupOverlay('#blobstop',function(){
                        var TMPcanvas=document.getElementById("blobstop");
                        blobtopCTX = TMPcanvas.getContext("2d"); 
                        console.log("do nada");
                    });
                })();
            },
            setNblobs: function(overlap1, imgs1, selectedBlobs){
                numBlobs = overlap1.length;
                blobData = overlap1.slice();
                imgData = imgs1.slice();
                blobSelected = selectedBlobs;

                for (var ij= 1; ij < numBlobs + 1; ij++){
                    p_offseted[ij] = { x: 0, y: 0 };
                }
            },
            getOffset: function(){
                return p_offseted;
            },
            getBlobSelected: function(){
                return blobSelected;
            }
        };
    };
}(this));

function maskOutRed(blobNr, w, h, paintData, blobMap){
    // var extraCanvas =  loadCanvas("extra-canvas"); 
    // extraCanvas.width = w;
    // extraCanvas.height = h;
    // var extraCtx = extraCanvas.getContext("2d");
    // extraCtx.putImageData(paintData, 0, 0);

    var pos = 0;
    var isVisible = 0;
    var dptr_s = 0;
    console.log("start masking");
    for(var y=0; y<h; y++){
        for(var x=0; x<w; x++, dptr_s+=1){
            pos = dptr_s*4; //(y*xSize+x)*4;
            isVisible = (paintData.data[pos+3] >= 127);
            if( isVisible ){
                if(paintData.data[pos] == 255 &&  paintData.data[pos+1] == 0 && paintData.data[pos+2] == 0){
                    blobMap[dptr_s] = 0;
                }else if(paintData.data[pos] == 0 &&  paintData.data[pos+1] == 255 && paintData.data[pos+2] == 0){
                    blobMap[dptr_s] = blobNr;
                }
              }
        }
    }
}

function blend(){
    var cont = _.contains(mouse.getBlobSelected(), true);
    console.log(mouse.getBlobSelected());
    if(cont !== true){    
        console.log("do naada");
        alert("First, select which regions to blend by click them in the image");
        return 0;    
    }
    
    $('#btn1').show();

    //if you would like to see wats going on, choose the out commented lines
    var newcanvas =  document.createElement('CANVAS');//
    // newcanvas = loadCanvas("new-canvas");
    var srccanvas =  document.createElement('CANVAS');//
    // srccanvas = loadCanvas("src-canvas");
    newcanvas.width = srccanvas.width = finalcanvas.width = cwidth;
    newcanvas.height = srccanvas.height = finalcanvas.height = cheight;

    var src_ctx = srccanvas.getContext("2d");
    var new_ctx = newcanvas.getContext("2d");
    var final_ctx = finalcanvas.getContext("2d");
    var offset = mouse.getOffset();

    var firstImg = true;
    for (var i = 0; i <= _.size(mouse.getBlobSelected()); i++){
        if(mouse.getBlobSelected()[i] === true){
            var blobNr = i;

            // src_ctx.putImageData(imgData[1], 0, 0);
            src_ctx.putImageData(modImgData[blobData[i - 1][1]], 0, 0);
             
            new_ctx.putImageData(imgData[0], 0, 0);
            if(firstImg){
                final_ctx.putImageData(imgData[0], 0, 0);
                firstImg = false;
            }
            var mask_pixels = blobData[blobNr -1][0];
            var srcData = src_ctx.getImageData(0, 0, srccanvas.width, srccanvas.height);
            var mask_data = getMask(mask_pixels, srcData, blobNr);
            console.log("start Blending", blobNr);
            poissonBlendImages(newcanvas, srccanvas, mask_data, finalcanvas, offset[blobNr]);
        }
    }
}

function getMask(mask_pixels, src_pixels, blobNr){

    var extraCanvas =  document.createElement('CANVAS');//loadCanvas("extra-canvas"); //
    extraCanvas.width = src_pixels.width; extraCanvas.height = src_pixels.height;
    var extraCtx = extraCanvas.getContext("2d");

    var test_pixels = extraCtx.getImageData(0, 0, src_pixels.width, src_pixels.height);
    var dptr_s = 0;
    for(var y=0; y<src_pixels.height; y++) {
        for(var x=0; x<src_pixels.width; x++, dptr_s+=1) {

            var p = dptr_s*4;//;(y*src_pixels.width+x)*4;

            if(mask_pixels[dptr_s] === blobNr){
                test_pixels.data[p+0] = 0; 
                test_pixels.data[p+1] = 255;
                test_pixels.data[p+2] = 0 ; 
                test_pixels.data[p+3] = 255;
            }
            else{
                test_pixels.data[p+0] = src_pixels.data[p+0];
                test_pixels.data[p+1] = src_pixels.data[p+1];
                test_pixels.data[p+2] = src_pixels.data[p+2];
                test_pixels.data[p+3] = src_pixels.data[p+3];
            }
        }
    }
    extraCtx.putImageData(test_pixels, 0, 0);

    return extraCanvas;//extraCtx.getImageData(0, 0, src_pixels.width, src_pixels.height); // 
}

function changeKey(o, old_key, new_key){

    if (old_key !== new_key) {
        Object.defineProperty(o, new_key,
        Object.getOwnPropertyDescriptor(o, old_key));
        delete o[old_key];
    }
};"use strict";

var src_ctx  	;
var mask_ctx 	;
var result_ctx 	;
var base_size = {width:0, height:0};

var blend_position_offset = {x:0, y:0};
function adjustBlendPosition() {
	var src_pixels = src_ctx.getImageData(0, 0, base_size.width, base_size.height);
	var mask_pixels = mask_ctx.getImageData(0, 0, base_size.width, base_size.height);
	var result_pixels = result_ctx.getImageData(0, 0, base_size.width, base_size.height);

	for(var y=1; y<base_size.height-1; y++) {
		for(var x=1; x<base_size.width-1; x++) {
			var p = (y*base_size.width+x)*4;
			if(mask_pixels.data[p+0]==0 && mask_pixels.data[p+1]==255 &&
					mask_pixels.data[p+2]==0 && mask_pixels.data[p+3]==255) {

				var p_offseted = p + 4*((blend_position_offset.y)*base_size.width+blend_position_offset.x);
				for(var rgb=0; rgb<3; rgb++) {
					result_pixels.data[p_offseted+rgb] = src_pixels.data[p+rgb];
				}
			}
		}
	}
	console.log(blend_position_offset.x, blend_position_offset.y);
	result_ctx.putImageData(result_pixels, 0, 0);
}

//from: http://takuti.me/dev/poisson/demo/
/*-----------------------------------------
 Blend Images
 g : src_pixels (using mask_pixels)
 f*: base_pixels
 ---> Blend result is result_pixels
-----------------------------------------*/
function poissonBlendImages(newcanvas, srccanvas, mask_data, finalcanvas, offset){

	var base_ctx 	= newcanvas.getContext("2d");
	src_ctx  	= srccanvas.getContext("2d");
	mask_ctx 	= mask_data.getContext("2d");
	result_ctx 	= finalcanvas.getContext("2d");

	base_size.width  =  srccanvas.width;
	base_size.height = 	srccanvas.height;
	blend_position_offset = offset;
	adjustBlendPosition();

	var base_pixels = base_ctx.getImageData(0, 0, srccanvas.width, srccanvas.height);
	var src_pixels = src_ctx.getImageData(0, 0, srccanvas.width, srccanvas.height);
	var mask_pixels = mask_ctx.getImageData(0, 0, srccanvas.width, srccanvas.height);

	//The inintial layer to blend
	// var result_pixels = base_ctx.getImageData(0, 0, srccanvas.width, srccanvas.height);
	var result_pixels = result_ctx.getImageData(0, 0, srccanvas.width, srccanvas.height);
	// saf()
	var is_mixing_gradients = false;

	var dx, absx, previous_epsilon=1.0;
	var cnt=0, cntMask = 0, cntNeigbour = 0;

	do {
		dx=0; absx=0;
		for(var y=1; y<base_size.height-1; y++) {
			for(var x=1; x<base_size.width-1; x++) {
				// p is current pixel
				// rgba r=p+0, g=p+1, b=p+2, a=p+3
				var p = (y*base_size.width+x)*4;

				// Mask area is painted rgba(0,255,0,1.0)
				if(mask_pixels.data[p+0]==0 && mask_pixels.data[p+1]==255 &&
						mask_pixels.data[p+2]==0 && mask_pixels.data[p+3]==255) {

					var p_offseted = p + 4*(blend_position_offset.y*base_size.width+blend_position_offset.x);

					// q is array of connected neighbors
					var q = [((y-1)*base_size.width+x)*4, ((y+1)*base_size.width+x)*4,
										(y*base_size.width+(x-1))*4, (y*base_size.width+(x+1))*4];
					var num_neighbors = q.length;

					for(var rgb=0; rgb<3; rgb++) {
						var sum_fq = 0;
						var sum_vpq = 0;
						var sum_boundary = 0;

						for(var i=0; i<num_neighbors; i++) {
							var q_offseted = q[i] + 4*(blend_position_offset.y*base_size.width+blend_position_offset.x);

							if(mask_pixels.data[q[i]+0]==0 && mask_pixels.data[q[i]+1]==255 &&
									mask_pixels.data[q[i]+2]==0 && mask_pixels.data[q[i]+3]==255) {
								sum_fq += result_pixels.data[q_offseted+rgb];
							} else {
								sum_boundary += base_pixels.data[q_offseted+rgb];
							}

							if(is_mixing_gradients && Math.abs(base_pixels.data[p_offseted+rgb]-base_pixels.data[q_offseted+rgb]) >
								Math.abs(src_pixels.data[p+rgb]-src_pixels.data[q[i]+rgb])) {
								sum_vpq += base_pixels.data[p_offseted+rgb]-base_pixels.data[q_offseted+rgb];
							} else {
								sum_vpq += src_pixels.data[p+rgb]-src_pixels.data[q[i]+rgb];
							}
						}
						var new_value = (sum_fq+sum_vpq+sum_boundary)/num_neighbors;
						dx += Math.abs(new_value-result_pixels.data[p_offseted+rgb]);
						absx += Math.abs(new_value);
						result_pixels.data[p_offseted+rgb] = new_value;
					}
				}
			}
		}
		// console.log(dx, absx);
		cnt++;
		var epsilon = dx/absx;
		if(!epsilon || previous_epsilon-epsilon === 0) break; // convergence
		// if( cnt > 1000) break;
		else previous_epsilon = epsilon;
	} while(true);
	///////////////////////////////////////////////////////////////////////////////////
	// console.log("släng ut extra lager");	
	// extraCtx.putImageData(test_pixels, 0, 0);
	///////////////////////////////////////////////////////////////////////////////////////
	result_ctx.putImageData(result_pixels, 0, 0);
	console.log(cnt+" times iterated. ?", epsilon , previous_epsilon);

	//scroll to canvas
	var el = document.getElementById('final-canvas');
    el.scrollIntoView(true);

	return finalcanvas;
}