'use client';
import { useState } from 'react';

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    
    setPassword(generatedPassword);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-gray-800 text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Password Generator</h2>
      <div className="mb-3">
        <label className="block mb-1">Length: {length}</label>
        <input 
          type="range" 
          min="6" max="24" 
          value={length} 
          onChange={(e) => setLength(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-3 flex items-center">
        <input type="checkbox" id="numbers" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
        <label htmlFor="numbers" className="ml-2">Include Numbers</label>
      </div>
      <div className="mb-3 flex items-center">
        <input type="checkbox" id="symbols" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
        <label htmlFor="symbols" className="ml-2">Include Symbols</label>
      </div>
      <button onClick={generatePassword} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Generate Password
      </button>
      {password && (
        <div className="mt-4 p-2 bg-gray-700 rounded text-center select-all">
          {password}
        </div>
      )}
    </div>
  );
}
