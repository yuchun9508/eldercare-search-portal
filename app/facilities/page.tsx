import FilterIcon from '../../components/icons/FilterIcon';
import FacilityCard from '../../components/FacilityCard';
import FilterForm from '../../components/FilterForm';
import FilterButton from '../../components/FilterButton';
import Container from '../../components/ui/Container';

// TODO:
// 2. filter functionality
// 3. fetch data from API
// 4. pagination UI or fetch on scroll.
export default function FacilitiesPage() {
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
              <div className="text-xl font-medium text-primary mb-8">
                <FilterIcon className="inline w-5 h-5 mr-2 align-middle" />
                <span className="align-middle">篩選器</span>
              </div>
              <FilterForm />
            </div>
          </div>

          <div className="md:col-span-2 px-4 sm:px-6">
            <ul>
              <li className="mb-6">
                <FacilityCard
                  name="臺北市至善老人安養護中心"
                  address="臺北市士林區永福里001鄰仰德大道2段2巷50號"
                  tel="(02)28832666"
                  googleMapsUrl="https://goo.gl/maps/xyz"
                  serviceTypes={['安養', '養護', '長照']}
                  ownershipType="公設民營"
                  facilitySize="471"
                  verifiedGrade="優等"
                  verifiedYear="112"
                />
              </li>

              <li className="mb-6">
                <FacilityCard
                  name="臺北市私立璞園老人長期照顧中心(養護型)"
                  address="臺北市士林區富光里010鄰葫蘆街33號4、5、6樓"
                  tel="(02)28163696"
                  googleMapsUrl="https://goo.gl/maps/xyz"
                  serviceTypes={['長照']}
                  ownershipType="私立"
                  facilitySize="46"
                  verifiedGrade="甲等"
                  verifiedYear="111"
                />
              </li>

              <li className="mb-6">
                <FacilityCard
                  name="臺北市私立永青老人長期照顧中心(養護型)"
                  address="臺北市士林區天壽里003鄰中山北路6段427巷8號1-4樓"
                  tel="(02)28761908"
                  googleMapsUrl="https://goo.gl/maps/xyz"
                  serviceTypes={['長照']}
                  ownershipType="私立"
                  facilitySize="31"
                  verifiedGrade="甲等"
                  verifiedYear="111"
                />
              </li>
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
