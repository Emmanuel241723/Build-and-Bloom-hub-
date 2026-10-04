"use client";
import {useState} from "react";
const ENDPOINT="https://formspree.io/f/xnpjapvv";
export default function Newsletter(){
const [s,setS]=useState<"idle"|"sending"|"ok"|"err"|"fail">("idle");
async function go(e:React.FormEvent<HTMLFormElement>){
e.preventDefault();
const form=e.currentTarget;
const v=String(new FormData(form).get("email")||"").trim();
if(!/^\S+@\S+\.\S+$/.test(v)){setS("err");return}
setS("sending");
try{
const r=await fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({form:"Newsletter signup",email:v})});
if(r.ok){setS("ok");form.reset()}else{setS("fail")}
}catch{setS("fail")}
}
return(<section className="mx-auto max-w-3xl rounded-3xl bg-mist px-6 py-12 text-center"><h2 className="text-4xl">Build better money habits.</h2>
<p className="mt-3 text-ink/75">Get practical money tips, side-hustle ideas, useful AI tools, and personal finance strategies in your inbox.</p>
<form onSubmit={go} noValidate className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"><label htmlFor="nl" className="sr-only">Email address</label>
<input id="nl" name="email" type="email" required placeholder="you@email.com" aria-invalid={s==="err"} className="rounded-full px-5 py-3 border border-sage bg-white sm:w-72"/>
<button disabled={s==="sending"} className="rounded-full bg-forest text-cream px-6 py-3 disabled:opacity-60">{s==="sending"?"Sending...":"Subscribe"}</button></form>
<p role="status" className="mt-3 text-sm">{s==="ok"&&"You're in. Thanks for subscribing!"}{s==="err"&&"Enter a valid email address, like name@example.com."}{s==="fail"&&"Something went wrong. Please try again in a moment."}</p>
<p className="text-xs mt-2 text-ink/60">No spam. Unsubscribe anytime. See our privacy policy.</p></section>)}
