import React from 'react';
import SearchBar from '../components/SearchBar';
import HouseIcon from '../components/icons/HouseIcon';
import HealthAndSafetyIcon from '../components/icons/HealthAndSafetyIcon';
import HandshakeIcon from '../components/icons/HandshakeIcon';
import AssuredWorkloadIcon from '../components/icons/AssuredWorkloadIcon';
import UpdateIcon from '../components/icons/UpdateIcon';
import StarIcon from '../components/icons/StarIcon';
import CategoryCard from '../components/CategoryCard';
import FeatureListItem from '../components/FeatureListItem';

export default function HomePage() {
  const bgUrl = '/Gemini_Generated_Image_1z5s8r1z5s8r1z5s.png';

  return (
    <div>
      <section className="relative h-[60vh] w-full bg-sky-50">
        <div
          className="absolute inset-0 bg-cover bg-center mask-l-from-10% mask-l-to-80%"
          style={{ backgroundImage: `url('${bgUrl}')` }}
        />

        <div className="relative h-full container flex items-center">
          <div className="text-primary">
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              尋找銀髮照護資源，輕鬆無憂
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl">
              在這裡搜尋和發現本地的照護機構、服務和支援，讓您無後顧之憂。
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="transform -translate-y-1/2">
          <SearchBar />
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
            熱門搜尋
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <CategoryCard icon={HouseIcon} title="養老院" />
            <CategoryCard icon={HealthAndSafetyIcon} title="養護所" />
            <CategoryCard icon={HandshakeIcon} title="長期照顧中心" />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            值得信任的照護資源
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <FeatureListItem
              icon={AssuredWorkloadIcon}
              title="來自政府開放資料平台"
            />
            <FeatureListItem icon={UpdateIcon} title="定期更新資料" />
            <FeatureListItem icon={StarIcon} title="提供機構年度評鑑成績" />
          </div>
        </div>
      </section>
    </div>
  );
}
