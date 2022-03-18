agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()

if (hora < 12) {
    saudacao.innerHTML = "Bom dia!"
} else if (hora <= 18) {
    saudacao.innerHTML = "Boa Tarde!"
} else {
    saudacao.innerHTML = "Boa Noite!"
} 

var horacerta = document.getElementById('horacertabox')
var horacertatext = "Agora são exatamente: " +  hora + ":" + minuto + ":" + segundo + "."
horacerta.innerHTML = horacertatext



  


