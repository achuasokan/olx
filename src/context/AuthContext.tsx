import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

//~ Creating a context for authentication
const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)

    //~ Effect to listen for authentication state changes
  useEffect(()=> {
    return onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  },[])

  //~ Login with google
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)

    } catch(error) {
      console.log(error);
    }
  }

  //~ Log out user
  const logout = async () => {
    await signOut(auth)
  }

  //~ Providing the user and authentication functions to the context
  return (
    <AuthContext.Provider value={{user, loginWithGoogle,logout}}>
      {children}
    </AuthContext.Provider>
  )
}

//~ Custom hook to use the AuthContext
export const userAuth = () => {
 const context = useContext(AuthContext)
 if(!context) {
  throw new Error("userAuth must be used within an AuthProvider");   //~ Error if used outside of provider
}
return context;
}