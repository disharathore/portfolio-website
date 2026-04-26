import 'server-only';
import type { ProjectSlug } from '@/lib/projectCatalog';

interface FactEntry {
  id: string;
  text: string;
  tags: readonly string[];
  priority?: number;
}

const CORE_FACTS: FactEntry[] = [
  {
    id: 'identity',
    text: 'Disha Rathore is a final year Computer Science student entering placement season 2026. She builds production-grade full-stack systems, AI-powered tools, and hyperlocal platforms — focused on code that ships and scales.',
    tags: ['who', 'disha', 'about', 'student', 'cs', 'software engineer', 'ai', 'final year', 'placement'],
    priority: 10,
  },
  {
    id: 'internships',
    text: 'Interned at DRDO (systems-level file system work), IGDTUW (app development), and IIT Roorkee (machine learning). Gained experience across low-level systems, mobile apps, and ML pipelines.',
    tags: ['drdo', 'igdtuw', 'iit roorkee', 'internship', 'intern', 'experience', 'work'],
    priority: 10,
  },
  {
    id: 'leetcode',
    text: 'LeetCode Knight with a rating of 1884, top ~5% globally. Consistent in data structures and algorithms. 500+ problems solved.',
    tags: ['leetcode', 'dsa', 'algorithms', 'rating', 'knight', 'problem solving', 'competitive', 'top 5'],
    priority: 9,
  },
  {
    id: 'stack',
    text: 'Languages: Python, JavaScript, TypeScript, C++, Dart (Flutter), SQL. Frontend: React 18, Next.js 14, Tailwind, Framer Motion. Backend: Node.js, Express, FastAPI, Flask, Socket.io. Data/AI: PostgreSQL, MongoDB, Redis, SQLite, Groq LLM, Groq Vision. Tools: Git, Vercel, Razorpay, Stripe, Google Maps API.',
    tags: ['stack', 'tech stack', 'languages', 'react', 'nextjs', 'typescript', 'python', 'node', 'fastapi', 'postgresql', 'redis', 'mongodb', 'groq', 'flutter'],
    priority: 8,
  },
  {
    id: 'approach',
    text: 'Focused on breaking down complex problems into reliable, scalable solutions. Cares about clean code, real architecture decisions, and building things that actually ship to production.',
    tags: ['approach', 'philosophy', 'code', 'clean code', 'scalable', 'systems'],
    priority: 7,
  },
  {
    id: 'hackathon',
    text: 'Won at TenzorX 2026 (national hackathon by Poonawalla Fincorp) with LoanWizard — an AI video call loan agent using Groq Vision, Web Speech API, and LLM risk scoring. Built in 48 hours.',
    tags: ['hackathon', 'tenzorx', 'loanwizard', 'poonawalla', 'competition', 'won', 'award'],
    priority: 9,
  },
];

const PROJECT_FACTS: FactEntry[] = [
  {
    id: 'project-servenow',
    text: 'ServeNow is a production-grade hyperlocal service marketplace. Stack: Next.js 14, TypeScript, PostgreSQL, Redis, Socket.io, Razorpay, Google Maps API. Features: OTP login via MSG91, real-time worker GPS tracking with ETA, Razorpay HMAC webhook verification, Redis distributed locks to prevent double-booking. Live at servenow-hyperlocal-marketplace.vercel.app',
    tags: ['servenow', 'hyperlocal', 'marketplace', 'postgresql', 'redis', 'razorpay', 'socket.io', 'google maps', 'otp', 'booking', 'nextjs', 'live'],
    priority: 10,
  },
  {
    id: 'project-foodbridge',
    text: 'FoodBridge is a real-time food surplus rescue platform built for Zomato Feeding India challenge. Stack: React 18, Node.js, Express, MongoDB Atlas, Socket.io, JWT. Features: atomic MongoDB findOneAndUpdate to prevent double-claims, 2dsphere geospatial indexing for nearest NGO discovery, city-scoped Socket.io rooms, 5-min cron to expire stale listings. Live at foodbridgezomato.netlify.app',
    tags: ['foodbridge', 'food', 'zomato', 'ngo', 'surplus', 'mongodb', 'socket.io', 'geospatial', 'impact', 'live'],
    priority: 10,
  },
  {
    id: 'project-campuslens',
    text: 'CampusLens is a live AI meeting intelligence system. Stack: FastAPI, Python, WebSocket, Groq LLM, SQLite, NumPy. Features: real-time speech-to-text via browser WebSocket pipeline, Groq generates meeting summaries and action items in 0.32s avg, NumPy audio clustering for speaker attribution (10 speakers, no cloud). Live at campuslens-iota.vercel.app',
    tags: ['campuslens', 'meeting', 'ai', 'transcription', 'action items', 'fastapi', 'groq', 'websocket', 'python', 'speaker', 'live'],
    priority: 10,
  },
  {
    id: 'project-loanwizard',
    text: 'LoanWizard is a national hackathon project (TenzorX 2026, Poonawalla Fincorp). Stack: React 18, Node.js, Groq Llama 3 70B, Groq Vision (Llama 4 Scout), Web Speech API. Features: AI conducts 2-min voice loan interview, Groq Vision estimates age from webcam, geo-fraud detection, generates 3-tier loan offer in under 3s. Live at loanwizard.vercel.app',
    tags: ['loanwizard', 'loan', 'hackathon', 'tenzorx', 'poonawalla', 'groq', 'vision', 'speech', 'ai', 'fintech', 'live'],
    priority: 9,
  },
  {
    id: 'project-codebuddy',
    text: 'CodeBuddy is an AI pair programmer for students. Stack: React 18, Vite, Monaco Editor, Node.js, Groq SSE, Python subprocess sandbox, SQLite. Features: 3-level progressive hint ladder (concept/pseudocode/near-code) streaming via SSE, live Python code execution with 5s timeout, SQLite session analytics. Built targeting Microsoft Explore. Live at codebuddy-zeta.vercel.app',
    tags: ['codebuddy', 'coding', 'ai', 'monaco', 'editor', 'hints', 'python', 'sandbox', 'groq', 'sse', 'edtech', 'microsoft', 'live'],
    priority: 9,
  },
  {
    id: 'project-swasthya',
    text: 'Swasthya Saathi is a multi-role digital health ecosystem for migrant workers. Stack: Flutter (Dart), React, TypeScript, Flask, MongoDB, Firebase, SQLite. Features: offline-first Flutter volunteer app with Aadhaar QR scanning and SQLite sync, React doctor portal with OTP consent before record unlock, government analytics dashboard for disease trend monitoring.',
    tags: ['swasthya', 'health', 'flutter', 'migrant', 'aadhaar', 'offline', 'flask', 'mongodb', 'doctor', 'social impact'],
    priority: 8,
  },
];

const PROJECT_FACT_TEXT_BY_SLUG: Partial<Record<ProjectSlug, string>> = {
  'servenow': 'ServeNow is a hyperlocal service marketplace with PostgreSQL, Redis booking locks, Razorpay HMAC webhook, Socket.io GPS tracking, and OTP auth. Live at servenow-hyperlocal-marketplace.vercel.app',
  'foodbridge': 'FoodBridge is a food surplus rescue platform with atomic MongoDB claims, geospatial NGO discovery, and Socket.io city rooms. Built for Zomato Feeding India. Live at foodbridgezomato.netlify.app',
  'campuslens': 'CampusLens is a live AI meeting assistant — FastAPI WebSocket + Groq generates summaries in 0.32s, NumPy tracks 10 speakers locally. Live at campuslens-iota.vercel.app',
  'loanwizard': 'LoanWizard is a TenzorX 2026 hackathon winner — AI voice loan interview with Groq Vision webcam age estimation and 3-tier risk-scored loan offers. Live at loanwizard.vercel.app',
  'codebuddy': 'CodeBuddy is an AI coding tutor with Monaco editor, Groq SSE hint streaming (3-level ladder), and a Python subprocess sandbox. Built for Microsoft Explore. Live at codebuddy-zeta.vercel.app',
  'swasthya-saathi': 'Swasthya Saathi is a multi-role health ecosystem (Flutter volunteer app + React doctor portal + gov dashboard) for migrant workers in Kerala.',
};

const PERSONAL_FACTS: FactEntry[] = [
  {
    id: 'seeking',
    text: 'Entering placement season 2026 — looking for full-stack engineering, AI/ML systems, or backend-heavy product roles. Open to both on-campus and off-campus opportunities.',
    tags: ['seeking', 'opportunities', 'job', 'hire', 'hiring', 'looking', 'open to work', 'placement', 'campus'],
    priority: 8,
  },
  {
    id: 'contact',
    text: 'Find Disha on GitHub (disharathore) and LinkedIn. Email: disharathore555@gmail.com. All social links are in the sidebar.',
    tags: ['contact', 'email', 'github', 'linkedin', 'reach', 'socials', 'links', 'connect'],
    priority: 6,
  },
];

const SITE_FACTS: FactEntry[] = [
  {
    id: 'site-pages',
    text: 'Site pages: home, about, projects, resume, and chat. Projects page shows all 6 live projects. Resume page has downloadable CV. About page has full background.',
    tags: ['home', 'about page', 'projects page', 'resume', 'chat page', 'site', 'pages'],
    priority: 4,
  },
];

const FACT_BANK: FactEntry[] = [
  ...CORE_FACTS,
  ...PROJECT_FACTS,
  ...PERSONAL_FACTS,
  ...SITE_FACTS,
];

const ALWAYS_INCLUDE_IDS = ['identity', 'internships', 'stack'];

function getMatchScore(fact: FactEntry, query: string): number {
  let score = fact.priority ?? 0;
  for (const tag of fact.tags) {
    if (query.includes(tag)) {
      score += tag.length >= 6 ? 6 : 3;
    }
  }
  if (fact.text.toLowerCase().includes(query.trim()) && query.trim().length >= 5) {
    score += 4;
  }
  return score;
}

export function getRelevantDhruvFacts(messages: { role: string; content: string }[], limit = 8): string {
  const query = messages
    .filter((message) => message.role === 'user')
    .slice(-4)
    .map((message) => message.content.toLowerCase())
    .join(' ')
    .trim();

  const alwaysIncluded = FACT_BANK.filter((fact) => ALWAYS_INCLUDE_IDS.includes(fact.id));
  const ranked = FACT_BANK
    .filter((fact) => !ALWAYS_INCLUDE_IDS.includes(fact.id))
    .map((fact) => ({ fact, score: query ? getMatchScore(fact, query) : (fact.priority ?? 0) }))
    .sort((left, right) => right.score - left.score)
    .filter(({ score }) => score > 0)
    .slice(0, Math.max(0, limit - alwaysIncluded.length))
    .map(({ fact }) => fact);

  const facts = [...alwaysIncluded, ...ranked].slice(0, limit);
  return facts.map((fact) => `- ${fact.text}`).join('\n');
}

export function getProjectFactText(slug: ProjectSlug): string | null {
  return PROJECT_FACT_TEXT_BY_SLUG[slug] ?? null;
}
