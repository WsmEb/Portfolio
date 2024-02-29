import { ContactShadows, Environment, Float, Html, PresentationControls, Text, useGLTF } from "@react-three/drei";


const Laptop = () => {


  const laptopObject = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");




  return   <>
        <Environment preset="city" />
        <PresentationControls
        global
        rotation={[0.13,0.1,0]}
        polar={[-0.4,0.2]}
        azimuth={[-1,0.75]}
        // config={{mass:2,tension:400}}
        // snap={{mass:4,tension:400}}
        
        >
          <Float rotationIntensity={0.4} >
            <rectAreaLight
            color={"#5E1675"}
            width={2.5}
            height={1.65}
            intensity={65}
            rotation={[0.1,Math.PI,0]}
            position={[0,0.35,-1.35]}
            />
          <primitive
                object={laptopObject.scene}
                position-y={- 1}
                >
                  <Html
                  transform
                  wrapperClass="iframework"
                  distanceFactor={1.17}
                  position={[0,1.56,-1.4]}
                  rotation-x={-0.256}
                  >
                    <iframe  src="http://energetic-birthday-ouassim01.surge.sh/" />
                  </Html>
          </primitive>
          <Text
          font="./fonts/HoltwoodOneSC-Regular.ttf"
          fontSize={0.25}
          position={[2,0.75,0.75]}
          rotation-y={-1.25}
          maxWidth={2}
          >
            OUASSIM ELBACHIRI
          </Text>
          </Float>
        </PresentationControls>
        <ContactShadows
            position-y={-1.4}
            opacity={1}
            scale={5}
            blur={5}
            color={"#5E1675"}
        />
          </>
}
 
export default Laptop;