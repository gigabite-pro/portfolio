import { Html } from "@react-three/drei";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import TWEEN from "@tweenjs/tween.js";

const Clock = ({
    nodes,
    materials,
    floor,
    wallBack,
    wallLeft,
    cameraMode,
    setCameraMode,
}) => {
    const [currentTime, setCurrentTime] = useState(moment());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment());
        }, 1000); // Update time every second

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <group
                name="Clock Digital"
                position={[130.16, -84.95, 93.58]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.07}>
                <mesh
                    name="Rectangle3"
                    geometry={nodes.Rectangle3.geometry}
                    material={materials["Rectangle3 Material"]}
                    castShadow
                    receiveShadow
                    position={[-0.71, 31.69, -78.32]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={0.48}
                />
                <mesh
                    name="button_side 2"
                    geometry={nodes["button_side 2"].geometry}
                    material={materials["button_side 2 Material"]}
                    castShadow
                    receiveShadow
                    position={[-206.15, 84.88, 7.74]}
                    scale={[0.04, 0.35, 0.37]}
                />
                <group
                    name="button"
                    position={[1.33, 158.34, 8.45]}
                    rotation={[0, 0, 0]}
                    scale={0.13}>
                    <mesh
                        name="Rectangle 31"
                        geometry={nodes["Rectangle 31"].geometry}
                        material={materials["Button Power"]}
                        position={[-0.09, 66.83, -51.92]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={[1.31, 0.25, 1.68]}
                    />
                    <mesh
                        name="Cylinder1"
                        geometry={nodes.Cylinder1.geometry}
                        material={materials["Button Power"]}
                        position={[0.02, 64.7, 0.02]}
                        rotation={[Math.PI, -0.21, Math.PI]}
                        scale={1}
                    />
                </group>
                <mesh
                    name="sun"
                    geometry={nodes.sun.geometry}
                    material={materials["Screen Numbers"]}
                    castShadow
                    receiveShadow
                    position={[178.22, 140.33, 79.06]}
                />
                <mesh
                    name="(light)"
                    geometry={nodes["(light)"].geometry}
                    material={materials["Screen Numbers"]}
                    castShadow
                    receiveShadow
                    position={[6.13, 84.77, 80.44]}
                />
                <group
                    name="button_left"
                    position={[113.69, 169.75, 7.35]}
                    scale={0.48}>
                    <mesh
                        name="Cube 41"
                        geometry={nodes["Cube 41"].geometry}
                        material={materials["Buttons Top"]}
                        castShadow
                        receiveShadow
                        position={[0, 1.07, -0.4]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.54, 2.28, 0.15]}
                    />
                    <mesh
                        name="Cube 24"
                        geometry={nodes["Cube 24"].geometry}
                        material={materials["Buttons Top Base"]}
                        castShadow
                        receiveShadow
                        position={[0, -0.98, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.58, 2.34, 0.15]}
                    />
                </group>
                <group
                    name="button_right"
                    position={[-110.01, 169.75, 7.35]}
                    scale={0.48}>
                    <mesh
                        name="Cube 42"
                        geometry={nodes["Cube 42"].geometry}
                        material={materials["Buttons Top"]}
                        castShadow
                        receiveShadow
                        position={[0, 1.07, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.54, 2.28, 0.15]}
                    />
                    <mesh
                        name="Cube 25"
                        geometry={nodes["Cube 25"].geometry}
                        material={materials["Buttons Top Base"]}
                        castShadow
                        receiveShadow
                        position={[0, -0.98, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={[0.58, 2.34, 0.15]}
                    />
                </group>
                <mesh
                    name="screen"
                    geometry={nodes.screen.geometry}
                    material={materials["screen Material"]}
                    castShadow
                    receiveShadow
                    position={[-4.83, 82.53, 64.93]}
                    scale={[0.46, 0.43, 0.46]}>
                    <Html className="time" position={[0, 0, 0]} transform>
                        <div
                            style={{
                                fontFamily: "Clock",
                                fontSize: "7000px",
                                background: "transparent",
                            }}>
                            {currentTime.format("hh:mm:ss")}
                        </div>
                    </Html>
                </mesh>
                <mesh
                    name="border"
                    geometry={nodes.border.geometry}
                    material={materials["Screen Frame"]}
                    castShadow
                    receiveShadow
                    position={[-5.07, 82.01, 77.49]}
                    scale={0.48}
                />
                <mesh
                    name="clock"
                    geometry={nodes.clock.geometry}
                    material={materials["Clock Body"]}
                    castShadow
                    receiveShadow
                    position={[1.47, 85.68, 7.74]}
                    scale={[1.24, 0.51, 0.51]}
                />
            </group>
        </>
    );
};

export default Clock;
