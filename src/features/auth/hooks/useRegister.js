import { useState } from "react";
import { registerUser } from "../services/authServices";

export default function useRegister (){
    
    const [error, setError] = useState(false)

    const addUser = async (username, email, password, setToken) => {
        try{
            await registerUser(username,email,password, setToken)
            return true
        }
        catch (error){
            setError(true)
            return false
        }
    }

    return { error, addUser}
}