import {ImageResponse} from "next/og";
import {posts} from "@/lib/data";
export const alt="Build & Bloom Hub article";
export const size={width:1200,height:630};
export const contentType="image/png";
export default async function Image({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=posts.find(x=>x.slug===slug);const t=p?p.title:"Build & Bloom Hub";return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:70,background:"#F5EFE6",color:"#2B2B2B"}}><div style={{fontSize:36}}>{"Build & Bloom Hub"}</div><div style={{fontSize:68,fontWeight:700,lineHeight:1.15}}>{t}</div><div style={{fontSize:32}}>Learn. Build. Grow. Bloom.</div></div>,size);}
