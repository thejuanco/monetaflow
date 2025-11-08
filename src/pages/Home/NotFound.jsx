import { Link } from "react-router"
import NavBarAuth from "../../features/auth/components/NavBarAuth"

export default function NotFound() {
  return (
    <div>
      <NavBarAuth/>
       <div className='flex justify-center items-center mt-28'>
          <div className='sm:w-full sm:mx-10 md:w-1/4'>
              <h1 className='text-9xl font-bold text-blue-600 text-center'>404</h1>
              <h1 className='font-bold text-3xl text-center mt-6'>Oops! Página no encontrada</h1>
              <p className='text-center text-gray-500 mt-4'>Lo sentimos la página que estas buscando no existe.</p>
              <p className='text-center text-gray-500'>Vuelve a la pagina principal y continua explorando.</p>
              <div className="flex flex-row mt-6 justify-center">
                  <Link to="/" className="group flex items-center py-2 px-3 bg-gray-900 text-gray-100 rounded-lg font-medium
                      transform transition-all duration-300 origin-left hover:scale-x-105">
                    Ir a la página principal
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 size-6 transform transition-transform duration-300 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
              </div>
          </div>
      </div>
    </div>
  )
}
