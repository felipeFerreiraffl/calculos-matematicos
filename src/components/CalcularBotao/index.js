import "./styles.css";

export default function CalcBotao({ cor, onClick }) {
    const colorStyle = {
        backgroundColor: `${cor}`
    }

    return (
        <button 
            className="calcular-botao" 
            onClick={onClick}
            style={colorStyle}
        >
            Calcular
        </button>
    );
}