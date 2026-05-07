import axios from "axios"
export const createComment = async (comment,id) => {
    await axios.post("http://localhost:5000/comment", {
        "author": "69edea1d26adeaac62377085",
        "content": comment,
        "post": id
    })
}

export const loadComments = async (id) => {
        const response = await axios.get(`http://localhost:5000/comment/post/${id}`)
        return response.data
    }