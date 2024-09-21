import "./styles.css";

function Resultado({ valor, cor }) {
    const colorStyle = {
        backgroundColor: `${cor}`
    };

    return (
        <output className="resultado-area" style={colorStyle}>{valor}</output>
    );
}

export default Resultado;