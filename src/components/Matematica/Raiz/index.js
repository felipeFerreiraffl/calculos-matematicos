import "./styles.css";
import ResultCard from '../../ResultCard/index'
import CalcularBotao from '../../CalcularBotao/index'

export default function RaizQuad() {
    return (
        <div className="raiz-area">
            <h1 className="raiz-titulo">Raiz quadrada</h1>
            <div className="raiz-operacao-area">
                <div className="raiz-operacao">
                    <label className="raiz-label" htmlFor="raiz">Número</label>
                    <input className="raiz-input" id="raiz" type="number" />
                    <CalcularBotao cor={"var(--math-red)"} />
                </div>
                <ResultCard cor={"var(--math-red)"} />
            </div>
        </div>
    );
}