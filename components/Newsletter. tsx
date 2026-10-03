"use client";
import {useState} from "react";
export default function Newsletter(){const [s,setS]=useState<"idle"|"ok"|"err">("idle");
async function go(e:React.FormEvent<HTMLFormElement>){e.preventDefault();const v=String(new FormData(e.currentTarget).get("email")||"");
if(!/^\S+@\S+\.\S+$/.test(v)){setS("err");return}
/* TODO: POST to your email service (Mailchimp, ConvertKit, etc.) */ setS("ok")}
return(<section className="mx-auto max-w-3xl rounded-3xl bg-mist px-6 py-12 text-center"><h2 className="text-4xl">Build better money habits.</h2>
<p className="mt-3 text-ink/75">Get practical money tips, side-hustle ideas, useful AI tools, and personal finance strategies in your inbox.</p>
<form onSubmit={go} noValidate className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"><label htmlFor="nl" className="sr-only">Email address</label>
<input id="nl" name="email" type="email" required placeholder="you@email.com" aria-invalid={s==="err"} className="rounded-full px-5 py-3 border border-sage bg-white sm:w-72"/>
<button className="rounded-full bg-forest text-cream px-6 py-3">Subscribe</button></form>
<p role="status" className="mt-3 text-sm">{s==="ok"&&"You're in. Check your inbox to confirm."}{s==="err"&&"Enter a valid email address, like name@example.com."}</p>
<p className="text-xs mt-2 text-ink/60">No spam. Unsubscribe anytime. See our privacy policy.</p></section>)}
