"use client";
import {useMemo,useState} from "react";
import {Post,categories} from "@/lib/data";
import BlogCard from "@/components/BlogCard";
export default function BlogExplorer({posts}:{posts:Post[]}){const [q,setQ]=useState("");const [cat,setCat]=useState("All");const [n,setN]=useState(6);
const list=useMemo(()=>posts.filter(p=>(cat==="All"||p.category===cat)&&(p.title+" "+p.excerpt).toLowerCase().includes(q.toLowerCase())),[posts,q,cat]);
return(<div><label htmlFor="s" className="sr-only">Search articles</label>
<input id="s" type="search" value={q} onChange={e=>{setQ(e.target.value);setN(6)}} placeholder="Search articles" className="w-full rounded-full border border-sage bg-white px-5 py-3"/>
<div className="flex flex-wrap gap-2 my-5" role="group" aria-label="Filter by category">{["All",...categories.map(c=>c.name)].map(c=><button key={c} onClick={()=>{setCat(c);setN(6)}} aria-pressed={cat===c} className={`rounded-full px-4 py-2 text-sm ${cat===c?"bg-forest text-cream":"bg-beige"}`}>{c}</button>)}</div>
{list.length===0?<p>No articles match. Try a different search or category.</p>:<div className="columns-1 sm:columns-2 lg:columns-3 gap-6">{list.slice(0,n).map(p=><BlogCard key={p.slug} post={p}/>)}</div>}
{n<list.length&&<div className="text-center mt-6"><button onClick={()=>setN(n+6)} className="rounded-full bg-forest text-cream px-6 py-3">Load more</button></div>}</div>)}
