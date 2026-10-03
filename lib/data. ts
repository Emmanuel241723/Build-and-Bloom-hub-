export type Section={h:string;p:string[];tip?:string};
export type Post={slug:string;title:string;excerpt:string;category:string;date:string;read:number;ratio:string;tone:string;body:Section[]};
export const SITE={name:"Build & Bloom Hub",tagline:"Learn. Build. Grow. Bloom.",url:process.env.NEXT_PUBLIC_SITE_URL||"https://example.com"};
export const categories=[["budgeting","Budgeting"],["saving","Saving"],["make-money-online","Make Money Online"],["side-hustles","Side Hustles"],["ai-tools","AI Tools"],["personal-finance","Personal Finance"],["freelancing","Freelancing"],["digital-skills","Digital Skills"],["lifestyle","Lifestyle"]].map(([slug,name])=>({slug,name}));
export const catSlug=(n:string)=>categories.find(c=>c.name===n)?.slug??"";
const P=(slug:string,title:string,category:string,date:string,read:number,ratio:string,tone:string,excerpt:string,body:Section[]):Post=>({slug,title,category,date,read,ratio,tone,excerpt,body});
export const posts:Post[]=[
P("how-to-create-a-simple-budget","How to Create a Simple Budget That Actually Works","Budgeting","2026-09-28",6,"aspect-[2/3]","bg-mist","A budget only works if you can stick to it. Here is a three-bucket method you can set up in twenty minutes.",[
{h:"Start with what comes in",p:["Write down your monthly take-home pay. If your income varies, use your lowest recent month so you never budget money you might not receive."]},
{h:"Use three buckets",p:["Split spending into needs, wants, and future you. A common starting point is 50/30/20, but adjust it to fit your real life.","Rent, food, transport and bills go in needs. Fun, subscriptions and eating out go in wants. Savings and debt payments go in future you."],tip:"Pay future you first, on payday, automatically."},
{h:"Review weekly",p:["Spend five minutes each week comparing what you planned with what you spent. Adjust one thing, not everything."]}]),
P("10-realistic-ways-to-make-money-online","10 Realistic Ways to Make Money Online","Make Money Online","2026-09-24",8,"aspect-[3/4]","bg-beige","Skip the get-rich-quick noise. These ten options are real, beginner-friendly, and need little or no upfront cost.",[
{h:"Services you already know how to do",p:["Writing, design, virtual assistance, tutoring and bookkeeping can all be sold online. Start with one skill and one small offer."]},
{h:"Selling products",p:["Digital templates, printables, and print-on-demand products let you sell without holding stock."]},
{h:"Be honest about timelines",p:["Most people earn little in the first months. Treat it as a skill you are building."],tip:"Set a 90-day experiment before judging results."}]),
P("7-side-hustles-you-can-start-with-your-phone","7 Side Hustles You Can Start With Your Phone","Side Hustles","2026-09-20",5,"aspect-[2/3]","bg-mist","You do not need a laptop to start earning. Here are seven ideas that work from your phone.",[
{h:"Ideas to try",p:["Social media management for small businesses, short-form video editing, reselling secondhand items, mobile photography, transcription, survey and testing apps, and delivery or errand services."]},
{h:"How to pick one",p:["Choose the idea that matches a skill you already have and that you can do in short, regular sessions."],tip:"Start with one hustle for 30 days before adding another."}]),
P("how-to-save-money-when-you-dont-earn-much","How to Save Money When You Don't Earn Much","Saving","2026-09-15",6,"aspect-[4/5]","bg-beige","Saving on a small income is about consistency, not big numbers. Start where you are.",[
{h:"Start tiny",p:["Saving a small fixed amount every week builds the habit. The amount can grow later."]},
{h:"Cut quietly",p:["Review subscriptions, bank fees and food waste. Small leaks add up faster than occasional big treats."]},
{h:"Build a mini emergency fund",p:["Aim for one small buffer first, then grow it toward a month of essentials."],tip:"Keep savings in a separate account so it is harder to spend."}]),
P("10-ai-tools-that-can-make-your-life-easier","10 AI Tools That Can Make Your Life Easier","AI Tools","2026-09-10",7,"aspect-[3/4]","bg-mist","From planning your week to drafting emails, these AI tools save real time when used well.",[
{h:"Where AI helps most",p:["Writing and editing, research, meal and budget planning, scheduling, note-taking and summaries, design drafts, and learning new skills."]},
{h:"Use it carefully",p:["Check facts, protect private data, and treat AI output as a first draft."],tip:"Check each tool's current pricing and privacy policy before you sign up."}]),
P("how-to-start-freelancing-as-a-beginner","How to Start Freelancing as a Beginner","Freelancing","2026-09-05",7,"aspect-[2/3]","bg-beige","Pick a skill, build three samples, and pitch your first client. Here is the simple path.",[
{h:"Choose one service",p:["Clear beats broad. Offer one service to one type of client."]},
{h:"Build a mini portfolio",p:["Create three sample projects, even unpaid or made-up ones, to show what you can do."]},
{h:"Pitch and price",p:["Send short, specific messages. Price by project when you can, and never work without clear terms."],tip:"Ask for a deposit before starting."}]),
P("simple-money-habits-that-can-improve-your-finances","Simple Money Habits That Can Improve Your Finances","Personal Finance","2026-08-30",5,"aspect-[4/5]","bg-mist","Small habits beat big plans. Seven routines that quietly improve your finances.",[
{h:"Habits worth building",p:["Check your balance weekly, automate savings, wait 48 hours before non-essential purchases, track subscriptions, and review your goals monthly."]},
{h:"Make it stick",p:["Attach each habit to something you already do, like your Sunday coffee."],tip:"Begin with one habit, not seven."}]),
P("how-students-can-build-multiple-income-streams","How Students Can Build Multiple Income Streams","Make Money Online","2026-08-25",6,"aspect-[3/4]","bg-beige","Studying leaves little time, but flexible income streams can fit around classes.",[
{h:"Flexible options",p:["Tutoring, freelance writing, campus services, selling notes or templates, and part-time remote work can all fit around a timetable."]},
{h:"Protect your studies",p:["Cap your hours and keep one stream simple before adding another."],tip:"Put your income into a separate account to track it."}])
];
export const getPost=(s:string)=>posts.find(p=>p.slug===s);
export const fmt=(d:string)=>new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});
