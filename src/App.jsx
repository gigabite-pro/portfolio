import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Loader } from "@react-three/drei";
import CustomLoader from "./components/CustomLoader";
import MusicButton from "./components/MusicButton";
import Tips from "./components/Tips";
import Spotify from "./components/Spotify";
import DarkModeToggleContainer from "./components/DarkModeToggleContainer";
import MobileMenuBar from "./components/MobileMenuBar";

export default function App() {
    const [colorMode, setColorMode] = useState("light");
    const [loadState, setLoadState] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState("default");

    useEffect(() => {
        let resizeTimeout;

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                window.location.reload();
            }, 500); // Adjust the timeout as needed
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearTimeout(resizeTimeout);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <Tips typeOf={"app"} text={"Click outside the object to escape the camera mode"} />
            <Spotify />
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
                <Suspense fallback={<CustomLoader setLoadState={setLoadState} />}>
                    <Scene colorMode={colorMode} loadState={loadState} activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
                </Suspense>
            </Canvas>
            <DarkModeToggleContainer colorMode={colorMode} setColorMode={setColorMode} />
            <MusicButton colorMode={colorMode} />
            {window.innerWidth < 768 && <MobileMenuBar colorMode={colorMode} activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />}
            <Loader />
        </>
    );
}
