let PFS = document.getElementById("pfs")

function profesores(){
    let P1 = document.getElementById("p1").value
    P1 = parseInt(P1)
    let P2 = document.getElementById("p2").value
    P2 = parseInt(P2)
    let P3 = document.getElementById("p3").value
    P3 = parseInt(P3)

    if(P1==2 && P2==2 && P3==2 ){
        alert("Tatis Cabrera y da clases de JAVASCRIPT")
    }
    else if(P1==7 && P2==7 && P3==7){
        alert("Luis Baquero y da clases de CULTURA FISICA")
    }
    else if(P1==6 && P2==6 && P3==6){
        alert("Yaneth Castillo y da clases de GESTION AMBIENTAL")
    }
    else if(P1==4 && P2==4 && P3==4){
        alert("Carolina Forero y da clases de PROYECTO")
    }
    else if(P1==5 && P2==5 && P3==5 ){
        alert("Adriana Duarte y da clases de DISEÑO")
    }
    else if(P1==3 && P2==3 && P3==3 ){
        alert("Fernando Galindo y da clases de BASE DE DATOS")
    }
    else if(P1==1 && P2==1 && P3==1){
        alert("Jhonatan Espitia y da clases de PHP")
    }
    else {
        alert("ERROR")
    }
}

PFS.addEventListener('click',profesores)