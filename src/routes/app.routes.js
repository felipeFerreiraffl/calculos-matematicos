import { Route, Routes, useLocation } from "react-router-dom";
import HomePagina from "../pages/home";
import ContatosPagina from "../pages/contatos";
import SobrePagina from "../pages/sobre";
import CalculosPagina from "../pages/calculos";
import MatPagina from "../pages/matematica";
import FisicaPagina from "../pages/fisica";
import ImcPagina from '../pages/imc/index'
import JurPagina from '../pages/juros/index'

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
            <Route 
                path="/calculos/matematica"
                element={<MatPagina />}
            />
            <Route 
                path="/calculos/fisica"
                element={<FisicaPagina />}
            />
            <Route 
                path="/calculos/imc"
                element={<ImcPagina />}
            />
            <Route 
                path="/calculos/juros"
                element={<JurPagina />}
            />
        </Routes>
    );
}