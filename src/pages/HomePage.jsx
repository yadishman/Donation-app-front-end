import Header from "../components/Header";
import DonationImage from '../assets/donation.png'
import './HomePage.css'
import { useState, useEffect } from "react";
import axios from 'axios'
import Post from "../components/Post";

export default function HomePage() {
    const [posts, setPosts] = useState([])
    const loadPosts = async () => {
        const response = await axios.get("http://localhost:5000/post")
        setPosts(response.data)
    }

    useEffect(() => {
        loadPosts()
    }, [])

    return (
        <>
            <Header />
            <div className="grid-container">
                {posts.map((post)=>{
                    return <Post post={post} key={post._id} />
                }) }
            </div>
        </>
    )
}