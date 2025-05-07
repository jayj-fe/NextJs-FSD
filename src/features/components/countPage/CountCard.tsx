import { CountCardProps } from './types';

export default function CountCard({ title, count }: CountCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
      <h2>{title}</h2>
      <p>Count: {count}</p>
    </div>
  );
}