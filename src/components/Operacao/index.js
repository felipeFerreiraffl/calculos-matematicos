import "./styles.css";

function Operacao({ titulo }) {
    return(
        <div className="operacao-area">
            <label className="operacao-label" htmlFor="operacao">{titulo}</label>
            <input className="operacao-input" id="operacao" />
        </div>
    );
}

export default Operacao;