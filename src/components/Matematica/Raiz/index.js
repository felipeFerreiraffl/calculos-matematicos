import "./styles.css";
import CalcularBotao from '../../CalcularBotao/index';
import Operacao from '../../Operacao/index';
import Resultado from "../../ResultCard/index";

export default function RaizQuad() {
    return (
        <div className="raiz-area">
            <h1 className="raiz-titulo">Raiz quadrada</h1>
            <div className="raiz-operacao-area">
                <div className="raiz-operacao">
                    <Operacao titulo={"Número"} />
                    <CalcularBotao cor={"var(--math-red)"} />
                </div>
                <Resultado cor={"var(--math-red)"} />
            </div>
        </div>
    );
}