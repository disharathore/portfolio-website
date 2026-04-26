import { Thumbpin } from '@/components/DoodleIcons';
import { TAPE_STYLE_DECOR } from '@/lib/constants';
import { GRADIENT_TOKENS } from '@/lib/designTokens';

export default function WritingPage() {
    return (
        <div className="max-w-4xl mx-auto min-h-full flex flex-col justify-center py-16 pb-24 md:py-8 md:pb-8">
            <div className="relative transform rotate-[0.5deg]">
                <div className="animate-page-sheet relative text-gray-800 shadow-[5px_5px_15px_rgba(0,0,0,0.2)]">
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

                        <h1 className="text-4xl md:text-5xl font-hand font-bold mb-2 text-gray-900 border-b-2 border-gray-400/30 pb-2">
                            Writing / Research
                        </h1>

                        <p className="font-hand text-gray-500 text-sm md:text-base mb-8 italic">
                            Notes I wrote. Opinions I hold. Ideas I'm working through.
                        </p>

                        {/* Article Card */}
                        <article className="group relative bg-white/80 border border-gray-200 rounded-sm shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-200">
                            {/* Article tag */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-indigo-100 text-indigo-700 font-hand font-bold text-xs px-3 py-1 rounded-full border border-indigo-200">
                                    🛡️ Disaster Tech
                                </span>
                                <span className="bg-emerald-100 text-emerald-700 font-hand font-bold text-xs px-3 py-1 rounded-full border border-emerald-200">
                                    🤖 AI
                                </span>
                                <span className="text-gray-400 font-hand text-xs ml-auto">April 2025</span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-hand font-bold text-gray-900 mb-4 leading-snug">
                                When the Grid Goes Dark: Why Cyber Resilience Is Now a Disaster Management Problem
                            </h2>

                            <div className="space-y-4 font-hand text-base md:text-lg leading-relaxed text-gray-700">
                                <p>
                                    I've been thinking about this a lot lately — what happens when a cyberattack doesn't just crash a website, 
                                    but knocks out a dam's sensor network, or delays a flood alert by 40 minutes?
                                    That's not a hypothetical. It's something that has already happened in variants across the world,
                                    and India — with its rapidly digitalising infrastructure — is more exposed than most people realise.
                                </p>

                                <p>
                                    Disaster management has traditionally been a physical problem. Roads, shelters, relief camps, rescue teams.
                                    But the command layer sitting above all of that — the early warning systems, the coordination apps, 
                                    the control systems for power grids and water reservoirs — that's software now.
                                    And software fails differently from physical infrastructure. It fails silently, instantly, and sometimes deliberately.
                                </p>

                                <p>
                                    What bothers me as a CS student is how rarely these two worlds talk to each other.
                                    DRR frameworks spend very little time on the question: <em>what if the digital infrastructure itself is the disaster?</em>
                                    The Sendai Framework's Priority 1 is "Understanding disaster risk" — but most of the risk models
                                    I've read treat cyber threats as an IT problem, not a DRR problem.
                                    That distinction matters less and less every year.
                                </p>

                                <p>
                                    AI adds another layer to this. Right now, AI is being used in disaster contexts for image-based flood detection, 
                                    satellite analysis, real-time resource allocation. These tools are genuinely useful.
                                    But they introduce new failure points — adversarial inputs, model brittleness under novel scenarios, 
                                    overconfidence in predictions. A model trained on historical flood patterns might be confidently wrong about
                                    a flood shaped by a changing climate. And in disaster management, confidence is dangerous when it's misplaced.
                                </p>

                                <p>
                                    I don't have clean answers to any of this, which is part of why I'm interested in working at NIDM.
                                    These problems sit exactly at the intersection I care about — systems thinking, resilience engineering, 
                                    and the very unglamorous work of making critical infrastructure actually trustworthy.
                                    The question I keep coming back to: if we're building AI tools for disaster response, 
                                    who is stress-testing them for adversarial conditions? And how do we make sure 
                                    the failure mode of that tool is <em>graceful</em> rather than catastrophic?
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="mt-8 pt-4 border-t border-gray-200/60 flex items-center justify-between">
                                <span className="font-hand text-sm text-gray-400 italic">
                                    — Disha Rathore
                                </span>
                                <div className="flex gap-2">
                                    <span className="font-hand text-xs text-gray-400">~7 min read</span>
                                </div>
                            </div>
                        </article>

                        {/* Footer note */}
                        <p className="mt-8 font-hand text-sm text-gray-400 italic text-center">
                            More essays coming — ideas take time to become honest writing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
