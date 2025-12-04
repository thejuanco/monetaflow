import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function ModalAddAccount({isModalOpen, setIsModalOpen}) {
    return (
        <Dialog
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            transition
            className="fixed overflow-auto py-8 inset-0 flex w-screen items-center justify-center bg-black/40 transition duration-300 ease-out data-closed:opacity-0"
        >
            <DialogPanel className="max-w-lg bg-white p-8">
                <DialogTitle className="font-medium text-xl">Agregar Nueva Cuenta</DialogTitle>
                <Description className="text-sm text-gray-500">Ingresa los detalles de tu cuenta bancaria o financiera.</Description>
                <div className="py-4">
                    <form className="space-y-4 mt-2">
                        <div>
                            <label className="font-medium">Nombre</label>
                            <input
                                className="w-full border border-gray-200 p-2"
                                placeholder="Cuenta Principal"
                                type="text"
                            />
                        </div>

                        <div>
                            <label className="font-medium">Saldo Incial</label>
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
                                <option value="">--Selecciona una tipo--</option>
                                <option value="">Cuenta Corriente</option>
                                <option value="">Cuenta de Ahorros</option>
                                <option value="">Tarjeta de Crédito</option>
                                <option value="">Inversión</option>
                                <option value="">Efectivo</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-medium">Banco</label>
                            <select name="" id="" className="w-full border border-gray-200 p-2">
                                <option value="">--Selecciona un banco--</option>
                                <option value="">BBVA</option>
                                <option value="">Santander</option>
                                <option value="">Banorte</option>
                                <option value="">Banamex</option>
                                <option value="">HSBC</option>
                                <option value="">Scotiabank</option>
                                <option value="">Otro</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-medium">Moneda</label>
                            <select name="" id="" className="w-full border border-gray-200 p-2">
                                <option value="">--Selecciona una moneda--</option>
                                <option value="">MXN - Peso Mexicano</option>
                                <option value="">USD - Dólar Americano</option>
                                <option value="">EUR - Euro</option>
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
