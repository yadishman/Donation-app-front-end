import { Link } from 'react-router'
import './PostComponent.css'

export default function PostCard({ post, size = 'small', trending = false, index = 0 }) {
    const percent = post.budget ? Math.min(100, Math.round((post.amount / post.budget) * 100)) : 0
    const className = `card ${size === 'large' ? 'card-large' : 'card-small'} ${trending ? 'trending' : ''}`
    const delay = Math.min(index * 0.06, 0.36)

    return (
        <Link
            to={`/posts/${post._id}`}
            state={{ post }}
            style={{ textDecoration: 'none', animationDelay: `${delay}s` }}
            className={className}
        >
            <div className="card-image-wrap">
                <img className="donation-image" src={post.image} alt={post.title} />
                {trending && <span className="card-badge">🔥 Trending</span>}
            </div>
            <p className="donation-title">{post.title}</p>

            <div className="progress-track" aria-hidden>
                <div
                    className="progress-fill"
                    style={{ '--progress': `${percent}%` }}
                />
            </div>

            <div className="card-footer">
                <div className="donation-amount">
                    <strong>${Number(post.amount).toLocaleString()}</strong>
                    <span> raised of ${Number(post.budget || 0).toLocaleString()}</span>
                </div>
                <span className="percent-badge">{percent}%</span>
            </div>

            <span className="card-cta">Donate now →</span>
        </Link>
    )
}
