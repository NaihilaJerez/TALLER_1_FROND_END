function CL(){
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var RS = document.getElementById('RS');
    var R = document.getElementById('R');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
}
var N;
var L;
var OP;
uno.onclick = function(e){
    RS.textContent = RS.textContent  + "1";
}
dos.onclick = function(e){
    RS.textContent = RS.textContent  + "2";
}
tres.onclick = function(e){
    RS.textContent = RS.textContent  + "3";
}
cuatro.onclick = function(e){
    RS.textContent = RS.textContent  + "4";
}
cinco.onclick = function(e){
    RS.textContent = RS.textContent  + "5";
}
seis.onclick = function(e){
    RS.textContent = RS.textContent  + "6";
}
siete.onclick = function(e){
    RS.textContent = RS.textContent  + "7";
}
ocho.onclick = function(e){
    RS.textContent = RS.textContent  + "8";
}
nueve.onclick = function(e){
    RS.textContent = RS.textContent  + "9";
}
cero.onclick = function(e){
    RS.textContent = RS.textContent  + "0";
}
R.onclick = function(e){
    S();
}
suma.onclick = function(e){
    N = RS.textContent;
    OP = "+";
    limpiar();
}
resta.onclick = function(e){
    N = RS.textContent;
    OP = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    N = RS.textContent;
    OP = "*";
    limpiar();
}
division.onclick = function(e){
    N = RS.textContent;
    OP = "/";
    limpiar();
}
igual.onclick = function(e){
    L = RS.textContent;
    resolver();
}

R.onclick = function(e){
    S();
}
suma.onclick = function(e){
    N = RS.textContent;
    OP = "+";
    limpiar();
}
resta.onclick = function(e){
    N = RS.textContent;
    OP = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    N = RS.textContent;
    OP = "*";
    limpiar();
}
division.onclick = function(e){
    N = RS.textContent;
    OP = "/";
    limpiar();
}
igual.onclick = function(e){
    L = RS.textContent;
    resolver();
}

function limpiar(){
    RS.textContent = "";
}
function S(){
    RS.textContent = "";
    N = 0;
    L = 0;
    OP = "";
}

function resolver(){
    var res = 0;
    switch(OP){
    case "+":
        res = parseFloat(N) + parseFloat(L);
        break;
    case "-":
        res = parseFloat(N) - parseFloat(L);
        break;
    case "*":
        res = parseFloat(N) * parseFloat(L);
        break;
    case "/":
        res = parseFloat(N) / parseFloat(L);
        break;
    }
    S();
    RS.textContent = res;
}