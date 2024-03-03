const Controller = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="videogamecontroller"
                position={[135.75, -79.95, 235.69]}
                rotation={[-Math.PI / 2, 0, -2.13]}
                scale={0.03}>
                <mesh
                    name="topfrontbuttons"
                    geometry={nodes.topfrontbuttons.geometry}
                    material={nodes.topfrontbuttons.material}
                    castShadow
                    receiveShadow
                    position={[0, -3.06, -8.65]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={12.89}
                />
                <mesh
                    name="bottomcase"
                    geometry={nodes.bottomcase.geometry}
                    material={nodes.bottomcase.material}
                    castShadow
                    receiveShadow
                    position={[0.06, -4.7, -5.02]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={12.89}
                />
                <mesh
                    name="light"
                    geometry={nodes.light.geometry}
                    material={nodes.light.material}
                    castShadow
                    receiveShadow
                    position={[0, 10.91, -9.21]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[12.89, 12.01, 13.63]}
                />
                <mesh
                    name="centerpiece"
                    geometry={nodes.centerpiece.geometry}
                    material={nodes.centerpiece.material}
                    castShadow
                    receiveShadow
                    position={[0, -4.21, -5.76]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={12.89}
                />
                <mesh
                    name="cross"
                    geometry={nodes.cross.geometry}
                    material={nodes.cross.material}
                    castShadow
                    receiveShadow
                    position={[-0.05, 55.66, 55.04]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={65.38}
                />
                <mesh
                    name="joysticks"
                    geometry={nodes.joysticks.geometry}
                    material={nodes.joysticks.material}
                    castShadow
                    receiveShadow
                    position={[0, -3.06, 27.76]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={12.89}
                />
                <mesh
                    name="circlebuttons"
                    geometry={nodes.circlebuttons.geometry}
                    material={nodes.circlebuttons.material}
                    castShadow
                    receiveShadow
                    position={[249.16, 53.75, 113.31]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}
                    scale={18.03}
                />
                <mesh
                    name="sidepieces"
                    geometry={nodes.sidepieces.geometry}
                    material={nodes.sidepieces.material}
                    castShadow
                    receiveShadow
                    position={[0, -3.06, -5.83]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={12.89}
                />
                <mesh
                    name="selectbutton"
                    geometry={nodes.selectbutton.geometry}
                    material={nodes.selectbutton.material}
                    castShadow
                    receiveShadow
                    position={[0.06, 2.44, -7.61]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={12.89}
                />
                <mesh
                    name="frontlittlebuttons"
                    geometry={nodes.frontlittlebuttons.geometry}
                    material={nodes.frontlittlebuttons.material}
                    castShadow
                    receiveShadow
                    position={[0, -3.06, -5.83]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={12.89}
                />
                <mesh
                    name="backbutton"
                    geometry={nodes.backbutton.geometry}
                    material={nodes.backbutton.material}
                    castShadow
                    receiveShadow
                    position={[0, -5.57, -33.44]}
                    rotation={[0.12, -Math.PI / 2, 0]}
                    scale={12.89}
                />
                <group
                    name="arrowdetails"
                    position={[-250.06, 114.67, 133.54]}
                    scale={0.65}>
                    <mesh
                        name="Triangle 2"
                        geometry={nodes["Triangle 2"].geometry}
                        material={materials.black}
                        castShadow
                        receiveShadow
                        position={[1.4, -77.29, 0]}
                        rotation={[0, 0, Math.PI]}
                        scale={[0.16, 0.09, 0.16]}
                    />
                    <mesh
                        name="Triangle 4"
                        geometry={nodes["Triangle 4"].geometry}
                        material={materials.black}
                        castShadow
                        receiveShadow
                        position={[-76.32, -2.76, -1.59]}
                        rotation={[0, 0, Math.PI / 2]}
                        scale={[0.16, 0.11, 0.16]}
                    />
                    <mesh
                        name="Triangle 3"
                        geometry={nodes["Triangle 3"].geometry}
                        material={materials.black}
                        castShadow
                        receiveShadow
                        position={[76.32, -2.76, -1.59]}
                        rotation={[0, 0, -Math.PI / 2]}
                        scale={[0.16, 0.11, 0.16]}
                    />
                    <mesh
                        name="Triangle1"
                        geometry={nodes.Triangle1.geometry}
                        material={materials.black}
                        castShadow
                        receiveShadow
                        position={[1.79, 76.14, -0.84]}
                        scale={[0.16, 0.11, 0.16]}
                    />
                </group>
                <group
                    name="details"
                    position={[247.48, 139.52, 131.05]}
                    scale={0.65}>
                    <group name="cross1" position={[2.93, -130.65, -0.01]}>
                        <mesh
                            name="Cube 28"
                            geometry={nodes["Cube 28"].geometry}
                            material={materials["Cube 28 Material"]}
                            castShadow
                            receiveShadow
                            rotation={[0, -0.02, 0.7]}
                            scale={[1.05, 1.04, 1]}
                        />
                        <mesh
                            name="Cube6"
                            geometry={nodes.Cube6.geometry}
                            material={materials["Cube6 Material"]}
                            castShadow
                            receiveShadow
                            rotation={[0, -0.02, -0.7]}
                            scale={[1.05, 1.04, 1]}
                        />
                    </group>
                    <group
                        name="cirlce"
                        position={[87.12, -45.45, -0.98]}
                        rotation={[-0.05, 0, 0]}
                        scale={0.9}>
                        <mesh
                            name="Cylinder7"
                            geometry={nodes.Cylinder7.geometry}
                            material={materials["Cylinder7 Material"]}
                            castShadow
                            receiveShadow
                            position={[6.04, 3.48, 0.18]}
                            rotation={[1.62, -Math.PI / 4, 0]}
                            scale={0.66}
                        />
                    </group>
                    <group
                        name="quad"
                        position={[-94.7, -45.45, -0.98]}
                        rotation={[-0.05, 0, 0]}
                        scale={1}>
                        <mesh
                            name="Cylinder8"
                            geometry={nodes.Cylinder8.geometry}
                            material={materials["Cylinder8 Material"]}
                            castShadow
                            receiveShadow
                            position={[6.04, 3.48, 0.18]}
                            rotation={[1.62, -Math.PI / 4, 0]}
                            scale={0.66}
                        />
                    </group>
                    <group
                        name="triangle"
                        position={[-3.44, 43, 0.29]}
                        rotation={[-0.07, 0, 0]}
                        scale={1}>
                        <mesh
                            name="Cylinder9"
                            geometry={nodes.Cylinder9.geometry}
                            material={materials["Cylinder9 Material"]}
                            castShadow
                            receiveShadow
                            position={[6.04, 3.48, 0.18]}
                            rotation={[1.62, -Math.PI / 3, 0]}
                            scale={0.66}
                        />
                    </group>
                </group>
            </group>
        </>
    );
};

export default Controller;
