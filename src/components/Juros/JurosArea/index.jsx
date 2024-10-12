import './styles.css';
import JurOperacao from '../JurosOperacao';
import Resultado from '../../ResultCard/index';
import Operacao from '../../Operacao/index';
import CalcBotao from '../../CalcularBotao/index';
import { useState } from 'react';

function JurArea({ titulo, subTitulo1, subTitulo2, formula1, formula2, calcular1, calcular2 }) {
    const [capInicial1, setCapInicial1] = useState('');
    const [taxa, setTaxa] = useState('');
    const [tempo, setTempo] = useState('');
    const [resultado1, setResultado1] = useState(0);
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [resultado2, setResultado2] = useState(0);

    const calcPrimeiro = () => {
        const numCapInicial1 = parseFloat(capInicial1);
        const numTaxa = parseFloat(taxa);
        const numTempo = parseFloat(tempo);

        if (!isNaN(numCapInicial1) && !isNaN(numTaxa) && !isNaN(numTempo)) {
            const resul = calcular1(numCapInicial1, numTaxa, numTempo);
            setResultado1(resul);
        } else {
            alert('Valores inválidos');
        } 
    }

    const calcSegundo = () => {
        const num1 = parseFloat(valor1);
        const num2 = parseFloat(valor2);

        if (!isNaN(num1) && !isNaN(num2)) {
            const resul = calcular2(num1, num2);
            setResultado2(resul);
        } else {
            alert('Valores inválidos');
        }

    }

    return (
        <div className='jur-conta-area'>
            <h1 className='jur-conta-titulo'>{titulo}</h1>
            <div className='jur-conta-resul-area'>
                <div className='jur-conta'>
                    <h2 className='jur-conta-subtitulo'>{formula1}</h2>
                    <div className='jur-conta-resultado'>
                        <div className='jur-conta-area'>
                            <JurOperacao 
                                valor1={capInicial1}
                                valor2={taxa}
                                valor3={tempo}
                                onChange1={e => setCapInicial1(e.target.value)}
                                onChange2={e => setTaxa(e.target.value)}
                                onChange3={e => setTempo(e.target.value)}
                            />
                            <CalcBotao cor={'var(--fees-yellow)'} onClick={calcPrimeiro} />
                        </div>
                        <Resultado cor={"var(--fees-yellow)"} valor={resultado1} />
                    </div>
                </div>
                <div className='jur-conta'>
                    <h2 className='jur-conta-subtitulo'>{formula2}</h2>
                    <div className='jur-conta-resultado'>
                        <div className='jur-conta-operacao'>
                            <Operacao 
                                titulo={subTitulo1} 
                                valor={valor1}
                                onChange={e => setValor1(e.target.value)}
                            />
                            <Operacao 
                                titulo={subTitulo2} 
                                valor={valor2}
                                onChange={e => setValor2(e.target.value)}
                            />
                            <CalcBotao cor={'var(--fees-yellow)'} onClick={calcSegundo} />
                        </div>
                        <Resultado cor={"var(--fees-yellow)"} valor={resultado2} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JurArea;