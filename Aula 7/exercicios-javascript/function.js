function A(){
    console.log("A - Você chamou a função A?");
}
function B(){
    console.log("B - Função B presente, chamou?");
    C();
}
function C(){
    console.log("C - Oi su a função C, o B que me chamou aqui!");
    D();
}
function D(){
    console.log("D - Sou a função D e chamo todo mundo!");
    A();
    B();
    C();
}

