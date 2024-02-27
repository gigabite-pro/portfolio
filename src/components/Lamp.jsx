const Lamp = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="lamp_office"
                position={[106.68, -47.9, 60.73]}
                rotation={[-Math.PI, -0.82, -Math.PI]}
                scale={0.14}>
                <group
                    name="head"
                    position={[85.11, 274.04, -16.87]}
                    rotation={[-0.14, -0.03, 0.47]}
                    scale={0.29}>
                    <mesh
                        name="lightbulb"
                        geometry={nodes.lightbulb.geometry}
                        material={materials["lightbulb Material"]}
                        castShadow
                        receiveShadow
                        position={[4.65, 39.87, 1.24]}
                        rotation={[0, 0, 0]}
                        scale={1.06}
                    />
                    <mesh
                        name="Cylinder 3"
                        geometry={nodes["Cylinder 3"].geometry}
                        material={materials.cutlery}
                        castShadow
                        receiveShadow
                        position={[-83.01, 297.77, -0.82]}
                        rotation={[0, 0, -1.6]}
                        scale={[0.73, 0.21, 0.73]}
                    />
                    <mesh
                        name="Cylinder 2"
                        geometry={nodes["Cylinder 2"].geometry}
                        material={materials.cutlery}
                        castShadow
                        receiveShadow
                        position={[-176.01, 300.6, -0.82]}
                        rotation={[0, 0, -1.6]}
                        scale={[0.41, 0.16, 0.41]}
                    />
                    <mesh
                        name="small"
                        geometry={nodes.small.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[0, 347.89, 0]}
                        scale={0.88}
                    />
                    <mesh
                        name="cover up"
                        geometry={nodes["cover up"].geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[0, 242.93, 0]}
                        scale={1.66}
                    />
                    <mesh
                        name="big"
                        geometry={nodes.big.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[0, 35.24, 0]}
                        scale={2.28}
                    />
                </group>
                <group
                    name="piece union 3"
                    position={[-30.8, 318.47, -27.58]}
                    rotation={[-0.14, -0.03, -0.53]}
                    scale={0.31}>
                    <mesh
                        name="cylinder"
                        geometry={nodes.cylinder.geometry}
                        material={materials.cutlery}
                        castShadow
                        receiveShadow
                        position={[-1.84, 47.74, -0.82]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[-0.28, 1.63, 0.28]}
                    />
                    <mesh
                        name="cylinder1"
                        geometry={nodes.cylinder1.geometry}
                        material={materials.cutlery}
                        castShadow
                        receiveShadow
                        position={[-49.75, -46.9, -0.82]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[-0.28, 1.63, 0.28]}
                    />
                    <mesh
                        name="cylinder2"
                        geometry={nodes.cylinder2.geometry}
                        material={materials.cutlery}
                        castShadow
                        receiveShadow
                        position={[50.2, -46.9, 0.82]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[-0.28, 1.63, 0.28]}
                    />
                    <mesh
                        name="base01"
                        geometry={nodes.base01.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-5.4, 66.06, -33.93]}
                        rotation={[0, 0, 0]}
                    />
                    <mesh
                        name="base02"
                        geometry={nodes.base02.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-5.4, 66.06, 25.09]}
                        rotation={[0, 0, 0]}
                    />
                </group>
                <group
                    name="piece union 2"
                    position={[-223.9, 89.06, -2.52]}
                    rotation={[-0.14, -0.03, 0.48]}
                    scale={0.31}>
                    <mesh
                        name="cylinder3"
                        geometry={nodes.cylinder3.geometry}
                        material={materials.cutlery}
                        castShadow
                        receiveShadow
                        position={[-1.84, 47.74, -0.82]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[-0.28, 1.63, 0.28]}
                    />
                    <mesh
                        name="cylinder4"
                        geometry={nodes.cylinder4.geometry}
                        material={materials.cutlery}
                        castShadow
                        receiveShadow
                        position={[-49.75, -46.9, -0.82]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[-0.28, 1.63, 0.28]}
                    />
                    <mesh
                        name="cylinder5"
                        geometry={nodes.cylinder5.geometry}
                        material={materials.cutlery}
                        castShadow
                        receiveShadow
                        position={[50.2, -46.9, 0.82]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[-0.28, 1.63, 0.28]}
                    />
                    <mesh
                        name="base011"
                        geometry={nodes.base011.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-5.4, 66.06, -33.93]}
                        rotation={[0, 0, 0]}
                    />
                    <mesh
                        name="base021"
                        geometry={nodes.base021.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-5.4, 66.06, 25.09]}
                        rotation={[0, 0, 0]}
                    />
                </group>
                <group
                    name="piece union"
                    position={[-140.53, -192.6, -0.41]}
                    scale={0.31}>
                    <mesh
                        name="cylinder6"
                        geometry={nodes.cylinder6.geometry}
                        material={materials.cutlery}
                        castShadow
                        receiveShadow
                        position={[-1.84, 47.74, -0.82]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[-0.28, 1.63, 0.28]}
                    />
                    <mesh
                        name="cylinder7"
                        geometry={nodes.cylinder7.geometry}
                        material={materials.cutlery}
                        castShadow
                        receiveShadow
                        position={[-49.75, -46.9, -0.82]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[-0.28, 1.63, 0.28]}
                    />
                    <mesh
                        name="cylinder8"
                        geometry={nodes.cylinder8.geometry}
                        material={materials.cutlery}
                        castShadow
                        receiveShadow
                        position={[50.2, -46.9, 0.82]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[-0.28, 1.63, 0.28]}
                    />
                    <mesh
                        name="base012"
                        geometry={nodes.base012.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-5.4, 66.06, -33.93]}
                        rotation={[0, 0, 0]}
                    />
                    <mesh
                        name="base022"
                        geometry={nodes.base022.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-5.4, 66.06, 25.09]}
                        rotation={[0, 0, 0]}
                    />
                </group>
                <group
                    name="cylinders_up"
                    position={[-114.62, 191.19, -12.71]}
                    rotation={[-0.14, -0.03, -0.9]}
                    scale={0.31}>
                    <mesh
                        name="cylinder9"
                        geometry={nodes.cylinder9.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-76.57, -21.06, -13.23]}
                        rotation={[0, 0, 0.2]}
                        scale={[0.41, 0.56, 0.41]}
                    />
                    <mesh
                        name="cylinder10"
                        geometry={nodes.cylinder10.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-76.57, -21.06, 13.77]}
                        rotation={[0, 0, 0.2]}
                        scale={[0.41, 0.56, 0.41]}
                    />
                    <mesh
                        name="cylinder11"
                        geometry={nodes.cylinder11.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-19.61, -4, -13.23]}
                        rotation={[0, 0, 0.2]}
                        scale={[0.41, 0.56, 0.41]}
                    />
                    <mesh
                        name="cylinder12"
                        geometry={nodes.cylinder12.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-19.61, -4, 13.77]}
                        rotation={[0, 0, 0.2]}
                        scale={[0.41, 0.56, 0.41]}
                    />
                </group>
                <group
                    name="cylinders_down"
                    position={[-184.08, -62.96, 8.39]}
                    scale={0.31}>
                    <mesh
                        name="cylinder13"
                        geometry={nodes.cylinder13.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[18.93, 5.14, -41.72]}
                        rotation={[0, 0, 0.27]}
                        scale={[0.41, 0.56, 0.41]}
                    />
                    <mesh
                        name="cylinder14"
                        geometry={nodes.cylinder14.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-21.19, -5.76, -41.72]}
                        rotation={[0, 0, 0.27]}
                        scale={[0.41, 0.56, 0.41]}
                    />
                    <mesh
                        name="cylinder15"
                        geometry={nodes.cylinder15.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[18.93, 5.14, -13.77]}
                        rotation={[0, 0, 0.27]}
                        scale={[0.41, 0.56, 0.41]}
                    />
                    <mesh
                        name="cylinder16"
                        geometry={nodes.cylinder16.geometry}
                        material={materials.lines}
                        castShadow
                        receiveShadow
                        position={[-21.19, -5.76, -13.77]}
                        rotation={[0, 0, 0.27]}
                        scale={[0.41, 0.56, 0.41]}
                    />
                </group>
                <mesh
                    name="cylinder_small"
                    geometry={nodes.cylinder_small.geometry}
                    material={materials.lines}
                    castShadow
                    receiveShadow
                    position={[-149.16, -207.12, -0.24]}
                    scale={0.22}
                />
                <mesh
                    name="cylinder_big"
                    geometry={nodes.cylinder_big.geometry}
                    material={materials.lines}
                    castShadow
                    receiveShadow
                    position={[-149.16, -232.8, -0.24]}
                    scale={0.31}
                />
                <mesh
                    name="base"
                    geometry={nodes.base.geometry}
                    material={materials.lines}
                    castShadow
                    receiveShadow
                    position={[-100.31, -253.39, 0]}
                    scale={0.31}
                />
            </group>
        </>
    );
};

export default Lamp;
