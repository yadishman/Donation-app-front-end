import { useState, useMemo } from "react"
import { useLocation, useNavigate, useParams } from "react-router"
import Header from "../../../components/Header.jsx"
import Footer from "../../../components/Footer"
import FundraiserForm from "../components/FundraiserForm.jsx"
import { usePost } from "../hooks/usePost.js"
import useEditPost from "../hooks/useEditPost.js"
import { useAuth } from "../../../context/AuthContext.jsx"

export default function EditPostPage() {
    const {id} = useParams()
    const location = useLocation()
    const { post } = usePost(location.state?.post)

    const [title, setTitle] = useState(post?.title ?? "")
    const [budget, setBudget] = useState(post?.budget != null ? String(post.budget) : "")
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState(post?.description ?? "")
    const { error, editPost, post:updatedPost } = useEditPost()
    const { token } = useAuth()
    const navigate = useNavigate()

    const previewUrl = useMemo(() => {
        return file ? URL.createObjectURL(file) : null
    }, [file])

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("I am being pressed")
        const formdata = new FormData();

        if (title !== post?.title) formdata.append("title", title);
        if (description !== post?.description) formdata.append("description", description);
        if (file) formdata.append("image", file);

        if (!formdata.keys().next().value) return;

        const editSuccess = await editPost(id, token, formdata);

        if (editSuccess) {
            navigate(`/posts/${id}`, {state:{post:updatedPost}});
        } 
        if(error) {
            alert("unable to edit post", error);
        }
    };

    return (
        <div className="page-shell">
            <Header onCreate={true} />
            <FundraiserForm
                mode="edit"
                title={title}
                setTitle={setTitle}
                budget={budget}
                setBudget={setBudget}
                description={description}
                setDescription={setDescription}
                currentContributed={post?.amount || 0}
                file={file}
                setFile={setFile}
                previewUrl={previewUrl}
                existingImageUrl={post?.image}
                onSubmit={handleSubmit}
            />
            <Footer />
        </div>
    )
}
