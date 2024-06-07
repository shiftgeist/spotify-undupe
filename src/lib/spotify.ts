import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { env } from '$env/dynamic/public';

const callbackURL = 'http://localhost:5173/spotify_redirect';
const scope = ['user-read-currently-playing', 'user-top-read'];

export const spotify = () => {
  console.log(
    '🐸📣',
    env.PUBLIC_SPOTIFY_CLIENT_ID,
    'env.PUBLIC_SPOTIFY_CLIENT_ID',
  );

  return SpotifyApi.withUserAuthorization(
    env.PUBLIC_SPOTIFY_CLIENT_ID,
    callbackURL,
    scope,
  );
};
