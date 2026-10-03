"use client";
import {useState} from "react";
export default function ContactForm(){const [err,setErr]=useState<Record<string,string>>({});const [ok,setOk]=useState(false);
function go(e:React.FormEvent<HTMLFormElement>){e.preventDefault();const f=new FormData(e.currentTarget);const g=(k:string)=>String(f.get(k)||"").trim();const x:Record<string,string>={};
if(!g("name"))x.name="Enter your name.";if(!/^\S+@\S+\.\S+$/.test(g("email")))x.email="Enter a valid email, like name@example.com.";if(!g("subject"))x.subject="Enter a subject.";if(g("message").length<10)x.message="Write at least 10 characters.";
setErr(x);if(!Object.keys(x).length){/* TODO: send to an API route or form service */setOk(true)}}
if(ok)return <p role="status" className="rounded-2xl bg-mist p-6">Thanks, your message was sent. I'll reply soon.</p>;
const cls="w-full rounded-xl border border-sage bg-white px-4 py-3";
const F=(id:string,label:string,type="text")=>(<div><label htmlFor={id} className="block mb-1 text-sm font-medium">{label}</label>
{id==="message"?<textarea id={id} name={id} rows={6} className={cls} aria-invalid={!!err[id]} aria-describedby={err[id]?id+"-e":undefined}/>:<input id={id} name={id} type={type} className={cls} aria-invalid={!!err[id]} aria-describedby={err[id]?id+"-e":undefined}/>}
{err[id]&&<p id={id+"-e"} className="text-sm text-red-700 mt-1">{err[id]}</p>}</div>);
return(<form onSubmit={go} noValidate className="space-y-5">{F("name","Name")}{F("email","Email","email")}{F("subject","Subject")}{F("message","Message")}<button className="rounded-full bg-forest text-cream px-6 py-3">Send message</button></form>)}
