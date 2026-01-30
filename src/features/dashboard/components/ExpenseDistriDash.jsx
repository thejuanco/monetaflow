export default function ExpenseDistriDash() {
    return (
        <div className="border border-gray-200 dark:border-gray-600 p-5">
            <h1 className="font-semibold text-2xl">Distribución de Gastos</h1>
            <p className="text-sm text-gray-600">Cómo se distribuyen tus gastos por categoría</p>
            <div className="m-4">
                <div className="h-[300px] w-full">
                    <div className="flex h-full w-full flex-col items-center justify-center border border-gray-300 border-dashed">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
