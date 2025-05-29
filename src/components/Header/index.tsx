'use client'; // transforma o componente em componente do lado do cliente

import clsx from 'clsx';

export default function H1() {
  console.log('client');
  return (
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
      //Quando o componente for servidor não há possibilidade de utiltar interatividade
      //Se quiser utilizar interatividade transforme o em componente client
      onClick={() => alert('Componente do servidor')}
    >
      Texto no meu h1
    </h1>
  );
}
