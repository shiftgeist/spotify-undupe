import { db } from '$lib/server/db';
import { postsTable } from '$lib/server/schema';
import { eq } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    allPosts: db.select().from(postsTable).all(),
  };
};

export const actions: Actions = {
  createPost: async ({ request }) => {
    const data = await request.formData();
    const content = data.get('content')?.toString() ?? '';
    if (content === '' || content.trim() === '') return { success: false };
    db.insert(postsTable).values({ content }).run();
    return { success: true };
  },
  deleteAllPosts: async () => {
    db.delete(postsTable).run();
    return { success: true };
  },
  deletePost: async ({ request }) => {
    const data = await request.formData();
    const id = Number(data.get('id'));
    db.delete(postsTable).where(eq(postsTable.id, id)).run();
    return { success: true };
  },
  updatePost: async ({ request }) => {
    const data = await request.formData();
    const id = Number(data.get('id'));
    const content = String(data.get('content'));
    if (content === '' || content.trim() === '') return { success: false };
    db.update(postsTable).set({ content }).where(eq(postsTable.id, id)).run();
    return { success: true };
  },
};
