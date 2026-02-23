import { useState } from "react"
import { NavLink, Link } from "react-router"
import ProfileDropDown from "./ProfileDropDown"

export default function SidebarLayout() {
    const [isSidebarOpen, setIsSidebardOpen] = useState(false)
    const toggleMenu = () => setIsSidebardOpen(!isSidebarOpen)

    const sidebardOptions = [
        {
            name: "Inicio",
            link: "/dashboard",
            icon: "home",
            active: true
        },
        {
            name: "Presupuestos",
            link: "/dashboard/budgets",
            icon: "home",
            active: true
        },
        {
            name: "Transacciones",
            link: "/dashboard/transactions",
            icon: "home",
            active: true
        },
        {
            name: "Cuentas",
            link: "/dashboard/accounts",
            icon: "home",
            active: true
        },{
            name: "Reportes",
            link: "/dashboard/reports",
            icon: "home",
            active: false
        },{
            name: "Calendario",
            link: "/dashboard/calendar",
            icon: "home",
            active: true
        }
    ]

    return (
        <>
            <header className="sticky bg-white top-0 z-30 flex h-16 items-center gap-4 border-b dark:border-gray-600 border-gray-200 px-4 md:hidden">
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

            {/*Sidebard desktop*/}
            <aside className="hidden md:flex flex-col border-r dark:border-gray-600 border-gray-200 h-full overflow-hidden">
                <div className="h-14 flex items-center border-b dark:border-gray-600 border-gray-200 px-4 flex-shrink-0">
                    <Link to={"/dashboard"} className="tracking-tight font-bold text-2xl text-emerald-600">Moneta</Link>
                </div>

                <nav className="flex-1 overflow-y-auto py-2 px-2 text-sm space-y-1">
                    {
                        sidebardOptions.filter(nav => nav.active != false).map(nav => (
                            <NavLink
                                to={nav.link} end
                                className={({ isActive }) => 
                                    `flex flex-row justify-start items-center px-2 py-1 cursor-pointer 
                                    ${isActive ? "bg-gray-200 dark:bg-gray-800 dark:text-white" : "hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"}`}
                            >
                                <p className="text-lg">{nav.name}</p>
                            </NavLink>
                        ))
                    }
                </nav>
            </aside>
        </>
    )
}
