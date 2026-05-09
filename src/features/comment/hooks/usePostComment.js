import { useState } from "react";
import { createComment } from "../services/commentService";

export default function usePostComment(){
    const [error, setError] = useState(false)
    const postComment = async (comment,id,token) => {
        try{
            await createComment(comment,id,token) 
            return true
        }
        catch (error){
            setError(true)
            return false
        }
    }
    return {error, postComment}
}