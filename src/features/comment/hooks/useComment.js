import { useEffect, useState } from "react";
import { loadComments } from "../services/commentService";

export default function useComment(id){
    console.log(`the id for this post is ${id}`)
    const [comments,setComments]=useState([])
    const [error, setError] = useState(false)

    const fetchComment = async () => {
        try{
        const comments = await loadComments(id)
        setComments(comments)
        }
        catch (error){
            setError(true)
        }
        
    }

    useEffect(()=>{
        fetchComment()
    },[])

    return {comments,error}
}