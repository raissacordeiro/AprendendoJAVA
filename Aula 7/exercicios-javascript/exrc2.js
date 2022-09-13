function quadrado(num){
    console.log(num*num);
}
quadrado(5);




let numero ;

function tabuada(num){
    for(let i = 1; i <= 10; i++){ 
        console.log(num, "x", i, "=", (num*i));
    }
}
numero = prompt("Digite um número");
tabuada(numero);