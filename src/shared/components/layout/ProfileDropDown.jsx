import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useNavigate } from 'react-router'
import SwitchTheme from './SwitchTheme'

export default function ProfileDropDown() {
    let navigate = useNavigate()
    return (
        <Popover className={"md:mr-11 mr-4"}>
            <PopoverButton className="focus:outline-none border border-gray-200 px-6 py-2 data-active:text-gray-900 data-focus:outline data-focus:outline-white data-hover:text-gray-700">
                Perfil
            </PopoverButton>
            <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-gray-200 border border-gray-100 bg-gray-50 text-sm/6
                    transition duration-200 ease-in-out
                    [--anchor-gap:--spacing(5)]
                    data-closed:-translate-y-1 data-closed:opacity-0
                    -translate-x-1"
            >
                <div className="p-1 gap-2 space-y-1">
                    <button className="block px-3 py-1 transition">
                        <p className="font-semibold text-gray-900">Mi cuenta</p>
                    </button>
                    <button 
                        className="flex px-3 py-1 transition w-full hover:bg-gray-200"
                        onClick={() => {
                            navigate("/dashboard/profile")
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <p className="text-gray-900 text-start">Perfil</p>
                    </button>
                    <button 
                        className="flex px-3 py-1 transition w-full hover:bg-gray-200"
                        onClick={() => {
                            navigate("/dashboard/settings")
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1 text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <p className="text-gray-900 text-start">Configuración</p>
                    </button>
                    <div className="flex flex-col px-3 py-1 transition w-full space-y-2">
                        <SwitchTheme/>
                    </div>
                </div>
                <div className="p-1">
                    <button className="flex px-3 py-1 w-full transition hover:bg-red-200"
                        onClick={() => {
                            navigate("/")
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-700 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                        <p className="text-red-700 font-medium">Cerrar Sesión</p>
                    </button>
                </div>
            </PopoverPanel>
        </Popover>
    )
}
