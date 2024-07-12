const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
const CURRENTLY_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

const PLAY_TRACK_ENDPOINT = "https://api.spotify.com/v1/me/player/play";
const SKIP_NEXT_ENDPOINT = "https://api.spotify.com/v1/me/player/next";
const SKIP_PREVIOUS_ENDPOINT = "https://api.spotify.com/v1/me/player/previous";
const PAUSE_ENDPOINT = "https://api.spotify.com/v1/me/player/pause";

const getAccessToken = async (refresh_token) => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getUsersPlaylists = async (refresh_token) => {
  const { access_token } = await getAccessToken(refresh_token);
  return fetch(PLAYLISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getCurrentlyPlaying = async (refresh_token) => {
  const { access_token } = await getAccessToken(refresh_token);
  return fetch(CURRENTLY_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const skipNext = async (refresh_token) => {
  const { access_token } = await getAccessToken(refresh_token);
  return fetch(SKIP_NEXT_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const skipPrevious = async (refresh_token) => {
  const { access_token } = await getAccessToken(refresh_token);
  return fetch(SKIP_PREVIOUS_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const playChosenTrack = async (refresh_token, artist) => {
  const { access_token } = await getAccessToken(refresh_token);
  console.log(refresh_token);
  console.log(artist);
  const stringArtist = JSON.stringify(artist);
  return fetch(PLAY_TRACK_ENDPOINT, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      context_uri: artist,
    }),
  });
};

// New function to pause playback
export const pausePlayback = async (refresh_token) => {
  const { access_token } = await getAccessToken(refresh_token);
  return fetch(PAUSE_ENDPOINT, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// New function to resume playback
export const resumePlayback = async (refresh_token) => {
  const { access_token } = await getAccessToken(refresh_token);
  return fetch(PLAY_TRACK_ENDPOINT, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};