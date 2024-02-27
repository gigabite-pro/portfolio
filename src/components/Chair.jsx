const Chair = ({ nodes }) => {
    return (
        <>
            <group
                name="officechair"
                position={[30.88, -110.07, 141.6]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.27, 0.24, 0.24]}>
                <mesh
                    name="seat"
                    geometry={nodes.seat.geometry}
                    material={nodes.seat.material}
                    castShadow
                    receiveShadow
                    position={[-2.06, -186.76, -35.17]}
                    scale={5.19}
                />
                <mesh
                    name="cover under seat"
                    geometry={nodes["cover under seat"].geometry}
                    material={nodes["cover under seat"].material}
                    castShadow
                    receiveShadow
                    position={[-2.06, -186.76, -35.17]}
                    scale={5.19}
                />
                <mesh
                    name="back"
                    geometry={nodes.back.geometry}
                    material={nodes.back.material}
                    castShadow
                    receiveShadow
                    position={[-2.06, -186.76, -35.17]}
                    scale={5.19}
                />
                <mesh
                    name="back top"
                    geometry={nodes["back top"].geometry}
                    material={nodes["back top"].material}
                    castShadow
                    receiveShadow
                    position={[-2.06, -186.76, -35.17]}
                    scale={5.19}
                />
                <group
                    name="armrest left"
                    position={[115.92, -15.79, -4.24]}
                    scale={0.08}>
                    <mesh
                        name="armrest_cilinder_side_L"
                        geometry={nodes.armrest_cilinder_side_L.geometry}
                        material={nodes.armrest_cilinder_side_L.material}
                        castShadow
                        receiveShadow
                        position={[-1447.01, -2096.91, -379.44]}
                        scale={63.64}
                    />
                    <mesh
                        name="armrest_L"
                        geometry={nodes.armrest_L.geometry}
                        material={nodes.armrest_L.material}
                        castShadow
                        receiveShadow
                        position={[-1447.01, -2096.91, -379.44]}
                        scale={63.64}
                    />
                    <mesh
                        name="armrest_Cylinder_L"
                        geometry={nodes.armrest_Cylinder_L.geometry}
                        material={nodes.armrest_Cylinder_L.material}
                        castShadow
                        receiveShadow
                        position={[-1447.01, -2096.91, -379.44]}
                        scale={63.64}
                    />
                    <mesh
                        name="armrest_Cylinder_cover_up_L"
                        geometry={nodes.armrest_Cylinder_cover_up_L.geometry}
                        material={nodes.armrest_Cylinder_cover_up_L.material}
                        castShadow
                        receiveShadow
                        position={[-1447.01, -2096.91, -379.44]}
                        scale={63.64}
                    />
                    <mesh
                        name="armrest_Cylinder_cover_down_L"
                        geometry={nodes.armrest_Cylinder_cover_down_L.geometry}
                        material={nodes.armrest_Cylinder_cover_down_L.material}
                        castShadow
                        receiveShadow
                        position={[-1447.01, -2096.91, -379.44]}
                        scale={63.64}
                    />
                </group>
                <group
                    name="armrest right"
                    position={[-120.04, -15.79, -4.24]}
                    scale={0.08}>
                    <mesh
                        name="armrest_cilinder_side_R"
                        geometry={nodes.armrest_cilinder_side_R.geometry}
                        material={nodes.armrest_cilinder_side_R.material}
                        castShadow
                        receiveShadow
                        position={[1447.01, -2096.91, -379.44]}
                        scale={63.64}
                    />
                    <mesh
                        name="armrest_R"
                        geometry={nodes.armrest_R.geometry}
                        material={nodes.armrest_R.material}
                        castShadow
                        receiveShadow
                        position={[1447.01, -2096.91, -379.44]}
                        scale={63.64}
                    />
                    <mesh
                        name="armrest_Cylinder_R"
                        geometry={nodes.armrest_Cylinder_R.geometry}
                        material={nodes.armrest_Cylinder_R.material}
                        castShadow
                        receiveShadow
                        position={[1447.01, -2096.91, -379.44]}
                        scale={63.64}
                    />
                    <mesh
                        name="armrest_Cylinder_cover_up_R"
                        geometry={nodes.armrest_Cylinder_cover_up_R.geometry}
                        material={nodes.armrest_Cylinder_cover_up_R.material}
                        castShadow
                        receiveShadow
                        position={[1447.01, -2096.91, -379.44]}
                        scale={63.64}
                    />
                    <mesh
                        name="armrest_Cylinder_cover_down_R"
                        geometry={nodes.armrest_Cylinder_cover_down_R.geometry}
                        material={nodes.armrest_Cylinder_cover_down_R.material}
                        castShadow
                        receiveShadow
                        position={[1447.01, -2096.91, -379.44]}
                        scale={63.64}
                    />
                </group>
                <mesh
                    name="Cylinder_in"
                    geometry={nodes.Cylinder_in.geometry}
                    material={nodes.Cylinder_in.material}
                    castShadow
                    receiveShadow
                    position={[-2.06, -186.76, -35.17]}
                    scale={5.19}
                />
                <mesh
                    name="Cylinder_out"
                    geometry={nodes.Cylinder_out.geometry}
                    material={nodes.Cylinder_out.material}
                    castShadow
                    receiveShadow
                    position={[-2.06, -186.76, -35.17]}
                    scale={5.19}
                />
                <mesh
                    name="Cylinder_cover"
                    geometry={nodes.Cylinder_cover.geometry}
                    material={nodes.Cylinder_cover.material}
                    castShadow
                    receiveShadow
                    position={[-2.06, -186.76, -35.17]}
                    scale={5.19}
                />
                <mesh
                    name="sphere"
                    geometry={nodes.sphere.geometry}
                    material={nodes.sphere.material}
                    castShadow
                    receiveShadow
                    position={[-2.06, -186.76, -35.17]}
                    scale={5.19}
                />
                <mesh
                    name="Cylinder_down"
                    geometry={nodes.Cylinder_down.geometry}
                    material={nodes.Cylinder_down.material}
                    castShadow
                    receiveShadow
                    position={[-2.06, -186.76, -35.17]}
                    scale={5.19}
                />
                <group
                    name="chair legs"
                    position={[0, -232.94, 0]}
                    scale={0.08}>
                    <mesh
                        name="chair_leg"
                        geometry={nodes.chair_leg.geometry}
                        material={nodes.chair_leg.material}
                        castShadow
                        receiveShadow
                        position={[-25.29, 566.41, -431.4]}
                        scale={63.64}
                    />
                    <mesh
                        name="chair_leg1"
                        geometry={nodes.chair_leg1.geometry}
                        material={nodes.chair_leg1.material}
                        castShadow
                        receiveShadow
                        position={[-25.29, 566.41, -431.4]}
                        scale={63.64}
                    />
                    <mesh
                        name="chair_leg2"
                        geometry={nodes.chair_leg2.geometry}
                        material={nodes.chair_leg2.material}
                        castShadow
                        receiveShadow
                        position={[-25.29, 566.41, -431.4]}
                        scale={63.64}
                    />
                    <mesh
                        name="chair_leg3"
                        geometry={nodes.chair_leg3.geometry}
                        material={nodes.chair_leg3.material}
                        castShadow
                        receiveShadow
                        position={[-25.29, 566.41, -431.4]}
                        scale={63.64}
                    />
                    <mesh
                        name="chair_leg4"
                        geometry={nodes.chair_leg4.geometry}
                        material={nodes.chair_leg4.material}
                        castShadow
                        receiveShadow
                        position={[-25.29, 566.41, -431.4]}
                        scale={63.64}
                    />
                    <group name="wheels" position={[0, -115.38, 0]}>
                        <mesh
                            name="wheel"
                            geometry={nodes.wheel.geometry}
                            material={nodes.wheel.material}
                            castShadow
                            receiveShadow
                            position={[-25.29, 681.79, -431.4]}
                            scale={63.64}
                        />
                        <mesh
                            name="wheel1"
                            geometry={nodes.wheel1.geometry}
                            material={nodes.wheel1.material}
                            castShadow
                            receiveShadow
                            position={[-25.29, 681.79, -431.4]}
                            scale={63.64}
                        />
                        <mesh
                            name="wheel2"
                            geometry={nodes.wheel2.geometry}
                            material={nodes.wheel2.material}
                            castShadow
                            receiveShadow
                            position={[-25.29, 681.79, -431.4]}
                            scale={63.64}
                        />
                        <mesh
                            name="wheel3"
                            geometry={nodes.wheel3.geometry}
                            material={nodes.wheel3.material}
                            castShadow
                            receiveShadow
                            position={[-25.29, 681.79, -431.4]}
                            scale={63.64}
                        />
                        <mesh
                            name="wheel4"
                            geometry={nodes.wheel4.geometry}
                            material={nodes.wheel4.material}
                            castShadow
                            receiveShadow
                            position={[-25.29, 681.79, -431.4]}
                            scale={63.64}
                        />
                    </group>
                </group>
                <group
                    name="lever"
                    position={[-53.16, -109.28, -22.02]}
                    scale={0.08}>
                    <mesh
                        name="lever1"
                        geometry={nodes.lever1.geometry}
                        material={nodes.lever1.material}
                        castShadow
                        receiveShadow
                        position={[626.68, -950.2, -161.36]}
                        scale={63.64}
                    />
                    <mesh
                        name="lever_top"
                        geometry={nodes.lever_top.geometry}
                        material={nodes.lever_top.material}
                        castShadow
                        receiveShadow
                        position={[626.68, -950.2, -161.36]}
                        scale={63.64}
                    />
                </group>
            </group>
        </>
    );
};

export default Chair;
