'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const entrarBtn = document.getElementById('entrar');
    entrarBtn.addEventListener('click', fazerLogin);
});

const fazerLogin = (event) => {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    // Verificar se a conta existe
    const contaExistente = verificarConta(email, senha);

    if (contaExistente) {
        alert("Login bem-sucedido!!");
        console.log("Redirecionando para home.html");
        window.location.assign("../home/home.html");
    } else {
        alert("Conta inexistente. Por favor, crie uma conta antes de fazer login.");
    }
};

const criarConta = () => {
    document.querySelectorAll('.error-message').forEach(element => element.remove());

    // ... (código anterior)

    if (document.querySelectorAll('.error-message').length === 0) {
        const conta = { nome, email, senha, telefone, imagem: photo.style.backgroundImage };
        const contasCadastradas = JSON.parse(localStorage.getItem('contas')) || [];
        contasCadastradas.push(conta);
        localStorage.setItem('contas', JSON.stringify(contasCadastradas));

        alert("Conta criada com sucesso!!");
        window.location.assign("./login.html?contaCriada=true");
    }
};


const verificarConta = (email, senha) => {
    const contasCadastradas = JSON.parse(localStorage.getItem('contas')) || [];
    return contasCadastradas.find(conta => conta.email === email && conta.senha === senha);
};