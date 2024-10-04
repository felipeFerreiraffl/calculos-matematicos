import ContasSimples from "../ContasSimples";
import "./styles.css";
import Raiz from '../Raiz/index'
import Potencia from '../Potencia/index'
import FormDelta from '../FormDelta/index'
import FormBhaskara from '../FormBhaskara/index'
import CalcDivisor from "../../DivisorCalc";

export default function MatCalculos() {
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
                <FormDelta />
                <FormBhaskara />
            </div>
        </div>
    );
}