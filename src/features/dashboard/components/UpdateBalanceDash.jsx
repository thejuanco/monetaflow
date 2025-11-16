import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function UpdateBalanceDash({ isOpen, setIsOpen }) {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            transition
            className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-closed:opacity-0"
        >
            <DialogPanel className="max-w-lg bg-white p-8">
                <DialogTitle className="font-medium text-xl">Actualizar Saldo Total</DialogTitle>
                <Description className="text-sm text-gray-500">Actualiza el saldo total de tu cuenta en general</Description>
                <div className="py-4">
                    <form>
                        <label className="font-medium">Saldo</label>
                        <input 
                            className="w-full border border-gray-200 p-2" 
                            placeholder="45231.89"
                            min="0"
                            type="number"
                        />
                    </form>
                </div>
                <div className="flex gap-3">
                    <button className="border border-gray-200 px-3 py-2 hover:bg-gray-200 hover:cursor-pointer" onClick={() => setIsOpen(false)}>Cerrar</button>
                    <button className="border border-gray-200 px-3 py-2 text-gray-100 bg-emerald-500 hover:cursor-pointer hover:bg-emerald-600" onClick={() => setIsOpen(false)}>Guardar</button>
                </div>
            </DialogPanel>
        </Dialog>
    )
}
