document.getElementById("botaoEnviar").addEventListener("click", validaformulario)

function validaformulario(){
  if(document.getElementById("nome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementByid("telefone").value != ""){
    alert("Prontinho! Você receberá as mensagens por email.")
  }else{
    alert("Por favor, preencha os campos nome, email e telefone.")
  }
}