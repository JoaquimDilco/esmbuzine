// Função para navegação suave entre seções
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Rolagem suave até a seção
      window.scrollTo({
          top: targetElement.offsetTop - 50,  // Ajusta para ver o título da seção
          behavior: 'smooth'
      });
  });
});

// Função de validação do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Valida se os campos estão preenchidos
  if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  if (!validateEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
  }

  alert('Formulário enviado com sucesso!');
});

// Função para validar formato de e-mail
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
