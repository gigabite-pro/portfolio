const HeadphonesStand = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="Headphone"
                position={[92.48, -85.87, 231.75]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.13}>
                <mesh
                    name="Body1"
                    geometry={nodes.Body1.geometry}
                    material={nodes.Body1.material}
                    castShadow
                    receiveShadow
                    rotation={[0, 0, 0]}
                    scale={10}
                />
            </group>
        </>
    );
};

export default HeadphonesStand;
