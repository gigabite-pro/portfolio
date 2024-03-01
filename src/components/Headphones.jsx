const Headphones = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="Headphones"
                position={[93.2, -72.13, 237.24]}
                scale={0.25}>
                <mesh
                    name="Cylinder 23"
                    geometry={nodes["Cylinder 23"].geometry}
                    material={materials.lines}
                    castShadow
                    receiveShadow
                    position={[-73.69, 3.82, 9.1]}
                    rotation={[0, 0, 0.26]}
                    scale={1}
                />
                <mesh
                    name="Cylinder6"
                    geometry={nodes.Cylinder6.geometry}
                    material={materials.lines}
                    castShadow
                    receiveShadow
                    position={[74.12, 3.72, 9.1]}
                    rotation={[0, 0, -0.17]}
                    scale={1}
                />
                <mesh
                    name="Torus"
                    geometry={nodes.Torus.geometry}
                    material={materials.Walls}
                    castShadow
                    receiveShadow
                    position={[0, 16.64, 8.26]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={1}
                />
                <group
                    name="l"
                    position={[-55.4, -17.03, 6.43]}
                    rotation={[Math.PI / 2, -1.54, -Math.PI / 2]}
                    scale={0.82}>
                    <mesh
                        name="Rectangle 32"
                        geometry={nodes["Rectangle 32"].geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-1.2, -0.12, 15.36]}
                    />
                    <mesh
                        name="Rectangle 22"
                        geometry={nodes["Rectangle 22"].geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-1.2, -0.12, 8.51]}
                    />
                    <mesh
                        name="Cube6"
                        geometry={nodes.Cube6.geometry}
                        material={materials.Walls}
                        castShadow
                        receiveShadow
                        position={[0, 0, -7.36]}
                    />
                </group>
                <group
                    name="r"
                    position={[55.37, -16.5, 6.43]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={0.82}>
                    <mesh
                        name="Rectangle 33"
                        geometry={nodes["Rectangle 33"].geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-1.2, -0.12, 15.36]}
                    />
                    <mesh
                        name="Rectangle 23"
                        geometry={nodes["Rectangle 23"].geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-1.2, -0.12, 8.51]}
                    />
                    <mesh
                        name="Cube7"
                        geometry={nodes.Cube7.geometry}
                        material={materials.Walls}
                        castShadow
                        receiveShadow
                        position={[0, 0, -7.36]}
                    />
                </group>
            </group>
        </>
    );
};

export default Headphones;
