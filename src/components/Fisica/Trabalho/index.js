import CalcBotao from '../../CalcularBotao';
import Operacao from '../../Operacao';
import Resultado from '../../ResultCard';
import './styles.css';

function Trabalho() {
    return (
        <div className='fis-trabalho-area'>
            <h1 className='fis-trabalho-titulo'>Trabalho</h1>
            <div className='fis-trabalho-operacao-area'>
                <div className='fis-trabalho-operacao'>
                    <Operacao titulo={"força (N)"} />
                    <Operacao titulo={"distância (m)"} />
                    <Operacao titulo={"cos(°)"} />
                    <CalcBotao cor={"var(--physics-blue)"} />
                </div>
                <div className='fis-trabalho-expli'>
                    <p className='fis-trabalho-unidade'>J</p>
                    <Resultado cor={"var(--physics-blue)"} />
                </div>
            </div>
        </div>
    );
}

export default Trabalho;