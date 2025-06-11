'use client';

import { useState } from 'react';
import { useLogin } from '@/features/login/lib/useLogin';
import { loginStore } from '@/features/login/stores/loginStore';
import { LoginError } from './LoginError';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = loginStore((state) => state.error);
  const isLoading = loginStore((state) => state.isLoading);

  const { login } = useLogin();

  const handleLogin = async () => {
    await login(email, password);
  };

  return (
    <section style={{ width: 400, padding: 32, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>로그인</h2>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', marginBottom: 12, padding: 8 }}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', marginBottom: 12, padding: 8 }}
      />
      <button
        onClick={handleLogin}
        disabled={isLoading}
        style={{
          width: '100%',
          padding: 10,
          backgroundColor: isLoading ? '#ddd' : '#0070f3',
          color: isLoading ? '#666' : '#fff',
          cursor: isLoading ? 'not-allowed' : 'pointer',
        }}
      >
        {isLoading ? '로그인 중...' : '로그인'}
      </button>
      {error && <LoginError message={error} />}
    </section>
  );
};