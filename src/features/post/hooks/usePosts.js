import { useEffect, useState } from "react";
import { loadPosts } from "../services/postService";

export function usePosts(){
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchLoad (){
            try{
                const posts = await loadPosts()
                setLoading(false)
                setPosts(posts)
            }
            catch(error){
                console.log(error)
                setLoading(false)
                setError("Couldn't load data due to internet issues")
            };
            
        }

    useEffect(()=>{
        
        fetchLoad()
        
    },[])

    return {posts,error,loading}
}