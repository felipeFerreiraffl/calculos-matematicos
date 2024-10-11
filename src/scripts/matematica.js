export const potencia = (base, expoente) => {
    return Math.pow(base, expoente);
}

export const raizQuad = (base) => {
    const raiz = Math.sqrt(base);
    const resul = raiz % 1 === 0 ? raiz : raiz.toFixed(2);

    return resul;
}

export const delta = (a, b, c) => {
    return Math.pow(b, 2) - (4 * a * c);
}

export const bhaskaraPositivo = (b, a, delta) => {
    const bhaskPos = (-b + (Math.sqrt(delta))) / (2 * a);
    const resul = bhaskPos % 1 === 0 ? bhaskPos : bhaskPos.toFixed(2);

    return resul;
}

export const bhaskaraNegativo = (b, a, delta) => {
    const bhaskNeg = (-b - (Math.sqrt(delta))) / (2 * a);
    const resul = bhaskNeg % 1 === 0 ? bhaskNeg : bhaskNeg.toFixed(2);

    return resul;
}