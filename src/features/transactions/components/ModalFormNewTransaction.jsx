import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form'

export default function ModalFormNewTransaction({isModalOpen, setIsModalOpen}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        try {
            console.log(data)
            setIsModalOpen(true)
            reset()
        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = () => {
        setIsModalOpen(true)
        reset()
    }

    return (
        <Dialog
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            transition
            className="fixed inset-0 flex w-screen items-center justify-center bg-black/40 transition duration-300 ease-out data-closed:opacity-0"
        >
            <DialogPanel className="max-w-lg bg-white p-8">
                <DialogTitle className="font-medium text-xl">Añadir Nueva Transacción</DialogTitle>
                <Description className="text-sm text-gray-500">Agrega una nueva transacción</Description>
                <div className="py-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
                        <div>
                            <label className="font-medium">Descripción</label>
                            <input
                                className={`w-full border border-gray-200 p-2 dark:border-gray-600 focus:outline-none focus:ring-1 ${
                                    errors.description ? "border border-red-500 focus:ring-red-500" : ""
                                }`}
                                placeholder="Ej. Supermercado"
                                type="text"
                                name="description"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "La descripción es obligatoria"
                                    }
                                })}
                            />
                            {errors.description && (
                                <p role="alert" className="text-red-700 pt-2 text-sm text-center">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="font-medium">Monto</label>
                            <input
                                className={`w-full border border-gray-200 p-2 dark:border-gray-600 focus:outline-none focus:ring-1 ${
                                    errors.amount ? "border border-red-500 focus:ring-red-500" : ""
                                }`}
                                placeholder="0.00"
                                min="0"
                                type="number"
                                name="amount"
                                {...register("amount", {
                                    required: {
                                        value: true,
                                        message: "El monto es obligatorio"
                                    },
                                    min: {
                                        value: 0,
                                        message: "El monto no puede ser negativo"
                                    }
                                })}
                            />
                            {errors.amount && (
                                <p role="alert" className="text-red-700 pt-2 text-sm text-center">
                                    {errors.amount.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="font-medium">Categoria</label>
                            <select name="" id="" className="w-full border border-gray-200 p-2">
                                <option value="">Alimentación</option>
                                <option value="">Transporte</option>
                                <option value="">Entretenimiento</option>
                                <option value="">Salud</option>
                                <option value="">Vivienda</option>
                                <option value="">Salario</option>
                                <option value="">Otro</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-medium">Cuenta</label>
                            <select name="" id="" className="w-full border border-gray-200 p-2">
                                <option value=""> Selecciona una cuenta </option>
                                <option value="">Cuenta Principal</option>
                                <option value="">Cuenta Corriente</option>
                                <option value="">Tarjeta Crédito</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-medium">Fecha</label>
                            <input
                                className={`w-full border border-gray-200 p-2 dark:border-gray-600 focus:outline-none focus:ring-1 ${
                                    errors.dateTransaction ? "border border-red-500 focus:ring-red-500" : ""
                                }`}
                                placeholder="45231.89"
                                type="date"
                                name="dateTransaction"
                                {...register("dateTransaction", {
                                    required: {
                                        value: true,
                                        message: "La fecha no puede estar vacía"
                                    }
                                })}
                            />
                            {errors.dateTransaction && (
                                <p role="alert" className="text-red-700 pt-2 text-sm text-center">
                                    {errors.dateTransaction.message}
                                </p>
                            )}
                        </div>
                        <div className="flex justify-end gap-3">
                            <button 
                                className="border border-gray-200 px-3 py-2 hover:bg-gray-200 hover:cursor-pointer" 
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cerrar
                            </button>
                            <button 
                                className="border border-gray-200 px-3 py-2 text-gray-100 bg-emerald-600 hover:cursor-pointer hover:bg-emerald-700" 
                                // onClick={() => setIsModalOpen(false)}
                                type="submit"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </DialogPanel>
        </Dialog>
    )
}
