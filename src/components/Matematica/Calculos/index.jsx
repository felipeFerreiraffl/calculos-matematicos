import ContasSimples from "../ContasSimples";
import "./styles.css";
import Raiz from '../Raiz/index'
import Potencia from '../Potencia/index'
import FormDelta from '../FormDelta/index'
import FormBhaskara from '../FormBhaskara/index'
import CalcDivisor from "../../DivisorCalc";
import { useState } from "react";

export default function MatCalculos() {
    const [valorBhask, setValorBhask] = useState({ a:null, b: null, delta: null });

    const handleDeltaValor = (a, b, delta) => {
        setValorBhask({ a, b, delta });
    }

    return (
        <div className="mat-calculos-area">
            <ContasSimples />
            <CalcDivisor />
            <div className="mat-contas-2">
                <Raiz />
                <Potencia />
            </div>
            <CalcDivisor />
            <div className="mat-contas-3">
                <FormDelta deltaValor={handleDeltaValor} />
                <FormBhaskara 
                    a={valorBhask.a}
                    b={valorBhask.b}
                    delta={valorBhask.delta}
                />
            </div>
        </div>
    );
}