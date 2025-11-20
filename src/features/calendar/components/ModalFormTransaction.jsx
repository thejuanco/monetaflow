import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function ModalFormTransaction({ isModalOpen, setIsModalOpen }) {
  return (
    <Dialog
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            transition
            className="fixed inset-0 flex w-screen items-center justify-center bg-black/40 transition duration-300 ease-out data-closed:opacity-0"
        >
            <DialogPanel className="max-w-lg bg-white p-8">
                <DialogTitle className="font-medium text-xl">Nueva Transacción</DialogTitle>
                <Description className="text-sm text-gray-500">Agrega una nueva transacción o pago programado</Description>
                <div className="py-4">
                  <form className="space-y-4 mt-2">
                        <div>
                            <label className="font-medium">Título</label>
                            <input
                                className="w-full border border-gray-200 p-2"
                                placeholder="Ej. Supermercado"
                                type="text"
                            />
                        </div>

                        <div>
                            <label className="font-medium">Monto</label>
                            <input
                                className="w-full border border-gray-200 p-2"
                                placeholder="0.00"
                                min="0"
                                type="number"
                            />
                        </div>

                        <div>
                            <label className="font-medium">Tipo</label>
                            <select name="" id="" className="w-full border border-gray-200 p-2">
                                <option value="">--Selecciona una opcion--</option>
                                <option value="">Ingreso</option>
                                <option value="">Gasto</option>
                                <option value="">Programado</option>
                            </select>
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
                            <label className="font-medium">Fecha</label>
                            <input
                                className="w-full border border-gray-200 p-2"
                                placeholder="45231.89"
                                type="date"
                            />
                        </div>

                        <div>
                            <label className="font-medium">Hora</label>
                            <input
                                className="w-full border border-gray-200 p-2"
                                placeholder="45231.89"
                                value="12:00"
                                type="time"
                            />
                        </div>

                        <div>
                            <label className="font-medium">Descripción (opcional)</label>
                            <textarea
                                placeholder="Notas adicionales..."
                                className="w-full h-24 border border-gray-200"
                            >
                            </textarea>
                        </div>
                    </form>
                </div>
                <div className="flex justify-end gap-3">
                    <button className="border border-gray-200 px-3 py-2 hover:bg-gray-200 hover:cursor-pointer" onClick={() => setIsModalOpen(false)}>Cerrar</button>
                    <button className="border border-gray-200 px-3 py-2 text-gray-100 bg-emerald-600 hover:cursor-pointer hover:bg-emerald-700" onClick={() => setIsOpen(false)}>Guardar</button>
                </div>
            </DialogPanel>
        </Dialog>
  )
}
