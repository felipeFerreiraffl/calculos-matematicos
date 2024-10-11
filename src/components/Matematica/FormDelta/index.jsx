import "./styles.css";
import Operacao from '../../Operacao/index';
import CalcularBotao from '../../CalcularBotao/index';
import ResultCard from '../../ResultCard/index';
import deltaForm from '../../../assets/Cálculos/delta-form.png';
import { useState } from "react";
import { delta } from "../../../scripts/matematica";

export default function FormDelta({ deltaValor }) {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcDelta = () => {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        const numC = parseFloat(c);

        if (!isNaN(numA) && !isNaN(numB) && !isNaN(numC)) {
            const deltaResultado = delta(numA, numB, numC);
            setResultado(deltaResultado);
            deltaValor(numA, numB, deltaResultado);
        } else {
            setResultado('Valores inválidos');
        }
    }

    return (
        <div className="delta-area">
            <h1 className="delta-titulo">Fórmula de Delta</h1>
            <div className="delta-operacao-area">
                <div className="delta-operacao">
                    <Operacao 
                        titulo={"a"} 
                        valor={a}
                        onChange={(e) => setA(e.target.value)}
                    />
                    <Operacao 
                        titulo={"b"} 
                        valor={b}
                        onChange={(e) => setB(e.target.value)}
                    />
                    <Operacao 
                        titulo={"c"} 
                        valor={c}
                        onChange={(e) => setC(e.target.value)}
                    />
                    <CalcularBotao cor={"var(--math-red)"} onClick={calcDelta} />
                </div>
                <div className="delta-rep">
                    <img src={deltaForm} width={220} height={40} alt="Fórmula de delta" />
                    <ResultCard cor={"var(--math-red)"} valor={resultado} />
                </div>
            </div>
        </div>
    ); 
}