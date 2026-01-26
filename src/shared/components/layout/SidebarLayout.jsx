import { useState } from "react"
import { NavLink, Link } from "react-router"
import ProfileDropDown from "./ProfileDropDown"

export default function SidebarLayout() {
    const [isSidebarOpen, setIsSidebardOpen] = useState(false)
    const toggleMenu = () => setIsSidebardOpen(!isSidebarOpen)

    return (
        <>
            <header className="sticky bg-white top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-200 px-4 md:hidden">
                <div className="flex justify-between w-full">
                    <button
                        onClick={toggleMenu}
                        className="transition-colors p-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <ProfileDropDown/>
                </div>

                <aside
                    className={`
                    fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-gray-200 transition-transform duration-300 transform 
                    md:translate-x-0 md:static md:shadow-none 
                    ${isSidebarOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full shadow-none'}
                `}
                >
                    <button className="p-2" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <nav className="flex-1 flex flex-col px-4 space-y-2">
                        <Link 
                            to={"/dashboard"}
                            className=""
                            onClick={toggleMenu}
                        >
                            Inicio
                        </Link>
                        <Link 
                            to={"/dashboard/budgets"}
                            className=""
                            onClick={toggleMenu}
                        >
                            Presupuestos
                        </Link>
                        <Link 
                            to={"/dashboard/transactions"}
                            className=""
                            onClick={toggleMenu}
                        >
                            Transacciones
                        </Link>
                        <Link 
                            to={"/dashboard/accounts"}
                            className=""
                            onClick={toggleMenu}
                        >
                            Cuentas
                        </Link>
                        <Link 
                            to={"/dashboard/reports"}
                            className=""
                            onClick={toggleMenu}
                        >
                            Reportes
                        </Link>
                        <Link 
                            to={"/dashboard/calendar"}
                            className=""
                            onClick={toggleMenu}
                        >
                            Calendario
                        </Link>
                    </nav>
                </aside>
            </header>

            <aside className="hidden md:flex flex-col border-r border-gray-200 h-screen overflow-hidden">
                <div className="h-14 flex items-center border-b border-gray-200 px-4 flex-shrink-0">
                    <Link to={"/dashboard"} className="tracking-tight font-bold text-2xl text-emerald-600">Moneta</Link>
                </div>

                <nav className="flex-1 overflow-y-auto py-2 px-2 text-sm space-y-1">
                    <NavLink to="/dashboard" end
                        className={({ isActive }) =>
                            `flex flex-row justify-start items-center px-2 py-1 cursor-pointer 
                            ${isActive ? "bg-gray-200" : "hover:bg-gray-100"}`
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mx-2 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <p className="text-lg">Inicio</p>
                    </NavLink>
                    <NavLink to="/dashboard/budgets"
                        className={({ isActive }) =>
                            `flex flex-row justify-start items-center px-2 py-1 cursor-pointer 
                            ${isActive ? "bg-gray-200" : "hover:bg-gray-100"}`
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mx-2 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                        </svg>
                        <p className="text-lg">Presupuestos</p>
                    </NavLink>
                    <NavLink to="/dashboard/transactions"
                        className={({ isActive }) =>
                            `flex flex-row justify-start items-center px-2 py-1 cursor-pointer 
                            ${isActive ? "bg-gray-200" : "hover:bg-gray-100"}`
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mx-2 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                        <p className="text-lg">Transacciones</p>
                    </NavLink>
                    <NavLink to="/dashboard/accounts"
                        className={({ isActive }) =>
                            `flex flex-row justify-start items-center px-2 py-1 cursor-pointer 
                            ${isActive ? "bg-gray-200" : "hover:bg-gray-100"}`
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mx-2 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                        </svg>
                        <p className="text-lg">Cuentas</p>
                    </NavLink>
                    <NavLink to="/dashboard/reports"
                        className={({ isActive }) =>
                            `flex flex-row justify-start items-center px-2 py-1 cursor-pointer 
                            ${isActive ? "bg-gray-200" : "hover:bg-gray-100"}`
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mx-2 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        <p className="text-lg">Reportes</p>
                    </NavLink>
                    <NavLink to="/dashboard/calendar"
                        className={({ isActive }) =>
                            `flex flex-row justify-start items-center px-2 py-1 cursor-pointer 
                            ${isActive ? "bg-gray-200" : "hover:bg-gray-100"}`
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mx-2 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <p className="text-lg">Calendario</p>
                    </NavLink>
                </nav>
            </aside>
        </>
    )
}
