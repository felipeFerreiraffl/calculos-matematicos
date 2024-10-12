import './styles.css';

function JurOperacao({ valor1, valor2, valor3, onChange1, onChange2, onChange3 }) {
    return (
        <div className='jur-operacao-area'>
            <div className='jur-operacao'>
                <label className='jur-label' htmlFor='jur-capital'>Capital inicial</label>
                <input className='jur-input-1' id='jur-capital' value={valor1} onChange={onChange1} />
            </div>
            <div className='jur-operacao'>
                <label className='jur-label' htmlFor='jur-taxa'>taxa de juros (decimal)</label>
                <input className='jur-input-2' id='jur-taxa' value={valor2} onChange={onChange2} />
            </div>
            <div className='jur-operacao'>
                <label className='jur-label' htmlFor='jur-tempo'>tempo</label>
                <input className='jur-input-3' id='jur-tempo' value={valor3} onChange={onChange3} />
            </div>
        </div>
    );
}

export default JurOperacao;