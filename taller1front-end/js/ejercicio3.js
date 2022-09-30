let Ttriangulo= document.getElementById("TTriangulo")

function triangulo(){
    let L1 = document.getElementById("l1").value
    L1 = parseInt(L1)
    let L2 = document.getElementById("l2").value
    L2 = parseInt(L2)
    let L3 = document.getElementById("l3").value
    L3 = parseInt(L3)

    if(  L1==L2 || L1==L3 || L2==L3){

        alert("Es un triángulo isosceles")
    }
    else if(L1==L2 && L2==L3){
    
        alert("Es un triángulo equilatero")
    }   
    else if(L1!=L2 && L2!=L3 ){
    
        alert("Es un triangulo escaleno")
    }
    else{
        alert('ERROR')
    }
}

Ttriangulo.addEventListener('click',triangulo)