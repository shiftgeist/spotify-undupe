// https://orm.drizzle.team/docs/column-types/sqlite

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const postsTable = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  content: text('content').notNull(),
  created: text('created_at'),
});
