import ProfileDropDown from "./ProfileDropDown"

export default function NavbarLayout() {
    return (
        <header className="hidden h-14 items-center dark:border-gray-600 gap-4 border-b border-gray-200 bg-muted/40 px-4 md:flex">
            <div className="m-1 mr-8">
                <h2 className="text-gray-500 tracking-tight dark:text-gray-200">Bienvenido,</h2>
                <h3 className="font-medium text-lg dark:text-white">Juan Cruz</h3>
            </div>
            <div className="w-full flex-1">
                <form>
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Buscar cuentas..."
                            className="w-full py-2 border dark:border-gray-600 border-gray-200 appearance-none bg-background pl-4 shadow-none md:w-2/3 lg:w-1/3"
                        />
                    </div>
                </form>
            </div>
            <ProfileDropDown />
        </header>
    )
}
