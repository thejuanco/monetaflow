
export default function TransactionsDash() {
    const transactions = [
        {}
    ]


    return (
        <div className="w-full border p-5 dark:border-gray-600 border-gray-200">
            <h1 className="font-semibold text-2xl dark:text-white">Transacciones Recientes</h1>
            <p className="text-gray-500 text-sm">Has realizado 12 transacciones este mes</p>

            <div className="mt-2 space-y-4">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                    </svg>
                    <div className="flex-1 space-y-1 py-2">
                        <p className="text-sm font-medium leading-none">Supermercado El Corte</p>
                        <p className="text-xs text-gray-600">Hoy, 10:30 AM</p>
                    </div>
                    <span className="text-red-700">$-45.00</span>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                    </svg>
                    <div className="flex-1 space-y-1 py-2">
                        <p className="text-sm font-medium leading-none">Café la Espina</p>
                        <p className="text-xs text-gray-600">Ayer, 15:30 PM</p>
                    </div>
                    <span className="text-red-700">$-45.00</span>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                    </svg>
                    <div className="flex-1 space-y-1 py-2">
                        <p className="text-sm font-medium leading-none">Depósito Salario</p>
                        <p className="text-xs text-gray-600">Mar 15, 2025</p>
                    </div>
                    <span className="text-red-700">$-45.00</span>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                    </svg>
                    <div className="flex-1 space-y-1 py-2">
                        <p className="text-sm font-medium leading-none">Netflix</p>
                        <p className="text-xs text-gray-600">Mar 14, 2025</p>
                    </div>
                    <span className="text-red-700">$-45.00</span>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                    </svg>
                    <div className="flex-1 space-y-1 py-2">
                        <p className="text-sm font-medium leading-none">Restaurante La Plaza</p>
                        <p className="text-xs text-gray-600">Mar 12, 2025</p>
                    </div>
                    <span className="text-red-700">$-45.00</span>
                </div>
                <button className="w-full dark:text-white dark:border-gray-600 border border-gray-200 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                    Ver todas las transacciones
                </button>
            </div>
        </div>
    )
}
