import { jwtDecode } from "jwt-decode";

export const decode = (token)=>{
    if(!token){
        return {}
    }
    const {id, role} = jwtDecode(token)
    return {id, role}
}