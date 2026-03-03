import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* TODO: add logo */}
          <Link href="/" className="text-lg font-bold text-white">
            銀髮照護資源搜尋
          </Link>
          <nav className="space-x-4 text-sm text-white">
            <Link href="/search">搜尋</Link>
            <Link href="/about">關於</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
