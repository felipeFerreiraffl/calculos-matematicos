import './styles.css';

function JurOperacao() {
    return (
        <div className='jur-operacao-area'>
            <div className='jur-operacao'>
                <label className='jur-label' htmlFor='jur-capital'>Capital inicial</label>
                <input className='jur-input-1' id='jur-capital' />
            </div>
            <div className='jur-operacao'>
                <label className='jur-label' htmlFor='jur-taxa'>taxa de juros (decimal)</label>
                <input className='jur-input-2' id='jur-taxa' />
            </div>
            <div className='jur-operacao'>
                <label className='jur-label' htmlFor='jur-tempo'>tempo</label>
                <input className='jur-input-3' id='jur-tempo' />
            </div>
        </div>
    );
}

export default JurOperacao;