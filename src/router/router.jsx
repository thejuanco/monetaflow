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
                <Route index path="/" element={<Home/>}/>
                <Route path="/auth/signin" element={<Login/>}/>
                <Route path="/auth/signup" element={<Login/>}/>
                <Route path="/auth/recovery-password" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}