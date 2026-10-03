import type {Metadata} from "next";
export const metadata:Metadata={title:"Privacy Policy",description:"How Build & Bloom Hub handles your information.",alternates:{canonical:"/privacy-policy"}};
const S:[string,string][]=[["Information we collect","Information you give us, such as your name and email when you subscribe or contact us, plus basic technical data like browser type and pages visited."],
["Cookies","We may use cookies to keep the site working and to understand how it is used. You can control cookies in your browser settings."],
["Analytics","We may use analytics tools to learn which content is useful. This data is aggregated."],
["Newsletter","If you subscribe, we store your email to send updates. You can unsubscribe at any time."],
["Contact forms","Messages you send are used only to reply to you."],
["Third-party services","We may use services such as email providers, analytics and hosting. They have their own privacy policies."],
["Affiliate links","Some links may be affiliate links. We may earn a commission at no extra cost to you."],
["Advertising","We may display ads in the future. Ad partners may use cookies to show relevant ads."],
["How we use data","To run the site, send requested emails, improve content and respond to messages."],
["Data protection","We take reasonable steps to protect your data, but no online system is completely secure."],
["Your rights","Depending on where you live, you may ask to access, correct or delete your data. Contact us to make a request."],
["Policy updates","We may update this policy and will change the date below when we do."]];
export default function Privacy(){return(<div className="mx-auto max-w-3xl px-5 py-12"><h1 className="text-5xl">Privacy Policy</h1><p className="mt-3 text-sm text-ink/60">Last updated: October 2026. This is a general template, not legal advice. Have it reviewed before launch.</p>
<div className="prose-bb mt-6">{S.map(([h,t])=><section key={h}><h2>{h}</h2><p>{t}</p></section>)}</div></div>)}
