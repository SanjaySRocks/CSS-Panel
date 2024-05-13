"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3558],{20531:function(e,t,r){r.d(t,{u:function(){return o}});var n=r(58958),l=r(48695),s=r(24572),a=r(52162),u=r(94773),i=(0,l.Gp)((e,t)=>{var r;let{as:l,className:i,children:o,...c}=e,h=(0,s.gy)(t),{slots:f,classNames:p}=(0,n.R)(),g=(0,a.W)(null==p?void 0:p.header,i);return(0,u.jsx)(l||"div",{ref:h,className:null==(r=f.header)?void 0:r.call(f,{class:g}),...c,children:o})});i.displayName="NextUI.CardHeader";var o=i},34766:function(e,t,r){r.d(t,{v1:function(){return N}});var n,l="object"==typeof localStorage&&(localStorage.getItem("debug")?.includes("next-usequerystate")||localStorage.getItem("debug")?.includes("nuqs"))||!1;function s(e,...t){if(!l)return;let r=function(e,...t){return e.replace(/%[sfdO]/g,e=>{let r=t.shift();return"%O"===e&&r?JSON.stringify(r).replace(/"([^"]+)":/g,"$1:"):String(r)})}(e,...t);performance.mark(r),console.log(e,...t)}function a(e,t,r){try{return e(t)}catch(e){return!function(e,...t){l&&console.warn(e,...t)}("[nuqs] Error while parsing value `%s`: %O"+(r?" (for key `%s`)":""),t,e,r),null}}function u(e){function t(t){if(void 0===t)return null;let r="";if(Array.isArray(t)){if(void 0===t[0])return null;r=t[0]}return"string"==typeof t&&(r=t),a(e.parse,r)}return{eq:(e,t)=>e===t,...e,parseServerSide:t,withDefault(e){return{...this,defaultValue:e,parseServerSide:r=>t(r)??e}},withOptions(e){return{...this,...e}}}}u({parse:e=>e,serialize:e=>`${e}`}),u({parse:e=>{let t=parseInt(e);return Number.isNaN(t)?null:t},serialize:e=>Math.round(e).toFixed()}),u({parse:e=>{let t=parseInt(e,16);return Number.isNaN(t)?null:t},serialize:e=>{let t=Math.round(e).toString(16);return t.padStart(t.length+t.length%2,"0")}}),u({parse:e=>{let t=parseFloat(e);return Number.isNaN(t)?null:t},serialize:e=>e.toString()}),u({parse:e=>"true"===e,serialize:e=>e?"true":"false"}),u({parse:e=>{let t=parseInt(e);return Number.isNaN(t)?null:new Date(t)},serialize:e=>e.valueOf().toString()}),u({parse:e=>{let t=new Date(e);return Number.isNaN(t.valueOf())?null:t},serialize:e=>e.toISOString()});var i={409:"Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using `%s`, but `%s` was about to load on top.",429:"URL update rate-limited by the browser. Consider increasing `throttleMs` for key(s) `%s`. %O",500:"Empty search params cache. Search params can't be accessed in Layouts.",501:"Search params cache already populated. Have you called `parse` twice?"};function o(e){return`[nuqs] ${i[e]}
  See https://err.47ng.com/NUQS-${e}`}var c=r(42778),h=r(44208),f=function(){if("undefined"==typeof window||!window.GestureEvent)return 50;try{let e=navigator.userAgent?.match(/version\/([\d\.]+) safari/i);return parseFloat(e[1])>=17?120:320}catch{return 320}}(),p=new Map,g={history:"replace",scroll:!1,shallow:!0,throttleMs:f},d=new Set,y=0,m=null;function w(e){return p.get(e)??null}function S(e,t){return(e.split("#")[0]??"")+function(e){if(0===e.size)return"";let t=[];for(let[r,n]of e.entries())t.push(`${r}=${n.replace(/%/g,"%25").replace(/\+/g,"%2B").replace(/ /g,"+").replace(/#/g,"%23").replace(/&/g,"%26").replace(/"/g,"%22").replace(/'/g,"%27").replace(/`/g,"%60").replace(/</g,"%3C").replace(/>/g,"%3E")}`);return"?"+t.join("&")}(t)+location.hash}var q=Symbol("__nuqs__SYNC__"),v="__nuqs__NO_SYNC__",b=Symbol("__nuqs__NOTIFY__"),_={all:n=n||new Map,on:function(e,t){var r=n.get(e);r?r.push(t):n.set(e,[t])},off:function(e,t){var r=n.get(e);r&&(t?r.splice(r.indexOf(t)>>>0,1):n.set(e,[]))},emit:function(e,t){var r=n.get(e);r&&r.slice().map(function(e){e(t)}),(r=n.get("*"))&&r.slice().map(function(r){r(e,t)})}};function N(e,{history:t="replace",shallow:r=!0,scroll:n=!1,throttleMs:l=f,parse:u=e=>e,serialize:i=String,eq:b=(e,t)=>e===t,defaultValue:N,clearOnDefault:O=!1,startTransition:M}={history:"replace",scroll:!1,shallow:!0,throttleMs:f,parse:e=>e,serialize:String,eq:(e,t)=>e===t,clearOnDefault:!1,defaultValue:void 0}){let x=(0,c.useRouter)(),T=(0,c.useSearchParams)(),[I,E]=h.useState(()=>{let t=w(e),r=T?.get(e)??null,n=t??r;return null===n?null:a(u,n,e)}),P=h.useRef(I);s("[nuqs `%s`] render - state: %O, iSP: %s",e,I,T?.get(e)??null),h.useEffect(()=>{if(window.next?.version!=="14.0.3")return;let t=T.get(e)??null,r=null===t?null:a(u,t,e);s("[nuqs `%s`] syncFromUseSearchParams %O",e,r),P.current=r,E(r)},[T?.get(e),e]),h.useInsertionEffect(()=>{function t(t){s("[nuqs `%s`] updateInternalState %O",e,t),P.current=t,E(t)}function r(r){let n=r.get(e)??null,l=null===n?null:a(u,n,e);s("[nuqs `%s`] syncFromURL %O",e,l),t(l)}return s("[nuqs `%s`] subscribing to sync",e),_.on(q,r),_.on(e,t),()=>{s("[nuqs `%s`] unsubscribing from sync",e),_.off(q,r),_.off(e,t)}},[e]);let k=h.useCallback((a,u={})=>{let c="function"==typeof a?a(P.current??N??null):a;return(u.clearOnDefault||O)&&null!==c&&void 0!==N&&b(c,N)&&(c=null),_.emit(e,c),!function(e,t,r,n){let l=null===t?null:r(t);s("[nuqs queue] Enqueueing %s=%s %O",e,l,n),p.set(e,l),"push"===n.history&&(g.history="push"),n.scroll&&(g.scroll=!0),!1===n.shallow&&(g.shallow=!1),n.startTransition&&(d.add(n.startTransition),g.shallow=!1),g.throttleMs=Math.max(n.throttleMs??f,Number.isFinite(g.throttleMs)?g.throttleMs:0)}(e,c,i,{history:u.history??t,shallow:u.shallow??r,scroll:u.scroll??n,throttleMs:u.throttleMs??l,startTransition:u.startTransition??M}),null===m&&(m=new Promise((e,t)=>{if(!Number.isFinite(g.throttleMs)){s("[nuqs queue] Skipping flush due to throttleMs=Infinity"),e(new URLSearchParams(location.search)),setTimeout(()=>{m=null},0);return}function r(){y=performance.now();let[r,n]=function(e){let t=new URLSearchParams(location.search);if(0===p.size)return[t,null];let r=Array.from(p.entries()),n={...g},l=Array.from(d);for(let[e,l]of(p.clear(),d.clear(),g.history="replace",g.scroll=!1,g.shallow=!0,g.throttleMs=f,s("[nuqs queue] Flushing queue %O with options %O",r,n),r))null===l?t.delete(e):t.set(e,l);try{let r=window.next?.router;if("string"==typeof r?.state?.asPath){let e=S(r.state.asPath.split("?")[0]??"",t);s("[nuqs queue (pages)] Updating url: %s",e),("push"===n.history?r.push:r.replace).call(r,e,e,{scroll:n.scroll,shallow:n.shallow})}else{let r=S(location.origin+location.pathname,t);s("[nuqs queue (app)] Updating url: %s",r);let a="push"===n.history?history.pushState:history.replaceState,u=(window.next?.version??"")>="14.1.0"?null:history.state;a.call(history,u,v,r),n.scroll&&window.scrollTo(0,0),n.shallow||function(e,t){let r=n=>{if(n===e.length)return t();let l=e[n];if(!l)throw Error("Invalid transition function");l(()=>r(n+1))};r(0)}(l,()=>{e.replace(r,{scroll:!1})})}return[t,null]}catch(e){return console.error(o(429),r.map(([e])=>e).join(),e),[t,e]}}(x);null===n?e(r):t(r),m=null}setTimeout(function(){let e=performance.now()-y,t=g.throttleMs,n=Math.max(0,Math.min(t,t-e));s("[nuqs queue] Scheduling flush in %f ms. Throttled at %f ms",n,t),0===n?r():setTimeout(r,n)},0)})),m},[e,t,r,n,l,M]);return[I??N??null,k]}"object"==typeof history&&function(){let e="1.17.2",t=history.__nuqs_patched;if(t){t!==e&&console.error(o(409),t,e);return}for(let t of(s("[nuqs] Patching history with %s",e),["pushState","replaceState"])){let e=history[t].bind(history);history[t]=function(r,n,l){if(!l)return s("[nuqs] history.%s(null) (%s) %O",t,n,r),e(r,n,l);let a=n===v?"internal":"external",u=new URL(l,location.origin).searchParams;if(s("[nuqs] history.%s(%s) (%s) %O",t,l,a,r),"external"===a){for(let[e,t]of u.entries()){let r=w(e);null!==r&&r!==t&&(s("[nuqs] Overwrite detected for key: %s, Server: %s, queue: %s",e,t,r),u.set(e,r))}setTimeout(()=>{s("[nuqs] External history.%s call: triggering sync with %s",t,u),_.emit(q,u),_.emit(b,{search:u,source:a})},0)}else setTimeout(()=>{_.emit(b,{search:u,source:a})},0);return e(r,n===v?"":n,l)}}Object.defineProperty(history,"__nuqs_patched",{value:e,writable:!1,enumerable:!1,configurable:!1})}()}}]);