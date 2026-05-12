import { useState, useMemo } from "react"
import Header from "../../../components/Header.jsx"
import { useCreatePost } from "../hooks/useCreatePost.js"
import { useNavigate } from "react-router"
import "./CreatePostPage.css"
import { useAuth } from "../../../context/AuthContext.jsx"

export default function CreatePostPage() {

    const [title, setTitle] = useState("")
    const [budget, setBudget] = useState("")
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState("")

    const { createPost, error } = useCreatePost()
    const {token} = useAuth()

    const navigate = useNavigate()

    const previewUrl = useMemo(() => {
        return file ? URL.createObjectURL(file) : null
    }, [file])

    const createDonation = async () => {
        if(!title || !budget || !description) return
        const formData = new FormData()
        formData.append("title", title)
        if(file) formData.append("image", file)
        formData.append('description', description)
        formData.append('budget', budget)
        const postSuccess = await createPost(formData,token)
        if(postSuccess){
            navigate("/")
        }
    }

    return (
        <>
            <Header onCreate={true} />

            <div className="create-donation" style={{maxWidth:980,margin:'28px auto'}}>
                <div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
                    <div style={{flex:1,minWidth:300}}>
                        <h1 className="new-donation">Create Donation</h1>

                        <input
                            className="new-donation-title"
                            placeholder="Title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />

                        <input
                            className="new-donation-budget"
                            placeholder="Goal (e.g. 5000)"
                            value={budget}
                            onChange={(event) => setBudget(event.target.value)}
                        />

                        <textarea
                            className="new-donation-description"
                            placeholder="Description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />

                        <label style={{display:'block',marginTop:6,color:'#6b6b6b',fontSize:13}}>Upload cover image</label>
                        <input
                            className="upload-image"
                            type="file"
                            accept="image/*"
                            onChange={(event) => setFile(event.target.files[0])}
                        />

                        <button className="create-new-donation" onClick={createDonation} style={{marginTop:12}}>
                            Create donation
                        </button>
                    </div>

                    <div style={{width:320}}>
                        <div className="sidebar-card">
                            <div style={{fontWeight:800,fontSize:16,color:'#222'}}>Preview</div>
                            {previewUrl ? (
                                <img src={previewUrl} style={{width:'100%',height:160,objectFit:'cover',borderRadius:8,marginTop:10}} />
                            ) : (
                                <div style={{width:'100%',height:160,display:'flex',alignItems:'center',justifyContent:'center',background:'#fff6f3',borderRadius:8,marginTop:10,color:'#FF7043'}}>No image selected</div>
                            )}

                            <div style={{marginTop:12}}>
                                <div style={{fontWeight:700}}>{title || 'Your cause title'}</div>
                                <div style={{color:'#6b6b6b',marginTop:6}}>{description ? description.slice(0,120) + (description.length>120?'...':'') : 'Short description shown here.'}</div>
                                <div style={{marginTop:12,fontWeight:800,color:'#FF7043'}}>{budget ? `$${Number(budget).toLocaleString()} goal` : '$0 goal'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}