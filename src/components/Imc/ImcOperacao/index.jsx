import './styles.css';

function ImcOperacao({ titulo, unidade, valor, onChange }) {
    return (
        <div className='imc-conta'>
            <label className='imc-conta-label' htmlFor='imc'>{titulo}</label>
            <div className='imc-conta-input-area'>
                <input 
                    className='imc-conta-input' 
                    id='imc' 
                    type='number'
                    value={valor}
                    onChange={onChange} 
                />
                <p className='imc-unidade'>{unidade}</p>
            </div>
        </div>
    );
}

export default ImcOperacao;