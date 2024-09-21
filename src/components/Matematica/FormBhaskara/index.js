import "./styles.css";
import bhaskForm from '../../../assets/Cálculos/bhaskara-form.png';
import Resultado from "../../ResultCard";

export default function FormBhaskara() {
    return (
        <div className="bhask-area">
            <h1 className="bhask-titulo">Fórmula de Bhaskara</h1>
            <div className="bhask-result-rep">
                <img src={bhaskForm} width={220} height={86} alt="Fórmula de Bhaskara" />
                <div className="bhask-result-area">
                    <div className="bhask-result">
                        <label className="bhask-label">+x</label>
                        <Resultado cor={"var(--math-red)"}/>
                    </div>
                    <div className="bhask-result">
                        <label className="bhask-label">-x</label>
                        <Resultado cor={"var(--math-red)"}/>
                    </div>
                </div>
            </div>
        </div>
    ); 
}