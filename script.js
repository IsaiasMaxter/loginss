const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === "isaias" && pass === "2017") {
    message.style.color = "green";
    message.textContent = "Login realizado com sucesso!";
  } else {
    message.style.color = "red";
    message.textContent = "Usuário ou senha incorretos.";
  }
});
