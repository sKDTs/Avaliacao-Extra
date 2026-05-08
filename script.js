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

  // VALIDAÇÃO DO EMAIL: mínimo 5 caracteres (corrigido de 15 para 5)
  if (email.length < 5) {
    alert("❌ O email deve ter no mínimo 5 caracteres");
    status.innerText = "❌ O email deve ter no mínimo 5 caracteres.";
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

// CÓDIGO PARA OS CARDS CLICÁVEIS E CALENDÁRIO
let calendario = null;
let servicoAtual = '';

// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todos os cards clicáveis
  const clickableCards = document.querySelectorAll('.clickable-card');
  const modal = document.getElementById('agendamentoModal');
  const closeModal = document.querySelector('.close-modal');
  const servicoSelecionadoSpan = document.getElementById('servicoSelecionado');
  const confirmarBtn = document.getElementById('confirmarAgendamento');
  const dataInput = document.getElementById('dataAgendamento');
  const horarioSelect = document.getElementById('horarioAgendamento');
  const nomePetInput = document.getElementById('nomePet');

  // Função para abrir o modal
  function abrirModal(servico) {
    servicoAtual = servico;
    servicoSelecionadoSpan.innerHTML = `<strong>Serviço selecionado:</strong> ${servico}`;
    modal.style.display = 'block';
    
    // Resetar campos
    if (calendario) {
      calendario.clear();
    }
    horarioSelect.value = '';
    nomePetInput.value = '';
    
    // Inicializar o calendário se não existir
    if (!calendario) {
      calendario = flatpickr(dataInput, {
        locale: 'pt',
        minDate: 'today',
        dateFormat: 'd/m/Y',
        disable: [
          function(date) {
            // Desabilitar domingos
            return date.getDay() === 0;
          }
        ],
        onChange: function(selectedDates, dateStr, instance) {
          console.log('Data selecionada:', dateStr);
        }
      });
    }
  }

  // Função para fechar o modal
  function fecharModal() {
    modal.style.display = 'none';
  }

  // Adicionar evento de clique nos cards
  if (clickableCards) {
    clickableCards.forEach(card => {
      card.addEventListener('click', function() {
        const servico = this.getAttribute('data-servico');
        abrirModal(servico);
      });
    });
  }

  // Fechar modal ao clicar no X
  if (closeModal) {
    closeModal.addEventListener('click', fecharModal);
  }

  // Fechar modal ao clicar fora do conteúdo
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      fecharModal();
    }
  });

  // Confirmar agendamento
  if (confirmarBtn) {
    confirmarBtn.addEventListener('click', function() {
      const data = dataInput.value;
      const horario = horarioSelect.value;
      const nomePet = nomePetInput.value.trim();
      
      if (!data) {
        alert('❌ Por favor, selecione uma data para o agendamento.');
        return;
      }
      
      if (!horario) {
        alert('❌ Por favor, selecione um horário para o agendamento.');
        return;
      }
      
      if (!nomePet) {
        alert('❌ Por favor, digite o nome do seu pet.');
        return;
      }
      
      // Sucesso no agendamento
      alert(`✅ Agendamento confirmado!\n\n🐾 Serviço: ${servicoAtual}\n📅 Data: ${data}\n⏰ Horário: ${horario}\n🐶 Pet: ${nomePet}\n\nEm breve você receberá a confirmação por e-mail!`);
      
      // Fechar modal
      fecharModal();
      
      // Rolar para a seção de contato
      document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    });
  }
});