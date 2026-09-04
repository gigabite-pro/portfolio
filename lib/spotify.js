const TOKEN_URL = "https://accounts.spotify.com/api/token";
const TOP_TRACKS_URL =
  "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1";
const AUTHORIZE_URL = "https://accounts.spotify.com/authorize";

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

function basicAuthHeader() {
  const clientId = requiredEnv("SPOTIFY_CLIENT_ID");
  const clientSecret = requiredEnv("SPOTIFY_CLIENT_SECRET");
  return `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`;
}

export function getRedirectUri(req) {
  if (process.env.SPOTIFY_REDIRECT_URI) {
    return process.env.SPOTIFY_REDIRECT_URI;
  }

  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const proto = req.headers["x-forwarded-proto"] || "https";
  return `${proto}://${host}/api/spotify-callback`;
}

export async function refreshAccessToken() {
  const refreshToken = requiredEnv("SPOTIFY_REFRESH_TOKEN");
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: basicAuthHeader(),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(
      data.error_description || data.error || "Token refresh failed"
    );
    error.code = data.error;
    error.status = response.status;
    throw error;
  }

  return data;
}

export async function fetchTopTrackId(accessToken) {
  const response = await fetch(TOP_TRACKS_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(
      data.error?.message || "Failed to fetch top tracks"
    );
    error.status = response.status;
    throw error;
  }

  const trackId = data.items?.[0]?.id;
  if (!trackId) {
    const error = new Error("No top tracks found for this account");
    error.status = 404;
    throw error;
  }

  return trackId;
}

export function buildAuthorizeUrl(req, state) {
  const clientId = requiredEnv("SPOTIFY_CLIENT_ID");
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: getRedirectUri(req),
    scope: "user-top-read",
    state,
    show_dialog: "true",
  });

  return `${AUTHORIZE_URL}?${params.toString()}`;
}

export async function exchangeCodeForTokens(req, code) {
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: basicAuthHeader(),
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: getRedirectUri(req),
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(
      data.error_description || data.error || "Code exchange failed"
    );
    error.code = data.error;
    error.status = response.status;
    throw error;
  }

  return data;
}
