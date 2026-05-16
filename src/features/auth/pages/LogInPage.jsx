import { useState } from "react";
import "./Auth.css";
import { useLogin } from "../hooks/useLogin";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../../../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const { error, signinUser, clearError } = useLogin()
  const { setToken, setUsername } = useAuth()

  const handleSignin = async (event) => {
    event.preventDefault()
    const success = await signinUser(email, password, setToken, setUsername)
    if (success) {
      navigate("/")
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="logo">GiveNow 💚</h1>
        <h2>Login</h2>

        {error && (
          <div className="auth-alert" role="alert">
            <span className="auth-alert-icon" aria-hidden>!</span>
            <div className="auth-alert-body">
              <p className="auth-alert-title">Couldn&apos;t sign you in</p>
              <p className="auth-alert-message">{error}</p>
            </div>
          </div>
        )}

        <form className="auth-form" onSubmit={handleSignin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            className={error ? 'input-error' : ''}
            onChange={(e) => {
              setEmail(e.target.value)
              if (error) clearError()
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            className={error ? 'input-error' : ''}
            onChange={(e) => {
              setPassword(e.target.value)
              if (error) clearError()
            }}
          />

          <button type="submit" className="primary-btn">
            Login
          </button>
        </form>

        <p className="switch-text">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
