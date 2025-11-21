import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import TWEEN from "@tweenjs/tween.js";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";

export default function HomeCanvas() {
    const computer = useGLTF("https://threejs-journey.com/resources/models/macbook_model.gltf");

    const navigate = useNavigate();
    const { gl, scene, camera } = useThree();
    const [pEnabled, setPEnabled] = useState(true);
    const controls = useRef();

    const [play] = useSound("./swish.wav", { volume: 0.3 });

    const animateCamera = () => {
        setPEnabled(false);
        play();
        document.querySelector(".btn").style.opacity = "0";
        new TWEEN.Tween(controls.current.target)
            .to({
                x: 0.02967,
                y: 0.6782,
                z: -0.1547,
            })
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();
        new TWEEN.Tween(camera.position)
            .to({
                x: 0.057,
                y: 0.692,
                z: 0.0837,
            })
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();
        new TWEEN.Tween(camera.rotation)
            .to({
                x: -0.0576,
                y: 0.1142,
                z: 0.0065,
            })
            .easing(TWEEN.Easing.Quadratic.Out)
            .start()
            .onComplete(() => {
                document.querySelector(".wrapper").style.opacity = "1";
                setTimeout(() => {
                    navigate("/app");
                }, 1000);
            });
    };

    useFrame(() => {
        TWEEN.update();
    });

    return (
        <>
            <Html onPointerEnter={() => {}} position={[-1, 1.56, -1.4]} rotation-x={-0.256}>
                <div className="wrapper"></div>
            </Html>
            <Environment preset="city" />
            <color args={["#87ceeb"]} attach="background" />
            <OrbitControls ref={controls} enabled={!pEnabled} />

            <PresentationControls enabled={pEnabled} global rotation={[0.13, 0.1, 0]} polar={[-0.4, 0.2]} azimuth={[-1, 0.75]} config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}>
                <Float>
                    <rectAreaLight width={2.5} height={1.65} intensity={65} color="white" rotation={[0.1, Math.PI, 0]} position={[0, 0.55, -1.15]} />
                    <primitive object={computer.scene} position-y={-1.2}>
                        <Html transform wrapperClass="htmlScreen" distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256}>
                            <button className="btn" onClick={() => animateCamera()}>
                                <span>START</span>
                            </button>
                        </Html>
                    </primitive>
                    <Text font="./bangers-v20-latin-regular.woff" fontSize={1} position={[2, 0.75, 0.75]} rotation-y={-1.25} maxWidth={2} textAlign="center" color={"rgb(30, 30, 30)"}>
                        Vaibhav Sharma
                    </Text>
                </Float>
            </PresentationControls>

            <ContactShadows position-y={-1.4} opacity={0.4} scale={6} blur={2.4} />
        </>
    );
}
