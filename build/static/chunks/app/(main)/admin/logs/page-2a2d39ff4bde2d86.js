(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6567],{4529:function(e,t,r){Promise.resolve().then(r.bind(r,67370))},53410:function(e,t,r){"use strict";var a=r(94773),s=r(73607),n=r(42778),o=r(44208),i=r(46736);t.default=e=>{let{children:t,flags:r}=e,{admin:l,isLoading:d}=(0,i.ZP)(),u=(0,n.useRouter)();return(0,o.useEffect)(()=>{if(!d&&(!l||r.length>0&&!r.some(e=>{var t;return null===(t=l.flags)||void 0===t?void 0:t.includes(e)})))return u.push("/")},[l,d,u,r]),d?(0,a.jsx)(s.c,{}):l?(0,a.jsx)(a.Fragment,{children:t}):(0,a.jsx)(a.Fragment,{children:"No Access"})}},27911:function(e,t,r){"use strict";r.d(t,{r:function(){return l}});var a=r(94773),s=r(42778),n=r(94408),o=r(63733),i=r(46736);t.default=()=>{let e=(0,s.usePathname)(),t=(0,s.useRouter)(),{admin:r}=(0,i.ZP)(),d=(null==r?void 0:r.flags)||[],u=l.filter(e=>e.permissions.some(e=>d.includes(e)));return(0,a.jsx)(n.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>t.push(e),items:u,children:e=>(0,a.jsx)(o.r,{title:e.title},e.path)})};let l=[{path:"/admin",title:"Statistics",permissions:["@web/root","@web/logs","@css/root","@web/stats"]},{path:"/admin/modules",title:"Modules",permissions:["@web/root","@css/root"]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers","@web/rcon"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},67370:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var a=r(94773),s=r(44208),n=r(81627),o=r(20531),i=r(8286),l=r(51868),d=r(39206),u=r(73607),c=r(42778),m=r(27911),p=r(90885),h=r(68179),g=r(53410),f=r(83455),v=r(17054),b=r(47726),w=r(62442),x=r(98471),y=e=>{var t,r,s;let{admin:d,message:u,title:c,time:m}=e;return(0,a.jsxs)(n.w,{fullWidth:!0,children:[d&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.u,{className:"flex gap-3",children:[(0,a.jsx)(b.J,{alt:(null===(t=d.user)||void 0===t?void 0:t.personaname)||d.player_name,height:40,radius:"sm",src:null===(r=d.user)||void 0===r?void 0:r.avatarmedium,width:40}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"text-md font-medium",children:(null===(s=d.user)||void 0===s?void 0:s.personaname)||d.player_name}),(0,a.jsx)("p",{className:"text-small text-default-500",children:"Flags"})]})]}),(0,a.jsx)(w.j,{})]}),(0,a.jsxs)(i.G,{children:[(0,a.jsx)("h4",{className:"text-lg font-medium",children:c}),(0,a.jsx)("p",{className:"text-sm",children:u})]}),(0,a.jsx)(w.j,{}),(0,a.jsx)(l.i,{className:"text-sm",children:(0,x.Q)(m)+" ago"})]})},j=()=>{var e;let[t,r]=(0,s.useState)(1),[b,w]=(0,s.useState)(""),[x]=(0,h.Nr)(b,1e3),{data:j,isLoading:N}=(0,v.ZP)("/api/admin/logs?page=".concat(t,"&rows=").concat(20,"&query=").concat(x),f.Z,{keepPreviousData:!0}),k=(0,s.useMemo)(()=>(null==j?void 0:j.count)?Math.ceil(j.count/20):0,[null==j?void 0:j.count,20]),P=(0,c.usePathname)(),z=m.r.find(e=>e.path===P);return(0,a.jsx)(g.default,{flags:(null==z?void 0:z.permissions)||[],children:(0,a.jsxs)(n.w,{children:[(0,a.jsxs)(o.u,{className:"text-2xl font-medium flex flex-row justify-between items-center",children:[(0,a.jsx)("div",{children:"Logs"}),(0,a.jsx)(p.Y,{label:"Search...",placeholder:"You can search by title or message...",className:"w-1/5",value:b,onValueChange:w,isClearable:!0})]}),(0,a.jsx)(i.G,{className:"grid lg:grid-cols-3 gap-4",children:N?(0,a.jsx)(u.c,{}):j&&(null===(e=j.results)||void 0===e?void 0:e.map(e=>(0,s.createElement)(y,{...e,key:e.id})))}),(0,a.jsx)(l.i,{children:(0,a.jsx)(d.g,{color:"primary",page:t,total:k,onChange:e=>r(e),className:"mx-auto mt-10",size:"sm",isCompact:!0,showControls:!0,showShadow:!0})})]})})}},42778:function(e,t,r){"use strict";var a=r(63802);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},83455:function(e,t,r){"use strict";var a=r(24909);t.Z=e=>a.Z.get(e).then(e=>e.data)},46736:function(e,t,r){"use strict";r.d(t,{hY:function(){return i},jc:function(){return l}});var a=r(96509),s=r(17054),n=r(83455),o=r(24909);let i=async()=>{await (0,o.Z)("/api/auth/logout"),await (0,s.JG)("/api/auth"),a.Am.success("Logged out successfully")},l=()=>{let e=window.innerWidth/2-300,t=window.innerHeight/2-400,r=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(t,", left=").concat(e)),n=setInterval(async()=>{r&&r.closed&&(await (0,s.JG)("/api/auth"),a.Am.success("Logged in successfully!"),clearInterval(n))},1e3)};t.ZP=()=>{let{data:e,isLoading:t,error:r}=(0,s.ZP)("/api/auth",n.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:r||!e?null:e.user,admin:r||!e?null:e.admin,masterAdmin:!r&&!!e&&e.masterAdmin,isLoading:t}}},51868:function(e,t,r){"use strict";r.d(t,{i:function(){return d}});var a=r(58958),s=r(48695),n=r(24572),o=r(52162),i=r(94773),l=(0,s.Gp)((e,t)=>{var r;let{as:s,className:l,children:d,...u}=e,c=(0,n.gy)(t),{slots:m,classNames:p}=(0,a.R)(),h=(0,o.W)(null==p?void 0:p.footer,l);return(0,i.jsx)(s||"div",{ref:c,className:null==(r=m.footer)?void 0:r.call(m,{class:h}),...u,children:d})});l.displayName="NextUI.CardFooter";var d=l},62442:function(e,t,r){"use strict";r.d(t,{j:function(){return d}});var a=r(13684),s=(0,r(63978).tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),n=r(44208),o=r(48695),i=r(94773),l=(0,o.Gp)((e,t)=>{let{Component:r,getDividerProps:o}=function(e){var t;let r,o;let{as:i,className:l,orientation:d,...u}=e,c=i||"hr";"hr"===c&&"vertical"===d&&(c="div");let{separatorProps:m}=(t={elementType:"string"==typeof c?c:"hr",orientation:d},o=(0,a.z)(t,{enabled:"string"==typeof t.elementType}),("vertical"===t.orientation&&(r="vertical"),"hr"!==t.elementType)?{separatorProps:{...o,role:"separator","aria-orientation":r}}:{separatorProps:o}),p=(0,n.useMemo)(()=>s({orientation:d,className:l}),[d,l]);return{Component:c,getDividerProps:(0,n.useCallback)((e={})=>({className:p,role:"separator","data-orientation":d,...m,...u,...e}),[p,d,m,u])}}({...e});return(0,i.jsx)(r,{ref:t,...o()})});l.displayName="NextUI.Divider";var d=l},47726:function(e,t,r){"use strict";r.d(t,{J:function(){return p}});var a=r(44208),s=r(48695),n=(0,r(63978).tv)({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1,disableAnimation:!1},compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),o=r(24572),i=r(59070),l=r(52162),d=r(18198),u=r(73207),c=r(94773),m=(0,s.Gp)((e,t)=>{let{Component:r,domRef:m,slots:p,classNames:h,isBlurred:g,isZoomed:f,fallbackSrc:v,removeWrapper:b,disableSkeleton:w,getImgProps:x,getWrapperProps:y,getBlurredImgProps:j}=function(e){let[t,r]=(0,s.oe)(e,n.variantKeys),{ref:c,as:m,src:p,className:h,classNames:g,loading:f,isBlurred:v,fallbackSrc:b,isLoading:w,disableSkeleton:x=!!b,removeWrapper:y=!1,onError:j,onLoad:N,srcSet:k,sizes:P,crossOrigin:z,...C}=t,I=(0,u.d)({src:p,loading:f,onError:j,onLoad:N,ignoreFallback:!1,srcSet:k,sizes:P,crossOrigin:z}),S="loaded"===I&&!w,W="loading"===I||w,Z=e.isZoomed,M=(0,o.gy)(c),{w:A}=(0,a.useMemo)(()=>({w:t.width?"number"==typeof t.width?"".concat(t.width,"px"):t.width:"fit-content"}),[null==t?void 0:t.width]),_=(!p||!S)&&!!b,R=W&&!x,F=(0,a.useMemo)(()=>n({...r,showSkeleton:R}),[(0,i.Xx)(r),R]),E=(0,l.W)(h,null==g?void 0:g.img),G=(0,a.useCallback)(()=>{let e=_?{backgroundImage:"url(".concat(b,")")}:{};return{className:F.wrapper({class:null==g?void 0:g.wrapper}),style:{...e,maxWidth:A}}},[F,_,b,null==g?void 0:g.wrapper]),L=(0,a.useCallback)(()=>({src:p,"aria-hidden":(0,d.PB)(!0),className:F.blurredImg({class:null==g?void 0:g.blurredImg})}),[F,p,null==g?void 0:g.blurredImg]);return{Component:m||"img",domRef:M,slots:F,classNames:g,isBlurred:v,disableSkeleton:x,fallbackSrc:b,removeWrapper:y,isZoomed:Z,isLoading:W,getImgProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.W)(E,null==e?void 0:e.className);return{src:p,ref:M,"data-loaded":(0,d.PB)(S),className:F.img({class:t}),loading:f,srcSet:k,sizes:P,crossOrigin:z,...C}},getWrapperProps:G,getBlurredImgProps:L}}({...e,ref:t}),N=(0,c.jsx)(r,{ref:m,...x()});if(b)return N;let k=(0,c.jsx)("div",{className:p.zoomedWrapper({class:null==h?void 0:h.zoomedWrapper}),children:N});return g?(0,c.jsxs)("div",{...y(),children:[f?k:N,(0,a.cloneElement)(N,j())]}):f||!w||v?(0,c.jsxs)("div",{...y(),children:[" ",f?k:N]}):N});m.displayName="NextUI.Image";var p=m},43080:function(e,t,r){"use strict";r.d(t,{i:function(){return n}});var a=r(59070),s=r(44208);function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=(0,s.useState)([]);return{ripples:t,onClick:(0,s.useCallback)(e=>{let t=e.currentTarget,s=Math.max(t.clientWidth,t.clientHeight),n=t.getBoundingClientRect();r(t=>[...t,{key:(0,a.QI)(t.length.toString()),size:s,x:e.clientX-n.left-s/2,y:e.clientY-n.top-s/2}])},[]),onClear:(0,s.useCallback)(e=>{r(t=>t.filter(t=>t.key!==e))},[]),...e}}},37567:function(e,t,r){"use strict";r.d(t,{L:function(){return u}});var a=r(81470),s=r(28453),n=r(52914),o=r(67552),i=r(8966),l=r(94773),d=e=>{let{ripples:t=[],motionProps:r,color:d="currentColor",style:u,onClear:c}=e;return(0,l.jsx)(l.Fragment,{children:t.map(e=>{let t=(0,i.uZ)(.01*e.size,.2,e.size>100?.75:.5);return(0,l.jsx)(a.M,{mode:"popLayout",children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.X,{features:n.H,children:(0,l.jsx)(o.m.span,{animate:{transform:"scale(2)",opacity:0},className:"nextui-ripple",exit:{opacity:0},initial:{transform:"scale(0)",opacity:.35},style:{position:"absolute",backgroundColor:d,borderRadius:"100%",transformOrigin:"center",pointerEvents:"none",overflow:"hidden",inset:0,zIndex:0,top:e.y,left:e.x,width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),...u},transition:{duration:t},onAnimationComplete:()=>{c(e.key)},...r})})})},e.key)})})};d.displayName="NextUI.Ripple";var u=d}},function(e){e.O(0,[2349,4166,7923,6509,6634,885,1384,2390,2684,5147,803,1744],function(){return e(e.s=4529)}),_N_E=e.O()}]);