// Remova o DOMContentLoaded se o script estiver no final do HTML
var nome = document.getElementById('nome');
var labelnome = document.getElementById('labelnome');

var usuario = document.getElementById('usuario');
var labelusuario = document.getElementById('labelusuario');

var senha = document.getElementById('senha');
var labelsenha = document.getElementById('labelsenha');

var confirmsenha = document.getElementById('confirmsenha');
var labelconfirmsenha = document.getElementById('labelconfirmsenha');

function nomecorr() {
    if (nome.value.length <= 3) {
        labelnome.innerHTML = 'Insira pelo menos 4 caracteres';
        labelnome.style.color = "red";
    } else {
        labelnome.innerHTML = "Nome completo";
        labelnome.style.color = "white";
    }
}

function usuariocorr() {
    if (usuario.value.length <= 3) {
        labelusuario.innerHTML = "Insira pelo menos 4 caracteres";
        labelusuario.style.color = "red";
    } else {
        labelusuario.innerHTML = "Nome do usuário";
        labelusuario.style.color = "white";
    }
}

function senhacorr() {
    if (senha.value.length <= 3) {
        labelsenha.innerHTML = "Pelo menos 4 caracteres";
        labelsenha.style.color = "red";
    } else {
        labelsenha.innerHTML = "Insira a senha";
        labelsenha.style.color = "white";
    }
}

function confirmsenhacorr() {
    if (confirmsenha.value.length <= 3) {
        labelconfirmsenha.innerHTML = "Pelo menos 4 caracteres";
        labelconfirmsenha.style.color = "red";
    } else {
        labelconfirmsenha.innerHTML = "Confirme a senha";
        labelconfirmsenha.style.color = "white";
    }
}

function cadastrar() {
    var nomeValor = nome.value;
    var usuarioValor = usuario.value;
    var senhaValor = senha.value;
    var confirmsenhaValor = confirmsenha.value;

    var dados = localStorage.getItem('dados') ? JSON.parse(localStorage.getItem('dados')) : [];

    if (senhaValor === confirmsenhaValor) {
        dados.push({
            nome: nomeValor,
            usuario: usuarioValor,
            senha: senhaValor
        });

        localStorage.setItem('dados', JSON.stringify(dados));

        alert('Cadastro realizado com sucesso!');
        resetar();
    } 
    else {
        alert('As senhas não conferem.');
    }
}

function resetar() {
    nome.value = "";
    usuario.value = "";
    senha.value = "";
    confirmsenha.value = "";

    labelnome.innerHTML = "Nome completo";
    labelusuario.innerHTML = "Nome do usuário";
    labelsenha.innerHTML = "Insira a senha";
    labelconfirmsenha.innerHTML = "Confirme a senha";

    labelnome.style.color = "white";
    labelusuario.style.color = "white";
    labelsenha.style.color = "white";
    labelconfirmsenha.style.color = "white";
}

// Adicionando eventos
nome.addEventListener("input", nomecorr);
usuario.addEventListener("input", usuariocorr);
senha.addEventListener("input", senhacorr);
confirmsenha.addEventListener("input", confirmsenhacorr);

// Verificando se os botões realmente existem antes de adicionar eventos
document.getElementById("btnCadastrar")?.addEventListener("click", cadastrar);
document.getElementById("btnResetar")?.addEventListener("click", resetar);
