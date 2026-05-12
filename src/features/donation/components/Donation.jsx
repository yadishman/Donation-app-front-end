import formatDate from '../../../utils/formatDate'
import './Donation.css'
export default function Donation({ donate }) {
    return (
        <div className="recent-donation-card">
            <div className="recent-donation-avi">{donate?.donor.username?.[0]?.toUpperCase()}</div>
            <div className="recent-donation-metadata-and-amonut">
                <div className="recent-donator">{donate?.donor.username}</div>
                <div className="recent-donation-amonut-and-time">
                    <span className="recent-donation-amount">${Number(donate.amount).toLocaleString()}</span>
                    <span className="recent-donation-time">• {formatDate(donate.createdAt)}</span>
                </div>
                {donate.message && <div className="recent-donation-message">“{donate.message}”</div>}
            </div>
        </div>
    )
}