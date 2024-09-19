import "./styles.css";

export default function ContasEscolha() {
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
        </div>
    );
}