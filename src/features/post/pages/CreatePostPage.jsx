import { useState, useMemo } from "react"
import Header from "../../../components/Header.jsx"
import { useCreatePost } from "../hooks/useCreatePost.js"
import { useNavigate } from "react-router"
import { useAuth } from "../../../context/AuthContext.jsx"
import Footer from "../../../components/Footer"
import FundraiserForm from "../components/FundraiserForm.jsx"

export default function CreatePostPage() {
    const [title, setTitle] = useState("")
    const [budget, setBudget] = useState("")
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState("")

    const { createPost } = useCreatePost()
    const { token } = useAuth()
    const navigate = useNavigate()

    const previewUrl = useMemo(() => {
        return file ? URL.createObjectURL(file) : null
    }, [file])

    const createDonation = async (event) => {
        event.preventDefault()
        if (!title || !budget || !description) return
        const formData = new FormData()
        formData.append("title", title)
        if (file) formData.append("image", file)
        formData.append('description', description)
        formData.append('budget', budget)
        const postSuccess = await createPost(formData, token)
        if (postSuccess) {
            navigate("/")
        }
    }

    return (
        <div className="page-shell">
            <Header onCreate={true} />
            <FundraiserForm
                mode="create"
                title={title}
                setTitle={setTitle}
                budget={budget}
                setBudget={setBudget}
                description={description}
                setDescription={setDescription}
                currentContributed={0}
                file={file}
                setFile={setFile}
                previewUrl={previewUrl}
                onSubmit={createDonation}
            />
            <Footer />
        </div>
    )
}
