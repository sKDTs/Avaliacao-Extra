// CÓDIGO JAVASCRIPT PARA OS CARDS CLICÁVEIS E CALENDÁRIO
let calendario = null;
let servicoAtual = '';

// Função para exibir dados no console com formatação
function exibirNoConsole(tipo, dados) {
  console.log('%c═══════════════════════════════════════════════════════════', 'color: #ff914d; font-weight: bold;');
  console.log(`%c📋 ${tipo}`, 'color: #4CAF50; font-size: 14px; font-weight: bold;');
  console.log('%c═══════════════════════════════════════════════════════════', 'color: #ff914d; font-weight: bold;');
  
  for (const [chave, valor] of Object.entries(dados)) {
    console.log(`%c${chave}:`, 'color: #ff914d; font-weight: bold;', valor);
  }
  
  console.log('%c═══════════════════════════════════════════════════════════', 'color: #ff914d; font-weight: bold;');
  console.log(`%c📅 Data/Hora: ${new Date().toLocaleString('pt-BR')}`, 'color: #666;');
  console.log('%c═══════════════════════════════════════════════════════════\n', 'color: #ff914d; font-weight: bold;');
}

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

  console.log('%c🐾 Site PetLife Carregado com Sucesso!', 'color: #4CAF50; font-size: 16px; font-weight: bold;');
  console.log('%c💡 Dica: Abra o console (F12) para ver os registros de agendamentos!\n', 'color: #ff914d; font-size: 12px;');

  // Função para abrir o modal
  function abrirModal(servico) {
    servicoAtual = servico;
    servicoSelecionadoSpan.innerHTML = `<strong>Serviço selecionado:</strong> ${servico}`;
    modal.style.display = 'block';
    
    console.log(`%c📌 Modal Aberto - Serviço: ${servico}`, 'color: #2196F3; font-weight: bold;');
    
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
          console.log(`%c📅 Data selecionada: ${dateStr}`, 'color: #2196F3;');
        }
      });
    }
  }

  // Função para fechar o modal
  function fecharModal() {
    modal.style.display = 'none';
    console.log('%c🚪 Modal Fechado', 'color: #FF5722; font-weight: bold;');
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
      console.log('%c❌ Erro: Data não selecionada', 'color: #f44336; font-weight: bold;');
      return false;
    }
    
    if (!horario) {
      alert('❌ Por favor, selecione um horário para o agendamento.');
      console.log('%c❌ Erro: Horário não selecionado', 'color: #f44336; font-weight: bold;');
      return false;
    }
    
    if (!nomePet) {
      alert('❌ Por favor, digite o nome do seu pet.');
      console.log('%c❌ Erro: Nome do pet não informado', 'color: #f44336; font-weight: bold;');
      return false;
    }
    
    if (!nome) {
      alert('❌ Por favor, digite seu nome.');
      console.log('%c❌ Erro: Nome do cliente não informado', 'color: #f44336; font-weight: bold;');
      return false;
    }
    
    if (nome.length < 3) {
      alert('❌ Seu nome deve ter no mínimo 3 caracteres.');
      console.log(`%c❌ Erro: Nome muito curto (${nome.length} caracteres)`, 'color: #f44336; font-weight: bold;');
      return false;
    }
    
    if (!email) {
      alert('❌ Por favor, digite seu e-mail.');
      console.log('%c❌ Erro: E-mail não informado', 'color: #f44336; font-weight: bold;');
      return false;
    }
    
    if (email.length < 5) {
      alert('❌ Seu e-mail deve ter no mínimo 5 caracteres.');
      console.log(`%c❌ Erro: E-mail muito curto (${email.length} caracteres)`, 'color: #f44336; font-weight: bold;');
      return false;
    }
    
    // Validação do formato do email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('❌ Digite um e-mail válido (exemplo: nome@email.com)');
      console.log(`%c❌ Erro: E-mail inválido (${email})`, 'color: #f44336; font-weight: bold;');
      return false;
    }
    
    // Validação da mensagem (máximo 256 caracteres)
    if (message.length > 256) {
      alert(`❌ A mensagem deve ter no máximo 256 caracteres. Você usou ${message.length} caracteres.`);
      console.log(`%c❌ Erro: Mensagem muito longa (${message.length} caracteres)`, 'color: #f44336; font-weight: bold;');
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
        
        // Preparar dados do agendamento
        const dadosAgendamento = {
          '🐾 Serviço': servicoAtual,
          '📅 Data': data,
          '⏰ Horário': horario,
          '🐶 Nome do Pet': nomePet,
          '👤 Nome do Cliente': nome,
          '📧 E-mail': email,
          '💬 Mensagem': message || '(nenhuma mensagem)',
          '📱 Telefone Contato': '(48) 9 9999-9999'
        };
        
        // Exibir no console
        exibirNoConsole('NOVO AGENDAMENTO REALIZADO', dadosAgendamento);
        
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
        
        mensagemSucesso += `\n📝 Agendamento registrado no console do navegador!`;
        mensagemSucesso += `\n💡 Pressione F12 para ver os detalhes.`;
        
        alert(mensagemSucesso);
        
        // Fechar modal
        fecharModal();
        
        // Rolar para a seção de contato
        document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});