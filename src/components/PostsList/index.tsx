import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostSummary } from '../PostSummury';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export async function PostsList() {
  const posts = await findAllPublicPostsCached();

  return (
    <div
      className={clsx(
        'grid grid-cols-1 mb-16 sm:grid-cols-2 lg:grid-cols-3 gap-8',
      )}
    >
      {posts.slice(1).map(post => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className={clsx('flex flex-col group gap-4')} key={post.id}>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <PostSummary
              postLink={postLink}
              postHeading='h2'
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}
