import { Suspense, useEffect } from "react";
import CustomLoader from "./components/CustomLoader";
import HomeCanvas from "./components/HomeCanvas";
import { Canvas } from "@react-three/fiber";
import Tips from "./components/Tips";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        document.querySelector(".tip-overlay").style.display = "flex";
        setTimeout(() => {
            document.querySelector(".tip-overlay").style.opacity = "1";
        }, 100);
    });
    return (
        <>
            <Tips text={"Hold and Drag to rotate"} />
            <Canvas
                className="r3f"
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [-3, 1.5, 4],
                }}>
                <Suspense fallback={<CustomLoader />}>
                    <HomeCanvas />
                </Suspense>
            </Canvas>
        </>
    );
};

export default Home;
