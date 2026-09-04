import { randomBytes } from "node:crypto";
import { buildAuthorizeUrl } from "../lib/spotify.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send("Method not allowed");
    return;
  }

  try {
    const state = randomBytes(16).toString("hex");
    const url = buildAuthorizeUrl(req, state);
    res.setHeader(
      "Set-Cookie",
      `spotify_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
    );
    res.writeHead(302, { Location: url });
    res.end();
  } catch (error) {
    res.status(500).send(
      `Spotify login is not configured: ${error.message}. Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in Vercel env.`
    );
  }
}
