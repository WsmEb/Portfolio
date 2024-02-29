import { Html } from "@react-three/drei";


const DownloadCv = () => {
  return     <>
            <Html position={[-20,2,-14]} >
              <a  className="btn btn-outline-info fs-5 fw-bold" href="https://chocolate-cosetta-96.tiiny.site/" style={{minWidth:"200px"}} download > Download Cv </a>
            </Html>
            </>
}
 
export default DownloadCv;