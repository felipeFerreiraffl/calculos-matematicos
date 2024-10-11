import "./styles.css";
import bhaskForm from '../../../assets/Cálculos/bhaskara-form.png';
import Resultado from "../../ResultCard";
import { bhaskaraNegativo, bhaskaraPositivo } from "../../../scripts/matematica";

export default function FormBhaskara({ a, b, delta }) {
    if (delta < 0) {
        alert('Delta negativo. Não há soluções reais');
    }

    // Verificação dos valores para o cálculo de Bhaskara
    const isReadyToCalculate = a !== null && b !== null && delta >= 0;

    const xPositivo = isReadyToCalculate ? bhaskaraPositivo(b, a, delta) : '';
    const xNegativo = isReadyToCalculate ? bhaskaraNegativo(b, a, delta) : '';

    return (
        <div className="bhask-area">
            <h1 className="bhask-titulo">Fórmula de Bhaskara</h1>
            <div className="bhask-result-rep">
                <img src={bhaskForm} width={220} height={86} alt="Fórmula de Bhaskara" />
                <div className="bhask-result-area">
                    <div className="bhask-result">
                        <label className="bhask-label">+x</label>
                        <Resultado cor={"var(--math-red)"} valor={xPositivo} />
                    </div>
                    <div className="bhask-result">
                        <label className="bhask-label">-x</label>
                        <Resultado cor={"var(--math-red)"} valor={xNegativo} />
                    </div>
                </div>
            </div>
        </div>
    ); 
}