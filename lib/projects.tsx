import type { ComponentType, ReactNode } from 'react';
import { Activity, Globe, ScrollText, Smartphone, Code2, Zap } from 'lucide-react';
import type { ProjectSlug } from '@/lib/projectCatalog';

const ICONS = { Activity, Globe, ScrollText, Smartphone, Code2, Zap } as const;

export interface ProjectRecord {
  slug: ProjectSlug;
  name: string;
  desc: ReactNode;
  lang: string;
  link: string;
  colorClass: string;
  image: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
  imageClassName?: string;
  stack: string[];
  blurDataURL: string;
  video?: string | null;
  role: string;
  year: string;
  duration: string;
  highlights: string[];
  demoLink?: string;
}

const BLUR = {
  portfolio:   'data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAACQAQCdASoIAAgABUB8JZwAAudZPNwA/t6YoJcA0BAAAA==',
  ivc:         'data:image/webp;base64,UklGRmoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCgAAAABJ6AgbQPGv+V2x0ZERAOHQbaRXmEKU5jC+Vu9Q0T/s0oV4B6A6rYBVlA4IBwAAAAwAQCdASoIAAgABwB8JZwAA3AA/u6WCQLPOBAA',
  recommender: 'data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCgAAAABJ6AgbQPGv+V2x0ZERAOHQbaRXmEKU5jC+Vu9Q0T/s0oV4B6A6rYBVlA4ICAAAAAwAQCdASoIAAgABUB8JZQAA3AA/uxjjE3P2PxDd6EAAA==',
  atomVault:   'data:image/webp;base64,UklGRmwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCgAAAABJ6AgbQPGv+V2x0ZERAOHQbaRXmEKU5jC+Vu9Q0T/s0oV4B6A6rYBVlA4IB4AAAAwAQCdASoIAAgABUB8JZwAA3AA/u4CK3YKb4UQgAA=',
  bloom:       'data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCgAAAABJ6AgbQPGv+V2x0ZERAOHQbaRXmEKU5jC+Vu9Q0T/s0oV4B6A6rYBVlA4ICAAAACQAQCdASoIAAgABUB8JZQAAp1HJ1wA/udBgwKu8XAAAA==',
} as const;

export const PROJECTS: ProjectRecord[] = [
  {
    slug: 'servenow',
    name: 'ServeNow',
    link: 'https://github.com/disharathore/servenow-hyperlocal-marketplace',
    demoLink: 'https://servenow-hyperlocal-marketplace.vercel.app/login',
    image: '/resources/servenow.webp',
    video: '/resources/servenow.mp4',
    blurDataURL: BLUR.portfolio,
    colorClass: 'bg-[#DBEAFE]',
    icon: ICONS.Globe,
    label: 'Full Stack Platform',
    lang: 'Next.js 14 / Node.js / PostgreSQL / Redis',
    role: 'Full Stack Engineer',
    year: '2026',
    duration: '2 months',
    desc: (
      <>
        A <strong>production-grade hyperlocal marketplace</strong> — verified OTP login,
        real-time worker tracking via Socket.io + Google Maps ETA, Razorpay payments
        with HMAC webhook verification, and Redis locks that prevent double-booking.
      </>
    ),
    stack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Redis', 'Socket.io', 'Razorpay', 'Google Maps API'],
    highlights: [
      'Redis distributed locks prevent two customers booking the same worker slot — race condition eliminated at the DB layer',
      'Socket.io worker:location events stream GPS → Google Maps Directions API → ETA back to customer in real time',
      'Razorpay webhook verifies HMAC-SHA256 signature before marking payment complete — no client-side trust',
    ],
  },
  {
    slug: 'foodbridge',
    name: 'FoodBridge',
    link: 'https://github.com/disharathore/foodbridge',
    demoLink: 'https://foodbridgezomato.netlify.app',
    image: '/resources/foodbridge.webp',
    video: '/resources/foodbridge.mp4',
    blurDataURL: BLUR.ivc,
    colorClass: 'bg-[#DCFCE7]',
    icon: ICONS.Activity,
    label: 'Impact Tech',
    lang: 'React / Node.js / MongoDB / Socket.io',
    role: 'Full Stack Developer',
    year: '2026',
    duration: '2 months',
    desc: (
      <>
        A <strong>real-time food surplus rescue platform</strong> — built for Zomato's
        Feeding India challenge. Atomic MongoDB claims stop double-booking,
        geospatial indexing finds nearest NGOs, and Socket.io city rooms prevent
        cross-city noise. Live on Netlify + Render.
      </>
    ),
    stack: ['React 18', 'Node.js', 'Express', 'MongoDB Atlas', 'Socket.io', 'JWT', 'Netlify + Render'],
    highlights: [
      'Atomic findOneAndUpdate with { status: "available" } filter — two NGOs physically cannot claim the same listing',
      'MongoDB $near + 2dsphere index resolves nearest surplus pickup in milliseconds — same tech as Zomato proximity',
      'Socket.io rooms scoped per city; a 5-min cron batch-expires stale listings via updateMany — no ghost listings',
    ],
  },
  {
    slug: 'campuslens',
    name: 'CampusLens',
    link: 'https://github.com/disharathore/campuslens',
    demoLink: 'https://campuslens-iota.vercel.app',
    image: '/resources/campuslens.webp',
    video: '/resources/campuslens.mp4',
    blurDataURL: BLUR.bloom,
    colorClass: 'bg-[#F3E8FF]',
    icon: ICONS.Zap,
    label: 'AI + Real-time',
    lang: 'FastAPI / Python / Groq / WebSocket',
    role: 'Backend + AI Engineer',
    year: '2026',
    duration: '2 months',
    desc: (
      <>
        A <strong>live AI meeting intelligence system</strong> — streams browser speech
        through a FastAPI WebSocket pipeline, runs Groq LLM to extract structured
        action items in 0.32s avg, and tracks speaker attribution via NumPy audio
        clustering. No login needed.
      </>
    ),
    stack: ['FastAPI', 'Python', 'WebSocket', 'Groq LLM', 'SQLite', 'NumPy', 'Vercel'],
    highlights: [
      'FastAPI WebSocket ingests live browser speech chunks and streams to Groq — transcript appears as you speak',
      'Groq generates structured meeting summaries + owner-tagged action items in 0.32s avg / 0.33s p95 (benchmarked)',
      'Local NumPy audio clustering attributes talk-time per speaker — 10 unique speakers tracked without any cloud service',
    ],
  },
  {
    slug: 'loanwizard',
    name: 'LoanWizard',
    link: 'https://github.com/disharathore/Loanwizard',
    demoLink: 'https://loanwizard.vercel.app',
    image: '/resources/loanwizard.webp',
    video: '/resources/loanwizard.mp4',
    blurDataURL: BLUR.atomVault,
    colorClass: 'bg-[#FBCFE8]',
    icon: ICONS.Code2,
    label: 'AI Hackathon',
    lang: 'React / Node.js / Groq Vision / Web Speech API',
    role: 'AI Engineer',
    year: '2026',
    duration: '48 hrs',
    desc: (
      <>
        A <strong>national hackathon AI project</strong> (TenzorX 2026 · Poonawalla Fincorp) —
        replaces loan forms with a 2-min AI video call: speech-to-text interview,
        Groq Vision age estimation from webcam, geo-fraud detection,
        and LLM risk scoring into a tiered loan offer.
      </>
    ),
    stack: ['React 18', 'Vite', 'Node.js', 'Groq Llama 3 70B', 'Groq Vision (Llama 4)', 'Web Speech API'],
    highlights: [
      'AI agent interviews applicant via browser voice — Web Speech API captures spoken answers, TTS reads questions back in en-IN',
      'Webcam screenshot sent to Groq Vision (Llama 4 Scout) for age estimation; cross-validated with geo-location for fraud signals',
      'Full interview transcript + geo + age → Groq Llama 3 70B → structured JSON risk profile → 3-tier loan offer in under 3s',
    ],
  },
  {
    slug: 'codebuddy',
    name: 'CodeBuddy',
    link: 'https://github.com/disharathore/codebuddy',
    demoLink: 'https://codebuddy-zeta.vercel.app',
    image: '/resources/codebuddy.webp',
    video: '/resources/codebuddy.mp4',
    blurDataURL: BLUR.recommender,
    colorClass: 'bg-[#FEF3C7]',
    icon: ICONS.Smartphone,
    label: 'EdTech + AI',
    lang: 'React / Node.js / Monaco / Groq SSE',
    role: 'Full Stack Developer',
    year: '2026',
    duration: '2 months',
    desc: (
      <>
        An <strong>AI pair programmer for students</strong> — Monaco editor (VS Code engine),
        3-level progressive hint ladder streaming via Groq SSE, live Python
        subprocess sandbox with test-case validation, and session analytics.
        Built targeting Microsoft Explore.
      </>
    ),
    stack: ['React 18', 'Vite', 'Monaco Editor', 'Node.js', 'Groq API (SSE)', 'Python Subprocess', 'SQLite'],
    highlights: [
      '3-level hint ladder: concept → pseudocode → near-code with blanks — hints stream live via Server-Sent Events',
      'Python subprocess sandbox writes code to tmp file, executes with 5s timeout, runs problem-specific test cases',
      'SQLite tracks hint usage per problem per session — analytics dashboard shows which problems trip students most',
    ],
  },
  {
    slug: 'swasthya-saathi',
    name: 'Swasthya Saathi',
    link: 'https://github.com/disharathore/Swasthya-Saathi',
    demoLink: 'https://github.com/disharathore/Swasthya-Saathi',
    image: '/resources/swasthyasaathi.webp',
    video: '/resources/swasthyasaathi.mp4',
    blurDataURL: BLUR.ivc,
    colorClass: 'bg-[#DCFCE7]',
    icon: ICONS.Activity,
    label: 'Social Impact',
    lang: 'Flutter / React / Flask / MongoDB',
    role: 'Full Stack Developer',
    year: '2025',
    duration: '3 months',
    desc: (
      <>
        A <strong>multi-role health ecosystem for migrant workers</strong> — Flutter
        volunteer app (Aadhaar QR + offline-first SQLite), React doctor portal
        (OTP consent before record access), and a government analytics dashboard
        for disease trend monitoring.
      </>
    ),
    stack: ['Flutter', 'Dart', 'React', 'TypeScript', 'Flask', 'MongoDB', 'Firebase', 'SQLite'],
    highlights: [
      'Offline-first Flutter volunteer app — Aadhaar QR scanned locally, stored in SQLite, synced to MongoDB on reconnect',
      'Doctor portal requires OTP consent from worker before unlocking full medical history — privacy enforced at API level',
      'Government dashboard aggregates anonymized records for regional disease trend detection and outbreak monitoring',
    ],
  },
];

export const PROJECTS_BY_SLUG = Object.fromEntries(
  PROJECTS.map(project => [project.slug, project]),
) as Record<ProjectSlug, ProjectRecord>;

export function getProjectBySlug(slug: ProjectSlug): ProjectRecord {
  return PROJECTS_BY_SLUG[slug];
}
