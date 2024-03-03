const Iphone = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="iPhone 14 Pro"
                position={[81.53, -84.83, 218.62]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.05}>
                <group name="Dynamic Island" position={[-11.4, 260.62, 20.01]}>
                    <group
                        name="Group"
                        position={[11.58, -12.26, 1.28]}
                        rotation={[0, 0, 0]}
                        scale={1}>
                        <mesh
                            name="Ellipse 22"
                            geometry={nodes["Ellipse 22"].geometry}
                            material={materials["Untitled Material"]}
                            castShadow
                            receiveShadow
                            position={[27.83, 0, -0.35]}
                        />
                        <mesh
                            name="Ellipse1"
                            geometry={nodes.Ellipse1.geometry}
                            material={materials["Untitled Material"]}
                            castShadow
                            receiveShadow
                            position={[27.83, 0, -0.81]}
                        />
                        <mesh
                            name="Rectangle"
                            geometry={nodes.Rectangle.geometry}
                            material={materials["Black Border"]}
                            castShadow
                            receiveShadow
                            position={[0, 0, -1.07]}
                        />
                    </group>
                    <mesh
                        name="Rectangle 53"
                        geometry={nodes["Rectangle 53"].geometry}
                        material={materials["Untitled Material"]}
                        castShadow
                        receiveShadow
                        position={[11.5, 8.79, -0.01]}
                    />
                </group>
                <group name="Connectors" position={[0.1, 7.83, 4.12]}>
                    <mesh
                        name="Rectangle 4"
                        geometry={nodes["Rectangle 4"].geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[76.09, 137.8, 0]}
                        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                        scale={1}
                    />
                    <mesh
                        name="Rectangle 32"
                        geometry={nodes["Rectangle 32"].geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[-62.45, -137.8, 0]}
                        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                        scale={1}
                    />
                    <mesh
                        name="Rectangle 23"
                        geometry={nodes["Rectangle 23"].geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[0, -215.43, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={1}
                    />
                    <mesh
                        name="Rectangle1"
                        geometry={nodes.Rectangle1.geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[0, 210.74, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={1}
                    />
                </group>
                <group name="Bottom Details" position={[7.91, -261.25, 4.12]}>
                    <mesh
                        name="Ellipse 6"
                        geometry={nodes["Ellipse 6"].geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[-35.18, 0.08, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Ellipse 5"
                        geometry={nodes["Ellipse 5"].geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[59.18, 0.08, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Ellipse 61"
                        geometry={nodes["Ellipse 61"].geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[-51.18, 0.08, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Ellipse 4"
                        geometry={nodes["Ellipse 4"].geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[51.18, 0.08, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Ellipse 3"
                        geometry={nodes["Ellipse 3"].geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[43.18, 0.08, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Ellipse 62"
                        geometry={nodes["Ellipse 62"].geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[-59.18, 0.08, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Ellipse 23"
                        geometry={nodes["Ellipse 23"].geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[35.18, 0.08, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Ellipse2"
                        geometry={nodes.Ellipse2.geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[20.18, 0.08, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Rectangle 24"
                        geometry={nodes["Rectangle 24"].geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[-7.82, -0.08, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Rectangle2"
                        geometry={nodes.Rectangle2.geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[-7.82, 0.08, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                </group>
                <group
                    name="Logo"
                    position={[26.43, 67.14, -10.68]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.07, 0.07, 0]}>
                    <mesh
                        name="Untitled"
                        geometry={nodes.Untitled.geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[181, -238, 0]}
                    />
                    <mesh
                        name="Untitled1"
                        geometry={nodes.Untitled1.geometry}
                        material={materials["Pink Items"]}
                        castShadow
                        receiveShadow
                        position={[423, -1, 0.01]}
                    />
                </group>
                <group
                    name="Camera"
                    position={[53.08, 198.93, -18.9]}
                    rotation={[0, 0, 0]}
                    scale={1.16}>
                    <mesh
                        name="Cube 22"
                        geometry={nodes["Cube 22"].geometry}
                        material={materials["camera hold inner"]}
                        castShadow
                        receiveShadow
                        position={[0.24, -2.53, -1.13]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={0.86}
                    />
                    <mesh
                        name="Cube3"
                        geometry={nodes.Cube3.geometry}
                        material={materials.Metal}
                        castShadow
                        receiveShadow
                        position={[0.24, -2.53, -1.81]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={0.86}
                    />
                    <group
                        name="Light"
                        position={[-25.87, 36.93, -1.91]}
                        rotation={[0, 0, 0]}
                        scale={[0.94, 0.94, 0.85]}>
                        <mesh
                            name="Ellipse3"
                            geometry={nodes.Ellipse3.geometry}
                            material={materials["Camera Lens 2 Inner"]}
                            castShadow
                            receiveShadow
                            position={[0.13, 0.39, -2.25]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[1, 1, 1.11]}
                        />
                        <mesh
                            name="Ellipse 24"
                            geometry={nodes["Ellipse 24"].geometry}
                            material={materials["Camera Lens 2"]}
                            castShadow
                            receiveShadow
                            position={[0, 0, 0.66]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[0.91, 0.91, 1]}
                        />
                        <mesh
                            name="Ellipse4"
                            geometry={nodes.Ellipse4.geometry}
                            material={materials["Camera Lens 2"]}
                            castShadow
                            receiveShadow
                            position={[0, 0, 0.34]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[0.91, 0.91, 1]}
                        />
                    </group>
                    <mesh
                        name="Ellipse 31"
                        geometry={nodes["Ellipse 31"].geometry}
                        material={materials["Untitled Material"]}
                        castShadow
                        receiveShadow
                        position={[-25.87, -41.02, -1.38]}
                        rotation={[-Math.PI, 0, Math.PI]}
                        scale={[0.86, 0.86, 0.85]}
                    />
                    <group
                        name="Cam2 2"
                        position={[25.45, -30.01, -0.78]}
                        rotation={[0, 0, 0]}
                        scale={0.86}>
                        <mesh
                            name="Ellipse 7"
                            geometry={nodes["Ellipse 7"].geometry}
                            material={materials["Pink Items"]}
                            castShadow
                            receiveShadow
                            position={[0, 0, 0.93]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 63"
                            geometry={nodes["Ellipse 63"].geometry}
                            material={materials["Black Border"]}
                            castShadow
                            receiveShadow
                            position={[0, 0, 0.5]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 10"
                            geometry={nodes["Ellipse 10"].geometry}
                            material={materials["glass lenses"]}
                            castShadow
                            receiveShadow
                            position={[-0.17, -0.12, -2.07]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 51"
                            geometry={nodes["Ellipse 51"].geometry}
                            material={materials["Untitled Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.17, -0.12, 1.1]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 41"
                            geometry={nodes["Ellipse 41"].geometry}
                            material={materials["Untitled Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.5, -0.19, 1.6]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 9"
                            geometry={nodes["Ellipse 9"].geometry}
                            material={materials.hand}
                            castShadow
                            receiveShadow
                            position={[-3.5, 2, -2.32]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={0.5}
                        />
                        <mesh
                            name="Ellipse 8"
                            geometry={nodes["Ellipse 8"].geometry}
                            material={materials.hand}
                            castShadow
                            receiveShadow
                            position={[1.5, -2, -2.32]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 32"
                            geometry={nodes["Ellipse 32"].geometry}
                            material={materials["Black Border"]}
                            castShadow
                            receiveShadow
                            position={[-0.5, 0, 2.5]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                    </group>
                    <group
                        name="Cam2"
                        position={[-25.3, -2.16, -0.78]}
                        rotation={[0, 0, 0]}
                        scale={0.86}>
                        <mesh
                            name="Ellipse 71"
                            geometry={nodes["Ellipse 71"].geometry}
                            material={materials["Pink Items"]}
                            castShadow
                            receiveShadow
                            position={[0, 0, 0.93]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 64"
                            geometry={nodes["Ellipse 64"].geometry}
                            material={materials["Black Border"]}
                            castShadow
                            receiveShadow
                            position={[0, 0, 0.5]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 101"
                            geometry={nodes["Ellipse 101"].geometry}
                            material={materials["glass lenses"]}
                            castShadow
                            receiveShadow
                            position={[-0.17, -0.12, -2.07]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 52"
                            geometry={nodes["Ellipse 52"].geometry}
                            material={materials["Untitled Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.17, -0.12, 1.1]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 42"
                            geometry={nodes["Ellipse 42"].geometry}
                            material={materials["Untitled Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.5, -0.19, 1.6]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 91"
                            geometry={nodes["Ellipse 91"].geometry}
                            material={materials.hand}
                            castShadow
                            receiveShadow
                            position={[-3.5, 2, -2.32]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={0.5}
                        />
                        <mesh
                            name="Ellipse 81"
                            geometry={nodes["Ellipse 81"].geometry}
                            material={materials.hand}
                            castShadow
                            receiveShadow
                            position={[1.5, -2, -2.32]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 33"
                            geometry={nodes["Ellipse 33"].geometry}
                            material={materials["Black Border"]}
                            castShadow
                            receiveShadow
                            position={[-0.5, 0, 2.5]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                    </group>
                    <group
                        name="Cam1"
                        position={[26.18, 23.96, -0.78]}
                        rotation={[0, 0, 0]}
                        scale={0.86}>
                        <mesh
                            name="Ellipse 72"
                            geometry={nodes["Ellipse 72"].geometry}
                            material={materials["Pink Items"]}
                            castShadow
                            receiveShadow
                            position={[0, 0, 0.93]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 65"
                            geometry={nodes["Ellipse 65"].geometry}
                            material={materials["Black Border"]}
                            castShadow
                            receiveShadow
                            position={[0, 0, 0.5]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 102"
                            geometry={nodes["Ellipse 102"].geometry}
                            material={materials["glass lenses"]}
                            castShadow
                            receiveShadow
                            position={[-0.17, -0.12, -2.07]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 53"
                            geometry={nodes["Ellipse 53"].geometry}
                            material={materials["Untitled Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.17, -0.12, 1.1]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 43"
                            geometry={nodes["Ellipse 43"].geometry}
                            material={materials["Untitled Material"]}
                            castShadow
                            receiveShadow
                            position={[-0.5, -0.19, 1.6]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 92"
                            geometry={nodes["Ellipse 92"].geometry}
                            material={materials.hand}
                            castShadow
                            receiveShadow
                            position={[-3.5, 2, -2.32]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={0.5}
                        />
                        <mesh
                            name="Ellipse 82"
                            geometry={nodes["Ellipse 82"].geometry}
                            material={materials.hand}
                            castShadow
                            receiveShadow
                            position={[1.5, -2, -2.32]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            name="Ellipse 34"
                            geometry={nodes["Ellipse 34"].geometry}
                            material={materials["Black Border"]}
                            castShadow
                            receiveShadow
                            position={[-0.5, 0, 2.5]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                    </group>
                </group>
                <group
                    name="Body-Screen"
                    position={[10.73, 26.77, 4.95]}
                    rotation={[0, 0, 0]}
                    scale={[1.02, 1.02, 1.04]}>
                    <mesh
                        name="Screen"
                        geometry={nodes.Screen.geometry}
                        material={materials["Untitled Material"]}
                        castShadow
                        receiveShadow
                        position={[-10.45, -18.61, 14.55]}
                        scale={[0.98, 0.98, 0.96]}
                    />
                    <mesh
                        name="Screen Border"
                        geometry={nodes["Screen Border"].geometry}
                        material={materials["Black Border"]}
                        castShadow
                        receiveShadow
                        position={[-10.45, -18.61, 14.39]}
                        rotation={[-Math.PI, 0, Math.PI]}
                        scale={[1.08, 1.08, 1.06]}
                    />
                    <mesh
                        name="Back Side"
                        geometry={nodes["Back Side"].geometry}
                        material={materials.Metal}
                        castShadow
                        receiveShadow
                        position={[-10.04, -18.07, -9.56]}
                        rotation={[-Math.PI, 0, Math.PI]}
                        scale={[1.08, 1.08, 1.06]}
                    />
                    <group
                        name="Left Buttons"
                        position={[-139.66, 74.64, 0.26]}
                        scale={[0.98, 0.98, 0.96]}>
                        <mesh
                            name="Ellipse5"
                            geometry={nodes.Ellipse5.geometry}
                            material={materials["Pink Items"]}
                            castShadow
                            receiveShadow
                            position={[-0.02, -262.95, -0.09]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={1}
                        />
                        <mesh
                            name="Rectangle 9"
                            geometry={nodes["Rectangle 9"].geometry}
                            material={materials["Rectangle 9 Material"]}
                            castShadow
                            receiveShadow
                            position={[0.77, 61.22, -0.26]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={[1.04, 1.02, 1.02]}
                        />
                        <mesh
                            name="Rectangle 8"
                            geometry={nodes["Rectangle 8"].geometry}
                            material={materials["Pink Items"]}
                            castShadow
                            receiveShadow
                            position={[-1.51, 61.24, 2.07]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={[1.04, 1.02, 1.02]}
                        />
                        <mesh
                            name="Rectangle 71"
                            geometry={nodes["Rectangle 71"].geometry}
                            material={materials["Pink Items"]}
                            castShadow
                            receiveShadow
                            position={[-1.51, 11.96, 0]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={[1.04, 1.02, 1.02]}
                        />
                        <mesh
                            name="Rectangle 11"
                            geometry={nodes["Rectangle 11"].geometry}
                            material={materials.Metal}
                            castShadow
                            receiveShadow
                            position={[0.24, -241.12, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={[1.04, 1.02, 1.02]}
                        />
                        <mesh
                            name="Rectangle 10"
                            geometry={nodes["Rectangle 10"].geometry}
                            material={materials["Pink Items"]}
                            castShadow
                            receiveShadow
                            position={[0.54, -241.12, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={[1.04, 1.02, 1.02]}
                        />
                        <mesh
                            name="Rectangle 54"
                            geometry={nodes["Rectangle 54"].geometry}
                            material={materials["Pink Items"]}
                            castShadow
                            receiveShadow
                            position={[-1.51, -38.91, 0]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={[1.04, 1.02, 1.02]}
                        />
                    </group>
                    <group
                        name="Right Buttons"
                        position={[118.57, -3.06, 0.26]}
                        scale={[0.98, 0.98, 0.96]}>
                        <mesh
                            name="Button"
                            geometry={nodes.Button.geometry}
                            material={materials["Pink Items"]}
                            castShadow
                            receiveShadow
                            position={[-0.25, -60.23, 0]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={[1.04, 1.02, 1.02]}
                        />
                        <mesh
                            name="Button1"
                            geometry={nodes.Button1.geometry}
                            material={materials["Pink Items"]}
                            castShadow
                            receiveShadow
                            position={[-1.53, 51.46, 0]}
                            rotation={[0, Math.PI / 2, 0]}
                            scale={[1.04, 1.02, 1.02]}
                        />
                    </group>
                    <mesh
                        name="Metal Border"
                        geometry={nodes["Metal Border"].geometry}
                        material={materials.Metal}
                        castShadow
                        receiveShadow
                        position={[-10.45, -18.61, 13.04]}
                        rotation={[-Math.PI, 0, Math.PI]}
                        scale={[1.08, 1.08, 1.06]}
                    />
                </group>
            </group>
            <group
                name="Photos Wall"
                position={[178.23, 75.19, 178.03]}
                rotation={[0, -Math.PI / 2, 0]}>
                <mesh
                    name="Cube 96"
                    geometry={nodes["Cube 96"].geometry}
                    material={materials.plant}
                    castShadow
                    receiveShadow
                    position={[-92.46, 11.47, 5.15]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={1}
                />
                <mesh
                    name="Cube 95"
                    geometry={nodes["Cube 95"].geometry}
                    material={materials.white_broken}
                    castShadow
                    receiveShadow
                    position={[-14.91, 25.59, 5.15]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={1}
                />
                <mesh
                    name="Cube 94"
                    geometry={nodes["Cube 94"].geometry}
                    material={materials.purple}
                    castShadow
                    receiveShadow
                    position={[77.26, 14.01, 5.15]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={1}
                />
                <mesh
                    name="Cube 93"
                    geometry={nodes["Cube 93"].geometry}
                    material={materials.lightred}
                    castShadow
                    receiveShadow
                    position={[-15.16, -25.17, 5.15]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={1}
                />
                <mesh
                    name="Merged Geometry"
                    geometry={nodes["Merged Geometry"].geometry}
                    material={materials.white}
                    castShadow
                    receiveShadow
                    position={[0, 0, 4.66]}
                />
            </group>
        </>
    );
};

export default Iphone;
