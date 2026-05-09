import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute(){
    const {isAuthorized} = useAuth()
    return isAuthorized? <Navigate to="/" replace />:<Outlet />
}