import type {Metadata} from "next";import Link from "next/link";
export const metadata:Metadata={title:"About",description:"The story and mission behind Build & Bloom Hub.",alternates:{canonical:"/about"}};
export default function About(){return(<div className="mx-auto max-w-3xl px-5 py-12">
<h1 className="text-5xl">Hi, I'm glad you're here.</h1>
<div className="aspect-[4/3] bg-mist rounded-3xl mt-8 flex items-center justify-center text-forest" role="img" aria-label="Profile photo placeholder">Your photo here</div>
<div className="prose-bb mt-8"><h2>The story</h2><p>Build &amp; Bloom Hub started from a simple idea: money advice should be practical, kind and easy to follow. Replace this text with your own story.</p>
<h2>Our mission</h2><p>To help you make smart money decisions, one small step at a time.</p>
<h2>What to expect</h2><p>Budgeting, saving, side hustles, online income, AI tools, freelancing, digital skills and lifestyle ideas, written in plain language.</p>
<h2>Our values</h2><p>Honesty, simplicity, and progress over perfection. Nothing here is financial advice.</p></div>
<Link href="/blog" className="inline-block mt-6 rounded-full bg-forest text-cream px-6 py-3">Explore the Blog</Link></div>)}
