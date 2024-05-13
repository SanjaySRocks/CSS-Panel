"use strict";(()=>{var e={};e.id=958,e.ids=[958],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},66912:e=>{e.exports=import("zustand")},79449:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{config:()=>c,default:()=>l,routeModule:()=>d});var r=a(20114),n=a(32128),i=a(57797),o=a(75598),u=e([o]);o=(u.then?(await u)():u)[0];let l=(0,i.l)(o,"default"),c=(0,i.l)(o,"config"),d=new r.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/bans/[banId]",pathname:"/api/bans/[banId]",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},20884:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{A0:()=>o,E0:()=>u,NV:()=>d,Wv:()=>c,kN:()=>l});var r=a(66912),n=a(9926),i=e([r,n]);[r,n]=i.then?(await i)():i,(0,r.create)(e=>({action:null,setAction:t=>e({action:t}),isLoading:!1,setIsLoading:t=>e({isLoading:t}),details:null,setDetails:t=>e({details:t}),reset:()=>e({action:null,isLoading:!1,details:null})}));let o=n.z.object({reason:n.z.string()}),u=n.z.object({reason:n.z.string(),duration:n.z.string()}),l=n.z.object({comment:n.z.string()}),c=n.z.object({reason:n.z.string(),duration:n.z.string()}),d=n.z.enum(["unban","reban","comment","edit","delete"]);s()}catch(e){s(e)}})},75598:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>c});var r=a(14676),n=a(48874),i=a(78260),o=a(20884),u=a(5568),l=e([r,n,i,o,u]);[r,n,i,o,u]=l.then?(await l)():l;let c=async(e,t)=>{await i.Z.run(e,t);let{method:a}=e,s=await (0,r.Z)(e,t);if(s){if(!n.Z)return t.status(500).json({message:"Database not connected"});if("POST"===a)try{let{banId:a}=e.query,r=await n.Z.bans.getById(Number(a));if(!r)return t.status(404).json({error:"Ban not found"});let i=o.NV.parse(e.body.action),l=e.body.details;switch(i){case"unban":{let{reason:e}=o.A0.parse(l);await n.Z.bans.update(Number(a),{status:"UNBANNED",unban_reason:e});break}case"reban":{let{reason:e,duration:t}=o.E0.parse(l),r=new Date,i=new Date(Date.now()+6e4*Number(t));await n.Z.bans.update(Number(a),{status:"ACTIVE",reason:e,created:r,ends:i,duration:Number(t),admin_name:s.player_name,admin_steamid:s.player_steamid,unban_reason:null});break}case"edit":{let{reason:e,duration:t}=o.Wv.parse(l),s=new Date(r.created),i=new Date(s.getTime()+6e4*Number(t)),u=i>new Date?"ACTIVE":"EXPIRED";await n.Z.bans.update(Number(a),{reason:e,ends:i,duration:Number(t),status:u});break}case"comment":{let{comment:e}=o.kN.parse(l);await n.Z.bans.update(Number(a),{comment:e});break}case"delete":await n.Z.bans.delete(Number(a))}return(0,u.Z)("Ban Action",`Admin ${e.user?.displayName} (${e.user?.id}) performed action '${i}' on ban #${a}`,e.user?.id,"adminCommandsDiscordWebhook"),t.status(200).json({message:"Message sent"})}catch(e){return t.status(500).json({error:e})}}};s()}catch(e){s(e)}})},5568:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>o});var r=a(48874),n=a(38910),i=e([r,n]);[r,n]=i.then?(await i)():i;let o=async(e,t,a,s="discordWebhook")=>{if(r.Z)try{r.Z.logs.create(e,t,a);let i=await r.Z.settings.getByKey(s,!1);i&&"string"==typeof i&&(0,n.Z)({url:i,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:t,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};s()}catch(e){s(e)}})},78260:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>c});var r=a(9014),n=a(45616),i=a(429),o=a.n(i),u=e([n]);n=(u.then?(await u)():u)[0];let l=(0,n.default)();l.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(r.Z.initialize()),l.use(r.Z.session());let c=l;s()}catch(e){s(e)}})},9014:(e,t,a)=>{a.d(t,{Z:()=>o});let s=require("passport");var r=a.n(s);let n=require("passport-steam");r().serializeUser(async(e,t)=>{t(null,e)}),r().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),r().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,a)=>(t.identifier=e,a(null,t))));let o=r()},14676:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>i});var r=a(48874),n=e([r]);r=(n.then?(await n)():n)[0];let i=(e,t,a,s="AND")=>new Promise(async(n,i)=>{if(!r.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return i(t.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,u=await r.Z.admins.getBySteam64(o);if(!u)return i(t.status(401).json({success:!1,error:"Protected Route"}));if(!a)return n(u);let l=null;if("object"==typeof u.flags)l=u.flags;else{let e=await r.Z.adminGroups.getById(u.flags);e&&(l=e.flags)}if(null===l||!("AND"===s?a.every(e=>l.includes(e)):a.some(e=>l.includes(e))))return i(t.status(403).json({success:!1,error:"Protected Route"}));n(u)});s()}catch(e){s(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[6941],()=>a(79449));module.exports=s})();