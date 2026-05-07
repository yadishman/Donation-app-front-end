import formatDate from '../../../utils/formatDate'
import './Donation.css'
export default function Donation({donate}) {
    return (
        <div className="recent-donations">
            <div className="recent-donation-avi">{donate?.donor.username[0].toUpperCase()}</div>
            <div className="recent-donation-metadata-and-amonut">
                <p className="recent-donator">{donate?.donor.username}</p>
                <div className="recent-donation-amonut-and-time">
                    <p className="recent-donation-amount">{`$ ${donate.amount}`}</p>
                    <p className="recent-donation-time">{formatDate(donate.createdAt)}</p>
                </div>
            </div>
        </div>

    )
}