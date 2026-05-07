import { useState } from "react";
import { createDonation } from "../services/donationService";

export default function useCreatedDonation(){
    const [error, setError] = useState(false)

    const makeDonation = async (budget,id)=>{
        try{
            await createDonation(budget,id)
        }
        catch (error){
            setError(true)
        }
    }

    return {error,makeDonation}
}