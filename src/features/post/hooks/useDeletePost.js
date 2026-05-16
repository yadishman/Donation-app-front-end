import { useState } from "react";
import { deletePost } from "../services/postService";

export function useDelete(){
    const [error, setError] = useState(null);
    const removePost = async(id, token)=>{
        try{
            await deletePost(id, token)
            return true
        }
        catch(error){
            setError(error)
            return false
        }
    }

    return {error, removePost}
}