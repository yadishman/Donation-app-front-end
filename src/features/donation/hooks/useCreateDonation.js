import { useState } from "react";
import { createDonation } from "../services/donationService";

export default function useCreatedDonation(){
    const [error, setError] = useState(false)

    const makeDonation = async (budget,id,token)=>{
        try{
            await createDonation(budget,id,token)
            return true
        }
        catch (error){
            console.log(error.response.data)
            setError(true)
            return false
        }
    }

    return {error,makeDonation}
}