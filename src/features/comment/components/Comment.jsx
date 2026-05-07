import './Comment.css'
export default function Comment({comment}){
    return(
        <div className="comments">
                        <div className="commenter-avi">{comment?.author.username[0].toUpperCase()}</div>
                        <div className="comment-meta-data-and-comment">
                            <div className="commenter">{comment?.author.username}</div>
                            {/* <p className="comment-meta-data">$0 6hrs</p> */}
                            <p className="comment">{comment.content}</p>
                        </div>
                    </div>
    )
}