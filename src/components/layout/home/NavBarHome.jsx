import { Link } from "react-router";

export default function NavBarHome() {
  return (
    <nav className="w-full sticky top-0 z-50 border-b border-gray-300 backdrop-blur">
      <div className="flex h-14 items-center px-4 md:px-8">
        <div className="flex space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <Link to="/" className="font-bold text-2xl">
            Moneta-flow
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/signup" className="hover:text-foreground/80">
              Crear cuenta
            </Link>
            <Link to="/signin" className="hover:text-foreground/80">
              Iniciar Sesión
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}
