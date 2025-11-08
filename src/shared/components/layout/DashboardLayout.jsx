import { Outlet } from "react-router"
import SidebarLayout from "./SidebarLayout"
import NavbarLayout from "./NavbarLayout"

export default function DashboardLayout() {
  return (
    <div>
        <SidebarLayout/>
        <div>
            <NavbarLayout/>
            <main>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}
