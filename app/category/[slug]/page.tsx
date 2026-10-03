import type {Metadata} from "next";import {notFound} from "next/navigation";import {posts,categories} from "@/lib/data";import BlogCard from "@/components/BlogCard";
type Props={params:Promise<{slug:string}>};
export const generateStaticParams=()=>categories.map(c=>({slug:c.slug}));
export async function generateMetadata({params}:Props):Promise<Metadata>{const c=categories.find(x=>x.slug===(await params).slug);return c?{title:c.name,description:`Articles about ${c.name.toLowerCase()}.`,alternates:{canonical:`/category/${c.slug}`}}:{}}
export default async function Cat({params}:Props){const c=categories.find(x=>x.slug===(await params).slug);if(!c)notFound();const list=posts.filter(p=>p.category===c.name);
return(<div className="mx-auto max-w-6xl px-5 py-12"><h1 className="text-5xl mb-8">{c.name}</h1>{list.length?<div className="columns-1 sm:columns-2 lg:columns-3 gap-6">{list.map(p=><BlogCard key={p.slug} post={p}/>)}</div>:<p>New articles in this category are coming soon.</p>}</div>)}
