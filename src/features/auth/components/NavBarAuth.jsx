import { Link } from "react-router"

export default function NavBarAuth() {
  return (
     <nav className="bg-gray-100 w-full flex justify-between items-center px-6 py-3 fixed top-0 left-0 z-50">
      <Link to='/' className="font-bold text-2xl tracking-tighter">Moneta flow</Link>
    </nav>
  )
}
