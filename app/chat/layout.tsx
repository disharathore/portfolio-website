import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat | Disha Rathore',
  description: 'Chat with Disha Rathore — ask about her projects, internships, tech stack, and more through an AI-powered sticky note chat.',
  openGraph: {
    title: 'Chat | Disha Rathore',
    description: 'Chat with Disha Rathore through an interactive AI-powered sticky note interface.',
  },
};

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return children;
}