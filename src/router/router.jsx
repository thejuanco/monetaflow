//Este archivo funciona como un router para las rutas de las paginas
import { BrowserRouter, Routes, Route } from "react-router";

//Paginas
import Home from "../pages/Home/Home";

export default function Router (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}