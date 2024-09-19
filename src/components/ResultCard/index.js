import "./styles.css";

export default function Resultado({ valor, cor }) {
    const colorStyle = {
        backgroundColor: `${cor}`
    };

    return (
        <output className="resultado-area" style={colorStyle}>{valor}</output>
    );
}