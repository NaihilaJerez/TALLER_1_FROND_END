const abrir = document.querySelector('.carea')
const Mo = document.querySelector('.Mo')
const cMo = document.querySelector('.Crarm')

abrir.addEventListener('click', ()=>{
    Mo.classList.add('Mo--show');
});

cMo.addEventListener('click', ()=>{
    Mo.classList.remove('Mo--show');
});

function carea(){
    const Val = document.getElementById("Valarea").value
    const operacion = Val*Val*3.14;
    alert("El área del circulo es = "+operacion)
}
const abrirp = document.querySelector('.cperi')
const Mopc = document.querySelector('.Mopc')
const cMopc = document.querySelector('.Crarpc')

abrirp.addEventListener('click', ()=>{
    Mopc.classList.add('Mo--show');
});

cMopc.addEventListener('click', ()=>{
    Mopc.classList.remove('Mo--show');
});

function cperi(){
    const Valp = document.getElementById("Valperi").value
    const operacion = 2*3.14*Valp;
    alert("El perimetro del circulo es = "+operacion)
}
const abrircd = document.querySelector('.cdarea')
const Mocd = document.querySelector('.Mocd')
const cMocd = document.querySelector('.Crarcd')

abrircd.addEventListener('click', ()=>{
    Mocd.classList.add('Mo--show');
});

cMocd.addEventListener('click', ()=>{
    Mocd.classList.remove('Mo--show');
});

function cdarea(){
    const Valcd = document.getElementById("Valareacd").value
    const operacion = Valcd*Valcd;
    alert("El área del cuadrado es = "+operacion)
}

const abrircdp = document.querySelector('.cdperi')
const Mocdp = document.querySelector('.Mocdp')
const cMocdp = document.querySelector('.Crarcdp')

abrircdp.addEventListener('click', ()=>{
    Mocdp.classList.add('Mo--show');
});

cMocdp.addEventListener('click', ()=>{
    Mocdp.classList.remove('Mo--show');
});

function cperi(){
    const Valcdp = document.getElementById("Valpericd").value
    const operacion = Valcdp*4;
    alert("El área del cuadrado es = "+operacion)
}

const abrirtr = document.querySelector('.areatr')
const Motr = document.querySelector('.Motr')
const cMotr = document.querySelector('.Crartr')

abrirtr.addEventListener('click', ()=>{
    Motr.classList.add('Mo--show');
});

cMotr.addEventListener('click', ()=>{
    Motr.classList.remove('Mo--show');
});
function areatr(){
    const base = document.getElementById("basetr").value
    const altura = document.getElementById("alttr").value
    const operacion = base*altura/2;
    alert("El área del triangulo es = "+operacion)
}
const abrirttr = document.querySelector('.peritr')
const Mottr = document.querySelector('.Mottr')
const cMottr = document.querySelector('.Crarttr')

abrirttr.addEventListener('click', ()=>{
    Mottr.classList.add('Mo--show');
});

cMottr.addEventListener('click', ()=>{
    Mottr.classList.remove('Mo--show');
});
function peritr(){
    const lado1 = document.getElementById("1").value
    const lado2 = document.getElementById("2").value
    const lado3 = document.getElementById("3").value
    const operacion = lado1+lado2+lado3;
    alert("El perimetro del triangulo es = "+operacion)
}
const abrirrec = document.querySelector('.crec')
const Morec = document.querySelector('.Morec')
const cMorec = document.querySelector('.Crarrec')

abrirrec.addEventListener('click', ()=>{
    Morec.classList.add('Mo--show');
});

cMorec.addEventListener('click', ()=>{
    Morec.classList.remove('Mo--show');
});
function arearec(){
    const largor = document.getElementById("largo").value
    const anchor = document.getElementById("ancho").value
    const operacion = largor*anchor;
    alert("El área del rectangulo es = "+operacion)
}
const abrirrep = document.querySelector('.prec')
const Morep = document.querySelector('.Morep')
const cMorep = document.querySelector('.Crarrep')

abrirrep.addEventListener('click', ()=>{
    Morep.classList.add('Mo--show');
});

cMorep.addEventListener('click', ()=>{
    Morep.classList.remove('Mo--show');
});
function cperi(){
    const laado1 = document.getElementById("la1").value
    const laado2 = document.getElementById("la2").value
    const laado3 = document.getElementById("la3").value
    const laado4 = document.getElementById("la4").value
    const operacion = laado1+laado2+laado3+laado4;
    alert("El área del rectangulo es = "+operacion)
}
