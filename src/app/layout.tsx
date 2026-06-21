import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Mission Ekalavya - UPSC Foundation Program for Classes 6-12',
  description:
    "India's First Structured UPSC Foundation Program for Students from Class 6 to Class 12, by CSB IAS Academy.",
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white">
        {/* Navbar and Footer live here ONCE.
            Every page (children) is rendered between them automatically.
            Edit Navbar.tsx or Footer.tsx and every page updates - no per-page editing needed. */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
