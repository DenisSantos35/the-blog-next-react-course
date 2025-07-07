import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { title } from 'process';

// Dentro do schema criamos primeiro nossa tabela
export const postTable = sqliteTable('posts', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  author: text('author').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  coverImageUrl: text('cover_image_url').notNull(),
  published: integer('published', { mode: 'boolean' }).notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

//criamos a inferencia de tipo para selecionar e inserir dados
export type PostsTableSelectMode = InferSelectModel<typeof postTable>;
export type PostTableInsertMode = InferInsertModel<typeof postTable>;
