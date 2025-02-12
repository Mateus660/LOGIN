function logar() {
    var usuarioDigitado = document.getElementById('usuario').value.trim();
    var senhaDigitada = document.getElementById('senha').value.trim();

    // Recupera os dados do LocalStorage
    var dados = localStorage.getItem('dados') ? JSON.parse(localStorage.getItem('dados')) : []; 
    // O método .find() percorre o array procurando um usuário com o mesmo nome e senha digitados.

    // Verifica se existe um usuário com esse nome e senha
    var usuarioEncontrado = dados.find(user => user.usuario === usuarioDigitado && user.senha === senhaDigitada);

    if (usuarioEncontrado) {
        alert('Login realizado com sucesso!');
        // Aqui você pode redirecionar para outra página, por exemplo:
        // window.location.href = "dashboard.html";
    } else {
        alert('Usuário ou senha incorretos!');
    }
}
