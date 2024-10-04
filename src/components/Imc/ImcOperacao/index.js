import './styles.css';

function ImcOperacao({ titulo, unidade }) {
    return (
        <div className='imc-conta'>
            <label className='imc-conta-label' htmlFor='imc'>{titulo}</label>
            <div className='imc-conta-input-area'>
                <input className='imc-conta-input' id='imc' type='number' />
                <p className='imc-unidade'>{unidade}</p>
            </div>
        </div>
    );
}

export default ImcOperacao;