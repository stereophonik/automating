'use client';

import { useState } from 'react';
import React from 'react';

export default function TestsPage() {
  const [testName, setTestName] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const runTest = async (): Promise<void> => {
    if (!testName) {
      setResult('Please enter a test name.');
      return;
    }

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
      <h1>Run Playwright Test</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="test-name" style={{ display: 'block', marginBottom: '8px' }}>
          Enter Test Name:
        </label>
        <input
          id="test-name"
          type="text"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>
      <button onClick={runTest} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Execute Test
      </button>
      <textarea
        readOnly
        value={result}
        style={{ width: '100%', height: '200px', marginTop: '20px' }}
      />
    </div>
  );
}
