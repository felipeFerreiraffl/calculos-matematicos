import './styles.css';
import Header from '../../components/Header/index'
import CalcApresentacao from '../../components/CalcApresentacao/index'
import jurBackground from '../../assets/Cálculos/fees.png';
import { BiMoney } from 'react-icons/bi';

function JurPagina() {
    return (
        <div className='jur-pagina'>
            <Header />
            <div className='jur-body'>
                <CalcApresentacao 
                    cor={"rgba(255, 224, 59, 0.7)"}
                    imgBackground={jurBackground}
                    logo={<BiMoney />}
                    corLogo={"var(--fees-yellow)"}
                    titulo={"Juros"}
                    sub1={"Parece preocupado com seu dinheiro... Não se preocupe"}
                    sub2={"Calcule tanto juros simples quanto juros compostos"}
                />
            </div>
        </div>
    );
}

export default JurPagina;