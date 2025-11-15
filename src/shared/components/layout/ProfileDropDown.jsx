import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useNavigate } from 'react-router'

export default function ProfileDropDown() {
    let navigate = useNavigate()
    return (
        <Popover className={"mr-11"}>
            <PopoverButton className="focus:outline-none border border-gray-200 px-4 py-2 data-active:text-gray-900 data-focus:outline data-focus:outline-white data-hover:text-gray-700">
                Perfil
            </PopoverButton>
            <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-gray-200 border border-gray-100 rounded-xl bg-gray-50 text-sm/6
                    transition duration-200 ease-in-out
                    [--anchor-gap:--spacing(5)]
                    data-closed:-translate-y-1 data-closed:opacity-0
                    -translate-x-1"
            >
                <div className="p-1 gap-2">
                    <button className="block rounded-md px-3 py-1 transition">
                        <p className="font-semibold text-gray-900">Mi cuenta</p>
                    </button>
                    <button className="block rounded-md px-3 py-1 transition w-full hover:bg-gray-200">
                        <p className="text-gray-900 text-start">Perfil</p>
                    </button>
                    <button className="block rounded-md px-3 py-1 transition w-full hover:bg-gray-200">
                        <p className="text-gray-900 text-start">Configuración</p>
                    </button>
                </div>
                <div className="p-1">
                    <button className="block rounded-md px-3 py-1 w-full transition hover:bg-red-200"
                        onClick={() => {
                            navigate("/")
                        }}
                    >
                        <p className="text-red-700">Cerrar Sesión</p>
                    </button>
                </div>
            </PopoverPanel>
        </Popover>
    )
}
