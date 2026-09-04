#!/usr/bin/env node
/**
 * One-time Spotify re-auth helper.
 *
 * Spotify refresh tokens now expire after 6 months (enforced July 20, 2026).
 * Run this locally to mint a new refresh token for Vercel:
 *
 *   1. Copy .env.example → .env and fill SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET
 *   2. In Spotify Developer Dashboard, add redirect URI:
 *      http://127.0.0.1:4371/callback
 *   3. npm run spotify:auth
 *   4. Paste the printed SPOTIFY_REFRESH_TOKEN into Vercel env (no VITE_ prefix)
 */

import { createServer } from "node:http";
import { randomBytes } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const PORT = 4371;
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;
const SCOPE = "user-top-read";

function loadEnvFile() {
  const envPath = resolve(process.cwd(), ".env");
  if (!existsSync(envPath)) {
    return;
  }

  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }
    const eq = trimmed.indexOf("=");
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

loadEnvFile();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error(
    "Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in .env (see .env.example)"
  );
  process.exit(1);
}

const state = randomBytes(16).toString("hex");
const authorizeUrl = new URL("https://accounts.spotify.com/authorize");
authorizeUrl.searchParams.set("client_id", clientId);
authorizeUrl.searchParams.set("response_type", "code");
authorizeUrl.searchParams.set("redirect_uri", REDIRECT_URI);
authorizeUrl.searchParams.set("scope", SCOPE);
authorizeUrl.searchParams.set("state", state);
authorizeUrl.searchParams.set("show_dialog", "true");

const server = createServer(async (req, res) => {
  const url = new URL(req.url, REDIRECT_URI);

  if (url.pathname !== "/callback") {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  if (url.searchParams.get("state") !== state) {
    res.writeHead(400);
    res.end("Invalid state");
    return;
  }

  const error = url.searchParams.get("error");
  if (error) {
    res.writeHead(400);
    res.end(`Authorization failed: ${error}`);
    server.close();
    process.exit(1);
  }

  const code = url.searchParams.get("code");
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basic}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const tokens = await tokenResponse.json();
  if (!tokenResponse.ok) {
    res.writeHead(500);
    res.end(JSON.stringify(tokens));
    console.error(tokens);
    server.close();
    process.exit(1);
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(
    "<h1>Authorized</h1><p>You can close this tab and return to the terminal.</p>"
  );

  console.log("\nAdd this to Vercel environment variables:\n");
  console.log(`SPOTIFY_REFRESH_TOKEN=${tokens.refresh_token}\n`);
  console.log(
    "Also ensure SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET are set without the VITE_ prefix."
  );
  console.log(
    "Because the old secret was shipped in the client bundle, rotate the client secret in the Spotify dashboard."
  );

  server.close();
  process.exit(0);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("Open this URL to authorize Spotify:\n");
  console.log(authorizeUrl.toString());
  console.log(`\nWaiting on ${REDIRECT_URI} ...`);
});
