const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const status = document.getElementById("mensagemStatus");

  if(nome === "" || email === "" || mensagem === "") {

    status.innerText = "Preencha todos os campos.";
    status.style.color = "red";

    return;
  }

  if(!email.includes("@")) {

    status.innerText = "Digite um e-mail válido.";
    status.style.color = "red";

    return;
  }

  status.innerText = "Mensagem enviada com sucesso!";
  status.style.color = "green";

  form.reset();

});