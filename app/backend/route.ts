import { exec } from 'child_process';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { testName } = body;

  return new Promise((resolve) => {
    exec(`npx playwright test --grep ${testName}`, (error, stdout) => {
      if (error) {
        resolve(NextResponse.json({ error: stdout }, { status: 500 }));
      } else {
        resolve(NextResponse.json({ result: stdout }, { status: 201 }));
      }
    });
  });
}
