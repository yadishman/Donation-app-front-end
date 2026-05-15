import { useAuth } from '../context/AuthContext'
import isTokenValid from '../utils/tokenValidation'
import './Header.css'
import { Link, useNavigate } from 'react-router'
export default function Header({ onCreate = false }) {

    const { token, logout } = useAuth()
    const isAuthorized = isTokenValid(token)
    const navigate = useNavigate()
    const handleLogout = async () => {
        const logoutSuccess = await logout()
        if (logoutSuccess) {
            navigate("/login")
        }
    }
    return (
        <div className="header-class">
            <div className="left-brand">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <p className="main-logo-txt">GiveNow <span className="logo-accent">💚</span></p>
                </Link>
                <p className="tagline">Real people. Real impact.</p>
            </div>
            <nav className="navigation">
                <Link to={"/"} style={{ textDecoration: 'none' }}><li className="nav-item">Home</li></Link>
                <li className="nav-item">About</li>
                {isAuthorized && <li className="nav-item" onClick={handleLogout}>Logout</li>}
            </nav>
            {onCreate === false && isAuthorized ? (
                <Link to={'/create-donation'} style={{ textDecoration: 'none' }}>
                    <div className="create-dontation-btn">Start a Cause</div>
                </Link>
            ) : onCreate === false && !isAuthorized? (
                <Link to={'/login'} style={{ textDecoration: 'none' }}>
                    <div className="create-dontation-btn">Login</div>
                </Link>
            ): <div></div>}

        </div>
    )
}