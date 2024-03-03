const PhotoWall = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="Photos Wall"
                position={[178.23, 75.19, 178.03]}
                rotation={[0, -Math.PI / 2, 0]}>
                <mesh
                    name="Cube 96"
                    geometry={nodes["Cube 96"].geometry}
                    material={materials.plant}
                    castShadow
                    receiveShadow
                    position={[-92.46, 11.47, 5.15]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={1}
                />
                <mesh
                    name="Cube 95"
                    geometry={nodes["Cube 95"].geometry}
                    material={materials.white_broken}
                    castShadow
                    receiveShadow
                    position={[-14.91, 25.59, 5.15]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={1}
                />
                <mesh
                    name="Cube 94"
                    geometry={nodes["Cube 94"].geometry}
                    material={materials.purple}
                    castShadow
                    receiveShadow
                    position={[77.26, 14.01, 5.15]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={1}
                />
                <mesh
                    name="Cube 93"
                    geometry={nodes["Cube 93"].geometry}
                    material={materials.lightred}
                    castShadow
                    receiveShadow
                    position={[-15.16, -25.17, 5.15]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={1}
                />
                <mesh
                    name="Merged Geometry"
                    geometry={nodes["Merged Geometry"].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[0, 0, 4.66]}
                />
            </group>
        </>
    );
};

export default PhotoWall;
