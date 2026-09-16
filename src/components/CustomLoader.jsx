import { Html } from "@react-three/drei";

const LoaderContent = () => (
    <>
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
        <div className="tip">{window.innerWidth < 768 ? "Tip: Use the menu to access different features." : "Tip: Hover over elements to interact with them."}</div>
    </>
);

const CustomLoader = ({ variant = "html", fading = false }) => {
    if (variant === "dom") {
        return (
            <div className={`loader${fading ? " loader-hidden" : ""}`}>
                <LoaderContent />
            </div>
        );
    }

    return (
        <Html wrapperClass="loader" position={[0, 0]}>
            <LoaderContent />
        </Html>
    );
};

export default CustomLoader;
