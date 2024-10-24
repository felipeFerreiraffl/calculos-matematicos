import FisOperacao from '../FisOperacao';
import './styles.css';
import CalcDivisor from '../../DivisorCalc/index'
import Trabalho from '../Trabalho/index'
import { energiaCinetica, energiaPotElastica, energiaPotGravitacional, forca, potencia, velocidade } from '../../../scripts/fisica';

function FisCalculos() {
    return (
        <div className='fis-calculos-area'>
            <div className='fis-calculos'>
                <FisOperacao 
                    tituloForm={"Velocidade (v)"} 
                    numeroUm={"distância (m)"}
                    numeroDois={"tempo (s)"}
                    unidade={"m/s"} 
                    calcular={velocidade}
                />
                <FisOperacao 
                    tituloForm={"Força (F)"}
                    numeroUm={"massa (kg)"}
                    numeroDois={"aceleração (m/s²)"}
                    unidade={"N"}
                    calcular={forca}
                />
            </div>
            <CalcDivisor />
            <div className='fis-calculos'>
                <FisOperacao 
                    tituloForm={"Energia cinética (EC)"}
                    numeroUm={"massa (kg)"}
                    numeroDois={"velocidade (m/s)"}
                    unidade={"J"}
                    calcular={energiaCinetica}
                />
                <FisOperacao 
                    tituloForm={"Energia potencial gravitacional (E_pg)"}
                    numeroUm={"massa (kg)"}
                    numeroDois={"altura (m)"}
                    unidade={"J"}
                    adicional={"g = 10 m/s²"}
                    calcular={energiaPotGravitacional}
                />
            </div>
            <CalcDivisor />
            <div className='fis-calculos'>
                <FisOperacao 
                    tituloForm={"Energia potencial elástica (E_pe)"}
                    numeroUm={"constante (N/m)"}
                    numeroDois={"deformação (m)"}
                    unidade={"J"}
                    calcular={energiaPotElastica}
                />
                <Trabalho />
            </div>
            <CalcDivisor />
            <div className='fis-calculos'>
                <FisOperacao 
                    tituloForm={"Potência"}
                    numeroUm={"trabalho (J)"}
                    numeroDois={"tempo (s)"}
                    unidade={"W"}
                    calcular={potencia}
                />
            </div>
        </div>
    );
}

export default FisCalculos;