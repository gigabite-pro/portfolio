const Floor = ({ nodes, materials, floor }) => {
    return (
        <mesh
            ref={floor}
            name="Floor"
            geometry={nodes.Floor.geometry}
            material={materials.Walls}
            castShadow
            receiveShadow
            position={[0, -174.91, 200]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={1}
            onPointerEnter={(e) => e.stopPropagation()}
        />
    );
};

export default Floor;
