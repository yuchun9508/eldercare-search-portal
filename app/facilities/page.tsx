'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import FilterIcon from '../../components/icons/FilterIcon';
import FacilityCard from '../../components/FacilityCard';
import FilterForm from '../../components/FilterForm';
import Container from '../../components/ui/Container';
import SVGIcon from '../../components/ui/SVGIcon';
import useFacilities from '../../hooks/useFacilities';
import { Filters, defaultFilters } from '../../components/FilterForm';
import { getLabelForValue } from '../../lib/options-utils';
import { useReducer, useState } from 'react';
import FullRoundedButton from '../../components/ui/FullRoundedButton';

function reducer(
  state: Filters,
  action: { type: 'SET'; payload: Partial<Filters> },
) {
  switch (action.type) {
    case 'SET':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default function FacilitiesPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const initial: Filters = {
    ...defaultFilters,
    district: searchParams.get('district') ?? defaultFilters.district,
    category: searchParams.get('category') ?? defaultFilters.category,
  };

  const [filters, dispatch] = useReducer(reducer, initial);

  const facilities = useFacilities(filters) ?? []; // TODO: handle loading, no result and error states

  function handleApply(updated: Filters) {
    dispatch({ type: 'SET', payload: updated });
    setIsFilterOpen(false);

    const params = new URLSearchParams();
    params.set('district', updated.district);
    params.set('category', updated.category);

    router.replace(`/facilities?${params.toString()}`);
  }

  return (
    <div>
      <section>
        <Container className="py-10">
          <h1 className="text-3xl font-bold text-primary mb-4">
            {facilities.length}間符合條件的照護機構
          </h1>
          <p className="text-neutral-700 font-semibold">
            搜尋位於
            <span className="text-secondary">
              {getLabelForValue(filters.district)}
            </span>
            的
            <span className="text-secondary">
              {getLabelForValue(filters.category)}
            </span>
            機構
          </p>
        </Container>
      </section>

      <section>
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="hidden md:block md:col-span-1">
            <div className="p-8 bg-neutral-100 rounded-xl">
              <div className="text-xl font-medium text-primary mb-8 flex items-center gap-2">
                <SVGIcon icon={FilterIcon} size="sm" />
                <span>篩選器</span>
              </div>
              <FilterForm initialFilters={filters} onApply={handleApply} />
            </div>
          </div>

          <div className="md:col-span-2 px-4 sm:px-6">
            <ul>
              {facilities.map((f) => (
                <li key={f.id} className="mb-6">
                  <FacilityCard
                    name={f.name}
                    address={f.address}
                    tel={f.tel}
                    googleMapsUrl={f.googleMapsUrl}
                    serviceTypes={f.serviceTypes}
                    ownershipType={f.ownershipType}
                    totalBeds={f.totalBeds}
                    verifiedGrade={f.verifiedGrade}
                    verifiedYear={f.verifiedYear}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden">
            <FullRoundedButton
              onClick={() => setIsFilterOpen(true)}
              className="fixed bottom-4 left-1/2 transform -translate-x-1/2 border border-teal-200/20 inline-flex items-center gap-2"
            >
              <SVGIcon icon={FilterIcon} />
              <span>篩選器</span>
            </FullRoundedButton>

            {isFilterOpen && (
              <div className="fixed inset-0 p-8 bg-neutral-100 z-10 overflow-auto">
                <FilterForm initialFilters={filters} onApply={handleApply} />
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
