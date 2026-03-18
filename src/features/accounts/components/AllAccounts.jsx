import { CreditCardIcon, BanknotesIcon } from "@heroicons/react/24/outline"

export default function AllAccounts({filterType}) {
    const accountsExample = [
        {
            id: 1,
            icon: <CreditCardIcon className="size-5 text-emerald-700"/>,
            title: "Cuenta Principal",
            bank: "BBVA",
            description: "Principal • ES91 2100 0418 4502 0005 1332",
            amount: 12580.00,
            plus: 120.00,
            limit: null,
            type: "main",
            status: true
        },
        {
            id: 2,
            icon:  <CreditCardIcon className="size-5 text-emerald-700"/>,
            title: "Tarjeta de Crédito",
            bank: "BBVA",
            description: "Principal • ES91 2100 0418 4502 0005 1332",
            amount: 12580.00,
            plus: 120.00,
            limit: null,
            type: "credit",
            status: true
        },
        {
            id: 3,
            icon:  <BanknotesIcon className="size-5 text-emerald-700"/>,
            title: "Cuenta de Ahorros",
            bank: "BBVA",
            description: "Principal • ES91 2100 0418 4502 0005 1332",
            amount: 12580.00,
            plus: 120.00,
            limit: null,
            type: "savings",
            status: true
        },
        {
            id: 4,
            icon:  <CreditCardIcon className="size-5 text-emerald-700"/>,
            title: "Pagos Suscripciones",
            bank: "NU",
            description: "Principal • ES91 2100 0418 4502 0005 1332",
            amount: 12580.00,
            plus: 120.00,
            limit: null,
            type: "savings",
            status: true
        },
        {
            id: 5,
            icon:  <CreditCardIcon className="size-5 text-emerald-700"/>,
            title: "Gastos varios",
            bank: "Mercado Pago",
            description: "Principal • ES91 2100 0418 4502 0005 1332",
            amount: 12580.00,
            plus: 120.00,
            limit: null,
            type: "credit",
            status: true
        }

    ]

    const filteredAccounts = accountsExample.filter((account) => {
        if (!filterType) return account.status !== false;
        return account.type === filterType && account.status !== false;
    })

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredAccounts.filter((account) => account.status !== false).map((account, index) => (
                <div className="p-4 border border-gray-200 space-y-2" key={index}>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            {account.icon}
                            <h2 className="font-medium">{account.title}</h2>
                        </div>
                        <span className="border border-gray-200 py-1 px-2">
                            <p className="text-sm">{account.bank}</p>
                        </span>
                    </div>
                    <span className="text-sm text-gray-500">{account.description}</span>
                    <div className="space-y-1 w-full">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-800 text-2xl font-semibold">{account.amount}</span>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <p className="text-sm text-gray-500">${account.plus} esta semana</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
