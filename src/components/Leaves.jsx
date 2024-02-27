import { animated, useSpring } from "@react-spring/three";

const Leaves = ({ nodes, materials }) => {
    const leaves = useSpring({
        from: { scale: [0.5, 0.5, 0.5] },
        to: { scale: [0.6, 0.4, 0.7] },
        config: {
            duration: 2000,
            precision: 0.0001,
        },
        loop: { reverse: true },
    });

    return (
        <animated.group
            name="Leaves"
            position={[118.99, -103.77, 339.14]}
            rotation={[0, -1.02, 0]}
            scale={leaves.scale}>
            <mesh
                name="Cube 12"
                geometry={nodes["Cube 12"].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[7.79, -18.07, 5.5]}
                rotation={[2.94, 1.13, -2.96]}
                scale={0.71}
            />
            <mesh
                name="Cube 9"
                geometry={nodes["Cube 9"].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-1.07, 64.1, 6.48]}
                rotation={[0, 0.99, 0]}
                scale={0.71}
            />
            <mesh
                name="Cube 8"
                geometry={nodes["Cube 8"].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[19.87, 41.97, 2.19]}
                rotation={[-0.33, -1.3, -0.3]}
                scale={0.71}
            />
            <mesh
                name="Cube 10"
                geometry={nodes["Cube 10"].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[14.66, 70.21, 18.71]}
                rotation={[-3.01, -0.73, -3.03]}
                scale={0.71}
            />
            <mesh
                name="Cube 11"
                geometry={nodes["Cube 11"].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-13.83, -17.91, 18.35]}
                rotation={[-2.72, 1.12, 2.73]}
                scale={0.71}
            />
            <mesh
                name="Cube 7"
                geometry={nodes["Cube 7"].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[7.85, 22.65, -5.86]}
                rotation={[0, 0.26, 0]}
                scale={0.71}
            />
        </animated.group>
    );
};

export default Leaves;
