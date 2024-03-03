const BackWall = ({ nodes, materials, wallBack }) => {
    return (
        <>
            <mesh
                name="Boolean 2"
                geometry={nodes["Boolean 2"].geometry}
                material={nodes["Boolean 2"].material}
                castShadow
                receiveShadow
                position={[188.63, -25.96, 322.76]}
            />
            <mesh
                ref={wallBack}
                name="Boolean"
                geometry={nodes.Boolean.geometry}
                material={nodes.Boolean.material}
                castShadow
                receiveShadow
                position={[189.63, -21.93, 201.15]}
            />
        </>
        // <mesh
        //     ref={wallBack}
        //     name="Wall-back"
        //     geometry={nodes["Wall-back"].geometry}
        //     material={materials.Walls}
        //     castShadow
        //     receiveShadow
        //     position={[200.63, -22, 200.67]}
        //     rotation={[0, -Math.PI / 2, 0]}
        //     onPointerEnter={(e) => e.stopPropagation()}
        // />
    );
};

export default BackWall;
