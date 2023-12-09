import Link from "next/link"

function Header() {
  return (
    <header className="grid grid-cols-12 ">
        <Link href="/" className="text-primary text-semibold text-2xl col-span-2"> pizza</Link>
        <nav className="nav col-span-10">
          <Link href="/home" className="col-span-1" target="_blank">Home</Link>
          <Link href="/home" className="col-span-1" target="_blank">Menu</Link>
          <Link href="/home" className="col-span-1" target="_blank">About</Link>
          <Link href="/home" className="col-span-1" target="_blank">Contact</Link>
          <Link 
          href="/home" 
          target="_blank"
          className="py-2 col-span-1 bg-primary text-white text-center rounded-lg">Login</Link>
        </nav>
      </header>
  )
}

export default Header