//En este archivo se renderizan las pantallas dentro del dash del usuario
import { Outlet } from "react-router"
import SidebarLayout from "./SidebarLayout"
import NavbarLayout from "./NavbarLayout"

export default function DashboardLayout() {
  return (
    <div className="min-h-screen grid md:grid-cols-[240px_1fr]">
      <SidebarLayout />
      <div className="flex flex-col">
        <NavbarLayout />
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
