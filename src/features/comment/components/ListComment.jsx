import useComment from "../hooks/useComment";
import Comment from "./Comment"

export default function ListComment({id}) {
    const {comments, error}=useComment(id)        
    return (
        <>
           {comments.map(comment => {
                return (
                    <Comment comment={comment} />
                    )
            })}
        </>
    )
}