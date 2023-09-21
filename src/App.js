import { Route, Routes } from "react-router-dom";
import Reg from "./component/reg/Reg";
import Log from "./component/log/Log";



function App() {


  return  <div className="w-full h-screen bg-manual flex justify-center items-center">
                <Routes>
                        <Route path="" element={<Reg/>}/>
                        <Route path="Login" element={<Log/>}/>

                </Routes>
        </div>

      

}

export default App;
