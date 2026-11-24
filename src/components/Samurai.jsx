import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations, Environment, OrbitControls } from '@react-three/drei'
import { useMotionValue, useSpring } from 'framer-motion';

export function Samurai(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/mech_drone.glb')
  const { actions } = useAnimations(animations, group)

  // Play the drone's built-in Sketchfab animation automatically
  useEffect(() => {
    const firstAction = Object.values(actions)[0]
    if (firstAction) {
      firstAction.reset().fadeIn(0.5).play()
    }
  }, [actions])
  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, {damping:50});
  useEffect(() => {
    ySpring.set(-1);
  },[ySpring]);
  useFrame(() => {
    group.current.position.y = ySpring.get();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
          <group name="DroneFBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Robot}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="droid" rotation={[-Math.PI / 2, 0, 0]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

// useGLTF.preload('/models/mech_drone.glb')

// Use this Canvas wrapper over your samurai hero section
export default function DroneOverlay({isMobile}) {
    const desktopPosition = [2.0, -0.5, 0];
    const mobilePosition = [0, -2.2, 0];
  return (
    <>
      <Environment preset="night" />

      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 5, -5]} intensity={2.5} color="#bae6fd" />
      <pointLight position={[4, 3, 2]} intensity={3} color="#f43f5e" />

      <Samurai
      scale={isMobile ? 2.5 : 3.5}
      position={isMobile ? mobilePosition : desktopPosition}
      rotation={[0, isMobile ? 2.5 : 2.5, 0]}
      />
    </>
  )
}