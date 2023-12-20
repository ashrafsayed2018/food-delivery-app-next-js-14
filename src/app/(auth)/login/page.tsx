"use client"
import { SignInResponse, signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { ChangeEvent, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const [userCreated,setUserCreated] = useState(false)
  const [error,setError] = useState(false)

  const router = useRouter();

  const handleFormSubmit = async (e:FormEvent) => {
      e.preventDefault();
  
   
      try {
        // Use try-catch to handle errors during the sign-in process
        
        const loginPromise = new Promise<void>(async(resolve, reject) => {
         const response:SignInResponse|undefined = await signIn('credentials', { email, password ,callbackUrl:"/"});

          if(response?.ok) {
            resolve();
              // If sign-in is successful, navigate the user to the home page
              router.push("/");
          } else {
            reject()
          }
        });

        toast.promise(loginPromise, {
          loading:"login",
          success:"success login",
          error:"error",
        })
  
      
      } catch (error) {
        // Handle errors here
        setError(true);
      }
     
  }

  return (
    <section className='mt-8 mb-32'>
    <h1 className='text-center font-extrabold text-primary text-xl my-4'>Login</h1>
    {userCreated && 
        ( 
          <div className='text-center mt-4 text-green-500 font-semibold uppercase'>
            your account is created 
            <br />
            now you can 
            <Link href="/login" className='underline text-blue-700'>   Login</Link>
          </div>
        )
      }
      {error && 
        (
          <div className='max-w-xs mx-auto text-center mt-4 bg-primary rounded-xl p-3 text-white/90'>An Error has occurred</div>
        )
      }
    <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
      <input type="email" placeholder='Email'
       value={email}
        onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
      <input 
        type="text"      
        placeholder='password'
        value={password}
        onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
      <button 
      type='submit'
      >Login</button>
      <div className='my-4 text-center text-gray-500'>Or Login with Provider</div>
      <button className='flex items-center gap-4 justify-center'>
        <Image 
        src="/google.png" 
        width={24}
        height={24}
        className='w-6 h-6'
        alt=""/>
        <span>Login with google</span>
      </button>
      <div className='text-center mt-8 pt-4 text-gray-500 border-t-2'>Don&lsquo;t have an account
        <Link href="/register" className='underline font-semibold text-lg'>  Register &raquo;</Link>
      </div>
    </form>
</section>
  )
}

export default Login