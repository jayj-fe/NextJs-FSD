// src/entities/user/api/ApiUser.ts
import { API_ROUTES } from '@/shared/constants/routes';
import { User } from '@/entities/user/config/model';

// 실제 API 호출을 주석 처리하고, mock 데이터 반환
export async function fetchUser(email: string, password: string): Promise<User> {
  // 실제 API 호출 (현재 미사용)
  /*
  const res = await fetch(API_ROUTES.LOGIN, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) throw new Error('Login failed');
  return await res.json();
  */

  // ✅ Mock User 데이터 (임시)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 'mock-user-123',
        name: '홍길동',
        email,
        role: email === 'admin@example.com' ? 'admin' : 'user',
      });
    }, 800); // 네트워크 지연 흉내 (800ms)
  });
}
