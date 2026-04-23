'use client';
import FilterIcon from '../../components/icons/FilterIcon';
import FacilityCard from '../../components/FacilityCard';
import FilterForm from '../../components/FilterForm';
import FilterButton from '../../components/FilterButton';
import Container from '../../components/ui/Container';
import SVGIcon from '../../components/ui/SVGIcon';
import useFacilities from '../../hooks/useFacilities';
import { useFilters } from '../../context/FilterContext';
import { getLabelForValue } from '../../lib/options-utils';

export default function FacilitiesPage() {
  const { filters } = useFilters();
  const facilities = useFacilities(filters) ?? []; // TODO: handle loading and error states

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
              <FilterForm />
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
            <FilterButton />
          </div>
        </Container>
      </section>
    </div>
  );
}
