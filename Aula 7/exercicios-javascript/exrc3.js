let valor, vMenor, vMaior, i ;

function entradas(){
    for(let i = 1; i <= 5; i++){
    valor = prompt("Número", i, "=")

    if(i==1){
        vMenor = valor
        vMaior = valor
    }
    //compara (valor, vMenor, vMaior)
    }
    
    console.log("__________")
    console.log("Maior valor", vMaior)
    console.log("Menor valor", vMenor)
}

function compara(valor, vMenor, vMaior){
    if(valor>vMaior){
        vMaior = valor
    }
    if(valor>vMenor){
        vMenor = valor
    }
}
entradas()

