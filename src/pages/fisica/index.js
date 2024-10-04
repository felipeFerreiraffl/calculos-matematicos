import './styles.css';
import Header from '../../components/Header/index'
import CalcApresentacao from '../../components/CalcApresentacao/index'
import fisBackground from '../../assets/Cálculos/physics.png';
import { BiTestTube } from 'react-icons/bi';
import FisCalculos from '../../components/Fisica/Calculos';

function FisicaPagina() {
    return (
        <div className='fis-pagina'>
            <Header />
            <div className='fis-body'>
                <CalcApresentacao 
                    cor={"rgba(70, 130, 180, 0.7)"}
                    imgBackground={fisBackground}
                    logo={<BiTestTube />}
                    corLogo={"var(--physics-blue)"}
                    titulo={"Física"}
                    sub1={"Dificuldade em alguma conta? Aqui é possível fazer cálculos de"}
                    sub2={"Energia potencial, Lei de Newton, velocidade, Lei de Ohm, entre outros"}
                />
                <FisCalculos />
            </div>
        </div>
    );
}

export default FisicaPagina;