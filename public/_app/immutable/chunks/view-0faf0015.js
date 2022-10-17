import{S as at,i as lt,s as ut,a as G,k as D,c as X,l as I,m as _,h as E,n as C,U as V,b as L,G as x,J as q,F,o as ht,q as B,r as N,u as ct,a1 as pt,K as H}from"./index-85b2c4b8.js";import{y as j,s as Y,h as K,x as J,z as Q,w as ft,b as mt}from"./state-17dc04c4.js";var dt=function(){var t="",e,o,i,s=[],n={passive:!0};window.addEventListener?(e="addEventListener",o="removeEventListener"):(e="attachEvent",o="detachEvent",t="on"),i="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll";function a(p,u){var v=function(m){!m&&(m=window.event);var y={originalEvent:m,target:m.target||m.srcElement,type:"wheel",deltaMode:m.type=="MozMousePixelScroll"?0:1,deltaX:0,delatZ:0,preventDefault:function(){m.preventDefault?m.preventDefault():m.returnValue=!1}};return i=="mousewheel"?(y.deltaY=-.025*m.wheelDelta,m.wheelDeltaX&&(y.deltaX=-.025*m.wheelDeltaX)):y.deltaY=m.detail,u(y)};return s.push({element:p,fn:v}),v}function r(p){for(var u=0;u<s.length;u++)if(s[u].element===p)return s[u].fn;return function(){}}function l(p){for(var u=0;u<s.length;u++)if(s[u].element===p)return s.splice(u,1)}function b(p,u,v,m){var y;i==="wheel"?y=v:y=a(p,v),p[e](t+u,y,m?n:!1)}function w(p,u,v,m){var y;i==="wheel"?y=v:y=r(p),p[o](t+u,y,m?n:!1),l(p)}function g(p,u,v){b(p,i,u,v),i=="DOMMouseScroll"&&b(p,"MozMousePixelScroll",u,v)}function d(p,u,v){w(p,i,u,v),i=="DOMMouseScroll"&&w(p,"MozMousePixelScroll",u,v)}return{on:g,off:d}}(),W={extend:function(t,e){t=t||{};for(var o in e)this.isObject(e[o])?t[o]=this.extend(t[o],e[o]):t[o]=e[o];return t},isElement:function(t){return t instanceof HTMLElement||t instanceof SVGElement||t instanceof SVGSVGElement||t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"},isObject:function(t){return Object.prototype.toString.call(t)==="[object Object]"},isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},getSvg:function(t){var e,o;if(this.isElement(t))e=t;else if(typeof t=="string"||t instanceof String){if(e=document.querySelector(t),!e)throw new Error("Provided selector did not find any elements. Selector: "+t)}else throw new Error("Provided selector is not an HTML object nor String");if(e.tagName.toLowerCase()==="svg")o=e;else if(e.tagName.toLowerCase()==="object")o=e.contentDocument.documentElement;else if(e.tagName.toLowerCase()==="embed")o=e.getSVGDocument().documentElement;else throw e.tagName.toLowerCase()==="img"?new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.'):new Error("Cannot get SVG.");return o},proxy:function(t,e){return function(){return t.apply(e,arguments)}},getType:function(t){return Object.prototype.toString.apply(t).replace(/^\[object\s/,"").replace(/\]$/,"")},mouseAndTouchNormalize:function(t,e){if(t.clientX===void 0||t.clientX===null)if(t.clientX=0,t.clientY=0,t.touches!==void 0&&t.touches.length){if(t.touches[0].clientX!==void 0)t.clientX=t.touches[0].clientX,t.clientY=t.touches[0].clientY;else if(t.touches[0].pageX!==void 0){var o=e.getBoundingClientRect();t.clientX=t.touches[0].pageX-o.left,t.clientY=t.touches[0].pageY-o.top}}else t.originalEvent!==void 0&&t.originalEvent.clientX!==void 0&&(t.clientX=t.originalEvent.clientX,t.clientY=t.originalEvent.clientY)},isDblClick:function(t,e){if(t.detail===2)return!0;if(e!=null){var o=t.timeStamp-e.timeStamp,i=Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2));return o<250&&i<10}return!1},now:Date.now||function(){return new Date().getTime()},throttle:function(t,e,o){var i=this,s,n,a,r=null,l=0;o||(o={});var b=function(){l=o.leading===!1?0:i.now(),r=null,a=t.apply(s,n),r||(s=n=null)};return function(){var w=i.now();!l&&o.leading===!1&&(l=w);var g=e-(w-l);return s=this,n=arguments,g<=0||g>e?(clearTimeout(r),r=null,l=w,a=t.apply(s,n),r||(s=n=null)):!r&&o.trailing!==!1&&(r=setTimeout(b,g)),a}},createRequestAnimationFrame:function(t){var e=null;return t!=="auto"&&t<60&&t>1&&(e=Math.floor(1e3/t)),e===null?window.requestAnimationFrame||$(33):$(e)}};function $(t){return function(e){window.setTimeout(e,t)}}var k=W,ot="unknown";document.documentMode&&(ot="ie");var R={svgNS:"http://www.w3.org/2000/svg",xmlNS:"http://www.w3.org/XML/1998/namespace",xmlnsNS:"http://www.w3.org/2000/xmlns/",xlinkNS:"http://www.w3.org/1999/xlink",evNS:"http://www.w3.org/2001/xml-events",getBoundingClientRectNormalized:function(t){if(t.clientWidth&&t.clientHeight)return{width:t.clientWidth,height:t.clientHeight};if(t.getBoundingClientRect())return t.getBoundingClientRect();throw new Error("Cannot get BoundingClientRect for SVG.")},getOrCreateViewport:function(t,e){var o=null;if(k.isElement(e)?o=e:o=t.querySelector(e),!o){var i=Array.prototype.slice.call(t.childNodes||t.children).filter(function(l){return l.nodeName!=="defs"&&l.nodeName!=="#text"});i.length===1&&i[0].nodeName==="g"&&i[0].getAttribute("transform")===null&&(o=i[0])}if(!o){var s="viewport-"+new Date().toISOString().replace(/\D/g,"");o=document.createElementNS(this.svgNS,"g"),o.setAttribute("id",s);var n=t.childNodes||t.children;if(!!n&&n.length>0)for(var a=n.length;a>0;a--)n[n.length-a].nodeName!=="defs"&&o.appendChild(n[n.length-a]);t.appendChild(o)}var r=[];return o.getAttribute("class")&&(r=o.getAttribute("class").split(" ")),~r.indexOf("svg-pan-zoom_viewport")||(r.push("svg-pan-zoom_viewport"),o.setAttribute("class",r.join(" "))),o},setupSvgAttributes:function(t){if(t.setAttribute("xmlns",this.svgNS),t.setAttributeNS(this.xmlnsNS,"xmlns:xlink",this.xlinkNS),t.setAttributeNS(this.xmlnsNS,"xmlns:ev",this.evNS),t.parentNode!==null){var e=t.getAttribute("style")||"";e.toLowerCase().indexOf("overflow")===-1&&t.setAttribute("style","overflow: hidden; "+e)}},internetExplorerRedisplayInterval:300,refreshDefsGlobal:k.throttle(function(){for(var t=document.querySelectorAll("defs"),e=t.length,o=0;o<e;o++){var i=t[o];i.parentNode.insertBefore(i,i)}},j?j.internetExplorerRedisplayInterval:null),setCTM:function(t,e,o){var i=this,s="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")";t.setAttributeNS(null,"transform",s),"transform"in t.style?t.style.transform=s:"-ms-transform"in t.style?t.style["-ms-transform"]=s:"-webkit-transform"in t.style&&(t.style["-webkit-transform"]=s),ot==="ie"&&!!o&&(o.parentNode.insertBefore(o,o),window.setTimeout(function(){i.refreshDefsGlobal()},i.internetExplorerRedisplayInterval))},getEventPoint:function(t,e){var o=e.createSVGPoint();return k.mouseAndTouchNormalize(t,e),o.x=t.clientX,o.y=t.clientY,o},getSvgCenterPoint:function(t,e,o){return this.createSVGPoint(t,e/2,o/2)},createSVGPoint:function(t,e,o){var i=t.createSVGPoint();return i.x=e,i.y=o,i}},S=R,vt={enable:function(t){var e=t.svg.querySelector("defs");e||(e=document.createElementNS(S.svgNS,"defs"),t.svg.appendChild(e));var o=e.querySelector("style#svg-pan-zoom-controls-styles");if(!o){var i=document.createElementNS(S.svgNS,"style");i.setAttribute("id","svg-pan-zoom-controls-styles"),i.setAttribute("type","text/css"),i.textContent=".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",e.appendChild(i)}var s=document.createElementNS(S.svgNS,"g");s.setAttribute("id","svg-pan-zoom-controls"),s.setAttribute("transform","translate("+(t.width-70)+" "+(t.height-76)+") scale(0.75)"),s.setAttribute("class","svg-pan-zoom-control"),s.appendChild(this._createZoomIn(t)),s.appendChild(this._createZoomReset(t)),s.appendChild(this._createZoomOut(t)),t.svg.appendChild(s),t.controlIcons=s},_createZoomIn:function(t){var e=document.createElementNS(S.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-in"),e.setAttribute("transform","translate(30.5 5) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomIn()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomIn()},!1);var o=document.createElementNS(S.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var i=document.createElementNS(S.svgNS,"path");return i.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),i.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(i),e},_createZoomReset:function(t){var e=document.createElementNS(S.svgNS,"g");e.setAttribute("id","svg-pan-zoom-reset-pan-zoom"),e.setAttribute("transform","translate(5 35) scale(0.4)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().reset()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().reset()},!1);var o=document.createElementNS(S.svgNS,"rect");o.setAttribute("x","2"),o.setAttribute("y","2"),o.setAttribute("width","182"),o.setAttribute("height","58"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var i=document.createElementNS(S.svgNS,"path");i.setAttribute("d","M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),i.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(i);var s=document.createElementNS(S.svgNS,"path");return s.setAttribute("d","M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),s.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(s),e},_createZoomOut:function(t){var e=document.createElementNS(S.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-out"),e.setAttribute("transform","translate(30.5 70) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomOut()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomOut()},!1);var o=document.createElementNS(S.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var i=document.createElementNS(S.svgNS,"path");return i.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),i.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(i),e},disable:function(t){t.controlIcons&&(t.controlIcons.parentNode.removeChild(t.controlIcons),t.controlIcons=null)}},gt=R,P=W,f=function(t,e){this.init(t,e)};f.prototype.init=function(t,e){this.viewport=t,this.options=e,this.originalState={zoom:1,x:0,y:0},this.activeState={zoom:1,x:0,y:0},this.updateCTMCached=P.proxy(this.updateCTM,this),this.requestAnimationFrame=P.createRequestAnimationFrame(this.options.refreshRate),this.viewBox={x:0,y:0,width:0,height:0},this.cacheViewBox();var o=this.processCTM();this.setCTM(o),this.updateCTM()};f.prototype.cacheViewBox=function(){var t=this.options.svg.getAttribute("viewBox");if(t){var e=t.split(/[\s\,]/).filter(function(i){return i}).map(parseFloat);this.viewBox.x=e[0],this.viewBox.y=e[1],this.viewBox.width=e[2],this.viewBox.height=e[3];var o=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height);this.activeState.zoom=o,this.activeState.x=(this.options.width-this.viewBox.width*o)/2,this.activeState.y=(this.options.height-this.viewBox.height*o)/2,this.updateCTMOnNextFrame(),this.options.svg.removeAttribute("viewBox")}else this.simpleViewBoxCache()};f.prototype.simpleViewBoxCache=function(){var t=this.viewport.getBBox();this.viewBox.x=t.x,this.viewBox.y=t.y,this.viewBox.width=t.width,this.viewBox.height=t.height};f.prototype.getViewBox=function(){return P.extend({},this.viewBox)};f.prototype.processCTM=function(){var t=this.getCTM();if(this.options.fit||this.options.contain){var e;this.options.fit?e=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height):e=Math.max(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height),t.a=e,t.d=e,t.e=-this.viewBox.x*e,t.f=-this.viewBox.y*e}if(this.options.center){var o=(this.options.width-(this.viewBox.width+this.viewBox.x*2)*t.a)*.5,i=(this.options.height-(this.viewBox.height+this.viewBox.y*2)*t.a)*.5;t.e=o,t.f=i}return this.originalState.zoom=t.a,this.originalState.x=t.e,this.originalState.y=t.f,t};f.prototype.getOriginalState=function(){return P.extend({},this.originalState)};f.prototype.getState=function(){return P.extend({},this.activeState)};f.prototype.getZoom=function(){return this.activeState.zoom};f.prototype.getRelativeZoom=function(){return this.activeState.zoom/this.originalState.zoom};f.prototype.computeRelativeZoom=function(t){return t/this.originalState.zoom};f.prototype.getPan=function(){return{x:this.activeState.x,y:this.activeState.y}};f.prototype.getCTM=function(){var t=this.options.svg.createSVGMatrix();return t.a=this.activeState.zoom,t.b=0,t.c=0,t.d=this.activeState.zoom,t.e=this.activeState.x,t.f=this.activeState.y,t};f.prototype.setCTM=function(t){var e=this.isZoomDifferent(t),o=this.isPanDifferent(t);if(e||o){if(e&&(this.options.beforeZoom(this.getRelativeZoom(),this.computeRelativeZoom(t.a))===!1?(t.a=t.d=this.activeState.zoom,e=!1):(this.updateCache(t),this.options.onZoom(this.getRelativeZoom()))),o){var i=this.options.beforePan(this.getPan(),{x:t.e,y:t.f}),s=!1,n=!1;i===!1?(t.e=this.getPan().x,t.f=this.getPan().y,s=n=!0):P.isObject(i)&&(i.x===!1?(t.e=this.getPan().x,s=!0):P.isNumber(i.x)&&(t.e=i.x),i.y===!1?(t.f=this.getPan().y,n=!0):P.isNumber(i.y)&&(t.f=i.y)),s&&n||!this.isPanDifferent(t)?o=!1:(this.updateCache(t),this.options.onPan(this.getPan()))}(e||o)&&this.updateCTMOnNextFrame()}};f.prototype.isZoomDifferent=function(t){return this.activeState.zoom!==t.a};f.prototype.isPanDifferent=function(t){return this.activeState.x!==t.e||this.activeState.y!==t.f};f.prototype.updateCache=function(t){this.activeState.zoom=t.a,this.activeState.x=t.e,this.activeState.y=t.f};f.prototype.pendingUpdate=!1;f.prototype.updateCTMOnNextFrame=function(){this.pendingUpdate||(this.pendingUpdate=!0,this.requestAnimationFrame.call(window,this.updateCTMCached))};f.prototype.updateCTM=function(){var t=this.getCTM();gt.setCTM(this.viewport,t,this.defs),this.pendingUpdate=!1,this.options.onUpdatedCTM&&this.options.onUpdatedCTM(t)};var bt=function(t,e){return new f(t,e)},it=dt,U=vt,M=W,Z=R,wt=bt,c=function(t,e){this.init(t,e)},yt={viewportSelector:".svg-pan-zoom_viewport",panEnabled:!0,controlIconsEnabled:!1,zoomEnabled:!0,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!0,preventMouseEventsDefault:!0,zoomScaleSensitivity:.1,minZoom:.5,maxZoom:10,fit:!0,contain:!1,center:!0,refreshRate:"auto",beforeZoom:null,onZoom:null,beforePan:null,onPan:null,customEventsHandler:null,eventsListenerElement:null,onUpdatedCTM:null},nt={passive:!0};c.prototype.init=function(t,e){var o=this;this.svg=t,this.defs=t.querySelector("defs"),Z.setupSvgAttributes(this.svg),this.options=M.extend(M.extend({},yt),e),this.state="none";var i=Z.getBoundingClientRectNormalized(t);this.width=i.width,this.height=i.height,this.viewport=wt(Z.getOrCreateViewport(this.svg,this.options.viewportSelector),{svg:this.svg,width:this.width,height:this.height,fit:this.options.fit,contain:this.options.contain,center:this.options.center,refreshRate:this.options.refreshRate,beforeZoom:function(n,a){if(o.viewport&&o.options.beforeZoom)return o.options.beforeZoom(n,a)},onZoom:function(n){if(o.viewport&&o.options.onZoom)return o.options.onZoom(n)},beforePan:function(n,a){if(o.viewport&&o.options.beforePan)return o.options.beforePan(n,a)},onPan:function(n){if(o.viewport&&o.options.onPan)return o.options.onPan(n)},onUpdatedCTM:function(n){if(o.viewport&&o.options.onUpdatedCTM)return o.options.onUpdatedCTM(n)}});var s=this.getPublicInstance();s.setBeforeZoom(this.options.beforeZoom),s.setOnZoom(this.options.onZoom),s.setBeforePan(this.options.beforePan),s.setOnPan(this.options.onPan),s.setOnUpdatedCTM(this.options.onUpdatedCTM),this.options.controlIconsEnabled&&U.enable(this),this.lastMouseWheelEventTime=Date.now(),this.setupHandlers()};c.prototype.setupHandlers=function(){var t=this,e=null;if(this.eventListeners={mousedown:function(n){var a=t.handleMouseDown(n,e);return e=n,a},touchstart:function(n){var a=t.handleMouseDown(n,e);return e=n,a},mouseup:function(n){return t.handleMouseUp(n)},touchend:function(n){return t.handleMouseUp(n)},mousemove:function(n){return t.handleMouseMove(n)},touchmove:function(n){return t.handleMouseMove(n)},mouseleave:function(n){return t.handleMouseUp(n)},touchleave:function(n){return t.handleMouseUp(n)},touchcancel:function(n){return t.handleMouseUp(n)}},this.options.customEventsHandler!=null){this.options.customEventsHandler.init({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()});var o=this.options.customEventsHandler.haltEventListeners;if(o&&o.length)for(var i=o.length-1;i>=0;i--)this.eventListeners.hasOwnProperty(o[i])&&delete this.eventListeners[o[i]]}for(var s in this.eventListeners)(this.options.eventsListenerElement||this.svg).addEventListener(s,this.eventListeners[s],this.options.preventMouseEventsDefault?!1:nt);this.options.mouseWheelZoomEnabled&&(this.options.mouseWheelZoomEnabled=!1,this.enableMouseWheelZoom())};c.prototype.enableMouseWheelZoom=function(){if(!this.options.mouseWheelZoomEnabled){var t=this;this.wheelListener=function(o){return t.handleMouseWheel(o)};var e=!this.options.preventMouseEventsDefault;it.on(this.options.eventsListenerElement||this.svg,this.wheelListener,e),this.options.mouseWheelZoomEnabled=!0}};c.prototype.disableMouseWheelZoom=function(){if(this.options.mouseWheelZoomEnabled){var t=!this.options.preventMouseEventsDefault;it.off(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!1}};c.prototype.handleMouseWheel=function(t){if(!(!this.options.zoomEnabled||this.state!=="none")){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var e=t.deltaY||1,o=Date.now()-this.lastMouseWheelEventTime,i=3+Math.max(0,30-o);this.lastMouseWheelEventTime=Date.now(),"deltaMode"in t&&t.deltaMode===0&&t.wheelDelta&&(e=t.deltaY===0?0:Math.abs(t.wheelDelta)/t.deltaY),e=-.3<e&&e<.3?e:(e>0?1:-1)*Math.log(Math.abs(e)+10)/i;var s=this.svg.getScreenCTM().inverse(),n=Z.getEventPoint(t,this.svg).matrixTransform(s),a=Math.pow(1+this.options.zoomScaleSensitivity,-1*e);this.zoomAtPoint(a,n)}};c.prototype.zoomAtPoint=function(t,e,o){var i=this.viewport.getOriginalState();o?(t=Math.max(this.options.minZoom*i.zoom,Math.min(this.options.maxZoom*i.zoom,t)),t=t/this.getZoom()):this.getZoom()*t<this.options.minZoom*i.zoom?t=this.options.minZoom*i.zoom/this.getZoom():this.getZoom()*t>this.options.maxZoom*i.zoom&&(t=this.options.maxZoom*i.zoom/this.getZoom());var s=this.viewport.getCTM(),n=e.matrixTransform(s.inverse()),a=this.svg.createSVGMatrix().translate(n.x,n.y).scale(t).translate(-n.x,-n.y),r=s.multiply(a);r.a!==s.a&&this.viewport.setCTM(r)};c.prototype.zoom=function(t,e){this.zoomAtPoint(t,Z.getSvgCenterPoint(this.svg,this.width,this.height),e)};c.prototype.publicZoom=function(t,e){e&&(t=this.computeFromRelativeZoom(t)),this.zoom(t,e)};c.prototype.publicZoomAtPoint=function(t,e,o){if(o&&(t=this.computeFromRelativeZoom(t)),M.getType(e)!=="SVGPoint")if("x"in e&&"y"in e)e=Z.createSVGPoint(this.svg,e.x,e.y);else throw new Error("Given point is invalid");this.zoomAtPoint(t,e,o)};c.prototype.getZoom=function(){return this.viewport.getZoom()};c.prototype.getRelativeZoom=function(){return this.viewport.getRelativeZoom()};c.prototype.computeFromRelativeZoom=function(t){return t*this.viewport.getOriginalState().zoom};c.prototype.resetZoom=function(){var t=this.viewport.getOriginalState();this.zoom(t.zoom,!0)};c.prototype.resetPan=function(){this.pan(this.viewport.getOriginalState())};c.prototype.reset=function(){this.resetZoom(),this.resetPan()};c.prototype.handleDblClick=function(t){if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.options.controlIconsEnabled){var e=t.target.getAttribute("class")||"";if(e.indexOf("svg-pan-zoom-control")>-1)return!1}var o;t.shiftKey?o=1/((1+this.options.zoomScaleSensitivity)*2):o=(1+this.options.zoomScaleSensitivity)*2;var i=Z.getEventPoint(t,this.svg).matrixTransform(this.svg.getScreenCTM().inverse());this.zoomAtPoint(o,i)};c.prototype.handleMouseDown=function(t,e){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),M.mouseAndTouchNormalize(t,this.svg),this.options.dblClickZoomEnabled&&M.isDblClick(t,e)?this.handleDblClick(t):(this.state="pan",this.firstEventCTM=this.viewport.getCTM(),this.stateOrigin=Z.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()))};c.prototype.handleMouseMove=function(t){if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.state==="pan"&&this.options.panEnabled){var e=Z.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()),o=this.firstEventCTM.translate(e.x-this.stateOrigin.x,e.y-this.stateOrigin.y);this.viewport.setCTM(o)}};c.prototype.handleMouseUp=function(t){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.state==="pan"&&(this.state="none")};c.prototype.fit=function(){var t=this.viewport.getViewBox(),e=Math.min(this.width/t.width,this.height/t.height);this.zoom(e,!0)};c.prototype.contain=function(){var t=this.viewport.getViewBox(),e=Math.max(this.width/t.width,this.height/t.height);this.zoom(e,!0)};c.prototype.center=function(){var t=this.viewport.getViewBox(),e=(this.width-(t.width+t.x*2)*this.getZoom())*.5,o=(this.height-(t.height+t.y*2)*this.getZoom())*.5;this.getPublicInstance().pan({x:e,y:o})};c.prototype.updateBBox=function(){this.viewport.simpleViewBoxCache()};c.prototype.pan=function(t){var e=this.viewport.getCTM();e.e=t.x,e.f=t.y,this.viewport.setCTM(e)};c.prototype.panBy=function(t){var e=this.viewport.getCTM();e.e+=t.x,e.f+=t.y,this.viewport.setCTM(e)};c.prototype.getPan=function(){var t=this.viewport.getState();return{x:t.x,y:t.y}};c.prototype.resize=function(){var t=Z.getBoundingClientRectNormalized(this.svg);this.width=t.width,this.height=t.height;var e=this.viewport;e.options.width=this.width,e.options.height=this.height,e.processCTM(),this.options.controlIconsEnabled&&(this.getPublicInstance().disableControlIcons(),this.getPublicInstance().enableControlIcons())};c.prototype.destroy=function(){var t=this;this.beforeZoom=null,this.onZoom=null,this.beforePan=null,this.onPan=null,this.onUpdatedCTM=null,this.options.customEventsHandler!=null&&this.options.customEventsHandler.destroy({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()});for(var e in this.eventListeners)(this.options.eventsListenerElement||this.svg).removeEventListener(e,this.eventListeners[e],this.options.preventMouseEventsDefault?!1:nt);this.disableMouseWheelZoom(),this.getPublicInstance().disableControlIcons(),this.reset(),z=z.filter(function(o){return o.svg!==t.svg}),delete this.options,delete this.viewport,delete this.publicInstance,delete this.pi,this.getPublicInstance=function(){return null}};c.prototype.getPublicInstance=function(){var t=this;return this.publicInstance||(this.publicInstance=this.pi={enablePan:function(){return t.options.panEnabled=!0,t.pi},disablePan:function(){return t.options.panEnabled=!1,t.pi},isPanEnabled:function(){return!!t.options.panEnabled},pan:function(e){return t.pan(e),t.pi},panBy:function(e){return t.panBy(e),t.pi},getPan:function(){return t.getPan()},setBeforePan:function(e){return t.options.beforePan=e===null?null:M.proxy(e,t.publicInstance),t.pi},setOnPan:function(e){return t.options.onPan=e===null?null:M.proxy(e,t.publicInstance),t.pi},enableZoom:function(){return t.options.zoomEnabled=!0,t.pi},disableZoom:function(){return t.options.zoomEnabled=!1,t.pi},isZoomEnabled:function(){return!!t.options.zoomEnabled},enableControlIcons:function(){return t.options.controlIconsEnabled||(t.options.controlIconsEnabled=!0,U.enable(t)),t.pi},disableControlIcons:function(){return t.options.controlIconsEnabled&&(t.options.controlIconsEnabled=!1,U.disable(t)),t.pi},isControlIconsEnabled:function(){return!!t.options.controlIconsEnabled},enableDblClickZoom:function(){return t.options.dblClickZoomEnabled=!0,t.pi},disableDblClickZoom:function(){return t.options.dblClickZoomEnabled=!1,t.pi},isDblClickZoomEnabled:function(){return!!t.options.dblClickZoomEnabled},enableMouseWheelZoom:function(){return t.enableMouseWheelZoom(),t.pi},disableMouseWheelZoom:function(){return t.disableMouseWheelZoom(),t.pi},isMouseWheelZoomEnabled:function(){return!!t.options.mouseWheelZoomEnabled},setZoomScaleSensitivity:function(e){return t.options.zoomScaleSensitivity=e,t.pi},setMinZoom:function(e){return t.options.minZoom=e,t.pi},setMaxZoom:function(e){return t.options.maxZoom=e,t.pi},setBeforeZoom:function(e){return t.options.beforeZoom=e===null?null:M.proxy(e,t.publicInstance),t.pi},setOnZoom:function(e){return t.options.onZoom=e===null?null:M.proxy(e,t.publicInstance),t.pi},zoom:function(e){return t.publicZoom(e,!0),t.pi},zoomBy:function(e){return t.publicZoom(e,!1),t.pi},zoomAtPoint:function(e,o){return t.publicZoomAtPoint(e,o,!0),t.pi},zoomAtPointBy:function(e,o){return t.publicZoomAtPoint(e,o,!1),t.pi},zoomIn:function(){return this.zoomBy(1+t.options.zoomScaleSensitivity),t.pi},zoomOut:function(){return this.zoomBy(1/(1+t.options.zoomScaleSensitivity)),t.pi},getZoom:function(){return t.getRelativeZoom()},setOnUpdatedCTM:function(e){return t.options.onUpdatedCTM=e===null?null:M.proxy(e,t.publicInstance),t.pi},resetZoom:function(){return t.resetZoom(),t.pi},resetPan:function(){return t.resetPan(),t.pi},reset:function(){return t.reset(),t.pi},fit:function(){return t.fit(),t.pi},contain:function(){return t.contain(),t.pi},center:function(){return t.center(),t.pi},updateBBox:function(){return t.updateBBox(),t.pi},resize:function(){return t.resize(),t.pi},getSizes:function(){return{width:t.width,height:t.height,realZoom:t.getZoom(),viewBox:t.viewport.getViewBox()}},destroy:function(){return t.destroy(),t.pi}}),this.publicInstance};var z=[],St=function(t,e){var o=M.getSvg(t);if(o===null)return null;for(var i=z.length-1;i>=0;i--)if(z[i].svg===o)return z[i].instance.getPublicInstance();return z.push({svg:o,instance:new c(o,e)}),z[z.length-1].instance.getPublicInstance()},xt=St;function tt(t){let e,o=t[5].error+"",i;return{c(){e=D("div"),i=B(o),this.h()},l(s){e=I(s,"DIV",{class:!0,id:!0});var n=_(e);i=N(n,o),n.forEach(E),this.h()},h(){C(e,"class","p-2 text-red-600"),C(e,"id","errorContainer")},m(s,n){L(s,e,n),x(e,i)},p(s,n){n&32&&o!==(o=s[5].error+"")&&ct(i,o)},d(s){s&&E(e)}}}function et(t){let e,o,i,s,n,a,r,l,b,w;return{c(){e=D("div"),o=B("Diagram out of sync. "),i=D("br"),s=B(`
		Press `),n=D("i"),a=B(" (Sync button) or "),r=D("kbd"),l=B(J),b=B(" + Enter"),w=B(" to sync."),this.h()},l(g){e=I(g,"DIV",{class:!0});var d=_(e);o=N(d,"Diagram out of sync. "),i=I(d,"BR",{}),s=N(d,`
		Press `),n=I(d,"I",{class:!0}),_(n).forEach(E),a=N(d," (Sync button) or "),r=I(d,"KBD",{});var p=_(r);l=N(p,J),b=N(p," + Enter"),p.forEach(E),w=N(d," to sync."),d.forEach(E),this.h()},h(){C(n,"class","fas fa-sync"),C(e,"class","absolute w-full p-2 z-10 text-yellow-600 bg-base-100 bg-opacity-80 text-center")},m(g,d){L(g,e,d),x(e,o),x(e,i),x(e,s),x(e,n),x(e,a),x(e,r),x(r,l),x(r,b),x(e,w)},p:q,d(g){g&&E(e)}}}function Et(t){let e,o,i,s,n=t[2]&&t[5].error instanceof Error&&tt(t),a=t[3]&&et();return{c(){n&&n.c(),e=G(),a&&a.c(),o=G(),i=D("div"),s=D("div"),this.h()},l(r){n&&n.l(r),e=X(r),a&&a.l(r),o=X(r),i=I(r,"DIV",{id:!0,class:!0});var l=_(i);s=I(l,"DIV",{id:!0,class:!0}),_(s).forEach(E),l.forEach(E),this.h()},h(){C(s,"id","container"),C(s,"class","h-full overflow-auto svelte-1ewr4tw"),V(s,"hide",t[4]),C(i,"id","view"),C(i,"class","p-2 h-full svelte-1ewr4tw"),V(i,"error",t[2]),V(i,"outOfSync",t[3])},m(r,l){n&&n.m(r,l),L(r,e,l),a&&a.m(r,l),L(r,o,l),L(r,i,l),x(i,s),t[6](s),t[7](i)},p(r,[l]){r[2]&&r[5].error instanceof Error?n?n.p(r,l):(n=tt(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),r[3]?a?a.p(r,l):(a=et(),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null),l&16&&V(s,"hide",r[4]),l&4&&V(i,"error",r[2]),l&8&&V(i,"outOfSync",r[3])},i:q,o:q,d(r){n&&n.d(r),r&&E(e),a&&a.d(r),r&&E(o),r&&E(i),t[6](null),t[7](null)}}}function Mt(t,e,o){let i,s;F(t,Y,h=>o(5,i=h)),F(t,K,h=>o(13,s=h));let n="",a="",r,l,b=!1,w=!1,g=!1,d=!0,p=i.panZoom,u;const v=()=>{const h=u.getPan(),A=u.getZoom();ft({pan:h,zoom:A}),mt("panZoom")},m=h=>{!h.panZoom||(o(4,g=!0),u==null||u.destroy(),u=void 0,Promise.resolve().then(()=>{const A=document.getElementById("graph-div");u=xt(A,{onPan:v,onZoom:v,controlIconsEnabled:!0,fit:!0,center:!0});const{pan:O,zoom:T}=h;O!==void 0&&T!==void 0&&Number.isFinite(T)&&(u.zoom(T),u.pan(O)),o(4,g=!1)}))},y=h=>{if(h.error!==void 0){o(2,b=!0);return}o(2,b=!1);try{if(r&&h&&(h.updateDiagram||h.autoSync)){if(h.autoSync||pt(K,s.updateDiagram=!1,s),o(3,w=!1),d=!0,n===h.code&&a===h.mermaid&&p===h.panZoom)return;n=h.code,a=h.mermaid,p=h.panZoom;const A=l.parentElement.scrollTop;delete r.dataset.processed,Q.initialize(Object.assign({},JSON.parse(h.mermaid))),Q.render("graph-div",n,O=>{if(O.length>0){m(h),o(0,r.innerHTML=O,r);const T=document.getElementById("graph-div");T.setAttribute("height","100%"),T.style.maxWidth="100%"}}),o(1,l.parentElement.scrollTop=A,l),o(2,b=!1)}else d?d=!1:(n!==h.code||a!==h.mermaid)&&o(3,w=!0)}catch(A){console.error("view fail",A),o(2,b=!0)}};ht(()=>{Y.subscribe(h=>{y(h)}),window.addEventListener("resize",()=>{i.panZoom&&u&&u.resize()})});function st(h){H[h?"unshift":"push"](()=>{r=h,o(0,r)})}function rt(h){H[h?"unshift":"push"](()=>{l=h,o(1,l)})}return[r,l,b,w,g,i,st,rt]}class Ct extends at{constructor(e){super(),lt(this,e,Mt,Et,ut,{})}}export{Ct as V};
