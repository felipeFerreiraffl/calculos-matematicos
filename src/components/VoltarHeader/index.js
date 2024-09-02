import { BiLeftArrowCircle } from "react-icons/bi";
import "./styles.css";
import { Link } from "react-router-dom";

export default function HeaderVoltar() {
    return (
        <div className="header-voltar-area">
            <Link className="header-voltar-link" to={"/"}>
                <BiLeftArrowCircle className="header-voltar-icon" />
                <p className="header-voltar-titulo">Voltar</p>
            </Link>
        </div>
    );
}