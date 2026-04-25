import Header from "../components/Header";
import './CreateDonationPage.css'
export default function CreateDonationPage(){
    return(
        <>
        <Header onCreate={true}/>
        <div className="create-donation">
            <h1 className="new-donation">Create Donation</h1>
            <input className="new-donation-title"/>
            <input className="new-donation-description" />
            <div className="upload-image">Attach image</div>
            <div className="create-new-donation">Create donation</div>
        </div>
        </>
    )
}