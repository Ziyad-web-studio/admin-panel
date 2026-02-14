'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push('/admin');
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('An error occurred');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-primary-bg">
      <div className="z-10 max-w-md w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center text-accent">Admin Access</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 border border-accent/20 rounded-lg bg-black/50 backdrop-blur-sm">
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-primary-bg border border-accent/50 text-foreground focus:outline-none focus:border-highlight transition-colors"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="bg-accent text-white py-3 px-4 rounded hover:bg-accent/80 transition-all hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] font-bold uppercase tracking-wide"
          >
            Enter System
          </button>
        </form>
      </div>
    </div>
  );
}
