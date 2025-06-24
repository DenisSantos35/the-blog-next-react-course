//'use client'; // transforma o componente em componente do lado do cliente

import clsx from 'clsx';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1
        className={clsx(
          'text-4xl/normal font-extrabold py-8',
          'sm:text-5xl/normal sm:font-extrabold sm:py-10',
          'md:text-6xl/normal md:font-extrabold md:py-11',
          'lg:text-7xl/normal lg:font-extrabold lg:py-12',
        )}
      >
        <Link href='/'>The Blog</Link>
      </h1>
    </header>
  );
}
