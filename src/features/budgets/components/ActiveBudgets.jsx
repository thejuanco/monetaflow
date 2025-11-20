import DropDownOptions from "./DropDownOptions"

export default function ActiveBudgets() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border border-gray-200 space-y-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <button className="rounded-full bg-gray-100 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg>
                        </button>
                        <h2 className="font-medium">Alimentación</h2>
                    </div>
                    {/*DropDownOptions*/}
                    <DropDownOptions/>
                </div>
                <p className="text-sm text-gray-500">Mensual · Esencial</p>
                <div className="space-y-1 w-full">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">$350 / $500</span>
                        <span className="font-medium">70%</span>
                    </div>
                    <progress value={350} max={500} className="h-2 w-full overflow-hidden" />
                </div>
                <div className="flex justify-between text-sm">
                    <p className="text-gray-600">$120 esta semana</p>
                    <p className="text-gray-600 text-xs">$150 disponibles</p>
                </div>
            </div>

            <div className="p-4 border border-gray-200 space-y-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-gray-100 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </div>
                        <h2 className="font-medium">Alimentación</h2>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 hover:bg-gray-200 p-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
                <p className="text-sm text-gray-500">Mensual · Esencial</p>
                <div className="space-y-1 w-full">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">$350 / $500</span>
                        <span className="font-medium">70%</span>
                    </div>
                    <progress value={350} max={500} className="h-2 w-full overflow-hidden" />
                </div>
                <div className="flex justify-between text-sm">
                    <p>$120 esta semana</p>
                    <p className="text-gray-600 text-xs">$150 disponibles</p>
                </div>
            </div>

            <div className="p-4 border border-gray-200 space-y-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-gray-100 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </div>
                        <h2 className="font-medium">Alimentación</h2>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 hover:bg-gray-200 p-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
                <p className="text-sm text-gray-500">Mensual · Esencial</p>
                <div className="space-y-1 w-full">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">$350 / $500</span>
                        <span className="font-medium">70%</span>
                    </div>
                    <progress value={350} max={500} className="h-2 w-full overflow-hidden" />
                </div>
                <div className="flex justify-between text-sm">
                    <p>$120 esta semana</p>
                    <p className="text-gray-600 text-xs">$150 disponibles</p>
                </div>
            </div>

            <div className="p-4 border border-gray-200 space-y-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-gray-100 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </div>
                        <h2 className="font-medium">Alimentación</h2>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 hover:bg-gray-200 p-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
                <p className="text-sm text-gray-500">Mensual · Esencial</p>
                <div className="space-y-1 w-full">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">$350 / $500</span>
                        <span className="font-medium">70%</span>
                    </div>
                    <progress value={350} max={500} className="h-2 w-full overflow-hidden" />
                </div>
                <div className="flex justify-between text-sm">
                    <p>$120 esta semana</p>
                    <p className="text-gray-600 text-xs">$150 disponibles</p>
                </div>
            </div>

            <div className="p-4 border border-gray-200 space-y-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-gray-100 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-emerald-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </div>
                        <h2 className="font-medium">Alimentación</h2>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 hover:bg-gray-200 p-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
                <p className="text-sm text-gray-500">Mensual · Esencial</p>
                <div className="space-y-1 w-full">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">$350 / $500</span>
                        <span className="font-medium">70%</span>
                    </div>
                    <progress value={350} max={500} className="h-2 w-full overflow-hidden" />
                </div>
                <div className="flex justify-between text-sm">
                    <p>$120 esta semana</p>
                    <p className="text-gray-600 text-xs">$150 disponibles</p>
                </div>
            </div>

        </div>
    )
}
