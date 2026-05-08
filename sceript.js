function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validação do nome
  if(nome.length < 3) {

    status.innerText = "O nome deve ter no mínimo 3 caracteres.";
    status.style.color = "red";

    return;
  }

  // Validação do email
  if(email.length < 5 || !email.includes("@")) {

    status.innerText = "Digite um e-mail válido.";
    status.style.color = "red";

    return;
  }

  // Mensagem obrigatória
  if(mensagem.length === 0) {

    status.innerText = "A mensagem é obrigatória.";
    status.style.color = "red";

    return;
  }

  // Limite máximo da mensagem
  if(mensagem.length > 265) {

    status.innerText = "A mensagem deve ter no máximo 265 caracteres.";
    status.style.color = "red";

    return;
  }

  // Sucesso
  status.innerText = "Mensagem enviada com sucesso!";
  status.style.color = "green";

  form.reset();

};