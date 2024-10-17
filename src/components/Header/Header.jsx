import Link from 'next/link';
import Nav from '../Nav/Nav';

export default function Header() {
  return (
    <header className="header">
      <Link href="/">HOME</Link>
      <Nav />
    </header>
  );
}
