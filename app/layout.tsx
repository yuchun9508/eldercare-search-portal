import React from 'react';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: '銀髮照護資源搜尋',
  description:
    '整合台北市的安養、養護及長照機構資料與政府評鑑資訊，提供使用者便捷的搜尋功能，幫助長輩找到最合適的照護選項。',
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
