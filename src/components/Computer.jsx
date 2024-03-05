import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import TWEEN from "@tweenjs/tween.js";
import useSound from "use-sound";

const Computer = ({
    nodes,
    materials,
    floor,
    wallBack,
    wallLeft,
    cameraMode,
    setCameraMode,
}) => {
    const computerRef = useRef();
    const html = useRef();
    const projectsFrame = useRef();
    const [hovered, setHovered] = useState(false);

    const ENV = "prod";

    const HOST =
        ENV === "dev" ? "http://localhost:5173" : "https://vaibhavsharma.me";

    const [play] = useSound("./rising-pops.mp3", {
        volume: 0.3,
    });

    const [playSwish] = useSound("./swish.wav", {
        volume: 0.3,
    });

    const [playSwishReverse] = useSound("./swish-rev.wav", {
        volume: 0.3,
    });

    const [playStartup] = useSound("./windows-xp-startup.mp3", {
        volume: 0.5,
    });

    const [playShutDown] = useSound("./windows-xp-shutdown.mp3", {
        volume: 0.5,
    });

    useEffect(() => {
        if (cameraMode === "default" && hovered) {
            document.body.style.cursor = "pointer";
            html.current?.children[0].classList.add("active");
            new TWEEN.Tween(computerRef.current.scale)
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
            new TWEEN.Tween(computerRef.current.scale)
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

        if (cameraMode === "computer" && hovered) {
            document.body.style.cursor = "auto";
        } else if (cameraMode === "computer" && !hovered) {
            document.body.style.cursor = "pointer";
        }
    }, [hovered, cameraMode]);

    return (
        <>
            <group
                ref={computerRef}
                onPointerMissed={() => {
                    if (cameraMode === "computer") {
                        playShutDown();
                        projectsFrame.current.style.opacity = 0;
                        setTimeout(() => {
                            projectsFrame.current.style.display = "none";
                            setCameraMode("default");
                            playSwishReverse();
                        }, 1000);
                    }
                }}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                onClick={() => {
                    if (cameraMode === "default") {
                        setCameraMode("computer");
                        playSwish();
                        setHovered(false);
                        projectsFrame.current.style.display = "block";
                        setTimeout(() => {
                            projectsFrame.current.contentWindow.location.reload();
                            projectsFrame.current.style.opacity = 1;
                            setTimeout(() => {
                                playStartup();
                            }, 2000);
                        }, 1000);
                    }
                }}
                name="tv_simple"
                position={[161.46, -85.26, 146.15]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.42}>
                <Html
                    ref={html}
                    position={[-250, 150, 0]}
                    distanceFactor={0.8}
                    occlude={[floor, wallBack, wallLeft]}
                    center>
                    <div className="label">Projects 🚀</div>
                </Html>
                <Html
                    wrapperClass="projectScreen"
                    transform
                    zIndexRange={[16777270, 16777270]}
                    scale={20}
                    position={[-1, 130, 0]}>
                    <iframe
                        onClick={(e) => e.stopPropagation()}
                        ref={projectsFrame}
                        src={`${HOST}/projects`}
                    />
                </Html>
                <mesh
                    name="Cube 71"
                    geometry={nodes["Cube 71"].geometry}
                    material={materials.hanger}
                    castShadow
                    receiveShadow
                    position={[-4.64, 17.44, 2]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={[5.14, 7.58, 0.15]}
                />
                <mesh
                    name="Cube 61"
                    geometry={nodes["Cube 61"].geometry}
                    material={materials.hanger}
                    castShadow
                    receiveShadow
                    position={[-4.64, 251.36, 2]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={[5.14, 7.58, 0.15]}
                />
                <mesh
                    name="Cube 5"
                    geometry={nodes["Cube 5"].geometry}
                    material={materials.hanger}
                    castShadow
                    receiveShadow
                    position={[214.8, 134.34, 2]}
                    scale={[4.95, 4.42, 0.15]}
                />
                <mesh
                    name="Cube 4"
                    geometry={nodes["Cube 4"].geometry}
                    material={materials.hanger}
                    castShadow
                    receiveShadow
                    position={[-214.58, 134.34, 2]}
                    scale={[4.95, 4.42, 0.15]}
                />
                <mesh
                    name="Cube 81"
                    geometry={nodes["Cube 81"].geometry}
                    material={materials.hanger}
                    castShadow
                    receiveShadow
                    position={[0.06, 134.34, -3.28]}
                    scale={[4.95, 4.42, 0.13]}
                />
                <mesh
                    name="Cube 23"
                    geometry={nodes["Cube 23"].geometry}
                    material={materials.black}
                    castShadow
                    receiveShadow
                    position={[0.06, 135.05, 2.16]}
                    scale={[4.85, 4.42, 0.13]}
                />
                <mesh
                    name="Cube 31"
                    geometry={nodes["Cube 31"].geometry}
                    material={materials.hanger}
                    castShadow
                    receiveShadow
                    position={[0.06, 8.37, 0]}
                    scale={[1.06, 4.67, 0.08]}
                />
                <mesh
                    name="Cube4"
                    geometry={nodes.Cube4.geometry}
                    material={materials.hanger}
                    castShadow
                    receiveShadow
                    position={[0.06, 2.86, 0]}
                    scale={[2.08, 4.67, 0.81]}
                />
            </group>
        </>
    );
};

export default Computer;
