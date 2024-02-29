import { Canvas } from "@react-three/fiber"
import Laptop from "./Components/Object3d";
import { OrbitControls } from "@react-three/drei";
import DownloadCv from "./Components/DownloadCv";


function App() {

  const canvasHeight = window.innerHeight;

  return   <>
          <Canvas  style={{width:"100%",height:canvasHeight}} camera={{position:[0,1,3],far:200}} >
            <color  attach={"background"} args={["#000b0b"]}  />
            <Laptop/>
            <DownloadCv/>
            <OrbitControls
            enableZoom={true}
            enableRotate={false}
            />
          </Canvas>
           </>
  
}

export default App
