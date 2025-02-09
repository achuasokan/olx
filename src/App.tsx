import { useState } from "react"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import { AuthProvider } from "./context/AuthContext"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"


const App = () => {
  const [loginPop,setLoginPop] = useState(false)
  return(
    <>
    <AuthProvider>

    <Navbar  onloginPop={() => setLoginPop(true)} />
    { loginPop && <Login  setLoginPop={setLoginPop}/> }
    
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>


    </AuthProvider>

    </>
  )
}

export default App