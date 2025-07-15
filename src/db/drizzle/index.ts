import { drizzle } from 'drizzle-orm/better-sqlite3';
import { postTable } from './schemas';
import Database from 'better-sqlite3';
import { resolve } from 'path';

//pegar o caminho da base de dados
const sqliteDatabasePath = resolve(process.cwd(), 'db.sqlite3');

//informar a base de dados do betterSqlite
const sqliteDatabase = new Database(sqliteDatabasePath);

// fazer a conecção com a base
export const drizzleDb = drizzle(sqliteDatabase, {
  schema: {
    posts: postTable,
  },
  logger: true,
});
