import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Loader } from "@react-three/drei";
import CustomLoader from "./CustomLoader";

export default function App() {
    return (
        <>
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
            <Loader />
        </>
    );
}
