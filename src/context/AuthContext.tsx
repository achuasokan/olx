import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";


const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)

  useEffect(()=> {
    return onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  },[])

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)

    } catch(error) {
      console.log(error);
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{user, loginWithGoogle,logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const userAuth = () => {
 const context = useContext(AuthContext)
 if(!context) {
  throw new Error("userAuth must be used within an AuthProvider");   //~ Error if used outside of provider
}
return context;
}