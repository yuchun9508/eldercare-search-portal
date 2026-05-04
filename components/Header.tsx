import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Container from './ui/Container';

export default function Header() {
  return (
    <header className="bg-neutral-50 border-b border-neutral-100">
      <Container>
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
        </div>
      </Container>
    </header>
  );
}
