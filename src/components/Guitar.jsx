const Guitar = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="Guitar Simple"
                position={[-2.5, -175.82, 75.61]}
                rotation={[-0.23, 0, 0]}
                scale={0.59}>
                <mesh
                    name="Ellipse 21"
                    geometry={nodes["Ellipse 21"].geometry}
                    material={materials.dark}
                    castShadow
                    receiveShadow
                    position={[-0.77, 77.78, 3.16]}
                    rotation={[-0.01, 0, -0.01]}
                    scale={0.39}
                />
                <mesh
                    name="Shape 4"
                    geometry={nodes["Shape 4"].geometry}
                    material={materials.purple}
                    castShadow
                    receiveShadow
                    position={[-11.96, 32.48, -0.7]}
                    scale={0.42}
                />
                <mesh
                    name="Shape 3"
                    geometry={nodes["Shape 3"].geometry}
                    material={materials.purple}
                    castShadow
                    receiveShadow
                    position={[-11.17, 100.06, -1.09]}
                    rotation={[0, 0, 0]}
                    scale={0.42}
                />
                <mesh
                    name="Shape 2"
                    geometry={nodes["Shape 2"].geometry}
                    material={materials.pink}
                    castShadow
                    receiveShadow
                    position={[-34.8, 88.96, -18.96]}
                    scale={0.42}
                />
            </group>
        </>
    );
};

export default Guitar;
