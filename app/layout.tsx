import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NP — Nacional Pleyer',
  description: 'Portal institucional de transparência, planejamento e gestão pública.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
