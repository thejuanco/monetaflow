import { useState, useEffect, useContext, createContext } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const getSystemTheme = () => {
        window.matchMedia("(prefers-colors-scheme:dark)").matches ? "dark" : "light"
    }

    const [mode, setMode] = useState(() => {
        return localStorage.getItem("theme") || "system"
    })

    useEffect(() => {
        const applyTheme = theme => {
            if(theme == "dark"){
                document.querySelector('html').classList.add("dark")
            } else {
                document.querySelector('html').classList.remove("dark")
            }
        }

        if(mode == "system"){
            applyTheme(getSystemTheme())
        } else {
            applyTheme(mode)
        }

        localStorage.setItem("theme", mode)
    }, [mode])

    return (
        <ThemeContext.Provider value={{mode, setMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)