import CircularProgress from '@mui/material/CircularProgress'
import './DonationDetailPage.css'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ListComment from "../../comment/components/ListComment";
import ListDonation from "../../donation/components/ListDonation";
import { usePost } from "../hooks/usePost";
import Header from '../../../components/Header';
import Footer from "../../../components/Footer";

export default function DonationDetailPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const location = useLocation()
    const { post, loading } = usePost(location.state?.post)

    if (loading || !post) {
        return (
            <div className="page-shell">
                <Header />
                <div className="donation-main" style={{ justifyContent: 'center', padding: '80px 20px' }}>
                    <CircularProgress style={{ color: '#00a86b' }} />
                </div>
            </div>
        )
    }

    const percent = post.budget
        ? Math.min(100, Math.round((post.amount * 100) / post.budget))
        : 0

    return (
        <div className="page-shell">
            <Header />
            <div className="donation-main">
                <div className="donation-details">
                    <h1 className="donation-tite">{post.title}</h1>
                    <img className="donation-img" src={post.image} alt={post.title} />
                    <p className="donation-detail">{post.description}</p>
                    <div className="donation-author">
                        <div className="avi">{post.author?.username?.[0]?.toUpperCase() || '?'}</div>
                        <div className="author-name-role">
                            <p className="author-name">{post.author?.username}</p>
                            <p className="author-role">Organizer</p>
                        </div>
                    </div>
                    <div className="section-separator" />
                    <h2 className="comment-title">Comments of support</h2>
                    <ListComment id={id} />
                </div>

                <div className="donation-stats">
                    <div className="donation-card">
                        <div className="progress-wrapper">
                            <CircularProgress
                                variant="determinate"
                                thickness={6}
                                size={110}
                                value={percent}
                                style={{ color: '#00a86b' }}
                            />
                            <div className="progress-center-text">{percent}%</div>
                        </div>
                        <div className="donation-info">
                            <div className="raised-amount">${post.amount.toLocaleString()}</div>
                            <div className="meta">raised of ${post.budget.toLocaleString()}</div>
                            <div className="meta subtle">{post.donator_count} donations</div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="make-donation"
                        onClick={() => navigate(`/make-donation/${post._id}`, { state: { post } })}
                    >
                        Donate now
                    </button>
                    <h2 className="donation-recent-title">Recent donations</h2>
                    <ListDonation id={id} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
