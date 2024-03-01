import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Loader } from "@react-three/drei";
import CustomLoader from "./CustomLoader";
import MusicButton from "./MusicButton";
import Tips from "./Tips";

export default function App() {
    return (
        <>
            <Tips text={"Click outside the object to escape the camera mode"} />
            <Canvas
                className="r3f"
                gl={{ antialias: true }}
                shadows="soft"
                flat
                linear>
                <Suspense fallback={<CustomLoader />}>
                    <Scene />
                </Suspense>
            </Canvas>
            <MusicButton />
            <Loader />
        </>
    );
}