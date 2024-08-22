import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { Route, Routes } from "react-router-dom"
import DashbordLoginRegister from "./pages/dashbordLoginRegister/DashbordLoginRegister"
import Home from "./pages/home/Home"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashbordAccount" element={<DashbordLoginRegister />}/>
      </Routes>
    </>
  )
}

export default App
