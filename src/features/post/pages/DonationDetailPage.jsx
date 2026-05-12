import CircularProgress from '@mui/material/CircularProgress'
import './DonationDetailPage.css'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ListComment from "../../comment/components/ListComment";
import ListDonation from "../../donation/components/ListDonation";
import { usePost } from "../hooks/usePost";
import Header from '../../../components/Header';
export default function DonationDetailPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const location = useLocation()
    const { post, error, loading } = usePost(location.state?.post)

    return (

        <>
            <Header />
            <div className="donation-main">
                <div className="donation-details">
                    <h1 className="donation-tite">{post.title}</h1>
                    <img className="donation-img" src={post.image} />
                    <p className="donation-detail">
                        {post.description}
                    </p>
                    <div className="donation-author">
                        <div className="avi">J</div>
                        <div className="author-name-role">
                            <p className="author-name">{post.author.username}</p>
                            <p className="author-role">Organizer</p>
                        </div>
                    </div >
                    <div className="section-separator" />
                    <h1 className="comment-title">Comments of support</h1>
                    <ListComment id={id} />
                </div>
                <div className="donation-stats">
                    <div className="donation-card">
                        <div className="progress-wrapper">
                            <CircularProgress
                                className="circular-progress"
                                variant="determinate"
                                thickness={6}
                                size={110}
                                value={(post.amount * 100) / post.budget}
                                style={{ color: '#FF7043' }}
                            />
                            <div className="progress-center-text">
                                {Math.round((post.amount * 100) / post.budget)}%
                            </div>
                        </div>

                        <div className="donation-info">
                            <div className="raised-amount">
                                ${post.amount.toLocaleString()}
                            </div>

                            <div className="meta">
                                of ${post.budget.toLocaleString()}
                            </div>

                            <div className="meta subtle">
                                {post.donator_count} donations
                            </div>
                        </div>
                    </div>
                    <div className="make-donation" onClick={() => {
                        navigate(`/make-donation/${post._id}`, { state: { post } })
                    }}>Donate Now</div>
                    <h1 className="donation-recent-title">Recent Donation</h1>
                    <ListDonation id={id} />
                </div>
            </div>
        </>
    )
}