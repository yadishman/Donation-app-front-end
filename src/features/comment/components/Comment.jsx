import './Comment.css'
export default function Comment({ comment }) {
    return (
        <div className="comment-card">
            <div className="commenter-avi">{comment?.author.username[0].toUpperCase()}</div>
            <div className="comment-meta-data">
                <div className="commenter">{comment?.author.username}</div>
                {/* <p className="comment-meta-data">$0 6hrs</p> */}
                <p className="comment-content">{comment.content}</p>
            </div>
        </div>
    )
}