import { Link } from "react-router-dom";
import "./styles.css";

export default function CalculosCard() {
  return (
    <div className="calculos-card-box">
      <Link className="calculos-link" to={"/calculos/matematica"}>
        <div className="calculos-mat">
          <p className="calculos-card-titulo">Matemática</p>
        </div>
      </Link>
      <Link className="calculos-link" to={"/calculos/fisica"}>
        <div className="calculos-fis">
          <p className="calculos-card-titulo">Física</p>
        </div>
      </Link>
      <Link className="calculos-link" to={"/calculos/imc"}>
        <div className="calculos-imc">
          <p className="calculos-card-titulo">IMC</p>
        </div>
      </Link>
      <Link className="calculos-link" to={"/calculos/juros"}>
        <div className="calculos-jur">
          <p className="calculos-card-titulo">Juros</p>
        </div>
      </Link>
    </div>
  );
}