// CÓDIGO JAVASCRIPT PARA OS CARDS CLICÁVEIS E CALENDÁRIO
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
  const nomeInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

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
    if (nomeInput) nomeInput.value = '';
    if (emailInput) emailInput.value = '';
    if (messageInput) messageInput.value = '';
    
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

  // Função para validar o agendamento completo
  function validarAgendamentoCompleto() {
    const data = dataInput.value;
    const horario = horarioSelect.value;
    const nomePet = nomePetInput.value.trim();
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validações
    if (!data) {
      alert('❌ Por favor, selecione uma data para o agendamento.');
      return false;
    }
    
    if (!horario) {
      alert('❌ Por favor, selecione um horário para o agendamento.');
      return false;
    }
    
    if (!nomePet) {
      alert('❌ Por favor, digite o nome do seu pet.');
      return false;
    }
    
    if (!nome) {
      alert('❌ Por favor, digite seu nome.');
      return false;
    }
    
    if (nome.length < 3) {
      alert('❌ Seu nome deve ter no mínimo 3 caracteres.');
      return false;
    }
    
    if (!email) {
      alert('❌ Por favor, digite seu e-mail.');
      return false;
    }
    
    if (email.length < 5) {
      alert('❌ Seu e-mail deve ter no mínimo 5 caracteres.');
      return false;
    }
    
    // Validação do formato do email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('❌ Digite um e-mail válido (exemplo: nome@email.com)');
      return false;
    }
    
    // Validação da mensagem (máximo 256 caracteres)
    if (message.length > 256) {
      alert(`❌ A mensagem deve ter no máximo 256 caracteres. Você usou ${message.length} caracteres.`);
      return false;
    }
    
    return true;
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
      if (validarAgendamentoCompleto()) {
        const data = dataInput.value;
        const horario = horarioSelect.value;
        const nomePet = nomePetInput.value.trim();
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        // Sucesso no agendamento
        let mensagemSucesso = `✅ Agendamento confirmado!\n\n`;
        mensagemSucesso += `🐾 Serviço: ${servicoAtual}\n`;
        mensagemSucesso += `📅 Data: ${data}\n`;
        mensagemSucesso += `⏰ Horário: ${horario}\n`;
        mensagemSucesso += `🐶 Pet: ${nomePet}\n`;
        mensagemSucesso += `👤 Cliente: ${nome}\n`;
        mensagemSucesso += `📧 E-mail: ${email}\n`;
        
        if (message) {
          mensagemSucesso += `💬 Mensagem: ${message}\n`;
        }
        
        mensagemSucesso += `\nEm breve você receberá a confirmação por e-mail!`;
        
        alert(mensagemSucesso);
        
        // Fechar modal
        fecharModal();
        
        // Rolar para a seção de contato
        document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});