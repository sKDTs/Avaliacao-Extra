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

  // CAMPOS OBRIGATÓRIOS
  if (name === "" || email === "" || message === "") {

    alert("Todos os campos são obrigatórios");

    status.innerText =
      "Todos os campos são obrigatórios.";

    status.style.color = "red";

    return false;
  }

  // NOME
  if (name.length < 3) {

    alert("O nome deve ter no mínimo 3 caracteres");

    status.innerText =
      "O nome deve ter no mínimo 3 caracteres.";

    status.style.color = "red";

    return false;
  }

  // NOME MÁXIMO
  if (name.length > 10) {

    alert("O nome deve ter no máximo 10 caracteres");

    status.innerText =
      "O nome deve ter no máximo 10 caracteres.";

    status.style.color = "red";

    return false;
  }

  // EMAIL
  if (email.length < 5 || email.length > 100) {

    alert("O email deve conter entre 5 e 100 caracteres");

    status.innerText =
      "O email deve conter entre 5 e 100 caracteres.";

    status.style.color = "red";

    return false;
  }

  // REGEX EMAIL
  const emailPatern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPatern.test(email)) {

    alert("Por favor, insira um email válido");

    status.innerText =
      "Por favor, insira um email válido.";

    status.style.color = "red";

    return false;
  }

  // MENSAGEM VAZIA
  if (message.length === 0) {

    alert("A mensagem é obrigatória");

    status.innerText =
      "A mensagem é obrigatória.";

    status.style.color = "red";

    return false;
  }

  // MENSAGEM MÁXIMA
  if (message.length > 265) {

    alert("A mensagem deve ter no máximo 265 caracteres");

    status.innerText =
      "A mensagem deve ter no máximo 265 caracteres.";

    status.style.color = "red";

    return false;
  }

  // SUCESSO
  alert("Formulário enviado com sucesso!");

  status.innerText =
    "Mensagem enviada com sucesso!";

  status.style.color = "green";

  form.reset();

  return true;
}