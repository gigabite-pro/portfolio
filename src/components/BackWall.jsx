const BackWall = ({ nodes, materials, wallBack }) => {
    return (
        <mesh
            ref={wallBack}
            name="Wall-back"
            geometry={nodes["Wall-back"].geometry}
            material={materials.Walls}
            castShadow
            receiveShadow
            position={[200.63, -22, 200.67]}
            rotation={[0, -Math.PI / 2, 0]}
            onPointerEnter={(e) => e.stopPropagation()}
        />
    );
};

export default BackWall;
