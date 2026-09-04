import { useEffect, useState, useRef } from "react";

const Spotify = () => {
    const [songId, setSongId] = useState("");
    const spotifyFrameRef = useRef(null);

    useEffect(() => {
        let cancelled = false;

        async function loadTopTrack() {
            try {
                const response = await fetch("/api/spotify");
                const data = await response.json();

                if (!response.ok || !data?.id) {
                    console.error("Spotify API error:", data);
                    return;
                }

                if (!cancelled) {
                    setSongId(data.id);
                }
            } catch (error) {
                console.error("Failed to load Spotify top track:", error);
            }
        }

        loadTopTrack();

        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        if (!songId || !spotifyFrameRef.current) {
            return undefined;
        }

        const timeoutId = setTimeout(() => {
            if (spotifyFrameRef.current) {
                spotifyFrameRef.current.src = spotifyFrameRef.current.src;
            }
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [songId]);

    return (
        <div className="spotify">
            <div className="current-fav">Current Favourite</div>
            {songId ? (
                <iframe
                    ref={spotifyFrameRef}
                    style={{ borderRadius: "12px" }}
                    src={`https://open.spotify.com/embed/track/${songId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Current favourite Spotify track"
                ></iframe>
            ) : null}
        </div>
    );
};

export default Spotify;
