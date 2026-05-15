import { useState, useMemo } from "react"
import Header from "../../../components/Header.jsx"
import { useCreatePost } from "../hooks/useCreatePost.js"
import { useNavigate } from "react-router"
import "./CreatePostPage.css"
import { useAuth } from "../../../context/AuthContext.jsx"
import Footer from "../../../components/Footer";

const STEPS = [
    { num: 1, label: 'Tell your story' },
    { num: 2, label: 'Set your goal' },
    { num: 3, label: 'Add a photo' },
]

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

    const createDonation = async () => {
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

            <div className="create-page">
                <div className="create-page-header animate-fade-in-up">
                    <span className="create-badge">Start a fundraiser</span>
                    <h1>Launch your cause in minutes</h1>
                    <p>Share your story, set a goal, and start receiving donations from supporters worldwide.</p>
                </div>

                <div className="create-steps">
                    {STEPS.map((step) => (
                        <div className="create-step-pill" key={step.num}>
                            <span className="step-num">{step.num}</span>
                            {step.label}
                        </div>
                    ))}
                </div>

                <div className="create-layout">
                    <form
                        className="create-form"
                        onSubmit={(e) => { e.preventDefault(); createDonation() }}
                    >
                        <section className="form-section">
                            <label className="field-label" htmlFor="title">Fundraiser title</label>
                            <input
                                id="title"
                                className="field-input"
                                placeholder="e.g. Help Maria recover from surgery"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </section>

                        <section className="form-section">
                            <label className="field-label" htmlFor="description">Your story</label>
                            <textarea
                                id="description"
                                className="field-textarea"
                                placeholder="Explain why you're fundraising and how donations will be used..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                            <span className="field-hint">{description.length} characters · Be clear and honest</span>
                        </section>

                        <section className="form-section">
                            <label className="field-label" htmlFor="budget">Fundraising goal ($)</label>
                            <input
                                id="budget"
                                className="field-input"
                                type="number"
                                min="1"
                                placeholder="5000"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                required
                            />
                        </section>

                        <section className="form-section">
                            <label className="field-label">Cover photo</label>
                            <label className="upload-zone">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="upload-input"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                <span className="upload-icon">📷</span>
                                <span className="upload-text">
                                    {file ? file.name : 'Click to upload or drag an image'}
                                </span>
                                <span className="upload-hint">JPG or PNG, recommended 1200×630</span>
                            </label>
                        </section>

                        <button type="submit" className="create-submit-btn">
                            Publish fundraiser
                        </button>
                    </form>

                    <aside className="create-preview-panel">
                        <h3 className="preview-heading">Live preview</h3>
                        <div className="preview-card">
                            <div className="preview-image-wrap">
                                {previewUrl ? (
                                    <img src={previewUrl} alt="Preview" className="preview-image" />
                                ) : (
                                    <div className="preview-placeholder">Your photo here</div>
                                )}
                            </div>
                            <h4 className="preview-title">{title || 'Your fundraiser title'}</h4>
                            <p className="preview-desc">
                                {description
                                    ? description.slice(0, 140) + (description.length > 140 ? '...' : '')
                                    : 'Your story will appear here so donors understand your cause.'}
                            </p>
                            <div className="preview-progress-track">
                                <div className="preview-progress-fill" style={{ width: '0%' }} />
                            </div>
                            <div className="preview-goal">
                                <strong>$0</strong>
                                <span> raised of {budget ? `$${Number(budget).toLocaleString()}` : '$0'} goal</span>
                            </div>
                        </div>
                        <ul className="preview-tips">
                            <li>Use a clear, emotional photo</li>
                            <li>Explain exactly how funds will be used</li>
                            <li>Set a realistic, achievable goal</li>
                        </ul>
                    </aside>
                </div>
            </div>
            <Footer />
        </div>
    )
}
