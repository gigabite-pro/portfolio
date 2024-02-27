const BigPlant = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="Plant_10"
                position={[115.58, -173.75, 344.67]}
                rotation={[0, -1.02, 0]}
                scale={0.5}>
                <mesh
                    name="Cylinder 2"
                    geometry={nodes["Cylinder 2"].geometry}
                    material={materials.soil}
                    castShadow
                    receiveShadow
                    position={[-4.29, 65.12, -1.46]}
                    scale={0.71}
                />
                <mesh
                    name="Cube 6"
                    geometry={nodes["Cube 6"].geometry}
                    material={materials.yellow}
                    castShadow
                    receiveShadow
                    position={[-3.75, 27.83, -1.88]}
                    scale={0.71}
                />
            </group>
        </>
    );
};

export default BigPlant;
