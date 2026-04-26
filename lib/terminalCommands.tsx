import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { rateLimiter, RATE_LIMITS } from "@/lib/rateLimit";
import { APP_VERSION } from "@/lib/constants";
import { TIMING_TOKENS } from '@/lib/designTokens';
import { EXTERNAL_API_TIMEOUT_MS } from '@/lib/llmConfig';
import { PERSONAL_LINKS } from '@/lib/links';

const NAVIGATION_DELAY_MS = TIMING_TOKENS.navigationDelay;

export interface CommandResult {
    output: React.ReactNode;
    action?: () => void;
}

export type CommandHandler = (args: string[]) => CommandResult | Promise<CommandResult>;

export function createInitialTerminalOutput(): React.ReactNode {
    return (
        <div className="text-gray-400 text-sm font-mono leading-relaxed">
            <p className="text-emerald-400 mb-2">Initializing Portfolio {APP_VERSION}...</p>
            <p className="mb-1">[✓] Loading Graphics Engine....... <span className="text-emerald-500">Done</span></p>
            <p className="mb-1">[✓] Connecting to Creativity DB... <span className="text-emerald-500">Done</span></p>
            <p className="mb-1">[✓] Fetching Coffee............... <span className="text-emerald-500">Done</span></p>
            <p className="mt-4 text-white">System Ready. <span className="text-gray-500">Type <span className="text-emerald-400 font-bold">&apos;help&apos;</span> to see available commands.</span></p>
        </div>
    );
}

export const createCommandRegistry = (router: AppRouterInstance): Record<string, CommandHandler> => ({
    help: () => ({
        output: (
            <div className="space-y-1">
                <p>Available commands:</p>
                <p className="pl-4 text-emerald-400">about      - Who is Disha?</p>
                <p className="pl-4 text-emerald-400">projects   - View my work</p>
                <p className="pl-4 text-emerald-400">contact    - Get in touch</p>
                <p className="pl-4 text-emerald-400">socials    - List social links</p>
                <p className="pl-4 text-emerald-400">ls         - List files</p>
                <p className="pl-4 text-emerald-400">cat <span className="text-gray-500">[file]</span> - Read file</p>
                <p className="pl-4 text-emerald-400">open <span className="text-gray-500">[file]</span> - Open file</p>
                <p className="pl-4 text-emerald-400">clear      - Clear terminal</p>
                <p className="pl-4 text-emerald-400">joke       - Tell a joke</p>
                <p className="pl-4 text-emerald-400">skills     - View Tech Stack</p>
                <p className="pl-4 text-emerald-400">writing    - Read my essays &amp; research notes</p>
                <p className="pl-4 text-emerald-400">resume     - View Resume</p>
                <p className="pl-4 text-emerald-400">chat       - Talk to AI-me</p>
                <p className="pl-4 text-emerald-400">feedback   - Report a bug / send feedback</p>
            </div>
        )
    }),
    joke: async () => {
        if (!rateLimiter.check('joke-api', RATE_LIMITS.JOKE_API)) {
            const remainingTime = rateLimiter.getRemainingTime('joke-api', RATE_LIMITS.JOKE_API);
            return {
                output: (
                    <span className="text-yellow-400">
                        ⏳ Whoa there! Too many jokes. Try again in {remainingTime} seconds.
                    </span>
                )
            };
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), EXTERNAL_API_TIMEOUT_MS);
            const res = await fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode', {
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (!res.ok) throw new Error('API request failed');
            const data = await res.json();
            if (data.error) return { output: <span className="text-red-400">Error: Humor module offline.</span> };
            return {
                output: (
                    <div className="text-emerald-300 border-l-2 border-emerald-500/30 pl-3 py-1 my-1">
                        {data.type === 'single' ? (
                            <p className="italic">&quot;{data.joke}&quot;</p>
                        ) : (
                            <div className="space-y-2">
                                <p>{data.setup}</p>
                                <p className="text-emerald-200 font-bold">&gt; {data.delivery}</p>
                            </div>
                        )}
                    </div>
                )
            };
        } catch {
            return { output: <span className="text-red-400">Error: Connection failed.</span> };
        }
    },
    about: () => ({
        output: (
            <div className="space-y-2">
                <p>Hey, I&apos;m <strong className="text-emerald-400">Disha</strong> 👋</p>
                <p>I build scalable systems and solve real-world problems through clean, efficient code.</p>
                <p>I&apos;m a <strong className="text-emerald-400">pre-final year CS student</strong> with internships at DRDO, IGDTUW, and IIT Roorkee — working on systems, full-stack apps, and ML solutions.</p>
                <p>I&apos;m a LeetCode Knight (1884 rating, top 5% globally) and love breaking down complex problems into simple, reliable solutions.</p>
            </div>
        )
    }),
    contact: () => ({
        output: (
            <div className="space-y-1">
                <p>Ways to reach me:</p>
                <p className="pl-4">
                    <span className="text-gray-400 w-16 inline-block">Email:</span>
                    <a href={PERSONAL_LINKS.email} className="text-blue-400 hover:underline">disharathore555@gmail.com</a>
                </p>
                <p className="pl-4">
                    <span className="text-gray-400 w-16 inline-block">GitHub:</span>
                    <a href={PERSONAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@disharathore</a>
                </p>
                <p className="pl-4">
                    <span className="text-gray-400 w-16 inline-block">Phone:</span>
                    <a href={PERSONAL_LINKS.phone} className="text-blue-400 hover:underline">(+91) 9289328192</a>
                </p>
            </div>
        )
    }),
    projects: () => ({
        output: "Navigating to projects...",
        action: () => { setTimeout(() => router.push("/projects"), NAVIGATION_DELAY_MS); }
    }),
    init: () => {
        const uptime = typeof window !== 'undefined' ? Math.floor(performance.now() / 1000) : 0;
        return {
            output: (
                <span className="text-yellow-400">
                    System already initialized. ({APP_VERSION}) <br />
                    &gt; Uptime: <span className="text-gray-400">{uptime}s</span> <br />
                    &gt; Status: <span className="text-green-400">Stable</span>
                </span>
            )
        };
    },
    resume: () => ({
        output: "Navigating to resume page...",
        action: () => { setTimeout(() => router.push("/resume"), NAVIGATION_DELAY_MS); }
    }),
    cv: () => ({
        output: "Navigating to resume page...",
        action: () => { setTimeout(() => router.push("/resume"), NAVIGATION_DELAY_MS); }
    }),
    writing: () => ({
        output: "Navigating to writing & research notes...",
        action: () => { setTimeout(() => router.push("/writing"), NAVIGATION_DELAY_MS); }
    }),
    chat: () => ({
        output: "Navigating to chat...",
        action: () => { setTimeout(() => router.push("/chat"), NAVIGATION_DELAY_MS); }
    }),
    socials: () => ({
        output: (
            <div className="space-y-1">
                <p>Connect with me:</p>
                <p className="pl-4"><span className="text-gray-400">GitHub:</span> <a href={PERSONAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@disharathore</a></p>
                <p className="pl-4"><span className="text-gray-400">LinkedIn:</span> <a href={PERSONAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@disha-rathore</a></p>
                <p className="pl-4"><span className="text-gray-400">LeetCode:</span> <a href={PERSONAL_LINKS.leetcode} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@rathoredisha</a></p>
            </div>
        )
    }),
    github: () => ({
        output: "Opening GitHub profile...",
        action: () => window.open(PERSONAL_LINKS.github, '_blank', 'noopener,noreferrer')
    }),
    linkedin: () => ({
        output: "Opening LinkedIn profile...",
        action: () => window.open(PERSONAL_LINKS.linkedin, '_blank', 'noopener,noreferrer')
    }),
    skills: () => ({
        output: (
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-emerald-400 font-bold border-b border-gray-600 mb-2 uppercase tracking-wider text-xs">Core Tech</p>
                        <div className="pl-1 space-y-1 text-gray-300">
                            <p>• <span className="text-white font-semibold">Languages:</span> C++, Python, JavaScript, TypeScript</p>
                            <p>• <span className="text-white font-semibold">Frontend:</span> Next.js, React, Tailwind CSS</p>
                            <p>• <span className="text-white font-semibold">Backend:</span> Node.js, Express, MongoDB, REST APIs</p>
                            <p>• <span className="text-white font-semibold">ML/AI:</span> ML Libraries, Data Science, Chrome Extensions</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-blue-400 font-bold border-b border-gray-600 mb-2 uppercase tracking-wider text-xs">Competencies</p>
                        <div className="pl-1 space-y-1 text-gray-300">
                            <p>• Data Structures & Algorithms</p>
                            <p>• System Design Basics</p>
                            <p>• Full-Stack Development</p>
                            <p>• OOP & Clean Architecture</p>
                            <p>• Problem Solving (LeetCode Knight)</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800/30 p-2 rounded border border-gray-700/50">
                    <p className="text-amber-400 font-bold mb-1 text-xs uppercase tracking-wider">Rankings & Achievements</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                        <span>🏆 LeetCode Knight (Rating 1884)</span>
                        <span>⭐ Top 5% Globally on LeetCode</span>
                        <span>🏛 DRDO Intern (Systems)</span>
                        <span>🎓 B.Tech CS (Pre-Final Year)</span>
                    </div>
                </div>

                <p className="text-gray-500 italic text-xs">Type &apos;projects&apos; to see the code backing these up.</p>
            </div>
        )
    }),
    ls: () => ({
        output: (
            <div className="grid grid-cols-2 gap-2 max-w-xs text-blue-300">
                <span>about.md</span>
                <span>projects.json</span>
                <span>skills.md</span>
                <span>writing.md</span>
                <span>resume.pdf</span>
                <span>contact.txt</span>
                <span>secrets.env</span>
            </div>
        )
    }),
    cat: (args: string[]) => {
        const file = args[0];
        if (!file) return { output: "Usage: cat [filename]" };
        const files: Record<string, string> = {
            "about.md": "Disha Rathore: Pre-final year CS student. Interned at DRDO, IGDTUW, IIT Roorkee. LeetCode Knight (1884, Top 5%).",
            "projects.json": "[ { \"name\": \"File System\", \"stack\": \"C++ / FUSE\" }, { \"name\": \"Swasthya Saathi\", \"stack\": \"React + Node.js\" }, { \"name\": \"GreenCart\", \"stack\": \"MERN\" }, ... ]",
            "skills.md": "Languages: C++, Python, JS, TypeScript | Frameworks: React, Next.js | Core: DSA, System Design | Tools: Git, REST APIs, ML Libraries",
            "writing.md": "Essay: 'When the Grid Goes Dark: Why Cyber Resilience Is Now a Disaster Management Problem' — run 'open writing.md' to read it.",
            "contact.txt": "Email: disharathore555@gmail.com\nPhone: (+91) 9289328192",
            "resume.pdf": "Error: Binary file not readable. Try 'open resume.pdf'",
            "secrets.env": "Error: Permission denied. Nice try! ;)"
        };
        return { output: files[file] || `File not found: ${file}` };
    },
    open: (args: string[]) => {
        const file = args[0];
        if (!file) return { output: "Usage: open [filename]" };
        const openable: Record<string, { output: string; route: string }> = {
            "resume.pdf": { output: "Opening resume...", route: "/resume" },
            "projects.json": { output: "Opening projects...", route: "/projects" },
            "skills.md": { output: "Opening about page...", route: "/about" },
            "writing.md": { output: "Opening writing & research notes...", route: "/writing" },
        };
        const entry = openable[file];
        if (entry) return { output: entry.output, action: () => { setTimeout(() => router.push(entry.route), NAVIGATION_DELAY_MS); } };
        return { output: `Cannot open ${file}. Try 'cat' to read it.` };
    },
    whoami: () => ({ output: "visitor@dishas.portfolio" }),
    date: () => ({ output: new Date().toString() }),
    sudo: () => ({ output: <span className="text-red-500 font-bold">Permission denied: You are not authorized.</span> }),
    feedback: () => ({
        output: (
            <span className="text-emerald-300">Opening feedback form... ✏️</span>
        ),
        action: () => {
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('open-feedback'));
            }
        }
    }),
    clear: () => ({ output: "" })
});