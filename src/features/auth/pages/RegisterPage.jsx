import { useState } from "react";
import "./Auth.css";
import useRegister from "../hooks/useRegister";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../../../context/AuthContext";

export default function RegisterPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [matchError, setMatchError] = useState(false)

    const { error, addUser, clearError } = useRegister()
    const { setToken } = useAuth()
    const navigate = useNavigate()

    const submitUser = async (event) => {
        event.preventDefault()
        setMatchError(false)
        clearError()

        if (password !== rePassword) {
            setMatchError(true)
            return
        }

        const regSuccess = await addUser(username, email, password, setToken)
        if (regSuccess) {
            navigate("/")
        }
    }

    const hasError = Boolean(error || matchError)

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="logo">GiveNow 💚</h1>
                <h2>Create Account</h2>

                {error && (
                    <div className="auth-alert" role="alert">
                        <span className="auth-alert-icon" aria-hidden>!</span>
                        <div className="auth-alert-body">
                            <p className="auth-alert-title">Registration failed</p>
                            <p className="auth-alert-message">{error}</p>
                        </div>
                    </div>
                )}

                {matchError && !error && (
                    <div className="auth-alert auth-alert-warning" role="alert">
                        <span className="auth-alert-icon" aria-hidden>!</span>
                        <div className="auth-alert-body">
                            <p className="auth-alert-title">Passwords don&apos;t match</p>
                            <p className="auth-alert-message">Please make sure both password fields are identical.</p>
                        </div>
                    </div>
                )}

                <form className="auth-form" onSubmit={submitUser}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        value={username}
                        className={hasError ? 'input-error' : ''}
                        onChange={(e) => {
                            setUsername(e.target.value)
                            if (error) clearError()
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        className={hasError ? 'input-error' : ''}
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
                        className={matchError ? 'input-error' : ''}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setMatchError(false)
                            if (error) clearError()
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        value={rePassword}
                        className={matchError ? 'input-error' : ''}
                        onChange={(e) => {
                            setRePassword(e.target.value)
                            setMatchError(false)
                            if (error) clearError()
                        }}
                    />

                    <button type="submit" className="primary-btn">
                        Register
                    </button>
                </form>

                <p className="switch-text">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}
