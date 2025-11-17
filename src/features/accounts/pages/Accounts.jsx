import TabsAccounts from "../components/TabsAccounts"

export default function Accounts() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Cuentas</h2>
        <div className="flex items-center gap-2">
          <button className="border border-gray-200 flex justify-center items-center py-2 px-3 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-600 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Nueva Cuenta
          </button>
        </div>
      </div>

      {/*Accounsts Cards*/}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col pb-2 space-y-2 border border-gray-200 p-5">
          <div className="flex justify-between">
            <h2 className="font-medium">Salto Total</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">$45,231.89</p>
          </div>
          <p className="text-xs text-gray-500">+20.1% desde el mes pasado</p>
        </div>

        <div className="flex flex-col pb-2 space-y-2 border border-gray-200 p-5">
          <div className="flex justify-between">
            <h2 className="font-medium">Activos</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-emerald-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">$48,650.00</p>
          </div>
          <p className="text-xs text-gray-500">Cuentas corrientes, ahorros e inversiones</p>
        </div>

        <div className="rouded-lg flex flex-col pb-2 space-y-2 border border-gray-200 p-5">
          <div className="flex justify-between">
            <h2 className="font-medium">Deudas</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">$3,418.00</p>
          </div>
          <p className="text-xs text-gray-500">Tarjetas de créditos y préstamos</p>
        </div>

        <div className="rouded-lg flex flex-col pb-2 space-y-2 border border-gray-200 p-5">
          <div className="flex justify-between">
            <h2 className="font-medium">Cuentas</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">6</p>
          </div>
          <p className="text-xs text-gray-500">Cuentas activas</p>
        </div>
      </div>

      <TabsAccounts/>
    </div>
  )
}
