import { Suspense } from 'react'
import Ball from './Ball.js';
import Plane from './Plane.js';
import Wall from './Wall.js';
import { Canvas } from '@react-three/fiber'
import { RecoilRoot } from "recoil";
import { Physics } from '@react-three/cannon'
import {memo} from 'react';


function World({movement, setLoaded, started}) {
  const cameraPosition = [15, 10, 0]
  
  return (
      <Canvas style={{height: "100%"}}camera={{ fov: 75, near: 0.1, far: 1000, position: cameraPosition }}>
        <Physics
          gravity={[0, -90.81, 0]}
          defaultContactMaterial={{
            friction: 9,
            restitution: 0.5,
            contactEquationStiffness: 1e9,
            contactEquationRelaxation: 4,
            frictionEquationStiffness: 1e9,
            frictionEquationRelaxation: 4,
          }}>
          <RecoilRoot>
            <Suspense fallback={null}>
              <Wall rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[200, 1, 1]} position={[-100, 0, 0]}/>
              <Wall rotation={[-Math.PI / 2, 0,0]} scale={[200, 1, 1]} position={[0, 0, -100]}/>
              <Wall rotation={[-Math.PI / 2, 0,0]} scale={[200, 1, 1]} position={[0, 0, 100]}/>
              <Wall rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[200, 1, 1]} position={[100, 0, 0]}/>
              {started && <Ball movement={movement} /> }
              <Plane setLoaded={setLoaded}/>
            </Suspense>
          </RecoilRoot>
        </Physics>
      </Canvas>
  );
}

export default memo(World);
