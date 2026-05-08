const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  validateForm();
});

function validateForm() {
  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  const status = document.getElementById("mensagemStatus");

  // NOME
  if (name.length < 3) {
    alert("O nome deve ter no mínimo 3 caracteres");

    status.innerText = "O nome deve ter no mínimo 3 caracteres.";

    status.style.color = "red";

    return false;
  }

  // EMAIL
  if (email.length < 5) {
    alert("O email deve ter no mínimo 5 caracteres");

    status.innerText = "O email deve ter no mínimo 5 caracteres.";

    status.style.color = "red";

    return false;
  }

  // REGEX EMAIL
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(email)) {
    alert("Digite um email válido");

    status.innerText = "Digite um email válido.";

    status.style.color = "red";

    return false;
  }

  // MENSAGEM MÍNIMA
  if (message.length < 3) {
    alert("A mensagem deve ter no mínimo 3 caracteres");

    status.innerText = "A mensagem deve ter no mínimo 3 caracteres.";

    status.style.color = "red";

    return false;
  }

  // MENSAGEM MÁXIMA
  if (message.length > 265) {
    alert("A mensagem deve ter no máximo 265 caracteres");

    status.innerText = "A mensagem deve ter no máximo 265 caracteres.";

    status.style.color = "red";

    return false;
  }

  // SUCESSO
  alert("Formulário enviado com sucesso!");

  status.innerText = "Mensagem enviada com sucesso!";

  status.style.color = "green";

  form.reset();

  return true;
}
