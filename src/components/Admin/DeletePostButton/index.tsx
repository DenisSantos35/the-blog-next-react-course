'use client';

import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';

type DeletePostButtonProps = {
  id: string;
  title: string;
};
export async function DeletePostButton({ title, id }: DeletePostButtonProps) {
  function handleClick(): void {
    alert(`Você tem certeza que deseja apagar o post: ${id}?`);
  }
  return (
    <button
      className={clsx(
        'text-red-500 cursor-pointer transition',
        '[&_svg]:w-4 [&_svg]:h-4]',
        'hover:scale-120 hover:text-red-700',
      )}
      aria-label={`Apagar pos: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
    >
      <Trash2Icon />
    </button>
  );
}
