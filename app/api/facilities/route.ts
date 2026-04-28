import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import { getLabelForValue } from '../../../lib/options-utils';

type FacilityRaw = {
  id: string;
  ownership: string;
  name: string;
  district: string;
  address: string;
  phone: string;
  target_population: string;
  total_beds: string;
  long_term_care_beds: string;
  nursing_beds: string;
  dementia_beds: string;
  residential_beds: string;
};

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), 'data', 'facilities.json');
  const raw = await fs.readFile(filePath, 'utf8');
  const list = JSON.parse(raw) as FacilityRaw[];

  const url = new URL(request.url);
  const districtQuery = url.searchParams.get('district') || 'all';
  const categoryQuery = url.searchParams.get('category') || 'all';

  if (districtQuery === 'all' && categoryQuery === 'all') {
    return NextResponse.json(list);
  }

  const districtQueryLabel = getLabelForValue(districtQuery);
  const categoryQueryLabel = getLabelForValue(categoryQuery);

  const filtered = list.filter((item) => {
    const matchesDistrict =
      districtQuery === 'all' || item.district === districtQueryLabel;
    const matchesCategory =
      categoryQuery === 'all' ||
      item.target_population.includes(categoryQueryLabel.substring(0, 2)); // Remove "型" suffix from category label

    return matchesDistrict && matchesCategory;
  });

  return NextResponse.json(filtered);
}
