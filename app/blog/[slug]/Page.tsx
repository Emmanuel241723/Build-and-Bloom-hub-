import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {posts,getPost,fmt,catSlug,SITE} from "@/lib/data";
import SocialShare from "@/components/SocialShare";
import AuthorSection from "@/components/AuthorSection";
import Newsletter from "@/components/Newsletter";
import BlogCard from "@/components/BlogCard";
type Props={params:Promise<{slug:string}>};
export const generateStaticParams=()=>posts.map(p=>({slug:p.slug}));
export async function generateMetadata({params}:Props):Promise<Metadata>{
const {slug}=await params;
const p=getPost(slug);
if(!p)return{};
return{title:p.title,description:p.excerpt,alternates:{canonical:`/blog/${p.slug}`},openGraph:{title:p.title,description:p.excerpt,type:"article",publishedTime:p.date,url:`/blog/${p.slug}`},twitter:{card:"summary_large_image",title:p.title,description:p.excerpt}}}
export default async function Post({params}:Props){
const {slug}=await params;
const p=getPost(slug);
if(!p)notFound();
const i=posts.indexOf(p);
const prev=posts[i-1],next=posts[i+1];
const related=posts.filter(x=>x.category===p.category&&x!==p).concat(posts.filter(x=>x.category!==p.category&&x!==p)).slice(0,3);
const ld={"@context":"https://schema.org","@type":"Article",headline:p.title,description:p.excerpt,datePublished:p.date,author:{"@type":"Person",name:"Build & Bloom Hub"},mainEntityOfPage:`${SITE.url}/blog/${p.slug}`};
return(<article className="mx-auto max-w-3xl px-5 py-10"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
<nav aria-label="Breadcrumb" className="text-sm text-ink/60"><Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <Link href={`/category/${catSlug(p.category)}`}>{p.category}</Link></nav>
<h1 className="text-4xl md:text-6xl mt-4">{p.title}</h1><p className="mt-3 text-sm text-ink/60">By Build &amp; Bloom Hub, {fmt(p.date)}, {p.read} min read</p>
<div className={`${p.tone} aspect-[16/9] rounded-2xl mt-6`} role="img" aria-label={p.title}/>
<div className="prose-bb mt-8"><p className="text-xl">{p.excerpt}</p>{p.body.map(s=><section key={s.h}><h2>{s.h}</h2>{s.p.map((t,k)=><p key={k}>{t}</p>)}{s.tip&&<aside className="rounded-xl bg-mist border-l-4 border-forest p-4 mb-5"><strong>Tip: </strong>{s.tip}</aside>}</section>)}</div>
<SocialShare slug={p.slug} title={p.title}/><AuthorSection/><p className="text-xs text-ink/60 mt-6">This article is for general information and is not financial advice. It may contain affiliate links.</p>
<div className="flex justify-between mt-10 text-sm gap-4">{prev?<Link href={`/blog/${prev.slug}`}>Previous: {prev.title}</Link>:<span/>}{next&&<Link href={`/blog/${next.slug}`} className="text-right">Next: {next.title}</Link>}</div>
<h2 className="text-3xl mt-14 mb-6">Related articles</h2><div className="grid sm:grid-cols-3 gap-5">{related.map(r=><BlogCard key={r.slug} post={r}/>)}</div><div className="mt-14"><Newsletter/></div></article>)}
