import "./styles.css";
import CalcBotao from "../../../CalcularBotao/index";
import { useState } from "react";

function ContasEscolha({ aoCalcular }) {
    const [operacao, setOperacao] = useState("+");
    const [qtdNum, setQtdNum] = useState(2);
    const [valores, setValores] = useState(Array(2).fill('')); // Armazena os valores

    // Atualiza os valores
    const handleValorChange = (index, valor) => {
        const novosValores = [...valores];
        novosValores[index] = valor;
        setValores(novosValores);
    }

    const gerarInputs = () => {
        return Array.from({ length: qtdNum }, (_, index) => (
            <input
                key={index}
                className="mat-qtd-numeros"
                type="number"
                value={valores[index] || ''}
                onChange={(e) => handleValorChange(index, e.target.value)}
            />
        ));
    }

    const calcOperacao = () => {
        const num = valores.map(v => parseFloat(v));

        if (num.some(isNaN)) {
            alert('Coloque valores válidos');
            return;
        }

        let resultado = num[0];
        for (let i = 1; i < num.length; i++) {
            switch (operacao) {
                case "+":
                    resultado += num[i];
                    break;
                case "-":
                    resultado -= num[i];
                    break;
                case "x":
                    resultado *= num[i];
                    break;
                case "/":
                    if (num[i] === 0) {
                        alert("Não se divide por zero");
                        return;
                    }
                    resultado /= num[i];
                    break;
                default:
                    break; 
            }
        }

        aoCalcular(resultado);
    }

    return (
        <div className="mat-contas-escolha">
            <div className="mat-contas-escolha-area-1">
                <label className="mat-contas-label" htmlFor="mat-opcoes">Escolha uma operação</label>
                <select 
                    className="mat-contas-opcoes-area" 
                    id="mat-opcoes" 
                    value={operacao}
                    onChange={(e) => setOperacao(e.target.value)}
                >
                    <option value={"+"}>+</option>
                    <option value={"-"}>-</option>
                    <option value={"x"}>x</option>
                    <option value={"/"}>/</option>
                </select>
            </div>
            <div className="mat-contas-escolha-area-2">
                <label className="mat-contas-label" htmlFor="mat-input">Quantidade de números</label>
                <input 
                    className="mat-contas-input" 
                    id="mat-input" 
                    type="number"
                    value={qtdNum}
                    min={2}
                    onChange={(e) => {
                        const qtd = Math.max(2, parseInt(e.target.value));
                        setQtdNum(qtd);
                        setValores(Array(qtd).fill(''));
                    }}  
                />
            </div>
            <div className="mat-contas-escolha-calc">
                <div className="mat-contas-escolha-input">
                    {gerarInputs()}
                </div>
                <CalcBotao cor={"var(--math-red)"} onClick={calcOperacao} /> 
            </div>
        </div>
    );
}

export default ContasEscolha;