export default function NextPayments() {
    const transactions = []
    return (
        <div className=" p-6 border border-gray-200 ">
            <h2 className="text-2xl font-semibold tracking-tight ">Próximos Pagos</h2>
            <p className="text-gray-400 mb-4">Transacciones programadas</p>

            <div className="flex justify-between">
                {transactions.length > 0 ? (
                    <div>

                    </div>
                ) : (<div className="p-4">
                    <p className="text-center">No hay transacciones pendientes</p>
                </div>)
                
                }
            </div>

        </div>
    )
}
