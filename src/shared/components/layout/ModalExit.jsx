import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useNavigate } from "react-router";

export default function ModalExit({ isModalOpen, setIsModalOpen }) {
    const navigate = useNavigate()
  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      transition
      className="fixed overflow-auto py-8 inset-0 flex w-screen items-center justify-center bg-black/40 transition duration-300 ease-out data-closed:opacity-0"
    >
      <DialogPanel className="max-w-lg bg-white p-8">
        <DialogTitle className="font-medium text-xl">
          ¿Estas seguro de cerrar sesión?
        </DialogTitle>
        <Description className="text-sm text-gray-500">
          Se cerrará la sesión.
        </Description>
        <div className="justify-between gap-3 mt-5 grid grid-cols-2">
          <button
            className="border border-gray-200 px-3 py-2 hover:bg-gray-200 hover:cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            Cancelar
          </button>
          <button
            className="border border-gray-200 px-3 py-2 text-gray-100 bg-red-700 hover:cursor-pointer hover:bg-red-800"
            onClick={() => {
                setIsModalOpen(false)
                navigate("/")
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
