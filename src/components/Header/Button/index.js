import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function HeaderBotao({ texto, pagina }) {
    const location = useLocation();
    const isActive = location.pathname === pagina;

    return(
        <div>
            <Link to={pagina}>
                <button className={`header-botao ${isActive ? 'active' : ''}`}>{texto}</button>
            </Link>
        </div>
    );
}