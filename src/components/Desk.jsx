const Desk = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="desk_modern"
                position={[116.6, -174.91, 143.16]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.37, 0.32, 0.33]}>
                <mesh
                    name="Ellipse 26"
                    geometry={nodes["Ellipse 26"].geometry}
                    material={materials.hanger}
                    castShadow
                    receiveShadow
                    position={[184.95, 133.69, 174.46]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[2.47, 2.55, 2.47]}
                />
                <mesh
                    name="Ellipse7"
                    geometry={nodes.Ellipse7.geometry}
                    material={materials.light_grey}
                    castShadow
                    receiveShadow
                    position={[184.95, 133.69, 173.89]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.87, 0.89, 0.87]}
                />
                <mesh
                    name="Ellipse 27"
                    geometry={nodes["Ellipse 27"].geometry}
                    material={materials.hanger}
                    castShadow
                    receiveShadow
                    position={[-185.65, 133.69, 174.46]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[2.47, 2.55, 2.47]}
                />
                <mesh
                    name="Ellipse8"
                    geometry={nodes.Ellipse8.geometry}
                    material={materials.light_grey}
                    castShadow
                    receiveShadow
                    position={[-185.65, 133.69, 173.89]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.87, 0.89, 0.87]}
                />
                <mesh
                    name="Ellipse 28"
                    geometry={nodes["Ellipse 28"].geometry}
                    material={materials.hanger}
                    castShadow
                    receiveShadow
                    position={[-0.41, 230.59, 174.46]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[2.47, 2.55, 2.47]}
                />
                <mesh
                    name="Ellipse9"
                    geometry={nodes.Ellipse9.geometry}
                    material={materials.light_grey}
                    castShadow
                    receiveShadow
                    position={[-0.41, 230.59, 173.89]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.87, 0.89, 0.87]}
                />
                <mesh
                    name="Cube 211"
                    geometry={nodes["Cube 211"].geometry}
                    material={materials.very_light_grey}
                    castShadow
                    receiveShadow
                    position={[-0.28, 230.29, 126.12]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[2.55, 3.46, 2]}
                />
                <mesh
                    name="Cube 20"
                    geometry={nodes["Cube 20"].geometry}
                    material={materials.very_light_grey}
                    castShadow
                    receiveShadow
                    position={[-223.55, 136.65, 158.96]}
                    scale={[2.61, 2.69, 0.47]}
                />
                <mesh
                    name="Cube 111"
                    geometry={nodes["Cube 111"].geometry}
                    material={materials.very_light_grey}
                    castShadow
                    receiveShadow
                    position={[222.64, 136.65, 158.96]}
                    scale={[2.61, 2.69, 0.47]}
                />
                <mesh
                    name="Cube 16"
                    geometry={nodes["Cube 16"].geometry}
                    material={materials.very_light_grey}
                    castShadow
                    receiveShadow
                    position={[-0.38, 230.29, 3.53]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.64, 2.68, 1.56]}
                />
                <mesh
                    name="Cube 17"
                    geometry={nodes["Cube 17"].geometry}
                    material={materials.very_light_grey}
                    castShadow
                    receiveShadow
                    position={[222.46, 135.12, -0.15]}
                    scale={[2.33, 1.94, 1.56]}
                />
                <mesh
                    name="Cube 19"
                    geometry={nodes["Cube 19"].geometry}
                    material={materials.very_light_grey}
                    castShadow
                    receiveShadow
                    position={[223.12, 5.81, -0.15]}
                    scale={[2.58, 1.33, 1.61]}
                />
                <mesh
                    name="Cube 18"
                    geometry={nodes["Cube 18"].geometry}
                    material={materials.very_light_grey}
                    castShadow
                    receiveShadow
                    position={[-223.12, 5.81, -0.15]}
                    scale={[2.58, 1.33, 1.61]}
                />
                <mesh
                    name="Cube 62"
                    geometry={nodes["Cube 62"].geometry}
                    material={materials.very_light_grey}
                    castShadow
                    receiveShadow
                    position={[-223.12, 135.12, -0.15]}
                    scale={[2.33, 1.94, 1.56]}
                />
                <mesh
                    name="Cube9"
                    geometry={nodes.Cube9.geometry}
                    material={materials.table}
                    castShadow
                    receiveShadow
                    position={[-1.06, 268.85, -0.15]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[1.53, 1.9, 1.43]}
                />
            </group>
        </>
    );
};

export default Desk;
