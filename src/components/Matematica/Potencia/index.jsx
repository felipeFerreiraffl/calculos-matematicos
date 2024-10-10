import React from "react";
import "./styles.css";
import CalcularBotao from '../../CalcularBotao/index'
import Operacao from "../../Operacao";
import Resultado from "../../ResultCard";
import { useState } from "react";
import { calcPotencia } from "../../../scripts/matematica";

export default function Potencia() {
    const [base, setBase] = useState('');
    const [expo, setExpo] = useState('');
    const [resultado, setResultado] = useState(null);

    // Calcula a potência ao clicar no botão
    const calcPot = () => {
        const baseNum = parseFloat(base);
        const expoNum = parseFloat(expo);

        if (!isNaN(baseNum) && !isNaN(expoNum)) {
            setResultado(calcPotencia(baseNum, expoNum));
        } else {
            setResultado('Valores inválidos');
        }
    }

    return (
        <div className="pot-area">
            <h1 className="pot-titulo">Potência</h1>
            <div className="pot-operacao">
                <div className="pot-operacao-area">
                    <Operacao 
                        titulo={"Número"}
                        valor={base}
                        onChange={(e) => setBase(e.target.value)}
                    />
                    <Operacao 
                        titulo={"Elevado a"}
                        valor={expo}
                        onChange={(e) => setExpo(e.target.value)} 
                    />
                    <CalcularBotao cor={"var(--math-red)"} onClick={calcPot} />
                </div>
                <Resultado cor={"var(--math-red)"} valor={resultado} />
            </div>
        </div>
    );
}