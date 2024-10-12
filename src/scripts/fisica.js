export const velocidade = (distancia, tempo) => {
    const vel = distancia / tempo;
    const resul = vel % 1 === 0 ? vel : vel.toFixed(2);

    return resul;
}

export const forca = (massa, aceleracao) => {
    const frc = massa * aceleracao;
    const resul = frc % 1 === 0 ? frc : frc.toFixed(2);

    return resul;
}

export const energiaCinetica = (massa, velocidade) => {
    const eCine = (massa * Math.pow(velocidade, 2)) / 2;
    const resul = eCine % 1 === 0 ? eCine : eCine.toFixed(2);

    return resul;
}

export const energiaPotGravitacional = (massa, altura) => {
    const ePotGrav = massa * altura * 10;
    const resul = ePotGrav % 1 === 0 ? ePotGrav : ePotGrav.toFixed(2);

    return resul;
}

export const energiaPotElastica = (constante, deformacao) => {
    const ePotElas = (constante * Math.pow(deformacao, 2)) / 2;
    const resul = ePotElas % 1 === 0 ? ePotElas : ePotElas.toFixed(2);

    return resul;
}

export const trabalho = (forca, distancia, cos) => {
    const trab = forca * distancia * cos;
    const resul = trab % 1 === 0 ? trab : trab.toFixed(2);

    return resul;
}

export const potencia = (trabalho, tempo) => {
    const pot = trabalho / tempo;
    const resul = pot % 1 === 0 ? pot : pot.toFixed(2);

    return resul;
}