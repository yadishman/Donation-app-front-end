import axios from "axios"

export const loadPost = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/post/${id}`)
        return response.data
    }
    catch (error) {
        throw error
    }

}

export const loadPosts = async () => {
    try {
        const response = await axios.get("http://localhost:5000/post")
        return response.data
    }
    catch (error) {
        throw error
    }
}

export const createDonation = async (formData, token) => {
    await axios.post("http://localhost:5000/post", formData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}

export const deletePost = async (id, token) => {
    await axios.delete(`http://localhost:5000/post/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const updatePost = async(id, formdata, token) => {
    await axios.put(`http://localhost:5000/post/${id}`, formdata, {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
    )
}