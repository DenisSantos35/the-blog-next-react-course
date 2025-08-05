import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { SIMULATE_WAIT_IN_MS } from '@/lib/constants';

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
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;
    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }
  //método privado só é enchegado pela classe
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
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
