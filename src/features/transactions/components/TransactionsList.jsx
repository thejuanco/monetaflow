import DropDownOptionsList from "./DropDownOptionList"

export default function TransactionsList() {

  const transactionsData = [
    {
      id: "1",
      date: "2025-03-20",
      description: "Supermercado El Corte",
      category: "Alimentación",
      account: "Cuenta Corriente",
      amount: -85.0,
      status: "completed",
    },
    {
      id: "2",
      date: "2025-03-19",
      description: "Café La Esquina",
      category: "Restaurantes",
      account: "Tarjeta de Crédito",
      amount: -12.5,
      status: "completed",
    },
    {
      id: "3",
      date: "2025-03-15",
      description: "Depósito Salario",
      category: "Ingresos",
      account: "Cuenta Corriente",
      amount: 2500.0,
      status: "completed",
    },
    {
      id: "4",
      date: "2025-03-14",
      description: "Netflix",
      category: "Suscripciones",
      account: "Tarjeta de Crédito",
      amount: -15.99,
      status: "completed",
    },
    {
      id: "5",
      date: "2025-03-12",
      description: "Restaurante La Plaza",
      category: "Restaurantes",
      account: "Tarjeta de Crédito",
      amount: -45.75,
      status: "completed",
    },
    {
      id: "6",
      date: "2025-03-10",
      description: "Transferencia a Ahorros",
      category: "Transferencias",
      account: "Cuenta Corriente",
      amount: -500.0,
      status: "completed",
    },
    {
      id: "7",
      date: "2025-03-08",
      description: "Farmacia Central",
      category: "Salud",
      account: "Cuenta Corriente",
      amount: -32.45,
      status: "completed",
    },
    {
      id: "8",
      date: "2025-03-05",
      description: "Gasolina",
      category: "Transporte",
      account: "Tarjeta de Crédito",
      amount: -60.0,
      status: "completed",
    },
    {
      id: "9",
      date: "2025-03-03",
      description: "Pago Alquiler",
      category: "Vivienda",
      account: "Cuenta Corriente",
      amount: -850.0,
      status: "completed",
    },
    {
      id: "10",
      date: "2025-03-01",
      description: "Ingreso Freelance",
      category: "Ingresos",
      account: "Cuenta Corriente",
      amount: 350.0,
      status: "completed",
    },
    {
      id: "11",
      date: "2025-03-01",
      description: "Ingreso Freelance 11",
      category: "Ingresos",
      account: "Cuenta Corriente",
      amount: 350.0,
      status: "completed",
    },
    {
      id: "12",
      date: "2025-03-01",
      description: "Ingreso Freelance 12",
      category: "Ingresos",
      account: "Cuenta Corriente",
      amount: 350.0,
      status: "completed",
    },
    {
      id: "13",
      date: "2025-03-01",
      description: "Ingreso Freelance 13",
      category: "Ingresos",
      account: "Cuenta Corriente",
      amount: 350.0,
      status: "completed",
    },
    {
      id: "14",
      date: "2025-03-01",
      description: "Ingreso Freelance 14",
      category: "Ingresos",
      account: "Cuenta Corriente",
      amount: 350.0,
      status: "completed",
    },
    {
      id: "15",
      date: "2025-03-01",
      description: "Ingreso Freelance 15",
      category: "Ingresos",
      account: "Cuenta Corriente",
      amount: 350.0,
      status: "completed",
    },
  ]

  // Categorías para el filtro y para añadir transacciones
  const categories = [
    { value: "alimentacion", label: "Alimentación" },
    { value: "restaurantes", label: "Restaurantes" },
    { value: "transporte", label: "Transporte" },
    { value: "vivienda", label: "Vivienda" },
    { value: "servicios", label: "Servicios" },
    { value: "ocio", label: "Ocio" },
    { value: "salud", label: "Salud" },
    { value: "educacion", label: "Educación" },
    { value: "suscripciones", label: "Suscripciones" },
    { value: "compras", label: "Compras" },
    { value: "ingresos", label: "Ingresos" },
    { value: "transferencias", label: "Transferencias" },
    { value: "otros", label: "Otros" },
  ]

  // Cuentas para el filtro y para añadir transacciones
  const accounts = [
    { value: "corriente", label: "Cuenta Corriente" },
    { value: "ahorros", label: "Cuenta de Ahorros" },
    { value: "credito", label: "Tarjeta de Crédito" },
    { value: "credito2", label: "Tarjeta de Crédito 2" },
    { value: "inversion", label: "Cuenta de Inversión" },
    { value: "efectivo", label: "Efectivo" },
  ]

  const prevListTransactions = () => {

  }

  const nextListTransactions = () => {

  }

  return (
    <div className="w-full border p-5 border-gray-200">
      <h1 className="font-semibold text-2xl">Todas las transacciones</h1>
      <p className="text-gray-600">{transactionsData.length} transacciones encontradas</p>
      <div className="mt-4 p-5 mb-4 border border-gray-200">
        <table className="w-full space-x-4 ">
          <thead>
            <tr>
              <th className="font-normal text-gray-500">Fecha</th>
              <th className="font-normal text-gray-500">Descripción</th>
              <th className="font-normal text-gray-500">Categoria</th>
              <th className="font-normal text-gray-500">Cuenta</th>
              <th className="font-normal text-gray-500">Monto</th>
              <th className="font-normal text-gray-500">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.slice(0, 9).map((transaction, index) => (
              <tr 
                key={index}
                className="text-center hover:bg-emerald-50 w-full border-b border-gray-200"
              >
                <td className="py-4">{transaction.date}</td>
                <td className="">{transaction.description}</td>
                <td>
                  <span className="px-3 py-0.5 font-semibold rounded-full border border-gray-300 text-gray-800 text-xs">
                    {transaction.category}
                  </span>
                </td>
                <td>{transaction.account}</td>
                <td
                  className={`${transaction.amount > 0 ? "text-emerald-700" : "text-red-600"} `}
                >{transaction.amount}</td>
                <td className="py-4">
                  <button className="flex justify-center items-center w-full">
                    <DropDownOptionsList />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600 text-sm">{`Mostrando 10 de ${transactionsData.length} transacciones`}</p>
        <div className="space-x-2">
          <button
            onClick={prevListTransactions}
            className="border border-gray-200 py-2 px-3"
          >
            Anterior
          </button>
          <button 
            onClick={nextListTransactions}
            className="border border-gray-200 py-2 px-3"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}
