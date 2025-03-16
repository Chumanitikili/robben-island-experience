import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Robben Island Experience',
  description: 'Explore the historical significance of Robben Island through an immersive digital experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-off-white antialiased">
        {children}
      </body>
    </html>
  );
}