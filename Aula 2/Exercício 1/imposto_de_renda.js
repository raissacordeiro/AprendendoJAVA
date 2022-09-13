// pedir nome, cpf, salário e calcular imposto de renda 15%

let user_name = "";                                                     
let user_salary = "";
let user_cpf = "";

user_name = prompt ("Qual seu nome?");
user_salary = parseFloat(prompt ("Qual o seu salário?"));
user_cpf = prompt ("Qual é o seu CPF?");

console.log ("Olá", user_name, "com o salário de", user_salary, "e o CPF", user_cpf);
console.log ("Seu imposto de renda é igual a", user_salary * 0.15);