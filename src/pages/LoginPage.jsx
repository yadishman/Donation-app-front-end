import LoginImage from '../assets/login.png'
import './LoginPage.css'
import { Link } from 'react-router'

export default function LoginPage(){
    return(
        <div className="log-container">
            <img className="log-image" src={LoginImage} />
            <h1 className="auth-title">Login</h1>
            <input className="auth-form" />
            <input className="auth-form" />
            <div className="auth-submit-btn">Login</div>
            <div className="auth-alt">
                <p>New here? </p>
                
                <Link to={"/register"} ><p className="auth-alt-click">Register</p></Link>
            </div>
        </div>

    )
}