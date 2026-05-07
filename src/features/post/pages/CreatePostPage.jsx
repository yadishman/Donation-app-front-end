import { useState } from "react"
import Header from "../../../components/Header.jsx"
import { useCreatePost } from "../hooks/useCreatePost.js"
import { useNavigate } from "react-router"
import "./CreatePostPage.css"

export default function CreatePostPage() {

    const [title, setTitle] = useState("")
    const [budget, setBudget] = useState("")
    const [file, setFile] = useState("")
    const [description, setDescription] = useState("")

    const { createPost, error } = useCreatePost()

    const navigate = useNavigate()

    const formData = new FormData()
    formData.append("title", title)
    formData.append("image", file)
    formData.append('description', description)
    formData.append('budget', budget)
    formData.append('author', "69edea1d26adeaac62377085")

    const createDonation = async () => {
        await createPost(formData)
        navigate("/")
    }

    return (
        <>
            <Header onCreate={true} />

            <div className="create-donation">
                <h1 className="new-donation">Create Donation</h1>

                <input
                    className="new-donation-title"
                    placeholder="Title"
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input
                    className="new-donation-budget"
                    placeholder="Goal (e.g. 5000)"
                    onChange={(event) => setBudget(event.target.value)}
                />

                <textarea
                    className="new-donation-description"
                    placeholder="Description"
                    onChange={(event) => setDescription(event.target.value)}
                />

                <input
                    className="upload-image"
                    type="file"
                    onChange={(event) => setFile(event.target.files[0])}
                />

                <div className="create-new-donation" onClick={createDonation}>
                    Create donation
                </div>
            </div>
        </>
    )
}