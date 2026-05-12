import type { Metadata, Viewport } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'AppleFixit - Premium Mobile Repair & Accessories in Gurugram',
  description: 'Expert mobile phone repair service for all brands. Screen replacement, battery service, water damage repair & more. Transparent pricing, same-day repairs.',
  keywords: 'mobile repair, phone repair, screen replacement, battery service, Gurugram, Apple, iPhone, Samsung',
  authors: [{ name: 'AppleFixit' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://applefixit.in',
    title: 'AppleFixit - Premium Mobile Repair & Accessories',
    description: 'Expert mobile phone repair service in Gurugram with transparent pricing and same-day repairs.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='80' font-size='80' fill='%23ef4444'>AF</text></svg>" />
      </head>
      <body style={{ backgroundColor: '#0a0a0a', color: '#ffffff', margin: 0, padding: 0 }} className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
