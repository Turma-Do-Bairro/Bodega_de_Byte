// Função de callback que será executada quando um cartão entrar na viewport
function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scrolled');
    } else {
      entry.target.classList.remove('scrolled');
    }
  });
}

// Opções para o IntersectionObserver
const options = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.1 // o cartão é considerado "visível" quando 10% dele está na viewport
};

// Criar um novo IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, options);

// Selecionar todos os cartões e observá-los
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  observer.observe(card);
});
