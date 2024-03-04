import { useEffect, useState } from "react";

const Spotify = () => {
    const [songId, setSongId] = useState("");

    useEffect(() => {
        var details = {
            grant_type: "refresh_token",
            refresh_token: import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN,
            client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
            client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
        };

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: formBody,
        })
            .then((response) => response.json())
            .then((data) => {
                fetch(
                    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1",
                    {
                        method: "GET",
                        headers: {
                            Authorization: "Bearer " + data.access_token,
                        },
                    }
                )
                    .then((response) => response.json())
                    .then((data) => setSongId(data.items[0].id));
            });
    });

    return (
        <>
            <div className="spotify">
                <div className="current-fav">Current Favourite</div>
                <iframe
                    style={{ borderRadius: "12px" }}
                    src={`https://open.spotify.com/embed/track/${songId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
            </div>
        </>
    );
};

export default Spotify;
