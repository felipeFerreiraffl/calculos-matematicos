export const potencia = (base, expoente) => {
    return Math.pow(base, expoente);
}

export const raizQuad = (base) => {
    return Math.sqrt(base).toFixed(2);
}

export const delta = (a, b, c) => {
    return Math.pow(b, 2) - (4 * a * c);
}

export const bhaskaraPositivo = (b, a, delta) => {
    return ((-b + (Math.sqrt(delta))) / (2 * a)).toFixed(2);
}

export const bhaskaraNegativo = (b, a, delta) => {
    return ((-b - (Math.sqrt(delta))) / (2 * a)).toFixed(2);
}