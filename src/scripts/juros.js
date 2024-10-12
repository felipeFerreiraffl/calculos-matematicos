export const jurSimples = (capInicial, taxa, tempo) => {
    // Converte a taxa para um número decimal
    const taxaDecimal = taxa / 100;

    const form = capInicial * taxaDecimal * tempo;
    const resul = form % 1 === 0 ? form : parseFloat(form.toFixed(2));

    return resul;
}

export const montanteSimples = (capInicial, juros) => {
    const monSimples = capInicial + juros;
    const resul = monSimples;

    return resul;
}

export const montanteCompostos = (capInicial, taxa, tempo) => {
    const taxaDecimal = taxa / 100;

    const form = capInicial * Math.pow((1 + taxaDecimal), tempo);
    const resul = form % 1 === 0 ? form : parseFloat(form.toFixed(2));

    return resul;
}

export const jurCompostos = (montante, capInicial) => {
    const monCompostos = montante - capInicial;
    const resul = monCompostos % 1 === 0 ? monCompostos : monCompostos.toFixed(2);

    return resul;
}