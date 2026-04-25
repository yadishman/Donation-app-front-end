import Header from "../components/Header";
import './MakeDonationPage.css'
import DonationImage from '../assets/donation.png'
export default function MakeDonationPage(){
    return(
        <>
        <Header />
        <div className="make-donation-page">
            <div className="donation-entry">
                <h1 className="donation-title">Help Appu figh his illness</h1>
                <p className="enter-amount-class">Enter donation</p>
                <input className="enter-money"/>
                <p className="give-comment-class">Word of courage</p>
                <input className="give-feedback"/>
                <div className="donate">Donate</div>
            </div>
            <img className="donation-img" src={DonationImage} />
        </div>
        </>
    )
}