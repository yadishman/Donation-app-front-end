import './Header.css'
import { Link } from 'react-router'
export default function Header({onCreate=false}){
    return(
        <div className="header-class">        
            <p className="main-logo-txt">Donation</p>
            <nav className="navigation">
                <Link to={"/"}><li className="nav-item">Home</li></Link>
                <li className="nav-item">About</li>
            </nav>
            {onCreate===false && <div className="create-dontation-btn">Create donation</div>}

        </div>
    )
}