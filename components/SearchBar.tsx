'use client';
import React, { useState } from 'react';
import Dropdown from './ui/Dropdown';
import SearchIcon from './icons/SearchIcon';
import FullRoundedButton from './ui/FullRoundedButton';
import SVGIcon from './ui/SVGIcon';

export default function SearchBar() {
  const [category, setCategory] = useState('all');
  const [district, setDistrict] = useState('all');
  const [results, setResults] = useState<string[] | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Prototype behaviour: just fake a result set
    const fake = Array.from({ length: 3 }).map(
      (_, i) => `${category} result ${i + 1} for "${district || 'any'}"`,
    );
    setResults(fake);
    // In a real app, you'd call an API here
    console.log('Search submitted', { category, district });
  }

  return (
    <div className="px-8 py-6 shadow-lg rounded-xl bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 sm:items-end"
      >
        <div className="sm:flex-3/6">
          <Dropdown
            id="category"
            label="照護服務"
            options={[
              { value: 'all', label: '所有類型' },
              { value: 'facilities', label: '安養型' },
              { value: 'services', label: '養護型' },
              { value: 'longterm', label: '長期照護型' },
              { value: 'dementia', label: '失智照顧型' },
            ]}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="accent"
          />
        </div>

        <div className="sm:flex-2/6">
          <Dropdown
            id="district"
            label="地區"
            options={[
              { value: 'all', label: '台北市全部區域' },
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
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            variant="accent"
          />
        </div>

        <div className="sm:flex-1/6">
          <FullRoundedButton
            type="submit"
            className="w-full inline-flex justify-center items-center gap-2"
          >
            <SVGIcon icon={SearchIcon} />
            <span>立即搜尋</span>
          </FullRoundedButton>
        </div>
      </form>

      {results && (
        <div className="mt-4 rounded-md bg-white/80 p-4 shadow-sm">
          <h3 className="text-sm font-semibold">Results</h3>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
            {results.map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
