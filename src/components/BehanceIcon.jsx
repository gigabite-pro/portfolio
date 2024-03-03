import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import TWEEN from "@tweenjs/tween.js";
import useSound from "use-sound";

const BehanceIcon = ({ nodes, floor, wallBack, wallLeft, cameraMode }) => {
    const behanceRef = useRef();
    const html = useRef();
    const [hovered, setHovered] = useState(false);

    const [play] = useSound("./rising-pops.mp3", {
        volume: 0.3,
    });

    useEffect(() => {
        if (cameraMode === "default" && hovered) {
            document.body.style.cursor = "pointer";
            html.current?.children[0].classList.add("active");
            new TWEEN.Tween(behanceRef.current.scale)
                .to(
                    {
                        x: 48.5,
                        y: 48.5,
                        z: 48.5,
                    },
                    300
                )
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
            play();
        } else {
            document.body.style.cursor = "auto";
            html.current?.children[0].classList.remove("active");
            new TWEEN.Tween(behanceRef.current.scale)
                .to(
                    {
                        x: 47.82,
                        y: 47.82,
                        z: 47.82,
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
                ref={behanceRef}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                onClick={() => {
                    if (cameraMode === "default") {
                        window.open(
                            "https://www.behance.net/chin2sharma",
                            "_blank"
                        );
                    }
                }}
                name="GLTF_SceneRootNode 4"
                position={[470.25, -108.21, 173.17]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={47.82}>
                <Html
                    ref={html}
                    position={[1, 3, 6.5]}
                    distanceFactor={0.8}
                    occlude={[floor, wallBack, wallLeft]}
                    center>
                    <div className="label">Behance 🎨</div>
                </Html>
                <group
                    name="Cylinder012_0"
                    position={[-0.19, 3.32, 6.31]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.18}>
                    <mesh
                        name="Object_4"
                        geometry={nodes.Object_4.geometry}
                        material={nodes.Object_4.material}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Object_5"
                        geometry={nodes.Object_5.geometry}
                        material={nodes.Object_5.material}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Object_6"
                        geometry={nodes.Object_6.geometry}
                        material={nodes.Object_6.material}
                        castShadow
                        receiveShadow
                    />
                </group>
            </group>
        </>
    );
};

export default BehanceIcon;
