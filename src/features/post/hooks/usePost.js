import { useEffect, useState } from "react";
import { loadPost } from "../services/postService";

export function usePost(postState,id) {
    const [post, setPost] = useState(postState)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchLoad(id) {
        try {
            const post = await loadPost(id)
            setLoading(false)
            setPost(post)
        }
        catch (error) {
            setLoading(false)
            setError("Couldn't load data due to internet issues")
        };

    }

    useEffect(() => {
        if(post){
            setLoading(false)
            return
        }

        fetchLoad(id)

    }, [post])

    return { post, error, loading }
}