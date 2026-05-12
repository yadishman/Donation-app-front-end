import useDonation from "../hooks/useDonation"
import Donation from "./Donation"

export default function ListDonation({id}){
    const {donations, error} = useDonation(id)
    if(!donations || donations.length === 0) return <div style={{color:'#6b6b6b'}}>No donations yet — be the first.</div>
    return (
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
        {donations.map(donation => {
            return (
                <Donation donate={donation} key={donation._id || donation.createdAt} />
            )
        })}
        </div>
    )
}