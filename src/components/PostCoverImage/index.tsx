import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  return (
    /*o w-full e h full pega o tamanho total do componente (link) e o overfllow-hiden quando o componente filho estourar os limites nõ deixa sair para ora do componente pai, rounded arredonda a borda do componente, hover com scale altera o tamanho do componente e transition faz uma transição mais suave. */
    <Link
      className={clsx(
        'w-full h-full overflow-hidden rounded-xl',
        linkProps.className,
      )}
      href={linkProps.href}
    >
      <Image
        className={clsx(
          'group-hover:scale-105 transition',
          'w-full h-full',
          'object-cover object-center',
          imageProps.className,
        )}
        {...imageProps}
        alt={imageProps.alt}
      ></Image>
    </Link>
  );
}
