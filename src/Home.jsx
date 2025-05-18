import { Suspense, useEffect } from "react";
import CustomLoader from "./components/CustomLoader";
import HomeCanvas from "./components/HomeCanvas";
import { Canvas } from "@react-three/fiber";
import Tips from "./components/Tips";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

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

    useEffect(() => {
        if (window.innerWidth < 768) {
            navigate("/app");
        }
        document.querySelector(".tip-overlay").style.display = "flex";
        setTimeout(() => {
            document.querySelector(".tip-overlay").style.opacity = "1";
        }, 100);
    }, []);
    return (
        <>
            <Tips typeOf={"home"} text={"Hold and Drag to rotate"} />
            <Canvas
                className="r3f"
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [-3, 1.5, 4],
                }}
            >
                <Suspense fallback={<CustomLoader />}>
                    <HomeCanvas />
                </Suspense>
            </Canvas>
        </>
    );
};

export default Home;
