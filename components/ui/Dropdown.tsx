'use client';
import React from 'react';

type Option = { value: string; label: string };

type DropdownProps = {
  id: string;
  label?: string;
  options: Option[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  variant?: 'outlined' | 'accent' | 'plain';
};

const VARIANT_CLASSES: Record<string, string> = {
  outlined: 'border border-neutral-200 bg-white p-2',
  accent: 'bg-accent p-3',
  plain: 'bg-transparent p-2',
};

export default function Dropdown({
  id,
  label,
  options,
  value,
  onChange,
  variant = 'outlined',
}: DropdownProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block font-medium text-neutral-800 mb-2">
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`block w-full rounded-md ${VARIANT_CLASSES[variant]}`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
