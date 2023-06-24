var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var loginButton = document.getElementById('loginButton');
var loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', handleSubmit);
loginForm.addEventListener('input', handleInput);

function handleInput() {
    if (emailInput.value.trim() !== '' && passwordInput.value.trim().length >= 8) {
        loginButton.classList.add('green');
    } else {
        loginButton.classList.remove('green');
    }
}

function handleSubmit(event) {
    if (!loginButton.classList.contains('green')) {
        event.preventDefault();
    }
}

var currentPosition = 0;
var positions = [-150, 0, 150, 0]; // Posições para o botão: esquerda, direita, centro
var currentPositionIndex = 0; // Índice da posição atual

loginButton.addEventListener('click', moveButton);

function moveButton() {
    if (loginButton.classList.contains('green')) {
        return; // Se o botão estiver verde, interrompe o movimento
    }

    currentPosition = positions[currentPositionIndex];
    currentPositionIndex = (currentPositionIndex + 1) % positions.length; // Avança para a próxima posição

    loginButton.style.transform = 'translateX(' + currentPosition + 'px)';
}
