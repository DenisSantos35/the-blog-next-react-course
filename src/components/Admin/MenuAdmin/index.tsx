import Link from 'next/link';

export function Menuadmin() {
  return (
    <nav>
      <a href='/' target='_blank'>
        Home
      </a>
      <Link href='/admin/post'>Posts</Link>
    </nav>
  );
}
