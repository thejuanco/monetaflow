import { Link } from "react-router"
import NavBarAuth from "../auth/NavBarAuth"

export default function SupportHome() {
  return (
    <>  
        <NavBarAuth/>
        <div className="flex justify-center items-center mt-20">
            <div className="w-full max-w-md border border-gray-100 p-6 rounded-xl shadow">
                <h1 className="text-black text-center font-bold text-2xl pt-8">
                    Soporte Técnico
                </h1>
            </div>
        </div>
    </>
  )
}
