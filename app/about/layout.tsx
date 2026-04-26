import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Disha Rathore',
  description: 'Learn about Disha Rathore — pre-final year CS student with internships at DRDO, IGDTUW, and IIT Roorkee. LeetCode Knight (Top 5%).',
  openGraph: {
    title: 'About | Disha Rathore',
    description: 'Learn about Disha Rathore — pre-final year CS student skilled in full-stack, systems programming, and ML.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}