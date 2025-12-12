import { useState } from "react"
import TransactionsDash from "../components/TransactionsDash"
import FinancialSumDash from "../components/FinancialSumDash"
import ExpenseDistriDash from "../components/ExpenseDistriDash"
import UpdateBalanceDash from "../components/UpdateBalanceDash"

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <button className="border border-gray-200 flex justify-center items-center py-2 px-3 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Descargar
          </button>
        </div>
      </div>

      {/*Summary Cards*/}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col pb-2 space-y-2 border border-gray-200 p-5">
          <div className="flex justify-between">
            <h2 className="font-medium">Salto Total</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">$45231.89</p>
            <button
              onClick={() => setIsOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 hover:cursor-pointer hover:bg-gray-200 p-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500">+20.1% desde el mes pasado</p>
        </div>

        <div className="flex flex-col pb-2 space-y-2 border border-gray-200 p-5">
          <div className="flex justify-between">
            <h2 className="font-medium">Ingresos</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-emerald-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">$7,350.50</p>
          </div>
          <p className="text-xs text-gray-500">+12.5% desde el mes pasado</p>
        </div>

        <div className="rouded-lg flex flex-col pb-2 space-y-2 border border-gray-200 p-5">
          <div className="flex justify-between">
            <h2 className="font-medium">Gastos</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">$4,120.00</p>
          </div>
          <p className="text-xs text-gray-500">-3.1% desde el mes pasado</p>
        </div>

        <div className="rouded-lg flex flex-col pb-2 space-y-2 border border-gray-200 p-5">
          <div className="flex justify-between">
            <h2 className="font-medium">Ahorro</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">$3,200.00</p>
          </div>
          <p className="text-xs text-gray-500">+8.2% desde el mes pasado</p>
        </div>
      </div>

      {/*Transactions*/}
      <TransactionsDash/>

      {/**/}
      <div className="grid grid-cols-[3fr_2fr] gap-4">
        <FinancialSumDash />
        <ExpenseDistriDash />
      </div>

      {/*Dialogs*/}
      <UpdateBalanceDash
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    </div>
  )
}
