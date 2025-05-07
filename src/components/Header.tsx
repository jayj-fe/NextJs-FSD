import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '10px', background: '#eee' }}>
      <nav>
        <Link href="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link href="/pageName">Sub Page</Link>
      </nav>
    </header>
  );
}