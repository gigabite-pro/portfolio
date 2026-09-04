import {
  refreshAccessToken,
  fetchTopTrackId,
} from "../lib/spotify.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const token = await refreshAccessToken();
    const id = await fetchTopTrackId(token.access_token);
    res.status(200).json({ id });
  } catch (error) {
    if (process.env.SPOTIFY_FALLBACK_TRACK_ID) {
      res.status(200).json({
        id: process.env.SPOTIFY_FALLBACK_TRACK_ID,
        fallback: true,
      });
      return;
    }

    const status =
      error.code === "invalid_grant"
        ? 401
        : error.message?.startsWith("Missing ")
          ? 500
          : error.status || 502;

    res.status(status).json({
      error: error.code || "spotify_error",
      message: error.message,
      reauth:
        error.code === "invalid_grant"
          ? "Visit /api/spotify-login to authorize again, then update SPOTIFY_REFRESH_TOKEN in Vercel."
          : undefined,
    });
  }
}
