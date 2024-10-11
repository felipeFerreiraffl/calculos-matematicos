export const imc = (peso, altura) => {
    return (peso / (Math.pow(altura, 2))).toFixed(2);
}