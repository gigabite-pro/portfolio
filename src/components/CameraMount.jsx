const CameraMount = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="Security cam"
                position={[-152.05, 103.41, 21.49]}
                scale={0.2}>
                <mesh
                    name="circle"
                    geometry={nodes.circle.geometry}
                    material={materials.grey}
                    castShadow
                    receiveShadow
                    position={[0.42, 78.81, 9.72]}
                />
                <mesh
                    name="Cube 33"
                    geometry={nodes["Cube 33"].geometry}
                    material={materials.grey}
                    castShadow
                    receiveShadow
                    position={[0, 80.03, 5.05]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[1.61, 1.61, 27.65]}
                />
                <mesh
                    name="Cube 27"
                    geometry={nodes["Cube 27"].geometry}
                    material={materials.grey}
                    castShadow
                    receiveShadow
                    position={[11.93, 86.77, 41.28]}
                    rotation={[-0.06, -1.23, -1.35]}
                    scale={1.73}
                />
            </group>
        </>
    );
};

export default CameraMount;
