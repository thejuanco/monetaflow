import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function ModalFormAddBudget({ isModalOpen, setIsModalOpen }) {
    return (
        <Dialog
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            transition
            className="fixed overflow-auto py-8 inset-0 flex w-screen items-center justify-center bg-black/40 transition duration-300 ease-out data-closed:opacity-0"
        >
            <DialogPanel className="max-w-lg bg-white p-8">
                <DialogTitle className="font-medium text-xl">Crear Nuevo Presupuesto</DialogTitle>
                <Description className="text-sm text-gray-500">Define un presupuesto para controlar tus gastos en una categoría específica.</Description>
                <div className="py-4">
                    <form className="space-y-4 mt-2">
                        <div>
                            <label className="font-medium">Categoría</label>
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
                            <label className="font-medium">Periodo</label>
                            <select name="" id="" className="w-full border border-gray-200 p-2">
                                <option value="">Semanal</option>
                                <option value="">Mensual</option>
                                <option value="">Trimestral</option>
                                <option value="">Anual</option>
                                <option value="">Personalizado</option>
                            </select>
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
