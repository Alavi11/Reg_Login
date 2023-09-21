import { Route, Routes } from "react-router-dom";
import Reg from "./component/reg/Reg";



function App() {


  return  <div className="w-full h-screen bg-manual flex justify-center items-center">
                <Routes>
                        <Route path="" element={<Reg/>}/>
                </Routes>
        </div>

      

}

export default App;
