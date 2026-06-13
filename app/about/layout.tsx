import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Disha Rathore',
  description: 'Learn about Disha Rathore — final year CS student, 6 live projects, internships at DRDO, IGDTUW, and IIT Roorkee. LeetCode Knight (Top 5%).',
  openGraph: {
    title: 'About | Disha Rathore',
    description: 'Learn about Disha Rathore — final year CS student building production full-stack systems, AI projects, and hyperlocal platforms.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}