import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';

export class DrizzePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log('D findAllPublic');
    const posts = drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log('findBySlugPublic');
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error('Post não encontrado para slug');

    return post;
  }
  async findAll(): Promise<PostModel[]> {
    console.log('findAll');
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    console.log('findById');
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post não encontrado para id');

    return post;
  }
}

(async () => {
  //   o que for necessário. true
  // o Next.js já vem com várias decisões prontas, permitindo que você comece a desenvolver mais rapidamente. false
  //   9eb8b7ac-2b48-4835-880a-a1c798e1a595 true
  // 6b204dab-2312-4525-820a-a0463560835f false
  // const repo = new DrizzePostRepository();
  // const posts = await repo.findAll();
  // posts.forEach(post => console.log(post.id, post.published));
  // const post = await repo.findBySlugPublic('o que for necessário.');
  // console.log(post);
})();
