var calcular = document.getElementById('calcular');
var calcularAC = document.getElementById('calcularAC');
var calcularPT = document.getElementById('calcularPT');
var calcularAT = document.getElementById('calcularAT');
var calcularPR = document.getElementById('calcularPR');
var calcularAR = document.getElementById('calcularAR');
var calcularPC = document.getElementById('calcularPC');
var calcularCC = document.getElementById('calcularCC');

calcular.onclick = function (e) {
    medir();
}

calcularAC.onclick = function (e) {
    medir();
}

calcularPT.onclick = function (e) {
    medir();
}

calcularAT.onclick = function (e) {
    medir();
}

calcularPR.onclick = function (e) {
    medir();
}
calcularAR.onclick = function (e) {
    medir();
}
calcularPC.onclick = function (e) {
    medir();
}
calcularCC.onclick = function (e) {
    medir();
}


function medir() {
    var radio = document.getElementById('radio').value;
    var diametro = document.getElementById('diametro').value;
    var diametro1 = document.getElementById('diametro1').value;
    var lado1 = document.getElementById('lado1').value;
    var lado2 = document.getElementById('lado2').value;
    var lado3 = document.getElementById('lado3').value;
    var base = document.getElementById('base').value;
    var altura = document.getElementById('altura').value;
    var longitud = document.getElementById('longitu').value;
    var ancho = document.getElementById('ancho').value;
    var largo = document.getElementById('largo').value;
    var anchoA = document.getElementById('anchoA').value;
    var longitudPC = document.getElementById('longitudPC').value;
    var longitudAC = document.getElementById('longitudAC').value;

    var resultado = 0;

    if (radio >= 1) {
        resultado = 2 * 3.14159265359 * radio;
        alert("El perimetro es: " + resultado);
    } else if (diametro >= 1) {
        resultado = 3.14159265359 * diametro;
        alert("El perimetro es:  " + resultado);
    } else if (diametro1 >= 1) {
        resultado = diametro1 * diametro1 * 0.7854;
        alert("El perimetro es : " + resultado);
    } else if (lado1 >= 1 && lado2 >= 1 && lado3 >= 1) {
        resultado = parseFloat(lado1) + parseFloat(lado1) + parseFloat(lado3);
        alert("El Perimetro del Triangulo es: " + resultado);
    } else if (base >= 1 && altura >= 1) {
        resultado = (base * altura) / 2;
        alert("El area del triangulo es: " + resultado)
    } else if (longitud >= 1 && ancho >= 1) {
        resultado = longitud * 2 + parseFloat(ancho * 2);
        alert("El perimetro del rectangulo es: " + resultado)
    } else if (largo >= 1 && anchoA >= 1) {
        resultado = largo * anchoA
        alert("El Area del rectangulo es: " + resultado);
    } else if (longitudPC >= 1) {
        resultado = longitudPC * 4;
        alert("El perimetro del cuadrado es: " + resultado);
    } else if (longitudAC >= 1) {
        resultado = longitudAC * longitudAC;
        alert("El area del cuadrado es: " + resultado);
    }

}