(()=>{var e={};e.id=6567,e.ids=[6567],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},70612:e=>{"use strict";e.exports=require("node:os")},97742:e=>{"use strict";e.exports=require("node:process")},25997:e=>{"use strict";e.exports=require("node:tty")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},39512:e=>{"use strict";e.exports=require("timers")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},60548:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),s(28297),s(34476),s(67397),s(57779);var t=s(57027),a=s(36858),o=s(32124),i=s.n(o),n=s(95994),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(r,l);let d=["",{children:["(main)",{children:["admin",{children:["logs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,28297)),"C:\\Projects\\CSS-Panel\\app\\(main)\\admin\\logs\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,34476)),"C:\\Projects\\CSS-Panel\\app\\(main)\\admin\\layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,67397,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,57779)),"C:\\Projects\\CSS-Panel\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,67397,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Projects\\CSS-Panel\\app\\(main)\\admin\\logs\\page.tsx"],c="/(main)/admin/logs/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(main)/admin/logs/page",pathname:"/admin/logs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},39370:(e,r,s)=>{Promise.resolve().then(s.bind(s,86082)),Promise.resolve().then(s.bind(s,47920))},55411:(e,r,s)=>{Promise.resolve().then(s.bind(s,97047))},86082:(e,r,s)=>{"use strict";s.d(r,{default:()=>l});var t=s(37307),a=s(45944),o=s(51673),i=s(23169),n=s(94900);let l=({children:e,flags:r})=>{let{admin:s,isLoading:l}=(0,n.ZP)(),d=(0,o.useRouter)();return(0,i.useEffect)(()=>{if(!l&&(!s||r.length>0&&!r.some(e=>s.flags?.includes(e))))return d.push("/")},[s,l,d,r]),l?t.jsx(a.c,{}):s?t.jsx(t.Fragment,{children:e}):t.jsx(t.Fragment,{children:"No Access"})}},47920:(e,r,s)=>{"use strict";s.d(r,{default:()=>l,r:()=>d});var t=s(37307),a=s(51673),o=s(67600),i=s(22215),n=s(94900);let l=()=>{let e=(0,a.usePathname)(),r=(0,a.useRouter)(),{admin:s}=(0,n.ZP)(),l=s?.flags||[],u=d.filter(e=>e.permissions.some(e=>l.includes(e)));return t.jsx(o.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>r.push(e),items:u,children:e=>t.jsx(i.r,{title:e.title},e.path)})},d=[{path:"/admin",title:"Statistics",permissions:["@web/root","@web/logs","@css/root","@web/stats"]},{path:"/admin/modules",title:"Modules",permissions:["@web/root","@css/root"]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers","@web/rcon"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},97047:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>j});var t=s(37307),a=s(23169),o=s(96598),i=s(22693),n=s(50580),l=s(38121),d=s(38848),u=s(45944),c=s(51673),m=s(47920),p=s(86624),g=s(78758),x=s(86082),h=s(38375),b=s(84841),f=s(31979),w=s(72804),v=s(42600);let P=({admin:e,message:r,title:s,time:a})=>(0,t.jsxs)(o.w,{fullWidth:!0,children:[e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.u,{className:"flex gap-3",children:[t.jsx(f.J,{alt:e.user?.personaname||e.player_name,height:40,radius:"sm",src:e.user?.avatarmedium,width:40}),(0,t.jsxs)("div",{className:"flex flex-col",children:[t.jsx("p",{className:"text-md font-medium",children:e.user?.personaname||e.player_name}),t.jsx("p",{className:"text-small text-default-500",children:"Flags"})]})]}),t.jsx(w.j,{})]}),(0,t.jsxs)(n.G,{children:[t.jsx("h4",{className:"text-lg font-medium",children:s}),t.jsx("p",{className:"text-sm",children:r})]}),t.jsx(w.j,{}),t.jsx(l.i,{className:"text-sm",children:(0,v.Q)(a)+" ago"})]}),j=()=>{let[e,r]=(0,a.useState)(1),[s,f]=(0,a.useState)(""),[w]=(0,g.Nr)(s,1e3),{data:v,isLoading:j}=(0,b.ZP)(`/api/admin/logs?page=${e}&rows=20&query=${w}`,h.Z,{keepPreviousData:!0}),y=(0,a.useMemo)(()=>v?.count?Math.ceil(v.count/20):0,[v?.count,20]),S=(0,c.usePathname)(),C=m.r.find(e=>e.path===S);return t.jsx(x.default,{flags:C?.permissions||[],children:(0,t.jsxs)(o.w,{children:[(0,t.jsxs)(i.u,{className:"text-2xl font-medium flex flex-row justify-between items-center",children:[t.jsx("div",{children:"Logs"}),t.jsx(p.Y,{label:"Search...",placeholder:"You can search by title or message...",className:"w-1/5",value:s,onValueChange:f,isClearable:!0})]}),t.jsx(n.G,{className:"grid lg:grid-cols-3 gap-4",children:j?t.jsx(u.c,{}):v&&v.results?.map(e=>a.createElement(P,{...e,key:e.id}))}),t.jsx(l.i,{children:t.jsx(d.g,{color:"primary",page:e,total:y,onChange:e=>r(e),className:"mx-auto mt-10",size:"sm",isCompact:!0,showControls:!0,showShadow:!0})})]})})}},34476:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>g,metadata:()=>p});var t=s(16057),a=s(92881);let o=(0,a.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\Tabs.tsx`),{__esModule:i,$$typeof:n}=o;o.default;let l=(0,a.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\Tabs.tsx#default`);(0,a.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\Tabs.tsx#ADMIN_TABS`);let d=(0,a.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\AdminCheck.tsx`),{__esModule:u,$$typeof:c}=d;d.default;let m=(0,a.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\AdminCheck.tsx#default`),p={title:"Admin Panel"},g=({children:e})=>(0,t.jsxs)(m,{flags:["@css/rcon","@css/root","@web/admingroups","@web/admins","@web/bans","@web/logs","@web/mutes","@web/root","@web/servers","@web/stats","@web/rcon"],children:[t.jsx(l,{}),e]})},28297:(e,r,s)=>{"use strict";s.r(r),s.d(r,{$$typeof:()=>i,__esModule:()=>o,default:()=>n});var t=s(92881);let a=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\logs\page.tsx`),{__esModule:o,$$typeof:i}=a;a.default;let n=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\logs\page.tsx#default`)},38121:(e,r,s)=>{"use strict";s.d(r,{i:()=>d});var t=s(87179),a=s(69206),o=s(84661),i=s(58462),n=s(37307),l=(0,a.Gp)((e,r)=>{var s;let{as:a,className:l,children:d,...u}=e,c=(0,o.gy)(r),{slots:m,classNames:p}=(0,t.R)(),g=(0,i.W)(null==p?void 0:p.footer,l);return(0,n.jsx)(a||"div",{ref:c,className:null==(s=m.footer)?void 0:s.call(m,{class:g}),...u,children:d})});l.displayName="NextUI.CardFooter";var d=l},31979:(e,r,s)=>{"use strict";s.d(r,{J:()=>p});var t=s(23169),a=s(69206),o=(0,s(97872).tv)({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1,disableAnimation:!1},compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),i=s(84661),n=s(41962),l=s(58462),d=s(41118),u=s(75184),c=s(37307),m=(0,a.Gp)((e,r)=>{let{Component:s,domRef:m,slots:p,classNames:g,isBlurred:x,isZoomed:h,fallbackSrc:b,removeWrapper:f,disableSkeleton:w,getImgProps:v,getWrapperProps:P,getBlurredImgProps:j}=function(e){let[r,s]=(0,a.oe)(e,o.variantKeys),{ref:c,as:m,src:p,className:g,classNames:x,loading:h,isBlurred:b,fallbackSrc:f,isLoading:w,disableSkeleton:v=!!f,removeWrapper:P=!1,onError:j,onLoad:y,srcSet:S,sizes:C,crossOrigin:q,..._}=r,N=(0,u.d)({src:p,loading:h,onError:j,onLoad:y,ignoreFallback:!1,srcSet:S,sizes:C,crossOrigin:q}),I="loaded"===N&&!w,k="loading"===N||w,M=e.isZoomed,A=(0,i.gy)(c),{w:z}=(0,t.useMemo)(()=>({w:r.width?"number"==typeof r.width?`${r.width}px`:r.width:"fit-content"}),[null==r?void 0:r.width]),W=(!p||!I)&&!!f,G=k&&!v,$=(0,t.useMemo)(()=>o({...s,showSkeleton:G}),[(0,n.Xx)(s),G]),E=(0,l.W)(g,null==x?void 0:x.img),U=(0,t.useCallback)(()=>{let e=W?{backgroundImage:`url(${f})`}:{};return{className:$.wrapper({class:null==x?void 0:x.wrapper}),style:{...e,maxWidth:z}}},[$,W,f,null==x?void 0:x.wrapper]),Z=(0,t.useCallback)(()=>({src:p,"aria-hidden":(0,d.PB)(!0),className:$.blurredImg({class:null==x?void 0:x.blurredImg})}),[$,p,null==x?void 0:x.blurredImg]);return{Component:m||"img",domRef:A,slots:$,classNames:x,isBlurred:b,disableSkeleton:v,fallbackSrc:f,removeWrapper:P,isZoomed:M,isLoading:k,getImgProps:(e={})=>{let r=(0,l.W)(E,null==e?void 0:e.className);return{src:p,ref:A,"data-loaded":(0,d.PB)(I),className:$.img({class:r}),loading:h,srcSet:S,sizes:C,crossOrigin:q,..._}},getWrapperProps:U,getBlurredImgProps:Z}}({...e,ref:r}),y=(0,c.jsx)(s,{ref:m,...v()});if(f)return y;let S=(0,c.jsx)("div",{className:p.zoomedWrapper({class:null==g?void 0:g.zoomedWrapper}),children:y});return x?(0,c.jsxs)("div",{...P(),children:[h?S:y,(0,t.cloneElement)(y,j())]}):h||!w||b?(0,c.jsxs)("div",{...P(),children:[" ",h?S:y]}):y});m.displayName="NextUI.Image";var p=m}};var r=require("../../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[1225,6624,8027,6746,5918,96],()=>s(60548));module.exports=t})();