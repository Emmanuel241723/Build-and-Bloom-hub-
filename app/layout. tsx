import type {Metadata} from "next";import {Cormorant_Garamond,DM_Sans} from "next/font/google";import "./globals.css";
import Navbar from "@/components/Navbar";import Footer from "@/components/Footer";import {SITE} from "@/lib/data";
const serif=Cormorant_Garamond({subsets:["latin"],weight:["500","600","700"],variable:"--font-cormorant",display:"swap"});
const sans=DM_Sans({subsets:["latin"],variable:"--font-dm",display:"swap"});
export const metadata:Metadata={metadataBase:new URL(SITE.url),title:{default:`${SITE.name} | ${SITE.tagline}`,template:`%s | ${SITE.name}`},description:"Practical ideas about budgeting, saving, side hustles, online income, AI tools and personal growth.",openGraph:{siteName:SITE.name,type:"website"},twitter:{card:"summary_large_image"}};
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang="en" className={`${serif.variable} ${sans.variable}`}><body><Navbar/><main>{children}</main><Footer/></body></html>)}
