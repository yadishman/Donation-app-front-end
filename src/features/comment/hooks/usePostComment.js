import { useState } from "react";
import { createComment } from "../services/commentService";

export default function usePostComment(){
    const [error, setError] = useState(false)
    const postComment = async (comment,id) => {
        try{
            await createComment(comment,id) 
        }
        catch (error){
            setError(true)
        }
    }
    return {error, postComment}
}