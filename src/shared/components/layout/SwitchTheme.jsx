import { Switch } from "@headlessui/react"
import { useState } from "react"
import { 
    ComputerDesktopIcon,
    SunIcon,
    MoonIcon
} from '@heroicons/react/24/solid'

export default function SwitchTheme() {
    const [enabled, setEnabled] = useState(false)
    const [mode, setMode ] = useState("system")
    const modes = ["system", "light","dark"]

  return (
    <div className="flex items-center justify-center">
        <div className="relative flex items-center gap-1 founded-full p-1">
            <span
                className={`
                    absolute h-8 w-8 rounded-full bg-zinc-50 transition-all
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
                <ComputerDesktopIcon className="h-5 w-5 text-gray-900" />
                </Switch>

                {/* Light */}
                <Switch
                checked={mode === "light"}
                onChange={() => setMode("light")}
                className="relative z-10 flex h-8 w-8 items-center justify-center"
                >
                <SunIcon className="h-5 w-5 text-gray-900" />
                </Switch>

                {/* Dark */}
                <Switch
                checked={mode === "dark"}
                onChange={() => setMode("dark")}
                className="relative z-10 flex h-8 w-8 items-center justify-center"
                >
                <MoonIcon className="h-5 w-5 text-gray-900" />
            </Switch>
        </div>
    </div>
  )
}
