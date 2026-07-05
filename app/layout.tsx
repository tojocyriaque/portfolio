import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aster / Developer Portfolio',
  description: 'Immersive portfolio for a creative developer and data enthusiast.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
