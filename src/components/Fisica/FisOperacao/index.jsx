import './styles.css';
import Resultado from '../../ResultCard/index'
import Operacao from '../../Operacao/index'
import CalcularBotao from '../../CalcularBotao/index'
import { useState } from 'react';

function FisOperacao({ tituloForm, numeroUm, numeroDois, unidade, adicional, calcular }) {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [resultado, setResultado] = useState(0);

    const calcFormula = () => {
        const num1 = parseFloat(valor1);
        const num2 = parseFloat(valor2);

        if (!isNaN(num1) && !isNaN(num2)) {
            const resul = calcular(num1, num2);
            setResultado(resul);
        } else {
            alert('Valores inválidos');
        }
    }

    return (    
        <div className='fis-conta-area'>
            <h1 className='fis-conta-titulo'>{tituloForm}</h1>
            <div className='fis-operacao-area'>
                <div className='fis-operacao'>
                    <Operacao 
                        titulo={numeroUm}
                        valor={valor1}
                        onChange={e => setValor1(e.target.value)} 
                    />
                    <Operacao 
                        titulo={numeroDois}
                        valor={valor2}
                        onChange={e => setValor2(e.target.value)} 
                    />
                    <CalcularBotao cor={"var(--physics-blue)"} onClick={calcFormula} />
                </div>
                <div className='fis-resul-expli'>
                    <p className='fis-unidade'>{unidade}</p>
                    <Resultado cor={"var(--physics-blue)"} valor={resultado} />
                    <p className='fis-unidade'>{adicional}</p>
                </div>
            </div>
        </div>
    );
}

export default FisOperacao;