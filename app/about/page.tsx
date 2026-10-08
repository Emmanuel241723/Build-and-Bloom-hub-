import type {Metadata} from "next";
import Link from "next/link";
export const metadata:Metadata={title:"About",description:"Why Build & Bloom Hub exists, who it is for, and how we talk about money.",alternates:{canonical:"/about"}};
export default function About(){return(<div className="mx-auto max-w-3xl px-5 py-12">
<h1 className="text-5xl">Hi, I'm glad you're here.</h1>
<p className="mt-4 text-xl text-ink/75 max-w-xl">Build &amp; Bloom Hub is a place for practical budgeting, saving strategies and real income ideas, for women building financial freedom one decision at a time.</p>
<div className="aspect-[4/3] bg-mist rounded-3xl mt-8 flex items-center justify-center text-forest" role="img" aria-label="Profile photo placeholder">Your photo here</div>
<div className="prose-bb mt-8">
<h2>A little about me</h2>
<p>I'm Sarah R. Smith, and I live in the United States.</p>
<p>I'm not a financial adviser, and I won't pretend to be. I write the way I'd talk to a friend over coffee: plainly, with real numbers, and without judgement about where you're starting from.</p>
<p>Build &amp; Bloom Hub is where I share practical ideas about budgeting, saving and earning a little extra. Some posts are step-by-step guides. Others are honest looks at side hustles and tools, including where they fall short.</p>
<p>If something here helps, or doesn't, I'd love to hear about it. You can reach me any time through the contact page.</p>
<h2>Why this blog exists</h2>
<p>Most money advice made me feel behind. It was full of jargon, strict rules and people who seemed to have it all figured out. If you have ever closed an article feeling worse than when you opened it, this blog is meant to be the opposite.</p>
<p>Here, money is not a test you pass or fail. It is a skill you build slowly, with small steps and honest numbers.</p>
<h2>What you will find here</h2>
<p>Simple budgeting methods you can set up in an evening. Saving strategies that work on a small income. Side hustles and online income ideas that are realistic about how long they take. And a few tools and habits that make all of it easier.</p>
<h2>How I write</h2>
<p>I explain things in plain words. I will tell you when something is hard, when it takes time, and when an idea is mostly hype. I will not shame you for how you spend, and I will never promise you quick riches.</p>
<p>Every article ends with one thing you can do today. Start there.</p>
<h2>Who this is for</h2>
<p>This is for you if you are just starting out, living paycheck to paycheck, paying off debt, or looking for extra income. It is for women who want more control, more choices and more peace around money.</p>
<h2>A quick note</h2>
<p>Everything here is general information, not personal financial advice. Your situation is your own, so check the details that matter with a qualified professional. Some links may be affiliate links, and I will always say so.</p>
</div>
<div className="mt-6 flex flex-wrap gap-3"><Link href="/blog" className="rounded-full bg-forest text-cream px-6 py-3">Explore the Blog</Link><Link href="/contact" className="rounded-full border border-forest text-forest px-6 py-3">Say hello</Link></div></div>)}
