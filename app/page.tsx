import React from 'react';
import SearchBar from '../components/SearchBar';
import AssuredWorkloadIcon from '../components/icons/AssuredWorkloadIcon';
import UpdateIcon from '../components/icons/UpdateIcon';
import StarIcon from '../components/icons/StarIcon';
import CategoryCard from '../components/CategoryCard';
import ShortArrowIcon from '../components/icons/ShortArrowIcon';
import NursingIcon from '../components/icons/NursingIcon';
import AssistIcon from '../components/icons/AssistIcon';
import MemoryIcon from '../components/icons/MemoryIcon';
import FeatureCard from '../components/FeatureCard';
import Container from '../components/ui/Container';
import SVGIcon from '../components/ui/SVGIcon';

export default function HomePage() {
  return (
    <div>
      <section
        className={`h-[110vh] bg-[url(/google_stitch_generated_image_01.png)] bg-cover bg-top-center`}
      >
        <Container className="h-full flex items-center">
          <div className="w-2xl">
            <h1 className="text-4xl sm:text-5xl text-primary font-extrabold mb-8">
              為您所愛的人找到
              <span className="text-secondary">最合適的照護</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 mb-12">
              在這裡搜尋和發現本地的照護機構、服務和支援，讓您無後顧之憂。
            </p>
            <SearchBar />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-secondary font-medium mb-2">量身打造的選項</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
                熱門照護類別
              </h2>
            </div>

            <button className=" text-secondary font-semibold inline-flex items-center gap-1">
              <span>查看所有服務</span>
              <SVGIcon icon={ShortArrowIcon} />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              icon={NursingIcon}
              title="安養機構"
              description="提供住宿、膳食、休閒活動、生活諮詢。僅基本保健，無醫療行為。適合生活能自理、無重大疾病的長輩。"
            />
            <CategoryCard
              icon={AssistIcon}
              title="養護機構"
              description="提供日常生活照顧、基本護理、復健。適合需要他人協助日常生活但不涉及複雜護理的長輩。"
            />
            <CategoryCard
              icon={MemoryIcon}
              title="長期照顧中心"
              description="提供護理人員24小時照護、醫師巡診、管路照護、專業傷口換藥。適合罹患長期慢性病、失能程度較重、有頻繁護理需求、需鼻胃管、導尿管、氣切管的長輩。"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 bg-secondary/5 mb-20">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary text-center">
            值得信賴的資訊來源
          </h2>
          <p className="text-center mt-4 text-neutral-700 max-w-3xl mx-auto">
            本站的照護機構資訊來自政府開放資料平台，經過政府機構稽核與審查，提供您與家人可靠安心的選擇。
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={AssuredWorkloadIcon}
              title="政府資料驗證"
              description="所有照護機構資訊皆來自臺北市政府社會局於政府開放資料平台公開的資料集。"
            />
            <FeatureCard
              icon={UpdateIcon}
              title="定期更新資料"
              description="與政府開放資料平台的資料集同步，確保資訊即時且準確。"
            />
            <FeatureCard
              icon={StarIcon}
              title="照護機構評鑑"
              description="整合政府機構年度評鑑成績，經政府檢驗公開透明的機構評級。"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
