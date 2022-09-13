// Exercício 1: Faça um programa que receba dois números e verifique se ambos são diferentes de 0.

var valor = 0;

valor = parseFloat(prompt("Digite um número"))
if(valor = 0){
    console.log("O valor informado é igual a 0")
}
else(valor > 0){
    console.log("O valor informado é diferente de 0")
}
    

// exercício 2: Faça um programa que receba um valor e verifique se ele é maior que 10

var valor = 0; 

valor = prompt("Informe um valor");

if(valor >= 10){
    console.log("O valor informado é maior que 10")
}
else{
    console.log("O número informado não é maior que 10")
};

// Exercício 3: Faça um programa que verifique a quantidade de itens comprados e que pretende ser comprado e se essa quantidade
// for maior que 20, acrescente um desconto de 10% para o usuário, caso o contrário, somente 5%.

var quantidade;
var desconto = 0;

quantidade = parseFloat(prompt("Digite a quantidade de itens que pretende comprar"))
if(quantidade > 20){
    desconto = 10;
}
desconto += 5;
console.log("Você terá", desconto, "% de desconto");

// Exercício 4: Um valor e verifique se é positivo ou negativo


// Exercício 5: Uma nota de 0 a 10 e informe aprovado para notas maiores ou iguais a 7 e reprovado para o restante.
 
var nota1 = 8.7;
var nota2 = 4.5;
var nota3 = 6.1;
var nota4 = 10.0;

nota = prompt("Informe a nota")

if(nota > 7){
    console.log("Aluno aprovado")
}
else{
    console.log("Aluno reprovado")
}

// Exercício 6: Um número e verifique se o mesmo é menor, maior ou igual a 10 e menor que 20, maior ou igual a 30 ou maior que 30.
// Obs: Utilize o "if" encadeado (if dentro de if) ou o "else if". Não utilizar o operador lógico OU (||).
