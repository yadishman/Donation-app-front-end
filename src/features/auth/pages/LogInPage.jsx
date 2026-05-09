
import { useState } from "react";
import "./Auth.css";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const { error, signinUser } = useLogin()
  const {token, setToken} = useAuth()

  const handleSignin = async (event) => {
    event.preventDefault()
    const success = await signinUser(email, password, setToken)
    if (success) {
      navigate("/")
    }
  }
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="logo">DonateHope</h1>
        <h2>Login</h2>

        <form className="auth-form" onSubmit={handleSignin}>
          <input type="email" placeholder="Email" required onChange={(event) => { setEmail(event.target.value) }} />
          <input type="password" placeholder="Password" required onChange={(event) => { setPassword(event.target.value) }} />

          <button type="submit" className="primary-btn">
            Login
          </button>
        </form>

        <p className="switch-text">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}