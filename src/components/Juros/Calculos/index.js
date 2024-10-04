import './styles.css';
import JurArea from '../JurosArea/index'

function JurCalculos() {
    return (
        <div className='jur-calulos-area'>
            <JurArea titulo={'Juros simples'} />
            <hr className='jur-divisor' />
            <JurArea titulo={'Juros compostos'} />
        </div>
    );
}

export default JurCalculos;