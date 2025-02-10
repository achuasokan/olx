import { useState } from "react"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import { AuthProvider } from "./context/AuthContext"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Footer from "./components/Footer"
import ProductDetail from "./components/ProductDetail"


const App = () => {
  const [loginPop,setLoginPop] = useState(false)

  return(
    <>
    <AuthProvider>

    <Navbar  onloginPop={() => setLoginPop(true)} />
      
    { loginPop && <Login  setLoginPop={setLoginPop}/> }
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Detail/:id' element={<ProductDetail />} />
      </Routes>

      <Footer />

    </AuthProvider>

    </>
  )
}

export default App