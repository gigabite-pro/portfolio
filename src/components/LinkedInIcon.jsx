import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import TWEEN from "@tweenjs/tween.js";
import useSound from "use-sound";

const LinkedInIcon = ({ nodes, floor, wallBack, wallLeft, cameraMode }) => {
    const linkedInRef = useRef();
    const html = useRef();
    const [hovered, setHovered] = useState(false);

    const [play] = useSound("./rising-pops.mp3", {
        volume: 0.3,
    });

    useEffect(() => {
        if (cameraMode === "default" && hovered) {
            document.body.style.cursor = "pointer";
            html.current?.children[0].classList.add("active");
            new TWEEN.Tween(linkedInRef.current.scale)
                .to(
                    {
                        x: 20.06,
                        y: 20.06,
                        z: 20.06,
                    },
                    300
                )
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
            play();
        } else {
            document.body.style.cursor = "auto";
            html.current?.children[0].classList.remove("active");
            new TWEEN.Tween(linkedInRef.current.scale)
                .to(
                    {
                        x: 19.06,
                        y: 19.06,
                        z: 19.06,
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
                ref={linkedInRef}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                onClick={() => {
                    if (cameraMode === "default") {
                        window.open(
                            "https://www.linkedin.com/in/v-sharma03/",
                            "_blank"
                        );
                    }
                }}
                name="GLTF_SceneRootNode 2"
                position={[281.35, 28.83, 84.49]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={19.06}>
                <Html
                    ref={html}
                    position={[-3, 4, 7]}
                    distanceFactor={0.8}
                    center
                    occlude={[floor, wallBack, wallLeft]}>
                    <div className="label">LinkedIn 💻</div>
                </Html>
                <group
                    name="Cylinder007_0"
                    position={[0, 3, 6]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.84}>
                    <mesh
                        name="Object_42"
                        geometry={nodes.Object_42.geometry}
                        material={nodes.Object_42.material}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Object_52"
                        geometry={nodes.Object_52.geometry}
                        material={nodes.Object_52.material}
                        castShadow
                        receiveShadow
                    />
                </group>
            </group>
        </>
    );
};

export default LinkedInIcon;
