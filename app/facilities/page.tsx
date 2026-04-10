'use client';
import FilterIcon from '../../components/icons/FilterIcon';
import FacilityCard from '../../components/FacilityCard';
import FilterForm from '../../components/FilterForm';
import FilterButton from '../../components/FilterButton';
import Container from '../../components/ui/Container';
import SVGIcon from '../../components/ui/SVGIcon';
import useFacilities from '../../hooks/useFacilities';

export default function FacilitiesPage() {
  const facilities = useFacilities() ?? []; // TODO: 1.pass query from filter form 2.handle loading and error states

  return (
    <div>
      <section>
        <Container className="py-10">
          <h1 className="text-3xl font-bold text-primary mb-4">
            12間符合條件的照護機構
          </h1>
          <p className="text-neutral-700 font-semibold">
            搜尋條件為
            <span className="text-secondary">
              松山區, 公設民營, 小型, 安養型, 優等
            </span>
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
                    facilitySize={f.facilitySize}
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
