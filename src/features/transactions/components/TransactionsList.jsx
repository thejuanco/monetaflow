
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



  return (
    <div className="w-full border p-5 border-gray-200">
      <h1 className="font-semibold text-2xl">Todas las transacciones</h1>
      <p className="text-gray-600">{transactionsData.length} transacciones encontradas</p>
      <div className="mt-4 border border-gray-200 p-5 mb-4">
        {transactionsData.map((transaction, index) => (
          <div key={index}>
            {transaction.description}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600 text-sm">{`Mostrando 10 de ${transactionsData.length} transacciones`}</p>
        <div className="space-x-2">
          <button className="border border-gray-200 py-2 px-3">
            Anterior
          </button>
          <button className="border border-gray-200 py-2 px-3">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}
