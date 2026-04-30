import Header from "../components/Header";
import './MakeDonationPage.css'
import DonationImage from '../assets/donation.png'
import { useLocation, useNavigate, useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export default function MakeDonationPage(){
    const location = useLocation()
    const {id} = useParams()
    const [post, setPost] = useState(location.state?.post)
    const [comment, setComment] = useState('')
    const [budget, setBudget] = useState(0)
    const navigate = useNavigate()
    const loadPost = async() => {
        const response = await axios.get(`http://localhost:5000/post/${id}`)
        setPost(response.data)
    }
    useEffect(()=>{
        if(!location.state?.post){
            loadPost()
        }
    })

    if(!post){
        return (
            <p>loading</p>
        )
    }

    const  saveComment = (event)=>{
        setComment(event.target.value)
    }

    const saveBudget = (event)=>{
        setBudget(Number(event.target.value))
    }

    const createDonation= async()=>{
        await axios.post("http://localhost:5000/donate", {
            "amount": budget,
            "donor": "69edea1d26adeaac62377085",
            "post": id
        })

        await axios.post("http://localhost:5000/comment", {
            "author" : "69edea1d26adeaac62377085",
            "content" : comment,
            "post": id
        })
        navigate("/thankyou")

    }

    return(
        <>
        <Header />
        <div className="make-donation-page">
            <div className="donation-entry">
                <h1 className="donation-title">{post.title}</h1>
                <p className="enter-amount-class">Enter donation</p>
                <input className="enter-money" onChange={saveBudget}/>
                <p className="give-comment-class">Word of courage</p>
                <input className="give-feedback" onChange={saveComment}/>
                <div className="donate" onClick={createDonation}>Donate</div>
            </div>
            <img className="donation-img" src={post.image} />
        </div>
        </>
    )
}