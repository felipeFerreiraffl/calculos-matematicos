import "./styles.css";
import CalcularBotao from '../../CalcularBotao/index'
import Operacao from "../../Operacao";
import Resultado from "../../ResultCard";

export default function Potencia() {
    return (
        <div className="pot-area">
            <h1 className="pot-titulo">Potência</h1>
            <div className="pot-operacao">
                <div className="pot-operacao-area">
                    <Operacao titulo={"Número"}/>
                    <Operacao titulo={"Elevado a"} />
                    <CalcularBotao cor={"var(--math-red)"} />
                </div>
                <Resultado cor={"var(--math-red)"} />
            </div>
        </div>
    );
}