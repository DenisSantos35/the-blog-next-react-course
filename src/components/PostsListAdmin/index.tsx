import { findAllPostAdmin } from '@/lib/post/queries/admin';

export default async function PostsListAdmin() {
  const post = await findAllPostAdmin();
  return (
    <div className='py-16 '>
      {post.map(post => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
