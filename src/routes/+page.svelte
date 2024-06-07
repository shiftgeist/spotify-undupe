<script lang="ts">
import type { PageData } from './$types';
import { spotify } from '$lib/spotify';

export let data: PageData;
// let playlists: SimplifiedPlaylist[] | null = null;

async function getPlaylists() {
  const res = await spotify().authenticate();

  console.log(`🐸📣`, res, `res`);

  // const result = await spotify().currentUser.topItems('tracks');
  // console.log('🐸📣', result, 'result');
}
</script>

<!-- <pre>{JSON.stringify(playlists, null, 2)}</pre> -->

<button on:click={getPlaylists}>click me</button>

<div class="grid gap-4 place-content-center m-4">
  {#each data.allPosts as post}
      <pre>{JSON.stringify(post, null, 2)}</pre>
  {/each}

  <form method="POST">
      <textarea
          class="w-full rounded-md bg-slate-900 hover:bg-slate-950 border p-4 resize-y"
          style="resize: vertical;"
          name="content"
          placeholder="Type content here!"
      ></textarea>

      <div class="flex justify-center">
          <button
              class="p-2 m-4 border border-gray-200 hover:bg-slate-950 rounded-md max-w-xl"
              type="submit"
              formaction="?/createPost">Creating Post...</button
          >
          <button
              class="p-2 m-4 border border-gray-200 hover:bg-slate-950 rounded-md max-w-xl"
              formaction="?/deleteAllPosts">Delete Everything</button
          >
      </div>
  </form>
</div>
