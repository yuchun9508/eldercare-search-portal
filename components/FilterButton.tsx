'use client';
import { useState } from 'react';
import FilterForm from './FilterForm';
import FilterIcon from './icons/FilterIcon';
import FullRoundedButton from './ui/FullRoundedButton';

export default function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FullRoundedButton
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 border border-teal-200/20 inline-flex items-center gap-2"
      >
        <FilterIcon className="w-4 h-4" />
        <span>篩選器</span>
      </FullRoundedButton>

      {isOpen && (
        <div className="fixed inset-0 p-8 bg-neutral-100 z-10 overflow-auto">
          <FilterForm />
        </div>
      )}
    </>
  );
}
