"use strict";exports.id=4400,exports.ids=[4400],exports.modules={53472:(e,s,a)=>{a.d(s,{default:()=>p});var r=a(37307),l=a(54567),t=a(79952),n=a(24787),i=a(58211),c=a(84410),o=a(12817),d=a(89284),m=a(23169),x=a(9893),h=a(74410),u=a(31672);let p=()=>{let e=(0,x.Z)(e=>e.open),s=(0,x.Z)(e=>e.serverId),a=(0,x.Z)(e=>e.userId),p=(0,x.Z)(e=>e.handleClose),[j,f]=(0,m.useState)(""),[g,y]=(0,m.useState)(!1),v=async e=>{if(e.preventDefault(),!g){y(!0);try{await u.Z.post(`/api/servers/${s}/report`,{userId:a,reason:j}),h.ZP.success("Thanks! your report sent!"),f(""),p()}catch(e){console.error(e),h.ZP.error(e?.response?.data||"An error occurred while sending the report."),f(""),p()}y(!1)}};return r.jsx(l.R,{size:"2xl",isOpen:e,onClose:p,backdrop:"blur",children:r.jsx(t.A,{children:e=>(0,r.jsxs)("form",{onSubmit:v,children:[r.jsx(n.k,{children:"Report Player"}),(0,r.jsxs)(i.I,{children:[r.jsx("p",{children:"Please provide a valid detailed reason for the report."}),r.jsx(o.Y,{label:"Reason",type:"text",size:"sm",value:j,variant:"flat",onValueChange:e=>f(e),disabled:g})]}),(0,r.jsxs)(c.R,{className:"flex flex-row items-center gap-4",children:[r.jsx(d.A,{onClick:p,color:"danger",children:"Close"}),r.jsx(d.A,{type:"submit",isLoading:g,color:"primary",children:"Report"})]})]})})})}},9893:(e,s,a)=>{a.d(s,{Z:()=>r});let r=(0,a(32371).Ue)(e=>({open:!1,serverId:0,userId:"",handleClose:()=>e({open:!1}),handleOpen:(s,a)=>e({open:!0,serverId:s,userId:a})}))},60484:(e,s,a)=>{a.d(s,{default:()=>f});var r=a(37307),l=a(54567),t=a(79952),n=a(58211),i=a(84410),c=a(89284),o=a(86624),d=a(23169),m=a(78156),x=a(84841),h=a(36602),u=a(74410),p=a(31672),j=a(38375);let f=()=>{let e=(0,h.Z)(e=>e.chatModal),{open:s,server:a}=e,f=(0,h.Z)(e=>e.setChatModal),{data:g,isLoading:y,mutate:v}=(0,x.ZP)(s&&a?.id?`/api/servers/${a.id}/chat`:void 0,j.Z,{refreshInterval:2e3}),[b,w]=(0,d.useState)(""),[N,C]=(0,d.useState)(!1),[S,P]=(0,d.useState)(!1),Z=async e=>{if(e.preventDefault(),!S&&a){P(!0),w("");try{await p.Z.post(`/api/servers/${a.id}/chat`,{message:b,hideName:N}),await v(),u.ZP.success("Message sent!")}catch(e){console.error(e)}P(!1)}},k=(0,d.useRef)(null);return(0,d.useEffect)(()=>{k.current&&k.current.scroll({top:1e3})},[g]),a&&r.jsx(l.R,{size:"4xl",isOpen:s,onClose:()=>f({...e,open:!1}),backdrop:"blur",placement:"bottom",classNames:{base:"bg-cover bg-center bg-no-repeat",body:"min-h-[450px] max-h-[450px] overflow-y-scroll py-4 backdrop-filter backdrop-blur-sm relative",footer:"backdrop-filter backdrop-blur-md border-t-2 border-foreground/20"},children:r.jsx(t.A,{style:{backgroundImage:`url('${"https://image.gametracker.com/images/maps/160x120/csgo/{{map}}.jpg".replace("{{map}}",a.map)||`https://image.gametracker.com/images/maps/160x120/csgo/${a.map}.jpg`}')`},children:e=>a&&(0,r.jsxs)("form",{onSubmit:Z,children:[r.jsx(n.I,{children:r.jsx("div",{ref:k,children:g&&g.length>0&&g.map(e=>(0,r.jsxs)("div",{children:[(0,r.jsxs)("b",{children:[e.team?"[TEAM] ":"",e.playerName,":"," "]}),e.message]},e.id))})}),(0,r.jsxs)(i.R,{className:"flex flex-row items-center gap-4",children:[r.jsx(o.Y,{label:"Type a message...",type:"text",size:"sm",value:b,variant:"flat",onValueChange:e=>w(e),disabled:S||y}),r.jsx(m.e,{content:(0,r.jsxs)(r.Fragment,{children:["Hide your name from the message",r.jsx("br",{}),"Currently: ",N?"Your name is hidden":"Your name is visible"]}),placement:"top",children:r.jsx(c.A,{variant:"flat",size:"sm",color:"secondary",onClick:()=>{C(!N)},children:N?"Hide Name":"Show Name"})})]})]})})})}},20454:(e,s,a)=>{a.d(s,{default:()=>O});var r=a(37307),l=a(76884),t=a(67078),n=a(21504),i=a(29844),c=a(84245),o=a(18811),d=a(54567),m=a(79952),x=a(24787),h=a(58211),u=a(84410),p=a(52855),j=a(10644),f=a(88185),g=a(705),y=a(86624),v=a(89284),b=a(84841),w=a(7713),N=a(68511),C=a(93878),S=a(50436),P=a(89157),Z=a(25640),k=a(36602),A=a(94900),z=a(68527),M=a(31672),I=a(74410),$=a(87235),T=a(32371),L=a(89983);let R=(0,T.Ue)(e=>({action:null,setAction:s=>e({action:s}),isLoading:!1,setIsLoading:s=>e({isLoading:s}),details:null,setDetails:s=>e({details:s}),reset:()=>e({action:null,isLoading:!1,details:null})}));L.z.string(),L.z.object({duration:L.z.number(),reason:L.z.string()}),L.z.object({duration:L.z.number(),reason:L.z.string(),type:$.P});let _=L.z.enum(["kick","ban","mute"]);L.z.object({action:_,userId:L.z.number()});var U=a(14231),H=a(9893),V=a(36908);let O=()=>{let e=(0,k.Z)(e=>e.modal),s=(0,k.Z)(e=>e.setModal),a=(0,k.Z)(e=>e.setChatModal),$=(0,H.Z)(e=>e.handleOpen),T=R(e=>e.action),L=R(e=>e.setAction),_=R(e=>e.details),O=R(e=>e.setDetails),B=R(e=>e.isLoading),F=R(e=>e.setIsLoading),K=R(e=>e.reset),Y=(0,V.k)(e=>e.modules).find(e=>"player-reports"===e.identifier),D=Y?.enabled||!1,{user:E,admin:J}=(0,A.ZP)(),{open:G,server:W}=e,X=()=>s({...e,open:!1}),q=W?.serverIp,Q=W?.address.split(":")[1],ee=q?`${q}:${Q}`:W?.address,es=async()=>{if(T&&!B&&W&&_&&ei){F(!0);try{await M.Z.post(`/api/servers/${W.id}/action`,{action:T,userId:ei.userId,details:_}),await new Promise(e=>setTimeout(e,4e3));let a=await (0,b.JG)(`/api/servers/${W.id}`);a&&s({...e,server:a}),I.ZP.success(`Player ${T}ed successfully`),K()}catch(e){I.ZP.error(`Error ${T}ing player`)}F(!1)}},{x:ea,y:er,open:el,handleCloseMenu:et,handleOpen:en,info:ei}=(0,S.Z)(),ec=(e,s)=>{switch(s){case"userId":return(0,r.jsxs)(j.z,{color:"primary",size:"sm",children:["#",e.userId]});case"playerName":return r.jsx(Z.default,{href:`https://steamcommunity.com/profiles/${e.steam64}`,target:"_blank",children:(0,r.jsxs)(p.z,{avatarProps:{radius:"sm",src:e.avatar,size:"sm"},name:e.playerName,classNames:{name:"flex flex-col gap-2"},children:[e.playerName,r.jsx("span",{children:e.admin?"(Admin)":""})]})});case"steam64":return r.jsx(Z.default,{href:`https://steamcommunity.com/profiles/${e.steam64}`,target:"_blank",className:"underline decoration-blue-500",children:e.steam64});case"kills":return r.jsx("span",{children:e.kills||0});case"deaths":return r.jsx("span",{children:e.deaths||0});case"score":return r.jsx("span",{children:e.score});case"admin":return r.jsx("span",{children:e.admin?r.jsx(f.Z,{size:20}):"-"});case"actions":return E&&E.id!==e.steam64&&D&&r.jsx(r.Fragment,{children:r.jsx(v.A,{color:"secondary",size:"sm",onClick:()=>$(W.id,e.steam64),children:"Report"})});default:return r.jsx(r.Fragment,{})}};return(0,r.jsxs)(d.R,{size:"4xl",isOpen:G,onOpenChange:()=>{!el&&(T||X())},children:[r.jsx(m.A,{children:e=>W&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x.k,{className:"flex flex-col text-center gap-1",children:[r.jsx("h2",{children:W.hostname}),(0,r.jsxs)("span",{className:"font-normal text-foreground-700 text-sm",children:[W.map,r.jsx("br",{}),"number"==typeof W.players?W.players:W.players.length,"/",W.maxPlayers," Players"]})]}),(0,r.jsxs)(h.I,{children:[(0,r.jsxs)(l.b,{isStriped:!0,children:[(0,r.jsxs)(t.J,{children:[r.jsx(n.j,{children:"#"},"userId"),r.jsx(n.j,{children:"Player"},"playerName"),r.jsx(n.j,{children:"SteamID"},"steam64"),r.jsx(n.j,{children:"Kills"},"kills"),r.jsx(n.j,{children:"Deaths"},"deaths"),r.jsx(n.j,{children:"Score"},"score"),r.jsx(n.j,{children:"Admin"},"admin"),r.jsx(n.j,{children:"Actions"},"actions")]}),r.jsx(i.y,{items:"number"!=typeof W.players?W.players:[],children:e=>r.jsx(c.g,{onContextMenu:s=>J&&en&&en(s,e)||void 0,children:s=>r.jsx(o.X,{className:"pb-1 pt-2",children:ec(e,s)})},e.userId)})]}),J&&r.jsx("span",{className:"text-sm",children:"Tip, your can right click on a player row for more actions, such as kick, ban, and more!"})]}),(0,r.jsxs)(u.R,{children:[J&&r.jsx(v.A,{color:"secondary",variant:"flat",onPress:()=>a({open:!0,server:W}),children:"Open Chat"}),r.jsx(v.A,{color:"danger",variant:"flat",onPress:e,children:"Close"}),r.jsx(Z.default,{href:`steam://connect/${ee}`,passHref:!0,children:r.jsx(v.A,{color:"primary",children:"Connect"})})]})]})}),J&&(0,r.jsxs)(z.Z,{open:"kick"===T,handleClose:K,action:es,isLoading:B,actionText:"Kick",children:[(0,r.jsxs)("div",{children:["Are you sure you want to kick ",ei?.playerName,"?"]}),r.jsx(y.Y,{placeholder:"Reason",value:_||"",onValueChange:e=>O(e)})]}),J&&(0,r.jsxs)(z.Z,{open:"ban"===T,handleClose:K,action:es,isLoading:B,actionText:"Ban",children:[(0,r.jsxs)("div",{children:["Are you sure you want to ban ",ei?.playerName,"?"]}),r.jsx(y.Y,{placeholder:"Reason",value:_?.reason||"",onValueChange:e=>O({..._,reason:e})}),r.jsx(y.Y,{placeholder:"Time (in minutes)",type:"number",value:_?.duration?.toString()||"",onValueChange:e=>O({..._,duration:Number(e)}),description:"Time in minutes, 0 = Permanent ban"}),(0,r.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,r.jsxs)("span",{children:["The ban will start at ",r.jsx("b",{children:(0,U.Z)()})]}),(0,r.jsxs)("span",{children:["the ban will end at"," ",r.jsx("b",{children:_?.duration?.toString()==="0"?r.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,U.Z)(new Date().getTime()+6e4*Number(_?.duration))})]})]})]}),J&&(0,r.jsxs)(z.Z,{open:"mute"===T,handleClose:K,action:es,isLoading:B,actionText:"Mute",children:[(0,r.jsxs)("div",{children:["Are you sure you want to mute ",ei?.playerName,"?"]}),r.jsx(y.Y,{placeholder:"Reason",value:_?.reason||"",onValueChange:e=>O({..._,reason:e})}),r.jsx(w.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[_?.type],onChange:e=>O({..._,type:e.target.value}),disallowEmptySelection:!0,children:C.f.map(e=>r.jsx(N.R,{value:e.value,children:e.name},e.value))}),r.jsx(y.Y,{placeholder:"Time (in minutes)",type:"number",value:_?.duration?.toString()||"",onValueChange:e=>O({..._,duration:Number(e)}),description:"Time in minutes, 0 = Permanent mute"}),(0,r.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,r.jsxs)("span",{children:["The mute will start again at ",r.jsx("b",{children:(0,U.Z)()})]}),(0,r.jsxs)("span",{children:["the mute will end at"," ",r.jsx("b",{children:_?.duration?.toString()==="0"?r.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,U.Z)(new Date().getTime()+6e4*Number(_?.duration))})]})]})]}),J&&r.jsx(P.Z,{open:el,x:ea,y:er,handleCloseMenu:et,items:[{category:"Player Actions",items:(ei?.admin?.immunity||0)>J.immunity?[]:[{key:"Kick",description:"Kick the player from the server",icon:g.Z,color:"default",onClick:()=>{L("kick"),O("")},flags:["@css/ban","@css/kick","@css/generic","@css/rcon","@css/root","@css/unban","@css/chat","@web/bans","@web/root"]},{key:"Ban",description:"Ban the player from the server for specific time",icon:g.Z,color:"danger",onClick:()=>{L("ban"),O({duration:0,reason:""})},flags:["@css/ban","@css/kick","@css/generic","@css/rcon","@css/root","@css/unban","@css/chat","@web/bans","@web/root"]},{key:"Mute",description:"Mute the player for specific time",icon:g.Z,color:"danger",onClick:()=>{L("mute"),O({duration:0,reason:"",type:"MUTE"})},flags:["@css/ban","@css/kick","@css/generic","@css/rcon","@css/root","@css/chat","@web/mutes","@web/root"]}]}]})]})}},45126:(e,s,a)=>{a.d(s,{default:()=>w});var r=a(37307),l=a(48983),t=a(21617),n=a(85570),i=a(70263),c=a(58160),o=a(96598),d=a(50580),m=a(69246),x=a(78156),h=a(45944),u=a(89284),p=a(31979),j=a(69206),f=a(74410),g=a(36602),y=a(38375),v=a(25640),b=a(84841);let w=({id:e,hostname:s,address:a})=>{let{data:w,isLoading:N,error:C}=(0,b.ZP)(`/api/servers/${e}`,y.Z),S=(0,g.Z)(e=>e.setModal),{serverIp:P}=w||{},Z=a.split(":")[1],k=P?`${P}:${Z}`:a;if(N)return r.jsx(o.w,{className:"border-none bg-content1",shadow:"sm",onClick:()=>open(`steam://connect/${k}`,"_self"),isBlurred:!0,isPressable:!0,children:r.jsx(d.G,{children:(0,r.jsxs)("div",{className:"grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center",children:[r.jsx("div",{className:"relative col-span-6 md:col-span-4 h-full",children:r.jsx(p.J,{alt:"de_dust2",className:(0,j.cn)("object-cover h-full bg-center",N?"animate-pulse grayscale-[10]":N),classNames:{wrapper:"h-full"},shadow:"md",src:"https://files.bo3.gg/uploads/news/16425/title_image/960x480-bc5c4f8a10a0b845105bcab657d4bd58.webp",height:"100%",width:"100%"})}),(0,r.jsxs)("div",{className:"flex flex-col col-span-6 md:col-span-8",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-0",children:[r.jsx("h3",{className:"font-semibold text-foreground/90",children:s}),r.jsx("p",{className:"text-small text-foreground/80",children:"Loading..."})]}),r.jsx(u.A,{className:"text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2",variant:"light",radius:"full",size:"sm",isIconOnly:!0,children:r.jsx(h.c,{size:"sm"})})]}),(0,r.jsxs)("div",{className:"flex flex-col mt-3 gap-1",children:[r.jsx(m.W,{color:"warning",size:"sm",isIndeterminate:!0,isStriped:!0}),r.jsx("div",{className:"flex justify-between",children:r.jsx("p",{className:"text-small",children:"-"})})]}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-between mt-4",children:[(0,r.jsxs)(u.A,{onClick:()=>{navigator.clipboard.writeText(`connect ${a}`),f.Am.success("Copied to clipboard!")},color:"secondary",variant:"flat",size:"sm",children:[r.jsx(l.Z,{size:16}),a]}),r.jsx(v.default,{href:`steam://connect/${k}`,passHref:!0,children:(0,r.jsxs)(u.A,{color:"primary",variant:"solid",size:"sm",children:[r.jsx(t.Z,{size:16}),"Connect"]})})]})]})]})})});if(C||!w)return r.jsx(o.w,{className:"border-none bg-content1",shadow:"sm",onClick:()=>open(`steam://connect/${k}`,"_self"),isBlurred:!0,isPressable:!0,children:r.jsx(d.G,{children:(0,r.jsxs)("div",{className:"grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center",children:[r.jsx("div",{className:"relative col-span-6 md:col-span-4 h-full",children:r.jsx(p.J,{alt:"de_dust2",className:"object-cover h-full bg-center grayscale-[10]",classNames:{wrapper:"h-full"},shadow:"md",src:"https://files.bo3.gg/uploads/news/16425/title_image/960x480-bc5c4f8a10a0b845105bcab657d4bd58.webp",height:"100%",width:"100%"})}),(0,r.jsxs)("div",{className:"flex flex-col col-span-6 md:col-span-8",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-0",children:[r.jsx("h3",{className:"font-semibold text-foreground/90",children:s}),r.jsx("p",{className:"text-small text-foreground/80",children:"Failed to load server info"})]}),r.jsx(u.A,{className:"text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2",variant:"light",radius:"full",size:"sm",isIconOnly:!0,children:r.jsx(n.Z,{})})]}),(0,r.jsxs)("div",{className:"flex flex-col mt-3 gap-1",children:[r.jsx(m.W,{color:"danger",size:"sm",isStriped:!0}),r.jsx("div",{className:"flex justify-between",children:r.jsx("p",{className:"text-small",children:"-"})})]}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-between mt-4",children:[(0,r.jsxs)(u.A,{onClick:()=>{navigator.clipboard.writeText(`connect ${a}`),f.Am.success("Copied to clipboard!")},color:"secondary",variant:"flat",size:"sm",children:[r.jsx(l.Z,{size:16}),a]}),r.jsx(v.default,{href:`steam://connect/${k}`,passHref:!0,children:(0,r.jsxs)(u.A,{color:"primary",variant:"solid",size:"sm",children:[r.jsx(t.Z,{size:16}),"Connect"]})})]})]})]})})});let{game:A,map:z,maxPlayers:M,players:I,vac:$}=w,T=("number"==typeof I?I:I.length)/M*100,L="number"!=typeof I,R="number"==typeof I?I===M:I.length===M;return r.jsx(o.w,{className:"border-none bg-content1",shadow:"sm",onClick:L?()=>S({open:!0,server:w}):()=>R?f.Am.error("Server is full!"):open(`steam://connect/${k}`,"_self"),isBlurred:!0,isPressable:!0,children:r.jsx(d.G,{children:(0,r.jsxs)("div",{className:"grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center",children:[r.jsx("div",{className:"relative col-span-6 md:col-span-4 h-full",children:r.jsx(p.J,{alt:z,className:"object-cover h-full bg-center",classNames:{wrapper:"h-full"},shadow:"md",src:"https://image.gametracker.com/images/maps/160x120/csgo/{{map}}.jpg".replace("{{map}}",z)||`https://image.gametracker.com/images/maps/160x120/csgo/${z}.jpg`,height:"100%",width:"100%"})}),(0,r.jsxs)("div",{className:"flex flex-col col-span-6 md:col-span-8",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-0",children:[r.jsx("h3",{className:"font-semibold text-foreground/90",children:s}),r.jsx("p",{className:"text-small text-foreground/80",children:A})]}),null!==$&&r.jsx(x.e,{content:$?"The server is secured by VAC":"Not VAC Secured",showArrow:!0,children:r.jsx(u.A,{className:"text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2",variant:"light",radius:"full",size:"sm",isIconOnly:!0,children:$?r.jsx(i.Z,{size:20}):r.jsx(c.Z,{})})})]}),(0,r.jsxs)("div",{className:"flex flex-col mt-3 gap-1",children:[r.jsx(m.W,{color:"secondary",value:T,size:"sm"}),r.jsx("div",{className:"flex justify-between",children:(0,r.jsxs)("p",{className:"text-small",children:[z," • ",L?I.length:I,"/",M," Players"]})})]}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-between mt-4",children:[(0,r.jsxs)(u.A,{onClick:()=>{if(R)return f.Am.error("Server is full!");navigator.clipboard.writeText(`connect ${a}`),f.Am.success("Copied to clipboard!")},color:"secondary",variant:"flat",size:"sm",children:[r.jsx(l.Z,{size:16}),a]}),r.jsx(v.default,{href:`steam://connect/${k}`,passHref:!0,children:(0,r.jsxs)(u.A,{color:"primary",variant:"solid",size:"sm",children:[r.jsx(t.Z,{size:16}),"Connect"]})})]})]})]})})})}},92180:(e,s,a)=>{a.d(s,{default:()=>P});var r=a(37307),l=a(76884),t=a(67078),n=a(21504),i=a(29844),c=a(84245),o=a(18811),d=a(89284),m=a(70263),x=a(58160),h=a(48983),u=a(21617),p=a(78156),j=a(45944),f=a(74410),g=a(23169),y=a(36602),v=a(38375),b=a(25640),w=a(84841),N=a(20454),C=a(60484),S=a(53472);let P=()=>{let{data:e,isLoading:s,error:a}=(0,w.ZP)("/api/servers",v.Z),P=(0,y.Z)(e=>e.setModal),Z=s||e?.length===0?"loading":"idle",k=e=>P({open:!0,server:e}),A=(0,g.useCallback)((e,s)=>{let{game:a,map:l,maxPlayers:t,players:n,vac:i,address:c,playersPercentage:o,hostname:j}=e,g="number"!=typeof n,y="number"==typeof n?n===t:n.length===t,v=e.serverIp,w=e.address.split(":")[1],N=v?`${v}:${w}`:e.address;switch(s){case"hostname":return r.jsx("span",{children:j});case"game":return r.jsx("span",{children:a});case"map":return r.jsx("span",{children:l});case"players":return(0,r.jsxs)("span",{children:[g?n.length:n,"/",t]});case"vac":return null!==i&&(r.jsx(p.e,{content:i?"The server is secured by VAC":"Not VAC Secured",showArrow:!0,children:r.jsx(d.A,{className:"text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2",variant:"light",radius:"full",size:"sm",isIconOnly:!0,children:i?r.jsx(m.Z,{size:20}):r.jsx(x.Z,{})})})||r.jsx(r.Fragment,{}));case"actions":return(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsxs)(d.A,{onClick:()=>{if(y)return f.Am.error("Server is full!");navigator.clipboard.writeText(`connect ${c}`),f.Am.success("Copied to clipboard!")},color:"secondary",variant:"flat",size:"sm",children:[r.jsx(h.Z,{size:16}),c]}),r.jsx(b.default,{href:`steam://connect/${N}`,passHref:!0,children:(0,r.jsxs)(d.A,{color:"primary",variant:"solid",size:"sm",children:[r.jsx(u.Z,{size:16}),"Connect"]})})]});default:return r.jsx(r.Fragment,{})}},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.b,{topContent:(0,r.jsxs)("div",{className:"text-start",children:[r.jsx("h1",{className:"text-2xl font-bold",children:"Servers"}),(0,r.jsxs)("code",{className:"text-sm font-normal",children:["total: ",e?.length||0]})]}),children:[(0,r.jsxs)(t.J,{children:[r.jsx(n.j,{children:"Server Name"},"hostname"),r.jsx(n.j,{children:"Game"},"game"),r.jsx(n.j,{children:"Map"},"map"),r.jsx(n.j,{children:"Players"},"players"),r.jsx(n.j,{children:"VAC"},"vac"),r.jsx(n.j,{children:"Actions"},"actions")]}),r.jsx(i.y,{items:e||[],loadingContent:r.jsx(j.c,{}),loadingState:Z,children:a?r.jsx(c.g,{children:r.jsx(o.X,{colSpan:6,children:r.jsx("div",{className:"text-center",children:"Error fetching servers"})})}):e=>r.jsx(c.g,{className:"cursor-pointer",onClick:()=>k(e),children:s=>r.jsx(o.X,{children:A(e,s)})},e.address)})]}),r.jsx(N.default,{}),r.jsx(C.default,{}),r.jsx(S.default,{})]})}},36602:(e,s,a)=>{a.d(s,{Z:()=>r});let r=(0,a(32371).Ue)(e=>({modal:{open:!1,server:null},setModal:s=>e({modal:s}),chatModal:{open:!1,server:null},setChatModal:s=>e({chatModal:s})}))},16118:(e,s,a)=>{a.d(s,{Z:()=>c});var r=a(16057),l=a(16087),t=a(2e3);let n=({image:e,html:s,css:a,height:l})=>"0"===l?r.jsx(r.Fragment,{}):(0,r.jsxs)("div",{className:"overflow-hidden rounded-2xl bg-center bg-cover relative",style:{backgroundImage:`url(${e})`,height:`${l}px`},children:[r.jsx("div",{className:"h-full w-full flex flex-col justify-center items-center",dangerouslySetInnerHTML:{__html:s}}),r.jsx("style",{children:a})]}),i=(0,l.Rb)(),c=async()=>{let e=await t.Z?.settings.getByKey("headerImage")||i.headerImage,s=await t.Z?.settings.getByKey("headerCodeHTML")||i.headerCodeHTML,a=await t.Z?.settings.getByKey("headerCodeCSS")||i.headerCodeCSS,l=await t.Z?.settings.getByKey("headerHeight")||i.headerHeight;return r.jsx(n,{image:e||"",html:s||"",css:a||"",height:l||""})}},96394:(e,s,a)=>{a.d(s,{ZP:()=>i});var r=a(92881);let l=(0,r.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Table\index.tsx`),{__esModule:t,$$typeof:n}=l;l.default;let i=(0,r.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Table\index.tsx#default`)},56052:(e,s,a)=>{a.d(s,{Z:()=>N});var r=a(16057),l=a(32836),t=a(92881);let n=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Server\SoloServer.tsx`),{__esModule:i,$$typeof:c}=n;n.default;let o=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Server\SoloServer.tsx#default`),d=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Modal\ServerChatModal.tsx`),{__esModule:m,$$typeof:x}=d;d.default;let h=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Modal\ServerChatModal.tsx#default`),u=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Modal\index.tsx`),{__esModule:p,$$typeof:j}=u;u.default;let f=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Modal\index.tsx#default`);var g=a(2e3);let y=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Modal\ReportPlayerModal.tsx`),{__esModule:v,$$typeof:b}=y;y.default;let w=(0,t.createProxy)(String.raw`C:\Projects\CSS-Panel\app\UI\Layouts\Main\Servers\Modal\ReportPlayerModal.tsx#default`),N=async()=>{let e=await g.Z?.servers.getAllSafe()||[];return(0,r.jsxs)("div",{className:"grid xl:grid-cols-3 gap-4 flex-wrap items-center min-h-[150px]",children:[e.map(e=>(0,l.createElement)(o,{...e,key:e.id})),r.jsx(f,{}),r.jsx(h,{}),r.jsx(w,{})]})}}};