import { Route, Routes, useLocation } from "react-router-dom";
import HomePagina from "../pages/home";
import ContatosPagina from "../pages/contatos";
import SobrePagina from "../pages/sobre";
import { AnimatePresence } from "framer-motion";
import CalculosPagina from "../pages/calculos";

export default function AppRoutes() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route 
                path='/' 
                element={<HomePagina />} 
            />
            <Route 
                path='/sobre' 
                element={<SobrePagina />} 
            />
            <Route 
                path='/calculos' 
                element={<CalculosPagina />} 
            />
            <Route 
                path='/contatos' 
                element={<ContatosPagina />} 
            />
        </Routes>
    );
}