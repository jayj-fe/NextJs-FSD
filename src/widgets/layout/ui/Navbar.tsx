'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { loginStore } from '@/features/login';

export const Navbar = () => {
  const router = useRouter();
  const user = loginStore((state) => state.user);
  const setUser = loginStore((state) => state.setUser);

  const handleLogout = () => {
    setUser(null); // 로그아웃
    router.push('/login'); // 로그인 페이지로 이동
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        backgroundColor: '#f0f0f0',
        borderBottom: '1px solid #ccc',
      }}
    >
      <div>
        <Link href="/home" style={{ marginRight: 16 }}>🏠 Home</Link>
        <Link href="/login">🔐 Login</Link>
      </div>

      <div>
        {user ? (
          <>
            <span style={{ marginRight: 12 }}>{user.name}님</span>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <span style={{ color: '#888' }}>비로그인 상태</span>
        )}
      </div>
    </nav>
  );
};