import clsx from 'clsx';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummury';

export function PostFeatured() {
  const slug = 'featured-post';
  const postLink = `/posts/${slug}`;
  return (
    /* o group atribui um grupo para o elemento principal e todos os seus fihos ao chamar group hover recebe os parametros do pai, exemplo quando eu passar o mouse na section qualquer local vou alterar a escala da image, isso por que atribui a section o group. */
    <section
      className={clsx(
        'grid grid-cols-1 gap-8 mb-16',
        'sm:grid-cols-2',
        'group',
      )}
    >
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          priority: true,
          src: '/images/bryen_0.png',
          alt: 'Título do post',
        }}
      />

      <PostSummary
        postHeading={'h1'}
        postLink={postLink}
        createdAt={'2025-06-12T00:24:38.616Z'}
        title={'Dicas para manter a saúde mental em dia'}
        excerpt={
          'Em vez de configurar tudo manualmente, basta criar um arquivo com o nome certo e o Next.js entende que aquilo representa uma página.'
        }
      />
    </section>
  );
}
