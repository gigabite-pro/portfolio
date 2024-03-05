import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import TWEEN from "@tweenjs/tween.js";
import useSound from "use-sound";

const BrainstormingWall = ({
    nodes,
    materials,
    floor,
    wallBack,
    wallLeft,
    cameraMode,
    setCameraMode,
}) => {
    const brainstormingWallRef = useRef();
    const html = useRef();
    const clickableHtml = useRef();
    const resume = useRef();
    const [hovered, setHovered] = useState(false);
    const [resumeHovered, setResumeHovered] = useState(false);

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
            new TWEEN.Tween(brainstormingWallRef.current.scale)
                .to(
                    {
                        x: 0.45,
                        y: 0.45,
                        z: 0.45,
                    },
                    300
                )
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
            play();
        } else {
            document.body.style.cursor = "auto";
            html.current?.children[0].classList.remove("active");
            new TWEEN.Tween(brainstormingWallRef.current.scale)
                .to(
                    {
                        x: 0.42,
                        y: 0.42,
                        z: 0.42,
                    },
                    300
                )
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
        }

        if (cameraMode === "brainstormingWall" && hovered) {
            document.body.style.cursor = "auto";
        } else if (cameraMode === "brainstormingWall" && !hovered) {
            document.body.style.cursor = "pointer";
        }

        if (cameraMode === "brainstormingWall" && resumeHovered) {
            new TWEEN.Tween(resume.current.scale)
                .to(
                    {
                        x: 0.065,
                        y: 0.065,
                        z: 0.065,
                    },
                    300
                )
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
            clickableHtml.current?.children[0].classList.add("active");
            document.body.style.cursor = "pointer";
        } else {
            new TWEEN.Tween(resume.current.scale)
                .to(
                    {
                        x: 0.06,
                        y: 0.06,
                        z: 0.06,
                    },
                    300
                )
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
            clickableHtml.current?.children[0].classList.remove("active");
        }
    }, [hovered, resumeHovered]);

    return (
        <>
            <group
                ref={brainstormingWallRef}
                onPointerMissed={() => {
                    if (cameraMode === "brainstormingWall") {
                        setCameraMode("default");
                        playSwishReverse();
                    }
                }}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                onClick={() => {
                    if (cameraMode === "default") {
                        setCameraMode("brainstormingWall");
                        playSwish();
                        setHovered(false);
                        setResumeHovered(true);
                    }
                }}
                name="Brainstorming Wall"
                position={[-60.29, -3.45, 19.24]}
                rotation={[0, 0, Math.PI / 2]}
                scale={0.48}>
                <Html
                    ref={html}
                    position={[0, 200, 10]}
                    distanceFactor={0.8}
                    occlude={[floor, wallBack, wallLeft]}
                    center>
                    <div className="label">Resume 📌</div>
                </Html>
                <group
                    name="Notes"
                    position={[-66.22, 80.96, 8.31]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.67}>
                    <mesh
                        name="Cube 3"
                        geometry={nodes["Cube 3"].geometry}
                        material={materials.white}
                        castShadow
                        receiveShadow
                        position={[-0.7, 0.52, 10.65]}
                        scale={1.08}
                    />
                    <mesh
                        name="Cylinder4"
                        geometry={nodes.Cylinder4.geometry}
                        material={materials.yellow}
                        castShadow
                        receiveShadow
                        position={[-0.11, 0.85, 33.37]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={1.08}
                    />
                    <mesh
                        name="Cube 2"
                        geometry={nodes["Cube 2"].geometry}
                        material={materials.purple}
                        castShadow
                        receiveShadow
                        position={[-6.14, -30.65, 6.7]}
                        rotation={[0, 0, -0.09]}
                        scale={1.35}
                    />
                    <mesh
                        name="Cube1"
                        geometry={nodes.Cube1.geometry}
                        material={materials.pink}
                        castShadow
                        receiveShadow
                        position={[6.07, -31.13, 13.07]}
                        rotation={[0, 0, 0.09]}
                        scale={1.35}
                    />
                </group>
                <group
                    name="Thumbtack"
                    position={[120.74, 90.17, 9.08]}
                    rotation={[0.85, -1.34, -0.69]}
                    scale={0.06}>
                    <mesh
                        name="tip"
                        geometry={nodes.tip.geometry}
                        material={materials.greydarker}
                        castShadow
                        receiveShadow
                        position={[-1.09, 40.1, 1.18]}
                        scale={[1.5, 0.7, 1.5]}
                    />
                    <mesh
                        name="body"
                        geometry={nodes.body.geometry}
                        material={materials.red}
                        castShadow
                        receiveShadow
                        position={[-1.51, 111.72, -0.24]}
                        scale={0.65}
                    />
                </group>
                <mesh
                    ref={resume}
                    onPointerEnter={() => {
                        if (cameraMode === "brainstormingWall") {
                            setResumeHovered(true);
                        }
                    }}
                    onPointerLeave={() => setResumeHovered(false)}
                    onClick={() => {
                        if (cameraMode === "brainstormingWall") {
                            window.open("./resume.pdf", "_blank");
                        }
                    }}
                    name="resume_latest-1.png"
                    geometry={nodes["resume_latest-1.png"].geometry}
                    material={materials["resume_latest-1.png Material"]}
                    castShadow
                    receiveShadow
                    position={[56.39, 80.99, 11.62]}
                    rotation={[0, 0, -1.45]}
                    scale={0.06}>
                    <Html
                        ref={clickableHtml}
                        onPointerEnter={() => setHovered(true)}
                        position={[1100, 800, 0]}
                        distanceFactor={0.1}
                        occlude={[floor, wallBack, wallLeft]}
                        center>
                        <div
                            className="label resumeLabel"
                            onClick={() => {
                                setCameraMode("resume");
                            }}>
                            Click to open 👆
                        </div>
                    </Html>
                </mesh>
                <group name="papers" position={[0, 81.18, 10.23]} scale={2.02}>
                    <mesh
                        name="Cube 21"
                        geometry={nodes["Cube 21"].geometry}
                        material={materials.brown_v1}
                        castShadow
                        receiveShadow
                        position={[0, 0, 4.14]}
                        rotation={[Math.PI, 0, -Math.PI]}
                        scale={[0.88, 0.88, 0.02]}
                    />
                    <mesh
                        name="Cube2"
                        geometry={nodes.Cube2.geometry}
                        material={materials.brown_v2}
                        castShadow
                        receiveShadow
                        position={[0, 0, -0.05]}
                        rotation={[Math.PI, 0, -Math.PI]}
                        scale={[0.88, 0.88, 0.02]}
                    />
                </group>
            </group>
        </>
    );
};

export default BrainstormingWall;
