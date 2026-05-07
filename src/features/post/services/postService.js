import axios from "axios"

export const loadPost = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/post/${id}`)
        return response.data
    }
    catch (error) {
        throw error
    }

}

export const loadPosts = async () => {
    try{
    const response = await axios.get("http://localhost:5000/post")
    return response.data
    }
    catch (error) {
        throw error
    }
}

export const createDonation = async(formData)=>{
        await axios.post("http://localhost:5000/post", formData)
        navigae("/")
    }

