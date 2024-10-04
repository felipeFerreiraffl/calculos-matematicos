import './styles.css';
import Resultado from '../../ResultCard/index'
import Operacao from '../../Operacao/index'
import CalcularBotao from '../../CalcularBotao/index'

function FisOperacao({ tituloForm, numeroUm, numeroDois, unidade, adicional, onClick }) {
    return (    
        <div className='fis-conta-area'>
            <h1 className='fis-conta-titulo'>{tituloForm}</h1>
            <div className='fis-operacao-area'>
                <div className='fis-operacao'>
                    <Operacao titulo={numeroUm} />
                    <Operacao titulo={numeroDois} />
                    <CalcularBotao cor={"var(--physics-blue)"} onClick={onClick} />
                </div>
                <div className='fis-resul-expli'>
                    <p className='fis-unidade'>{unidade}</p>
                    <Resultado cor={"var(--physics-blue)"} />
                    <p className='fis-unidade'>{adicional}</p>
                </div>
            </div>
        </div>
    );
}

export default FisOperacao;