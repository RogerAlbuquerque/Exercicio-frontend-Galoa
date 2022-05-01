var formulario    =  document.getElementById("criandoTopico")
var topico        =  document.getElementById("topico")
var confirmTopico =  document.getElementById("confirmEnvioTopico")
var showComents   =  document.getElementById("comentEscondidos")

var textoNone = document.querySelector(".textoEscondido");






function resumoInteiro (){
    if(  textoNone.style.display != "block"){

    textoNone.style.display = "block"


    document.getElementById("verMais").innerText= ""
    document.getElementById("verMenos").style.display = "block"

}

else{


    textoNone.style.display = "none"
   
    document.getElementById("verMais").innerText= "ver mais"
    document.getElementById("verMenos").style.display = "none"
}

}


function newTopic(){


formulario.style.display="block"

topico.style.display="none"
confirmTopico.style.display="none"

}


function sendForm(){

    formulario.style.display="none"
    confirmTopico.style.display="block"

}





function mostrarComents(){

    if(showComents.style.display === "none"){

    showComents.style.display="block"   
    }

    else showComents.style.display="none"  

}



function videoplay (){
    let video = document.getElementById("midiaVideo")
    let conteudo = document.getElementById("conteudoInVideo")



    if( video.played ){
        conteudo.style.display="none"
    }
     else  if (video.paused){conteudo.style.display="block"}
      



     
     
    

}