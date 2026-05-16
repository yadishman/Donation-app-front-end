import { useState } from "react";
import { registerUser } from "../services/authServices";
import getAuthErrorMessage from "../utils/getAuthErrorMessage";

export default function useRegister() {
    const [error, setError] = useState(null)

    const addUser = async (username, email, password, setToken, setUser) => {
        setError(null)
        try {
            await registerUser(username, email, password, setToken, setUser)
            return true
        } catch (err) {
            setError(getAuthErrorMessage(err))
            return false
        }
    }

    const clearError = () => setError(null)

    return { error, addUser, clearError }
}
