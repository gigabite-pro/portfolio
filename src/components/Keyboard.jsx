const Keyboard = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="keyboard"
                position={[117.51, -90.26, 154.64]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={27.48}>
                <group name="Scene">
                    <mesh
                        name="Case"
                        geometry={nodes.Case.geometry}
                        material={nodes.Case.material}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Keyboard_cable"
                        geometry={nodes.Keyboard_cable.geometry}
                        material={nodes.Keyboard_cable.material}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Keycaps"
                        geometry={nodes.Keycaps.geometry}
                        material={nodes.Keycaps.material}
                        castShadow
                        receiveShadow
                    />
                </group>
            </group>
        </>
    );
};

export default Keyboard;
