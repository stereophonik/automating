'use client';

import { useState } from 'react';

export default function TestsPage() {
  const [result, setResult] = useState<string>('');

  const runTest = async (testName: string): Promise<void> => {
    setResult('Running test...');
    try {
      const response = await fetch('/backend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testName }),
      });

      const data: { result?: string; error?: string } = await response.json();
      if (response.ok && data.result) {
        setResult(data.result);
      } else {
        setResult(`Error: ${data.error || 'Unknown error'}`);
      }
    } catch (error: any) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Run Playwright Tests</h1>
      <button onClick={() => runTest('"has title"')}>Run Title Test</button>
      <button onClick={() => runTest('"book button"')}>Run Book Button Test</button>
      <button onClick={() => runTest('"submit button"')}>Run Submit Button Test</button>
      <textarea
        readOnly
        value={result}
        style={{ width: '100%', height: '200px', marginTop: '20px' }}
      />
    </div>
  );
}
