//Este archivo funciona como un router para las rutas de las paginas
import { BrowserRouter, Routes, Route } from "react-router";

//Paginas publicas
import Home from "../pages/Home/Home";
import NotFound from "../pages/Home/NotFound";
import Login from "../features/auth/Login";
import RecoveryPassword from "../features/auth/RecoveryPassword";
import Register from "../features/auth/Register";
import ConfirmEmail from "../features/auth/ConfirmEmail";
import Support from "../pages/Home/Support";

//Paginas privadas
import DashboardLayout from "../shared/components/layout/DashboardLayout";
import Dashboard from "../features/dashboard/pages/Dashboard";
import Transactions from "../features/transactions/pages/Transactions";
import Budgets from "../features/budgets/pages/Budgets";
import Accounts from "../features/accounts/pages/Accounts";
import Reports from "../features/reports/pages/Reports";
import Calendar from "../features/calendar/pages/Calendar";

export default function Router (){
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/auth/signin" element={<Login/>}/>
                <Route path="/auth/signup" element={<Register/>}/>
                <Route path="/auth/recovery-password" element={<RecoveryPassword/>}/>
                <Route path="/auth/confirmation-email" element={<ConfirmEmail/>} />
                <Route path="/home/support" element={<Support/>} />

                {/*Rutas del dashboard*/}
                <Route element={<DashboardLayout/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/dashboard/transactions" element={<Transactions/>}/>
                    <Route path="/dashboard/reports" element={<Reports/>}/>
                    <Route path="/dashboard/accounts" element={<Accounts/>}/>
                    <Route path="/dashboard/calendar" element={<Calendar/>}/>
                    <Route path="/dashboard/budgets" element={<Budgets/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
