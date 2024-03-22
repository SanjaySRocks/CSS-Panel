"use strict";(()=>{var e={};e.id=1313,e.ids=[1313],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},54688:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{config:()=>u,default:()=>c,routeModule:()=>d});var n=s(88667),r=s(25828),i=s(38051),o=s(15379),l=e([o]);o=(l.then?(await l)():l)[0];let c=(0,i.l)(o,"default"),u=(0,i.l)(o,"config"),d=new n.PagesAPIRouteModule({definition:{kind:r.x.PAGES_API,page:"/api/skins/collections",pathname:"/api/skins/collections",bundlePath:"",filename:""},userland:o});a()}catch(e){a(e)}})},15379:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{default:()=>m});var n=s(72535),r=s(85607),i=s(79807),o=s(8909),l=s(59788),c=s(6995),u=s(74186),d=e([r,i,o,l,c,u]);[r,i,o,l,c,u]=d.then?(await d)():d;let m=async(e,t)=>{if(!c.Z)return t.status(500).json({message:"Database not connected"});if(!(0,n.e)("skins-collections"))return t.status(404).json({message:"Module not found"});await u.Z.run(e,t);let{method:s}=e;switch(s){case"GET":try{let s=e.user,{page:a,rows:n,query:r}=o.Z.parse(e.query),{filter:i}=e.query||{filter:"ALL"};console.log({filter:i});let u="MINE"===i&&s?await c.Z.skins.collections.getBySteamId(s.id):await c.Z.skins.collections.getAll(a,n,r),d=u.map(e=>e.steamid),m=await (0,l.Z)(d),g=u.map(e=>{let t=m.find(t=>t.steamid===e.steamid);return{...e,steam:t}}),p=await c.Z.skins.collections.count(r);return t.status(200).json({results:g,count:p})}catch(e){return console.error(e),t.status(500).json({message:"Internal server error"})}case"POST":{let{name:s}=e.body;if(!s)return t.status(400).json({message:"Name is required"});let a=await (0,r.Z)(e,t);if(!a)return;if((await c.Z.skins.collections.getBySteamId(a.id)).length>=3)return t.status(400).json({message:"You can only have 3 collections"});let n=await c.Z.skins.agents.getBySteamId(a.id),i=await c.Z.skins.gloves.getBySteamId(a.id),o=await c.Z.skins.knife.getBySteamId(a.id),l=await c.Z.skins.music.getBySteamId(a.id),u=await c.Z.skins.skins.getBySteamId(a.id);if(0===u.length)return t.status(400).json({message:"You need to have skins to create a collection"});return await c.Z.skins.collections.create(a.id,s,{agents:n,gloves:i,knife:o,music:l,skins:u}),t.status(200).json({message:"Collection created"})}case"PATCH":try{let s=await (0,r.Z)(e,t);if(!s)return;if((await c.Z.skins.collections.getBySteamId(s.id)).length>=3)return t.status(400).json({message:"You can only have 3 collections"});let a=i.Z.parse(e.body);return await c.Z.skins.collections.create(s.id,a.name,a),t.status(200).json({message:"Collection set"})}catch(e){return console.error(e),t.status(500).json({message:"Internal server error"})}}};a()}catch(e){a(e)}})},59788:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>i});var n=s(2782),r=e([n]);n=(r.then?(await r)():r)[0];let i=async e=>{let t=[...new Set(e)].filter(e=>!isNaN(Number(e)));return t.length&&await (0,n.From64ToUser)(t)||[]};a()}catch(e){a(e)}})},72535:(e,t,s)=>{s.d(t,{e:()=>n,g:()=>a});let a=e=>!!process.env.MODULES&&process.env.MODULES.split(",").includes(e),n=e=>a(e)&&!!process.env.MODULES_ENABLED&&process.env.MODULES_ENABLED.split(",").includes(e)},74186:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>u});var n=s(15313),r=s(45616),i=s(429),o=s.n(i),l=e([r]);r=(l.then?(await l)():l)[0];let c=(0,r.default)();c.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),c.use(n.Z.initialize()),c.use(n.Z.session());let u=c;a()}catch(e){a(e)}})},15313:(e,t,s)=>{s.d(t,{Z:()=>o});let a=require("passport");var n=s.n(a);let r=require("passport-steam");n().serializeUser(async(e,t)=>{t(null,e)}),n().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),n().use(new r.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,s)=>(t.identifier=e,s(null,t))));let o=n()},85607:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>i});var n=s(6995),r=e([n]);n=(r.then?(await r)():r)[0];let i=(e,t)=>new Promise(async(s,a)=>n.Z?e.user?void s(e.user):a(t.status(400).json({success:!1,error:"Protected Route"})):t.status(500).json({message:"Database not connected"}));a()}catch(e){a(e)}})},79807:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>i});var n=s(9926),r=e([n]);let i=(n=(r.then?(await r)():r)[0]).z.object({name:n.z.string(),agents:n.z.object({steamid:n.z.string(),agent_ct:n.z.string().nullable(),agent_t:n.z.string().nullable()}),gloves:n.z.object({steamid:n.z.string(),weapon_defindex:n.z.number()}),knife:n.z.object({steamid:n.z.string(),knife:n.z.string()}),music:n.z.object({steamid:n.z.string(),music_id:n.z.number()}),skins:n.z.array(n.z.object({steamid:n.z.string(),weapon_defindex:n.z.number(),weapon_paint_id:n.z.number(),weapon_wear:n.z.number(),weapon_seed:n.z.number()}))});a()}catch(e){a(e)}})},8909:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>i});var n=s(9926),r=e([n]);let i=(n=(r.then?(await r)():r)[0]).default.object({page:n.default.string().default("1").refine(e=>!isNaN(Number(e)),{message:"Invalid page query"}).transform(e=>Number(e)),rows:n.default.string().default("10").refine(e=>!isNaN(Number(e)),{message:"Invalid page query"}).refine(e=>50>Number(e),{message:"Rows must be less than 50"}).transform(e=>Number(e)),query:n.default.string().optional()});a()}catch(e){a(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[6037],()=>s(54688));module.exports=a})();