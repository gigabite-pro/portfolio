import { Html } from "@react-three/drei";

const CustomLoader = () => {
    return (
        <Html wrapperClass="loader" position={[0, 0]}>
            <div className="loading-container">
                <div className="cube">
                    <div className="sides">
                        <div className="top"></div>
                        <div className="right"></div>
                        <div className="bottom"></div>
                        <div className="left"></div>
                        <div className="front"></div>
                        <div className="back"></div>
                    </div>
                </div>
                <div className="loading-text">Loading...</div>
            </div>
        </Html>
    );
};

export default CustomLoader;
