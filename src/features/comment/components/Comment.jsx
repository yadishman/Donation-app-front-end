import './Comment.css'

export default function Comment({ comment }) {
    const initial = comment?.author?.username?.[0]?.toUpperCase() || '?'

    return (
        <article className="comment-card">
            <div className="commenter-avi">{initial}</div>
            <div className="comment-meta-data">
                <div className="commenter-row">
                    <span className="commenter">{comment?.author?.username}</span>
                    <span className="comment-badge">Supporter</span>
                </div>
                <p className="comment-content">{comment?.content}</p>
            </div>
        </article>
    )
}
