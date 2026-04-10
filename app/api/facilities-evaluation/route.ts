import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = (url.searchParams.get('q') || '').toLowerCase();
  const filePath = path.join(
    process.cwd(),
    'data',
    'facilities-evaluation.json',
  );
  const raw = await fs.readFile(filePath, 'utf8');
  const list = JSON.parse(raw) as any[];

  const filtered = q
    ? list.filter((item) =>
        (item.name + ' ' + item.address).toLowerCase().includes(q),
      )
    : list;

  return NextResponse.json(filtered);
}
