import React from 'react';

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
    <html lang="en">
      <body>
        <main style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
