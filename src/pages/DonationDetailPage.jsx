import Header from "../components/Header";
import CircularProgress from '@mui/material/CircularProgress'
import './DonationDetailPage.css'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import formatDate from "../utils/formatDate";
export default function DonationDetailPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const location = useLocation()
    const [post, setPost] = useState(location.state?.post)
    const [comments, setComments] = useState([])
    const [donations, setDonations] = useState([])

    const loadPost = async () => {
        const response = await axios.get(`http://localhost:5000/post/${id}`)
        setPost(response.data)
    }

    const loadComments = async () => {
        const response = await axios.get(`http://localhost:5000/comment/post/${id}`)
        console.log(response.data)
        setComments(response.data)
    }
    const loadDonations = async () => {
        const response = await axios.get(`http://localhost:5000/donate/post/${id}`)
        setDonations(response.data)
    }

    useEffect(() => {

        if (!location.state?.post) {
            console.log("state is undefined")
            loadPost()
        }
        loadComments(),
            loadDonations()
    }, [])

    if (!post) {
        return (
            <p>
                loading
            </p>
        )
    }
    return (

        <>
            <Header />
            <div className="donation-main">
                <div className="donation-details">
                    <h1 className="donation-tite">{post.title}</h1>
                    <img className="donation-img" src={post.image} />
                    <p className="donation-detail">
                        {post.description}
                    </p>
                    <div className="donation-author">
                        <div className="avi">J</div>
                        <div className="author-name-role">
                            <p className="author-name">{post.author.username}</p>
                            <p className="author-role">Organizer</p>
                        </div>
                    </div >
                    <div className="section-separator" />
                    <h1 className="comment-title">Comments of support</h1>
                    {comments.map(comment => {
                        return (
                            <div className="comments">
                                <div className="commenter-avi">{comment?.author.username[0].toUpperCase()}</div>
                                <div className="comment-meta-data-and-comment">
                                    <div className="commenter">{comment?.author.username}</div>
                                    {/* <p className="comment-meta-data">$0 6hrs</p> */}
                                    <p className="comment">{comment.content}</p>
                                </div>
                            </div>)
                    })}

                </div>
                <div className="donation-stats">
                    <div className="donation-amt">
                        <CircularProgress className="circular-progress" variant="determinate" enableTrackSlot={true} thickness={8} size={100} color="success" value={post.amount * 100 / post.budget} />
                        <div className="donation-amount-numbers">
                            <p className="current-donation">{`${post.amount}$ raised`}</p>
                            <p className="donation-target">{`of ${post.budget}`}</p>
                            <p className="total-donator-count">{`${post.donator_count} donations`}</p>
                        </div>
                    </div>
                    <div className="make-donation" onClick={()=>{
                        navigate(`/make-donation/${post._id}`,{state:{post}})
                    }}>Donate Now</div>
                    <h1 className="donation-recent-title">Recent Donation</h1>
                    {donations.map(donate => {
                        return (
                            <div className="recent-donations">
                                <div className="recent-donation-avi">{donate?.donor.username[0].toUpperCase()}</div>
                                <div className="recent-donation-metadata-and-amonut">
                                    <p className="recent-donator">{donate?.donor.username}</p>
                                    <div className="recent-donation-amonut-and-time">
                                        <p className="recent-donation-amount">{`$ ${donate.amount}`}</p>
                                        <p className="recent-donation-time">{formatDate(donate.createdAt)}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}