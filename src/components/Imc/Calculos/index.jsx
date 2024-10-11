import './styles.css';
import { useState } from 'react';
import ImcOperacao from '../ImcOperacao/index';
import ImcResultado from '../ImcResultado/index';
import CalcBotao from '../../CalcularBotao/index';
import { imc } from '../../../scripts/imc'

function ImcCalculos() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [texto, setTexto] = useState('...');
    const [cor, setCor] = useState('var(--imc-green)');
    const [resultado, setResultado] = useState(0);

    const calcImc = () => {
        const numPeso = parseFloat(peso);
        const numAltura = parseFloat(altura);

        if (!isNaN(numPeso) && !isNaN(numAltura) && numPeso > 0 && numAltura > 0 && numPeso < 300 && numAltura < 3.00) {
            const imcResultado = imc(numPeso, numAltura);
            setResultado(imcResultado);

            // Define o estilo do nível (texto e cor)
            if (imcResultado < 18.5) {
                setTexto("Baixo peso");
                setCor('var(--low-level)');

            } else if (imcResultado >= 18.5 && imcResultado < 25) {
                setTexto("Normal");
                setCor('var(--normal-level)');

            } else if (imcResultado >= 25 && imcResultado < 30) {
                setTexto("Sobrepeso");
                setCor('var(--above-level)');

            } else if (imcResultado >= 30 && imcResultado < 35) {
                setTexto("Obesidade I");
                setCor('var(--obesity-1-level)');

            } else if (imcResultado >= 35 && imcResultado < 40) {
                setTexto("Obesidade II");
                setCor('var(--obesity-2-level)');

            } else {
                setTexto("Obesidade III");
                setCor('var(--obesity-3-level)');

            }

        } else {
            alert('Valores inválidos');
        }
    }

    return (
        <div className='imc-calculos-area'>
            <h1 className='imc-calculos-titulo'>IMC</h1>
            <div className='imc-operacao-area'>
                <div className='imc-operacao'>
                    <ImcOperacao
                        titulo={"Seu peso"}
                        unidade={"kg"}
                        valor={peso}
                        onChange={(e) => setPeso(e.target.value)}
                    />
                    <ImcOperacao
                        titulo={"Altura"}
                        unidade={"m"}
                        valor={altura}
                        onChange={(e) => setAltura(e.target.value)}
                    />
                    <CalcBotao cor={'var(--imc-green)'} onClick={calcImc} />
                </div>
                <ImcResultado
                    valor={resultado}
                    nivel={texto}
                    cor={cor}
                />
            </div>
        </div>
    );
}

export default ImcCalculos;