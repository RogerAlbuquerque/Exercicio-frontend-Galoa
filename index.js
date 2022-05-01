var formulario    =  document.getElementById("criandoTopico")
var topico        =  document.getElementById("topico")
var confirmTopico =  document.getElementById("confirmEnvioTopico")
var showComents   =  document.getElementById("comentEscondidos")

var textoNone1 = document.querySelector(".textoEscondido1");
var textoNone2 = document.querySelector(".textoEscondido2");
var textoNone3 = document.querySelector(".textoEscondido3");

function newTopic(){






formulario.style.display="block"

topico.style.display="none"
confirmTopico.style.display="none"



// let x = document.getElementById("topico")
// x.innerHTML=""

// let nTopic = document.createElement('div')

// nTopic.innerHTML = ` `

// x.appendChild(nTopic)


}




function sendForm(){

    formulario.style.display="none"
    confirmTopico.style.display="block"

}




function resumoInteiro (){

    textoNone1.style.display = "block"
    textoNone2.style.display = "block"
    textoNone3.style.display = "block"

}

function mostrarComents(){

    showComents.style.display="block"


}