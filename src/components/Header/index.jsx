import "./styles.css";
import HeaderBotao from "./Button";

function Header() {
    return (
        <nav className="header-area">
            <div className="header-botao-area">
                <HeaderBotao texto={"Início"} pagina={"/"} />
                <HeaderBotao texto={"Cálculos"} pagina={"/calculos"} />
                <HeaderBotao texto={"Contatos"} pagina={"/contatos"} />
            </div>
        </nav>
    );
}

export default Header;