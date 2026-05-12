import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute(){
    const {isTokenValid, token} = useAuth()
    return isTokenValid(token)? <Navigate to="/" replace />:<Outlet />
}