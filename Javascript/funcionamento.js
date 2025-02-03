    var nome = document.getElementById('nome')
    var labelnome = document.getElementById('labelnome')

    var usuario = document.getElementById('usuario')
    var labelusuario = document.getElementById('labelusuario')

    var senha  = document.getElementById('senha')
    var confirmsenha = document.getElementById('confirmsenha')
    var cadastrar = document.getElementById('cadastrar')

function nomecorr() { 
 
    if (nome.value.length <= 3) {
    labelnome.innerHTML = '<p>Insira pelo menos 4 carcteres</p>'
    labelnome.style.color = "red";
    
    } else {
    labelnome.innerHTML = "<p>Nome completo</P>"
    labelnome.style.color = "white"
    } 
     
} function usuariocorr() {

    if (usuario.value.length <= 3) {
    labelusuario.innerHTML = "<p>Insira pelo menos 4 caracteres</P>"
    labelusuario.style.color = "red"
    
    } else {
    labelusuario.innerHTML = "<p>Nome do usuario</P>"
    labelusuario.style.color = "white"
    }

}