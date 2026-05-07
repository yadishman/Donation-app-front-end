import PostCard from './PostCard'
import './PostComponent.css'
export default function PostList({posts}) {
    return (
        <div className="grid-container">
            {posts.map((post) => {
                return <PostCard post={post} key={post._id} />
            })}
        </div>
    )
}