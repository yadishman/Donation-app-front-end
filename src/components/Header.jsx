import { useAuth } from '../context/AuthContext'
import './Header.css'
import { Link, useNavigate } from 'react-router'
export default function Header({ onCreate = false }) {

    const { isAuthorized, logout } = useAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
        const logoutSuccess = await logout()
        if (logoutSuccess) {
            navigate("/login")
        }
    }
    return (
        <div className="header-class">
            <p className="main-logo-txt">Donation</p>
            <nav className="navigation">
                <Link to={"/"} style={{ textDecoration: 'none' }}><li className="nav-item">Home</li></Link>
                <li className="nav-item">About</li>
                {isAuthorized && <li className="nav-item" onClick={handleLogout}>Logout</li>}
            </nav>
            {onCreate === false && isAuthorized ? <Link to={"/create-donation"} style={{ textDecoration: 'none' }}><div className="create-dontation-btn">Create donation</div></Link> : <Link to={"/login"} style={{ textDecoration: 'none' }}><div className="create-dontation-btn">Login</div></Link>}

        </div>
    )
}