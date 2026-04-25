import Header from "../components/Header";
import DonationImage from '../assets/donation.png'
import './HomePage.css'

export default function HomePage(){
    return(
        <>
        <Header />
        <div className="grid-container">
            <div className="card">
                <img className="donation-image" src={DonationImage} />
                <p className="donation-title">Help Appu fight his illness</p>
                <progress value={0} className="progress-bar"></progress>
                <p className="donation-amount">$0 Raised</p>
            </div>
            <div className="card">
                <img className="donation-image" src={DonationImage} />
                <p className="donation-title">Help Appu fight his illness</p>
                <progress value={0} className="progress-bar"></progress>
                <p className="donation-amount">$0 Raised</p>
            </div>
            <div className="card">
                <img className="donation-image" src={DonationImage} />
                <p className="donation-title">Help Appu fight his illness</p>
                <progress value={0} className="progress-bar"></progress>
                <p className="donation-amount">$0 Raised</p>
            </div>
            <div className="card">
                <img className="donation-image" src={DonationImage} />
                <p className="donation-title">Help Appu fight his illness</p>
                <progress value={0} className="progress-bar"></progress>
                <p className="donation-amount">$0 Raised</p>
            </div>
            <div className="card">
                <img className="donation-image" src={DonationImage} />
                <p className="donation-title">Help Appu fight his illness</p>
                <progress value={0} className="progress-bar"></progress>
                <p className="donation-amount">$0 Raised</p>
            </div>
            <div className="card">
                <img className="donation-image" src={DonationImage} />
                <p className="donation-title">Help Appu fight his illness</p>
                <progress value={0} className="progress-bar"></progress>
                <p className="donation-amount">$0 Raised</p>
            </div>
            
        </div>
        </>
    )
}