import axios from "axios"

export const createDonation = async (budget, id) => {
    await axios.post("http://localhost:5000/donate", {
        "amount": budget,
        "donor": "69edea1d26adeaac62377085",
        "post": id
    })
}

export const loadDonations = async (id) => {
    const response = await axios.get(`http://localhost:5000/donate/post/${id}`)
    return response.data
}