"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6634],{85287:function(e,t,n){n.d(t,{MT:function(){return u},E7:function(){return E},QL:function(){return S},cW:function(){return g}});var r=n(56615),l=n(32916),o=n(74472),i=n(44208);let s=i.createContext(null),c=null;function u(e){let t,n,{children:r,contain:u,restoreFocus:a,autoFocus:d}=e,f=(0,i.useRef)(null),g=(0,i.useRef)(null),E=(0,i.useRef)([]),{parentNode:w}=(0,i.useContext)(s)||{},T=(0,i.useMemo)(()=>new N({scopeRef:E}),[E]);(0,o.b)(()=>{let e=w||k.root;if(k.getTreeNode(e.scopeRef)&&c&&!m(c,e.scopeRef)){let t=k.getTreeNode(c);t&&(e=t)}e.addChild(T),k.addNode(T)},[T,w]),(0,o.b)(()=>{let e=k.getTreeNode(E);e&&(e.contain=!!u)},[u]),(0,o.b)(()=>{var e;let t=null===(e=f.current)||void 0===e?void 0:e.nextSibling,n=[];for(;t&&t!==g.current;)n.push(t),t=t.nextSibling;E.current=n},[r]),(0,o.b)(()=>{if(a||u)return;let e=E.current,t=(0,l.r)(e?e[0]:void 0),n=e=>{let t=e.target;h(t,E.current)?c=E:v(t)||(c=null)};return t.addEventListener("focusin",n,!1),null==e||e.forEach(e=>e.addEventListener("focusin",n,!1)),()=>{t.removeEventListener("focusin",n,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",n,!1))}},[E,a,u]),t=(0,i.useRef)(),n=(0,i.useRef)(),(0,o.b)(()=>{let e=E.current;if(!u){n.current&&(cancelAnimationFrame(n.current),n.current=void 0);return}let r=(0,l.r)(e?e[0]:void 0),o=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!y(E)||e.isComposing)return;let t=r.activeElement,n=E.current;if(!n||!h(t,n))return;let l=S(p(n),{tabbable:!0},n);if(!t)return;l.currentNode=t;let o=e.shiftKey?l.previousNode():l.nextNode();o||(l.currentNode=e.shiftKey?n[n.length-1].nextElementSibling:n[0].previousElementSibling,o=e.shiftKey?l.previousNode():l.nextNode()),e.preventDefault(),o&&b(o,!0)},i=e=>{(!c||m(c,E))&&h(e.target,E.current)?(c=E,t.current=e.target):y(E)&&!v(e.target,E)?t.current?t.current.focus():c&&c.current&&K(c.current):y(E)&&(t.current=e.target)},s=e=>{n.current&&cancelAnimationFrame(n.current),n.current=requestAnimationFrame(()=>{if(r.activeElement&&y(E)&&!v(r.activeElement,E)){if(c=E,r.body.contains(e.target)){var n;t.current=e.target,null===(n=t.current)||void 0===n||n.focus()}else c.current&&K(c.current)}})};return r.addEventListener("keydown",o,!1),r.addEventListener("focusin",i,!1),null==e||e.forEach(e=>e.addEventListener("focusin",i,!1)),null==e||e.forEach(e=>e.addEventListener("focusout",s,!1)),()=>{r.removeEventListener("keydown",o,!1),r.removeEventListener("focusin",i,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",i,!1)),null==e||e.forEach(e=>e.removeEventListener("focusout",s,!1))}},[E,u]),(0,o.b)(()=>()=>{n.current&&cancelAnimationFrame(n.current)},[n]),function(e,t,n){let r=(0,i.useRef)("undefined"!=typeof document?(0,l.r)(e.current?e.current[0]:void 0).activeElement:null);(0,o.b)(()=>{let r=e.current,o=(0,l.r)(r?r[0]:void 0);if(!t||n)return;let i=()=>{(!c||m(c,e))&&h(o.activeElement,e.current)&&(c=e)};return o.addEventListener("focusin",i,!1),null==r||r.forEach(e=>e.addEventListener("focusin",i,!1)),()=>{o.removeEventListener("focusin",i,!1),null==r||r.forEach(e=>e.removeEventListener("focusin",i,!1))}},[e,n]),(0,o.b)(()=>{let r=(0,l.r)(e.current?e.current[0]:void 0);if(!t)return;let o=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||!y(e)||t.isComposing)return;let n=r.activeElement;if(!h(n,e.current))return;let l=k.getTreeNode(e);if(!l)return;let o=l.nodeToRestore,i=S(r.body,{tabbable:!0});i.currentNode=n;let s=t.shiftKey?i.previousNode():i.nextNode();if(o&&r.body.contains(o)&&o!==r.body||(o=void 0,l.nodeToRestore=void 0),(!s||!h(s,e.current))&&o){i.currentNode=o;do s=t.shiftKey?i.previousNode():i.nextNode();while(h(s,e.current));(t.preventDefault(),t.stopPropagation(),s)?b(s,!0):v(o)?b(o,!0):n.blur()}};return n||r.addEventListener("keydown",o,!0),()=>{n||r.removeEventListener("keydown",o,!0)}},[e,t,n]),(0,o.b)(()=>{var n;let o=(0,l.r)(e.current?e.current[0]:void 0);if(!t)return;let i=k.getTreeNode(e);if(i)return i.nodeToRestore=null!==(n=r.current)&&void 0!==n?n:void 0,()=>{let n=k.getTreeNode(e);if(!n)return;let r=n.nodeToRestore;if(t&&r&&(h(o.activeElement,e.current)||o.activeElement===o.body&&function(e){let t=k.getTreeNode(c);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(null==t?void 0:t.scopeRef)===e}(e))){let t=k.clone();requestAnimationFrame(()=>{if(o.activeElement===o.body){let n=t.getTreeNode(e);for(;n;){if(n.nodeToRestore&&n.nodeToRestore.isConnected){b(n.nodeToRestore);return}n=n.parent}for(n=t.getTreeNode(e);n;){if(n.scopeRef&&n.scopeRef.current&&k.getTreeNode(n.scopeRef)){K(n.scopeRef.current,!0);return}n=n.parent}}})}}},[e,t])}(E,a,u),function(e,t){let n=i.useRef(t);(0,i.useEffect)(()=>{n.current&&(c=e,!h((0,l.r)(e.current?e.current[0]:void 0).activeElement,c.current)&&e.current&&K(e.current)),n.current=!1},[e])}(E,d),(0,i.useEffect)(()=>{let e=(0,l.r)(E.current?E.current[0]:void 0).activeElement,t=null;if(h(e,E.current)){for(let n of k.traverse())n.scopeRef&&h(e,n.scopeRef.current)&&(t=n);t===k.getTreeNode(E)&&(c=t.scopeRef)}},[E]),(0,o.b)(()=>()=>{var e,t,n;let r=null!==(n=null===(t=k.getTreeNode(E))||void 0===t?void 0:null===(e=t.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null;(E===c||m(E,c))&&(!r||k.getTreeNode(r))&&(c=r),k.removeTreeNode(E)},[E]);let F=(0,i.useMemo)(()=>({focusNext(e={}){let t=E.current,{from:n,tabbable:r,wrap:o,accept:i}=e,s=n||(0,l.r)(t[0]).activeElement,c=t[0].previousElementSibling,u=S(p(t),{tabbable:r,accept:i},t);u.currentNode=h(s,t)?s:c;let a=u.nextNode();return!a&&o&&(u.currentNode=c,a=u.nextNode()),a&&b(a,!0),a},focusPrevious(e={}){let t=E.current,{from:n,tabbable:r,wrap:o,accept:i}=e,s=n||(0,l.r)(t[0]).activeElement,c=t[t.length-1].nextElementSibling,u=S(p(t),{tabbable:r,accept:i},t);u.currentNode=h(s,t)?s:c;let a=u.previousNode();return!a&&o&&(u.currentNode=c,a=u.previousNode()),a&&b(a,!0),a},focusFirst(e={}){let t=E.current,{tabbable:n,accept:r}=e,l=S(p(t),{tabbable:n,accept:r},t);l.currentNode=t[0].previousElementSibling;let o=l.nextNode();return o&&b(o,!0),o},focusLast(e={}){let t=E.current,{tabbable:n,accept:r}=e,l=S(p(t),{tabbable:n,accept:r},t);l.currentNode=t[t.length-1].nextElementSibling;let o=l.previousNode();return o&&b(o,!0),o}}),[]),R=(0,i.useMemo)(()=>({focusManager:F,parentNode:T}),[T,F]);return i.createElement(s.Provider,{value:R},i.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:f}),r,i.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:g}))}let a=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],d=a.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";a.push('[tabindex]:not([tabindex="-1"]):not([disabled])');let f=a.join(':not([hidden]):not([tabindex="-1"]),');function p(e){return e[0].parentElement}function y(e){let t=k.getTreeNode(c);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function h(e,t){return!!e&&!!t&&t.some(t=>t.contains(e))}function v(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of k.traverse(k.getTreeNode(t)))if(n&&h(e,n.current))return!0;return!1}function g(e){return v(e,c)}function m(e,t){var n;let r=null===(n=k.getTreeNode(t))||void 0===n?void 0:n.parent;for(;r;){if(r.scopeRef===e)return!0;r=r.parent}return!1}function b(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){}}else try{(0,r.e)(e)}catch(e){}}function K(e,t=!0){let n=e[0].previousElementSibling,r=p(e),l=S(r,{tabbable:t},e);l.currentNode=n;let o=l.nextNode();t&&!o&&((l=S(r=p(e),{tabbable:!1},e)).currentNode=n,o=l.nextNode()),b(o)}function S(e,t,n){let r=(null==t?void 0:t.tabbable)?f:d,o=(0,l.r)(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var o;return(null==t?void 0:null===(o=t.from)||void 0===o?void 0:o.contains(e))?NodeFilter.FILTER_REJECT:e.matches(r)&&function e(t,n){return"#comment"!==t.nodeName&&function(e){let t=(0,l.k)(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:n,visibility:r}=e.style,o="none"!==n&&"hidden"!==r&&"collapse"!==r;if(o){let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:r}=t(e);o="none"!==n&&"hidden"!==r&&"collapse"!==r}return o}(t)&&!t.hasAttribute("hidden")&&!t.hasAttribute("data-react-aria-prevent-focus")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||h(e,n))&&(!(null==t?void 0:t.accept)||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return(null==t?void 0:t.from)&&(o.currentNode=t.from),o}function E(e,t={}){return{focusNext(n={}){let r=e.current;if(!r)return null;let{from:o,tabbable:i=t.tabbable,wrap:s=t.wrap,accept:c=t.accept}=n,u=o||(0,l.r)(r).activeElement,a=S(r,{tabbable:i,accept:c});r.contains(u)&&(a.currentNode=u);let d=a.nextNode();return!d&&s&&(a.currentNode=r,d=a.nextNode()),d&&b(d,!0),d},focusPrevious(n=t){let r=e.current;if(!r)return null;let{from:o,tabbable:i=t.tabbable,wrap:s=t.wrap,accept:c=t.accept}=n,u=o||(0,l.r)(r).activeElement,a=S(r,{tabbable:i,accept:c});if(r.contains(u))a.currentNode=u;else{let e=w(a);return e&&b(e,!0),null!=e?e:null}let d=a.previousNode();if(!d&&s){a.currentNode=r;let e=w(a);if(!e)return null;d=e}return d&&b(d,!0),null!=d?d:null},focusFirst(n=t){let r=e.current;if(!r)return null;let{tabbable:l=t.tabbable,accept:o=t.accept}=n,i=S(r,{tabbable:l,accept:o}).nextNode();return i&&b(i,!0),i},focusLast(n=t){let r=e.current;if(!r)return null;let{tabbable:l=t.tabbable,accept:o=t.accept}=n,i=w(S(r,{tabbable:l,accept:o}));return i&&b(i,!0),null!=i?i:null}}}function w(e){let t,n;do(t=e.lastChild())&&(n=t);while(t);return n}class T{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let l=new N({scopeRef:e});r.addChild(l),l.parent=r,this.fastMap.set(e,l),n&&(l.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&h(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach(e=>n&&n.addChild(e))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e,t;let n=new T;for(let r of this.traverse())n.addTreeNode(r.scopeRef,null!==(t=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==t?t:null,r.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new N({scopeRef:null}),this.fastMap.set(null,this.root)}}class N{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}let k=new T},11759:function(e,t,n){n.d(t,{b:function(){return h},j:function(){return v}});let r=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),l=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function o(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),n="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(n)return"rtl"===n.direction;if(t.script)return r.has(t.script)}let t=e.split("-")[0];return l.has(t)}var i=n(44208),s=n(81321);let c=Symbol.for("react-aria.i18n.locale");function u(){let e="undefined"!=typeof window&&window[c]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:o(e)?"rtl":"ltr"}}let a=u(),d=new Set;function f(){for(let e of(a=u(),d))e(a)}function p(){let e=(0,s.Av)(),[t,n]=(0,i.useState)(a);return((0,i.useEffect)(()=>(0===d.size&&window.addEventListener("languagechange",f),d.add(n),()=>{d.delete(n),0===d.size&&window.removeEventListener("languagechange",f)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}let y=i.createContext(null);function h(e){let{locale:t,children:n}=e,r=p(),l=t?{locale:t,direction:o(t)?"rtl":"ltr"}:r;return i.createElement(y.Provider,{value:l},n)}function v(){let e=p();return(0,i.useContext)(y)||e}},38929:function(e,t,n){n.d(t,{T:function(){return c}});var r=n(80404),l=n(81729),o=n(4495),i=n(74886),s=n(44208);function c(e){let{isDisabled:t,onLongPressStart:n,onLongPressEnd:c,onLongPress:u,threshold:a=500,accessibilityDescription:d}=e,f=(0,s.useRef)(),{addGlobalListener:p,removeGlobalListener:y}=(0,l.x)(),{pressProps:h}=(0,r.r)({isDisabled:t,onPressStart(e){if(e.continuePropagation(),("mouse"===e.pointerType||"touch"===e.pointerType)&&(n&&n({...e,type:"longpressstart"}),f.current=setTimeout(()=>{e.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),u&&u({...e,type:"longpress"}),f.current=void 0},a),"touch"===e.pointerType)){let t=e=>{e.preventDefault()};p(e.target,"contextmenu",t,{once:!0}),p(window,"pointerup",()=>{setTimeout(()=>{y(e.target,"contextmenu",t)},30)},{once:!0})}},onPressEnd(e){f.current&&clearTimeout(f.current),c&&("mouse"===e.pointerType||"touch"===e.pointerType)&&c({...e,type:"longpressend"})}}),v=(0,o.P)(u&&!t?d:void 0);return{longPressProps:(0,i.d)(h,v)}}},79104:function(e,t,n){n.d(t,{g:function(){return v}});var r=n(59760),l=n(67289),o=n(12007),i=n(44208),s=n(85287),c=n(56615),u=n(99808),a=n(87289),d=n(92133),f=n(34626),p=n(74886),y=n(85609),h=n(11759);function v(e){let t,{selectionManager:n,keyboardDelegate:v,ref:g,autoFocus:m=!1,shouldFocusWrap:b=!1,disallowEmptySelection:K=!1,disallowSelectAll:S=!1,selectOnFocus:E="replace"===n.selectionBehavior,disallowTypeAhead:w=!1,shouldUseVirtualFocus:T,allowsTabNavigation:N=!1,isVirtualized:k,scrollRef:F=g,linkBehavior:R="action"}=e,{direction:x}=(0,h.j)(),L=(0,u.tv)(),C=(0,i.useRef)({top:0,left:0});(0,d.z)(F,"scroll",k?null:()=>{C.current={top:F.current.scrollTop,left:F.current.scrollLeft}});let I=(0,i.useRef)(m);(0,i.useEffect)(()=>{if(I.current){let e=null;"first"===m&&(e=v.getFirstKey()),"last"===m&&(e=v.getLastKey());let t=n.selectedKeys;if(t.size){for(let r of t)if(n.canSelectItem(r)){e=r;break}}n.setFocused(!0),n.setFocusedKey(e),null!=e||T||(0,c.e)(g.current)}},[]);let P=(0,i.useRef)(n.focusedKey);(0,i.useEffect)(()=>{let e=(0,y.Jz)();if(n.isFocused&&null!=n.focusedKey&&(null==F?void 0:F.current)){let t=F.current.querySelector(`[data-key="${CSS.escape(n.focusedKey.toString())}"]`);t&&("keyboard"===e||I.current)&&(k||(0,f.z)(F.current,t),"virtual"!==e&&(0,f.G)(t,{containingElement:g.current}))}n.isFocused&&null==n.focusedKey&&null!=P.current&&(0,c.e)(g.current),P.current=n.focusedKey,I.current=!1},[k,F,n.focusedKey,n.isFocused,g]);let M={onKeyDown:e=>{var t,l,i,c,u,d,f,p;if(e.altKey&&"Tab"===e.key&&e.preventDefault(),!g.current.contains(e.target))return;let y=(t,l)=>{if(null!=t){if(n.isLink(t)&&"selection"===R&&E&&!(0,r.F)(e)){(0,o.flushSync)(()=>{n.setFocusedKey(t,l)});let r=F.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`),i=n.getItemProps(t);L.open(r,e,i.href,i.routerOptions);return}n.setFocusedKey(t,l),n.isLink(t)&&"override"===R||(e.shiftKey&&"multiple"===n.selectionMode?n.extendSelection(t):E&&!(0,r.F)(e)&&n.replaceSelection(t))}};switch(e.key){case"ArrowDown":if(v.getKeyBelow){e.preventDefault();let r=null!=n.focusedKey?v.getKeyBelow(n.focusedKey):null===(t=v.getFirstKey)||void 0===t?void 0:t.call(v);null==r&&b&&(r=null===(l=v.getFirstKey)||void 0===l?void 0:l.call(v,n.focusedKey)),y(r)}break;case"ArrowUp":if(v.getKeyAbove){e.preventDefault();let t=null!=n.focusedKey?v.getKeyAbove(n.focusedKey):null===(i=v.getLastKey)||void 0===i?void 0:i.call(v);null==t&&b&&(t=null===(c=v.getLastKey)||void 0===c?void 0:c.call(v,n.focusedKey)),y(t)}break;case"ArrowLeft":if(v.getKeyLeftOf){e.preventDefault();let t=v.getKeyLeftOf(n.focusedKey);null==t&&b&&(t="rtl"===x?null===(u=v.getFirstKey)||void 0===u?void 0:u.call(v,n.focusedKey):null===(d=v.getLastKey)||void 0===d?void 0:d.call(v,n.focusedKey)),y(t,"rtl"===x?"first":"last")}break;case"ArrowRight":if(v.getKeyRightOf){e.preventDefault();let t=v.getKeyRightOf(n.focusedKey);null==t&&b&&(t="rtl"===x?null===(f=v.getLastKey)||void 0===f?void 0:f.call(v,n.focusedKey):null===(p=v.getFirstKey)||void 0===p?void 0:p.call(v,n.focusedKey)),y(t,"rtl"===x?"last":"first")}break;case"Home":if(v.getFirstKey){e.preventDefault();let t=v.getFirstKey(n.focusedKey,(0,r.y)(e));n.setFocusedKey(t),(0,r.y)(e)&&e.shiftKey&&"multiple"===n.selectionMode?n.extendSelection(t):E&&n.replaceSelection(t)}break;case"End":if(v.getLastKey){e.preventDefault();let t=v.getLastKey(n.focusedKey,(0,r.y)(e));n.setFocusedKey(t),(0,r.y)(e)&&e.shiftKey&&"multiple"===n.selectionMode?n.extendSelection(t):E&&n.replaceSelection(t)}break;case"PageDown":v.getKeyPageBelow&&(e.preventDefault(),y(v.getKeyPageBelow(n.focusedKey)));break;case"PageUp":v.getKeyPageAbove&&(e.preventDefault(),y(v.getKeyPageAbove(n.focusedKey)));break;case"a":(0,r.y)(e)&&"multiple"===n.selectionMode&&!0!==S&&(e.preventDefault(),n.selectAll());break;case"Escape":K||0===n.selectedKeys.size||(e.stopPropagation(),e.preventDefault(),n.clearSelection());break;case"Tab":if(!N){if(e.shiftKey)g.current.focus();else{let e,t,n=(0,s.QL)(g.current,{tabbable:!0});do(t=n.lastChild())&&(e=t);while(t);e&&!e.contains(document.activeElement)&&(0,a.A)(e)}}}},onFocus:e=>{if(n.isFocused){e.currentTarget.contains(e.target)||n.setFocused(!1);return}if(e.currentTarget.contains(e.target)){if(n.setFocused(!0),null==n.focusedKey){var t,r;let l=e=>{null!=e&&(n.setFocusedKey(e),E&&n.replaceSelection(e))},o=e.relatedTarget;o&&e.currentTarget.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_FOLLOWING?l(null!==(t=n.lastSelectedKey)&&void 0!==t?t:v.getLastKey()):l(null!==(r=n.firstSelectedKey)&&void 0!==r?r:v.getFirstKey())}else k||(F.current.scrollTop=C.current.top,F.current.scrollLeft=C.current.left);if(!k&&null!=n.focusedKey){let e=F.current.querySelector(`[data-key="${CSS.escape(n.focusedKey.toString())}"]`);e&&(e.contains(document.activeElement)||(0,a.A)(e),"keyboard"===(0,y.Jz)()&&(0,f.G)(e,{containingElement:g.current}))}}},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||n.setFocused(!1)},onMouseDown(e){F.current===e.target&&e.preventDefault()}},{typeSelectProps:D}=(0,l.i)({keyboardDelegate:v,selectionManager:n});return w||(M=(0,p.d)(D,M)),T||(t=null==n.focusedKey?0:-1),{collectionProps:{...M,tabIndex:t}}}},69508:function(e,t,n){n.d(t,{C:function(){return a}});var r=n(59760),l=n(56615),o=n(99808),i=n(74886),s=n(80404),c=n(38929),u=n(44208);function a(e){let{selectionManager:t,key:n,ref:a,shouldSelectOnPressUp:p,shouldUseVirtualFocus:y,focus:h,isDisabled:v,onAction:g,allowsDifferentPressOrigin:m,linkBehavior:b="action"}=e,K=(0,o.tv)(),S=e=>{if("keyboard"===e.pointerType&&(0,r.F)(e))t.toggleSelection(n);else{if("none"===t.selectionMode)return;if(t.isLink(n)){if("selection"===b){let r=t.getItemProps(n);K.open(a.current,e,r.href,r.routerOptions),t.setSelectedKeys(t.selectedKeys);return}if("override"===b||"none"===b)return}"single"===t.selectionMode?t.isSelected(n)&&!t.disallowEmptySelection?t.toggleSelection(n):t.replaceSelection(n):e&&e.shiftKey?t.extendSelection(n):"toggle"===t.selectionBehavior||e&&((0,r.y)(e)||"touch"===e.pointerType||"virtual"===e.pointerType)?t.toggleSelection(n):t.replaceSelection(n)}};(0,u.useEffect)(()=>{n===t.focusedKey&&t.isFocused&&!y&&(h?h():document.activeElement!==a.current&&(0,l.e)(a.current))},[a,n,t.focusedKey,t.childFocusStrategy,t.isFocused,y]),v=v||t.isDisabled(n);let E={};y||v?v&&(E.onMouseDown=e=>{e.preventDefault()}):E={tabIndex:n===t.focusedKey?0:-1,onFocus(e){e.target===a.current&&t.setFocusedKey(n)}};let w=t.isLink(n)&&"override"===b,T=t.isLink(n)&&"selection"!==b&&"none"!==b,N=!v&&t.canSelectItem(n)&&!w,k=(g||T)&&!v,F=k&&("replace"===t.selectionBehavior?!N:!N||t.isEmpty),R=k&&N&&"replace"===t.selectionBehavior,x=F||R,L=(0,u.useRef)(null),C=x&&N,I=(0,u.useRef)(!1),P=(0,u.useRef)(!1),M=e=>{if(g&&g(),T){let r=t.getItemProps(n);K.open(a.current,e,r.href,r.routerOptions)}},D={};p?(D.onPressStart=e=>{L.current=e.pointerType,I.current=C,"keyboard"===e.pointerType&&(!x||f())&&S(e)},m?(D.onPressUp=F?null:e=>{"keyboard"!==e.pointerType&&N&&S(e)},D.onPress=F?M:null):D.onPress=e=>{F||R&&"mouse"!==e.pointerType?("keyboard"!==e.pointerType||d())&&M(e):"keyboard"!==e.pointerType&&N&&S(e)}):(D.onPressStart=e=>{L.current=e.pointerType,I.current=C,P.current=F,N&&("mouse"===e.pointerType&&!F||"keyboard"===e.pointerType&&(!k||f()))&&S(e)},D.onPress=e=>{("touch"===e.pointerType||"pen"===e.pointerType||"virtual"===e.pointerType||"keyboard"===e.pointerType&&x&&d()||"mouse"===e.pointerType&&P.current)&&(x?M(e):N&&S(e))}),E["data-key"]=n,D.preventFocusOnPress=y;let{pressProps:A,isPressed:B}=(0,s.r)(D),z=R?e=>{"mouse"===L.current&&(e.stopPropagation(),e.preventDefault(),M(e))}:void 0,{longPressProps:O}=(0,c.T)({isDisabled:!C,onLongPress(e){"touch"===e.pointerType&&(S(e),t.setSelectionBehavior("toggle"))}}),$=t.isLink(n)?e=>{o.nG.isOpening||e.preventDefault()}:void 0;return{itemProps:(0,i.d)(E,N||F?A:{},C?O:{},{onDoubleClick:z,onDragStartCapture:e=>{"touch"===L.current&&I.current&&e.preventDefault()},onClick:$}),isPressed:B,isSelected:t.isSelected(n),isFocused:t.isFocused&&t.focusedKey===n,isDisabled:v,allowsSelection:N,hasAction:x}}function d(){let e=window.event;return(null==e?void 0:e.key)==="Enter"}function f(){let e=window.event;return(null==e?void 0:e.key)===" "||(null==e?void 0:e.code)==="Space"}},67289:function(e,t,n){n.d(t,{i:function(){return l}});var r=n(44208);function l(e){let{keyboardDelegate:t,selectionManager:n,onTypeSelect:l}=e,o=(0,r.useRef)({search:"",timeout:null}).current;return{typeSelectProps:{onKeyDownCapture:t.getKeyForSearch?e=>{var r;let i=1!==(r=e.key).length&&/^[A-Z]/i.test(r)?"":r;if(!i||e.ctrlKey||e.metaKey||!e.currentTarget.contains(e.target))return;" "!==i||!(o.search.trim().length>0)||(e.preventDefault(),"continuePropagation"in e||e.stopPropagation()),o.search+=i;let s=t.getKeyForSearch(o.search,n.focusedKey);null==s&&(s=t.getKeyForSearch(o.search)),null!=s&&(n.setFocusedKey(s),l&&l(s)),clearTimeout(o.timeout),o.timeout=setTimeout(()=>{o.search=""},1e3)}:null}}}},59760:function(e,t,n){n.d(t,{F:function(){return l},y:function(){return o}});var r=n(88930);function l(e){return(0,r.ad)()?e.altKey:e.ctrlKey}function o(e){return(0,r.V5)()?e.metaKey:e.ctrlKey}},10078:function(e,t,n){n.d(t,{a:function(){return r}});function r(e,t){let n=window.getComputedStyle(e),r=/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY);return r&&t&&(r=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),r}},34626:function(e,t,n){n.d(t,{z:function(){return l},G:function(){return i}});var r=n(10078);function l(e,t){let n=o(e,t,"left"),r=o(e,t,"top"),l=t.offsetWidth,i=t.offsetHeight,s=e.scrollLeft,c=e.scrollTop,{borderTopWidth:u,borderLeftWidth:a}=getComputedStyle(e),d=e.scrollLeft+parseInt(a,10),f=e.scrollTop+parseInt(u,10),p=d+e.clientWidth,y=f+e.clientHeight;n<=s?s=n-parseInt(a,10):n+l>p&&(s+=n+l-p),r<=f?c=r-parseInt(u,10):r+i>y&&(c+=r+i-y),e.scrollLeft=s,e.scrollTop=c}function o(e,t,n){let r="left"===n?"offsetLeft":"offsetTop",l=0;for(;t.offsetParent&&(l+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){l-=e[r];break}t=t.offsetParent}return l}function i(e,t){if(document.contains(e)){let c=document.scrollingElement||document.documentElement;if("hidden"===window.getComputedStyle(c).overflow)for(let t of function(e,t){let n=[];for(;e&&e!==document.documentElement;)(0,r.a)(e,void 0)&&n.push(e),e=e.parentElement;return n}(e))l(t,e);else{var n,o,i,s;let{left:r,top:l}=e.getBoundingClientRect();null==e||null===(n=e.scrollIntoView)||void 0===n||n.call(e,{block:"nearest"});let{left:c,top:u}=e.getBoundingClientRect();(Math.abs(r-c)>1||Math.abs(l-u)>1)&&(null==t||null===(i=t.containingElement)||void 0===i||null===(o=i.scrollIntoView)||void 0===o||o.call(i,{block:"center",inline:"center"}),null===(s=e.scrollIntoView)||void 0===s||s.call(e,{block:"nearest"}))}}}},4495:function(e,t,n){n.d(t,{P:function(){return s}});var r=n(74472),l=n(44208);let o=0,i=new Map;function s(e){let[t,n]=(0,l.useState)();return(0,r.b)(()=>{if(!e)return;let t=i.get(e);if(t)n(t.element.id);else{let r=`react-aria-description-${o++}`;n(r);let l=document.createElement("div");l.id=r,l.style.display="none",l.textContent=e,document.body.appendChild(l),t={refCount:0,element:l},i.set(e,t)}return t.refCount++,()=>{t&&0==--t.refCount&&(t.element.remove(),i.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}},92133:function(e,t,n){n.d(t,{z:function(){return o}});var r=n(52742),l=n(44208);function o(e,t,n,o){let i=(0,r.i)(n),s=null==n;(0,l.useEffect)(()=>{if(s||!e.current)return;let n=e.current;return n.addEventListener(t,i,o),()=>{n.removeEventListener(t,i,o)}},[e,t,o,s,i])}},62428:function(e,t,n){n.d(t,{c:function(){return o}});var r=n(44208);function l(e){return null}l.getCollectionNode=function*(e,t){let{childItems:n,title:l,children:o}=e,i=e.title||e.children,s=e.textValue||("string"==typeof i?i:"")||e["aria-label"]||"";s||(null==t?void 0:t.suppressTextValueWarning)||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:i,textValue:s,"aria-label":e["aria-label"],hasChildNodes:null!=e.hasChildItems?e.hasChildItems:!!(e.childItems||e.title&&r.Children.count(e.children)>0),*childNodes(){if(n)for(let e of n)yield{type:"item",value:e};else if(l){let e=[];r.Children.forEach(o,t=>{e.push({type:"item",element:t})}),yield*e}}}};let o=l},76884:function(e,t,n){function r(e,t){return"function"==typeof t.getChildren?t.getChildren(e.key):e.childNodes}function l(e){return o(e,0)}function o(e,t){if(t<0)return;let n=0;for(let r of e){if(n===t)return r;n++}}function i(e){let t;for(let n of e)t=n;return t}function s(e,t,n){if(t.parentKey===n.parentKey)return t.index-n.index;let r=[...c(e,t),t],l=[...c(e,n),n],o=r.slice(0,l.length).findIndex((e,t)=>e!==l[t]);return -1!==o?(t=r[o],n=l[o],t.index-n.index):r.findIndex(e=>e===n)>=0?1:(l.findIndex(e=>e===t),-1)}function c(e,t){let n=[];for(;(null==t?void 0:t.parentKey)!=null;)n.unshift(t=e.getItem(t.parentKey));return n}n.d(t,{Em:function(){return o},_P:function(){return r},eg:function(){return s},l8:function(){return l},s:function(){return i}})},62399:function(e,t,n){n.d(t,{K:function(){return s}});var r=n(44208);class l{build(e,t){return this.context=t,o(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:n}=e;if("function"==typeof t){if(!n)throw Error("props.children was a function but props.items is missing");for(let n of e.items)yield*this.getFullNode({value:n},{renderer:t})}else{let e=[];r.Children.forEach(t,t=>{e.push(t)});let n=0;for(let t of e)for(let e of this.getFullNode({element:t,index:n},{}))n++,yield e}}getKey(e,t,n,r){if(null!=e.key)return e.key;if("cell"===t.type&&null!=t.key)return`${r}${t.key}`;let l=t.value;if(null!=l){var o;let e=null!==(o=l.key)&&void 0!==o?o:l.id;if(null==e)throw Error("No key found for item");return e}return r?`${r}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,n,l){let s=e.element;if(!s&&e.value&&t&&t.renderer){let n=this.cache.get(e.value);if(n&&(!n.shouldInvalidate||!n.shouldInvalidate(this.context))){n.index=e.index,n.parentKey=l?l.key:null,yield n;return}s=t.renderer(e.value)}if(r.isValidElement(s)){let r=s.type;if("function"!=typeof r&&"function"!=typeof r.getCollectionNode){let e="function"==typeof s.type?s.type.name:s.type;throw Error(`Unknown element <${e}> in collection.`)}let o=r.getCollectionNode(s.props,this.context),c=e.index,u=o.next();for(;!u.done&&u.value;){let r=u.value;e.index=c;let a=r.key;a||(a=r.element?null:this.getKey(s,e,t,n));let d=[...this.getFullNode({...r,key:a,index:c,wrapper:function(e,t){return e&&t?n=>e(t(n)):e||t||void 0}(e.wrapper,r.wrapper)},this.getChildState(t,r),n?`${n}${s.key}`:s.key,l)];for(let t of d){if(t.value=r.value||e.value,t.value&&this.cache.set(t.value,t),e.type&&t.type!==e.type)throw Error(`Unsupported type <${i(t.type)}> in <${i(l.type)}>. Only <${i(e.type)}> is supported.`);c++,yield t}u=o.next(d)}return}if(null==e.key)return;let c=this,u={type:e.type,props:e.props,key:e.key,parentKey:l?l.key:null,value:e.value,level:l?l.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:o(function*(){if(!e.hasChildNodes)return;let n=0;for(let r of e.childNodes())for(let e of(null!=r.key&&(r.key=`${u.key}${r.key}`),r.index=n,c.getFullNode(r,c.getChildState(t,r),u.key,u)))n++,yield e})};yield u}constructor(){this.cache=new WeakMap}}function o(e){let t=[],n=null;return{*[Symbol.iterator](){for(let e of t)yield e;for(let r of(n||(n=e()),n))t.push(r),yield r}}}function i(e){return e[0].toUpperCase()+e.slice(1)}function s(e,t,n){let o=(0,r.useMemo)(()=>new l,[]),{children:i,items:s,collection:c}=e;return(0,r.useMemo)(()=>c||t(o.build({children:i,items:s},n)),[o,i,s,c,n,t])}},48624:function(e,t,n){n.d(t,{Y:function(){return r}});class r extends Set{constructor(e,t,n){super(e),e instanceof r?(this.anchorKey=t||e.anchorKey,this.currentKey=n||e.currentKey):(this.anchorKey=t,this.currentKey=n)}}},23701:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(48624),l=n(76884);class o{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(null==e||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return"all"===this.state.selectedKeys?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){return"none"!==this.state.selectionMode&&(e=this.getKey(e),"all"===this.state.selectedKeys?this.canSelectItem(e):this.state.selectedKeys.has(e))}get isEmpty(){return"all"!==this.state.selectedKeys&&0===this.state.selectedKeys.size}get isSelectAll(){if(this.isEmpty)return!1;if("all"===this.state.selectedKeys)return!0;if(null!=this._isSelectAll)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(e=>t.has(e)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let n=this.collection.getItem(t);(!e||n&&0>(0,l.eg)(this.collection,n,e))&&(e=n)}return null==e?void 0:e.key}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let n=this.collection.getItem(t);(!e||n&&(0,l.eg)(this.collection,n,e)>0)&&(e=n)}return null==e?void 0:e.key}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){let t;if("none"!==this.selectionMode){if("single"===this.selectionMode){this.replaceSelection(e);return}if(e=this.getKey(e),"all"===this.state.selectedKeys)t=new r.Y([e],e,e);else{let n=this.state.selectedKeys,l=n.anchorKey||e;for(let o of(t=new r.Y(n,l,e),this.getKeyRange(l,n.currentKey||e)))t.delete(o);for(let n of this.getKeyRange(e,l))this.canSelectItem(n)&&t.add(n)}this.state.setSelectedKeys(t)}}getKeyRange(e,t){let n=this.collection.getItem(e),r=this.collection.getItem(t);return n&&r?0>=(0,l.eg)(this.collection,n,r)?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let n=[],r=e;for(;r;){let e=this.collection.getItem(r);if((e&&"item"===e.type||"cell"===e.type&&this.allowsCellSelection)&&n.push(r),r===t)return n;r=this.collection.getKeyAfter(r)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||"cell"===t.type&&this.allowsCellSelection)return e;for(;"item"!==t.type&&null!=t.parentKey;)t=this.collection.getItem(t.parentKey);return t&&"item"===t.type?t.key:null}toggleSelection(e){if("none"===this.selectionMode)return;if("single"===this.selectionMode&&!this.isSelected(e)){this.replaceSelection(e);return}if(null==(e=this.getKey(e)))return;let t=new r.Y("all"===this.state.selectedKeys?this.getSelectAllKeys():this.state.selectedKeys);t.has(e)?t.delete(e):this.canSelectItem(e)&&(t.add(e),t.anchorKey=e,t.currentKey=e),this.disallowEmptySelection&&0===t.size||this.state.setSelectedKeys(t)}replaceSelection(e){if("none"===this.selectionMode||null==(e=this.getKey(e)))return;let t=this.canSelectItem(e)?new r.Y([e],e,e):new r.Y;this.state.setSelectedKeys(t)}setSelectedKeys(e){if("none"===this.selectionMode)return;let t=new r.Y;for(let n of e)if(null!=(n=this.getKey(n))&&(t.add(n),"single"===this.selectionMode))break;this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=n=>{for(;n;){if(this.canSelectItem(n)){let r=this.collection.getItem(n);"item"===r.type&&e.push(n),r.hasChildNodes&&(this.allowsCellSelection||"item"!==r.type)&&t((0,l.l8)((0,l._P)(r,this.collection)).key)}n=this.collection.getKeyAfter(n)}};return t(this.collection.getFirstKey()),e}selectAll(){this.isSelectAll||"multiple"!==this.selectionMode||this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&("all"===this.state.selectedKeys||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new r.Y)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){"none"!==this.selectionMode&&("single"===this.selectionMode?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):"toggle"===this.selectionBehavior||t&&("touch"===t.pointerType||"virtual"===t.pointerType)?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;for(let n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){var t;if("none"===this.state.selectionMode||this.state.disabledKeys.has(e))return!1;let n=this.collection.getItem(e);return!!n&&(null==n||null===(t=n.props)||void 0===t||!t.isDisabled)&&("cell"!==n.type||!!this.allowsCellSelection)}isDisabled(e){var t,n;return"all"===this.state.disabledBehavior&&(this.state.disabledKeys.has(e)||!!(null===(n=this.collection.getItem(e))||void 0===n?void 0:null===(t=n.props)||void 0===t?void 0:t.isDisabled))}isLink(e){var t,n;return!!(null===(n=this.collection.getItem(e))||void 0===n?void 0:null===(t=n.props)||void 0===t?void 0:t.href)}getItemProps(e){var t;return null===(t=this.collection.getItem(e))||void 0===t?void 0:t.props}constructor(e,t,n){var r;this.collection=e,this.state=t,this.allowsCellSelection=null!==(r=null==n?void 0:n.allowsCellSelection)&&void 0!==r&&r,this._isSelectAll=null}}},30788:function(e,t,n){n.d(t,{q:function(){return i}});var r=n(48624),l=n(15954),o=n(44208);function i(e){let{selectionMode:t="none",disallowEmptySelection:n,allowDuplicateSelectionEvents:i,selectionBehavior:c="toggle",disabledBehavior:u="all"}=e,a=(0,o.useRef)(!1),[,d]=(0,o.useState)(!1),f=(0,o.useRef)(null),p=(0,o.useRef)(null),[,y]=(0,o.useState)(null),h=(0,o.useMemo)(()=>s(e.selectedKeys),[e.selectedKeys]),v=(0,o.useMemo)(()=>s(e.defaultSelectedKeys,new r.Y),[e.defaultSelectedKeys]),[g,m]=(0,l.z)(h,v,e.onSelectionChange),b=(0,o.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),[K,S]=(0,o.useState)(c);"replace"===c&&"toggle"===K&&"object"==typeof g&&0===g.size&&S("replace");let E=(0,o.useRef)(c);return(0,o.useEffect)(()=>{c!==E.current&&(S(c),E.current=c)},[c]),{selectionMode:t,disallowEmptySelection:n,selectionBehavior:K,setSelectionBehavior:S,get isFocused(){return a.current},setFocused(e){a.current=e,d(e)},get focusedKey(){return f.current},get childFocusStrategy(){return p.current},setFocusedKey(e,t="first"){f.current=e,p.current=t,y(e)},selectedKeys:g,setSelectedKeys(e){(i||!function(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}(e,g))&&m(e)},disabledKeys:b,disabledBehavior:u}}function s(e,t){return e?"all"===e?"all":new r.Y(e):t}}}]);