import React from 'react';
import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Eldercare Search Portal',
  description: 'Search portal for eldercare resources',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-noto-sans-tc">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
