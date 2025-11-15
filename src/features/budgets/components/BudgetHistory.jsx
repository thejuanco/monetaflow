export default function BudgetHistory() {
  return (
    <div className="w-full border p-5 border-gray-200">
        <h1 className="font-semibold text-2xl">Historial de Presupuestos</h1>
        <p className="text-gray-500 text-sm">Revisa tus presupuestos anteriores y su rendimiento</p>

        <div className="h-[100px]">
            <h1 className="text-center mt-10 text-gray-500">Sin historial reciente</h1>
        </div>
    </div>
  )
}
