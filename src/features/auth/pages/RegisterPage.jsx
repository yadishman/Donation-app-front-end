import { useState } from "react";
import "./Auth.css";
import useRegister from "../hooks/useRegister";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";

export default function RegisterPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [match, setMatch] = useState(false)
    const {error, addUser} = useRegister()
    const {setToken} = useAuth()
    const navigate = useNavigate()

    const submitUser = async(event) =>{
      event.preventDefault()
      if(password!=rePassword){
        setMatch(true)
        return
      }

      const regSucess = await addUser(username, email, password, setToken)
      if(regSucess){
      navigate("/")
      }
    }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="logo">DonateHope</h1>
        <h2>Create Account</h2>

        <form className="auth-form" onSubmit={submitUser}>
          <input type="text" placeholder="Full Name" required onChange={(event) => {setUsername(event.target.value)
           
          }}/>
          <input type="email" placeholder="Email" required onChange={(event) => {setEmail(event.target.value)}}/>
          <input type="password" placeholder="Password" required onChange={(event) => {setPassword(event.target.value)}}/>
          <input type="password" placeholder="Confirm Password" required onChange={(event) => {setRePassword(event.target.value)}}/>
          {match && <p className="password-error">The verifying password doesn't match</p>}

          <button type="submit" className="primary-btn">
            Register
          </button>
        </form>

        <p className="switch-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}