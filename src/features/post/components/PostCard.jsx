import { Link } from 'react-router'
import './PostComponent.css'

export default function PostCard({post, size = 'small', trending = false}) {
    const percent = post.budget ? Math.min(100, Math.round((post.amount / post.budget) * 100)) : 0
    const className = `card ${size === 'large' ? 'card-large' : 'card-small'} ${trending ? 'trending' : ''}`
    return (
        <Link to={`/posts/${post._id}`} state={{post}} style={{textDecoration:'none'}} className={className}>
        <div>
            <img className="donation-image" src={post.image} alt={post.title} />
            <p className="donation-title">{post.title}</p>

            <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
                <progress value={percent} max={100} className="progress-bar"></progress>
                <div style={{display:'flex',width:'85%',justifyContent:'space-between',fontSize:14}}>
                    <div className="donation-amount">${Number(post.amount).toLocaleString()} raised</div>
                    <div style={{color:'#6b6b6b',fontWeight:700}}>{percent}%</div>
                </div>
            </div>
        </div>
        </Link>
    )
}