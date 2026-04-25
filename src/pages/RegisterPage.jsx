import './RegisterPage.css'
import RegisterImage from '../assets/register.png'
import { Link } from 'react-router'

export default function RegisterPage (){
    return (
        <div className="auth-container">
            <img className="reg-image" src={RegisterImage} />
            <h1 className="auth-title">Register</h1>
            <input className="auth-form" />
            <input className="auth-form" />
            <input className="auth-form"/>
            <div className="auth-submit-btn">Register</div>
            <div className="auth-alt">
                <p>Already have an account? </p>
                <Link to={"/login"}><p className="auth-alt-click">Login</p></Link>
            </div>
        </div>
    )
}