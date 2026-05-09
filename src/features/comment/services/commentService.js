import axios from "axios"
export const createComment = async (comment,id, token) => {
    await axios.post("http://localhost:5000/comment", {
        "content": comment,
        "post": id
    },
    {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

)
}

export const loadComments = async (id) => {
        const response = await axios.get(`http://localhost:5000/comment/post/${id}`)
        return response.data
    }