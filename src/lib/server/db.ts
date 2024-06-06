import Database from 'better-sqlite3';
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';
import { config } from '../../../drizzle.config';

const sqlite = new Database(config.dbCredentials.url, { verbose: console.log });
sqlite.pragma('journal_mode = WAL');
export const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, {
  schema,
});
