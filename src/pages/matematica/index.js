import "./styles.css";
import Header from "../../components/Header";
import CalcApresentacao from '../../components/CalcApresentacao/index';
import MatCalculos from "../../components/Matematica/Calculos/index";
import background from "../../assets/Cálculos/math.png";
import { BiMath } from "react-icons/bi";

export default function MatPagina() {
    return (
        <div className="mat-pagina">
            <Header />
            <div className="mat-body">
                <CalcApresentacao 
                    cor={"rgba(255, 71, 71, 0.7)"}
                    imgBackground={background}
                    titulo={"Matemática"}
                    sub1={"Aqui você pode fazer cálculos existentes de matemática, como"}
                    sub2={"Soma, subtração, multiplicação, divisão, raiz quadrada, etc."}
                    logo={<BiMath className="mat-logo" />}
                    corLogo={"var(--math-red)"}
                />
                <MatCalculos />
            </div>
        </div>
    );
}