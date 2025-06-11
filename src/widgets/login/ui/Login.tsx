'use client';

import { isAdmin } from '@/entities/user/config/lib';
import { LoginForm, loginStore } from '@/features/login';

export const Login = () => {
  const user = loginStore((state) => state.user);

  if (user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>{user.name}님 환영합니다!</h2>
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <p><strong>이메일:</strong> {user.email}</p>
          <p><strong>권한:</strong> {user.role}</p>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>관리자 여부:</strong> {isAdmin(user) ? '관리자입니다' : '일반 사용자입니다'}</p>
        </div>
      </div>
    );
  }

  return <LoginForm />;
};