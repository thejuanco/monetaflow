import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useNavigate } from 'react-router'

export default function ProfileDropDown() {
    let navigate = useNavigate()
    return (
        <Popover className={"mx-8"}>
            <PopoverButton className="focus:outline-none data-active:text-gray-900 data-focus:outline data-focus:outline-white data-hover:text-gray-700">
                Perfil
            </PopoverButton>
            <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-gray-200 border border-gray-100 rounded-xl bg-gray-50 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
            >
                <div className="p-3">
                    <button className="block rounded-lg px-3 py-1 transition hover:bg-white/5">
                        <p className="font-semibold text-gray-900">Mi cuenta</p>
                    </button>
                    <button className="block rounded-lg px-3 py-1 transition hover:bg-white/5">
                        <p className="text-gray-900">Perfil</p>
                    </button>
                    <button className="block rounded-lg px-3 py-1 transition hover:bg-white/5">
                        <p className="text-gray-900">Configuración</p>
                    </button>
                </div>
                <div className="p-3">
                    <button className="block rounded-lg px-3 py-1 transition hover:bg-gray-200"
                        onClick={() => {
                            navigate("/")
                        }}
                    >
                        <p className="text-gray-900">Cerrar Sesión</p>
                    </button>
                </div>
            </PopoverPanel>
        </Popover>
    )
}
