function validateForm() {

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const status = document.getElementById("mensagemStatus");

  // Campos obrigatórios
  if (name === "" || email === "" || message === "") {

    alert("Todos os campos são obrigatórios");

    status.innerText =
      "Todos os campos são obrigatórios.";

    status.style.color = "red";

    return false;
  }

  // Nome entre 3 e 10 caracteres
  if (name.length < 3 || name.length > 10) {

    alert("O nome deve conter entre 3 e 10 caracteres");

    status.innerText =
      "O nome deve conter entre 3 e 10 caracteres.";

    status.style.color = "red";

    return false;
  }

  // Email entre 5 e 100 caracteres
  if (email.length < 5 || email.length > 100) {

    alert("O email deve conter entre 5 e 100 caracteres");

    status.innerText =
      "O email deve conter entre 5 e 100 caracteres.";

    status.style.color = "red";

    return false;
  }

  // Regex email
  const emailPatern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPatern.test(email)) {

    alert("Por favor, insira um email válido");

    status.innerText =
      "Por favor, insira um email válido.";

    status.style.color = "red";

    return false;
  }

  // Mensagem obrigatória
  if (message.length === 0) {

    alert("A mensagem é obrigatória");

    status.innerText =
      "A mensagem é obrigatória.";

    status.style.color = "red";

    return false;
  }

  // Mensagem máxima
  if (message.length > 265) {

    alert("A mensagem deve ter no máximo 265 caracteres");

    status.innerText =
      "A mensagem deve ter no máximo 265 caracteres.";

    status.style.color = "red";

    return false;
  }

  // Sucesso
  alert("Formulário enviado com sucesso!");

  status.innerText =
    "Mensagem enviada com sucesso!";

  status.style.color = "green";

  document.getElementById("contactForm").reset();

  return true;
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    validateForm();

  });