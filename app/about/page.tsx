import Image from 'next/image';
import Link from 'next/link';
import { Thumbpin } from '@/components/DoodleIcons';
import { TAPE_STYLE_DECOR } from '@/lib/constants';
import { GRADIENT_TOKENS } from '@/lib/designTokens';

export default function About() {
    return (
        <div className="max-w-4xl mx-auto min-h-full flex flex-col justify-center py-16 pb-24 md:py-0 md:pb-0">
            <div className="relative transform -rotate-1">
                <div className="animate-page-sheet relative min-h-[400px] text-gray-800 shadow-[5px_5px_15px_rgba(0,0,0,0.2)]">
                    {/* Tape - Top Left */}
                    <div
                        className="absolute -top-1 -left-6 w-24 md:w-32 h-10 shadow-sm z-20 -rotate-[8deg]"
                        style={TAPE_STYLE_DECOR}
                    />

                    {/* Thumbpin - Top Center */}
                    <Thumbpin className="absolute -top-2 left-1/2 -translate-x-1/2 z-20" />

                    {/* Paper Content */}
                    <div
                        className="bg-[#fff9c4] p-6 md:p-12 w-full h-full relative"
                        style={{
                            clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%)'
                        }}
                    >
                        {/* Folded Corner */}
                        <div
                            className="absolute bottom-0 right-0 pointer-events-none w-[var(--c-corner-fold)] h-[var(--c-corner-fold)] md:w-[var(--c-corner-fold-md)] md:h-[var(--c-corner-fold-md)]"
                            style={{ background: GRADIENT_TOKENS.foldCorner }}
                        />
                        <div
                            className="absolute bottom-0 right-0 pointer-events-none w-[var(--c-corner-fold)] h-[var(--c-corner-fold)] md:w-[var(--c-corner-fold-md)] md:h-[var(--c-corner-fold-md)]"
                            style={{
                                backgroundColor: GRADIENT_TOKENS.foldUnderside,
                                clipPath: 'polygon(0 0, 0 100%, 100% 0)'
                            }}
                        />

                        <h1 className="text-4xl md:text-5xl font-hand font-bold mb-4 text-gray-900 border-b-2 border-gray-400/30 pb-2">
                            About Me
                        </h1>

                        {/* Tagline */}
                        <div className="mb-5 bg-indigo-100 border-l-4 border-indigo-400 px-4 py-2 rounded-r-lg">
                            <p className="font-hand font-bold text-indigo-800 text-sm md:text-base">
                                ⚡ Final Year CS Student &nbsp;|&nbsp; Full-Stack + AI Builder &nbsp;|&nbsp; Placement Season 2026
                            </p>
                        </div>

                        {/* Impact Badges */}
                        <div className="mb-6 flex flex-wrap gap-2">
                            <span className="bg-amber-200 text-amber-900 font-hand font-bold text-xs md:text-sm px-3 py-1 rounded-full border border-amber-300">
                                🏛 DRDO Intern
                            </span>
                            <span className="bg-emerald-200 text-emerald-900 font-hand font-bold text-xs md:text-sm px-3 py-1 rounded-full border border-emerald-300">
                                🏆 LeetCode Knight (Top 5%)
                            </span>
                            <span className="bg-blue-200 text-blue-900 font-hand font-bold text-xs md:text-sm px-3 py-1 rounded-full border border-blue-300">
                                🚀 6 Live Projects
                            </span>
                            <span className="bg-rose-200 text-rose-900 font-hand font-bold text-xs md:text-sm px-3 py-1 rounded-full border border-rose-300">
                                🏅 TenzorX 2026 Hackathon
                            </span>
                        </div>

                        <div className="space-y-3 md:space-y-5 text-base md:text-xl font-hand leading-relaxed">
                            {/* Photo */}
                            <div className="float-right ml-3 md:ml-6 mb-1 md:mb-2 mt-1 md:mt-2 relative transform rotate-3 z-20">
                                <div className="bg-white p-1 md:p-2 shadow-md border border-gray-200 relative">
                                    <div
                                        className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-16 md:w-24 h-6 md:h-8 shadow-sm z-30 -rotate-1"
                                        style={TAPE_STYLE_DECOR}
                                    />
                                    <div className="w-24 h-24 md:w-48 md:h-48 bg-gray-200 relative overflow-hidden">
                                        <Image
                                            src="/resources/aboutPhoto.webp"
                                            alt="Disha Rathore - CS Student"
                                            fill
                                            sizes="(max-width: 768px) 96px, 192px"
                                            loading="eager"
                                            placeholder="blur"
                                            blurDataURL="data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoIAAgABUB8JZQAApt4/8AA/tAqOjucrquuceXgAAA="
                                            className="object-cover sepia-[.3]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <p>
                                Hi, I&apos;m <span className="font-bold bg-indigo-200 px-1.5 py-0.5 rounded text-indigo-800">Disha</span> 👋 — a final year CS student who builds production-grade software. I care about systems that actually scale, code that&apos;s actually maintainable, and products that actually ship.
                            </p>
                            <p>
                                This year I&apos;ve built <strong className="text-gray-900">6 live projects</strong> — a <span className="bg-blue-200 px-1.5 py-0.5 rounded text-blue-900 font-bold">hyperlocal marketplace</span> (ServeNow) with PostgreSQL, Redis, and Razorpay webhooks; a <span className="bg-green-200 px-1.5 py-0.5 rounded text-green-900 font-bold">food rescue platform</span> (FoodBridge) for Zomato&apos;s Feeding India challenge; an <span className="bg-purple-200 px-1.5 py-0.5 rounded text-purple-900 font-bold">AI meeting assistant</span> (CampusLens) with FastAPI + Groq; and an <span className="bg-yellow-200 px-1.5 py-0.5 rounded text-yellow-900 font-bold">AI loan agent</span> (LoanWizard) that won at TenzorX 2026.
                            </p>
                            <p>
                                Earlier I interned at <span className="bg-amber-200 px-1.5 py-0.5 rounded text-amber-900 font-bold">DRDO</span> on systems-level work, <span className="bg-orange-200 px-1.5 py-0.5 rounded text-orange-900 font-bold">IGDTUW</span> on app development, and <span className="bg-red-200 px-1.5 py-0.5 rounded text-red-900 font-bold">IIT Roorkee</span> on machine learning. Each pushed me into unfamiliar territory — which is exactly the point.
                            </p>
                            <p>
                                I hold a <span className="bg-emerald-200 px-1.5 py-0.5 rounded text-emerald-900 font-bold">LeetCode rating of 1884</span> (Knight, top ~5% globally) — not because I grind for rankings, but because sharp problem-solving is the foundation everything else is built on.
                            </p>
                            <p>
                                I&apos;m entering placement season looking for roles in <span className="underline decoration-wavy decoration-indigo-400">full-stack engineering</span>, <span className="underline decoration-wavy decoration-purple-400">AI/ML systems</span>, or <span className="underline decoration-wavy decoration-blue-400">backend-heavy products</span> — teams that move fast and build things that matter.
                            </p>

                            {/* Skills Section */}
                            <div className="mt-4 pt-4 border-t-2 border-gray-400/20 space-y-2">
                                <p className="font-bold text-gray-900 text-base md:text-lg">💼 Tech Stack</p>
                                <div className="grid grid-cols-1 gap-1.5 text-sm md:text-base">
                                    <p><span className="font-bold text-indigo-700">Languages:</span> Python, JavaScript, TypeScript, C++, Dart (Flutter), SQL</p>
                                    <p><span className="font-bold text-blue-700">Frontend:</span> React 18, Next.js 14, Tailwind CSS, Framer Motion</p>
                                    <p><span className="font-bold text-emerald-700">Backend:</span> Node.js, Express, FastAPI, Flask, Socket.io, REST APIs</p>
                                    <p><span className="font-bold text-orange-700">Data & AI:</span> PostgreSQL, MongoDB, Redis, SQLite, Groq LLM, Groq Vision</p>
                                    <p><span className="font-bold text-rose-700">Core:</span> DSA, System Design, Distributed Systems basics, API Design</p>
                                    <p><span className="font-bold text-purple-700">Tools:</span> Git, Vercel, Docker basics, Razorpay, Stripe, Google Maps API</p>
                                </div>
                            </div>

                            <p className="text-base md:text-lg text-gray-600 mt-4">
                                💬 Reach out: <a href="mailto:disharathore555@gmail.com" className="bg-red-200 hover:bg-red-300 px-1.5 py-0.5 rounded text-red-800 transition-[background-color,transform] inline-block hover:-rotate-2">disharathore555@gmail.com</a>
                            </p>
                            <p className="text-base md:text-lg text-gray-600 mt-2 italic">
                                📄 Full details on my <a href="/resume" className="bg-indigo-200 hover:bg-indigo-300 px-1.5 py-0.5 rounded text-indigo-800 font-semibold not-italic transition-[background-color,transform] inline-block hover:-rotate-2">resume →</a>
                            </p>
                        </div>

                        {/* Chat CTA */}
                        <div className="mt-8 pt-4 border-t-2 border-gray-400/20">
                            <Link href="/chat" className="group block">
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 mt-1 text-gray-400 group-hover:text-indigo-600 transition-colors">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                            <path d="M8 10h.01" opacity="0.6" />
                                            <path d="M12 10h.01" opacity="0.6" />
                                            <path d="M16 10h.01" opacity="0.6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-hand text-sm md:text-lg text-gray-500 group-hover:text-indigo-700 transition-colors">
                                            Want to know more? Ask me anything.
                                        </p>
                                        <p className="font-hand text-xs md:text-sm text-gray-400 group-hover:text-indigo-500 transition-colors mt-1">
                                            Click to chat →
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
