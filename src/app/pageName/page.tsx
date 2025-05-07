'use client';
import { useState } from 'react';
import Button from '@/components/Button';
import CountCard from '@/features/components/countPage/CountCard';

export default function PageName() {
  // DashboardCard의 카운트를 상태로 관리
  const [count, setCount] = useState(1234);

  // 버튼 클릭 시 카운트를 증가시키는 함수
  const handleButtonClick = () => {
    setCount(count + 1); // 카운트를 1 증가시킴
  };

  return (
    <div>
      <h1>Sub Page</h1>
      <Button onClick={handleButtonClick}>Add Count</Button>
      <CountCard count={count} title="현재 카운트" />
    </div>
  );
}