import TransactionsList from "../components/TransactionsList"

export default function Transactions() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Transacciones</h2>
        <div className="flex items-center gap-2">
          <button className="border border-gray-200 px-4 py-2">
            Nueva Transacción
          </button>
        </div>
      </div>

      {/*Summary Cards*/}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col pb-2 space-y-2 border border-gray-200 p-5">
          <div className="flex justify-between">
            <h2 className="font-medium">Total de Ingresos</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-emerald-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">$2,850.00</p>
          </div>
          <p className="text-xs text-gray-500">+8% desde el mes pasado</p>
        </div>

        <div className="flex flex-col pb-2 space-y-2 border border-gray-200 p-5">
          <div className="flex justify-between">
            <h2 className="font-medium">Total de Gastos</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">$1,150.50</p>
          </div>
          <p className="text-xs text-gray-500">+12.5% desde el mes pasado</p>
        </div>

        <div className="rouded-lg flex flex-col pb-2 space-y-2 border border-gray-200 p-5">
          <div className="flex justify-between">
            <h2 className="font-medium">Balance</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">$1,120.00</p>
          </div>
          <p className="text-xs text-gray-500">-3.1% desde el mes pasado</p>
        </div>

        <div className="rouded-lg flex flex-col pb-2 space-y-2 border border-gray-200 p-5">
          <div className="flex justify-between">
            <h2 className="font-medium">Transacciones</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">10</p>
          </div>
          <p className="text-xs text-gray-500">Este mes</p>
        </div>
      </div>

      {/*Transactions Grid */}
      <TransactionsList/>
    </div>
  )
}
