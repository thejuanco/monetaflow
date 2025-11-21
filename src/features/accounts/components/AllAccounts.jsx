export default function AllAccounts() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border border-gray-200 space-y-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-gray-100 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg>
                        </div>
                        <h2 className="font-medium">Cuenta Principal</h2>
                    </div>
                    <span className="border border-gray-200 py-1 px-2">
                        <p className="text-sm">BBVA</p>
                    </span>
                </div>
                <p className="text-sm text-gray-500">Principal • ES91 2100 0418 4502 0005 1332</p>
                <div className="space-y-1 w-full">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-800 text-2xl font-semibold">$12,580.00</span>
                    </div>
                </div>
                <div className="flex flex-row space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                    <p className="text-sm text-gray-600">$120 esta semana</p>
                </div>
            </div>

            <div className="p-4 border border-gray-200 space-y-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-gray-100 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg>
                        </div>
                        <h2 className="font-medium">Tarjeta de Crédito</h2>
                    </div>
                    <span className="border border-gray-200 py-1 px-2">
                        <p className="text-sm">BBVA</p>
                    </span>
                </div>
                <p className="text-sm text-gray-500">Principal • ES91 2100 0418 4502 0005 1332</p>
                <div className="space-y-1 w-full">
                    <div className="flex justify-between text-sm">
                        <span className="text-red-600 text-2xl font-semibold">$-1,245.30</span>
                    </div>
                </div>
                <div className="flex flex-row space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                    </svg>
                    <p className="text-sm text-gray-600">Limite: $5,000 . Disponible: $3,754.00</p>
                </div>
            </div>

            <div className="p-4 border border-gray-200 space-y-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-gray-100 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg>
                        </div>
                        <h2 className="font-medium">Cuenta de Ahorros</h2>
                    </div>
                    <span className="border border-gray-200 py-1 px-2">
                        <p className="text-sm">BBVA</p>
                    </span>
                </div>
                <p className="text-sm text-gray-500">Principal • ES91 2100 0418 4502 0005 1332</p>
                <div className="space-y-1 w-full">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-800 text-2xl font-semibold">$25,340.00</span>
                    </div>
                </div>
                <div className="flex flex-row space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                    <p className="text-sm text-gray-600">$500 este mes</p>
                </div>
            </div>

            <div className="p-4 border border-gray-200 space-y-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-gray-100 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg>
                        </div>
                        <h2 className="font-medium">Cuenta Principal</h2>
                    </div>
                    <span className="border border-gray-200 py-1 px-2">
                        <p className="text-sm">BBVA</p>
                    </span>
                </div>
                <p className="text-sm text-gray-500">Principal • ES91 2100 0418 4502 0005 1332</p>
                <div className="space-y-1 w-full">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-800 text-2xl font-semibold">$12,580.00</span>
                    </div>
                </div>
                <div className="flex flex-row space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                    <p className="text-sm text-gray-600">$120 esta semana</p>
                </div>
            </div>

            <div className="p-4 border border-gray-200 space-y-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-gray-100 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg>
                        </div>
                        <h2 className="font-medium">Cuenta Principal</h2>
                    </div>
                    <span className="border border-gray-200 py-1 px-2">
                        <p className="text-sm">BBVA</p>
                    </span>
                </div>
                <p className="text-sm text-gray-500">Principal • ES91 2100 0418 4502 0005 1332</p>
                <div className="space-y-1 w-full">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-800 text-2xl font-semibold">$12,580.00</span>
                    </div>
                </div>
                <div className="flex flex-row space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                    <p className="text-sm text-gray-600">$120 esta semana</p>
                </div>
            </div>

        </div>
    )
}
