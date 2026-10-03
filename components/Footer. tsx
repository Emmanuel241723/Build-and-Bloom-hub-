import Link from "next/link";import {categories,SITE} from "@/lib/data";
export default function Footer(){return(<footer className="mt-24 bg-forest text-cream"><div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-3">
<div><p className="font-serif text-2xl">{SITE.name}</p><p className="mt-3 text-sm opacity-80 max-w-xs">Practical ideas about money, side hustles, saving and growth. {SITE.tagline}</p></div>
<nav aria-label="Categories"><p className="font-medium mb-3">Categories</p><ul className="space-y-1 text-sm opacity-90">{categories.map(c=><li key={c.slug}><Link href={`/category/${c.slug}`}>{c.name}</Link></li>)}</ul></nav>
<nav aria-label="Site"><p className="font-medium mb-3">Site</p><ul className="space-y-1 text-sm opacity-90"><li><Link href="/blog">Blog</Link></li><li><Link href="/about">About</Link></li><li><Link href="/contact">Contact</Link></li><li><Link href="/privacy-policy">Privacy Policy</Link></li></ul></nav></div>
<p className="text-center text-xs opacity-70 pb-8">© {new Date().getFullYear()} {SITE.name}. Some links may be affiliate links.</p></footer>)}
