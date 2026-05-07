import { useEffect, useState } from "react";
import { createDonation } from "../services/postService";

export function useCreatePost (){
    const [error, setError]= useState(false)
   
    const createPost = async(formdata) => {
        try {
            await createDonation(formdata)
            setSuccess(true)
        }
        catch (error) {
            setError(true)
        }
    }

    return {createPost,error}
}