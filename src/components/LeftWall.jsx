const LeftWall = ({ nodes, materials, wallLeft, camera, controls }) => {
    return (
        <mesh
            ref={wallLeft}
            name="Wall-left"
            geometry={nodes["Wall-left"].geometry}
            material={materials.Walls}
            castShadow
            receiveShadow
            position={[0, -22.21, 0]}
            onPointerEnter={(e) => e.stopPropagation()}
        />
    );
};

export default LeftWall;
