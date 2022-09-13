let n1 = 0;
let n2 = 0;

function trocaValores ( ){
    let aux = 0;

    aux = n1;
    n1 = n2;
    n2 = aux;
}

n1 = prompt("Digite o primeiro valor");
n2 = prompt("Digite o segundo valor");

console.log("N1:", n1, "N2:", n2);