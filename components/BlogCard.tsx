import Link from "next/link";
import {Post,fmt,catSlug} from "@/lib/data";
export default function BlogCard({post}:{post:Post}){return(<article className="break-inside-avoid mb-6 group">
<Link href={`/blog/${post.slug}`} aria-label={post.title}><div className={`${post.ratio} ${post.tone} rounded-2xl flex items-end p-5`}><span className="font-serif text-2xl text-forest/80 leading-tight">{post.title}</span></div></Link>
<div className="pt-3"><Link href={`/category/${catSlug(post.category)}`} className="text-sm text-forest font-medium">{post.category}</Link>
<h3 className="text-2xl mt-1"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
<p className="text-sm mt-2 text-ink/75">{post.excerpt}</p><p className="text-xs mt-2 text-ink/60">{fmt(post.date)}, {post.read} min read</p></div></article>)}
