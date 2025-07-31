import clsx from 'clsx';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummury';

import { findAllPublicPostsCached } from '@/lib/post/queries/public';

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
  const slug = post.slug;
  const postLink = `/post/${slug}`;
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
          src: post.coverImageUrl,
          alt: post.title,
        }}
      />

      <PostSummary
        postHeading={'h1'}
        postLink={postLink}
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
      />
    </section>
  );
}
