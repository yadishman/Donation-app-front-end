import { useState } from "react";
import { loginUser } from "../services/authServices";
import getAuthErrorMessage from "../utils/getAuthErrorMessage";

export function useLogin() {
    const [error, setError] = useState(null)

    const signinUser = async (email, password, setToken) => {
        setError(null)
        try {
            await loginUser(email, password, setToken)
            return true
        } catch (err) {
            setError(getAuthErrorMessage(err))
            return false
        }
    }

    const clearError = () => setError(null)

    return { error, signinUser, clearError }
}
