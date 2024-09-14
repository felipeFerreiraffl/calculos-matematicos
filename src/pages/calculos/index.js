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
            <div className="calculos-card-area">
                <CalculosCard 
                    titulo={"Matemática"} 
                    img={imgMath} 
                    cor={"rgba(255, 71, 71, 0.7)"}
                />
                <CalculosCard 
                    titulo={"Física"} 
                    img={imgPhysics} 
                    cor={"rgba(70, 130, 180, 0.7)"}
                />
                <CalculosCard 
                    titulo={"IMC"} 
                    img={imgImc} 
                    cor={"rgba(127, 255, 0, 0.7)"}
                />
                <CalculosCard 
                    titulo={"Juros"} 
                    img={imgFees} 
                    cor={"rgba(255, 224, 59, 0.7)"}
                />
            </div>
        </div>
    );
} 