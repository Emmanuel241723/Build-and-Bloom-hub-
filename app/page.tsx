import Link from "next/link";import {posts,categories} from "@/lib/data";import BlogCard from "@/components/BlogCard";import Newsletter from "@/components/Newsletter";
function Strip({title,cats,href}:{title:string;cats:string[];href:string}){const l=posts.filter(p=>cats.includes(p.category)).slice(0,3);
return(<section className="mx-auto max-w-6xl px-5 mt-20"><div className="flex items-end justify-between mb-6"><h2 className="text-4xl">{title}</h2><Link href={href} className="text-sm underline">See all</Link></div><div className="columns-1 sm:columns-2 lg:columns-3 gap-6">{l.map(p=><BlogCard key={p.slug} post={p}/>)}</div></section>)}
export default function Home(){return(<>
<section className="mx-auto max-w-6xl px-5 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center"><div>
<h1 className="text-5xl md:text-7xl">Build a better financial future, one smart decision at a time.</h1>
<p className="mt-6 text-lg text-ink/75 max-w-md">Practical ideas about money, side hustles, saving, online income, AI tools and personal growth.</p>
<div className="mt-8 flex flex-wrap gap-3"><Link href="/blog" className="rounded-full bg-forest text-cream px-6 py-3">Explore the Blog</Link><Link href="/blog/how-to-create-a-simple-budget" className="rounded-full border border-forest text-forest px-6 py-3">Start with a simple budget</Link></div></div>
<div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-b from-mist to-sage/60 flex items-end p-8" role="img" aria-label="Sage green brand panel"><p className="font-serif text-3xl text-forest">Learn. Build. Grow. Bloom.</p></div></section>
<section className="mx-auto max-w-6xl px-5"><h2 className="text-4xl mb-8">Featured articles</h2><div className="columns-1 sm:columns-2 lg:columns-3 gap-6">{posts.slice(0,3).map(p=><BlogCard key={p.slug} post={p}/>)}</div></section>
<section className="mx-auto max-w-6xl px-5 mt-16"><h2 className="text-4xl mb-6">Browse by topic</h2><ul className="flex flex-wrap gap-3">{categories.map(c=><li key={c.slug}><Link href={`/category/${c.slug}`} className="block rounded-full bg-beige px-5 py-2 hover:bg-mist">{c.name}</Link></li>)}</ul></section>
<Strip title="Money tips" cats={["Budgeting","Saving","Personal Finance"]} href="/category/budgeting"/>
<Strip title="Side hustles" cats={["Side Hustles","Make Money Online","Freelancing"]} href="/category/side-hustles"/>
<Strip title="AI tools" cats={["AI Tools"]} href="/category/ai-tools"/>
<section className="mx-auto max-w-6xl px-5 mt-20"><h2 className="text-4xl mb-6">Latest articles</h2><div className="columns-1 sm:columns-2 lg:columns-3 gap-6">{posts.map(p=><BlogCard key={p.slug} post={p}/>)}</div></section>
<section className="mx-auto max-w-4xl px-5 mt-20 grid md:grid-cols-2 gap-8 items-center"><div className="aspect-square rounded-3xl bg-mist flex items-center justify-center text-forest" role="img" aria-label="Photo placeholder">Your photo here</div><div><h2 className="text-4xl">Hi, I'm glad you're here.</h2><p className="mt-4 text-ink/75">Build &amp; Bloom Hub shares simple, honest ideas about money and growth. Read the story behind it.</p><Link href="/about" className="inline-block mt-5 underline">About me</Link></div></section>
<div className="px-5 mt-20"><Newsletter/></div></>)}
