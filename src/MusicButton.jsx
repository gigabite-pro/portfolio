import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";

const MusicButton = ({ colorMode }) => {
    const music = "./music.mp3";
    const [play, { pause }] = useSound(music, {
        volume: 1,
    });
    const [playing, setPlaying] = useState(false);

    const playState = useRef(null);
    const stopState = useRef(null);

    useEffect(() => {
        if (playing) {
            playState.current.style.display = "block";
            stopState.current.style.display = "none";
            play();
        } else {
            playState.current.style.display = "none";
            stopState.current.style.display = "block";
            pause();
        }
    }, [playing]);

    return (
        <>
            <div
                title="Play music"
                className="outer-circ"
                style={{
                    borderColor: colorMode === "dark" ? "#FFF" : "#000",
                }}
                onClick={() => {
                    setPlaying(!playing);
                }}>
                <svg
                    ref={playState}
                    className="svg"
                    width="200"
                    height="100"
                    viewBox="0 0 200 100">
                    <defs>
                        <path
                            style={{
                                stroke: colorMode === "dark" ? "#FFF" : "#000",
                            }}
                            className="wave-path"
                            fill="none"
                            id="sign-wave"
                            d="M0 50
             C 40 10, 60 10, 100 50 C 140 90, 160 90, 200 50
             C 240 10, 260 10, 300 50 C 340 90, 360 90, 400 50"
                        />
                    </defs>
                    <use xlinkHref="#sign-wave" x="0" y="0">
                        <animate
                            attributeName="x"
                            from="0"
                            to="-200"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                    </use>
                </svg>
                <svg
                    ref={stopState}
                    className="notPlaying"
                    width="40"
                    height="40">
                    <path
                        d="M0 20 H190"
                        stroke={colorMode === "dark" ? "#FFF" : "#000"}
                    />
                </svg>
            </div>
        </>
    );
};

export default MusicButton;
