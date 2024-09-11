import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { Route, Routes } from "react-router-dom"
import DashbordLoginRegister from "./pages/dashbordLoginRegister/DashbordLoginRegister"
import Home from "./pages/home/Home"
import Perfumes from "./pages/Perfumes/Perfumes"
import PerfumesSexo from "./pages/PerfumesSexo/PerfumesSexo"
import Product from "./pages/Product/Product"
import EditAddress from "./pages/EditAddress/EditAddress"
import { useContext } from "react"
import { Context } from "./context/Login"


function App() {
  const {user} = useContext(Context)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {user?.name ? 
        <Route path="/editUser" element={<EditAddress user={user}/>} />:
        <Route path="/editUser" element={<Register />} />
        }
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashbordAccount" element={<DashbordLoginRegister />}/>
        <Route path="/:marca" element={<Perfumes />}/>
        <Route path="/:marca/masculino" element={<PerfumesSexo />}/>
        <Route path="/:marca/feminino" element={<PerfumesSexo />}/>
        <Route path="/:marca/:id" element={<Product />}/>
        </Routes>
    </>
  )
}

export default App
