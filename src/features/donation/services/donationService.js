import axios from "axios"


export const createDonation = async (budget, id,token) => {
    console.log(`here is the token ${token}`)
    await axios.post("http://localhost:5000/donate", {
        "amount": budget,
        "post": id
    },
    {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

)
}

export const loadDonations = async (id) => {
    const response = await axios.get(`http://localhost:5000/donate/post/${id}`)
    return response.data
}