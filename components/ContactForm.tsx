"use client";
import {useState} from "react";
const ENDPOINT="https://formspree.io/f/xnpjapvv";
export default function ContactForm(){
const [err,setErr]=useState<Record<string,string>>({});
const [status,setStatus]=useState<"idle"|"sending"|"ok"|"fail">("idle");
async function go(e:React.FormEvent<HTMLFormElement>){
e.preventDefault();
const form=e.currentTarget;
const f=new FormData(form);
const g=(k:string)=>String(f.get(k)||"").trim();
const x:Record<string,string>={};
if(!g("name"))x.name="Enter your name.";
if(!/^\S+@\S+\.\S+$/.test(g("email")))x.email="Enter a valid email, like name@example.com.";
if(!g("subject"))x.subject="Enter a subject.";
if(g("message").length<10)x.message="Write at least 10 characters.";
setErr(x);
if(Object.keys(x).length)return;
setStatus("sending");
try{
const r=await fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({form:"Contact form",name:g("name"),email:g("email"),subject:g("subject"),message:g("message")})});
if(r.ok){setStatus("ok");form.reset()}else{setStatus("fail")}
}catch{setStatus("fail")}
}
if(status==="ok")return <p role="status" className="rounded-2xl bg-mist p-6">Thanks, your message was sent. I'll reply soon.</p>;
const cls="w-full rounded-xl border border-sage bg-white px-4 py-3";
const F=(id:string,label:string,type="text")=>(<div><label htmlFor={id} className="block mb-1 text-sm font-medium">{label}</label>
{id==="message"?<textarea id={id} name={id} rows={6} className={cls} aria-invalid={!!err[id]} aria-describedby={err[id]?id+"-e":undefined}/>:<input id={id} name={id} type={type} className={cls} aria-invalid={!!err[id]} aria-describedby={err[id]?id+"-e":undefined}/>}
{err[id]&&<p id={id+"-e"} className="text-sm text-red-700 mt-1">{err[id]}</p>}</div>);
return(<form onSubmit={go} noValidate className="space-y-5">{F("name","Name")}{F("email","Email","email")}{F("subject","Subject")}{F("message","Message")}
<button disabled={status==="sending"} className="rounded-full bg-forest text-cream px-6 py-3 disabled:opacity-60">{status==="sending"?"Sending...":"Send message"}</button>
{status==="fail"&&<p role="alert" className="text-sm text-red-700">Something went wrong. Please try again in a moment.</p>}</form>)}
