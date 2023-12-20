'use client'

import {useSession } from "next-auth/react"
import Image from "next/image";
import { useRouter } from "next/navigation";
import {FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

 function Profile() {
   
    const [userName ,setUserName]= useState("")
    const [image,setImage] = useState("/avatar.png")
    const [phone,setPhone] = useState("")
    const [streetAddress,setStreetAddress] = useState("")
    const [postalCode,setPostalCode] = useState("")
    const [city,setCity] = useState("")
    const [country,setCountry] = useState("")
    const  {data: session, status, update} = useSession();


    const router = useRouter();

    useEffect( () => {
    
         if(status ==="authenticated") {
            setUserName(session?.user?.name!)
            setImage(session?.user?.image!)
            fetch("/api/profile").then((response) => {
                response.json().then((data) => {
                    setPhone(data.phone)
                    setPostalCode(data.postalCode)
                    setCity(data.city)
                    setCountry(data.country)
                    setStreetAddress(data.streetAddress)
                    console.log(data)
                })
            });
         }
       
    }, [session,status]);

    if(status === 'loading') {
        return "Loading ..."
    } 
    if (status ==="unauthenticated") {
        router.push("/login")
    }

    const handleProfileInfoUpdate = async(e:FormEvent) => {
        e.preventDefault();
    try {

        const savingPromise = new Promise<void>(async(resolve, reject) => {

            const response = await fetch("api/profile", {
                method: "PUT",
                body: JSON.stringify({
                    name:userName,
                    image,
                    phone,
                    streetAddress,
                    postalCode,
                    city,
                    country,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            }) 
        
        
            if (response.ok) {
               resolve()
                await update({
                    name:userName,
                    image:image
                }) 
               
            } else {
                reject();
            }
        });
       
        await toast.promise(savingPromise,{
            loading:"saving",
            success:"success saving",
            error:"error",
        })

        } catch (error) {
            console.log(error)
        }
       
    }

  const handleFileChange =async (e:any) => {
        const files = e.target.files
        if(files?.length === 1) {
            const data = new FormData
            data.set('file', files[0])
          
            try {

                const uploadingPromise = new Promise<void>( async (resolve, reject) => {
                    const res =  await fetch("api/upload", {
                        method: "POST",
                        body: data
                    })  
                    if(res.ok) {
                          resolve()
                            const link = await res.json();
                            setImage(link)
                            const updated = await update({
                                    name:userName,
                                    image:link
                                })   
    
                     } else {
                        reject()
                     }
                })

               await toast.promise(uploadingPromise,{
                    loading:"uploading...",
                    success:"uploading successfully",
                    error:"uploading failed"
                })
               
                
            } catch (error) {
                console.log(error)  
            }     
        }
  }
  
  return (
   
    <section className='mt-8 mb-32'>
        <h1 className='text-center font-extrabold text-primary text-xl my-4'>Profile</h1>
     
        <div className="max-w-md mx-auto">
            <div className="flex gap-x-3 p-2 bg-gray-100 rounded-lg mb-72">
                <div className="flex-2 rounded-md max-w-[144px]bg-gray-300 flex-col justify-between">
                    {image &&  
                        <Image 
                            src={image} alt="profile image" 
                            priority={true}
                            width={128}
                            height={128}
                            className="rounded-lg w-[128px] h-[128px]" 
                        />
                    }
                    <label >
                        <input type="file" 
                        className="hidden"
                        onChange={handleFileChange} />
                        <span className="block border-2 border-gray-400 cursor-pointer rounded-lg mt-4 p-1 text-center">Edit</span>
                    </label>
                </div>
                <form className="grow flex-col justify-between" onSubmit={handleProfileInfoUpdate} >
                    <label htmlFor="fullname">First and last name</label>
                    <input 
                    type="text" 
                    placeholder="First and Last name" 
                    value={userName}
                    onChange={(e) =>setUserName(e.target.value)} 
                    id="fullname" />
                   <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    disabled value={session?.user?.email!} 
                    id="email"/>
                    <label htmlFor="phone">phone number</label>
                    <input type="tel" placeholder="Phone number"
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone" />
                    <label htmlFor="streetAdress">Street Address</label>
                    <input 
                    type="text" placeholder="Street Address" 
                    value={streetAddress} 
                    onChange={(e) => setStreetAddress(e.target.value)}
                    id="streetAdress"
                    />
                    <div className="flex gap-4">
                        <div>
                            <label htmlFor="city">City</label>
                            <input type="text" placeholder="City"
                            value={city} 
                            onChange={(e) => setCity(e.target.value)} 
                            id="city"/>
                        </div>
                        <div>
                            <label htmlFor="postalCode">Postal Code</label>
                            <input type="text" placeholder="Postal code"
                            value={postalCode} onChange={(e) => setPostalCode(e.target.value)}
                            id="postalCode" />
                        </div>
                    </div>
                    <label htmlFor="country">Country</label>
                    <input type="text" placeholder="Country"
                     value={country} 
                     onChange={(e) => setCountry(e.target.value)}
                     id="country" />
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Profile