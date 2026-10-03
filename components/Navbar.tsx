"use client";
import Link from "next/link";import {useState} from "react";
const links=[["/","Home"],["/blog","Blog"],["/category/budgeting","Categories"],["/about","About"],["/contact","Contact"]];
export default function Navbar(){const [o,setO]=useState(false);
return(<header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-beige"><nav aria-label="Main" className="mx-auto max-w-6xl flex items-center justify-between px-5 py-4">
<Link href="/" className="font-serif text-2xl font-semibold text-forest">Build &amp; Bloom Hub</Link>
<ul className="hidden md:flex items-center gap-7 text-sm">{links.map(([h,l])=><li key={h}><Link href={h} className="hover:text-forest">{l}</Link></li>)}
<li><Link href="/blog" className="rounded-full bg-forest text-cream px-5 py-2">Start Reading</Link></li></ul>
<button className="md:hidden p-2" aria-expanded={o} aria-controls="m" aria-label="Toggle menu" onClick={()=>setO(!o)}>{o?"Close":"Menu"}</button></nav>
{o&&<ul id="m" className="md:hidden px-5 pb-5 space-y-3 text-lg">{links.map(([h,l])=><li key={h}><Link href={h} onClick={()=>setO(false)}>{l}</Link></li>)}</ul>}</header>)}
