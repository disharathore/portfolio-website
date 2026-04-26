import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Disha Rathore',
  description: 'Explore projects by Disha Rathore — from system-level programming and health tech to sustainability, sports, and wellness interfaces.',
  openGraph: {
    title: 'Projects | Disha Rathore',
    description: 'Explore projects by Disha Rathore — spanning systems programming, health technology, sustainable e-commerce, and UX-driven wellness apps.',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}