"use strict";exports.id=8027,exports.ids=[8027],exports.modules={22215:(e,t,l)=>{l.d(t,{r:()=>r});var r=l(58523).c},67600:(e,t,l)=>{l.d(t,{n:()=>O});var r=l(69206),a=l(84661),n=l(58462),s=l(83877);let i=new WeakMap;function o(e,t,l){"string"==typeof t&&(t=t.replace(/\s+/g,""));let r=i.get(e);return`${r}-${l}-${t}`}var d=l(57256),u=l(13956),c=l(5918),b=l(37307),g=(0,r.Gp)((e,t)=>{var l,r,i;let{as:g,state:p,className:f,slots:h,classNames:m,...y}=e,v=(0,a.gy)(t),{tabPanelProps:x}=function(e,t,l){var r;let a=(0,u.p)(l)?void 0:0,n=o(t,null!==(r=e.id)&&void 0!==r?r:null==t?void 0:t.selectedKey,"tabpanel"),i=(0,d.b)({...e,id:n,"aria-labelledby":o(t,null==t?void 0:t.selectedKey,"tab")});return{tabPanelProps:(0,s.d)(i,{tabIndex:a,role:"tabpanel","aria-describedby":e["aria-describedby"],"aria-details":e["aria-details"]})}}(e,p,v),{focusProps:w,isFocused:K,isFocusVisible:k}=(0,c.F)(),M=p.selectedItem,C=null==(l=null==M?void 0:M.props)?void 0:l.children,D=(0,n.W)(null==m?void 0:m.panel,f,null==(r=null==M?void 0:M.props)?void 0:r.className);return C?(0,b.jsx)(g||"div",{ref:v,"data-focus":K,"data-focus-visible":k,...(0,s.d)(x,w,y),className:null==(i=h.panel)?void 0:i.call(h,{class:D}),"data-slot":"panel",children:C}):null});g.displayName="NextUI.TabPanel";var p=l(23110),f=l(41118),h=l(63793),m=l(26850),y=l(7679),v=l(28270),x=l(2723),w=l(2825),K=l(88602),k=l(9959),M=l(78419);let C={...l(29192).H,...k.o,...M.b};var D=l(12396),N=l(46999),L=(0,r.Gp)((e,t)=>{var l;let{className:r,as:i,item:d,state:u,classNames:g,isDisabled:k,listRef:M,slots:L,motionProps:S,disableAnimation:W,disableCursorAnimation:A,shouldSelectOnPressUp:P,onClick:I,...j}=e,{key:B}=d,F=(0,a.gy)(t),E=i||(e.href?"a":"button"),{tabProps:R,isSelected:z,isDisabled:H,isPressed:T}=function(e,t,l){let{key:r,isDisabled:a,shouldSelectOnPressUp:n}=e,{selectionManager:i,selectedKey:d}=t,u=r===d,c=a||t.isDisabled||t.selectionManager.isDisabled(r),{itemProps:b,isPressed:g}=(0,x.C)({selectionManager:i,key:r,ref:l,isDisabled:c,shouldSelectOnPressUp:n,linkBehavior:"selection"}),p=o(t,r,"tab"),f=o(t,r,"tabpanel"),{tabIndex:h}=b,m=t.collection.getItem(r),w=(0,y.z)(null==m?void 0:m.props,{labelable:!0});delete w.id;let K=(0,v.eY)(null==m?void 0:m.props);return{tabProps:(0,s.d)(w,K,b,{id:p,"aria-selected":u,"aria-disabled":c||void 0,"aria-controls":u?f:void 0,tabIndex:c?void 0:h,role:"tab"}),isSelected:u,isDisabled:c,isPressed:g}}({key:B,isDisabled:k,shouldSelectOnPressUp:P},u,F),V=k||H,{focusProps:O,isFocused:U,isFocusVisible:_}=(0,c.F)(),{hoverProps:J,isHovered:X}=(0,w.X)({isDisabled:V}),G=(0,n.W)(null==g?void 0:g.tab,r),[,Y]=(0,N.t)({rerender:!0});return(0,b.jsxs)(E,{ref:F,"data-disabled":(0,f.PB)(H),"data-focus":(0,f.PB)(U),"data-focus-visible":(0,f.PB)(_),"data-hover":(0,f.PB)(X),"data-hover-unselected":(0,f.PB)((X||T)&&!z),"data-pressed":(0,f.PB)(T),"data-selected":(0,f.PB)(z),"data-slot":"tab",...(0,s.d)(R,V?{}:{...O,...J},(0,p.z)(j,{enabled:"string"==typeof E,omitPropNames:new Set(["title"])})),className:null==(l=L.tab)?void 0:l.call(L,{class:G}),title:null==j?void 0:j.titleValue,type:"button"===E?"button":void 0,onClick:()=>{(0,h.t)(I,R.onClick),(null==F?void 0:F.current)&&(null==M?void 0:M.current)&&(0,m.Z)(F.current,{scrollMode:"if-needed",behavior:"smooth",block:"end",inline:"end",boundary:null==M?void 0:M.current})},children:[z&&!W&&!A&&Y?(0,b.jsx)(K.X,{features:C,children:(0,b.jsx)(D.m.span,{className:L.cursor({class:null==g?void 0:g.cursor}),"data-slot":"cursor",layoutDependency:!1,layoutId:"cursor",transition:{type:"spring",bounce:.15,duration:.5},...S})}):null,(0,b.jsx)("div",{className:L.tabContent({class:null==g?void 0:g.tabContent}),"data-slot":"tabContent",children:d.rendered})]})});L.displayName="NextUI.Tab";var S=l(5145),W=l(97872),A=l(84821),P=(0,W.tv)({slots:{base:"inline-flex",tabList:["flex","p-1","h-fit","gap-2","items-center","flex-nowrap","overflow-x-scroll","scrollbar-hide","bg-default-100"],tab:["z-0","w-full","px-3","py-1","flex","group","relative","justify-center","items-center","outline-none","cursor-pointer","transition-opacity","tap-highlight-transparent","data-[disabled=true]:cursor-not-allowed","data-[disabled=true]:opacity-30","data-[hover-unselected=true]:opacity-disabled",...A.Dh],tabContent:["relative","z-10","text-inherit","whitespace-nowrap","transition-colors","text-default-500","group-data-[selected=true]:text-foreground"],cursor:["absolute","z-0","bg-white"],panel:["py-3","px-1","outline-none",...A.Dh],wrapper:[]},variants:{variant:{solid:{cursor:"inset-0"},light:{tabList:"bg-transparent dark:bg-transparent",cursor:"inset-0"},underlined:{tabList:"bg-transparent dark:bg-transparent",cursor:"h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]"},bordered:{tabList:"bg-transparent dark:bg-transparent border-medium border-default-200 shadow-sm",cursor:"inset-0"}},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{tabList:"rounded-medium",tab:"h-7 text-tiny rounded-small",cursor:"rounded-small"},md:{tabList:"rounded-medium",tab:"h-8 text-small rounded-small",cursor:"rounded-small"},lg:{tabList:"rounded-large",tab:"h-9 text-medium rounded-medium",cursor:"rounded-medium"}},radius:{none:{tabList:"rounded-none",tab:"rounded-none",cursor:"rounded-none"},sm:{tabList:"rounded-medium",tab:"rounded-small",cursor:"rounded-small"},md:{tabList:"rounded-medium",tab:"rounded-small",cursor:"rounded-small"},lg:{tabList:"rounded-large",tab:"rounded-medium",cursor:"rounded-medium"},full:{tabList:"rounded-full",tab:"rounded-full",cursor:"rounded-full"}},fullWidth:{true:{base:"w-full",tabList:"w-full"}},isDisabled:{true:{tabList:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{tab:"transition-none",tabContent:"transition-none"}},placement:{top:{},start:{tabList:"flex-col",panel:"py-0 px-3",wrapper:"flex"},end:{tabList:"flex-col",panel:"py-0 px-3",wrapper:"flex flex-row-reverse"},bottom:{wrapper:"flex flex-col-reverse"}}},defaultVariants:{color:"default",variant:"solid",size:"md",fullWidth:!1,isDisabled:!1,disableAnimation:!1},compoundVariants:[{variant:["solid","bordered","light"],color:"default",class:{cursor:["bg-background","dark:bg-default","shadow-small"],tabContent:"group-data-[selected=true]:text-default-foreground"}},{variant:["solid","bordered","light"],color:"primary",class:{cursor:S.J.solid.primary,tabContent:"group-data-[selected=true]:text-primary-foreground"}},{variant:["solid","bordered","light"],color:"secondary",class:{cursor:S.J.solid.secondary,tabContent:"group-data-[selected=true]:text-secondary-foreground"}},{variant:["solid","bordered","light"],color:"success",class:{cursor:S.J.solid.success,tabContent:"group-data-[selected=true]:text-success-foreground"}},{variant:["solid","bordered","light"],color:"warning",class:{cursor:S.J.solid.warning,tabContent:"group-data-[selected=true]:text-warning-foreground"}},{variant:["solid","bordered","light"],color:"danger",class:{cursor:S.J.solid.danger,tabContent:"group-data-[selected=true]:text-danger-foreground"}},{variant:"underlined",color:"default",class:{cursor:"bg-foreground",tabContent:"group-data-[selected=true]:text-foreground"}},{variant:"underlined",color:"primary",class:{cursor:"bg-primary",tabContent:"group-data-[selected=true]:text-primary"}},{variant:"underlined",color:"secondary",class:{cursor:"bg-secondary",tabContent:"group-data-[selected=true]:text-secondary"}},{variant:"underlined",color:"success",class:{cursor:"bg-success",tabContent:"group-data-[selected=true]:text-success"}},{variant:"underlined",color:"warning",class:{cursor:"bg-warning",tabContent:"group-data-[selected=true]:text-warning"}},{variant:"underlined",color:"danger",class:{cursor:"bg-danger",tabContent:"group-data-[selected=true]:text-danger"}},{disableAnimation:!0,variant:"underlined",class:{tab:["after:content-['']","after:absolute","after:bottom-0","after:h-[2px]","after:w-[80%]","after:opacity-0","after:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]","data-[selected=true]:after:opacity-100"]}},{disableAnimation:!0,color:"default",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-default data-[selected=true]:text-default-foreground"}},{disableAnimation:!0,color:"primary",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground"}},{disableAnimation:!0,color:"secondary",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground"}},{disableAnimation:!0,color:"success",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-success data-[selected=true]:text-success-foreground"}},{disableAnimation:!0,color:"warning",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground"}},{disableAnimation:!0,color:"danger",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground"}},{disableAnimation:!0,color:"default",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-foreground"}},{disableAnimation:!0,color:"primary",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-primary"}},{disableAnimation:!0,color:"secondary",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-secondary"}},{disableAnimation:!0,color:"success",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-success"}},{disableAnimation:!0,color:"warning",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-warning"}},{disableAnimation:!0,color:"danger",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-danger"}}],compoundSlots:[{variant:"underlined",slots:["tab","tabList","cursor"],class:["rounded-none"]}]}),I=l(41962),j=l(23169),B=l(17925);function F(e,t){let l=null;if(e){for(l=e.getFirstKey();t.has(l)&&l!==e.getLastKey();)l=e.getKeyAfter(l);t.has(l)&&l===e.getLastKey()&&(l=e.getFirstKey())}return l}class E{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}getKeyAbove(e){return this.getPreviousKey(e)}getKeyBelow(e){return this.getNextKey(e)}isDisabled(e){var t,l;return this.disabledKeys.has(e)||!!(null===(l=this.collection.getItem(e))||void 0===l?void 0:null===(t=l.props)||void 0===t?void 0:t.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return null!=e&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return null!=e&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getNextKey(e){do null==(e=this.collection.getKeyAfter(e))&&(e=this.collection.getFirstKey());while(this.isDisabled(e));return e}getPreviousKey(e){do null==(e=this.collection.getKeyBefore(e))&&(e=this.collection.getLastKey());while(this.isDisabled(e));return e}constructor(e,t,l,r=new Set){this.collection=e,this.flipDirection="rtl"===t&&"horizontal"===l,this.disabledKeys=r}}var R=l(31179),z=l(87448),H=l(56266),T=l(6730);function V(e,t){var l;let{Component:o,values:u,state:c,getBaseProps:f,getTabListProps:h,getWrapperProps:m}=function(e){var t;let[l,o]=(0,r.oe)(e,P.variantKeys),{ref:u,as:c,className:b,classNames:g,children:f,disableCursorAnimation:h,motionProps:m,isVertical:y=!1,shouldSelectOnPressUp:v=!0,...x}=l,w=c||"div",K="string"==typeof w,k=(0,a.gy)(u),M=function(e){var t;let l=(0,B.B)({...e,suppressTextValueWarning:!0,defaultSelectedKey:null!==(t=e.defaultSelectedKey)&&void 0!==t?t:F(e.collection,e.disabledKeys?new Set(e.disabledKeys):new Set)}),{selectionManager:r,collection:a,selectedKey:n}=l,s=(0,j.useRef)(n);return(0,j.useEffect)(()=>{let e=n;(r.isEmpty||!a.getItem(e))&&null!=(e=F(a,l.disabledKeys))&&r.setSelectedKeys([e]),(null==e||null!=r.focusedKey)&&(r.isFocused||e===s.current)||r.setFocusedKey(e),s.current=e}),{...l,isDisabled:e.isDisabled||!1}}({children:f,...x}),{tabListProps:C}=function(e,t,l){let{orientation:r="horizontal",keyboardActivation:a="automatic"}=e,{collection:n,selectionManager:o,disabledKeys:u}=t,{direction:c}=(0,z.j)(),b=(0,j.useMemo)(()=>new E(n,c,r,u),[n,u,r,c]),{collectionProps:g}=(0,H.g)({ref:l,selectionManager:o,keyboardDelegate:b,selectOnFocus:"automatic"===a,disallowEmptySelection:!0,scrollRef:l,linkBehavior:"selection"}),p=(0,R.Me)();i.set(t,p);let f=(0,d.b)({...e,id:p});return{tabListProps:{...(0,s.d)(g,f),role:"tablist","aria-orientation":r,tabIndex:void 0}}}(x,M,k),D=(0,j.useMemo)(()=>P({...o,className:b,...y?{placement:"start"}:{}}),[(0,I.Xx)(o),b,y]),N=(0,n.W)(null==g?void 0:g.base,b),L=(0,j.useMemo)(()=>({state:M,slots:D,classNames:g,motionProps:m,listRef:k,shouldSelectOnPressUp:v,disableCursorAnimation:h,isDisabled:null==e?void 0:e.isDisabled,disableAnimation:null==e?void 0:e.disableAnimation}),[M,D,k,m,h,v,null==e?void 0:e.disableAnimation,null==e?void 0:e.isDisabled,g]),S=(0,j.useCallback)(e=>({"data-slot":"base",className:D.base({class:(0,n.W)(N,null==e?void 0:e.className)}),...(0,s.d)((0,p.z)(x,{enabled:K}),e)}),[N,x,D]),W=null!=(t=o.placement)?t:y?"start":"top",A=(0,j.useCallback)(e=>({"data-slot":"tabWrapper",className:D.wrapper({class:(0,n.W)(null==g?void 0:g.wrapper,null==e?void 0:e.className)}),"data-placement":W,"data-vertical":y||"start"===W||"end"===W?"vertical":"horizontal"}),[g,D,W,y]),T=(0,j.useCallback)(e=>({ref:k,"data-slot":"tabList",className:D.tabList({class:(0,n.W)(null==g?void 0:g.tabList,null==e?void 0:e.className)}),...(0,s.d)(C,e)}),[k,C,g,D]);return{Component:w,domRef:k,state:M,values:L,getBaseProps:S,getTabListProps:T,getWrapperProps:A}}({...e,ref:t}),y=(0,j.useId)(),v=!e.disableAnimation&&!e.disableCursorAnimation,x={state:c,listRef:u.listRef,slots:u.slots,classNames:u.classNames,isDisabled:u.isDisabled,motionProps:u.motionProps,disableAnimation:u.disableAnimation,shouldSelectOnPressUp:u.shouldSelectOnPressUp,disableCursorAnimation:u.disableCursorAnimation},w=[...c.collection].map(e=>(0,b.jsx)(L,{item:e,...x,...e.props},e.key)),K=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{...f(),children:(0,b.jsx)(o,{...h(),children:v?(0,b.jsx)(T.S,{id:y,children:w}):w})}),(0,b.jsx)(g,{classNames:u.classNames,slots:u.slots,state:u.state},null==(l=c.selectedItem)?void 0:l.key)]});return"placement"in e||"isVertical"in e?(0,b.jsx)("div",{...m(),children:K}):K}var O=(0,r.Gp)(V);V.displayName="NextUI.Tabs"},46999:(e,t,l)=>{l.d(t,{t:()=>a});var r=l(23169);function a(e={}){let{rerender:t=!1,delay:l=0}=e,a=(0,r.useRef)(!1),[n,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{a.current=!0;let e=null;return t&&(l>0?e=setTimeout(()=>{s(!0)},l):s(!0)),()=>{a.current=!1,t&&s(!1),e&&clearTimeout(e)}},[t]),[(0,r.useCallback)(()=>a.current,[]),n]}},13956:(e,t,l)=>{l.d(t,{p:()=>s});var r=l(60611),a=l(23169),n=l(85410);function s(e,t){let l=null==t?void 0:t.isDisabled,[s,i]=(0,a.useState)(!1);return(0,n.b)(()=>{if((null==e?void 0:e.current)&&!l){let t=()=>{e.current&&i(!!(0,r.QL)(e.current,{tabbable:!0}).nextNode())};t();let l=new MutationObserver(t);return l.observe(e.current,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["tabIndex","disabled"]}),()=>{l.disconnect()}}}),!l&&s}},41827:(e,t,l)=>{l.d(t,{D:()=>r});class r{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(null==t?void 0:t.childNodes)||[]}constructor(e){let t;this.keyMap=new Map,this.iterable=e;let l=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&"section"===e.type)for(let t of e.childNodes)l(t)};for(let t of e)l(t);let r=0;for(let[e,l]of this.keyMap)t?(t.nextKey=e,l.prevKey=t.key):(this.firstKey=e,l.prevKey=void 0),"item"===l.type&&(l.index=r++),(t=l).nextKey=void 0;this.lastKey=null==t?void 0:t.key}}},33089:(e,t,l)=>{l.d(t,{n:()=>o});var r=l(41827),a=l(30863),n=l(26168),s=l(23169),i=l(22617);function o(e){let{filter:t}=e,l=(0,a.q)(e),o=(0,s.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),d=(0,s.useCallback)(e=>new r.D(t?t(e):e),[t]),u=(0,s.useMemo)(()=>({suppressTextValueWarning:e.suppressTextValueWarning}),[e.suppressTextValueWarning]),c=(0,i.K)(e,d,u),b=(0,s.useMemo)(()=>new n.Z(c,l),[c,l]),g=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(null!=l.focusedKey&&!c.getItem(l.focusedKey)){let e;let t=g.current.getItem(l.focusedKey),r=[...g.current.getKeys()].map(e=>{let t=g.current.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),a=[...c.getKeys()].map(e=>{let t=c.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),n=r.length-a.length,s=Math.min(n>1?Math.max(t.index-n+1,0):t.index,a.length-1);for(;s>=0;){if(!b.isDisabled(a[s].key)){e=a[s];break}s<a.length-1?s++:(s>t.index&&(s=t.index),s--)}l.setFocusedKey(e?e.key:null)}g.current=c},[c,b,l,l.focusedKey]),{collection:c,disabledKeys:o,selectionManager:b}}},17925:(e,t,l)=>{l.d(t,{B:()=>s});var r=l(33089),a=l(93965),n=l(23169);function s(e){var t;let[l,s]=(0,a.z)(e.selectedKey,null!==(t=e.defaultSelectedKey)&&void 0!==t?t:null,e.onSelectionChange),i=(0,n.useMemo)(()=>null!=l?[l]:[],[l]),{collection:o,disabledKeys:d,selectionManager:u}=(0,r.n)({...e,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:i,onSelectionChange:t=>{var r;let a=null!==(r=t.values().next().value)&&void 0!==r?r:null;a===l&&e.onSelectionChange&&e.onSelectionChange(a),s(a)}}),c=null!=l?o.getItem(l):null;return{collection:o,disabledKeys:d,selectionManager:u,selectedKey:l,setSelectedKey:s,selectedItem:c}}},6730:(e,t,l)=>{l.d(t,{S:()=>u});var r=l(23169),a=l(31054);let n=(0,r.createContext)(null);var s=l(48404);let i=e=>!e.isLayoutDirty&&e.willUpdate(!1),o=e=>!0===e,d=e=>o(!0===e)||"id"===e,u=({children:e,id:t,inherit:l=!0})=>{let u=(0,r.useContext)(a.p),c=(0,r.useContext)(n),[b,g]=(0,s.N)(),p=(0,r.useRef)(null),f=u.id||c;null===p.current&&(d(l)&&f&&(t=t?f+"-"+t:f),p.current={id:t,group:o(l)&&u.group||function(){let e=new Set,t=new WeakMap,l=()=>e.forEach(i);return{add:r=>{e.add(r),t.set(r,r.addEventListener("willUpdate",l))},remove:r=>{e.delete(r);let a=t.get(r);a&&(a(),t.delete(r)),l()},dirty:l}}()});let h=(0,r.useMemo)(()=>({...p.current,forceRender:b}),[g]);return r.createElement(a.p.Provider,{value:h},e)}},26850:(e,t,l)=>{l.d(t,{Z:()=>u});let r=e=>"object"==typeof e&&null!=e&&1===e.nodeType,a=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,n=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let l=getComputedStyle(e,null);return a(l.overflowY,t)||a(l.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},s=(e,t,l,r,a,n,s,i)=>n<e&&s>t||n>e&&s<t?0:n<=e&&i<=l||s>=t&&i>=l?n-e-r:s>t&&i<l||n<e&&i>l?s-t+a:0,i=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t},o=(e,t)=>{var l,a,o,d;if("undefined"==typeof document)return[];let{scrollMode:u,block:c,inline:b,boundary:g,skipOverflowHiddenElements:p}=t,f="function"==typeof g?g:e=>e!==g;if(!r(e))throw TypeError("Invalid target");let h=document.scrollingElement||document.documentElement,m=[],y=e;for(;r(y)&&f(y);){if((y=i(y))===h){m.push(y);break}null!=y&&y===document.body&&n(y)&&!n(document.documentElement)||null!=y&&n(y,p)&&m.push(y)}let v=null!=(a=null==(l=window.visualViewport)?void 0:l.width)?a:innerWidth,x=null!=(d=null==(o=window.visualViewport)?void 0:o.height)?d:innerHeight,{scrollX:w,scrollY:K}=window,{height:k,width:M,top:C,right:D,bottom:N,left:L}=e.getBoundingClientRect(),{top:S,right:W,bottom:A,left:P}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),I="start"===c||"nearest"===c?C-S:"end"===c?N+A:C+k/2-S+A,j="center"===b?L+M/2-P+W:"end"===b?D+W:L-P,B=[];for(let e=0;e<m.length;e++){let t=m[e],{height:l,width:r,top:a,right:n,bottom:i,left:o}=t.getBoundingClientRect();if("if-needed"===u&&C>=0&&L>=0&&N<=x&&D<=v&&C>=a&&N<=i&&L>=o&&D<=n)break;let d=getComputedStyle(t),g=parseInt(d.borderLeftWidth,10),p=parseInt(d.borderTopWidth,10),f=parseInt(d.borderRightWidth,10),y=parseInt(d.borderBottomWidth,10),S=0,W=0,A="offsetWidth"in t?t.offsetWidth-t.clientWidth-g-f:0,P="offsetHeight"in t?t.offsetHeight-t.clientHeight-p-y:0,F="offsetWidth"in t?0===t.offsetWidth?0:r/t.offsetWidth:0,E="offsetHeight"in t?0===t.offsetHeight?0:l/t.offsetHeight:0;if(h===t)S="start"===c?I:"end"===c?I-x:"nearest"===c?s(K,K+x,x,p,y,K+I,K+I+k,k):I-x/2,W="start"===b?j:"center"===b?j-v/2:"end"===b?j-v:s(w,w+v,v,g,f,w+j,w+j+M,M),S=Math.max(0,S+K),W=Math.max(0,W+w);else{S="start"===c?I-a-p:"end"===c?I-i+y+P:"nearest"===c?s(a,i,l,p,y+P,I,I+k,k):I-(a+l/2)+P/2,W="start"===b?j-o-g:"center"===b?j-(o+r/2)+A/2:"end"===b?j-n+f+A:s(o,n,r,g,f+A,j,j+M,M);let{scrollLeft:e,scrollTop:d}=t;S=0===E?0:Math.max(0,Math.min(d+S/E,t.scrollHeight-l/E+P)),W=0===F?0:Math.max(0,Math.min(e+W/F,t.scrollWidth-r/F+A)),I+=d-S,j+=e-W}B.push({el:t,top:S,left:W})}return B},d=e=>!1===e?{block:"end",inline:"nearest"}:e===Object(e)&&0!==Object.keys(e).length?e:{block:"start",inline:"nearest"};function u(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;if("object"==typeof t&&"function"==typeof t.behavior)return t.behavior(o(e,t));let l="boolean"==typeof t||null==t?void 0:t.behavior;for(let{el:r,top:a,left:n}of o(e,d(t)))r.scroll({top:a,left:n,behavior:l})}}};