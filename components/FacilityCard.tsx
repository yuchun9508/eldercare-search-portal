import BedIcon from './icons/BedIcon';
import BuildingIcon from './icons/BuildingIcon';
import LocationIcon from './icons/LocationIcon';
import PhoneIcon from './icons/PhoneIcon';
import VerifiedIcon from './icons/VerifiedIcon';
import FullRoundedButton from './ui/FullRoundedButton';
import SVGIcon from './ui/SVGIcon';

function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold text-neutral-700 mb-2">
      {children}
    </div>
  );
}

function IconWithText({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <SVGIcon icon={Icon} className="text-tertiary" />
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
  totalBeds: string;
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
  totalBeds,
  verifiedGrade,
  verifiedYear,
}: FacilityCardProps) {
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between gap-4 pb-4">
        <div>
          <div className="text-primary text-2xl font-medium mb-1">{name}</div>
          <div className="lg:hidden text-green-600 font-semibold mb-1 flex items-center gap-1">
            <SVGIcon icon={VerifiedIcon} />
            <span>
              {verifiedYear}年度評鑑{verifiedGrade}
            </span>
          </div>
          <div className="text-neutral-700 flex items-center gap-1">
            <SVGIcon icon={LocationIcon} />
            <span>{address}</span>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-end text-nowrap">
          <div className="text-green-600 font-semibold mb-1 bg-green-600/10 rounded-full px-4 py-1 inline-flex items-center gap-1">
            <SVGIcon icon={VerifiedIcon} />
            <span>{verifiedGrade}機構</span>
          </div>
          <div className="text-xs text-neutral-700">
            獲得評鑑年度為{verifiedYear}年
          </div>
        </div>
      </div>

      <div className="border-y border-neutral-200 py-4 flex flex-col lg:flex-row gap-4">
        <div className="lg:flex-1/3">
          <Subtitle>服務對象</Subtitle>
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
          <Subtitle>機構屬性與規模</Subtitle>
          <div className="flex gap-4 lg:block">
            <div className="flex-1/2">
              <IconWithText icon={BuildingIcon} text={ownershipType} />
            </div>
            <div className="flex-1/2">
              <IconWithText icon={BedIcon} text={`${totalBeds} 床`} />
            </div>
          </div>
        </div>

        <div className="lg:flex-1/3">
          <Subtitle>聯絡資訊</Subtitle>
          <IconWithText icon={PhoneIcon} text={tel} />
        </div>
      </div>

      <div className="flex align-items-center gap-4 pt-6">
        <a href={`tel:${tel}`} className="flex-1/2 lg:flex-none">
          <FullRoundedButton variant="tertiary" className="w-full">
            立即洽詢
          </FullRoundedButton>
        </a>
        <a href={googleMapsUrl} className="flex-1/2 lg:flex-none">
          <FullRoundedButton variant="accent" className="w-full">
            在地圖上查看
          </FullRoundedButton>
        </a>
      </div>
    </div>
  );
}
