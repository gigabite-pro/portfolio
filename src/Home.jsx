import HomeCanvas from "./HomeCanvas";
import { Canvas } from "@react-three/fiber";

const Home = () => {
    return (
        <Canvas
            className="r3f"
            camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [-3, 1.5, 4],
            }}>
            <HomeCanvas />
        </Canvas>
    );
};

export default Home;
