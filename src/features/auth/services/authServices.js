import axios from "axios"

export const registerUser = async (username, email, password, setToken, setUser) =>{
   const response = await axios.post("http://localhost:5000/user", {
        username,
        email,
        password
    })

    localStorage.setItem('token', response.data.token)
    localStorage.setItem('username', response.data.username)
    setToken(response.data.token)
    setUser(response.data.username)
}

export const loginUser = async (email, password, setToken, setUsername) => {
    const response = await axios.post("http://localhost:5000/auth", {
        email,
        password
    })
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('username', response.data.username)
    setToken(response.data.token)
    setUsername(response.data.username)
}