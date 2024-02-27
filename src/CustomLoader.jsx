import { Html } from "@react-three/drei";

const CustomLoader = () => {
    return (
        <Html wrapperClass="loader" position={[0, 0]}>
            <img className="loader-img" src="./code.gif" />
            <img className="loader-img" src="./cmd.gif" />
            <img className="loader-img" src="./music.gif" />
            <img className="loader-img" src="./fingerprint.gif" />
            <img className="loader-img" src="./git.gif" />
        </Html>
    );
};

export default CustomLoader;
