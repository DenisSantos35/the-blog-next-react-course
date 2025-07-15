import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';

export class DrizzePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<PostModel[]> {
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
}

(async () => {
  const repo = new DrizzePostRepository();
  const posts = await repo.findAllPublic();

  posts.forEach(post => console.log(post.excerpt, post.published));
})();
