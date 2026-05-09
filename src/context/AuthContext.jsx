import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export function AuthProvider ({children}){
    const [token, setToken] = useState(localStorage.getItem("token"))

    const logout = async ()=>{
        localStorage.removeItem("token")
        setToken(null)
        return true
    }

    return (
       <AuthContext.Provider value={{logout,token, isAuthorized : !!token, setToken}}>
       {children}
       </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}