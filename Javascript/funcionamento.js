    var nome = document.getElementById('nome')
    var labelnome = document.getElementById('labelnome')

    var usuario = document.getElementById('usuario')
    var labelusuario = document.getElementById('labelusuario')

    var senha  = document.getElementById('senha')
    var labelsenha = document.getElementById('labelsenha')

    var confirmsenha = document.getElementById('confirmsenha')
    var labelcosenha = document.getElementById('labelcosenha')

    
    function nomecorr() { 
 
    if (nome.value.length <= 3) {
    labelnome.innerHTML = '<p>Insira pelo menos 4 carcteres</p>'
    labelnome.style.color = "red";
    
    } else {
    labelnome.innerHTML = "<p>Nome completo</P>"
    labelnome.style.color = "white"
    } 
     
}  
    function usuariocorr() {

    if (usuario.value.length <= 3) {
    labelusuario.innerHTML = "<p>Insira pelo menos 4 caracteres</P>"
    labelusuario.style.color = "red"
    
    } else {
    labelusuario.innerHTML = "<p>Nome do usuario</P>"
    labelusuario.style.color = "white"
    }

} 
    function senhacorr() {

    if (senha.value.length <= 3) {
    labelsenha.innerHTML = "<p>Pelo menos 4 caracteres</p>"
    labelsenha.style.color = "red"
    
    } else {
    labelsenha.innerHTML = "<p>Insira a senha</p>"
    labelsenha.style.color =  "white"
    }

 } 
    function confirmsenhacorr() {

    if (confirmsenha.value.length <= 3 ) {
    labelcosenha.innerHTML = "<p> Pelo menos 4 caracteres</P>"
    labelcosenha.style.color = "red"
    
    } else {
    labelcosenha.innerHTML = "<p>Confirme a senha</p>"
    labelcosenha.style.color = "white"
    }
 } 
    function cadastrar() {
    var cadastrar = document.getElementById('cadastrar');
    
    alert('olá')
} 


