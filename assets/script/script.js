//Modificando elementos da caixa do formulario
//COlocando os elementos do formulario em variaveis
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
let contador = 0;
let textAssunto = document.querySelector(".textAssunto");
let textNome = document.querySelector(".textNome");


//Nome
textNome.innerHTML = "Nome tem que ter mais de 3 caracteres";
textNome.style.fontSize = "12px";

function validarNome(){
    if(nome.value.length < 3){
        textNome.style.color = "red";
    }else{
        textNome.style.color = "#90EE90";
        nomeOk = true
    }
}

//Email
function validarEmail(){
    let textEmail = document.querySelector(".textEmail");
    textEmail.style.fontSize = "12px";

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        textEmail.innerHTML = "E-mail Invalido";
        textEmail.style.color = "red";
    }else{
        textEmail.innerHTML = "E-mail Valido";
        textEmail.style.color = "#90EE90";
        emailOk = true
    }
}

//Assunto
textAssunto.innerHTML = "Numero de caracter " + contador + "/100";
textAssunto.style.fontSize = "12px";

function validarAssunto(){
    contador = assunto.value.length;
    textAssunto.innerHTML = "Numero de caracter " + contador + "/100";

    if (assunto.value.length >= 100) {
        textAssunto.style.color = 'red';
        // textAssunto.style.display = 'block'
     } else {
        // textAssunto.style.display = 'none'
        textAssunto.style.color = "black";
        assuntoOk = true
     }
}

//Envio
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ('Formulário enviado com sucesso!');
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...');
    }
 }
 
 //Mapa
 function mapaZoom() {
    mapa.style.width = '600px';
    mapa.style.height = '400px';
 }
 
 function mapaNormal() {
    mapa.style.width = '400px';
    mapa.style.height = '250px';
 }