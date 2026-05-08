// CÓDIGO JAVASCRIPT PARA VALIDAÇÃO DO FORMULÁRIO
    const form = document.getElementById("contactForm");
    const status = document.getElementById("mensagemStatus");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Pegando os valores e removendo espaços extras
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // VALIDAÇÃO DO NOME: mínimo 3 caracteres
      if (name.length < 3) {
        alert("❌ O nome deve ter no mínimo 3 caracteres");
        status.innerText = "❌ O nome deve ter no mínimo 3 caracteres.";
        status.style.color = "red";
        status.style.fontWeight = "500";
        status.style.marginTop = "15px";
        return false;
      }

      // VALIDAÇÃO DO EMAIL: mínimo 15 caracteres
      if (email.length < 15) {
        alert("❌ O email deve ter no mínimo 15 caracteres");
        status.innerText = "❌ O email deve ter no mínimo 15 caracteres.";
        status.style.color = "red";
        status.style.fontWeight = "500";
        status.style.marginTop = "15px";
        return false;
      }

      // VALIDAÇÃO DO FORMATO DO EMAIL
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("❌ Digite um email válido (exemplo: nome@email.com)");
        status.innerText = "❌ Digite um email válido (exemplo: nome@email.com)";
        status.style.color = "red";
        status.style.fontWeight = "500";
        status.style.marginTop = "15px";
        return false;
      }

      // VALIDAÇÃO DA MENSAGEM: máximo 256 caracteres
      if (message.length > 256) {
        alert("❌ A mensagem deve ter no máximo 256 caracteres");
        status.innerText = "❌ A mensagem deve ter no máximo 256 caracteres. Você usou " + message.length + " caracteres.";
        status.style.color = "red";
        status.style.fontWeight = "500";
        status.style.marginTop = "15px";
        return false;
      }

      // VALIDAÇÃO DA MENSAGEM: não pode estar vazia
      if (message.length === 0) {
        alert("❌ A mensagem é obrigatória");
        status.innerText = "❌ A mensagem é obrigatória.";
        status.style.color = "red";
        status.style.fontWeight = "500";
        status.style.marginTop = "15px";
        return false;
      }

      // SUCESSO - Todas as validações passaram
      alert("✅ Formulário enviado com sucesso!");
      status.innerText = "✅ Mensagem enviada com sucesso! Entraremos em contato em breve.";
      status.style.color = "green";
      status.style.fontWeight = "500";
      status.style.marginTop = "15px";
      
      // Resetar o formulário
      form.reset();
      
      return true;
    });