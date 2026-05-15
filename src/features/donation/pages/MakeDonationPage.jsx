import { useState } from "react"
import useCreatedDonation from "../hooks/useCreateDonation"
import { useLocation, useNavigate, useParams } from "react-router"
import { usePost } from "../../post/hooks/usePost"
import usePostComment from "../../comment/hooks/usePostComment"
import './MakeDonationPage.css'
import Header from "../../../components/Header"
import { useAuth } from "../../../context/AuthContext"
import Footer from "../../../components/Footer";

const PRESET_AMOUNTS = [10, 25, 50, 100, 250]

export default function MakeDonationPage() {
    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const { post } = usePost(location.state?.post)
    const { token } = useAuth()
    const [donation, setDonation] = useState(25)
    const [comment, setComment] = useState("")
    const [customMode, setCustomMode] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState(null)

    const { makeDonation } = useCreatedDonation()
    const { postComment } = usePostComment()

    const percent = post?.budget
        ? Math.min(100, Math.round((post.amount / post.budget) * 100))
        : 0

    const submitDonation = async (method) => {
        if (!donation || donation <= 0) return
        setPaymentMethod(method)
        const donationSuccess = await makeDonation(donation, id, token)

        if (donationSuccess) {
            navigate("/")
        }
    }

    if (!post) return null

    return (
        <div className="page-shell">
            <Header />
            <div className="make-donation-page animate-fade-in-up">
                <div className="donation-entry">
                    <span className="donate-step-badge">Step 2 of 2 — Complete your gift</span>
                    <h1 className="donation-title">{post.title}</h1>

                    <p className="goal-hint">
                        ${Number(post.amount).toLocaleString()} raised · {percent}% of ${Number(post.budget).toLocaleString()} goal
                    </p>

                    <p className="enter-amount-class">Choose an amount</p>
                    <div className="amount-presets">
                        {PRESET_AMOUNTS.map((amount) => (
                            <button
                                key={amount}
                                type="button"
                                className={`preset-btn ${donation === amount && !customMode ? 'active' : ''}`}
                                onClick={() => {
                                    setDonation(amount)
                                    setCustomMode(false)
                                }}
                            >
                                ${amount}
                            </button>
                        ))}
                        <button
                            type="button"
                            className={`preset-btn ${customMode ? 'active' : ''}`}
                            onClick={() => setCustomMode(true)}
                        >
                            Other
                        </button>
                    </div>

                    {(customMode || !PRESET_AMOUNTS.includes(donation)) && (
                        <input
                            className="enter-money"
                            type="number"
                            min="1"
                            placeholder="Enter custom amount"
                            value={donation || ''}
                            onChange={(e) => setDonation(Number(e.target.value))}
                        />
                    )}

                    <p className="give-comment-class">Leave words of encouragement (optional)</p>
                    <textarea
                        className="give-feedback"
                        placeholder="Your message will appear with your donation..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />

                    <p className="payment-divider">
                        <span>Choose payment method</span>
                    </p>

                    <div className="payment-buttons">
                        <button
                            type="button"
                            className={`pay-btn pay-paypal ${paymentMethod === 'paypal' ? 'selected' : ''}`}
                            onClick={() => submitDonation('paypal')}
                        >
                            <span className="pay-btn-icon" aria-hidden>P</span>
                            Pay with PayPal
                        </button>
                        <button
                            type="button"
                            className={`pay-btn pay-telebirr ${paymentMethod === 'telebirr' ? 'selected' : ''}`}
                            onClick={() => submitDonation('telebirr')}
                        >
                            <span className="pay-btn-icon telebirr-icon" aria-hidden>📱</span>
                            Pay with Telebirr
                        </button>
                    </div>

                    <button
                        type="button"
                        className="donate donate-card"
                        onClick={() => submitDonation('card')}
                    >
                        Donate ${Number(donation || 0).toLocaleString()} with card
                    </button>

                    <p className="secure-note">🔒 Your donation is secure and goes directly to this cause.</p>
                </div>

                <div className="donation-preview-side">
                    <img className="donation-img" src={post.image} alt={post.title} />
                    <div className="preview-summary">
                        <div className="preview-summary-row">
                            <span>Your gift</span>
                            <strong>${Number(donation || 0).toLocaleString()}</strong>
                        </div>
                        <div className="preview-progress">
                            <div className="preview-progress-fill" style={{ width: `${percent}%` }} />
                        </div>
                        <p className="preview-summary-meta">{percent}% of goal reached</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
