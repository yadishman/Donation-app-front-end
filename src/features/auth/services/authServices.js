import axios from "axios"

export const registerUser = async (username, email, password, setToken) =>{
   const response = await axios.post("http://localhost:5000/user", {
        username,
        email,
        password
    })

    localStorage.setItem('token', response.data)
    setToken(response.data)
}

export const loginUser = async (email, password, setToken) => {
    const response = await axios.post("http://localhost:5000/auth", {
        email,
        password
    })
    localStorage.setItem('token', response.data)
    setToken(response.data)
}