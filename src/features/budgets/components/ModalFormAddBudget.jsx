import { useState } from "react"
import { 
    Description,
    Dialog,
    DialogPanel,
    DialogTitle,
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    ComboboxButton
} from '@headlessui/react'
import clsx from "clsx"

export default function ModalFormAddBudget({ isModalOpen, setIsModalOpen }) {
    const options = [
        {id: 1, name: "Ingreso"},
        {id: 2, name: "Gasto"},
        {id: 3, name: "Programado"}
    ]

    const [selectedOption, setSelectedOption] = useState(options[1])
    const [query, setQuery] = useState("")

    const filteredOptions = query === "" ? options : options.filter((op) => {
        return op.name.toLowerCase().includes(query.toLowerCase())
    })

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
                            <Combobox 
                                value={selectedOption}
                                onChange={(value) => setSelectedOption(value)}
                                onClose={() => {setQuery("")}}
                            >
                                <div className="relative">
                                    <ComboboxInput
                                        displayValue={(value) => value?.name}
                                        onChange={(event) => setQuery(event.target.value)}
                                        className={clsx(
                                            "w-full bg-white/5 py-1.5 pl-3 border border-gray-300"
                                        )}
                                    >
                                        
                                    </ComboboxInput>
                                    <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </ComboboxButton>
                                </div>

                                <ComboboxOptions
                                    anchor="bottom"
                                    transition
                                    className={clsx(
                                        'w-(--input-width) border border-gray-300 bg-white p-1 [--anchor-gap:--spacing(1)] empty:invisible',
                                        'transition duration-100 ease-in data-leave:data-closed:opacity-0'
                                    )}
                                    >
                                    {filteredOptions.map((option) => (
                                        <ComboboxOption 
                                            key={option.id}
                                            value={option}
                                            className={`group flex cursor-default items-center gap-2 px-3 py-1.5 select-none data-focus:bg-gray-100`}
                                        >
                                            <div className="text-gray-900">{option.name}</div>
                                        </ComboboxOption>
                                    ))}
                                </ComboboxOptions>
                            </Combobox>
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
