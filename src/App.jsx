import "./App.css"
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from "react"; 

const Cube = ({position, rotation, scale, color}) => {
  
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime)*2
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime)*2
  })


  return(
    <mesh position={position} ref={ref} onPointerOver={(e) => console.log("Over") }>
            <boxGeometry  args={[scale]}/>
            <meshStandardMaterial color={color}/>
          </mesh>
  )
}

const GroupCube = () => {
  const ref = useRef()

  useFrame((state,delta) => {
    ref.current.rotation.x += delta
  })
  return (
    <group ref={ref}>
            <Cube position={[2,0,0]} rotation={[0,0,0]} size={[1, 1, 1]} color={"yellow"}/>
            <Cube position={[-2,0,0]} rotation={[0,0,0]} size={[1, 1,1]} color={"yellow"}/>
            <Cube position={[0,-2,0]} rotation={[0,0,0]} size={[1, 1,1]} color={"orange"}/>
            <Cube position={[0,2,0]} rotation={[0,0,0]} size={[1, 1,1]} color={"orange"}/>
            </group>
  )
}


const App = () => {

  

    return (
        <Canvas>
          <ambientLight />
          <directionalLight position={[0,0,2]} intensity={0.4}/>
           <GroupCube />
        </Canvas>
    )
}


export default App
