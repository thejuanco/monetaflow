//Este archivo funciona como un router para las rutas de las paginas
import { BrowserRouter, Routes, Route } from "react-router";

//Paginas publicas
import Home from "../pages/Home/Home";
import NotFound from "../pages/Home/NotFound";
import Login from "../pages/auth/Login";
import RecoveryPassword from "../pages/auth/RecoveryPassword";
import Register from "../pages/auth/Register";

//Paginas privadas

export default function Router (){
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/auth/signin" element={<Login/>}/>
                <Route path="/auth/signup" element={<Register/>}/>
                <Route path="/auth/recovery-password" element={<RecoveryPassword/>}/>
            </Routes>
        </BrowserRouter>
    )
}