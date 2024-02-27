const AirJordans = ({ nodes }) => {
    return (
        <>
            <group
                name="air_jordan_1"
                position={[-124.59, -151.2, 44.86]}
                scale={1.52}>
                <group
                    name="Sketchfab_model1"
                    position={[0, 0, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="d8deb8ca54d7411c8d14a56540e715c4fbx"
                        rotation={[Math.PI / 2, 0, 0]}>
                        <group name="RootNode1">
                            <group
                                name="shoe"
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={100}>
                                <mesh
                                    name="shoe_shoe_0"
                                    geometry={nodes.shoe_shoe_0.geometry}
                                    material={nodes.shoe_shoe_0.material}
                                    castShadow
                                    receiveShadow
                                />
                            </group>
                            <group
                                name="shoelace"
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={100}>
                                <mesh
                                    name="shoelace_shoelace_0"
                                    geometry={
                                        nodes.shoelace_shoelace_0.geometry
                                    }
                                    material={
                                        nodes.shoelace_shoelace_0.material
                                    }
                                    castShadow
                                    receiveShadow
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </>
    );
};

export default AirJordans;
