//En este archivo se renderizan las pantallas dentro del dash del usuario
import { Outlet } from "react-router"
import { Toaster } from "sonner"
import SidebarLayout from "./SidebarLayout"
import NavbarLayout from "./NavbarLayout"

export default function DashboardLayout() {
  return (
    <div className="dark:bg-black grid md:grid-cols-[240px_1fr]">
      <SidebarLayout />
      <div className="flex flex-col flex-1 min-h-screen">
        <NavbarLayout />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <Toaster position="bottom-right"/>
    </div>
  )
}
