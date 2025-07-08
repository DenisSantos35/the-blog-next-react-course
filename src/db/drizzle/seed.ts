import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postTable } from './schemas';

(async () => {
  //Limpar base de dados completa
  await drizzleDb.delete(postTable);

  //pegar os daddos do json repositorio instancia a classe JsonPostRepository
  const jsonRepository = new JsonPostRepository();
  const posts = await jsonRepository.findAll();

  console.log(`${posts.length} posts forma salvos na vase de dados.`);

  try {
    //inserir todos os dados no banco de dados usando o schema postTable e os dados retornados de posts
    await drizzleDb.insert(postTable).values(posts);
  } catch (e) {
    console.log('Erro ao inserir dados no banco de dados:', e);
  }
})();
