import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute(){
    const {isTokenValid, token} = useAuth()
    return isTokenValid(token)? <Outlet/>:<Navigate to="/login" replace />
}