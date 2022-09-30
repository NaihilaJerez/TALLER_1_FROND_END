    let P = document.getElementById("P")
    let lp = document.getElementById("LP")
    console.log(P)
function longitudP(){
    let LongP = P.value.length
    alert(LongP)
}
lp.addEventListener('click', longitudP)   


    let PM = document.getElementById("P")
    let mp = document.getElementById("MP")
    console.log(PM)
function MayusculaP(){
    let MayusP = PM.value.toUpperCase()
    alert(MayusP)
}
mp.addEventListener('click', MayusculaP)


    let MP = document.getElementById("P")
    let pm = document.getElementById("PM")
console.log(MP)
function MinusculaP(){
    let MinusP = MP.value.toLowerCase()
    alert(MinusP)
}
pm.addEventListener('click', MinusculaP);


    let PC = document.getElementById("P")
    let prC = document.getElementById("PRC")
console.log(prC)
    function PrimerCaracter(){
        let PrimerC = PC.value.charAt(0)
        alert(PrimerC) 
    }
prC.addEventListener('click', PrimerCaracter)