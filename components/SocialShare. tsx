import {SITE} from "@/lib/data";
export default function SocialShare({slug,title}:{slug:string;title:string}){const u=encodeURIComponent(`${SITE.url}/blog/${slug}`),t=encodeURIComponent(title);
const L:[string,string][]=[["Save to Pinterest",`https://pinterest.com/pin/create/button/?url=${u}&description=${t}`],["Share on Facebook",`https://www.facebook.com/sharer/sharer.php?u=${u}`],["Share on X",`https://twitter.com/intent/tweet?url=${u}&text=${t}`]];
return(<div className="flex flex-wrap gap-3 my-8" aria-label="Share this article">{L.map(([l,h])=><a key={l} href={h} target="_blank" rel="noopener noreferrer" className="rounded-full border border-forest text-forest px-4 py-2 text-sm">{l}</a>)}</div>)}
