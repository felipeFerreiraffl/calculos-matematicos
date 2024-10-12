import { useState } from 'react';
import CalcBotao from '../../CalcularBotao';
import Operacao from '../../Operacao';
import Resultado from '../../ResultCard';
import './styles.css';
import { trabalho } from '../../../scripts/fisica';

function Trabalho() {
    const [forca, setForca] = useState('');
    const [distancia, setDistancia] = useState('');
    const [cosseno, setCosseno] = useState('');
    const [resultado, setResultado] = useState(0);

    const calcTrabalho = () => {
        const numForca = parseFloat(forca);
        const numDistancia = parseFloat(distancia);
        const numCosseno = parseFloat(cosseno);

        if (!isNaN(numForca) && !isNaN(numDistancia) && !isNaN(numCosseno)) {
            const trab = trabalho(numForca, numDistancia, numCosseno);
            setResultado(trab);
        } else {
            alert('Valores inválidos');
        }

    }

    return (
        <div className='fis-trabalho-area'>
            <h1 className='fis-trabalho-titulo'>Trabalho</h1>
            <div className='fis-trabalho-operacao-area'>
                <div className='fis-trabalho-operacao'>
                    <Operacao 
                        titulo={"força (N)"}
                        valor={forca}
                        onChange={(e) => setForca(e.target.value)} 
                    />
                    <Operacao 
                        titulo={"distância (m)"} 
                        valor={distancia}
                        onChange={(e) => setDistancia(e.target.value)}
                    />
                    <Operacao 
                        titulo={"cos(°)"}
                        valor={cosseno}
                        onChange={(e) => setCosseno(e.target.value)} 
                    />
                    <CalcBotao cor={"var(--physics-blue)"} onClick={calcTrabalho} />
                </div>
                <div className='fis-trabalho-expli'>
                    <p className='fis-trabalho-unidade'>J</p>
                    <Resultado cor={"var(--physics-blue)"} valor={resultado} />
                </div>
            </div>
        </div>
    );
}

export default Trabalho;