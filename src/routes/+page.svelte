<script lang="ts">
import type { PageData } from './$types';

export let data: PageData;
</script>

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
