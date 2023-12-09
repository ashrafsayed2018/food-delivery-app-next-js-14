import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between">
        <Link href="/" className="text-primary text-semibold text-2xl">kuwait pizza</Link>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold ">
          <Link href="/home" target="_blank">Home</Link>
          <Link href="/home" target="_blank">Menu</Link>
          <Link href="/home" target="_blank">About</Link>
          <Link href="/home" target="_blank">Contact</Link>
          <Link 
          href="/home" 
          target="_blank"
          className="py-2 px-6 bg-primary text-white rounded-full">Login</Link>
        </nav>
      </header>
  )
}

export default Header