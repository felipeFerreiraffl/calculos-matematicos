import ContasSimples from "../ContasSimples";
import "./styles.css";
import Raiz from '../Raiz/index'
import Potencia from '../Potencia/index'
import FormDelta from '../FormDelta/index'
import FormBhaskara from '../FormBhaskara/index'

export default function MatCalculos() {
    return (
        <div className="mat-calculos-area">
            <ContasSimples />
            <hr className="mat-divisor" />
            <div className="mat-contas-2">
                <Raiz />
                <Potencia />
            </div>
            <hr className="mat-divisor" />
            <div className="mat-contas-3">
                <FormDelta />
                <FormBhaskara />
            </div>
        </div>
    );
}