import { useEffect, useState } from "react"

type dataProps = {
    city: string,
    country:string,
    email:string,
    isAdmin:boolean,
    phone:string,
    postalCode:string,
    streetAddress:string,
}
function useProfile() {
    const [data,setData] = useState<dataProps>({
        email:"",
        city: "",
        country: "",
        isAdmin: false,
        phone: "",
        postalCode: "",
        streetAddress: "",
    })
  const [loading,setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
       fetch("/api/profile").then( response => {
          response.json().then(data => {
            setData(data)
            setLoading(false)
          });
       })
  }, [])


  return {data,loading}
}

export default useProfile