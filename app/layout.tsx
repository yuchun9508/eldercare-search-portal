import React from 'react';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FilterProvider } from '../context/FilterContext';

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
    <html lang="en" className="font-noto-sans-tc bg-neutral-50">
      <body>
        <Header />
        <FilterProvider>
          <main>{children}</main>
        </FilterProvider>
        <Footer />
      </body>
    </html>
  );
}
