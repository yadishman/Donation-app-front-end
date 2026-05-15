import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import isTokenValid from "../utils/tokenValidation";

export default function PrivateRoute(){
    const {token} = useAuth()
    return isTokenValid(token)? <Outlet/>:<Navigate to="/login" replace />
}