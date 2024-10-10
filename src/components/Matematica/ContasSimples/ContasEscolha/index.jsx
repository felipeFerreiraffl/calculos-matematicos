import "./styles.css";
import CalcBotao from "../../../CalcularBotao/index";

function ContasEscolha() {
    return (
        <div className="mat-contas-escolha">
            <div className="mat-contas-escolha-area-1">
                <label className="mat-contas-label" htmlFor="mat-opcoes">Escolha uma operação</label>
                <select className="mat-contas-opcoes-area" id="mat-opcoes" name="mat-opcoes">
                    <option>+</option>
                    <option>-</option>
                    <option>x</option>
                    <option>/</option>
                </select>
            </div>
            <div className="mat-contas-escolha-area-2">
                <label className="mat-contas-label" htmlFor="mat-input">Quantidade de números</label>
                <input className="mat-contas-input" id="mat-input" type="number" />
            </div>
            <div className="mat-contas-escolha-calc">
                <div className="mat-contas-escolha-input">
                    <input className="mat-qtd-numeros" type="number" />
                    <p className="mat-contas-operacao">+</p>
                    <input className="mat-qtd-numeros" type="number" />
                </div>
                <CalcBotao cor={"var(--math-red)"} />
            </div>
        </div>
    );
}

export default ContasEscolha;