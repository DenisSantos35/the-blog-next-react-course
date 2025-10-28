import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile, writeFile } from 'fs/promises';


const simulateWaitMs = Number(process.env.SIMULATE_WAIT_IN_MS) || 0;

//pegando dados da raiz do projeto => C:\Users\rudye\Desktop\blog
const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

export class JsonPostRepository implements PostRepository {
  async create(post: PostModel): Promise<PostModel> {
    const posts = await this.findAll();

    if(!post.id || !post.slug){
      throw new Error('Post sem ID ou Slug')
    }

    const idOrSlugExist = posts.find(savePost => savePost.id === post.id || savePost.slug === post.slug);

    if(idOrSlugExist){
      throw new Error('ID ou Slug devem ser únicos');
    }

    posts.push(post);
    await this.writeToDisk(posts);

    return post;

  }
  async delete(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const postIndex = posts.findIndex(p => p.id === id);

    if(postIndex < 0){
      throw new Error('Post não existe');
    }

    const post = posts[postIndex];
    posts.splice(postIndex, 1);
    await  this.writeToDisk(posts);

    return post;
  }
  async update(id: string, newPostData: Omit<PostModel, 'id' | 'slug' | 'createdAt' | 'updatedAt'>): Promise<PostModel> {
    const posts = await this.findAll();
    const postIndex = posts.findIndex(p => p.id === id);
    const savedPost = posts[postIndex];

    if(postIndex < 0){
      throw new Error('Post não existe');
    }

    const newPost = {
      ...savedPost,
      ...newPostData,
      udateAt: new Date().toISOString(),
    };
    posts[postIndex] = newPost;
    await this.writeToDisk(posts);
    return newPost;
  }
  private async simulateWait() {
    if (simulateWaitMs <= 0) return;
    await new Promise(resolve => setTimeout(resolve, simulateWaitMs));
  }
  //método privado só é enchegado pela classe
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }
  
  private async writeToDisk(posts: PostModel[]): Promise<void>{
    const jsonToString = JSON.stringify({posts}, null, 2);
    await writeFile(JSON_POSTS_FILE_PATH, jsonToString, 'utf-8' );

  }

  //método do contrato com PostRepository, obrigatório a implementação para o contrato
  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();

    console.group('\n', 'findAllPublic', '\n');
    const posts = await this.readFromDisk();
    return posts.filter(post => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    //await this.simulateWait();
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error('Post não encontrado para ID');

    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    //await this.simulateWait();
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.slug === slug);

    if (!post) throw new Error('Post não encontrado para Slug');

    return post;
  }

  //metodo que busca todos os dados do json
  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();

    console.group('\n', 'findAllPublic', '\n');
    const posts = await this.readFromDisk();
    return posts;
  }
}
//exportação da instancia.

//postRepository.findAll().then(jsonContent => console.log(jsonContent));
// (async () => {
//   // const posts = await postRepository.findAll();
//   // posts.forEach(post => console.log(post.id));
//   const post = await postRepository.findById(
//     '99f8add4-7684-4c16-a316-616271db199e ',
//   );
//   console.log(post);
// })();
