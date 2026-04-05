import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-neutral-50 border-b border-neutral-100">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Eldercare home"
          >
            <Logo className="w-8 h-8 text-secondary" />
            <span className="text-lg font-bold text-secondary">
              銀髮照護資源搜尋
            </span>
          </Link>
          <nav className="space-x-4 text-sm text-primary">
            <Link href="/search">搜尋</Link>
            <Link href="/about">關於</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
