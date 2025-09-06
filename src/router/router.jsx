//Este archivo funciona como un router para las rutas de las paginas
import { BrowserRouter, Routes, Route } from "react-router";

//Paginas publicas
import Home from "../pages/Home/Home";

//Paginas privadas
import Login from "../pages/auth/Login";

export default function Router (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}