import ContasEscolha from "./ContasEscolha";
import Resultado from "../../ResultCard/index";
import "./styles.css";
import { useState } from "react";

function ContasSimples() {
    const [resultado, setResultado] = useState(0);

    return (
        <div className="mat-contas-simples">
            <h1 className="mat-contas-simples-titulo">Contas simples</h1>
            <div className="mat-contas-simples-area">
                <div className="mat-contas-simples-escolha">
                    <ContasEscolha aoCalcular={setResultado} />
                </div>
                <Resultado cor={"var(--math-red)"} valor={resultado} />
            </div>
        </div>
    );
}

export default ContasSimples;