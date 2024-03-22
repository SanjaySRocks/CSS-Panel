"use strict";(()=>{var e={};e.id=7939,e.ids=[7939],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},2818:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{config:()=>l,default:()=>p,routeModule:()=>c});var r=s(88667),i=s(25828),n=s(38051),o=s(83445),u=e([o]);o=(u.then?(await u)():u)[0];let p=(0,n.l)(o,"default"),l=(0,n.l)(o,"config"),c=new r.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/stats",pathname:"/api/stats",bundlePath:"",filename:""},userland:o});a()}catch(e){a(e)}})},83445:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{default:()=>o});var r=s(6995),i=s(74186),n=e([r,i]);[r,i]=n.then?(await n)():n;let o=async(e,t)=>{if(!r.Z)return t.status(500).json({message:"Database not connected"});await i.Z.run(e,t);let{method:s}=e;if("GET"===s){let e=await r.Z.servers.count(),s=await r.Z.admins.count(),a=await r.Z.bans.count(),i=await r.Z.mutes.count();return t.status(200).json({admins:s,servers:e,bans:a,mutes:i})}};a()}catch(e){a(e)}})},74186:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>l});var r=s(15313),i=s(45616),n=s(429),o=s.n(n),u=e([i]);i=(u.then?(await u)():u)[0];let p=(0,i.default)();p.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),p.use(r.Z.initialize()),p.use(r.Z.session());let l=p;a()}catch(e){a(e)}})},15313:(e,t,s)=>{s.d(t,{Z:()=>o});let a=require("passport");var r=s.n(a);let i=require("passport-steam");r().serializeUser(async(e,t)=>{t(null,e)}),r().deserializeUser(async(e,t)=>{t(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),r().use(new i.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,s)=>(t.identifier=e,s(null,t))));let o=r()}};var t=require("../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[6037],()=>s(2818));module.exports=a})();