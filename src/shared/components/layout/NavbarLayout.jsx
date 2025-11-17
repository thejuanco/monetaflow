import ProfileDropDown from "./ProfileDropDown"

export default function NavbarLayout() {
    return (
        <header className="hidden h-14 items-center gap-4 border-b border-gray-200 bg-muted/40 px-4 md:flex">
            <div className="m-1 mr-8">
                <h2 className="text-gray-500 tracking-tight">Bienvenido,</h2>
                <h3 className="font-medium text-lg">Juan Cruz</h3>
            </div>
            <div className="w-full flex-1">
                <form>
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Buscar cuentas..."
                            className="w-full py-2 border border-gray-200 appearance-none bg-background pl-4 shadow-none md:w-2/3 lg:w-1/3"
                        />
                    </div>
                </form>
            </div>
            <ProfileDropDown />
        </header>
    )
}
