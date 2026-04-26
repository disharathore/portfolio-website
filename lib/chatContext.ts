// lib/chatContext.ts — Client-safe chat constants
import { LLM_CLIENT_TIMEOUT_MS } from '@/lib/llmConfig';
import { pickRandom } from '@/lib/utils';

export const WELCOME_MESSAGE = "Hey :) Ask me about my projects, internships, problem-solving journey, or anything really ~";

const GENERIC_FALLBACKS = [
  "Hmm, something went wrong on my end — try again in a sec! Meanwhile, feel free to check out my projects or resume ~",
  "My pen ran out of ink :/ Give it another shot, or browse around — there's plenty to explore!",
  "Looks like that note got lost in transit. Try again, or head over to my projects and about pages!",
  "Hit a snag there — sorry about that! Ask me again, or explore the site while I sort things out.",
  "Well, that didn't work as planned. One more try? Or check out my resume and projects in the meantime!",
];

interface ContextualFallback {
  keywords: string[];
  messages: string[];
}

const CONTEXTUAL_FALLBACK_DEFS: ContextualFallback[] = [
  {
    keywords: ['project', 'portfolio', 'work', 'built', 'shipped', 'servenow', 'foodbridge', 'campuslens', 'loanwizard', 'codebuddy'],
    messages: [
      "Got a bit scrambled — I've built ServeNow (hyperlocal marketplace with Redis + PostgreSQL), FoodBridge (Zomato Feeding India challenge), CampusLens (live AI meeting tool), LoanWizard (TenzorX 2026 hackathon winner), CodeBuddy (AI coding tutor), and Swasthya Saathi. All 6 are live — projects page has everything!",
      "Sorry, lost my thread. Recent work: ServeNow (Razorpay + Google Maps + Socket.io), FoodBridge (MongoDB + geospatial), CampusLens (FastAPI + Groq AI). Check the projects page ~",
      "Mind blanked for a sec. I've shipped 6 live projects this year — ServeNow, FoodBridge, CampusLens, LoanWizard, CodeBuddy, Swasthya Saathi. Projects page has the full list!",
    ],
  },
  {
    keywords: ['resume', 'cv', 'experience', 'education', 'skills', 'background', 'hire', 'hiring', 'intern', 'internship'],
    messages: [
      "A little foggy right now — quick version: final year CS student, interned at DRDO/IGDTUW/IIT Roorkee, built 6 live projects, LeetCode Knight (1884, top 5%). Resume page has details!",
      "Bit scattered, sorry. DRDO (systems), IGDTUW (app dev), IIT Roorkee (ML) — plus 6 production projects shipped this year. Resume page has everything ~",
      "Brain glitch there. Final year CS student, internships at DRDO/IGDTUW/IIT Roorkee, 6 live projects, placement season 2026 — resume has the full picture!",
    ],
  },
  {
    keywords: ['tech', 'stack', 'react', 'nextjs', 'typescript', 'cpp', 'python', 'programming', 'coding', 'language', 'framework'],
    messages: [
      "Got a bit turned around — I work with C++, Python, JavaScript, TypeScript. Frameworks: React, Next.js. Strong in DSA, system design basics, Git, and ML libraries. Ask me again!",
      "Head's in a muddle. Main stack: C++ for systems work, Python for ML, TypeScript/React for full-stack. Comfortable with REST APIs, Git, and ML tools. Try again in a sec!",
      "Lost the thread there. C++ and Python are my go-to, with React/Next.js for web and ML libraries for AI work. Give it another shot ~",
    ],
  },
  {
    keywords: ['leetcode', 'dsa', 'algorithms', 'problem solving', 'competitive', 'rating', 'knight'],
    messages: [
      "Got a bit scrambled — LeetCode rating 1884, Knight badge, top ~5% globally. Consistent in DSA and algorithms. Ask me again!",
      "Sorry, lost my place. I've solved 500+ problems on LeetCode, rated 1884 (Knight), which puts me in the top 5% globally. More in the about page ~",
      "Brain tripped for a sec. LeetCode Knight with 1884 rating — DSA is one of my strongest areas. Ask me anything about it!",
    ],
  },
  {
    keywords: ['email', 'linkedin', 'github', 'contact', 'reach', 'socials', 'links'],
    messages: [
      "Got a bit jumbled — you can find me on LinkedIn and GitHub (disharathore). All links are in the sidebar!",
      "Sorry, lost my place. GitHub is disharathore, LinkedIn is linked in the sidebar. Reach out anytime ~",
      "Brain tripped for a sec. Social sidebar on the left has all my links — GitHub, LinkedIn, and more!",
    ],
  },
];

const CONTEXTUAL_FALLBACKS = CONTEXTUAL_FALLBACK_DEFS.map(({ keywords, messages }) => ({
  pattern: new RegExp(`\\b(${keywords.join('|')})`, 'i'),
  messages,
}));

export function getContextualFallback(userPrompt: string): string {
  for (const { pattern, messages } of CONTEXTUAL_FALLBACKS) {
    if (pattern.test(userPrompt)) {
      return pickRandom(messages);
    }
  }
  return pickRandom(GENERIC_FALLBACKS);
}

export const CHAT_CONFIG = {
  maxTokens: 2048,
  temperature: 0.6,
  topP: 0.9,
  maxStoredMessages: 50,
  maxUserMessageLength: 500,
  responseTimeoutMs: LLM_CLIENT_TIMEOUT_MS,
  storageKey: 'disha-chat-history',
  suggestionsStorageKey: 'disha-chat-suggestions',
} as const;