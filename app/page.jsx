'use client';
import { useState } from 'react';
import { PasswordDisplay } from '@/components/PasswordDisplay';
import { PasswordControls } from '@/components/PasswordControls';
import { GenerateButton } from '@/components/GenerateButton';
import Image from 'next/image';

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4 relative">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20">
        <h2 className="flex items-center flex-wrap justify-center sm:justify-start text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
          <Image src="/logo.png" width={50} height={50} />
          SecurePass
        </h2>
        
        <PasswordControls
          length={length}
          includeNumbers={includeNumbers}
          includeSymbols={includeSymbols}
          onLengthChange={setLength}
          onNumbersChange={() => setIncludeNumbers(!includeNumbers)}
          onSymbolsChange={() => setIncludeSymbols(!includeSymbols)}
        />

        <div className="mt-6">
          <GenerateButton onClick={generatePassword} />
        </div>

        {password && (
          <PasswordDisplay 
            password={password} 
            onCopy={copyToClipboard} 
          />
        )}
      </div>
    </div>
  );
}