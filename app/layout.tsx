import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'FireForms Prototype', description: 'Fire department inventory, repair, and inspection forms prototype' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
