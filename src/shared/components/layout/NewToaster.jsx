import { toast } from "sonner"

export default function NewToaster({id, title, description, button}) {
  return (
    <div className="flex border border-gray-300 bg-white w-full max-w-[364px] items-center p-4">
        <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>

        <button
            className="ml-4 rounded bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 hover:bg-indigo-100"
            onClick={() => {
                button.onClick()
                toast.dismiss(id)
            }}
        >
            {button.label}
        </button>
    </div>
  )
}
