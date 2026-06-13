import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Victory Project | Disha Rathore',
  description: 'Victory — a hardware project by Disha Rathore. A smart assistive device built to solve real-world accessibility challenges.',
  openGraph: {
    title: 'Victory Project | Disha Rathore',
    description: 'My first hardware project — Victory. A smart assistive device built from scratch.',
  },
};

export default function VictoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
