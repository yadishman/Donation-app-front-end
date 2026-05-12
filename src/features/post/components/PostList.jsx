import PostCard from './PostCard'
import './PostComponent.css'

export default function PostList({posts}) {
    if(!posts) return null

    // determine engagement by donator_count when available, fallback to percent
    const counts = posts.map(p => p.donator_count || 0)
    const maxCount = counts.length ? Math.max(...counts) : 0

    return (
        <div className="grid-container">
            {posts.map((post) => {
                const engagement = post.donator_count || (post.budget ? Math.round((post.amount/post.budget)*100) : 0)
                const isLarge = maxCount > 0 ? (post.donator_count >= Math.max(1, Math.floor(maxCount * 0.6))) : (engagement >= 60)
                const size = isLarge ? 'large' : 'large'
                return <PostCard post={post} key={post._id} size={size} />
            })}
        </div>
    )
}