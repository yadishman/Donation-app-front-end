import { useNavigate } from 'react-router'
import ThankYou from '../assets/thanks.avif'
import './ThankYOuPage.css'
export default function ThankYOuPage (){
    const navigate = useNavigate()
    return(
        <div className="thanks-page">
            <img className='thanks-image' src={ThankYou}/>
            <div className = 'back-home' onClick={
                ()=>{
                    navigate("/")
                }
            }>Back to home</div>
        </div>
    )
}