import useSpline from "@splinetool/r3f-spline";
import {
    SpotLight,
    OrbitControls,
    OrthographicCamera,
} from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated, easings } from "@react-spring/three";
import TWEEN from "@tweenjs/tween.js";
import Guitar from "./components/Guitar";
import BrainstormingWall from "./components/BrainstormingWall";
import Iphone from "./components/Iphone";
import BigPlant from "./components/BigPlant";
import PhotoWall from "./components/PhotoWall";
import NikeShoeBox from "./components/NikeShoeBox";
import AirJordans from "./components/AirJordans";
import Computer from "./components/Computer";
import Clock from "./components/Clock";
import Carpet from "./components/Carpet";
import Window from "./components/Window";
import SmallPlant from "./components/SmallPlant";
import Books from "./components/Books";
import Lamp from "./components/Lamp";
import CameraMount from "./components/CameraMount";
import Controller from "./components/Controller";
import Headphones from "./components/Headphones";
import HeadphonesStand from "./components/HeadphonesStand";
import Keyboard from "./components/Keyboard";
import Chair from "./components/Chair";
import Desk from "./components/Desk";
import Floor from "./components/Floor";
import BackWall from "./components/BackWall";
import LeftWall from "./components/LeftWall";
import BehanceIcon from "./components/BehanceIcon";
import GithubIcon from "./components/GithubIcon";
import LinkedInIcon from "./components/LinkedInIcon";
import InstagramIcon from "./components/InstagramIcon";

export default function Scene({ ...props }) {
    const { nodes, materials } = useSpline(
        "https://prod.spline.design/ig-kI-qluHLlJuE7/scene.splinecode"
    );

    // Refs
    const floor = useRef();
    const wallBack = useRef();
    const wallLeft = useRef();
    const camera = useRef();
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
        from: {
            position: [-64.83, -120.02, 60.31],
            scale: [0.12, 0.12, 0.12],
        },
        to: [
            {
                position: [-64.83, -158.02, 60.31],
                scale: [0.13, 0.12, 0.13],
            },
            {
                position: [-64.83, -120.02, 60.31],
                scale: [0.12, 0.12, 0.12],
            },
        ],
        config: {
            mass: 5,
            tension: 170,
            friction: 10,
            duration: 500,
            easing: easings.easeOutSine,
        },
    });

    const leaves = useSpring({
        from: { scale: [0.35, 0.25, 0.25] },
        to: { scale: [0.32, 0.21, 0.2] },
        config: {
            duration: 2000,
            precision: 0.0001,
        },
        loop: { reverse: true },
    });

    // Camera Animations
    const [cameraMode, setCameraMode] = useState("default");

    useEffect(() => {
        controls.current.enabled = false;
        if (cameraMode === "default") {
            new TWEEN.Tween(controls.current.target)
                .to({
                    x: 0,
                    y: 0,
                    z: 0,
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();
            new TWEEN.Tween(camera.current.position)
                .to({
                    x: -547.71,
                    y: 200,
                    z: 830.4,
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();
            new TWEEN.Tween(camera.current.rotation)
                .to({
                    x: -0.16,
                    y: -0.78,
                    z: -0.12,
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();
            // change camera zoom
            new TWEEN.Tween({
                zoom: camera.current.zoom,
            })
                .to({
                    zoom: 1.3,
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate((obj) => {
                    camera.current.zoom = obj.zoom;
                    camera.current.updateProjectionMatrix();
                })
                .start()
                .onComplete(() => {
                    controls.current.enabled = true;
                });
        } else if (cameraMode === "computer") {
            new TWEEN.Tween(controls.current.target)
                .to({
                    x: 4.055963892076257,
                    y: 68.38626394556732,
                    z: 149.3635166303201,
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();
            new TWEEN.Tween(camera.current.position)
                .to({
                    x: -1005.5457842496605,
                    y: 80.35972472839464,
                    z: 156.6794435261729,
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();
            new TWEEN.Tween(camera.current.rotation)
                .to({
                    x: -1.4975418577107324,
                    y: -1.4780327978820598,
                    z: -1.497226681373114,
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();
            // change camera zoom
            new TWEEN.Tween({
                zoom: camera.current.zoom,
            })
                .to({
                    zoom: 6.7,
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate((obj) => {
                    camera.current.zoom = obj.zoom;
                    camera.current.updateProjectionMatrix();
                })
                .start();
        } else if (cameraMode === "brainstormingWall") {
            new TWEEN.Tween(controls.current.target)
                .to({
                    x: -290.694,
                    y: 114.094,
                    z: -20.182,
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();
            new TWEEN.Tween(camera.current.position)
                .to({
                    x: -107.159,
                    y: 148.54,
                    z: 977.153,
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();
            new TWEEN.Tween(camera.current.rotation)
                .to({
                    x: -0.133,
                    y: -0.016,
                    z: -0.002,
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();
            // change camera zoom
            new TWEEN.Tween({
                zoom: camera.current.zoom,
            })
                .to({
                    zoom: 11.2086,
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate((obj) => {
                    camera.current.zoom = obj.zoom;
                    camera.current.updateProjectionMatrix();
                })
                .start();
        }
    }, [cameraMode]);

    // Light target
    const lightRef = useRef();
    useFrame(() => {
        lightRef.current.target.position.lerp(
            new THREE.Vector3(-90, -180, 120),
            0.05
        );
        lightRef.current.target.updateMatrixWorld();
        TWEEN.update();
    });

    return (
        <>
            <OrbitControls ref={controls} />
            <color attach="background" args={["#fbdbf9"]} />
            <group {...props} position={[-200, 100, 0]}>
                <scene name="Scene 1">
                    <OrthographicCamera
                        ref={camera}
                        name="Camera"
                        makeDefault
                        zoom={0.1}
                        far={2000}
                        near={-100000}
                        up={[0, 1, 0]}
                        position={[-547.71, 200, 830.4]}
                        rotation={[-0.16, -0.78, -0.12]}
                    />
                    <BehanceIcon
                        nodes={nodes}
                        floor={floor}
                        wallBack={wallBack}
                        wallLeft={wallLeft}
                        cameraMode={cameraMode}
                    />
                    <GithubIcon
                        nodes={nodes}
                        floor={floor}
                        wallBack={wallBack}
                        wallLeft={wallLeft}
                        cameraMode={cameraMode}
                    />
                    <LinkedInIcon
                        nodes={nodes}
                        floor={floor}
                        wallBack={wallBack}
                        wallLeft={wallLeft}
                        cameraMode={cameraMode}
                    />
                    <InstagramIcon
                        nodes={nodes}
                        floor={floor}
                        wallBack={wallBack}
                        wallLeft={wallLeft}
                        cameraMode={cameraMode}
                    />
                    <Guitar nodes={nodes} materials={materials} />
                    <BrainstormingWall
                        nodes={nodes}
                        materials={materials}
                        floor={floor}
                        wallBack={wallBack}
                        wallLeft={wallLeft}
                        cameraMode={cameraMode}
                        setCameraMode={setCameraMode}
                    />
                    <Iphone nodes={nodes} materials={materials} />
                    <animated.mesh
                        name="Leaves"
                        geometry={nodes.Leaves.geometry}
                        material={materials.plant}
                        castShadow
                        receiveShadow
                        position={[107.18, -107.1, 338.21]}
                        scale={leaves.scale}
                    />
                    <BigPlant nodes={nodes} materials={materials} />
                    <PhotoWall nodes={nodes} materials={materials} />
                    <NikeShoeBox nodes={nodes} materials={materials} />
                    <AirJordans nodes={nodes} />
                    <Computer
                        nodes={nodes}
                        materials={materials}
                        floor={floor}
                        wallBack={wallBack}
                        wallLeft={wallLeft}
                        cameraMode={cameraMode}
                        setCameraMode={setCameraMode}
                    />
                    <Clock nodes={nodes} materials={materials} />
                    <Carpet nodes={nodes} materials={materials} />
                    <Window nodes={nodes} materials={materials} />
                    <SmallPlant nodes={nodes} materials={materials} />
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
                    <Books nodes={nodes} materials={materials} />
                    <Lamp nodes={nodes} materials={materials} />

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
                    <CameraMount nodes={nodes} materials={materials} />
                    <Controller nodes={nodes} materials={materials} />
                    <Headphones nodes={nodes} materials={materials} />
                    <HeadphonesStand nodes={nodes} materials={materials} />
                    <Keyboard nodes={nodes} materials={materials} />

                    <animated.group
                        name="basketball"
                        position={basketball.position}
                        rotation={[0, 0, -Math.PI]}
                        scale={basketball.scale}>
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
                    <Chair nodes={nodes} />
                    <Desk nodes={nodes} materials={materials} />

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
                    <Floor nodes={nodes} materials={materials} floor={floor} />
                    <BackWall
                        nodes={nodes}
                        materials={materials}
                        wallBack={wallBack}
                    />
                    <LeftWall
                        nodes={nodes}
                        materials={materials}
                        wallLeft={wallLeft}
                        camera={camera}
                        controls={controls}
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
