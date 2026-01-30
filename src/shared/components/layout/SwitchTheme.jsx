import { Switch } from "@headlessui/react"
import { useState, useEffect } from "react"
import { 
    ComputerDesktopIcon,
    SunIcon,
    MoonIcon
} from '@heroicons/react/24/solid'

export default function SwitchTheme() {
    const [mode, setMode ] = useState("system")
    const modes = ["system", "light","dark"]

    useEffect(() => {
        if(mode === "dark"){
            document.querySelector('html').classList.add('dark')
        }
        else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [mode])

  return (
    <div className="flex items-center justify-center">
        <div className="relative dark:bg-gray-900 dark:border-gray-600 flex items-center gap-1 rounded-full border border-gray-100 p-1">
            <span
                className={`
                    absolute h-8 w-8 rounded-full bg-zinc-200 dark:bg-gray-600 transition-all
                    ${mode === "system" && "translate-x-0"}
                    ${mode === "light" && "translate-x-9"}   
                    ${mode === "dark" && "translate-x-[72px]"}   
                `}
            />

            <Switch
                checked={mode === "system"}
                onChange={() => setMode("system")}
                className="relative z-10 flex h-8 w-8 items-center justify-center"
            >
                <ComputerDesktopIcon className="h-5 w-5 dark:text-gray-100 text-gray-900" />
                </Switch>

                {/* Light */}
                <Switch
                checked={mode === "light"}
                onChange={() => setMode("light")}
                className="relative z-10 flex h-8 w-8 items-center justify-center"
                >
                <SunIcon className="h-5 w-5 dark:text-gray-100 text-gray-900" />
                </Switch>

                {/* Dark */}
                <Switch
                checked={mode === "dark"}
                onChange={() => setMode("dark")}
                className="relative z-10 flex h-8 w-8 items-center justify-center"
                >
                <MoonIcon className="h-5 w-5 dark:text-gray-100 text-gray-900" />
            </Switch>
        </div>
    </div>
  )
}
