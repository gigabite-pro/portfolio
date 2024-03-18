import { Html } from "@react-three/drei";
import { useEffect } from "react";

const CustomLoader = ({ setLoadState = () => {} }) => {
    useEffect(() => {
        return () => {
            setLoadState(true);
        };
    });

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
            <div className="tip">
                Tip: Hover over elements to interact with them.
            </div>
        </Html>
    );
};

export default CustomLoader;
