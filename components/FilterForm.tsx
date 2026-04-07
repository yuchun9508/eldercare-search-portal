import Dropdown from './ui/Dropdown';

function Checkbox({
  groupId,
  label,
  options,
}: {
  groupId: string;
  label: string;
  options: { id: string; value: string; label: string }[];
}) {
  return (
    <fieldset>
      <legend className="block font-medium text-neutral-800 mb-4">
        {label}
      </legend>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              id={option.id}
              name={groupId}
              type="checkbox"
              value={option.value}
              className="h-4 w-4 accent-secondary"
            />
            <label htmlFor={option.id} className="ml-2 text-primary">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default function FilterForm() {
  return (
    <form className="space-y-8">
      <Dropdown
        id="district"
        label="區域"
        options={[
          { value: 'all', label: '全部' },
          { value: 'Zhongzheng', label: '中正區' },
          { value: 'Wanhua', label: '萬華區' },
          { value: 'Datong', label: '大同區' },
          { value: 'Zhongshan', label: '中山區' },
          { value: 'Songshan', label: '松山區' },
          { value: 'Daan', label: '大安區' },
          { value: 'Xinyi', label: '信義區' },
          { value: 'Neihu', label: '內湖區' },
          { value: 'Nangang', label: '南港區' },
          { value: 'Shilin', label: '士林區' },
          { value: 'Beitou', label: '北投區' },
          { value: 'Wenshan', label: '文山區' },
        ]}
      />

      <Dropdown
        id="category"
        label="照護類型"
        options={[
          { value: 'all', label: '全部' },
          { value: 'facilities', label: '安養型' },
          { value: 'services', label: '養護型' },
          { value: 'longterm', label: '長期照護型' },
        ]}
      />

      <Checkbox
        groupId="ownershipType"
        label="機構屬性"
        options={[
          {
            id: 'ownershipSemiPublic',
            value: 'semi-public',
            label: '公設民營',
          },
          { id: 'ownershipPublic', value: 'public', label: '公立' },
          { id: 'ownershipPrivate', value: 'private', label: '私立' },
        ]}
      />

      <Checkbox
        groupId="facilitySize"
        label="機構規模"
        options={[
          { id: 'sizeSmall', value: 'small', label: '小型：49床以下' },
          { id: 'sizeMedium', value: 'medium', label: '中型：50-149床' },
          { id: 'sizeLarge', value: 'large', label: '大型：150床以上' },
        ]}
      />

      <Checkbox
        groupId="verifiedGrade"
        label="評鑑等級"
        options={[
          { id: 'gradeExcellent', value: 'excellent', label: '優等' },
          { id: 'gradeA', value: 'a', label: '甲等' },
          { id: 'gradeB', value: 'b', label: '乙等' },
          { id: 'gradeC', value: 'c', label: '丙等' },
        ]}
      />

      <button className="mt-4 w-full px-4 py-2 bg-secondary text-white font-semibold rounded-md">
        套用篩選條件
      </button>
    </form>
  );
}
