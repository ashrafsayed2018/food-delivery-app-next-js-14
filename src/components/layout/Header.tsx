"use client"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

function Header() {
  const session = useSession()

  const status = session.status;
  const userData = session.data?.user;
  let userEmail;
  if(userData?.email?.includes("@")) {
   userEmail =  userData.email.split("@")[0]
  }

  return (
    <header className="flex items-center justify-between">
       
        <nav className="flex items-center gap-8 text-gray-500">
          <Link href="/" className="text-primary text-semibold text-2xl"> pizza</Link>
          <Link href="/">Home</Link>
          <Link href="/home">Menu</Link>
          <Link href="/home">About</Link>
          <Link href="/home">Contact</Link>
      
        </nav>
        <nav className="flex items-center gap-x-4 text-gray-500 font-semibold">
          {status === "authenticated" ?
           <div className="flex items-center gap-3">
               <button 
                  type="button"
                  onClick={() => signOut()}
                  className="m-0 py-2 px-4 bg-primary text-white text-center rounded-lg">Logout
                  </button>
                  <Link className="block py-2 px-4 bg-blue-500 text-white text-center rounded-lg text-xs whitespace-nowrap" href="/profile">{userEmail}</Link>
           </div>
          : 
           <>
                <Link 
                    href="/login" 
                    className="py-2 px-4 bg-primary text-white text-center rounded-lg ">Login</Link>
                <Link href="/register">Register</Link>
           </>
          }
        </nav>
    </header>
  )
}

export default Header