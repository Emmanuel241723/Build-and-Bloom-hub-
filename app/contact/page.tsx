import type {Metadata} from "next";
import ContactForm from "@/components/ContactForm";
export const metadata:Metadata={title:"Contact",description:"Get in touch with Build & Bloom Hub.",alternates:{canonical:"/contact"}};
export default function Contact(){return(<div className="mx-auto max-w-2xl px-5 py-12"><h1 className="text-5xl mb-3">Contact</h1><p className="mb-8 text-ink/75">Questions, collaborations or feedback? Send a message using the form, or email <a href="mailto:katlegndlovu02@gmail.com" className="underline">katlegndlovu02@gmail.com</a>.</p><ContactForm/>
<p className="mt-8 text-sm text-ink/60">Social links: Pinterest, Instagram, TikTok (add your URLs).</p></div>)}
