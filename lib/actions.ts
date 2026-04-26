// lib/actions.ts — Chat action metadata and follow-up suggestions
import { PERSONAL_LINKS, PROJECT_LINKS } from '@/lib/links';
import { PROJECT_ACTIONS, type ProjectSlug } from '@/lib/projectCatalog';

export interface ActionExecution {
  navigateTo?: string;
  themeAction?: 'dark' | 'light' | 'toggle';
  openUrls?: string[];
  feedbackAction?: boolean;
  projectSlug?: ProjectSlug;
}

export interface ActionDef {
  label: string;
  navigateTo?: string;
  themeAction?: 'dark' | 'light' | 'toggle';
  openUrls?: string[];
  feedbackAction?: boolean;
  projectSlug?: ProjectSlug;
}

export const VALID_NAVIGATION_PATHS = ['/', '/about', '/projects', '/resume', '/chat'] as const;
export const VALID_THEME_ACTIONS = ['dark', 'light', 'toggle'] as const;

type NavigationPath = (typeof VALID_NAVIGATION_PATHS)[number];
type ThemeAction = (typeof VALID_THEME_ACTIONS)[number];

const NAVIGATION_PATH_SET = new Set<string>(VALID_NAVIGATION_PATHS);
const THEME_ACTION_SET = new Set<string>(VALID_THEME_ACTIONS);

const NAVIGATION_REPLIES: Record<NavigationPath, string> = {
  '/': 'Taking you back to the home page ~',
  '/about': 'Opening the about page ~',
  '/projects': 'Taking you to the projects page ~',
  '/resume': 'Opening the resume page ~',
  '/chat': 'Bringing you back to the chat page ~',
};

const THEME_REPLIES: Record<ThemeAction, string> = {
  dark: 'Switching to dark mode ~',
  light: 'Switching to light mode ~',
  toggle: 'Toggling the theme ~',
};

const OPEN_LINK_TOOL_OPTIONS = [
  { key: 'github', url: PERSONAL_LINKS.github, fallbackReply: 'Opening GitHub for you ~' },
  { key: 'linkedin', url: PERSONAL_LINKS.linkedin, fallbackReply: 'Opening LinkedIn for you ~' },
  { key: 'leetcode', url: PERSONAL_LINKS.leetcode, fallbackReply: 'Opening LeetCode for you ~' },
  { key: 'victoryproject', url: PERSONAL_LINKS.victoryProject, fallbackReply: 'Opening the Victory Project for you ~' },
  { key: 'email', url: PERSONAL_LINKS.email, fallbackReply: 'Opening email ~' },
  { key: 'phone', url: PERSONAL_LINKS.phone, fallbackReply: 'Opening the phone shortcut ~' },
  { key: 'resume', url: PERSONAL_LINKS.resume, fallbackReply: 'Opening the resume PDF ~' },
  { key: 'project-file-system', url: PROJECT_LINKS.fileSystem, fallbackReply: 'Opening the File System repo ~' },
  { key: 'project-swasthya-saathi', url: PROJECT_LINKS.swasthyaSaathi, fallbackReply: 'Opening the Swasthya Saathi repo ~' },
  { key: 'project-greencart', url: PROJECT_LINKS.greencart, fallbackReply: 'Opening the GreenCart repo ~' },
  { key: 'project-yuvakhel', url: PROJECT_LINKS.yuvakhel, fallbackReply: 'Opening the YuvaKhel repo ~' },
  { key: 'project-my-yoga-canvas', url: PROJECT_LINKS.myYogaCanvas, fallbackReply: 'Opening the My Yoga Canvas repo ~' },
] as const;

const OPEN_LINK_OPTIONS_BY_URL = new Map<string, (typeof OPEN_LINK_TOOL_OPTIONS)[number]>(
  OPEN_LINK_TOOL_OPTIONS.map(option => [option.url, option])
);

const PROJECT_MODAL_ACTIONS: ActionDef[] = PROJECT_ACTIONS.map(project => ({
  label: project.label,
  projectSlug: project.slug,
}));

export const ACTION_REGISTRY: ActionDef[] = [
  ...PROJECT_MODAL_ACTIONS,
  {
    label: 'Show me your portfolio',
    navigateTo: '/projects',
  },
  {
    label: 'Switch to dark mode',
    themeAction: 'dark',
  },
  {
    label: 'Switch to light mode',
    themeAction: 'light',
  },
  {
    label: 'Toggle the theme',
    themeAction: 'toggle',
  },
  {
    label: 'Take me to the projects page',
    navigateTo: '/projects',
  },
  {
    label: 'Open the File System repo',
    openUrls: [PROJECT_LINKS.fileSystem],
  },
  {
    label: 'Open your GitHub profile',
    openUrls: [PERSONAL_LINKS.github],
  },
  {
    label: 'Show me your resume PDF',
    openUrls: [PERSONAL_LINKS.resume],
  },
  {
    label: 'Open your LinkedIn',
    openUrls: [PERSONAL_LINKS.linkedin],
  },
  {
    label: 'Show your LeetCode profile',
    openUrls: [PERSONAL_LINKS.leetcode],
  },
  {
    label: 'Report a bug',
    feedbackAction: true,
  },
];

export function hasActionExecution(action: ActionExecution | null | undefined): action is ActionExecution {
  return !!(
    action &&
    (action.navigateTo ||
      action.themeAction ||
      action.feedbackAction ||
      action.projectSlug ||
      (action.openUrls && action.openUrls.length > 0))
  );
}

export function getActionFallbackReply(action: ActionExecution | null | undefined): string | null {
  if (!action) return null;

  if (action.projectSlug) {
    const project = PROJECT_ACTIONS.find(entry => entry.slug === action.projectSlug);
    return project?.response ?? 'Opening that project right here ~';
  }

  if (action.navigateTo && NAVIGATION_PATH_SET.has(action.navigateTo)) {
    return NAVIGATION_REPLIES[action.navigateTo as NavigationPath];
  }

  if (action.themeAction && THEME_ACTION_SET.has(action.themeAction)) {
    return THEME_REPLIES[action.themeAction as ThemeAction];
  }

  if (action.feedbackAction) {
    return 'Opening the feedback note ~';
  }

  if (action.openUrls?.length) {
    const option = OPEN_LINK_OPTIONS_BY_URL.get(action.openUrls[0]);
    return option?.fallbackReply ?? 'Opening that link for you ~';
  }

  return null;
}

export function getFollowupActions(): string[] {
  return ACTION_REGISTRY
    .filter(a => !a.themeAction)
    .map(a => a.label);
}

/** Conversational followup suggestions */
export const FOLLOWUP_CONVERSATIONAL = [
  "What projects have you worked on?",
  "Tell me about your DRDO internship",
  "How did you build the File System?",
  "What's your favorite language?",
  "How did you get into competitive programming?",
  "What do you enjoy most about your work?",
  "Tell me about your LeetCode journey",
  "What's your tech stack?",
  "Tell me about Swasthya Saathi",
  "What are you currently learning?",
] as const;

/** Initial suggestions shown before any conversation */
export const INITIAL_SUGGESTIONS = [
  "Where have you interned?",
  "What's your tech stack?",
  "Tell me about your projects",
  "Report a bug",
] as const;