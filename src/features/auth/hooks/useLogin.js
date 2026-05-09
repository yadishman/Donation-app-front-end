import { useState } from "react";
import { loginUser } from "../services/authServices";

export function useLogin() {

    const [error, setError] = useState(false)
    const signinUser = async (email, password,setToken) => {
        try {
            await loginUser(email, password, setToken)
            return true
        }
        catch (error) {
            console.log(error.response.data)
            setError(true)
            return false
        }

    }

    return {
        error, signinUser
    }
}