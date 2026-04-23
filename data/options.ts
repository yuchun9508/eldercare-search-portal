export type Option = { value: string; label: string };

export const DISTRICTS: Option[] = [
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
];

export const CATEGORIES: Option[] = [
  { value: 'all', label: '全部' },
  { value: 'facilities', label: '安養型' },
  { value: 'services', label: '養護型' },
  { value: 'longterm', label: '長照型' },
];

export const OWNERSHIP_TYPES: Option[] = [
  { value: 'semi-public', label: '公設民營' },
  { value: 'public', label: '公立' },
  { value: 'private', label: '私立' },
];

export const FACILITY_SIZES: Option[] = [
  { value: 'small', label: '小型：49床以下' },
  { value: 'medium', label: '中型：50-149床' },
  { value: 'large', label: '大型：150床以上' },
];

export const VERIFIED_GRADES: Option[] = [
  { value: 'excellent', label: '優等' },
  { value: 'a', label: '甲等' },
  { value: 'b', label: '乙等' },
  { value: 'c', label: '丙等' },
];
