let tmp = document.getElementById("TMP")

function temperatura(){
    let Grados = document.getElementById("grados").value
    Grados = parseInt(Grados)
    let S1 = document.getElementById("s1").value
    S1 = parseInt(S1)
    let E2 = document.getElementById("e2").value
    E2 = parseInt(E2)
    let conversion 

    if (S1==1 && E2==2) {
        conversion = ((Grados-32)/1.8).toFixed(2)
        alert (conversion)
    }
    else if (S1==1 && E2==3){
        conversion = ((Grados-32)* 5/9 + 273.15).toFixed(2)
        alert (conversion)
    }
    else if(S1==2 && E2==1){
        conversion = ((Grados * 9/5)+32).toFixed(2)
        alert (conversion)
    }
    else if(S1==2 && E2==3){
        conversion = (Grados + 273.15).toFixed(2)
        alert (conversion)
    }
    else if(S1==3 && E2==1){
        conversion = (( Grados - 273.15) * 9/5 + 32).toFixed(2)
        alert (conversion)
    }
    else if(S1==3 && E2==2){
        conversion = (Grados - 273.15).toFixed(2)
        alert (conversion)
    }

}
tmp.addEventListener('click', temperatura)