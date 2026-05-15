import useComment from "../hooks/useComment";
import Comment from "./Comment"
import './Comment.css'

export default function ListComment({ id }) {
    const { comments } = useComment(id)

    if (!comments?.length) {
        return (
            <div className="comments-empty">
                No comments yet. Be the first to leave words of encouragement.
            </div>
        )
    }

    return (
        <div className="comments-list">
            {comments.map(comment => (
                <Comment comment={comment} key={comment._id || comment.createdAt} />
            ))}
        </div>
    )
}
