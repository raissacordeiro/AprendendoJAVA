function validarForm() {
    let name = document.querySelector("#name").value
    let mail = document.querySelector("#mail").value
    let msg =document.querySelector("#msg").value
    if (name == ''){
        alert('Insira o nome (obrigatório)')
    } else if (mail == ''){
        alert('Insira o email (obrigatório)')
    } else if (msg == ''){
        alert('Insira a mensagem (obrigatório)')
    } else{
        alert('Formulário enviado com sucesso!')
    }
    }

    function alterarTema(){
        let alterarTema = document.querySelector("body").classList.toggle("escuro")
        alert("Tema alterado com sucesso!")
    }

    function letraMenor(){
        let letraMenor = document.querySelector("body").classList.toggle("botões")

    }

    function letraPadrão(){
        let letraMaior = document.body.style.fontSize = "15px";
     }

    function letraMaior(){
       let letraMaior document.querySelector("body").classList.toggle("botões")
    }