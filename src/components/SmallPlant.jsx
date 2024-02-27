const SmallPlant = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="Plant_01"
                position={[121.88, -85.67, 197.49]}
                scale={0.19}>
                <mesh
                    name="Cube 26"
                    geometry={nodes["Cube 26"].geometry}
                    material={materials.plant}
                    castShadow
                    receiveShadow
                    position={[2.65, 128.53, 0.83]}
                    rotation={[-Math.PI, 0.96, -Math.PI]}
                    scale={0.26}
                />
                <mesh
                    name="Cube 32"
                    geometry={nodes["Cube 32"].geometry}
                    material={materials.plant}
                    castShadow
                    receiveShadow
                    position={[10.91, 107.93, 12.13]}
                    rotation={[-0.11, -0.96, -0.06]}
                    scale={0.28}
                />
                <mesh
                    name="Cube 43"
                    geometry={nodes["Cube 43"].geometry}
                    material={materials.plant}
                    castShadow
                    receiveShadow
                    position={[-19.58, 87.12, -8.64]}
                    rotation={[-3.12, 0.52, 2.87]}
                    scale={0.26}
                />
                <mesh
                    name="Cube 51"
                    geometry={nodes["Cube 51"].geometry}
                    material={materials.plant}
                    castShadow
                    receiveShadow
                    position={[15.17, 96.23, 10.61]}
                    rotation={[-3.13, -0.1, -2.88]}
                    scale={0.28}
                />
                <mesh
                    name="Cube4"
                    geometry={nodes.Cube4.geometry}
                    material={materials.plant}
                    castShadow
                    receiveShadow
                    position={[16.38, 93.34, -11.5]}
                    rotation={[0, 0.17, -0.17]}
                    scale={0.26}
                />
                <mesh
                    name="Ellipse 35"
                    geometry={nodes["Ellipse 35"].geometry}
                    material={materials.earth}
                    castShadow
                    receiveShadow
                    position={[-0.63, 84.83, -7.67]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 9]}
                    scale={0.53}
                />
                <mesh
                    name="Plant Base"
                    geometry={nodes["Plant Base"].geometry}
                    material={materials.flowerpot}
                    castShadow
                    receiveShadow
                    position={[2.23, 30.14, -1.8]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 9]}
                    scale={[0.45, 0.46, 0.46]}
                />
            </group>
        </>
    );
};

export default SmallPlant;
