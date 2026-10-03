import type {MetadataRoute} from "next";import {posts,categories,SITE} from "@/lib/data";
export default function sitemap():MetadataRoute.Sitemap{return[...["","/blog","/about","/contact","/privacy-policy"].map(p=>({url:SITE.url+p})),...categories.map(c=>({url:`${SITE.url}/category/${c.slug}`})),...posts.map(p=>({url:`${SITE.url}/blog/${p.slug}`,lastModified:p.date}))]}
