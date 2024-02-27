const Carpet = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="Carpet  Pink"
                position={[-49.54, -173.59, 238.85]}
                scale={0.43}>
                <mesh
                    name="Ellipse 24"
                    geometry={nodes["Ellipse 24"].geometry}
                    material={materials["pink dark"]}
                    castShadow
                    receiveShadow
                    position={[0, 4.54, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[0.55, 0.55, 0.85]}
                />
                <mesh
                    name="Ellipse6"
                    geometry={nodes.Ellipse6.geometry}
                    material={materials.red}
                    castShadow
                    receiveShadow
                    position={[0, -2.99, 0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.55, 0.55, 0.85]}
                />
            </group>
        </>
    );
};

export default Carpet;
