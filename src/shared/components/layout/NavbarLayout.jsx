export default function NavbarLayout() {
  return (
    <header className="hidden h-14 items-center gap-4 border-b bg-muted/40 px-4 md:flex">
        <div className="w-full flex-1">
            <form>
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Buscar cuentas..."
                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                </div>
            </form>
        </div>
    </header>
  )
}
