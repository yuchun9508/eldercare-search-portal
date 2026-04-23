'use client';
import { useEffect, useState } from 'react';
import Dropdown from './ui/Dropdown';
import {
  CATEGORIES,
  Option,
  DISTRICTS,
  FACILITY_SIZES,
  OWNERSHIP_TYPES,
  VERIFIED_GRADES,
} from '../data/options';
import { useFilters } from '../context/FilterContext';

// TODO: extract as ui component
type CheckboxProps = {
  groupId: string;
  label: string;
  options: Option[];
  values: Option['value'][];
  onChange: (selectedValues: Option['value'][]) => void;
};

function Checkbox({
  groupId,
  label,
  options,
  values,
  onChange,
}: CheckboxProps) {
  function handleCheckboxChange(optionValue: Option['value']) {
    const next = values.includes(optionValue)
      ? values.filter((v) => v !== optionValue)
      : [...values, optionValue];
    onChange(next);
  }

  return (
    <fieldset>
      <legend className="block font-medium text-neutral-800 mb-4">
        {label}
      </legend>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={`${groupId}-${option.value}`} className="flex items-center">
            <input
              id={`${groupId}-${option.value}`}
              name={groupId}
              type="checkbox"
              value={option.value}
              className="h-4 w-4 accent-secondary"
              onChange={() => handleCheckboxChange(option.value)}
              checked={values.includes(option.value)}
            />
            <label
              htmlFor={`${groupId}-${option.value}`}
              className="ml-2 text-primary"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default function FilterForm() {
  // TODO: find cleaner solution for filters state management.
  // The local state is needed to avoid updating the context (and URL) on every change,
  // but it causes some boilerplate to keep it in sync with the context when the context is updated from other places (e.g. SearchBar).
  const { filters, setFilters } = useFilters();

  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setFilters(localFilters);
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
