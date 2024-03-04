import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import TWEEN from "@tweenjs/tween.js";
import { Html } from "@react-three/drei";

const MusicPlayer = ({
    nodes,
    materials,
    floor,
    wallBack,
    wallLeft,
    cameraMode,
    setCameraMode,
}) => {
    const playerRef = useRef();
    const html = useRef();
    const [hovered, setHovered] = useState(false);

    const [play] = useSound("./rising-pops.mp3", {
        volume: 0.3,
    });

    const [playSwish] = useSound("./swish.wav", {
        volume: 0.3,
    });

    const [playSwishReverse] = useSound("./swish-rev.wav", {
        volume: 0.3,
    });

    useEffect(() => {
        if (cameraMode === "default" && hovered) {
            document.body.style.cursor = "pointer";
            html.current?.children[0].classList.add("active");
            new TWEEN.Tween(playerRef.current.scale)
                .to(
                    {
                        x: 0.19,
                        y: 0.19,
                        z: 0.19,
                    },
                    300
                )
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
            play();
        } else {
            document.body.style.cursor = "auto";
            html.current?.children[0].classList.remove("active");
            new TWEEN.Tween(playerRef.current.scale)
                .to(
                    {
                        x: 0.17,
                        y: 0.17,
                        z: 0.17,
                    },
                    300
                )
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
        }
    }, [hovered]);
    return (
        <>
            <group
                ref={playerRef}
                onPointerMissed={() => {
                    if (
                        cameraMode === "spotify" &&
                        document.querySelector(".tip-overlay").style.display ===
                            "none"
                    ) {
                        setCameraMode("default");
                        playSwishReverse();
                        const spotifyEmbedWindow = document.querySelector(
                            'iframe[src*="spotify.com/embed"]'
                        ).contentWindow;
                        spotifyEmbedWindow.postMessage(
                            // pause
                            { command: "pause" },
                            "*"
                        );
                        // remove spotify render
                        document.querySelector(".spotify").style.opacity = "0";
                        setTimeout(() => {
                            document.querySelector(".spotify").style.display =
                                "none";
                        }, 400);
                    }
                }}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                onClick={() => {
                    if (cameraMode === "default") {
                        setCameraMode("spotify");
                        playSwish();
                        setHovered(false);
                    }
                }}
                name="Record Player"
                position={[62.86, 68.71, 18.71]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.17}>
                <Html
                    ref={html}
                    position={[300, 200, -100]}
                    distanceFactor={0.8}
                    occlude={[floor, wallBack, wallLeft]}
                    center
                    pointerEvents="none">
                    <div className="label">Spotify 🎵</div>
                </Html>
                <mesh
                    name="Cube"
                    geometry={nodes.Cube.geometry}
                    material={materials.main}
                    castShadow
                    receiveShadow
                    position={[107.01, 51.81, -53.02]}
                    rotation={[-1.57, 0, -0.17]}
                    scale={1.28}
                />
                <mesh
                    name="Cylinder 21"
                    geometry={nodes["Cylinder 21"].geometry}
                    material={materials.main}
                    castShadow
                    receiveShadow
                    position={[137.56, 49.81, 82.54]}
                    rotation={[0, 0, 0]}
                    scale={1.28}
                />
                <mesh
                    name="Cylinder2"
                    geometry={nodes.Cylinder2.geometry}
                    material={materials.main}
                    castShadow
                    receiveShadow
                    position={[109.87, 51.63, -93.44]}
                    rotation={[0, 0, 0]}
                    scale={1.28}
                />
                <mesh
                    name="Rectangle 22"
                    geometry={nodes["Rectangle 22"].geometry}
                    material={materials.blue}
                    castShadow
                    receiveShadow
                    position={[4.53, 2.16, -11.28]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1.28}
                />
                <mesh
                    name="red"
                    geometry={nodes.red.geometry}
                    material={materials.red}
                    castShadow
                    receiveShadow
                    position={[-17.54, 45.91, -6.71]}
                    rotation={[0, 0, 0]}
                    scale={[0.72, 0.09, 0.72]}
                />
                <mesh
                    name="Cylinder3"
                    geometry={nodes.Cylinder3.geometry}
                    material={materials.main}
                    castShadow
                    receiveShadow
                    position={[-17.6, 45.93, -6.74]}
                    rotation={[0, 0, 0]}
                    scale={[0.72, 1, 0.72]}
                />
            </group>
        </>
    );
};

export default MusicPlayer;
