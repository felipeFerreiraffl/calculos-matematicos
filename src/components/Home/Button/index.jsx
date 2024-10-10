import "./styles.css";

export default function HomeBotao({ texto }) {
    return (
        <div>
            <button className="home-botao">{texto}</button>
        </div>
    );
}