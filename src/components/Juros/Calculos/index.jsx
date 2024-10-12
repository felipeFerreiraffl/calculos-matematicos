import './styles.css';
import JurArea from '../JurosArea/index'
import { jurCompostos, jurSimples, montanteCompostos, montanteSimples } from '../../../scripts/juros';

function JurCalculos() {
    return (
        <div className='jur-calulos-area'>
            <JurArea 
                titulo={'Juros simples'} 
                formula1={'Juros'} 
                formula2={'Montante'}
                subTitulo1={'Capital inicial'}
                subTitulo2={'Juros'}
                calcular1={jurSimples}
                calcular2={montanteSimples} 
            />
            <hr className='jur-divisor' />
            <JurArea 
                titulo={'Juros compostos'} 
                formula1={'Montante'} 
                formula2={'Juros'}
                subTitulo1={'Montante'}
                subTitulo2={'Capital inicial'}
                calcular1={montanteCompostos}
                calcular2={jurCompostos} 
            />
        </div>
    );
}

export default JurCalculos;