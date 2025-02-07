document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'visible' quando o elemento entra na visão
          entry.target.classList.add('visible');
        } else {
          // Remove a classe 'visible' quando o elemento sai da visão
          entry.target.classList.remove('visible');
        }
      });
    });

    // Seleciona todas as divs animadas
    const animatedElements = document.querySelectorAll('.animate-from-bottom, .animate-from-left, .animate-from-right');
    animatedElements.forEach(element => observer.observe(element));
  });

  