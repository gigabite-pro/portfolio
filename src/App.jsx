import { Suspense, createContext, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Loader } from "@react-three/drei";
import CustomLoader from "./CustomLoader";
import MusicButton from "./MusicButton";
import Tips from "./Tips";
import Spotify from "./Spotify";
import DarkModeToggleContainer from "./DarkModeToggleContainer";

export default function App() {
    const [colorMode, setColorMode] = useState("light");
    return (
        <>
            <Tips text={"Click outside the object to escape the camera mode"} />
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
                <Suspense fallback={<CustomLoader />}>
                    <Scene colorMode={colorMode} />
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
