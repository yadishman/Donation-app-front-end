import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import isTokenValid from "../utils/tokenValidation";

export default function PublicRoute(){
    const {token} = useAuth()
    return isTokenValid(token)? <Navigate to="/" replace />:<Outlet />
}