import clsx from 'clsx';

export default function Homepage() {
  return (
    <div>
      <h1
        className={clsx(
          'text-6xl',
          'font-bold',
          'text-blue-500',
          'hover:text-white',
          'hover:bg-blue-500',
          'transition',
          'duration-300',
          'text-blog',
        )}
      >
        Texto no meu h1
      </h1>
    </div>
  );
}
