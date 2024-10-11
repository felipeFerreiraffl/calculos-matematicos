import "./styles.css";
import CalcularBotao from '../../CalcularBotao/index';
import Operacao from '../../Operacao/index';
import Resultado from "../../ResultCard/index";
import { useState } from "react";
import { raizQuad } from "../../../scripts/matematica";

export default function RaizQuad() {
    const [base, setBase] = useState('');
    const [resultado, setResultado] = useState(null);

    // Função de calcular a raiz quadrada
    const calcRaiz = () => {
        const numBase = parseFloat(base);

        if (!isNaN(numBase)) {
            setResultado(raizQuad(base));
        } else {
            setResultado('Valores inválidos');
        }
    }

    return (
        <div className="raiz-area">
            <h1 className="raiz-titulo">Raiz quadrada</h1>
            <div className="raiz-operacao-area">
                <div className="raiz-operacao">
                    <Operacao 
                        titulo={"Número"} 
                        valor={base} 
                        onChange={(e) => setBase(e.target.value)} 
                    />
                    <CalcularBotao cor={"var(--math-red)"} onClick={calcRaiz} />
                </div>
                <Resultado cor={"var(--math-red)"} valor={resultado} />
            </div>
        </div>
    );
}