import "./styles.css";
import CalculosCard from "../../components/Calculos/Cards";
import Header from "../../components/Header";
import imgMath from "../../assets/Cálculos/math.png";
import imgPhysics from "../../assets/Cálculos/physics.png";
import imgImc from "../../assets/Cálculos/imc.png";
import imgFees from "../../assets/Cálculos/fees.png";

export default function CalculosPagina() {
    return (
        <div className="calculos-pagina">
            <Header />
            <h1 className="calculos-titulo">O que deseja?</h1>
            <div className="calculos-card-area">
                <CalculosCard />
            </div>
        </div>
    );
} 