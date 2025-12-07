export default function SummaryMonth() {
    return (
        <div className="p-6 border border-gray-200 ">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Resumen del Mes</h2>

            <div className="flex justify-between">
                <div className="flex space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-emerald-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                    <p>Ingresos</p>
                </div>
                <div>
                    <p className="text-emerald-600 font-medium">$2,500.00</p>
                </div>
            </div>
            <div className="flex justify-between mt-2 mb-4">
                <div className="flex space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-emerald-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                    <p>Gastos</p>
                </div>
                <div>
                    <p className="text-red-600 font-medium">$1,487.49</p>
                </div>
            </div>
            <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                <span className="font-medium">Balance</span>
                <span className="text-lg font-bold text-emerald-600">$1,012.51</span>
            </div>
        </div>
    )
}
