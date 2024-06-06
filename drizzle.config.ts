import type { Config } from 'drizzle-kit';

export const config = {
  schema: './src/lib/server/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: './data/sqlite.db',
  },
  verbose: true,
  strict: true,
} satisfies Config;

export default config;
