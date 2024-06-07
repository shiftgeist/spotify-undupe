import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { spotify } from '$lib/spotify';

// https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow

// http://localhost:5173/spotify_redirect?code=AQA3lzNAprjw1r7R1TEfyp-Cek-Wl4R1SSCfDNnyQzBle86TTTBVbCdUyviGXYDYogQhxYWgo-IceBy0S5JzPihkOoZ7w4SQZY2cXgMWvjdS3TOwfu6xgF8fgQQJo27TAGuqkWW5Jr4vIYueSeIhlmkMmrpRwU6tPCGUcRwE95OVkHwHlxx2S5c_uOSfDfH_u1TvHYIQ9LpTniYLwuCgCSk0640BzDX3x8oBr9Vra7xAMDAyIP1HTFtZVn55ZmQdOXxNTZpTv-TYmUGXmdOzd_kN_5oLwm5FQNYj9K8honZsKmN5pR2tzu8
export const GET: RequestHandler = async ({ url }) => {
  const res = await spotify().getAccessToken();

  const code = url.searchParams.get('code');

  return json({ code, res });
};
