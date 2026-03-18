import { ArrowTrendingUpIcon, TagIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function PendingTransactions({ selectedDay }) {
    const date = new Date();
    const getMonth = date.toLocaleDateString("es-ES", { month: "long" });

return (
    <div className=" p-6 border border-gray-200 dark:border-gray-600">
        <h2 className="text-2xl font-semibold tracking-tight dark:text-white">
            {selectedDay.date} de {getMonth}
        </h2>
        <p className="text-gray-400 mb-4">{selectedDay.transactions.length} transacción(es)</p>

        <div className="">
            {selectedDay.transactions.length > 0 ? (
            <div className="space-y-3">
                {selectedDay.transactions.map((transaction) => (
                <div 
                    key={transaction.id}
                    className="flex items-start gap-3 border border-gray-200 p-3"
                >
                    <div 
                        className={`mt-0.5 p-1 flex h-8 w-8 items-center rounded-full justify-center
                            ${transaction.type === "income" ? "bg-emerald-100 dark:bg-emerald-900/30"
                                : transaction.type === "scheduled" ? "bg-amber-100 dark:bg-amber-900/30"
                                : "bg-rose-100 dark:bg-rose-900/30"
                            }
                        `}
                    >
                        <ArrowTrendingUpIcon/>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-start justify-between w-full">
                            <div>
                                <p className="font-medium">{transaction.title}</p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <TagIcon className="h-3 w-3 text-gray-600"/>
                                    <p className="text-gray-600">{transaction.category}</p>
                                    <ClockIcon className="h-3 w-3 text-gray-600"/>
                                    <p className="text-gray-600">{transaction.time}</p>
                                </div>
                            </div>
                            <div className="ml-20">
                                <span
                                    className={`font-medium ${transaction.type === "income" ? "text-emerald-600" : "text-rose-600"}`}
                                >
                                    {transaction.amount > 0 ? "+" : ""}${transaction.amount.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            ) : (
            <div className="p-4">
                <p className="text-center dark:text-white">
                No hay transacciones pendientes
                </p>
            </div>
            )}
        </div>
    </div>
  );
}
