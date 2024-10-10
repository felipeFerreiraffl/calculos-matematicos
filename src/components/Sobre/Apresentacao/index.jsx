import { BiSmile } from "react-icons/bi";
import "./styles.css";
import logo from "../../../assets/logo.svg";


export default function SobreApresentacao() {
    return (
        <div className="sobre-apresentacao">
            <div className="sobre-texto">
                <div className="sobre-texto-expo">
                    <p className="sobre-texto-1">Este projeto tem como intenção</p>
                    <p className="sobre-texto-2">Demonstrar cálculos mais conhecidos,</p>
                    <p className="sobre-texto-3">seja da matemática, física, o IMC, etc.</p>
                </div>
                <div className="sobre-texto-final">
                    <p className="sobre-texto-msg">Divirta-se</p>
                    <BiSmile className="sobre-texto-icon" />
                </div>
            </div>
            <img className="sobre-logo" src={logo} width={{width: "300px"}} height={{height: "315px"}} alt="Cálculos" />
        </div>
    );
}