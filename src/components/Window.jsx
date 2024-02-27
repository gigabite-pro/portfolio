const Window = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="window_white"
                position={[51.74, -31.21, 27.62]}
                scale={[0.78, 0.3, 0.57]}>
                <mesh
                    name="Cube 19"
                    geometry={nodes["Cube 19"].geometry}
                    material={materials.glass_blue}
                    castShadow
                    receiveShadow
                    position={[-0.01, 165, -5.2]}
                    rotation={[0, 0, -Math.PI]}
                    scale={[3.74, 0.49, 0.01]}
                />
                <mesh
                    name="Merged Geometry1"
                    geometry={nodes["Merged Geometry1"].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[0, 165.69, 0.01]}
                />
            </group>
        </>
    );
};

export default Window;
