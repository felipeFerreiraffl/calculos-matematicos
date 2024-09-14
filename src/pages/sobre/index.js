import SobreApresentacao from "../../components/Sobre/Apresentacao";
import HeaderVoltar from "../../components/VoltarHeader";
import "./styles.css";

export default function SobrePagina() {
    return (
        <div className="sobre-pagina">
            <HeaderVoltar />
            <div className="sobre-apresentacao-area">
                <SobreApresentacao />
            </div>
        </div>
    );
}