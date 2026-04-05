'use client';
import { useState } from 'react';
import FilterForm from './FilterForm';
import FilterIcon from './icons/FilterIcon';

export default function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-9 py-3 bg-secondary text-white border border-teal-200/20 font-semibold rounded-full inline-flex items-center gap-2"
      >
        <FilterIcon className="w-4 h-4" />
        <span>篩選器</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 p-8 bg-neutral-100 z-10 overflow-auto">
          <FilterForm />
        </div>
      )}
    </>
  );
}
