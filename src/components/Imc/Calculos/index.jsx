import './styles.css';
import ImcOperacao from '../ImcOperacao/index'
import ImcResultado from '../ImcResultado/index'

function ImcCalculos() {
    return (
        <div className='imc-calculos-area'>
            <h1 className='imc-calculos-titulo'>IMC</h1>
            <div className='imc-operacao-area'>
                <div className='imc-operacao'>
                    <ImcOperacao titulo={"Seu peso"} unidade={"kg"} />
                    <ImcOperacao titulo={"Altura"} unidade={"m"} />
                </div>
                <ImcResultado />
            </div>
        </div>
    );
}

export default ImcCalculos;