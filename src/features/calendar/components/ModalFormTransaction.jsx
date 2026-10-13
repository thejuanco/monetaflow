import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form'

export default function ModalFormTransaction({ isModalOpen, setIsModalOpen }) {
    const {
        register,
        reset,
        formState : {errors},
        handleSubmit
    } = useForm()

    const onSubmit = async (data) => {
        try {
            console.log(data)
            setIsModalOpen(true)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Dialog
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            transition
            className="fixed overflow-auto inset-0 flex w-screen items-center justify-center bg-black/40 transition duration-300 ease-out data-closed:opacity-0"
        >
            <DialogPanel className="max-w-lg sm:max-w-[500px] bg-white p-8">
                <DialogTitle className="font-medium text-xl">Nueva Transacción</DialogTitle>
                <Description className="text-sm text-gray-500">Agrega una nueva transacción o pago programado</Description>
                <div className="py-4">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
                        <div>
                            <label className="font-medium">Título</label>
                            <input
                                className={`w-full border border-gray-200 p-2 dark:border-gray-600 focus:outline-none focus:ring-1 ${
                                    errors.title ? "border border-red-500 focus:ring-red-500" : ""
                                }`}
                                placeholder="Ej. Supermercado"
                                type="text"
                                name="title"
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: "El título es obligatorio"
                                    }
                                })}
                            />
                            {errors.title && (
                                <p role="alert" className="text-red-700 pt-2 text-sm text-center">
                                    {errors.title.message}
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
                            <label className="font-medium">Tipo</label>
                            <select name="type" id="type" className="w-full border border-gray-200 p-2">
                                <option value="">--Selecciona una opcion--</option>
                                <option value="">Ingreso</option>
                                <option value="">Gasto</option>
                                <option value="">Programado</option>
                            </select>
                      </div>

                        <div>
                            <label className="font-medium">Categoria</label>
                            <select name="category" id="type" className="w-full border border-gray-200 p-2">
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
                            <label className="font-medium">Fecha</label>
                            <input
                                className="w-full border border-gray-200 p-2"
                                placeholder="45231.89"
                                type="date"
                                name="date"
                            />
                        </div>

                        <div>
                            <label className="font-medium">Hora</label>
                            <input
                                className="w-full border border-gray-200 p-2"
                                placeholder="45231.89"
                                value="12:00"
                                type="time"
                                name="time"
                            />
                        </div>

                        <div>
                            <label className="font-medium">Descripción (opcional)</label>
                            <textarea
                                placeholder="Notas adicionales..."
                                className="p-2 w-full h-24 border border-gray-200"
                                name="description"
                            >
                            </textarea>
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
                                onClick={() => {}}
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
