import { useEffect, useState } from "react";
import { loadPost } from "../services/postService";

export function usePost(postState) {
    const [post, setPost] = useState(postState)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    async function fetchLoad() {
        try {
            const post = await loadPost()
            setLoading(false)
            setPost(post)
        }
        catch (error) {
            console.log(error)
            setLoading(false)
            setError("Couldn't load data due to internet issues")
        };

    }

    useEffect(() => {
        if(!useEffect) return

        fetchLoad()

    }, [])

    return { post, error, loading }
}