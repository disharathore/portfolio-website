export const PROJECT_ACTIONS = [
  {
    slug: 'servenow',
    label: 'Show me ServeNow',
    verbs: ['show', 'open', 'view', 'tell'],
    keywords: ['servenow', 'hyperlocal', 'marketplace', 'razorpay', 'service\\s*booking', 'plumber'],
    response: 'Opening ServeNow right here ~',
  },
  {
    slug: 'foodbridge',
    label: 'Show me FoodBridge',
    verbs: ['show', 'open', 'view', 'tell'],
    keywords: ['foodbridge', 'food\\s*waste', 'zomato', 'food\\s*rescue', 'ngo', 'surplus'],
    response: 'Opening FoodBridge right here ~',
  },
  {
    slug: 'campuslens',
    label: 'Show me CampusLens',
    verbs: ['show', 'open', 'view', 'tell'],
    keywords: ['campuslens', 'meeting\\s*ai', 'transcription', 'action\\s*items', 'club\\s*meeting'],
    response: 'Opening CampusLens right here ~',
  },
  {
    slug: 'loanwizard',
    label: 'Show me LoanWizard',
    verbs: ['show', 'open', 'view', 'tell'],
    keywords: ['loanwizard', 'loan\\s*wizard', 'video\\s*call\\s*loan', 'tenzorx', 'hackathon', 'poonawalla'],
    response: 'Opening LoanWizard right here ~',
  },
  {
    slug: 'codebuddy',
    label: 'Show me CodeBuddy',
    verbs: ['show', 'open', 'view', 'tell'],
    keywords: ['codebuddy', 'code\\s*buddy', 'pair\\s*programmer', 'monaco', 'hint\\s*ladder', 'microsoft'],
    response: 'Opening CodeBuddy right here ~',
  },
  {
    slug: 'swasthya-saathi',
    label: 'Show me Swasthya Saathi',
    verbs: ['show', 'open', 'view', 'tell'],
    keywords: ['swasthya', 'health\\s*ecosystem', 'migrant\\s*worker', 'aadhaar', 'health\\s*record'],
    response: 'Opening Swasthya Saathi right here ~',
  },
] as const;

export type ProjectSlug = (typeof PROJECT_ACTIONS)[number]['slug'];

const PROJECT_SLUG_SET = new Set<string>(PROJECT_ACTIONS.map(project => project.slug));

export function isProjectSlug(value: string): value is ProjectSlug {
  return PROJECT_SLUG_SET.has(value);
}
