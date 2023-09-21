function click_calcular() {
    let Massa = document.getElementById("Massa").value;
    let Altura = document.getElementById("Altura").value;
    let resultado;

    if (Massa == "") {
        alert(`Informe uma massa`);
    } else if (Altura == "") {
        alert(`Informe uma altura`);
    } else {
        resultado = Number(Massa) / (Number(Altura) * Number(Altura));
        document.getElementById("Resultado").value = resultado.toFixed(2);
    }

    if (resultado <= 0) {
        document.getElementById("classificacao").value = "palito"
    } 
    else if (resultado <= 17) {
        document.getElementById("classificacao").value = "palito com um pouco de gordura"
    } 
    else if (resultado <= 18.49) {
        document.getElementById("classificacao").value = "Abaixo do Peso"
    } 
    else if (resultado <= 24.99) {
        document.getElementById("classificacao").value = "Peso Normal"
    } 
    else if (resultado <= 29.99) {
        document.getElementById("classificacao").value = "Acima do Peso"
    } 
    else if (resultado <= 34.99) {
        document.getElementById("classificacao").value = "Obesidade nivel 1"
    } 
    else if (resultado <= 39.99) {
        document.getElementById("classificacao").value = "Obesidade nivel 2"
    } 
            else {
        document.getElementById("classificacao").value = "Obesidade nivel 3"
    }
}

function click_limpar() {
    document.getElementById("Massa").value = "";
    document.getElementById("Altura").value = "";
    document.getElementById("Resultado").value = "";
    document.getElementById("classificação").value = ""; 
}