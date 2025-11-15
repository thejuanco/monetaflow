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

      {/*Transactions Grid */}
      <TransactionsList/>
    </div>
  )
}
