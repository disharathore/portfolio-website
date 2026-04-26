export const PERSONAL_LINKS = {
  github: 'https://github.com/disharathore',
  linkedin: 'https://www.linkedin.com/in/disha-rathore-17bb36289/',
  leetcode: 'https://leetcode.com/u/rathoredisha/',
  email: 'mailto:disharathore555@gmail.com',
  resume: '/resources/resume.pdf',
  phone: 'tel:+919289328192',
} as const;

export const PROJECT_LINKS = {
  servenow: 'https://github.com/disharathore/servenow-hyperlocal-marketplace',
  foodbridge: 'https://github.com/disharathore/foodbridge',
  campuslens: 'https://github.com/disharathore/campuslens',
  loanwizard: 'https://github.com/disharathore/Loanwizard',
  codebuddy: 'https://github.com/disharathore/codebuddy',
  swasthyaSaathi: 'https://github.com/disharathore/Swasthya-Saathi',
} as const;

export const SITE = {
  url: 'https://portfolio-website-hs3m.vercel.app',
  name: 'Disha Rathore',
  title: "Disha's Sketchbook",
} as const;

export const OPEN_LINK_KEYS: Record<string, string> = {
  github: PERSONAL_LINKS.github,
  linkedin: PERSONAL_LINKS.linkedin,
  leetcode: PERSONAL_LINKS.leetcode,
  email: PERSONAL_LINKS.email,
  phone: PERSONAL_LINKS.phone,
  resume: PERSONAL_LINKS.resume,
  'project-servenow': PROJECT_LINKS.servenow,
  'project-foodbridge': PROJECT_LINKS.foodbridge,
  'project-campuslens': PROJECT_LINKS.campuslens,
  'project-loanwizard': PROJECT_LINKS.loanwizard,
  'project-codebuddy': PROJECT_LINKS.codebuddy,
  'project-swasthya-saathi': PROJECT_LINKS.swasthyaSaathi,
} as const;
