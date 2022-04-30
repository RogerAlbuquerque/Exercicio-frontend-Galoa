var formulario = document.getElementById("criandoTopico")
var topico = document.getElementById("topico")
var confirmTopico = document.getElementById("confirmEnvioTopico")

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