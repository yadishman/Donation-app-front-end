import Header from "../components/Header";
import DonationImage from '../assets/donation.png'
import CircularProgress from '@mui/material/CircularProgress'
import './DonationDetailPage.css'
export default function DonationDetailPage() {
    return (

        <>
            <Header />
            <div className="donation-main">
                <div className="donation-details">
                    <h1 className="donation-tite">Help Appu fight his illness</h1>
                    <img className="donation-img" src={DonationImage} />
                    <p className="donation-detail">
                        Hi, I am little apu. I am fighting a very risk illness for the past few years and my family have been trying hard to cover my expensive chemical expenses. But now they have reached a point where they are not financially able to cover my costs. I appreciate any help you guys are giving me and raise my pinky to say thanks
                    </p>
                    <div className="donation-author">
                        <div className="avi">J</div>
                        <div className="author-name-role">
                            <p className="author-name">James</p>
                            <p className="author-role">Organizer</p>
                        </div>
                    </div >
                    <div className="section-separator" />
                    <h1 className="comment-title">Comments of support</h1>
                    <div className="comments">
                        <div className="commenter-avi">S</div>
                        <div className="comment-meta-data-and-comment">
                            <div className="commenter">Sarah</div>
                            <p className="comment-meta-data">$0 6hrs</p>
                            <p className="comment">I wish you all the best little boy. Hope you recover soon</p>
                        </div>
                    </div>
                </div>
                <div className="donation-stats">
                    <div className="donation-amt">
                        <CircularProgress  className="circular-progress" variant="determinate" enableTrackSlot={true} thickness={8} size={100} color="#66AE5B"/>
                        <div className="donation-amount-numbers">
                            <p className="current-donation">$0 raised</p>
                            <p className="donation-target">of $200K</p>
                            <p className="total-donator-count">0 donations</p>
                        </div>
                    </div>
                    <div className="make-donation">Donate Now</div>
                    <h1 className="donation-recent-title">Recent Donation</h1>
                    <div className="recent-donations">
                        <div className="recent-donation-avi">S</div>
                        <div className="recent-donation-metadata-and-amonut">
                            <p className="recent-donator">Sarah</p>
                            <div className="recent-donation-amonut-and-time">
                            <p className="recent-donation-amount">$0</p>
                            <p className="recent-donation-time">6hr</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}