const BigPlant = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="Plant_10"
                position={[105.73, -176.7, 327.08]}
                scale={0.49}>
                <mesh
                    name="Ellipse5"
                    geometry={nodes.Ellipse5.geometry}
                    material={materials["yellow-dark"]}
                    castShadow
                    receiveShadow
                    position={[0.38, 79.62, -0.2]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={0.5}
                />
                <mesh
                    name="Cube 6"
                    geometry={nodes["Cube 6"].geometry}
                    material={materials.table}
                    castShadow
                    receiveShadow
                    position={[-0.88, 40.79, 1.58]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.58}
                />
            </group>
        </>
    );
};

export default BigPlant;
