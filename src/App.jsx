import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import CustomLoader from "./components/CustomLoader";
import MusicButton from "./components/MusicButton";
import Tips from "./components/Tips";
import Spotify from "./components/Spotify";
import DarkModeToggleContainer from "./components/DarkModeToggleContainer";
import MobileMenuBar from "./components/MobileMenuBar";

export default function App() {
    const [colorMode, setColorMode] = useState("light");
    const [sceneReady, setSceneReady] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
    const [activeMenuItem, setActiveMenuItem] = useState("default");

    useEffect(() => {
        if (!sceneReady) return;
        const timeout = setTimeout(() => setShowLoader(false), 800);
        return () => clearTimeout(timeout);
    }, [sceneReady]);

    return (
        <>
            <Tips typeOf={"app"} text={"Click outside the object to escape the camera mode"} />
            <Spotify />
            {showLoader && <CustomLoader variant="dom" fading={sceneReady} />}
            <Canvas
                className="r3f"
                style={{
                    background: colorMode === "dark" ? "#000" : "#f3f54c",
                }}
                gl={{ antialias: true }}
                shadows="soft"
                flat
                linear
            >
                <Suspense fallback={null}>
                    <Scene colorMode={colorMode} onSceneReady={() => setSceneReady(true)} activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
                </Suspense>
            </Canvas>
            <DarkModeToggleContainer colorMode={colorMode} setColorMode={setColorMode} />
            <MusicButton colorMode={colorMode} />
            {window.innerWidth < 768 && <MobileMenuBar colorMode={colorMode} activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />}
        </>
    );
}
