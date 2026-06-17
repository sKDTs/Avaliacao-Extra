# 🐾 PetLife - Sistema de Agendamento para Pets

![PetLife Banner](https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop)

## 📋 Sobre o Projeto

A **PetLife** é uma plataforma web desenvolvida para facilitar o agendamento de serviços para pets, como banho e tosa e consultas veterinárias. O sistema oferece uma interface amigável e intuitiva para que os tutores possam agendar atendimentos de forma rápida e eficiente.

### ✨ Funcionalidades

- ✅ **Cards interativos** para seleção de serviços
- ✅ **Sistema de agendamento** com calendário visual
- ✅ **Validação de formulário** em tempo real
- ✅ **Registro automático** no console do navegador
- ✅ **Design responsivo** para todos dispositivos
- ✅ **Animações suaves** e feedback visual
- ✅ **Informações de contato** da empresa

### 🎯 Serviços Oferecidos

1. **🐕 Banho e Tosa** - Higiene completa com produtos de qualidade
2. **🩺 Consultas Veterinárias** - Atendimento especializado
3. **🛍️ Produtos** - Rações, brinquedos e acessórios

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e animações
- **JavaScript** - Lógica de validação e agendamento
- **Flatpickr** - Biblioteca de calendário
- **Google Fonts** - Fontes personalizadas (Poppins)

## 📁 Estrutura do Projeto
projeto-petlife/
│
├── index.html # Página principal
├── style.css # Estilos da aplicação
├── script.js # Lógica e validações
└── README.md # Documentação do projeto

## 💻 Como Executar o Projeto

### Método 1: Localmente

1. **Baixe os arquivos** do projeto
2. **Extraia** o arquivo ZIP
3. **Abra o arquivo** `index.html` no seu navegador
4. **Pressione F12** para abrir o console e ver os registros

### Método 2: Servidor Local

Se preferir usar um servidor local:

bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx serve

# Usando Live Server (VS Code)
# Instale a extensão Live Server e clique em "Go Live"

 Como Usar
Para Agendar um Serviço:
Clique no card do serviço desejado (Banho e Tosa ou Consultas)

Preencha o formulário com:

📅 Data do agendamento

⏰ Horário preferencial

🐾 Nome do seu pet

👤 Seu nome

📧 Seu e-mail

💬 Mensagem (opcional)

Clique em "Confirmar Agendamento"

Aguarde a confirmação na tela

Verifique o console (F12) para ver o registro completo

Regras de Validação:
Nome do tutor: Mínimo 3 caracteres

E-mail: Mínimo 5 caracteres + formato válido (ex: nome@email.com)

Mensagem: Máximo 256 caracteres

Data: Apenas dias úteis (segunda a sábado)

Horário: 08:00 às 17:00

🎨 Personalização
Alterar Cores Principais:
No arquivo style.css, modifique as variáveis de cor:

.hero {
  background: linear-gradient(135deg, #ff914d, #ffbd59);
  /* Altere as cores do gradiente */
}

.btn, button {
  background: #ff914d;
  /* Altere a cor dos botões */
}

Alterar Informações de Contato:
No arquivo index.html, encontre a seção:

<div class="contact-info">
  <div class="contact-item">
    <span class="contact-icon">📞</span>
    <div>
      <strong>Telefone:</strong>
      <a href="tel:+5548999999999">(48) 9 9999-9999</a>
    </div>
  </div>
  <!-- Altere o telefone e e-mail aqui -->
</div>

Verificando Agendamentos
Os agendamentos são registrados no Console do Navegador:

Pressione F12 ou Ctrl+Shift+I

Vá para a aba "Console"

Realize um agendamento

Veja os dados formatados com cores e separadores

Exemplo de saída no console:

═══════════════════════════════════════════════════════════
📋 NOVO AGENDAMENTO REALIZADO
═══════════════════════════════════════════════════════════
🐾 Serviço: Banho e Tosa
📅 Data: 15/01/2026
⏰ Horário: 14:00
🐶 Nome do Pet: Rex
👤 Nome do Cliente: João Silva
📧 E-mail: joao@email.com
💬 Mensagem: Meu pet precisa de banho especial
═══════════════════════════════════════════════════════════

 Responsividade
O sistema é totalmente responsivo e se adapta a diferentes tamanhos de tela:

Desktop: Layout completo com cards lado a lado

Tablet: Ajuste do grid e espaçamentos

Mobile: Layout em coluna única e menu oculto

🛠️ Suporte a Navegadores
Navegador	Versão	Status
Chrome	90+	✅
Firefox	88+	✅
Edge	90+	✅
Safari	14+	✅
Opera	76+	✅
🐛 Solução de Problemas
Problema: Calendário não abre
Solução: Verifique sua conexão com a internet (bibliotecas CDN)

Verifique se as bibliotecas do Flatpickr foram carregadas

Problema: Estilos não aplicados
Solução: Verifique se o arquivo style.css está na mesma pasta

Confirme o link no <head> do HTML

Problema: Agendamento não confirma
Solução: Abra o console (F12) para ver erros de JavaScript

Verifique se todos os campos obrigatórios foram preenchidos

🔄 Como Contribuir
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/nova-feature)

Commit suas alterações (git commit -m 'Adiciona nova feature')

Push para a branch (git push origin feature/nova-feature)

Abra um Pull Request

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

📞 Contato
Para dúvidas ou sugestões:

Telefone: (48) 9 9999-9999

E-mail: petlife@petlife.com

Site: PetLife

🙏 Agradecimentos
Unsplash - Imagens utilizadas no projeto

Flatpickr - Biblioteca de calendário

Google Fonts - Família tipográfica Poppins
