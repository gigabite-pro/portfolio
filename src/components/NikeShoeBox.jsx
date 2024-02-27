const NikeShoeBox = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="nike_shoe_box"
                position={[-122.41, -175.18, 47.97]}
                scale={108.21}>
                <group
                    name="Sketchfab_model"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1.52}>
                    <group
                        name="BOX_nikefbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="BOX" position={[0, 0.05, 0]}>
                                    <group
                                        name="Plane_Plane_002_Material_001"
                                        position={[0, 11.55, -9.86]}>
                                        <mesh
                                            name="Plane_Plane_002_Material_001_TOP_0"
                                            geometry={
                                                nodes
                                                    .Plane_Plane_002_Material_001_TOP_0
                                                    .geometry
                                            }
                                            material={
                                                nodes
                                                    .Plane_Plane_002_Material_001_TOP_0
                                                    .material
                                            }
                                            castShadow
                                            receiveShadow
                                        />
                                    </group>
                                    <group
                                        name="Plane_Plane_002_carton"
                                        position={[0, 0.05, 0]}>
                                        <mesh
                                            name="Plane_Plane_002_carton_BOTTOM_0"
                                            geometry={
                                                nodes
                                                    .Plane_Plane_002_carton_BOTTOM_0
                                                    .geometry
                                            }
                                            material={
                                                nodes
                                                    .Plane_Plane_002_carton_BOTTOM_0
                                                    .material
                                            }
                                            castShadow
                                            receiveShadow
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </>
    );
};

export default NikeShoeBox;
