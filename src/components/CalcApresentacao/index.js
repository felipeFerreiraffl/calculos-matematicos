import "./styles.css";

export default function CalcApresentacao({ titulo, sub1, sub2, logo, imgBackground, cor, corLogo }) {
    const styleBackground = {
        backgroundImage: `url(${imgBackground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'soft-light',
        backgroundColor: `${cor}`
    }

    return(
        <div className="calc-apresentacao-area" style={styleBackground}>
            <div className="calc-apresentacao-texto">
                <h1 className="calc-apresentacao-titulo">{titulo}</h1>
                <div className="calc-apresentacao-sub">
                    <p className="calc-apresentacao-sub1">{sub1}</p>
                    <p className="calc-apresentacao-sub2">{sub2}</p>
                </div>
            </div>
            <div className="calc-apresentacao-logo" style={{backgroundColor: `${corLogo}`}}>
                {logo}
            </div>
        </div>
    );
}