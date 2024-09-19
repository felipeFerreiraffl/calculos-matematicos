import ContasEscolha from "./ContasEscolha";
import Resultado from "../../ResultCard/index";
import "./styles.css";

export default function ContasSimples() {
    return (
        <div className="mat-contas-simples">
            <h1 className="mat-contas-simples-titulo">Contas simples</h1>
            <div className="mat-contas-simples-area">
                <div className="mat-contas-simples-escolha">
                    <ContasEscolha />
                </div>
                <Resultado cor={"var(--math-red)"} />
            </div>
        </div>
    );
}