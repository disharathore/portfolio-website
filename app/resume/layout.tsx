import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Disha Rathore',
  description: 'View the resume of Disha Rathore — CS student with internships at DRDO, IGDTUW, and IIT Roorkee. Strong in DSA, full-stack, and ML.',
  openGraph: {
    title: 'Resume | Disha Rathore',
    description: 'Resume of Disha Rathore — pre-final year CS student and LeetCode Knight.',
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}