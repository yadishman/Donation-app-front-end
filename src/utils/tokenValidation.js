import {jwtDecode} from 'jwt-decode'
export default function isTokenValid(token) {
    if (!token) return false

    try {
        const decoded = jwtDecode(token)

        return decoded.exp * 1000 > Date.now()
    } catch {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        return false
    }
}