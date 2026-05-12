import { createContext, useContext, useState } from "react"
import isTokenValid from "../utils/tokenValidation"

const AuthContext = createContext()

export function AuthProvider ({children}){
    
    const [token, setToken] = useState(()=>{
        const currentToken = localStorage.getItem('token')
        if (isTokenValid(currentToken)){
            return currentToken
        }
        else{
            return null
        }
    })

    const logout = async ()=>{
        localStorage.removeItem("token")
        setToken(null)
        return true
    }

    return (
       <AuthContext.Provider value={{logout,token, isTokenValid,  setToken}}>
       {children}
       </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}