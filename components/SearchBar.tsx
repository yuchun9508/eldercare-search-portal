'use client';
import React, { useState } from 'react';

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
    <div className="inline-block px-5 py-10 shadow-lg rounded-md bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-2 items-center"
      >
        <span className="text-nowrap">我在尋找位於</span>

        <label htmlFor="district" className="sr-only">
          District
        </label>
        <select
          id="district"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="all">台北市全部區域</option>
          <option value="Zhongzheng">中正區</option>
          <option value="Wanhua">萬華區</option>
          <option value="Datong">大同區</option>
          <option value="Zhongshan">中山區</option>
          <option value="Songshan">松山區</option>
          <option value="Daan">大安區</option>
          <option value="Xinyi">信義區</option>
          <option value="Neihu">內湖區</option>
          <option value="Nangang">南港區</option>
          <option value="Shilin">士林區</option>
          <option value="Beitou">北投區</option>
          <option value="Wenshan">文山區</option>
        </select>

        <span>的</span>

        <label htmlFor="category" className="sr-only">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="all">所有類型</option>
          <option value="facilities">安養型</option>
          <option value="services">養護型</option>
          <option value="longterm">長期照護型</option>
          <option value="dementia">失智照顧型</option>
        </select>

        <span className="text-nowrap">機構</span>

        <button
          type="submit"
          className="px-4 py-2 bg-secondary text-white text-nowrap rounded-md"
        >
          前往搜尋
        </button>
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
