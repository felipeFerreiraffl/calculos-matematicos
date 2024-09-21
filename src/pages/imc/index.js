import './styles.css';
import CalcApresentacao from '../../components/CalcApresentacao';
import Header from '../../components/Header';
import imcBackground from '../../assets/Cálculos/imc.png';
import { BiHealth } from 'react-icons/bi';

function ImcPagina() {
    return (
        <div className='imc-pagina'>
            <Header />
            <div className='imc-body'>
                <CalcApresentacao 
                    cor={"rgba(127, 255, 0, 0.7)"}
                    imgBackground={imcBackground}
                    logo={<BiHealth />}
                    corLogo={"var(--imc-green)"}
                    titulo={"IMC"}
                    sub1={"Quer saber se sua saúde está em dia?"}
                    sub2={"Calcule seu IMC e veja se está no peso ideal"}
                />
            </div>
        </div>
    );
}

export default ImcPagina;