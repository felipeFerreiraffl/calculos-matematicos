import ContasSimples from "../ContasSimples";
import "./styles.css";
import Raiz from '../Raiz/index'

export default function MatCalculos() {
    return (
        <div className="mat-calculos-area">
            <div className="mat-contas-1">
                <ContasSimples />
            </div>
            <hr className="mat-divisor" />
            <div className="mat-contas-2">
                <Raiz />
            </div>
            <hr className="mat-divisor" />
            <div className="mat-contas-3">

            </div>
        </div>
    );
}