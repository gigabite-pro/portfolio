import { exchangeCodeForTokens } from "../lib/spotify.js";

function readCookie(req, name) {
  const header = req.headers.cookie || "";
  const match = header
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send("Method not allowed");
    return;
  }

  const { code, state, error, error_description: errorDescription } = req.query;

  if (error) {
    res
      .status(400)
      .send(`Spotify authorization failed: ${error} ${errorDescription || ""}`);
    return;
  }

  const expectedState = readCookie(req, "spotify_oauth_state");
  if (!state || !expectedState || state !== expectedState) {
    res.status(400).send("Invalid OAuth state. Start again at /api/spotify-login");
    return;
  }

  if (!code) {
    res.status(400).send("Missing authorization code");
    return;
  }

  try {
    const tokens = await exchangeCodeForTokens(req, code);
    const refreshToken = tokens.refresh_token;

    res.setHeader(
      "Set-Cookie",
      "spotify_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
    );
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Spotify connected</title>
    <style>
      body { font-family: ui-sans-serif, system-ui, sans-serif; max-width: 42rem; margin: 3rem auto; padding: 0 1rem; line-height: 1.5; }
      code, textarea { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      textarea { width: 100%; min-height: 6rem; }
      .box { background: #f4f4f5; border-radius: 8px; padding: 1rem; }
      ol { padding-left: 1.25rem; }
    </style>
  </head>
  <body>
    <h1>Spotify connected</h1>
    <p>Spotify now expires refresh tokens after 6 months. Copy this new token into Vercel as <code>SPOTIFY_REFRESH_TOKEN</code>, then redeploy.</p>
    <div class="box">
      <p><strong>SPOTIFY_REFRESH_TOKEN</strong></p>
      <textarea readonly>${escapeHtml(refreshToken || "No refresh_token returned — re-run /api/spotify-login")}</textarea>
    </div>
    <ol>
      <li>Vercel → Project → Settings → Environment Variables</li>
      <li>Set <code>SPOTIFY_CLIENT_ID</code>, <code>SPOTIFY_CLIENT_SECRET</code>, and <code>SPOTIFY_REFRESH_TOKEN</code> (no <code>VITE_</code> prefix)</li>
      <li>Remove old <code>VITE_SPOTIFY_*</code> vars (they were exposed in the client bundle)</li>
      <li>Redeploy</li>
    </ol>
    <p>Optional: set <code>SPOTIFY_FALLBACK_TRACK_ID</code> so the embed still shows a track if auth fails.</p>
  </body>
</html>`);
  } catch (err) {
    res.status(err.status || 500).send(`Token exchange failed: ${err.message}`);
  }
}
