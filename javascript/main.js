/*
const leia = document.querySelector("h1");
leia.textContent = "Olá mundo";

var nomePessoa = "Henrique";
console.log(nomePessoa);
nomePessoa = "Guste";
console.log(nomePessoa);

var tipoDoce = "chocolate";

if(tipoDoce == "chocolate"){
    alert("É chocolate");
}else{
    alert("Não é, seu doce é: " + tipoDoce);
}

var alerta = document.querySelector("h1");
alert("Processa o alerta");
*/
/*
function multiply(num1, num2){
    var resultado = num1 * num2;
    return resultado;
}
function divisao(num1, num2){
    var resultado = num1 / num2;
    return resultado;
}

console.log(multiply(2,5));
console.log(divisao(50,5));ghh

document.querySelector("html")
.addEventListener("click", function (){
    alert("Opa vocÊ acabou de clicar na tela");
});
*/
var image = document.querySelector("img")
image.onclick = function (){
    var imagemATT = image.getAttribute("src");
    if(imagemATT == "image/logoFireFoxAntigo.png"){
        image.setAttribute("src","image/logoFireFoxNovo.png");
    } else{
        image.setAttribute("src","image/logoFireFoxAntigo.png")
    }
}

// ANIPULANDO O NOME DO USUARIO
var nomeP = document.querySelector('button');
var novoT = document.querySelector('h1');
function setNPNT(){
    let meuNome = prompt('Digite seu nome.');
    alert(`Bem vindo ${meuNome}`)
    if (!meuNome){
        setNPNT();
    }else {
        localStorage.setItem('name', meuNome);
        novoT.innerHTML = (`Moziila é legal, ${meuNome}`)
    }
}
nomeP.onclick = function (){
    setNPNT();
}

if(!localStorage.getItem("name")){
    setNPNT();
}else{
    var storageName = localStorage.getItem("name");
    novoT.innerHTML = "Mozilla é legal, " + storageName;
}