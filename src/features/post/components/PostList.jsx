import PostCard from './PostCard'
import './PostComponent.css'

export default function PostList({ posts }) {
    if (!posts?.length) {
        return (
            <div className="posts-empty animate-fade-in-up">
                <span className="posts-empty-icon">💚</span>
                <h3>No fundraisers yet</h3>
                <p>Be the first to start a cause and inspire others to give.</p>
            </div>
        )
    }

    const withPercent = posts.map(p => ({
        ...p,
        percent: p.budget ? Math.min(100, Math.round((p.amount / p.budget) * 100)) : 0
    }))

    const sorted = withPercent.slice().sort((a, b) => b.percent - a.percent)
    const topSingle = sorted[0]
    const nextTwo = sorted.slice(1, 3)
    const rest = sorted.slice(3)

    let cardIndex = 0

    return (
        <div className="posts-wrapper">
            <div className="top-single">
                {topSingle && (
                    <PostCard
                        post={topSingle}
                        key={topSingle._id}
                        size="large"
                        trending={true}
                        index={cardIndex++}
                    />
                )}
            </div>

            <div className="second-row">
                {nextTwo.map(post => (
                    <PostCard
                        post={post}
                        key={post._id}
                        size="large"
                        trending={true}
                        index={cardIndex++}
                    />
                ))}
            </div>

            <div className="rest-scroll">
                {rest.map(post => (
                    <PostCard
                        post={post}
                        key={post._id}
                        size="small"
                        trending={false}
                        index={cardIndex++}
                    />
                ))}
            </div>
        </div>
    )
}
