import { usePlane } from '@react-three/cannon'

function Plane({setLoaded}) {
  usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], mass: 0 }))

  return (
    <mesh receiveShadow scale={[200, 0.1, 200]} position={[0,0,0]} >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial 
        color={"white"} 
        toneMapped={false}
      />
    </mesh>
  )
}

export default Plane;