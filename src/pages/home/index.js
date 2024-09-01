import "./styles.css";
import logo from "../../assets/logo.svg";
import HomeBotao from "../../components/Home/Button";
import { Link } from "react-router-dom";

export default function HomePagina() {
    return (
        <div className="home-pagina">
            <img className="home-logo" src={logo} alt="Cálculos" />
            <div className="home-botao-area">
                <Link><HomeBotao texto={"Sobre"} /></Link>
                <Link><HomeBotao texto={"Cálculos"} /></Link>
                <Link><HomeBotao texto={"Contatos"} /></Link>
            </div>
        </div>
    );
}