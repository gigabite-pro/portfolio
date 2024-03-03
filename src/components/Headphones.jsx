const Headphones = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="Headphones"
                position={[93.2, -72.13, 237.24]}
                scale={0.25}>
                <mesh
                    name="Cylinder 25"
                    geometry={nodes["Cylinder 25"].geometry}
                    material={materials.lines}
                    castShadow
                    receiveShadow
                    position={[-73.69, 3.82, 9.1]}
                    rotation={[0, 0, 0.26]}
                    scale={1}
                />
                <mesh
                    name="Cylinder10"
                    geometry={nodes.Cylinder10.geometry}
                    material={materials.lines}
                    castShadow
                    receiveShadow
                    position={[74.12, 3.72, 9.1]}
                    rotation={[0, 0, -0.17]}
                    scale={1}
                />
                <mesh
                    name="Torus1"
                    geometry={nodes.Torus1.geometry}
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
                        name="Rectangle 34"
                        geometry={nodes["Rectangle 34"].geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-1.2, -0.12, 15.36]}
                    />
                    <mesh
                        name="Rectangle 25"
                        geometry={nodes["Rectangle 25"].geometry}
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
                <group
                    name="r"
                    position={[55.37, -16.5, 6.43]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={0.82}>
                    <mesh
                        name="Rectangle 35"
                        geometry={nodes["Rectangle 35"].geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-1.2, -0.12, 15.36]}
                    />
                    <mesh
                        name="Rectangle 26"
                        geometry={nodes["Rectangle 26"].geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-1.2, -0.12, 8.51]}
                    />
                    <mesh
                        name="Cube8"
                        geometry={nodes.Cube8.geometry}
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
