import formatDate from '../../../utils/formatDate'
import './Donation.css'

export default function Donation({ donate }) {
    return (
        <article className="recent-donation-card">
            <div className="recent-donation-avi">
                {donate?.donor?.username?.[0]?.toUpperCase() || '?'}
            </div>
            <div className="recent-donation-metadata-and-amonut">
                <div className="recent-donator-row">
                    <span className="recent-donator">{donate?.donor?.username}</span>
                    <span className="recent-donation-amount">
                        ${Number(donate.amount).toLocaleString()}
                    </span>
                </div>
                <span className="recent-donation-time">{formatDate(donate.createdAt)}</span>
                {donate.message && (
                    <p className="recent-donation-message">"{donate.message}"</p>
                )}
            </div>
        </article>
    )
}
