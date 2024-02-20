import Userlogin from "./pages/user/login"
import Userregister from "./pages/user/register";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
   return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Userlogin/>}/>
      <Route path='/register' element={<Userregister/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
