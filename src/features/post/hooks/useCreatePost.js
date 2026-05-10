import { useEffect, useState } from "react";
import { createDonation } from "../services/postService";

export function useCreatePost (){
    const [error, setError]= useState(false)
   
    const createPost = async(formdata,token) => {
        try {
            await createDonation(formdata,token)
            return true
        }
        catch (error) {
            setError(true)  
            return false
        }
    }

    return {createPost,error}
}