import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from "react-hook-form"

export default function UpdateBalanceDash({ isOpen, setIsOpen }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        try {
            console.log(data)
            reset()
            setIsOpen(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = () => {
        setIsOpen(false)
        reset()
    }
    
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            transition
            className="fixed inset-0 flex w-screen items-center justify-center bg-black/50 p-4 transition duration-300 ease-out data-closed:opacity-0"
        >
            <DialogPanel className="max-w-lg bg-white p-8">
                <DialogTitle className="font-medium text-xl">Actualizar Saldo Total</DialogTitle>
                <Description className="text-sm text-gray-500">Actualiza el saldo total de tu cuenta en general</Description>
                <div className="py-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="font-medium">Saldo</label>
                        <input 
                            className={`w-full border border-gray-200 p-2 focus:outline-none focus:ring-1 ${
                                errors.balance ? "border border-red-500 focus:ring-red-500" : ""
                            }`}
                            placeholder="4560.00"
                            min="0"
                            type="number"
                            name="balance"
                            {...register("balance", {
                                required: {
                                    value: true,
                                    message: "El saldo es obligatorio"
                                },
                                min: {
                                    value: 0,
                                    message: "El saldo no puede ser negativo"
                                }
                            })}
                        />
                        {errors.balance && (
                            <p role="alert" className="text-red-700 pt-2 text-sm text-center">
                                {errors.balance.message}
                            </p>
                        )}
                        <div className="flex justify-end gap-3 pt-3">
                            <button 
                                type="button"
                                className="border border-gray-200 px-3 py-1 hover:bg-gray-200 hover:cursor-pointer" 
                                onClick={handleClose}
                            >
                                Cerrar
                            </button>
                            <button 
                                className="border border-gray-200 px-3 py-1 text-gray-100 bg-emerald-600 hover:cursor-pointer hover:bg-emerald-700"
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
