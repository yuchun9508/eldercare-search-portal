'use client';
import { useEffect, useState } from 'react';
import Dropdown from './ui/Dropdown';
import {
  CATEGORIES,
  DISTRICTS,
  FACILITY_SIZES,
  OWNERSHIP_TYPES,
  VERIFIED_GRADES,
} from '../data/options';
import Checkbox from './ui/Checkbox';

export type Filters = {
  district: string;
  category: string;
  ownershipType: string[];
  facilitySize: string[];
  verifiedGrade: string[];
};

export const defaultFilters: Filters = {
  district: 'all',
  category: 'all',
  ownershipType: [],
  facilitySize: [],
  verifiedGrade: [],
};

type FilterFormProps = {
  initialFilters?: Filters;
  onApply: (filters: Filters) => void;
};

export default function FilterForm({
  initialFilters = defaultFilters,
  onApply,
}: FilterFormProps) {
  // TODO: find possible cleaner solution for filters state management.
  const [localFilters, setLocalFilters] = useState(initialFilters);

  useEffect(() => {
    setLocalFilters(initialFilters);
  }, [initialFilters]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onApply(localFilters);
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <Dropdown
        id="district"
        label="區域"
        value={localFilters.district}
        onChange={(e) =>
          setLocalFilters((prevState) => ({
            ...prevState,
            district: e.target.value,
          }))
        }
        options={DISTRICTS}
      />

      <Dropdown
        id="category"
        label="照護類型"
        value={localFilters.category}
        onChange={(e) =>
          setLocalFilters((prevState) => ({
            ...prevState,
            category: e.target.value,
          }))
        }
        options={CATEGORIES}
      />

      <Checkbox
        groupId="ownershipType"
        label="機構屬性"
        options={OWNERSHIP_TYPES}
        values={localFilters.ownershipType}
        onChange={(selectedValues) =>
          setLocalFilters((prevState) => ({
            ...prevState,
            ownershipType: selectedValues,
          }))
        }
      />

      <Checkbox
        groupId="facilitySize"
        label="機構規模"
        options={FACILITY_SIZES}
        values={localFilters.facilitySize}
        onChange={(selectedValues) =>
          setLocalFilters((prevState) => ({
            ...prevState,
            facilitySize: selectedValues,
          }))
        }
      />

      <Checkbox
        groupId="verifiedGrade"
        label="評鑑等級"
        options={VERIFIED_GRADES}
        values={localFilters.verifiedGrade}
        onChange={(selectedValues) =>
          setLocalFilters((prevState) => ({
            ...prevState,
            verifiedGrade: selectedValues,
          }))
        }
      />

      <button className="mt-4 w-full px-4 py-2 bg-secondary text-white font-semibold rounded-md">
        套用篩選條件
      </button>
    </form>
  );
}
