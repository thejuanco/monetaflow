import { useState } from "react"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function ModalExit({isModalOpen, setIsModalOpen}) {
    return (
        <Dialog
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            transition
            className="fixed overflow-auto py-8 inset-0 flex w-screen items-center justify-center bg-black/40 transition duration-300 ease-out data-closed:opacity-0"
        >
            <DialogPanel className="max-w-lg bg-white p-8">
                <DialogTitle className="font-medium text-xl">¿Estas seguro de cerrar sesión?</DialogTitle>
                <Description className="text-sm text-gray-500">Se cerrará la sesión.</Description>
                <div className="flex justify-end gap-3">
                    <button className="border border-gray-200 px-3 py-2 hover:bg-gray-200 hover:cursor-pointer" onClick={() => setIsModalOpen(false)}>Cerrar</button>
                    <button className="border border-gray-200 px-3 py-2 text-gray-100 bg-emerald-600 hover:cursor-pointer hover:bg-emerald-700" onClick={() => setIsOpen(false)}>Cerrar Sesión</button>
                </div>
            </DialogPanel>
        </Dialog>
    )
}
