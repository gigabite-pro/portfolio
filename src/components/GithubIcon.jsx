import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import TWEEN from "@tweenjs/tween.js";
import useSound from "use-sound";

const GithubIcon = ({ nodes, floor, wallBack, wallLeft, cameraMode }) => {
    const githubRef = useRef();
    const html = useRef();
    const [hovered, setHovered] = useState(false);

    const [play] = useSound("./rising-pops.mp3", {
        volume: 0.3,
    });

    useEffect(() => {
        if (cameraMode === "default" && hovered) {
            document.body.style.cursor = "pointer";
            html.current?.children[0].classList.add("active");
            new TWEEN.Tween(githubRef.current.scale)
                .to(
                    {
                        x: 15,
                        y: 15,
                        z: 15,
                    },
                    300
                )
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
            play();
        } else {
            document.body.style.cursor = "auto";
            html.current?.children[0].classList.remove("active");
            new TWEEN.Tween(githubRef.current.scale)
                .to(
                    {
                        x: 13.92,
                        y: 13.92,
                        z: 13.92,
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
                ref={githubRef}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                onClick={() => {
                    if (cameraMode === "default") {
                        window.open(
                            "https://github.com/gigabite-pro",
                            "_blank"
                        );
                    }
                }}
                name="GLTF_SceneRootNode 3"
                position={[255.01, 57.54, 257]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={13.92}>
                <Html
                    ref={html}
                    position={[4, 3, 6]}
                    distanceFactor={0.8}
                    occlude={[floor, wallBack, wallLeft]}
                    center>
                    <div className="label">Github ⚡</div>
                </Html>
                <group
                    name="Curve012_0"
                    position={[-0.05, 2.28, 6.72]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={37.69}>
                    <mesh
                        name="Object_41"
                        geometry={nodes.Object_41.geometry}
                        material={nodes.Object_41.material}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Object_51"
                        geometry={nodes.Object_51.geometry}
                        material={nodes.Object_51.material}
                        castShadow
                        receiveShadow
                    />
                </group>
            </group>
        </>
    );
};

export default GithubIcon;
