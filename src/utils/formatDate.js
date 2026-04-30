export default function formatDate (date){
   const today = new Date()
   const backendDate = new Date(date)
   const differenceInHours= (today-backendDate)/1000/3600
   if(differenceInHours<24){
    return `${Math.trunc(differenceInHours)} hr ago`
   }
   return `${Math.trunc(differenceInHours/24)} days ago`
   
}