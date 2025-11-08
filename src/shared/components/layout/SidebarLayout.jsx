export default function SidebarLayout() {
  return (
    <aside className="hidden md:flex flex-col bg-muted/40 border-r">
      <div className="h-14 flex items-center border-b px-4">
        <span>Moneta</span>
      </div>

      <nav className="flex-1 overflow-auto py-2 px-2 text-sm space-y-1">
        <span className="block hover:bg-gray-200 rounded px-2 py-1 cursor-pointer">
          Inicio
        </span>
        {/* Aquí agregarás más items */}
      </nav>
    </aside>
  )
}
