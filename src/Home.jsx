import { Suspense, useEffect } from "react";
import CustomLoader from "./components/CustomLoader";
import HomeCanvas from "./components/HomeCanvas";
import { Canvas } from "@react-three/fiber";
import Tips from "./components/Tips";

const Home = () => {
    if (window.innerWidth < 768) {
        document.body.innerHTML = "";
        document.body.style.backgroundColor = "black";
        document.body.style.width = "100vw";
        document.body.style.height = "100vh";
        document.body.style.color = "white";
        document.body.style.display = "grid";
        document.body.style.placeItems = "center";
        document.body.style.fontSize = "5vw";
        document.body.style.fontWeight = "bold";
        document.body.innerHTML =
            "<p>Sorry! This website is currently not available on mobile devices. <br> Please visit on a desktop or laptop. Redirecting to old website...</p>";
        setTimeout(() => {
            window.location.href = "https://vaibhav-sharma.me";
        }, 7000);
    }

    useEffect(() => {
        document.querySelector(".tip-overlay").style.display = "flex";
        setTimeout(() => {
            document.querySelector(".tip-overlay").style.opacity = "1";
        }, 100);
    });
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
                }}>
                <Suspense fallback={<CustomLoader />}>
                    <HomeCanvas />
                </Suspense>
            </Canvas>
        </>
    );
};

export default Home;
