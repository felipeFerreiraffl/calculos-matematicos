import "./styles.css";
import Operacao from '../../Operacao/index';
import CalcularBotao from '../../CalcularBotao/index';
import ResultCard from '../../ResultCard/index';
import deltaForm from '../../../assets/Cálculos/delta-form.png';

export default function FormDelta() {
    return (
        <div className="delta-area">
            <h1 className="delta-titulo">Fórmula de Delta</h1>
            <div className="delta-operacao-area">
                <div className="delta-operacao">
                    <Operacao titulo={"a"} />
                    <Operacao titulo={"b"} />
                    <Operacao titulo={"c"} />
                    <CalcularBotao cor={"var(--math-red)"} />
                </div>
                <div className="delta-rep">
                    <img src={deltaForm} width={220} height={40} alt="Fórmula de delta" />
                    <ResultCard cor={"var(--math-red)"} />
                </div>
            </div>
        </div>
    ); 
}