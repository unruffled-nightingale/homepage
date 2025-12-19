import { useFrame } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'

import { useRef } from 'react';


function Ball({ movement }) {

  const counter = useRef(0);
  const ballPosRef = useRef([6, 16, -8])
  const { moveForward, moveBackward, moveLeft, moveRight } = movement;
  const colorMap = useTexture('assets/ball6.png');


  const [ref, api] = useSphere(() => ({
    args: [1, 64],
    mass: 3,
    position: [ballPosRef.current[0], ballPosRef.current[1], ballPosRef.current[2]],
    angularDamping: 0.5,
    rotation: [3.2, 1.5, 0]
  }))

  useFrame((state, delta) => {
    counter.current++
    api.applyImpulse([(moveForward - moveBackward), 0, (moveRight - moveLeft)], [0, 0, 0])
    api.position.subscribe(p => ballPosRef.current = p)
  })

  return (
    <>
      <mesh
        castShadow
        ref={ref}
        scale={1.5}>
        <sphereGeometry args={[0.5, 64]} />
        <meshBasicMaterial
          map={colorMap}
          toneMapped={false}
        />
      </mesh>
    </>
  )
}

export default Ball;