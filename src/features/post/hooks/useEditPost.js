import { useState } from "react";
import { updatePost } from "../services/postService";

export default function useEditPost() {
    const [error, setError] = useState(null)
    const [post, setPost] = useState(null)
    const editPost = async (id, token, formdata) => {
        try {
            const post = await updatePost(id,formdata,token)
            setPost(post)
            return true
        }
        catch (error) {
            setError(error.response?.data)
            return false
        }
    }
    return {error, editPost,post}
}