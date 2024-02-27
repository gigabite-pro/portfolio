const Books = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="Books"
                position={[86.75, -85.39, 67.46]}
                rotation={[Math.PI, -1.49, Math.PI]}
                scale={0.19}>
                <mesh
                    name="paper"
                    geometry={nodes.paper.geometry}
                    material={materials["paper Material"]}
                    castShadow
                    receiveShadow
                    position={[-1.48, 2.85, 14.17]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 9]}
                    scale={1}
                />
                <group
                    name="book"
                    position={[40.27, 18.25, -38.41]}
                    rotation={[-1.61, Math.PI / 2, 0]}
                    scale={[0.74, 1.35, 1.23]}>
                    <mesh
                        name="Rectangle4"
                        geometry={nodes.Rectangle4.geometry}
                        material={materials["Rectangle4 Material"]}
                        castShadow
                        receiveShadow
                        position={[-22.7, 32.77, 1.79]}
                        rotation={[0, -Math.PI / 2, 0]}
                    />
                    <mesh
                        name="Cube 44"
                        geometry={nodes["Cube 44"].geometry}
                        material={materials["Cube 44 Material"]}
                        castShadow
                        receiveShadow
                        position={[-0.28, 0.87, 3.83]}
                        rotation={[0, 0, 0]}
                        scale={[0.99, 1.01, 1]}
                    />
                    <mesh
                        name="Cube 45"
                        geometry={nodes["Cube 45"].geometry}
                        material={materials.orange}
                        castShadow
                        receiveShadow
                        position={[-16.68, -0.27, 9.75]}
                        rotation={[0, 0, 0]}
                        scale={[0.99, 1.01, 1]}
                    />
                </group>
            </group>
        </>
    );
};

export default Books;
