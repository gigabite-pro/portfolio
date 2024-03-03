const LeftWallUI = ({ nodes, materials }) => {
    return (
        <>
            <group
                name="Group 2"
                position={[58.12, -14.24, 34.34]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.18}>
                <group
                    name="cd-ui"
                    position={[-9.05, -130.44, 411.6]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[-1, 1, 1]}>
                    <mesh
                        name="Torus"
                        geometry={nodes.Torus.geometry}
                        material={materials["Torus Material"]}
                        castShadow
                        receiveShadow
                        position={[88.07, 7.97, 8.23]}
                        rotation={[0, 0, 0]}
                        scale={1}
                    />
                    <mesh
                        name="Cylinder"
                        geometry={nodes.Cylinder.geometry}
                        material={materials["ui-2"]}
                        castShadow
                        receiveShadow
                        position={[93.01, 10.86, 5.56]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.68}
                    />
                    <mesh
                        name="Rectangle 5"
                        geometry={nodes["Rectangle 5"].geometry}
                        material={materials["blue-b-1"]}
                        castShadow
                        receiveShadow
                        position={[70.76, 8.84, -8.28]}
                        rotation={[0, 0, 0]}
                        scale={0.68}
                    />
                </group>
                <group
                    name="video-ui"
                    position={[-17.22, 43.28, -341.48]}
                    rotation={[0, -Math.PI / 2, 0]}>
                    <mesh
                        name="Rectangle 7"
                        geometry={nodes["Rectangle 7"].geometry}
                        material={materials["main1-1"]}
                        castShadow
                        receiveShadow
                        position={[-17.34, -156.4, 1.42]}
                        rotation={[0, 0, 0]}
                        scale={[0.96, 1, 1]}
                    />
                    <mesh
                        name="Rectangle 6"
                        geometry={nodes["Rectangle 6"].geometry}
                        material={materials["main1-1"]}
                        castShadow
                        receiveShadow
                        position={[-81.37, -111.26, 1.42]}
                        rotation={[0, 0, 0]}
                        scale={[0.96, 1, 1]}
                    />
                    <mesh
                        name="Rectangle 51"
                        geometry={nodes["Rectangle 51"].geometry}
                        material={materials["main1-1"]}
                        castShadow
                        receiveShadow
                        position={[-54.41, -63.9, 1.42]}
                        rotation={[0, 0, 0]}
                        scale={[0.96, 1, 1]}
                    />
                    <mesh
                        name="Triangle"
                        geometry={nodes.Triangle.geometry}
                        material={materials["Triangle Material"]}
                        castShadow
                        receiveShadow
                        position={[4.98, 90.9, 9.53]}
                        rotation={[0, 0, -Math.PI / 2]}
                        scale={1}
                    />
                    <mesh
                        name="Ellipse"
                        geometry={nodes.Ellipse.geometry}
                        material={materials["Ellipse Material"]}
                        castShadow
                        receiveShadow
                        position={[-1.1, 90.63, 8.53]}
                    />
                    <mesh
                        name="Rectangle 3"
                        geometry={nodes["Rectangle 3"].geometry}
                        material={materials["blue-ui"]}
                        castShadow
                        receiveShadow
                        position={[-0.08, 90.21, 0.09]}
                        rotation={[0, 0, 0]}
                        scale={[0.96, 1, 1]}
                    />
                    <mesh
                        name="Rectangle 2"
                        geometry={nodes["Rectangle 2"].geometry}
                        material={materials["blue-b-1"]}
                        castShadow
                        receiveShadow
                        position={[0, 0, -15.53]}
                    />
                </group>
                <group
                    name="bg-ui"
                    position={[42.01, 0, 39.03]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={0.66}>
                    <mesh
                        name="Ellipse 2"
                        geometry={nodes["Ellipse 2"].geometry}
                        material={materials["Ellipse 2 Material"]}
                        castShadow
                        receiveShadow
                        position={[277.58, -45.1, 37.49]}
                        scale={1.52}
                    />
                    <mesh
                        name="Cylinder 3"
                        geometry={nodes["Cylinder 3"].geometry}
                        material={materials["main1-1"]}
                        castShadow
                        receiveShadow
                        position={[-352.58, 386.28, 14.38]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={1.41}
                    />
                    <mesh
                        name="Cylinder 2"
                        geometry={nodes["Cylinder 2"].geometry}
                        material={materials["main1-1"]}
                        castShadow
                        receiveShadow
                        position={[-458.73, 386.28, 14.38]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={1.41}
                    />
                    <mesh
                        name="Cylinder1"
                        geometry={nodes.Cylinder1.geometry}
                        material={materials["main1-1"]}
                        castShadow
                        receiveShadow
                        position={[-568.41, 386.28, 14.38]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={1.41}
                    />
                    <mesh
                        name="Rectangle 61"
                        geometry={nodes["Rectangle 61"].geometry}
                        material={materials.blue}
                        castShadow
                        receiveShadow
                        position={[-288.86, -134.4, 33.09]}
                    />
                    <mesh
                        name="Rectangle 52"
                        geometry={nodes["Rectangle 52"].geometry}
                        material={materials.blue}
                        castShadow
                        receiveShadow
                        position={[-288.86, 175.22, 33.09]}
                    />
                    <mesh
                        name="Rectangle 31"
                        geometry={nodes["Rectangle 31"].geometry}
                        material={materials["Rectangle 31 Material"]}
                        castShadow
                        receiveShadow
                        position={[0, -44, 5.66]}
                    />
                    <mesh
                        name="Rectangle 21"
                        geometry={nodes["Rectangle 21"].geometry}
                        material={materials["Rectangle 21 Material"]}
                        castShadow
                        receiveShadow
                        position={[0, 0, -23.62]}
                    />
                </group>
            </group>
        </>
    );
};

export default LeftWallUI;
