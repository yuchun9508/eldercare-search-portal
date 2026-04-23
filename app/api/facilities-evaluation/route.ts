import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

type EvaluationRaw = {
  name: string;
  postal_code: string;
  address: string;
  phone: string;
  evaluation_2015: string;
  evaluation_2016: string;
  evaluation_2017: string;
  evaluation_2018: string;
  evaluation_2019: string;
  evaluation_2023: string;
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const filePath = path.join(
    process.cwd(),
    'data',
    'facilities-evaluation.json',
  );
  const raw = await fs.readFile(filePath, 'utf8');
  const list = JSON.parse(raw) as EvaluationRaw[];

  return NextResponse.json(list);
}
