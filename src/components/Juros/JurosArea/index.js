import './styles.css';
import JurOperacao from '../JurosOperacao';
import Resultado from '../../ResultCard/index'
import Operacao from '../../Operacao/index'

function JurArea({ titulo }) {
    return (
        <div className='jur-conta-area'>
            <h1 className='jur-conta-titulo'>{titulo}</h1>
            <div className='jur-conta-resul-area'>
                <div className='jur-conta'>
                    <h2 className='jur-conta-subtitulo'>Fórmula</h2>
                    <div className='jur-conta-resultado'>
                        <JurOperacao />
                        <Resultado cor={"var(--fees-yellow)"} />
                    </div>
                </div>
                <div className='jur-conta'>
                    <h2 className='jur-conta-subtitulo'>Montante</h2>
                    <div className='jur-conta-resultado'>
                        <div className='jur-conta-operacao'>
                            <Operacao titulo={'Capital inicial'} />
                            <Operacao titulo={'Juros'} />
                        </div>
                        <Resultado cor={"var(--fees-yellow)"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JurArea;