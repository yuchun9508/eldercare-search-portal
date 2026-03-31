import BedIcon from './icons/BedIcon';
import BuildingIcon from './icons/BuildingIcon';
import LocationIcon from './icons/LocationIcon';
import PhoneIcon from './icons/PhoneIcon';
import VerifiedIcon from './icons/VerifiedIcon';

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold text-neutral-700 mb-2">
      {children}
    </div>
  );
}

function IconText({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-tertiary" />
      <span className="text-primary">{text}</span>
    </div>
  );
}

type FacilityCardProps = {
  name: string;
  address: string;
  tel: string;
  googleMapsUrl: string;
  serviceTypes: string[];
  ownershipType: string;
  facilitySize: string;
  verifiedGrade: string | null;
  verifiedYear: string | null;
};

export default function FacilityCard({
  name,
  address,
  tel,
  googleMapsUrl,
  serviceTypes,
  ownershipType,
  facilitySize,
  verifiedGrade,
  verifiedYear,
}: FacilityCardProps) {
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between gap-4 pb-4">
        <div>
          <div className="text-primary text-2xl font-medium mb-1">{name}</div>
          <div className="lg:hidden text-accent font-semibold mb-1">
            <VerifiedIcon className="inline-block w-4 h-4 mr-1 align-middle" />
            <span className="align-middle">
              {verifiedYear}年度評鑑{verifiedGrade}
            </span>
          </div>
          <div className="text-neutral-700">
            <LocationIcon className="inline w-4 h-4 mr-1 align-middle" />
            <span className="align-middle">{address}</span>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-end text-nowrap">
          <div className="text-accent font-semibold mb-1 bg-accent/10 rounded-full px-4 py-1 inline-block">
            <VerifiedIcon className="inline-block w-4 h-4 mr-1 align-middle" />
            <span className="align-middle">{verifiedGrade}機構</span>
          </div>
          <div className="text-xs text-neutral-700">
            獲得評鑑年度為{verifiedYear}年
          </div>
        </div>
      </div>

      <div className="border-y border-neutral-200 py-4 flex flex-col lg:flex-row gap-4">
        <div className="lg:flex-1/3">
          <SubTitle>服務對象</SubTitle>
          <ul className="inline-flex gap-2 items-center flex-wrap">
            {serviceTypes.map((type) => (
              <li
                key={type}
                className="px-4 py-1 bg-tertiary/10 text-tertiary text-sm text-nowrap font-semibold rounded-md"
              >
                {type}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:flex-1/3">
          <SubTitle>機構屬性與規模</SubTitle>
          <div className="flex gap-4 lg:block">
            <div className="flex-1/2">
              <IconText icon={BuildingIcon} text={ownershipType} />
            </div>
            <div className="flex-1/2">
              <IconText icon={BedIcon} text={`${facilitySize} 床`} />
            </div>
          </div>
        </div>

        <div className="lg:flex-1/3">
          <SubTitle>聯絡資訊</SubTitle>
          <IconText icon={PhoneIcon} text={tel} />
        </div>
      </div>

      <div className="flex align-items-center gap-4 pt-6">
        <a
          href={`tel:${tel}`}
          className="flex-1/2 lg:flex-none px-9 py-3 bg-tertiary text-white font-semibold text-center rounded-full"
        >
          立即洽詢
        </a>
        <a
          href={googleMapsUrl}
          className="flex-1/2  lg:flex-none px-9 py-3 bg-sky-200 text-tertiary font-semibold text-center rounded-full"
        >
          在地圖上查看
        </a>
      </div>
    </div>
  );
}
