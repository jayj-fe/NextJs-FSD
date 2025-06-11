import { ReactNode } from 'react';
import { Navbar } from '@/widgets/login/layout/Navbar';
import { Providers } from '@/app/providers';

export const metadata = {
  title: 'FSD Example',
  description: 'Next.js App Router + Feature-Sliced Design',
};

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Navbar />
          <header style={{ padding: 20, backgroundColor: '#f4f4f4' }}>
            <h1>🚀 FSD 프로젝트</h1>
          </header>
          <main style={{ padding: '32px' }}>{children}</main>
        </Providers>
      </body>
    </html>
  );
};