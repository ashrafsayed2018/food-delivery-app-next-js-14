import Link from "next/link"

function Header() {
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
        <Link 
          href="/login" 
          className="py-2 px-4 bg-primary text-white text-center rounded-lg ">Login</Link>
          <Link href="/register">Register</Link>
          
        </nav>
    </header>
  )
}

export default Header