import useDonation from "../hooks/useDonation"
import Donation from "./Donation"

export default function ListDonation({id}){
    const {donations, error} = useDonation(id)
    return (
        <>
        {donations.map(donation => {
            return (
                <Donation donate={donation}/>
            )
        })}
        
        </>
    )
}