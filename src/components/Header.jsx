import './Header.css'
import { Link } from 'react-router'
export default function Header({ onCreate = false }) {
    return (
        <div className="header-class">
            <p className="main-logo-txt">Donation</p>
            <nav className="navigation">
                <Link to={"/"} style={{ textDecoration: 'none' }}><li className="nav-item">Home</li></Link>
                <li className="nav-item">About</li>
            </nav>
            {onCreate === false && <Link to={"/create-donation"} style={{ textDecoration: 'none' }}><div className="create-dontation-btn">Create donation</div></Link>}

        </div>
    )
}