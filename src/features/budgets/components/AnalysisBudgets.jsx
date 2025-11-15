export default function AnalysisBudgets() {
  return (
    <div className="grid grid-cols-[3fr_2fr] gap-4">
        <div className="border border-gray-200 p-5">
            <h1 className="font-semibold text-2xl">Tendencias de Gastos</h1>
            <p className="text-gray-600 text-sm">Comparativa de presupuestos vs. gastos reales</p>
            <div className="m-4">
                <div className="h-[300px] w-full">
                    <div className="flex h-full w-full flex-col items-center justify-center border border-gray-300 border-dashed">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="border border-gray-200 p-5">
            <h1 className="font-semibold text-2xl">Distribución de Presupuestos</h1>
            <p className="text-gray-600 text-sm">Cómo se distribuyen tus presupuestos por categoría</p>
            <div className="m-4">
                <div className="h-[300px] w-full">
                    <div className="flex h-full w-full flex-col items-center justify-center border border-gray-300 border-dashed">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
