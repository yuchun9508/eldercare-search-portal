'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { CATEGORIES, DISTRICTS, Option } from '../data/options';

export type Filters = {
  district: Option['value'];
  category: Option['value'];
  ownershipType: Option['value'][];
  facilitySize: Option['value'][];
  verifiedGrade: Option['value'][];
};

type FilterContextValue = {
  filters: Filters;
  setFilters: (next: Partial<Filters>) => void;
  resetFilters: () => void;
};

export const defaultFilters: Filters = {
  district: DISTRICTS[0].value,
  category: CATEGORIES[0].value,
  ownershipType: [],
  facilitySize: [],
  verifiedGrade: [],
};

const FilterContext = createContext<FilterContextValue | undefined>(undefined);

export function FilterProvider({
  children,
  initial,
}: {
  children: ReactNode;
  initial?: Partial<Filters>;
}) {
  const [filters, setFiltersState] = useState<Filters>({
    ...defaultFilters,
    ...(initial || {}),
  });

  function setFilters(next: Partial<Filters>) {
    setFiltersState((prev) => ({ ...prev, ...next }));
  }

  function resetFilters() {
    setFiltersState(defaultFilters);
  }

  return (
    <FilterContext.Provider value={{ filters, setFilters, resetFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error('useFilters must be used within FilterProvider');
  return ctx;
}
