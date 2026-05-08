const form = document.getElementById("contactForm");
const status = document.getElementById("mensagemStatus");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // NOME: mínimo 3 caracteres
  if (name.length < 3) {
    alert("O nome deve ter no mínimo 3 caracteres");
    status.innerText = "O nome deve ter no mínimo 3 caracteres.";
    status.style.color = "red";
    return false;
  }

  // NOME: máximo (adicionei para consistência, mas não era obrigatório)
  if (name.length > 50) {
    alert("O nome deve ter no máximo 50 caracteres");
    status.innerText = "O nome deve ter no máximo 50 caracteres.";
    status.style.color = "red";
    return false;
  }

  // EMAIL: mínimo 5 caracteres
  if (email.length < 5) {
    alert("O email deve ter no mínimo 5 caracteres");
    status.innerText = "O email deve ter no mínimo 5 caracteres.";
    status.style.color = "red";
    return false;
  }

  // EMAIL: máximo 100 caracteres
  if (email.length > 100) {
    alert("O email deve ter no máximo 100 caracteres");
    status.innerText = "O email deve ter no máximo 100 caracteres.";
    status.style.color = "red";
    return false;
  }

  // EMAIL VÁLIDO (formato correto)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Digite um email válido");
    status.innerText = "Digite um email válido.";
    status.style.color = "red";
    return false;
  }

  // MENSAGEM: máximo 256 caracteres
  if (message.length > 256) {
    alert("A mensagem deve ter no máximo 256 caracteres");
    status.innerText = "A mensagem deve ter no máximo 256 caracteres.";
    status.style.color = "red";
    return false;
  }

  // MENSAGEM: mínimo 1 caracter (não pode estar vazia)
  if (message.length === 0) {
    alert("A mensagem é obrigatória");
    status.innerText = "A mensagem é obrigatória.";
    status.style.color = "red";
    return false;
  }

  // SUCESSO - só chega aqui se todas as validações passarem
  alert("Formulário enviado com sucesso!");
  status.innerText = "Mensagem enviada com sucesso!";
  status.style.color = "green";
  form.reset();
  
  return true;
});