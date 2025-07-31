// import { eq } from 'drizzle-orm';
// import { drizzleDb } from '.';
// import { postTable } from './schemas';

// (async () => {
//   //busca todos os posts
//   const posts = await drizzleDb.select().from(postTable);

//   posts.forEach(post => {
//     console.log(post.slug, post.title);
//   });
// })();

// (async () => {
//   await drizzleDb
//     .update(postTable)
//     .set({
//       title: 'Dicas para manter a saúde mental em dia',
//       published: true,
//     })
//     .where(eq(postTable.slug, 'dicas-para-manter-a-saude-mental-em-dia'));
// })();
