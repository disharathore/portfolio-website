import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing | Disha Rathore',
  description: 'Research notes, opinions, and writing on technology, AI, and disaster resilience by Disha Rathore.',
  openGraph: {
    title: 'Writing | Disha Rathore',
    description: 'Research notes, opinions, and writing on technology, AI, and disaster resilience by Disha Rathore.',
  },
};

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
