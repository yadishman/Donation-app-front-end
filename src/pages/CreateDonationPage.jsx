import { useState } from "react";
import Header from "../components/Header";
import './CreateDonationPage.css'
import axios from "axios";
import { useNavigate } from "react-router";
export default function CreateDonationPage(){
    const navigae = useNavigate()
    const formData= new FormData()
    const [title,setTitle]= useState('')
    const [description, setDescription] = useState('')
    const [budget, setBudget] = useState(0)
    const [file, setFile] = useState(null)
    formData.append("title", title)
    formData.append("image",file )
    formData.append('description', description)
    formData.append('budget', budget)
    formData.append('author', "69edea1d26adeaac62377085")

    const manageTitle = (event)=>{
        setTitle(event.target.value)
    }
    const manageDescription = (event)=>{
        setDescription(event.target.value)
    }
    const manageBudget = (event)=>{
        setBudget(event.target.value)
    }
    const manageFile = (event)=>{
        setFile(event.target.files[0])
    }
    const createDonation = async()=>{
        await axios.post("http://localhost:5000/post", formData)
        navigae("/")
    }
    return(
        
        <>
        <Header onCreate={true}/>
        <div className="create-donation">
            <h1 className="new-donation">Create Donation</h1>
            <input className="new-donation-title" onChange={manageTitle}/>
            <input className="new-donation-budget" onChange={manageBudget}/>
            <input className="new-donation-description" onChange={manageDescription} />
            <input className="upload-image" type="file" onChange={manageFile} />
            <div className="create-new-donation" onClick={createDonation}>Create donation</div>
         
        </div>
        </>
    )
}