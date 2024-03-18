import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Loader } from "@react-three/drei";
import CustomLoader from "./components/CustomLoader";
import MusicButton from "./components/MusicButton";
import Tips from "./components/Tips";
import Spotify from "./components/Spotify";
import DarkModeToggleContainer from "./components/DarkModeToggleContainer";

export default function App() {
    const [colorMode, setColorMode] = useState("light");
    const [loadState, setLoadState] = useState(false);
    return (
        <>
            <Tips
                typeOf={"app"}
                text={"Click outside the object to escape the camera mode"}
            />
            <Spotify />
            <Canvas
                className="r3f"
                style={{
                    background: colorMode === "dark" ? "#000" : "#f3f54c",
                }}
                gl={{ antialias: true }}
                shadows="soft"
                flat
                linear>
                <Suspense
                    fallback={<CustomLoader setLoadState={setLoadState} />}>
                    <Scene colorMode={colorMode} loadState={loadState} />
                </Suspense>
            </Canvas>
            <DarkModeToggleContainer
                colorMode={colorMode}
                setColorMode={setColorMode}
            />
            <MusicButton colorMode={colorMode} />
            <Loader />
        </>
    );
}
