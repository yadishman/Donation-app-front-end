import { useEffect, useState } from "react";
import { loadDonations } from "../services/donationService";

export default function useDonation(id){
    const [donations, setDonations] = useState([])
    const [error, setError] = useState(false)

    const fetchDonations = async() => {
        try{
        const donations = await loadDonations(id)
        setDonations(donations)
        }
        catch (error){
            setError(true)
        }

    }

    useEffect(()=>{
        fetchDonations()
    },[])

    return {error,donations}
}