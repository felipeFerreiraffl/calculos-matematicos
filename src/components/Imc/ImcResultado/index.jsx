import './styles.css';

function ImcResultado({ valor, nivel, cor }) {
    const colorStyle = {
        backgroundColor: `${cor}`
    }

    return (
        <div className='imc-resultado-area'>
            <output className='imc-resultado-out'>{valor}</output>
            <p className='imc-nivel' style={colorStyle}>{nivel}</p>
        </div>
    );
}

export default ImcResultado;