import "./styles.css";

function Operacao({ titulo, valor, onChange }) {
    return(
        <div className="operacao-area">
            <label className="operacao-label" htmlFor="operacao">{titulo}</label>
            <input 
                className="operacao-input" 
                id="operacao" 
                value={valor} 
                onChange={onChange} 
            />
        </div>
    );
}

export default Operacao;