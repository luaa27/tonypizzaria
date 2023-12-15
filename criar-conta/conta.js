'use strict';

const criar = document.getElementById('criarConta');
const photo = document.getElementById('photo');

const mudarPerfil = () => {
    const addIcon = document.getElementById('addImg');

    addIcon.addEventListener('change', (e) => {
        const inputTarget = e.target;
        const file = inputTarget.files[0];

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('load', (e) => {
                const readerTarget = e.target;
                const iconImg = readerTarget.result;

                const MAX_IMAGE_SIZE = 200;
                const image = new Image();
                image.src = iconImg;

                image.onload = () => {
                    const aspectRatio = image.width / image.height;
                    const maxWidth = MAX_IMAGE_SIZE;
                    const maxHeight = MAX_IMAGE_SIZE / aspectRatio;

                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = maxWidth;
                    canvas.height = maxHeight;
                    ctx.drawImage(image, 0, 0, maxWidth, maxHeight);

                    const resizedIconImg = canvas.toDataURL('image/png');
                    photo.style.backgroundImage = `url(${resizedIconImg})`;
                };
            });
        }
    });
};

const criarConta = () => {
    document.querySelectorAll('.error-message').forEach(element => element.remove());

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const senhaDnv = document.getElementById('confirma-senha').value;
    const telefone = document.getElementById('telefone').value;

    if (nome === "") {
        displayErrorMessage('nome', 'Preencha o campo Nome.');
    }

    if (email === "" || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        displayErrorMessage('email', 'Email inválido. Certifique-se de incluir o @.');
    }

    if (senha === "") {
        displayErrorMessage('senha', 'Preencha o campo Senha.');
    }

    if (senhaDnv === "") {
        displayErrorMessage('confirma-senha', 'Preencha o campo Confirmação de Senha.');
    }

    if (telefone === "") {
        displayErrorMessage('telefone', 'Preencha o campo Telefone.');
    }

    if (senha !== senhaDnv) {
        displayErrorMessage('confirma-senha', 'Senhas diferentes.');
    }

    if (document.querySelectorAll('.error-message').length === 0) {
        const conta = { nome, email, senha, telefone };
        const contasCadastradas = JSON.parse(localStorage.getItem('contas')) || [];
        contasCadastradas.push(conta);
        localStorage.setItem('contas', JSON.stringify(contasCadastradas));

        alert("Conta criada com sucesso!!");
        window.location.assign("../login/login.html"); 
    }
};


const urlParams = new URLSearchParams(window.location.search);
const contaCriadaParam = urlParams.get('contaCriada');

if (contaCriadaParam === 'true') {
    alert("Conta criada com sucesso! Faça o login agora.");
}

const displayErrorMessage = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    field.parentNode.appendChild(errorMessage);
};

mudarPerfil();
criar.addEventListener('click', criarConta);