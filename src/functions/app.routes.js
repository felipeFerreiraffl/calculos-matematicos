import { Route, Routes, useLocation } from "react-router-dom";
import HomePagina from "../pages/home";
import ContatosPagina from "../pages/contatos";
import SobrePagina from "../pages/sobre";
import { AnimatePresence } from "framer-motion";

export default function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route element={<HomePagina />} path='/' />
                <Route element={<SobrePagina />} path='/sobre' />
                <Route element={<ContatosPagina />} path='/contatos' />
            </Routes>
        </AnimatePresence>
    );
}