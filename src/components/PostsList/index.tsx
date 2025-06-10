import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostHeading } from '../PostHeading';

export async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <div
      className={clsx('grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8')}
    >
      {posts.map(post => {
        return (
          <div className={clsx('flex flex-col group gap-4')} key={post.id}>
            <PostCoverImage
              linkProps={{ href: `/posts/${post.slug}` }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <div className={clsx('flex flex-col gap-4', 'sm:justify-between')}>
              <time
                className={clsx('text-slate-600 block text-sm/tight')}
                dateTime={post.createdAt}
              >
                {post.createdAt}
              </time>
              <PostHeading as='h2' url='#'>
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
