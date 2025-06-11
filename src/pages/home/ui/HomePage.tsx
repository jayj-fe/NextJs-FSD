'use client';
import { loginStore } from '@/features/login';

export const HomePage = () => {
  const user = loginStore((state) => state.user);

  return (
    <div>
      <h1>🏠 Home</h1>

      {user ? (
        <>
          <p>환영합니다, {user.name}님!</p>
          <button onClick={() => loginStore.getState().setUser(null)}>
            로그아웃
          </button>
        </>
      ) : (
        <p>비로그인 상태입니다.</p>
      )}
    </div>
  );
};