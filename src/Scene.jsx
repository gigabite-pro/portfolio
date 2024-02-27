import useSpline from "@splinetool/r3f-spline";
import {
    SpotLight,
    OrbitControls,
    OrthographicCamera,
    Html,
} from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useSpring, animated, easings } from "@react-spring/three";

export default function Scene({ ...props }) {
    const { nodes, materials } = useSpline(
        "https://prod.spline.design/ig-kI-qluHLlJuE7/scene.splinecode"
    );

    // Refs
    const floor = useRef();
    const wallBack = useRef();
    const wallLeft = useRef();
    const { camera } = useThree();
    const controls = useRef();

    const cameraRotation = useSpring({
        from: { rotation: [0, -0.45, 0] },
        to: [{ rotation: [0, 0.45, 0] }, { rotation: [0, -0.45, 0] }],
        config: {
            duration: 1000,
            mass: 5,
            tension: 400,
            friction: 50,
            precision: 0.0001,
        },
        loop: true,
    });

    const basketball = useSpring({
        loop: true,
        from: { position: [-64.83, -120.02, 60.31] },
        to: [
            { position: [-64.83, -157.02, 60.31] },
            { position: [-64.83, -120.02, 60.31] },
        ],
        config: {
            mass: 5,
            tension: 170,
            friction: 10,
            duration: 500,
            easing: easings.easeInQuad,
        },
    });

    // const { cameraPos, cameraRot } = useControls({
    //     cameraPos: [-547.71, 200, 830.4],
    //     cameraRot: [-0.16, -0.78, -0.12],
    // });

    const leaves = useSpring({
        from: { scale: [0.35, 0.25, 0.25] },
        to: { scale: [0.32, 0.21, 0.2] },
        config: {
            duration: 2000,
            precision: 0.0001,
        },
        loop: { reverse: true },
    });

    // Light target
    const lightRef = useRef();
    useFrame(() => {
        lightRef.current.target.position.lerp(
            new THREE.Vector3(-90, -180, 120),
            0.05
        );
        lightRef.current.target.updateMatrixWorld();
    });

    function changeCameraToComputer() {
        console.log("hello");
        camera.current.position.set(-997.876, -40.282, 240.109);
        camera.current.rotation.set(0.1406, -1.4916, 0.1402);
        camera.current.zoom = 6.711;
        camera.current.updateProjectionMatrix();
    }

    return (
        <>
            <OrbitControls ref={controls} />
            <color attach="background" args={["#fbdbf9"]} />
            <group {...props} position={[-200, 100, 0]}>
                <scene name="Scene 1">
                    <OrthographicCamera
                        ref={camera}
                        name="Camera"
                        makeDefault={true}
                        zoom={1.3}
                        far={100000}
                        near={-100000}
                        up={[0, 1, 0]}
                        position={[-547.71, 200, 830.4]}
                        rotation={[-0.16, -0.78, -0.12]}
                    />
                    <group
                        name="Guitar Simple"
                        position={[-2.5, -175.82, 75.61]}
                        rotation={[-0.23, 0, 0]}
                        scale={0.59}>
                        <mesh
                            name="Ellipse 2"
                            geometry={nodes["Ellipse 2"].geometry}
                            material={materials.dark}
                            castShadow
                            receiveShadow
                            position={[-0.77, 77.78, 3.16]}
                            rotation={[-0.01, 0, -0.01]}
                            scale={0.39}
                        />
                        <mesh
                            name="Shape 4"
                            geometry={nodes["Shape 4"].geometry}
                            material={materials.purple}
                            castShadow
                            receiveShadow
                            position={[-11.96, 32.48, -0.7]}
                            scale={0.42}
                        />
                        <mesh
                            name="Shape 3"
                            geometry={nodes["Shape 3"].geometry}
                            material={materials.purple}
                            castShadow
                            receiveShadow
                            position={[-11.17, 100.06, -1.09]}
                            rotation={[0, 0, 0]}
                            scale={0.42}
                        />
                        <mesh
                            name="Shape 2"
                            geometry={nodes["Shape 2"].geometry}
                            material={materials.pink}
                            castShadow
                            receiveShadow
                            position={[-34.8, 88.96, -18.96]}
                            scale={0.42}
                        />
                    </group>
                    <group
                        name="Brainstorming Wall"
                        position={[-60.29, -3.45, 19.24]}
                        rotation={[0, 0, Math.PI / 2]}
                        scale={0.48}>
                        <Html
                            position={[100, 300, 0]}
                            occlude={[floor, wallBack, wallLeft]}>
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
                                name="Cylinder"
                                geometry={nodes.Cylinder.geometry}
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
                                name="Cube"
                                geometry={nodes.Cube.geometry}
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
                            name="resume_latest-1.png"
                            geometry={nodes["resume_latest-1.png"].geometry}
                            material={materials["resume_latest-1.png Material"]}
                            castShadow
                            receiveShadow
                            position={[56.39, 80.99, 11.62]}
                            rotation={[0, 0, -1.45]}
                            scale={0.06}
                        />
                        <group
                            name="papers"
                            position={[0, 81.18, 10.23]}
                            scale={2.02}>
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
                                name="Cube1"
                                geometry={nodes.Cube1.geometry}
                                material={materials.brown_v2}
                                castShadow
                                receiveShadow
                                position={[0, 0, -0.05]}
                                rotation={[Math.PI, 0, -Math.PI]}
                                scale={[0.88, 0.88, 0.02]}
                            />
                        </group>
                    </group>
                    <group
                        name="iPhone 14 Pro"
                        position={[81.53, -84.83, 218.62]}
                        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                        scale={0.05}>
                        <group
                            name="Dynamic Island"
                            position={[-11.4, 260.62, 20.01]}>
                            <group
                                name="Group"
                                position={[11.58, -12.26, 1.28]}
                                rotation={[0, 0, 0]}
                                scale={1}>
                                <mesh
                                    name="Ellipse 21"
                                    geometry={nodes["Ellipse 21"].geometry}
                                    material={materials["Untitled Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[27.83, 0, -0.35]}
                                />
                                <mesh
                                    name="Ellipse"
                                    geometry={nodes.Ellipse.geometry}
                                    material={materials["Untitled Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[27.83, 0, -0.81]}
                                />
                                <mesh
                                    name="Rectangle"
                                    geometry={nodes.Rectangle.geometry}
                                    material={materials["Black Border"]}
                                    castShadow
                                    receiveShadow
                                    position={[0, 0, -1.07]}
                                />
                            </group>
                            <mesh
                                name="Rectangle 5"
                                geometry={nodes["Rectangle 5"].geometry}
                                material={materials["Untitled Material"]}
                                castShadow
                                receiveShadow
                                position={[11.5, 8.79, -0.01]}
                            />
                        </group>
                        <group name="Connectors" position={[0.1, 7.83, 4.12]}>
                            <mesh
                                name="Rectangle 4"
                                geometry={nodes["Rectangle 4"].geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[76.09, 137.8, 0]}
                                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                                scale={1}
                            />
                            <mesh
                                name="Rectangle 3"
                                geometry={nodes["Rectangle 3"].geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[-62.45, -137.8, 0]}
                                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                                scale={1}
                            />
                            <mesh
                                name="Rectangle 2"
                                geometry={nodes["Rectangle 2"].geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[0, -215.43, 0]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={1}
                            />
                            <mesh
                                name="Rectangle1"
                                geometry={nodes.Rectangle1.geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[0, 210.74, 0]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={1}
                            />
                        </group>
                        <group
                            name="Bottom Details"
                            position={[7.91, -261.25, 4.12]}>
                            <mesh
                                name="Ellipse 6"
                                geometry={nodes["Ellipse 6"].geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[-35.18, 0.08, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                            />
                            <mesh
                                name="Ellipse 5"
                                geometry={nodes["Ellipse 5"].geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[59.18, 0.08, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                            />
                            <mesh
                                name="Ellipse 61"
                                geometry={nodes["Ellipse 61"].geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[-51.18, 0.08, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                            />
                            <mesh
                                name="Ellipse 4"
                                geometry={nodes["Ellipse 4"].geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[51.18, 0.08, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                            />
                            <mesh
                                name="Ellipse 3"
                                geometry={nodes["Ellipse 3"].geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[43.18, 0.08, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                            />
                            <mesh
                                name="Ellipse 62"
                                geometry={nodes["Ellipse 62"].geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[-59.18, 0.08, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                            />
                            <mesh
                                name="Ellipse 22"
                                geometry={nodes["Ellipse 22"].geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[35.18, 0.08, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                            />
                            <mesh
                                name="Ellipse1"
                                geometry={nodes.Ellipse1.geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[20.18, 0.08, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                            />
                            <mesh
                                name="Rectangle 21"
                                geometry={nodes["Rectangle 21"].geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[-7.82, -0.08, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                            />
                            <mesh
                                name="Rectangle2"
                                geometry={nodes.Rectangle2.geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[-7.82, 0.08, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                            />
                        </group>
                        <group
                            name="Logo"
                            position={[26.43, 67.14, -10.68]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[0.07, 0.07, 0]}>
                            <mesh
                                name="Untitled"
                                geometry={nodes.Untitled.geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[181, -238, 0]}
                            />
                            <mesh
                                name="Untitled1"
                                geometry={nodes.Untitled1.geometry}
                                material={materials["Pink Items"]}
                                castShadow
                                receiveShadow
                                position={[423, -1, 0.01]}
                            />
                        </group>
                        <group
                            name="Camera1"
                            position={[53.08, 198.93, -18.9]}
                            rotation={[0, 0, 0]}
                            scale={1.16}>
                            <mesh
                                name="Cube 22"
                                geometry={nodes["Cube 22"].geometry}
                                material={materials["camera hold inner"]}
                                castShadow
                                receiveShadow
                                position={[0.24, -2.53, -1.13]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={0.86}
                            />
                            <mesh
                                name="Cube2"
                                geometry={nodes.Cube2.geometry}
                                material={materials.Metal}
                                castShadow
                                receiveShadow
                                position={[0.24, -2.53, -1.81]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                                scale={0.86}
                            />
                            <group
                                name="Light"
                                position={[-25.87, 36.93, -1.91]}
                                rotation={[0, 0, 0]}
                                scale={[0.94, 0.94, 0.85]}>
                                <mesh
                                    name="Ellipse2"
                                    geometry={nodes.Ellipse2.geometry}
                                    material={materials["Camera Lens 2 Inner"]}
                                    castShadow
                                    receiveShadow
                                    position={[0.13, 0.39, -2.25]}
                                    rotation={[-Math.PI, 0, -Math.PI]}
                                    scale={[1, 1, 1.11]}
                                />
                                <mesh
                                    name="Ellipse 23"
                                    geometry={nodes["Ellipse 23"].geometry}
                                    material={materials["Camera Lens 2"]}
                                    castShadow
                                    receiveShadow
                                    position={[0, 0, 0.66]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                    scale={[0.91, 0.91, 1]}
                                />
                                <mesh
                                    name="Ellipse3"
                                    geometry={nodes.Ellipse3.geometry}
                                    material={materials["Camera Lens 2"]}
                                    castShadow
                                    receiveShadow
                                    position={[0, 0, 0.34]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                    scale={[0.91, 0.91, 1]}
                                />
                            </group>
                            <mesh
                                name="Ellipse 31"
                                geometry={nodes["Ellipse 31"].geometry}
                                material={materials["Untitled Material"]}
                                castShadow
                                receiveShadow
                                position={[-25.87, -41.02, -1.38]}
                                rotation={[-Math.PI, 0, Math.PI]}
                                scale={[0.86, 0.86, 0.85]}
                            />
                            <group
                                name="Cam2 2"
                                position={[25.45, -30.01, -0.78]}
                                rotation={[0, 0, 0]}
                                scale={0.86}>
                                <mesh
                                    name="Ellipse 7"
                                    geometry={nodes["Ellipse 7"].geometry}
                                    material={materials["Pink Items"]}
                                    castShadow
                                    receiveShadow
                                    position={[0, 0, 0.93]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 63"
                                    geometry={nodes["Ellipse 63"].geometry}
                                    material={materials["Black Border"]}
                                    castShadow
                                    receiveShadow
                                    position={[0, 0, 0.5]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 10"
                                    geometry={nodes["Ellipse 10"].geometry}
                                    material={materials["glass lenses"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.17, -0.12, -2.07]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 51"
                                    geometry={nodes["Ellipse 51"].geometry}
                                    material={materials["Untitled Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.17, -0.12, 1.1]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 41"
                                    geometry={nodes["Ellipse 41"].geometry}
                                    material={materials["Untitled Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.5, -0.19, 1.6]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 9"
                                    geometry={nodes["Ellipse 9"].geometry}
                                    material={materials.hand}
                                    castShadow
                                    receiveShadow
                                    position={[-3.5, 2, -2.32]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                    scale={0.5}
                                />
                                <mesh
                                    name="Ellipse 8"
                                    geometry={nodes["Ellipse 8"].geometry}
                                    material={materials.hand}
                                    castShadow
                                    receiveShadow
                                    position={[1.5, -2, -2.32]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 32"
                                    geometry={nodes["Ellipse 32"].geometry}
                                    material={materials["Black Border"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.5, 0, 2.5]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                            </group>
                            <group
                                name="Cam2"
                                position={[-25.3, -2.16, -0.78]}
                                rotation={[0, 0, 0]}
                                scale={0.86}>
                                <mesh
                                    name="Ellipse 71"
                                    geometry={nodes["Ellipse 71"].geometry}
                                    material={materials["Pink Items"]}
                                    castShadow
                                    receiveShadow
                                    position={[0, 0, 0.93]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 64"
                                    geometry={nodes["Ellipse 64"].geometry}
                                    material={materials["Black Border"]}
                                    castShadow
                                    receiveShadow
                                    position={[0, 0, 0.5]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 101"
                                    geometry={nodes["Ellipse 101"].geometry}
                                    material={materials["glass lenses"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.17, -0.12, -2.07]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 52"
                                    geometry={nodes["Ellipse 52"].geometry}
                                    material={materials["Untitled Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.17, -0.12, 1.1]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 42"
                                    geometry={nodes["Ellipse 42"].geometry}
                                    material={materials["Untitled Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.5, -0.19, 1.6]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 91"
                                    geometry={nodes["Ellipse 91"].geometry}
                                    material={materials.hand}
                                    castShadow
                                    receiveShadow
                                    position={[-3.5, 2, -2.32]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                    scale={0.5}
                                />
                                <mesh
                                    name="Ellipse 81"
                                    geometry={nodes["Ellipse 81"].geometry}
                                    material={materials.hand}
                                    castShadow
                                    receiveShadow
                                    position={[1.5, -2, -2.32]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 33"
                                    geometry={nodes["Ellipse 33"].geometry}
                                    material={materials["Black Border"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.5, 0, 2.5]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                            </group>
                            <group
                                name="Cam1"
                                position={[26.18, 23.96, -0.78]}
                                rotation={[0, 0, 0]}
                                scale={0.86}>
                                <mesh
                                    name="Ellipse 72"
                                    geometry={nodes["Ellipse 72"].geometry}
                                    material={materials["Pink Items"]}
                                    castShadow
                                    receiveShadow
                                    position={[0, 0, 0.93]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 65"
                                    geometry={nodes["Ellipse 65"].geometry}
                                    material={materials["Black Border"]}
                                    castShadow
                                    receiveShadow
                                    position={[0, 0, 0.5]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 102"
                                    geometry={nodes["Ellipse 102"].geometry}
                                    material={materials["glass lenses"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.17, -0.12, -2.07]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 53"
                                    geometry={nodes["Ellipse 53"].geometry}
                                    material={materials["Untitled Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.17, -0.12, 1.1]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 43"
                                    geometry={nodes["Ellipse 43"].geometry}
                                    material={materials["Untitled Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.5, -0.19, 1.6]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 92"
                                    geometry={nodes["Ellipse 92"].geometry}
                                    material={materials.hand}
                                    castShadow
                                    receiveShadow
                                    position={[-3.5, 2, -2.32]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                    scale={0.5}
                                />
                                <mesh
                                    name="Ellipse 82"
                                    geometry={nodes["Ellipse 82"].geometry}
                                    material={materials.hand}
                                    castShadow
                                    receiveShadow
                                    position={[1.5, -2, -2.32]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                                <mesh
                                    name="Ellipse 34"
                                    geometry={nodes["Ellipse 34"].geometry}
                                    material={materials["Black Border"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.5, 0, 2.5]}
                                    rotation={[-Math.PI, 0, Math.PI]}
                                />
                            </group>
                        </group>
                        <group
                            name="Body-Screen"
                            position={[10.73, 26.77, 4.95]}
                            rotation={[0, 0, 0]}
                            scale={[1.02, 1.02, 1.04]}>
                            <mesh
                                name="Screen"
                                geometry={nodes.Screen.geometry}
                                material={materials["Untitled Material"]}
                                castShadow
                                receiveShadow
                                position={[-10.45, -18.61, 14.55]}
                                scale={[0.98, 0.98, 0.96]}
                            />
                            <mesh
                                name="Screen Border"
                                geometry={nodes["Screen Border"].geometry}
                                material={materials["Black Border"]}
                                castShadow
                                receiveShadow
                                position={[-10.45, -18.61, 14.39]}
                                rotation={[-Math.PI, 0, Math.PI]}
                                scale={[1.08, 1.08, 1.06]}
                            />
                            <mesh
                                name="Back Side"
                                geometry={nodes["Back Side"].geometry}
                                material={materials.Metal}
                                castShadow
                                receiveShadow
                                position={[-10.04, -18.07, -9.56]}
                                rotation={[-Math.PI, 0, Math.PI]}
                                scale={[1.08, 1.08, 1.06]}
                            />
                            <group
                                name="Left Buttons"
                                position={[-139.66, 74.64, 0.26]}
                                scale={[0.98, 0.98, 0.96]}>
                                <mesh
                                    name="Ellipse4"
                                    geometry={nodes.Ellipse4.geometry}
                                    material={materials["Pink Items"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.02, -262.95, -0.09]}
                                    rotation={[0, -Math.PI / 2, 0]}
                                    scale={1}
                                />
                                <mesh
                                    name="Rectangle 9"
                                    geometry={nodes["Rectangle 9"].geometry}
                                    material={materials["Rectangle 9 Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[0.77, 61.22, -0.26]}
                                    rotation={[0, -Math.PI / 2, 0]}
                                    scale={[1.04, 1.02, 1.02]}
                                />
                                <mesh
                                    name="Rectangle 8"
                                    geometry={nodes["Rectangle 8"].geometry}
                                    material={materials["Pink Items"]}
                                    castShadow
                                    receiveShadow
                                    position={[-1.51, 61.24, 2.07]}
                                    rotation={[0, Math.PI / 2, 0]}
                                    scale={[1.04, 1.02, 1.02]}
                                />
                                <mesh
                                    name="Rectangle 7"
                                    geometry={nodes["Rectangle 7"].geometry}
                                    material={materials["Pink Items"]}
                                    castShadow
                                    receiveShadow
                                    position={[-1.51, 11.96, 0]}
                                    rotation={[0, Math.PI / 2, 0]}
                                    scale={[1.04, 1.02, 1.02]}
                                />
                                <mesh
                                    name="Rectangle 11"
                                    geometry={nodes["Rectangle 11"].geometry}
                                    material={materials.Metal}
                                    castShadow
                                    receiveShadow
                                    position={[0.24, -241.12, 0]}
                                    rotation={[0, -Math.PI / 2, 0]}
                                    scale={[1.04, 1.02, 1.02]}
                                />
                                <mesh
                                    name="Rectangle 10"
                                    geometry={nodes["Rectangle 10"].geometry}
                                    material={materials["Pink Items"]}
                                    castShadow
                                    receiveShadow
                                    position={[0.54, -241.12, 0]}
                                    rotation={[0, -Math.PI / 2, 0]}
                                    scale={[1.04, 1.02, 1.02]}
                                />
                                <mesh
                                    name="Rectangle 51"
                                    geometry={nodes["Rectangle 51"].geometry}
                                    material={materials["Pink Items"]}
                                    castShadow
                                    receiveShadow
                                    position={[-1.51, -38.91, 0]}
                                    rotation={[0, Math.PI / 2, 0]}
                                    scale={[1.04, 1.02, 1.02]}
                                />
                            </group>
                            <group
                                name="Right Buttons"
                                position={[118.57, -3.06, 0.26]}
                                scale={[0.98, 0.98, 0.96]}>
                                <mesh
                                    name="Button"
                                    geometry={nodes.Button.geometry}
                                    material={materials["Pink Items"]}
                                    castShadow
                                    receiveShadow
                                    position={[-0.25, -60.23, 0]}
                                    rotation={[0, Math.PI / 2, 0]}
                                    scale={[1.04, 1.02, 1.02]}
                                />
                                <mesh
                                    name="Button1"
                                    geometry={nodes.Button1.geometry}
                                    material={materials["Pink Items"]}
                                    castShadow
                                    receiveShadow
                                    position={[-1.53, 51.46, 0]}
                                    rotation={[0, Math.PI / 2, 0]}
                                    scale={[1.04, 1.02, 1.02]}
                                />
                            </group>
                            <mesh
                                name="Metal Border"
                                geometry={nodes["Metal Border"].geometry}
                                material={materials.Metal}
                                castShadow
                                receiveShadow
                                position={[-10.45, -18.61, 13.04]}
                                rotation={[-Math.PI, 0, Math.PI]}
                                scale={[1.08, 1.08, 1.06]}
                            />
                        </group>
                    </group>
                    <animated.mesh
                        name="Leaves"
                        geometry={nodes.Leaves.geometry}
                        material={materials.plant}
                        castShadow
                        receiveShadow
                        position={[107.18, -107.1, 338.21]}
                        scale={leaves.scale}
                    />
                    <group
                        name="Plant_10"
                        position={[105.73, -176.7, 327.08]}
                        scale={0.49}>
                        <mesh
                            name="Ellipse5"
                            geometry={nodes.Ellipse5.geometry}
                            material={materials["yellow-dark"]}
                            castShadow
                            receiveShadow
                            position={[0.38, 79.62, -0.2]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={0.5}
                        />
                        <mesh
                            name="Cube 6"
                            geometry={nodes["Cube 6"].geometry}
                            material={materials.table}
                            castShadow
                            receiveShadow
                            position={[-0.88, 40.79, 1.58]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.58}
                        />
                    </group>
                    <group
                        name="Photos Wall"
                        position={[178.23, 48.91, 256.18]}
                        rotation={[0, -Math.PI / 2, 0]}>
                        <mesh
                            name="Cube 93"
                            geometry={nodes["Cube 93"].geometry}
                            material={materials.yellow}
                            castShadow
                            receiveShadow
                            position={[-15.16, -25.17, 5.15]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={1}
                        />
                        <mesh
                            name="Cube 931"
                            geometry={nodes["Cube 931"].geometry}
                            material={materials.blue}
                            castShadow
                            receiveShadow
                            position={[-15.16, 25.37, 5.15]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={1}
                        />
                        <mesh
                            name="Cube 932"
                            geometry={nodes["Cube 932"].geometry}
                            material={materials.red}
                            castShadow
                            receiveShadow
                            position={[76.63, 13.27, 5.15]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={1}
                        />
                        <mesh
                            name="Cube 933"
                            geometry={nodes["Cube 933"].geometry}
                            material={materials.yellow}
                            castShadow
                            receiveShadow
                            position={[-93.17, 11.41, 5.15]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={1}
                        />
                        <mesh
                            name="Merged Geometry"
                            geometry={nodes["Merged Geometry"].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[0, 0, 4.66]}
                        />
                    </group>
                    <group
                        name="nike_shoe_box"
                        position={[-122.41, -175.18, 47.97]}
                        scale={108.21}>
                        <group
                            name="Sketchfab_model"
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={1.52}>
                            <group
                                name="BOX_nikefbx"
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={0.01}>
                                <group name="Object_2">
                                    <group name="RootNode">
                                        <group
                                            name="BOX"
                                            position={[0, 0.05, 0]}>
                                            <group
                                                name="Plane_Plane_002_Material_001"
                                                position={[0, 11.55, -9.86]}>
                                                <mesh
                                                    name="Plane_Plane_002_Material_001_TOP_0"
                                                    geometry={
                                                        nodes
                                                            .Plane_Plane_002_Material_001_TOP_0
                                                            .geometry
                                                    }
                                                    material={
                                                        nodes
                                                            .Plane_Plane_002_Material_001_TOP_0
                                                            .material
                                                    }
                                                    castShadow
                                                    receiveShadow
                                                />
                                            </group>
                                            <group
                                                name="Plane_Plane_002_carton"
                                                position={[0, 0.05, 0]}>
                                                <mesh
                                                    name="Plane_Plane_002_carton_BOTTOM_0"
                                                    geometry={
                                                        nodes
                                                            .Plane_Plane_002_carton_BOTTOM_0
                                                            .geometry
                                                    }
                                                    material={
                                                        nodes
                                                            .Plane_Plane_002_carton_BOTTOM_0
                                                            .material
                                                    }
                                                    castShadow
                                                    receiveShadow
                                                />
                                            </group>
                                        </group>
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                    <group
                        name="air_jordan_1"
                        position={[-124.59, -151.2, 44.86]}
                        scale={1.52}>
                        <group
                            name="Sketchfab_model1"
                            position={[0, 0, 0]}
                            rotation={[-Math.PI / 2, 0, 0]}>
                            <group
                                name="d8deb8ca54d7411c8d14a56540e715c4fbx"
                                rotation={[Math.PI / 2, 0, 0]}>
                                <group name="RootNode1">
                                    <group
                                        name="shoe"
                                        rotation={[-Math.PI / 2, 0, 0]}
                                        scale={100}>
                                        <mesh
                                            name="shoe_shoe_0"
                                            geometry={
                                                nodes.shoe_shoe_0.geometry
                                            }
                                            material={
                                                nodes.shoe_shoe_0.material
                                            }
                                            castShadow
                                            receiveShadow
                                        />
                                    </group>
                                    <group
                                        name="shoelace"
                                        rotation={[-Math.PI / 2, 0, 0]}
                                        scale={100}>
                                        <mesh
                                            name="shoelace_shoelace_0"
                                            geometry={
                                                nodes.shoelace_shoelace_0
                                                    .geometry
                                            }
                                            material={
                                                nodes.shoelace_shoelace_0
                                                    .material
                                            }
                                            castShadow
                                            receiveShadow
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                    <group
                        name="tv_simple"
                        position={[161.46, -85.26, 146.15]}
                        rotation={[0, -Math.PI / 2, 0]}
                        scale={0.42}>
                        <Html
                            onClick={changeCameraToComputer}
                            position={[200, 150, 0]}
                            occlude={[floor, wallBack, wallLeft]}>
                            <div className="label">Projects 🚀</div>
                        </Html>
                        <mesh
                            name="Cube 7"
                            geometry={nodes["Cube 7"].geometry}
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
                            name="Cube 8"
                            geometry={nodes["Cube 8"].geometry}
                            material={materials.hanger}
                            castShadow
                            receiveShadow
                            position={[0.06, 134.34, -3.28]}
                            scale={[4.95, 4.42, 0.13]}
                        />
                        <mesh
                            name="Cube 23"
                            geometry={nodes["Cube 23"].geometry}
                            material={materials.lines}
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
                            name="Cube3"
                            geometry={nodes.Cube3.geometry}
                            material={materials.hanger}
                            castShadow
                            receiveShadow
                            position={[0.06, 2.86, 0]}
                            scale={[2.08, 4.67, 0.81]}
                        />
                    </group>
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
                            scale={[0.46, 0.43, 0.46]}
                        />
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
                    <group
                        name="Carpet  Pink"
                        position={[-49.54, -173.59, 238.85]}
                        scale={0.43}>
                        <mesh
                            name="Ellipse 24"
                            geometry={nodes["Ellipse 24"].geometry}
                            material={materials["pink dark"]}
                            castShadow
                            receiveShadow
                            position={[0, 4.54, 0]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[0.55, 0.55, 0.85]}
                        />
                        <mesh
                            name="Ellipse6"
                            geometry={nodes.Ellipse6.geometry}
                            material={materials.red}
                            castShadow
                            receiveShadow
                            position={[0, -2.99, 0]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={[0.55, 0.55, 0.85]}
                        />
                    </group>
                    <group
                        name="window_white"
                        position={[51.74, -31.21, 27.62]}
                        scale={[0.78, 0.3, 0.57]}>
                        <mesh
                            name="Cube 19"
                            geometry={nodes["Cube 19"].geometry}
                            material={materials.glass_blue}
                            castShadow
                            receiveShadow
                            position={[-0.01, 165, -5.2]}
                            rotation={[0, 0, -Math.PI]}
                            scale={[3.74, 0.49, 0.01]}
                        />
                        <mesh
                            name="Merged Geometry1"
                            geometry={nodes["Merged Geometry1"].geometry}
                            material={materials.white}
                            castShadow
                            receiveShadow
                            position={[0, 165.69, 0.01]}
                        />
                    </group>
                    <group
                        name="Plant_01"
                        position={[121.88, -85.67, 197.49]}
                        scale={0.19}>
                        <mesh
                            name="Cube 26"
                            geometry={nodes["Cube 26"].geometry}
                            material={materials.plant}
                            castShadow
                            receiveShadow
                            position={[2.65, 128.53, 0.83]}
                            rotation={[-Math.PI, 0.96, -Math.PI]}
                            scale={0.26}
                        />
                        <mesh
                            name="Cube 32"
                            geometry={nodes["Cube 32"].geometry}
                            material={materials.plant}
                            castShadow
                            receiveShadow
                            position={[10.91, 107.93, 12.13]}
                            rotation={[-0.11, -0.96, -0.06]}
                            scale={0.28}
                        />
                        <mesh
                            name="Cube 43"
                            geometry={nodes["Cube 43"].geometry}
                            material={materials.plant}
                            castShadow
                            receiveShadow
                            position={[-19.58, 87.12, -8.64]}
                            rotation={[-3.12, 0.52, 2.87]}
                            scale={0.26}
                        />
                        <mesh
                            name="Cube 51"
                            geometry={nodes["Cube 51"].geometry}
                            material={materials.plant}
                            castShadow
                            receiveShadow
                            position={[15.17, 96.23, 10.61]}
                            rotation={[-3.13, -0.1, -2.88]}
                            scale={0.28}
                        />
                        <mesh
                            name="Cube4"
                            geometry={nodes.Cube4.geometry}
                            material={materials.plant}
                            castShadow
                            receiveShadow
                            position={[16.38, 93.34, -11.5]}
                            rotation={[0, 0.17, -0.17]}
                            scale={0.26}
                        />
                        <mesh
                            name="Ellipse 35"
                            geometry={nodes["Ellipse 35"].geometry}
                            material={materials.earth}
                            castShadow
                            receiveShadow
                            position={[-0.63, 84.83, -7.67]}
                            rotation={[-Math.PI / 2, 0, Math.PI / 9]}
                            scale={0.53}
                        />
                        <mesh
                            name="Plant Base"
                            geometry={nodes["Plant Base"].geometry}
                            material={materials.flowerpot}
                            castShadow
                            receiveShadow
                            position={[2.23, 30.14, -1.8]}
                            rotation={[-Math.PI / 2, 0, Math.PI / 9]}
                            scale={[0.45, 0.46, 0.46]}
                        />
                    </group>
                    <SpotLight
                        ref={lightRef}
                        name="Spot Light"
                        castShadow
                        intensity={1.66}
                        angle={0.5}
                        penumbra={0.3}
                        decay={1.5}
                        distance={204}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-fov={119.99999999999999}
                        shadow-camera-near={100}
                        shadow-camera-far={100000}
                        color="#fefe75"
                        position={[95.75, -2.04, 70.34]}
                        scale={1}
                    />
                    <group
                        name="Books"
                        position={[86.75, -85.39, 67.46]}
                        rotation={[Math.PI, -1.49, Math.PI]}
                        scale={0.19}>
                        <mesh
                            name="paper"
                            geometry={nodes.paper.geometry}
                            material={materials["paper Material"]}
                            castShadow
                            receiveShadow
                            position={[-1.48, 2.85, 14.17]}
                            rotation={[-Math.PI / 2, 0, Math.PI / 9]}
                            scale={1}
                        />
                        <group
                            name="book"
                            position={[40.27, 18.25, -38.41]}
                            rotation={[-1.61, Math.PI / 2, 0]}
                            scale={[0.74, 1.35, 1.23]}>
                            <mesh
                                name="Rectangle4"
                                geometry={nodes.Rectangle4.geometry}
                                material={materials["Rectangle4 Material"]}
                                castShadow
                                receiveShadow
                                position={[-22.7, 32.77, 1.79]}
                                rotation={[0, -Math.PI / 2, 0]}
                            />
                            <mesh
                                name="Cube 44"
                                geometry={nodes["Cube 44"].geometry}
                                material={materials["Cube 44 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.28, 0.87, 3.83]}
                                rotation={[0, 0, 0]}
                                scale={[0.99, 1.01, 1]}
                            />
                            <mesh
                                name="Cube 45"
                                geometry={nodes["Cube 45"].geometry}
                                material={materials.orange}
                                castShadow
                                receiveShadow
                                position={[-16.68, -0.27, 9.75]}
                                rotation={[0, 0, 0]}
                                scale={[0.99, 1.01, 1]}
                            />
                        </group>
                    </group>
                    <group
                        name="lamp_office"
                        position={[106.68, -43.81, 60.73]}
                        rotation={[-Math.PI, -0.82, -Math.PI]}
                        scale={0.14}>
                        <group
                            name="head"
                            position={[85.11, 274.04, -16.87]}
                            rotation={[-0.14, -0.03, 0.47]}
                            scale={0.29}>
                            <mesh
                                name="lightbulb"
                                geometry={nodes.lightbulb.geometry}
                                material={materials["lightbulb Material"]}
                                castShadow
                                receiveShadow
                                position={[4.65, 39.87, 1.24]}
                                rotation={[0, 0, 0]}
                                scale={1.06}
                            />
                            <mesh
                                name="Cylinder 3"
                                geometry={nodes["Cylinder 3"].geometry}
                                material={materials.cutlery}
                                castShadow
                                receiveShadow
                                position={[-83.01, 297.77, -0.82]}
                                rotation={[0, 0, -1.6]}
                                scale={[0.73, 0.21, 0.73]}
                            />
                            <mesh
                                name="Cylinder 2"
                                geometry={nodes["Cylinder 2"].geometry}
                                material={materials.cutlery}
                                castShadow
                                receiveShadow
                                position={[-176.01, 300.6, -0.82]}
                                rotation={[0, 0, -1.6]}
                                scale={[0.41, 0.16, 0.41]}
                            />
                            <mesh
                                name="small"
                                geometry={nodes.small.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[0, 347.89, 0]}
                                scale={0.88}
                            />
                            <mesh
                                name="cover up"
                                geometry={nodes["cover up"].geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[0, 242.93, 0]}
                                scale={1.66}
                            />
                            <mesh
                                name="big"
                                geometry={nodes.big.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[0, 35.24, 0]}
                                scale={2.28}
                            />
                        </group>
                        <group
                            name="piece union 3"
                            position={[-30.8, 318.47, -27.58]}
                            rotation={[-0.14, -0.03, -0.53]}
                            scale={0.31}>
                            <mesh
                                name="cylinder"
                                geometry={nodes.cylinder.geometry}
                                material={materials.cutlery}
                                castShadow
                                receiveShadow
                                position={[-1.84, 47.74, -0.82]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[-0.28, 1.63, 0.28]}
                            />
                            <mesh
                                name="cylinder1"
                                geometry={nodes.cylinder1.geometry}
                                material={materials.cutlery}
                                castShadow
                                receiveShadow
                                position={[-49.75, -46.9, -0.82]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[-0.28, 1.63, 0.28]}
                            />
                            <mesh
                                name="cylinder2"
                                geometry={nodes.cylinder2.geometry}
                                material={materials.cutlery}
                                castShadow
                                receiveShadow
                                position={[50.2, -46.9, 0.82]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[-0.28, 1.63, 0.28]}
                            />
                            <mesh
                                name="base01"
                                geometry={nodes.base01.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-5.4, 66.06, -33.93]}
                                rotation={[0, 0, 0]}
                            />
                            <mesh
                                name="base02"
                                geometry={nodes.base02.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-5.4, 66.06, 25.09]}
                                rotation={[0, 0, 0]}
                            />
                        </group>
                        <group
                            name="piece union 2"
                            position={[-223.9, 89.06, -2.52]}
                            rotation={[-0.14, -0.03, 0.48]}
                            scale={0.31}>
                            <mesh
                                name="cylinder3"
                                geometry={nodes.cylinder3.geometry}
                                material={materials.cutlery}
                                castShadow
                                receiveShadow
                                position={[-1.84, 47.74, -0.82]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[-0.28, 1.63, 0.28]}
                            />
                            <mesh
                                name="cylinder4"
                                geometry={nodes.cylinder4.geometry}
                                material={materials.cutlery}
                                castShadow
                                receiveShadow
                                position={[-49.75, -46.9, -0.82]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[-0.28, 1.63, 0.28]}
                            />
                            <mesh
                                name="cylinder5"
                                geometry={nodes.cylinder5.geometry}
                                material={materials.cutlery}
                                castShadow
                                receiveShadow
                                position={[50.2, -46.9, 0.82]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[-0.28, 1.63, 0.28]}
                            />
                            <mesh
                                name="base011"
                                geometry={nodes.base011.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-5.4, 66.06, -33.93]}
                                rotation={[0, 0, 0]}
                            />
                            <mesh
                                name="base021"
                                geometry={nodes.base021.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-5.4, 66.06, 25.09]}
                                rotation={[0, 0, 0]}
                            />
                        </group>
                        <group
                            name="piece union"
                            position={[-140.53, -192.6, -0.41]}
                            scale={0.31}>
                            <mesh
                                name="cylinder6"
                                geometry={nodes.cylinder6.geometry}
                                material={materials.cutlery}
                                castShadow
                                receiveShadow
                                position={[-1.84, 47.74, -0.82]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[-0.28, 1.63, 0.28]}
                            />
                            <mesh
                                name="cylinder7"
                                geometry={nodes.cylinder7.geometry}
                                material={materials.cutlery}
                                castShadow
                                receiveShadow
                                position={[-49.75, -46.9, -0.82]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[-0.28, 1.63, 0.28]}
                            />
                            <mesh
                                name="cylinder8"
                                geometry={nodes.cylinder8.geometry}
                                material={materials.cutlery}
                                castShadow
                                receiveShadow
                                position={[50.2, -46.9, 0.82]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[-0.28, 1.63, 0.28]}
                            />
                            <mesh
                                name="base012"
                                geometry={nodes.base012.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-5.4, 66.06, -33.93]}
                                rotation={[0, 0, 0]}
                            />
                            <mesh
                                name="base022"
                                geometry={nodes.base022.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-5.4, 66.06, 25.09]}
                                rotation={[0, 0, 0]}
                            />
                        </group>
                        <group
                            name="cylinders_up"
                            position={[-114.62, 191.19, -12.71]}
                            rotation={[-0.14, -0.03, -0.9]}
                            scale={0.31}>
                            <mesh
                                name="cylinder9"
                                geometry={nodes.cylinder9.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-76.57, -21.06, -13.23]}
                                rotation={[0, 0, 0.2]}
                                scale={[0.41, 0.56, 0.41]}
                            />
                            <mesh
                                name="cylinder10"
                                geometry={nodes.cylinder10.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-76.57, -21.06, 13.77]}
                                rotation={[0, 0, 0.2]}
                                scale={[0.41, 0.56, 0.41]}
                            />
                            <mesh
                                name="cylinder11"
                                geometry={nodes.cylinder11.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-19.61, -4, -13.23]}
                                rotation={[0, 0, 0.2]}
                                scale={[0.41, 0.56, 0.41]}
                            />
                            <mesh
                                name="cylinder12"
                                geometry={nodes.cylinder12.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-19.61, -4, 13.77]}
                                rotation={[0, 0, 0.2]}
                                scale={[0.41, 0.56, 0.41]}
                            />
                        </group>
                        <group
                            name="cylinders_down"
                            position={[-184.08, -62.96, 8.39]}
                            scale={0.31}>
                            <mesh
                                name="cylinder13"
                                geometry={nodes.cylinder13.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[18.93, 5.14, -41.72]}
                                rotation={[0, 0, 0.27]}
                                scale={[0.41, 0.56, 0.41]}
                            />
                            <mesh
                                name="cylinder14"
                                geometry={nodes.cylinder14.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-21.19, -5.76, -41.72]}
                                rotation={[0, 0, 0.27]}
                                scale={[0.41, 0.56, 0.41]}
                            />
                            <mesh
                                name="cylinder15"
                                geometry={nodes.cylinder15.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[18.93, 5.14, -13.77]}
                                rotation={[0, 0, 0.27]}
                                scale={[0.41, 0.56, 0.41]}
                            />
                            <mesh
                                name="cylinder16"
                                geometry={nodes.cylinder16.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-21.19, -5.76, -13.77]}
                                rotation={[0, 0, 0.27]}
                                scale={[0.41, 0.56, 0.41]}
                            />
                        </group>
                        <mesh
                            name="cylinder_small"
                            geometry={nodes.cylinder_small.geometry}
                            material={materials.lines}
                            castShadow
                            receiveShadow
                            position={[-149.16, -207.12, -0.24]}
                            scale={0.22}
                        />
                        <mesh
                            name="cylinder_big"
                            geometry={nodes.cylinder_big.geometry}
                            material={materials.lines}
                            castShadow
                            receiveShadow
                            position={[-149.16, -232.8, -0.24]}
                            scale={0.31}
                        />
                        <mesh
                            name="base"
                            geometry={nodes.base.geometry}
                            material={materials.lines}
                            castShadow
                            receiveShadow
                            position={[-100.31, -253.39, 0]}
                            scale={0.31}
                        />
                    </group>
                    <animated.group
                        name="Group1"
                        position={[-147.99, 120.98, 30.41]}
                        rotation={cameraRotation.rotation}>
                        <group
                            name="camera_body"
                            position={[1.52, -7.31, 15.83]}
                            rotation={[0, -0.02, 0]}>
                            <group
                                name="lens"
                                position={[0.15, -8.29, 15.48]}
                                rotation={[0.32, 0.07, -0.4]}
                                scale={0.49}>
                                <mesh
                                    name="Cylinder 21"
                                    geometry={nodes["Cylinder 21"].geometry}
                                    material={materials.darkblue}
                                    castShadow
                                    receiveShadow
                                    position={[0, 0.15, -1.17]}
                                    rotation={[1.69, 0, 0]}
                                    scale={[0.38, 0.17, 0.38]}
                                />
                                <mesh
                                    name="Cylinder2"
                                    geometry={nodes.Cylinder2.geometry}
                                    material={materials[""]}
                                    castShadow
                                    receiveShadow
                                    position={[0, 0, 0.02]}
                                    rotation={[1.69, 0, 0]}
                                    scale={[0.46, 0.21, 0.46]}
                                />
                            </group>
                            <mesh
                                name="bodycamera"
                                geometry={nodes.bodycamera.geometry}
                                material={materials.grey}
                                castShadow
                                receiveShadow
                                position={[0, 0, -0.52]}
                                rotation={[0.44, 0.02, -0.4]}
                                scale={0.22}
                            />
                        </group>
                    </animated.group>
                    <group
                        name="Security cam"
                        position={[-152.05, 103.41, 21.49]}
                        scale={0.2}>
                        <mesh
                            name="circle"
                            geometry={nodes.circle.geometry}
                            material={materials.grey}
                            castShadow
                            receiveShadow
                            position={[0.42, 78.81, 9.72]}
                        />
                        <mesh
                            name="Cube 33"
                            geometry={nodes["Cube 33"].geometry}
                            material={materials.grey}
                            castShadow
                            receiveShadow
                            position={[0, 80.03, 5.05]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={[1.61, 1.61, 27.65]}
                        />
                        <mesh
                            name="Cube 27"
                            geometry={nodes["Cube 27"].geometry}
                            material={materials.grey}
                            castShadow
                            receiveShadow
                            position={[11.93, 86.77, 41.28]}
                            rotation={[-0.06, -1.23, -1.35]}
                            scale={1.73}
                        />
                    </group>
                    <group
                        name="videogamecontroller"
                        position={[135.75, -79.95, 235.69]}
                        rotation={[-Math.PI / 2, 0, -2.13]}
                        scale={0.03}>
                        <mesh
                            name="topfrontbuttons"
                            geometry={nodes.topfrontbuttons.geometry}
                            material={nodes.topfrontbuttons.material}
                            castShadow
                            receiveShadow
                            position={[0, -3.06, -8.65]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={12.89}
                        />
                        <mesh
                            name="bottomcase"
                            geometry={nodes.bottomcase.geometry}
                            material={nodes.bottomcase.material}
                            castShadow
                            receiveShadow
                            position={[0.06, -4.7, -5.02]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={12.89}
                        />
                        <mesh
                            name="light"
                            geometry={nodes.light.geometry}
                            material={nodes.light.material}
                            castShadow
                            receiveShadow
                            position={[0, 10.91, -9.21]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={[12.89, 12.01, 13.63]}
                        />
                        <mesh
                            name="centerpiece"
                            geometry={nodes.centerpiece.geometry}
                            material={nodes.centerpiece.material}
                            castShadow
                            receiveShadow
                            position={[0, -4.21, -5.76]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={12.89}
                        />
                        <mesh
                            name="cross"
                            geometry={nodes.cross.geometry}
                            material={nodes.cross.material}
                            castShadow
                            receiveShadow
                            position={[-0.05, 55.66, 55.04]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={65.38}
                        />
                        <mesh
                            name="joysticks"
                            geometry={nodes.joysticks.geometry}
                            material={nodes.joysticks.material}
                            castShadow
                            receiveShadow
                            position={[0, -3.06, 27.76]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={12.89}
                        />
                        <mesh
                            name="circlebuttons"
                            geometry={nodes.circlebuttons.geometry}
                            material={nodes.circlebuttons.material}
                            castShadow
                            receiveShadow
                            position={[249.16, 53.75, 113.31]}
                            rotation={[Math.PI / 2, Math.PI / 2, 0]}
                            scale={18.03}
                        />
                        <mesh
                            name="sidepieces"
                            geometry={nodes.sidepieces.geometry}
                            material={nodes.sidepieces.material}
                            castShadow
                            receiveShadow
                            position={[0, -3.06, -5.83]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={12.89}
                        />
                        <mesh
                            name="selectbutton"
                            geometry={nodes.selectbutton.geometry}
                            material={nodes.selectbutton.material}
                            castShadow
                            receiveShadow
                            position={[0.06, 2.44, -7.61]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={12.89}
                        />
                        <mesh
                            name="frontlittlebuttons"
                            geometry={nodes.frontlittlebuttons.geometry}
                            material={nodes.frontlittlebuttons.material}
                            castShadow
                            receiveShadow
                            position={[0, -3.06, -5.83]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={12.89}
                        />
                        <mesh
                            name="backbutton"
                            geometry={nodes.backbutton.geometry}
                            material={nodes.backbutton.material}
                            castShadow
                            receiveShadow
                            position={[0, -5.57, -33.44]}
                            rotation={[0.12, -Math.PI / 2, 0]}
                            scale={12.89}
                        />
                        <group
                            name="arrowdetails"
                            position={[-250.06, 114.67, 133.54]}
                            scale={0.65}>
                            <mesh
                                name="Triangle 2"
                                geometry={nodes["Triangle 2"].geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[1.4, -77.29, 0]}
                                rotation={[0, 0, Math.PI]}
                                scale={[0.16, 0.09, 0.16]}
                            />
                            <mesh
                                name="Triangle 4"
                                geometry={nodes["Triangle 4"].geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-76.32, -2.76, -1.59]}
                                rotation={[0, 0, Math.PI / 2]}
                                scale={[0.16, 0.11, 0.16]}
                            />
                            <mesh
                                name="Triangle 3"
                                geometry={nodes["Triangle 3"].geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[76.32, -2.76, -1.59]}
                                rotation={[0, 0, -Math.PI / 2]}
                                scale={[0.16, 0.11, 0.16]}
                            />
                            <mesh
                                name="Triangle"
                                geometry={nodes.Triangle.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[1.79, 76.14, -0.84]}
                                scale={[0.16, 0.11, 0.16]}
                            />
                        </group>
                        <group
                            name="details"
                            position={[247.48, 139.52, 131.05]}
                            scale={0.65}>
                            <group
                                name="cross1"
                                position={[2.93, -130.65, -0.01]}>
                                <mesh
                                    name="Cube 28"
                                    geometry={nodes["Cube 28"].geometry}
                                    material={materials["Cube 28 Material"]}
                                    castShadow
                                    receiveShadow
                                    rotation={[0, -0.02, 0.7]}
                                    scale={[1.05, 1.04, 1]}
                                />
                                <mesh
                                    name="Cube5"
                                    geometry={nodes.Cube5.geometry}
                                    material={materials["Cube5 Material"]}
                                    castShadow
                                    receiveShadow
                                    rotation={[0, -0.02, -0.7]}
                                    scale={[1.05, 1.04, 1]}
                                />
                            </group>
                            <group
                                name="cirlce"
                                position={[87.12, -45.45, -0.98]}
                                rotation={[-0.05, 0, 0]}
                                scale={0.9}>
                                <mesh
                                    name="Cylinder3"
                                    geometry={nodes.Cylinder3.geometry}
                                    material={materials["Cylinder3 Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[6.04, 3.48, 0.18]}
                                    rotation={[1.62, -Math.PI / 4, 0]}
                                    scale={0.66}
                                />
                            </group>
                            <group
                                name="quad"
                                position={[-94.7, -45.45, -0.98]}
                                rotation={[-0.05, 0, 0]}
                                scale={1}>
                                <mesh
                                    name="Cylinder4"
                                    geometry={nodes.Cylinder4.geometry}
                                    material={materials["Cylinder4 Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[6.04, 3.48, 0.18]}
                                    rotation={[1.62, -Math.PI / 4, 0]}
                                    scale={0.66}
                                />
                            </group>
                            <group
                                name="triangle"
                                position={[-3.44, 43, 0.29]}
                                rotation={[-0.07, 0, 0]}
                                scale={1}>
                                <mesh
                                    name="Cylinder5"
                                    geometry={nodes.Cylinder5.geometry}
                                    material={materials["Cylinder5 Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[6.04, 3.48, 0.18]}
                                    rotation={[1.62, -Math.PI / 3, 0]}
                                    scale={0.66}
                                />
                            </group>
                        </group>
                    </group>
                    <group
                        name="Headphones"
                        position={[93.2, -72.13, 237.24]}
                        scale={0.25}>
                        <mesh
                            name="Cylinder 22"
                            geometry={nodes["Cylinder 22"].geometry}
                            material={materials.lines}
                            castShadow
                            receiveShadow
                            position={[-73.69, 3.82, 9.1]}
                            rotation={[0, 0, 0.26]}
                            scale={1}
                        />
                        <mesh
                            name="Cylinder6"
                            geometry={nodes.Cylinder6.geometry}
                            material={materials.lines}
                            castShadow
                            receiveShadow
                            position={[74.12, 3.72, 9.1]}
                            rotation={[0, 0, -0.17]}
                            scale={1}
                        />
                        <mesh
                            name="Torus"
                            geometry={nodes.Torus.geometry}
                            material={materials.Walls}
                            castShadow
                            receiveShadow
                            position={[0, 16.64, 8.26]}
                            rotation={[0, 0, -Math.PI / 2]}
                            scale={1}
                        />
                        <group
                            name="l"
                            position={[-55.4, -17.03, 6.43]}
                            rotation={[Math.PI / 2, -1.54, -Math.PI / 2]}
                            scale={0.82}>
                            <mesh
                                name="Rectangle 32"
                                geometry={nodes["Rectangle 32"].geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-1.2, -0.12, 15.36]}
                            />
                            <mesh
                                name="Rectangle 22"
                                geometry={nodes["Rectangle 22"].geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-1.2, -0.12, 8.51]}
                            />
                            <mesh
                                name="Cube6"
                                geometry={nodes.Cube6.geometry}
                                material={materials.Walls}
                                castShadow
                                receiveShadow
                                position={[0, 0, -7.36]}
                            />
                        </group>
                        <group
                            name="r"
                            position={[55.37, -16.5, 6.43]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={0.82}>
                            <mesh
                                name="Rectangle 33"
                                geometry={nodes["Rectangle 33"].geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-1.2, -0.12, 15.36]}
                            />
                            <mesh
                                name="Rectangle 23"
                                geometry={nodes["Rectangle 23"].geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[-1.2, -0.12, 8.51]}
                            />
                            <mesh
                                name="Cube7"
                                geometry={nodes.Cube7.geometry}
                                material={materials.Walls}
                                castShadow
                                receiveShadow
                                position={[0, 0, -7.36]}
                            />
                        </group>
                    </group>
                    <group
                        name="Headphone"
                        position={[92.48, -85.87, 231.75]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.13}>
                        <mesh
                            name="Body1"
                            geometry={nodes.Body1.geometry}
                            material={nodes.Body1.material}
                            castShadow
                            receiveShadow
                            rotation={[0, 0, 0]}
                            scale={10}
                        />
                    </group>
                    <group
                        name="keyboard"
                        position={[117.51, -90.26, 154.64]}
                        rotation={[0, -Math.PI / 2, 0]}
                        scale={27.48}>
                        <group name="Scene">
                            <mesh
                                name="Case"
                                geometry={nodes.Case.geometry}
                                material={nodes.Case.material}
                                castShadow
                                receiveShadow
                            />
                            <mesh
                                name="Keyboard_cable"
                                geometry={nodes.Keyboard_cable.geometry}
                                material={nodes.Keyboard_cable.material}
                                castShadow
                                receiveShadow
                            />
                            <mesh
                                name="Keycaps"
                                geometry={nodes.Keycaps.geometry}
                                material={nodes.Keycaps.material}
                                castShadow
                                receiveShadow
                            />
                        </group>
                    </group>
                    <animated.group
                        name="basketball"
                        position={basketball.position}
                        rotation={[0, 0, -Math.PI]}
                        scale={[-0.12, 0.12, 0.12]}>
                        <mesh
                            name="ball"
                            geometry={nodes.ball.geometry}
                            material={materials.orange}
                            castShadow
                            receiveShadow
                            position={[0.71, 0.57, 2.89]}
                            scale={1.02}
                        />
                        <group name="lines" position={[-1.87, 0.95, 0]}>
                            <mesh
                                name="line_horizontal"
                                geometry={nodes.line_horizontal.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[1.87, -0.93, 3.91]}
                                rotation={[0, 0, 0]}
                                scale={[3.82, 0.05, 3.82]}
                            />
                            <mesh
                                name="line_vertical"
                                geometry={nodes.line_vertical.geometry}
                                material={materials.lines}
                                castShadow
                                receiveShadow
                                position={[1.47, -0.95, 3.93]}
                                rotation={[0, 0.01, -1.56]}
                                scale={[3.82, 0.05, 3.82]}
                            />
                            <group
                                name="line_down_right"
                                position={[-58.54, -50.3, 0.29]}
                                rotation={[0, 0, -Math.PI]}
                                scale={[1.05, 1.04, 1]}>
                                <mesh
                                    name="line_down_right1"
                                    geometry={nodes.line_down_right1.geometry}
                                    material={
                                        materials["line_down_right1 Material"]
                                    }
                                    castShadow
                                    receiveShadow
                                    position={[-41.75, -47.36, 156.91]}
                                    rotation={[-0.07, 0, -0.21]}
                                    scale={[0.07, 0.12, 0.06]}
                                />
                            </group>
                            <group
                                name="line_up_right"
                                position={[-58.54, 49.13, 0.29]}
                                scale={[-1.05, 1, 1]}>
                                <mesh
                                    name="line_up_right1"
                                    geometry={nodes.line_up_right1.geometry}
                                    material={
                                        materials["line_up_right1 Material"]
                                    }
                                    castShadow
                                    receiveShadow
                                    position={[-41.75, -47.36, 156.91]}
                                    rotation={[-0.07, 0, -0.21]}
                                    scale={[0.07, 0.12, 0.06]}
                                />
                            </group>
                            <group
                                name="line_down_left"
                                position={[60.94, -48.69, -0.44]}
                                rotation={[0, 0, -Math.PI]}
                                scale={[-1, 1, 1.01]}>
                                <mesh
                                    name="line_down_left1"
                                    geometry={nodes.line_down_left1.geometry}
                                    material={
                                        materials["line_down_left1 Material"]
                                    }
                                    castShadow
                                    receiveShadow
                                    position={[-41.75, -47.36, 156.91]}
                                    rotation={[-0.07, 0, -0.21]}
                                    scale={[0.07, 0.12, 0.06]}
                                />
                            </group>
                            <group
                                name="line_up_left"
                                position={[59.32, 49.13, -0.44]}>
                                <mesh
                                    name="line_up_left1"
                                    geometry={nodes.line_up_left1.geometry}
                                    material={materials.lines}
                                    castShadow
                                    receiveShadow
                                    position={[-41.75, -47.36, 156.91]}
                                    rotation={[-0.07, 0, -0.21]}
                                    scale={[0.07, 0.12, 0.06]}
                                />
                            </group>
                        </group>
                    </animated.group>
                    <group
                        name="officechair"
                        position={[30.88, -110.07, 141.6]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={[0.27, 0.24, 0.24]}>
                        <mesh
                            name="seat"
                            geometry={nodes.seat.geometry}
                            material={nodes.seat.material}
                            castShadow
                            receiveShadow
                            position={[-2.06, -186.76, -35.17]}
                            scale={5.19}
                        />
                        <mesh
                            name="cover under seat"
                            geometry={nodes["cover under seat"].geometry}
                            material={nodes["cover under seat"].material}
                            castShadow
                            receiveShadow
                            position={[-2.06, -186.76, -35.17]}
                            scale={5.19}
                        />
                        <mesh
                            name="back"
                            geometry={nodes.back.geometry}
                            material={nodes.back.material}
                            castShadow
                            receiveShadow
                            position={[-2.06, -186.76, -35.17]}
                            scale={5.19}
                        />
                        <mesh
                            name="back top"
                            geometry={nodes["back top"].geometry}
                            material={nodes["back top"].material}
                            castShadow
                            receiveShadow
                            position={[-2.06, -186.76, -35.17]}
                            scale={5.19}
                        />
                        <group
                            name="armrest left"
                            position={[115.92, -15.79, -4.24]}
                            scale={0.08}>
                            <mesh
                                name="armrest_cilinder_side_L"
                                geometry={
                                    nodes.armrest_cilinder_side_L.geometry
                                }
                                material={
                                    nodes.armrest_cilinder_side_L.material
                                }
                                castShadow
                                receiveShadow
                                position={[-1447.01, -2096.91, -379.44]}
                                scale={63.64}
                            />
                            <mesh
                                name="armrest_L"
                                geometry={nodes.armrest_L.geometry}
                                material={nodes.armrest_L.material}
                                castShadow
                                receiveShadow
                                position={[-1447.01, -2096.91, -379.44]}
                                scale={63.64}
                            />
                            <mesh
                                name="armrest_Cylinder_L"
                                geometry={nodes.armrest_Cylinder_L.geometry}
                                material={nodes.armrest_Cylinder_L.material}
                                castShadow
                                receiveShadow
                                position={[-1447.01, -2096.91, -379.44]}
                                scale={63.64}
                            />
                            <mesh
                                name="armrest_Cylinder_cover_up_L"
                                geometry={
                                    nodes.armrest_Cylinder_cover_up_L.geometry
                                }
                                material={
                                    nodes.armrest_Cylinder_cover_up_L.material
                                }
                                castShadow
                                receiveShadow
                                position={[-1447.01, -2096.91, -379.44]}
                                scale={63.64}
                            />
                            <mesh
                                name="armrest_Cylinder_cover_down_L"
                                geometry={
                                    nodes.armrest_Cylinder_cover_down_L.geometry
                                }
                                material={
                                    nodes.armrest_Cylinder_cover_down_L.material
                                }
                                castShadow
                                receiveShadow
                                position={[-1447.01, -2096.91, -379.44]}
                                scale={63.64}
                            />
                        </group>
                        <group
                            name="armrest right"
                            position={[-120.04, -15.79, -4.24]}
                            scale={0.08}>
                            <mesh
                                name="armrest_cilinder_side_R"
                                geometry={
                                    nodes.armrest_cilinder_side_R.geometry
                                }
                                material={
                                    nodes.armrest_cilinder_side_R.material
                                }
                                castShadow
                                receiveShadow
                                position={[1447.01, -2096.91, -379.44]}
                                scale={63.64}
                            />
                            <mesh
                                name="armrest_R"
                                geometry={nodes.armrest_R.geometry}
                                material={nodes.armrest_R.material}
                                castShadow
                                receiveShadow
                                position={[1447.01, -2096.91, -379.44]}
                                scale={63.64}
                            />
                            <mesh
                                name="armrest_Cylinder_R"
                                geometry={nodes.armrest_Cylinder_R.geometry}
                                material={nodes.armrest_Cylinder_R.material}
                                castShadow
                                receiveShadow
                                position={[1447.01, -2096.91, -379.44]}
                                scale={63.64}
                            />
                            <mesh
                                name="armrest_Cylinder_cover_up_R"
                                geometry={
                                    nodes.armrest_Cylinder_cover_up_R.geometry
                                }
                                material={
                                    nodes.armrest_Cylinder_cover_up_R.material
                                }
                                castShadow
                                receiveShadow
                                position={[1447.01, -2096.91, -379.44]}
                                scale={63.64}
                            />
                            <mesh
                                name="armrest_Cylinder_cover_down_R"
                                geometry={
                                    nodes.armrest_Cylinder_cover_down_R.geometry
                                }
                                material={
                                    nodes.armrest_Cylinder_cover_down_R.material
                                }
                                castShadow
                                receiveShadow
                                position={[1447.01, -2096.91, -379.44]}
                                scale={63.64}
                            />
                        </group>
                        <mesh
                            name="Cylinder_in"
                            geometry={nodes.Cylinder_in.geometry}
                            material={nodes.Cylinder_in.material}
                            castShadow
                            receiveShadow
                            position={[-2.06, -186.76, -35.17]}
                            scale={5.19}
                        />
                        <mesh
                            name="Cylinder_out"
                            geometry={nodes.Cylinder_out.geometry}
                            material={nodes.Cylinder_out.material}
                            castShadow
                            receiveShadow
                            position={[-2.06, -186.76, -35.17]}
                            scale={5.19}
                        />
                        <mesh
                            name="Cylinder_cover"
                            geometry={nodes.Cylinder_cover.geometry}
                            material={nodes.Cylinder_cover.material}
                            castShadow
                            receiveShadow
                            position={[-2.06, -186.76, -35.17]}
                            scale={5.19}
                        />
                        <mesh
                            name="sphere"
                            geometry={nodes.sphere.geometry}
                            material={nodes.sphere.material}
                            castShadow
                            receiveShadow
                            position={[-2.06, -186.76, -35.17]}
                            scale={5.19}
                        />
                        <mesh
                            name="Cylinder_down"
                            geometry={nodes.Cylinder_down.geometry}
                            material={nodes.Cylinder_down.material}
                            castShadow
                            receiveShadow
                            position={[-2.06, -186.76, -35.17]}
                            scale={5.19}
                        />
                        <group
                            name="chair legs"
                            position={[0, -232.94, 0]}
                            scale={0.08}>
                            <mesh
                                name="chair_leg"
                                geometry={nodes.chair_leg.geometry}
                                material={nodes.chair_leg.material}
                                castShadow
                                receiveShadow
                                position={[-25.29, 566.41, -431.4]}
                                scale={63.64}
                            />
                            <mesh
                                name="chair_leg1"
                                geometry={nodes.chair_leg1.geometry}
                                material={nodes.chair_leg1.material}
                                castShadow
                                receiveShadow
                                position={[-25.29, 566.41, -431.4]}
                                scale={63.64}
                            />
                            <mesh
                                name="chair_leg2"
                                geometry={nodes.chair_leg2.geometry}
                                material={nodes.chair_leg2.material}
                                castShadow
                                receiveShadow
                                position={[-25.29, 566.41, -431.4]}
                                scale={63.64}
                            />
                            <mesh
                                name="chair_leg3"
                                geometry={nodes.chair_leg3.geometry}
                                material={nodes.chair_leg3.material}
                                castShadow
                                receiveShadow
                                position={[-25.29, 566.41, -431.4]}
                                scale={63.64}
                            />
                            <mesh
                                name="chair_leg4"
                                geometry={nodes.chair_leg4.geometry}
                                material={nodes.chair_leg4.material}
                                castShadow
                                receiveShadow
                                position={[-25.29, 566.41, -431.4]}
                                scale={63.64}
                            />
                            <group name="wheels" position={[0, -115.38, 0]}>
                                <mesh
                                    name="wheel"
                                    geometry={nodes.wheel.geometry}
                                    material={nodes.wheel.material}
                                    castShadow
                                    receiveShadow
                                    position={[-25.29, 681.79, -431.4]}
                                    scale={63.64}
                                />
                                <mesh
                                    name="wheel1"
                                    geometry={nodes.wheel1.geometry}
                                    material={nodes.wheel1.material}
                                    castShadow
                                    receiveShadow
                                    position={[-25.29, 681.79, -431.4]}
                                    scale={63.64}
                                />
                                <mesh
                                    name="wheel2"
                                    geometry={nodes.wheel2.geometry}
                                    material={nodes.wheel2.material}
                                    castShadow
                                    receiveShadow
                                    position={[-25.29, 681.79, -431.4]}
                                    scale={63.64}
                                />
                                <mesh
                                    name="wheel3"
                                    geometry={nodes.wheel3.geometry}
                                    material={nodes.wheel3.material}
                                    castShadow
                                    receiveShadow
                                    position={[-25.29, 681.79, -431.4]}
                                    scale={63.64}
                                />
                                <mesh
                                    name="wheel4"
                                    geometry={nodes.wheel4.geometry}
                                    material={nodes.wheel4.material}
                                    castShadow
                                    receiveShadow
                                    position={[-25.29, 681.79, -431.4]}
                                    scale={63.64}
                                />
                            </group>
                        </group>
                        <group
                            name="lever"
                            position={[-53.16, -109.28, -22.02]}
                            scale={0.08}>
                            <mesh
                                name="lever1"
                                geometry={nodes.lever1.geometry}
                                material={nodes.lever1.material}
                                castShadow
                                receiveShadow
                                position={[626.68, -950.2, -161.36]}
                                scale={63.64}
                            />
                            <mesh
                                name="lever_top"
                                geometry={nodes.lever_top.geometry}
                                material={nodes.lever_top.material}
                                castShadow
                                receiveShadow
                                position={[626.68, -950.2, -161.36]}
                                scale={63.64}
                            />
                        </group>
                    </group>
                    <group
                        name="desk_modern"
                        position={[116.6, -174.91, 143.16]}
                        rotation={[0, -Math.PI / 2, 0]}
                        scale={[0.37, 0.32, 0.33]}>
                        <mesh
                            name="Ellipse 25"
                            geometry={nodes["Ellipse 25"].geometry}
                            material={materials.hanger}
                            castShadow
                            receiveShadow
                            position={[184.95, 133.69, 174.46]}
                            rotation={[0, 0, -Math.PI / 2]}
                            scale={[2.47, 2.55, 2.47]}
                        />
                        <mesh
                            name="Ellipse7"
                            geometry={nodes.Ellipse7.geometry}
                            material={materials.light_grey}
                            castShadow
                            receiveShadow
                            position={[184.95, 133.69, 173.89]}
                            rotation={[0, 0, -Math.PI / 2]}
                            scale={[0.87, 0.89, 0.87]}
                        />
                        <mesh
                            name="Ellipse 26"
                            geometry={nodes["Ellipse 26"].geometry}
                            material={materials.hanger}
                            castShadow
                            receiveShadow
                            position={[-185.65, 133.69, 174.46]}
                            rotation={[0, 0, -Math.PI / 2]}
                            scale={[2.47, 2.55, 2.47]}
                        />
                        <mesh
                            name="Ellipse8"
                            geometry={nodes.Ellipse8.geometry}
                            material={materials.light_grey}
                            castShadow
                            receiveShadow
                            position={[-185.65, 133.69, 173.89]}
                            rotation={[0, 0, -Math.PI / 2]}
                            scale={[0.87, 0.89, 0.87]}
                        />
                        <mesh
                            name="Ellipse 27"
                            geometry={nodes["Ellipse 27"].geometry}
                            material={materials.hanger}
                            castShadow
                            receiveShadow
                            position={[-0.41, 230.59, 174.46]}
                            rotation={[0, 0, -Math.PI / 2]}
                            scale={[2.47, 2.55, 2.47]}
                        />
                        <mesh
                            name="Ellipse9"
                            geometry={nodes.Ellipse9.geometry}
                            material={materials.light_grey}
                            castShadow
                            receiveShadow
                            position={[-0.41, 230.59, 173.89]}
                            rotation={[0, 0, -Math.PI / 2]}
                            scale={[0.87, 0.89, 0.87]}
                        />
                        <mesh
                            name="Cube 211"
                            geometry={nodes["Cube 211"].geometry}
                            material={materials.very_light_grey}
                            castShadow
                            receiveShadow
                            position={[-0.28, 230.29, 126.12]}
                            rotation={[0, 0, -Math.PI / 2]}
                            scale={[2.55, 3.46, 2]}
                        />
                        <mesh
                            name="Cube 20"
                            geometry={nodes["Cube 20"].geometry}
                            material={materials.very_light_grey}
                            castShadow
                            receiveShadow
                            position={[-223.55, 136.65, 158.96]}
                            scale={[2.61, 2.69, 0.47]}
                        />
                        <mesh
                            name="Cube 11"
                            geometry={nodes["Cube 11"].geometry}
                            material={materials.very_light_grey}
                            castShadow
                            receiveShadow
                            position={[222.64, 136.65, 158.96]}
                            scale={[2.61, 2.69, 0.47]}
                        />
                        <mesh
                            name="Cube 16"
                            geometry={nodes["Cube 16"].geometry}
                            material={materials.very_light_grey}
                            castShadow
                            receiveShadow
                            position={[-0.38, 230.29, 3.53]}
                            rotation={[0, 0, -Math.PI / 2]}
                            scale={[0.64, 2.68, 1.56]}
                        />
                        <mesh
                            name="Cube 17"
                            geometry={nodes["Cube 17"].geometry}
                            material={materials.very_light_grey}
                            castShadow
                            receiveShadow
                            position={[222.46, 135.12, -0.15]}
                            scale={[2.33, 1.94, 1.56]}
                        />
                        <mesh
                            name="Cube 191"
                            geometry={nodes["Cube 191"].geometry}
                            material={materials.very_light_grey}
                            castShadow
                            receiveShadow
                            position={[223.12, 5.81, -0.15]}
                            scale={[2.58, 1.33, 1.61]}
                        />
                        <mesh
                            name="Cube 18"
                            geometry={nodes["Cube 18"].geometry}
                            material={materials.very_light_grey}
                            castShadow
                            receiveShadow
                            position={[-223.12, 5.81, -0.15]}
                            scale={[2.58, 1.33, 1.61]}
                        />
                        <mesh
                            name="Cube 62"
                            geometry={nodes["Cube 62"].geometry}
                            material={materials.very_light_grey}
                            castShadow
                            receiveShadow
                            position={[-223.12, 135.12, -0.15]}
                            scale={[2.33, 1.94, 1.56]}
                        />
                        <mesh
                            name="Cube8"
                            geometry={nodes.Cube8.geometry}
                            material={materials.table}
                            castShadow
                            receiveShadow
                            position={[-1.06, 268.85, -0.15]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1.53, 1.9, 1.43]}
                        />
                    </group>
                    <directionalLight
                        name="Directional Light"
                        castShadow
                        intensity={0.7}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-near={-10000}
                        shadow-camera-far={100000}
                        shadow-camera-left={-1000}
                        shadow-camera-right={1000}
                        shadow-camera-top={1000}
                        shadow-camera-bottom={-1000}
                        position={[-139.59, 173.76, -28.37]}
                        scale={[1, 1, 1.8]}
                    />
                    <mesh
                        ref={floor}
                        name="Floor"
                        geometry={nodes.Floor.geometry}
                        material={materials.Walls}
                        castShadow
                        receiveShadow
                        position={[0, -174.91, 200]}
                        rotation={[Math.PI / 2, 0, Math.PI / 2]}
                        scale={1}
                        onPointerEnter={(e) => e.stopPropagation()}
                    />
                    <mesh
                        ref={wallBack}
                        name="Wall-back"
                        geometry={nodes["Wall-back"].geometry}
                        material={materials.Walls}
                        castShadow
                        receiveShadow
                        position={[200.63, -22, 200.67]}
                        rotation={[0, -Math.PI / 2, 0]}
                        onPointerEnter={(e) => e.stopPropagation()}
                    />
                    <mesh
                        ref={wallLeft}
                        name="Wall-left"
                        geometry={nodes["Wall-left"].geometry}
                        material={materials.Walls}
                        castShadow
                        receiveShadow
                        position={[0, -22.21, 0]}
                        onPointerEnter={(e) => e.stopPropagation()}
                    />
                    <OrthographicCamera
                        name="1"
                        makeDefault={false}
                        far={10000}
                        near={-50000}
                    />
                    <hemisphereLight
                        name="Default Ambient Light"
                        intensity={0.75}
                        color="#eaeaea"
                    />
                </scene>
            </group>
        </>
    );
}
