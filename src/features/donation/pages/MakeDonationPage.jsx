import { useState } from "react"
import useCreatedDonation from "../hooks/useCreateDonation"
import { useLocation, useNavigate, useParams } from "react-router"
import { usePost } from "../../post/hooks/usePost"
import usePostComment from "../../comment/hooks/usePostComment"
import './MakeDonationPage.css'
import Header from "../../../components/Header"
import { useAuth } from "../../../context/AuthContext"

export default function MakeDonationPage() {

    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const { post, loading, error } = usePost(location.state?.post)
    const { token,logout } = useAuth()
    const [donation, setDonation] = useState(0)
    const [comment, setComment] = useState("")

    const { error: donationError, makeDonation } = useCreatedDonation()
    const { error: commentError, postComment } = usePostComment()

    const createDonation = async () => {
        const donationSucess = await makeDonation(donation, id, token)
        const commentSuccess = await postComment(comment, id,token)
        
        if (donationSucess && commentSuccess) {
            navigate("/")
        }
    }
    return (
        <>
            <Header />
            <div className="make-donation-page">
                <div className="donation-entry">
                    <h1 className="donation-title">{post.title}</h1>
                    <p className="enter-amount-class">Enter donation</p>
                    <input className="enter-money" onChange={(event) => { setDonation(Number(event.target.value)) }} />
                    <p className="give-comment-class">Word of courage</p>
                    <input className="give-feedback" onChange={(event) => {
                        setComment(event.target.value)
                    }} />
                    <div className="donate" onClick={createDonation}>Donate</div>
                </div>
                <img className="donation-img" src={post.image} />
            </div>
        </>
    )
}