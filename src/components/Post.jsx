import './Post.css'
import { Link } from 'react-router'
export default function Post({post}) {
    
    return (
        <Link to={`/posts/${post._id}`} state={{post}} style={{textDecoration:'none'}}>
        <div className="card" >
            <img className="donation-image" src={post.image} />
            <p className="donation-title">{post.title}</p>
            <progress value={post.amount/post.budget} className="progress-bar"></progress>
            <p className="donation-amount">{`$ ${post.amount} raised`}</p>
        </div>
        </Link>
    )
}