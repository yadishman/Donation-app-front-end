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

    const [username, setUsername] = useState(localStorage.getItem('username'))

    const logout = async ()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        setToken(null)
        setUsername(null)
        return true
    }

    return (
       <AuthContext.Provider value={{logout,token, username, setToken, setUsername}}>
       {children}
       </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}