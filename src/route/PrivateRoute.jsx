import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute(){
    const {isAuthorized} = useAuth()
    return isAuthorized? <Outlet/>:<Navigate to="/login" replace />
}