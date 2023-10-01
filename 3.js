function click_calcular() {
    let ValorA = Number(document.getElementById('ValorA').value);
    let ValorB = Number(document.getElementById('ValorB').value);
    let ValorC = Number(document.getElementById('ValorC').value);
    let Delta = ValorB * ValorB - 4 * ValorA * ValorC;
    if (Delta > 0) {
        let x1 = (-ValorB + Math.sqrt(Delta)) / (2 * ValorA);
        let x2 = (-ValorB - Math.sqrt(Delta)) / (2 * ValorA);
        document.getElementById('resposta').innerHTML = `X1 = ${x1} <br>X2 = ${x2}`;
    } else if (Delta === 0) {
        let x1 = -ValorB / (2 * ValorA);
        document.getElementById('resposta').innerHTML = `X1 = ${x1}`;
    } else {
        document.getElementById('resposta').innerHTML = 'A equação não possui raízes reais: (Δ < 0)';
    }
}
function click_limpar() {
    document.getElementById(`ValorA`).value = ``;
    document.getElementById(`ValorB`).value = ``;
    document.getElementById(`ValorC`).value = ``;
    document.getElementById(`resposta`).innerHTML = ``;

}